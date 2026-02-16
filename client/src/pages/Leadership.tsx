import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import { X } from "lucide-react";

const leaders = [
  {
    name: "Placeholder Name",
    title: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    bio: "Bio coming soon."
  },
  {
    name: "Placeholder Name",
    title: "Chief Operating Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    bio: "Bio coming soon."
  },
  {
    name: "Placeholder Name",
    title: "Chief Financial Officer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    bio: "Bio coming soon."
  },
  {
    name: "Placeholder Name",
    title: "Vice President, Operations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    bio: "Bio coming soon."
  },
  {
    name: "Placeholder Name",
    title: "Vice President, Business Development",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    bio: "Bio coming soon."
  },
  {
    name: "Placeholder Name",
    title: "Director of Logistics",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    bio: "Bio coming soon."
  }
];

export default function Leadership() {
  const [selectedLeader, setSelectedLeader] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1501466044931-62695aada8e9?q=80&w=2000&auto=format&fit=crop"
          alt="Capitol Building"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center px-6 py-16 md:py-24">
        <div className="max-w-6xl w-full">
          <Link href="/" data-testid="link-home-nav">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white/70 hover:text-white text-sm mb-8 cursor-pointer inline-block"
            >
              &larr; Back to Home
            </motion.div>
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 tracking-tight"
          >
            LEADERSHIP
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-lg md:text-xl mb-16 max-w-3xl"
          >
            The experienced professionals driving G&E Industrial Supplies' mission to deliver turnkey solutions for global readiness.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex flex-col items-center text-center"
                data-testid={`card-leader-${index}`}
              >
                <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden mb-6 border-4 border-white/10 bg-slate-700">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-white font-display font-bold text-xl md:text-2xl mb-1" data-testid={`text-leader-name-${index}`}>
                  {leader.name}
                </h3>
                <p className="text-white/50 text-sm md:text-base mb-4" data-testid={`text-leader-title-${index}`}>
                  {leader.title}
                </p>

                <button
                  onClick={() => setSelectedLeader(index)}
                  className="border border-white/40 text-white/80 hover:text-white hover:border-white px-6 py-2 text-xs tracking-widest font-semibold transition-colors duration-200"
                  data-testid={`button-read-more-${index}`}
                >
                  READ MORE
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {selectedLeader !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          onClick={() => setSelectedLeader(null)}
          data-testid="modal-leader-bio"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="bg-slate-800 border border-white/10 rounded-md max-w-lg w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-4 right-4 text-white/50 hover:text-white"
              data-testid="button-close-modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-5 border-2 border-white/10">
                <img
                  src={leaders[selectedLeader].image}
                  alt={leaders[selectedLeader].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white font-display font-bold text-2xl mb-1">
                {leaders[selectedLeader].name}
              </h3>
              <p className="text-white/50 text-sm mb-6">
                {leaders[selectedLeader].title}
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                {leaders[selectedLeader].bio}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
