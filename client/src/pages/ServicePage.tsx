import { motion } from "framer-motion";
import { useRoute } from "wouter";

interface ServiceData {
  id: string;
  title: string[];
  description: string;
  backgroundImage: string;
  project?: {
    title: string;
    client: string;
    value: string;
    details: string;
  };
  competencies?: string[];
}

const servicesData: Record<string, ServiceData> = {
  "facility-maintenance": {
    id: "facility-maintenance",
    title: ["Facility", "Maintenance"],
    description: "This is a primary pillar of their business, specifically under the LOGCAP V contract. They provide comprehensive \"base ops\" and life support, including plumbing and HVAC, as well as technical inspections and mechanical systems maintenance for military installations.",
    backgroundImage: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2000&auto=format&fit=crop",
    project: {
      title: "Base Ops and Life Support, Qatar and Kuwait (LOGCAP V)",
      client: "Vectrus Systems Corporation",
      value: "$23.4M",
      details: "Multi-trade base support: inspections, repairs, HVAC, water and wastewater, custodial service, sanitation, equipment leasing, fuel facility support, and security and site infrastructure."
    }
  },
  "global-logistics": {
    id: "global-logistics",
    title: ["Global", "Logistics"],
    description: "We serve as a specialized merchant wholesaler, sourcing and delivering industrial machinery, commercial equipment, and specialty chemicals. Their reach is notably global, with a focus on the U.S., Mexico, and the Middle East (specifically Qatar and Kuwait).",
    backgroundImage: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2000&auto=format&fit=crop",
    competencies: [
      "Strategic Global Reach: Active operational presence in the U.S. and the Middle East, for USACE-Med and AFCENT operations.",
      "Wholesale & Procurement Expertise: Specialized merchant wholesaler for industrial supplies, commercial equipment, and plumbing/heating machinery (NAICS 423840, 423440, 423720).",
      "Defense Logistics Integration: Over 40 task orders successfully executed under LOGCAP, providing recurring supplies for facility maintenance and aircraft support.",
      "Compliance & Scale: JCCS approval for Middle East operations and ISO 9001 certified quality management. Supported by a $100M aggregate bonding capacity to ensure seamless deployment for large-scale international contracts."
    ]
  },
  "environmental-management": {
    id: "environmental-management",
    title: ["Environmental", "Management"],
    description: "G&E Industrial Supplies, Inc. provides comprehensive environmental and facility support solutions, specializing in sustainable waste elimination and mission-critical utility management for federal and international installations.",
    backgroundImage: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=2000&auto=format&fit=crop",
    competencies: [
      "Waste Collection & Treatment: Dedicated focus on hazardous and non-hazardous waste collection, including specialized sewage tanker operations.",
      "Sustainable Programs: Implementation of sustainable waste elimination programs engineered to meet rigorous federal environmental standards.",
      "Utility Oversight: Expertise in mission-critical utility management to ensure operational readiness at international military installations.",
      "Compliance & Reliability: JCCS approval for Middle East operations and ISO 9001 certified quality management."
    ]
  },
  "construction-services": {
    id: "construction-services",
    title: ["Construction", "Services"],
    description: "G&E handles diverse, large-scale infrastructure projects, delivering turnkey engineering solutions that enhance operational readiness for federal and local agencies.",
    backgroundImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop",
    competencies: [
      "Facility Upgrades: Execution of diverse renovations, including medical air system improvements and modern facility upgrades.",
      "Specialized Construction: High-stakes performance in roofing services and airfield maintenance and emergency repairs.",
      "Engineering Support: Professional oversight for civil and electrical construction supervision to ensure total project compliance.",
      "Bonding Capacity: Supported by $30M single project and $100M aggregate bonding capacity to manage high-value infrastructure contracts."
    ]
  },
  "specialized-equipment": {
    id: "specialized-equipment",
    title: ["Specialized", "Equipment"],
    description: "A core pillar of our defense operations involves the deployment and leasing of heavy machinery and tactical vehicles to support global readiness.",
    backgroundImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop",
    competencies: [
      "Heavy Machinery: Rapid deployment of material handling equipment and heavy vehicles for international construction and defense projects.",
      "Fleet Management: Flexible passenger car leasing programs tailored to meet the mobility needs of government and private-sector clients.",
      "Tactical Support: Supply of specialized items, including jet refueler trucks, trailers, and hazardous containment units for defense clients.",
      "Global Logistics: Integrated logistics and spares support to maintain equipment operationality in remote environments."
    ]
  },
  "professional-solutions": {
    id: "professional-solutions",
    title: ["Professional", "Solutions"],
    description: "We offer \"HR Solutions\" by providing mission-critical technical manpower to government and private-sector partners to enhance business agility and operational oversight.",
    backgroundImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop",
    competencies: [
      "Skilled Manpower Outsourcing: Provision of technically trained staff, including specialized engineers and procurement officers, for long-term contract support.",
      "Leadership & Management: Delivery of experienced managerial and supervisory teams with a 30+ year reputation for reliability and responsive service.",
      "Strategic Staffing: Scalable human resource solutions designed to meet the technical requirements of large-scale federal task orders.",
      "International Expertise: Staffing solutions backed by JCCS approval and experience managing 40+ task orders under LOGCAP."
    ]
  }
};

export default function ServicePage() {
  const [, params] = useRoute("/services/:serviceId");
  const serviceId = params?.serviceId || "";
  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <p className="text-white text-xl">Service not found</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={service.backgroundImage} 
          alt={service.title.join(' ')}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
            
            {/* Left Column - Title and Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight italic mb-8">
                {service.title[0]}<br />
                <span className="text-4xl md:text-5xl lg:text-6xl">{service.title[1]}</span>
              </h1>
              
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 max-w-md">
                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>

            {/* Right Column - Project or Competencies */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {service.project ? (
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {service.project.title}
                    </h2>
                    <p className="text-white/80 text-sm">
                      Client: {service.project.client}
                    </p>
                    <p className="text-white/80 text-sm">
                      Value: {service.project.value}
                    </p>
                  </div>
                  <ul className="text-white/90 text-sm leading-relaxed list-disc list-inside">
                    <li>{service.project.details}</li>
                  </ul>
                </div>
              ) : service.competencies ? (
                <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6">
                  <h2 className="text-xl font-bold text-white mb-4">Core Competencies:</h2>
                  <ul className="space-y-3">
                    {service.competencies.map((comp, idx) => (
                      <li key={idx} className="text-white/90 text-sm leading-relaxed flex gap-2">
                        <span className="text-white mt-1.5">•</span>
                        <span>{comp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
