/**
 * index.ts - Express Server Entry Point
 *
 * Initializes and starts the Express server that serves both
 * the API endpoints and the frontend application.
 *
 * Architecture:
 * - Development: Vite dev server with HMR for frontend
 * - Production: Static files served from dist/public
 * - API routes are registered before the catch-all static handler
 *
 * The server listens on PORT (default 5000), which is the only
 * non-firewalled port in the Replit environment.
 */

import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";

/* Create Express app and HTTP server */
const app = express();
const httpServer = createServer(app);

/* Extend IncomingMessage to support raw body access (used by some middleware) */
declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

/* Parse JSON request bodies, preserving raw body for verification */
app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

/* Parse URL-encoded form data */
app.use(express.urlencoded({ extended: false }));

/**
 * Logging utility
 *
 * Formats log messages with timestamp and source label.
 * Used throughout the server for consistent log output.
 *
 * @param message - The message to log
 * @param source - The source label (default: "express")
 */
export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

/* Request logging middleware - logs API requests with timing and response data */
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  /* Intercept res.json to capture response body for logging */
  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  /* Log API requests on response finish */
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      log(logLine);
    }
  });

  next();
});

/* Server initialization: register routes, error handling, and static serving */
(async () => {
  /* Register API routes */
  await registerRoutes(httpServer, app);

  /* Global error handler */
  app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    console.error("Internal Server Error:", err);

    if (res.headersSent) {
      return next(err);
    }

    return res.status(status).json({ message });
  });

  /* Setup frontend serving based on environment */
  if (process.env.NODE_ENV === "production") {
    /* Production: serve pre-built static files */
    serveStatic(app);
  } else {
    /* Development: use Vite dev server with HMR */
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  /* Start server on configured port (default 5000) */
  const port = parseInt(process.env.PORT || "5000", 10);
  httpServer.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`serving on port ${port}`);
    },
  );
})();
