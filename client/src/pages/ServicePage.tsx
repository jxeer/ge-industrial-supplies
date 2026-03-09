/**
 * ServicePage.tsx - Individual Service Detail Pages
 * 
 * Dynamic page component that renders detailed information for each
 * of the eleven G&E service categories. Each service has its own:
 * - Custom background image relevant to the service
 * - Service title and description
 * - Either a featured project OR list of core competencies
 * 
 * Routes: /services/:serviceId
 * - /services/base-facility-support
 * - /services/global-logistics
 * - /services/waste-management-environmental
 * - /services/construction-services
 * - /services/industrial-supply-distribution
 * - /services/professional-solutions
 * - /services/engineering-services
 * - /services/charter-flight-services
 * - /services/security-services
 * - /services/emergency-response
 * - /services/operational-support
 */

import { motion } from "framer-motion";
import { useRoute } from "wouter";

/**
 * ServiceData Interface
 * 
 * Defines the structure for each service's content and configuration.
 */
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

/**
 * Services Data
 * 
 * Static content for all eleven service pages. Each entry contains
 * the service information, relevant background imagery, and either
 * a featured project or list of core competencies.
 * 
 * Service names aligned with federal contracting terminology.
 */
const servicesData: Record<string, ServiceData> = {
  "base-facility-support": {
    id: "base-facility-support",
    title: ["Base & Facility", "Support"],
    description: "G&E delivers mission-critical installation and operations support that directly enables global DoD readiness objectives. Through successful execution of numerous complex task orders under large prime contractors, G&E has demonstrated a consistent record of excellence, reliability, and superior performance ratings.\n\nOur team brings together in-house engineers, certified Construction Managers (CM), and experienced Program Managers (PM) who ensure disciplined execution, technical oversight, and seamless coordination across all operational functions.\n\nOur Reliability-Centered and Condition-Based Maintenance methodology ensures optimized asset performance while maintaining cost efficiency and compliance with DoD standards.",
    backgroundImage: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2000&auto=format&fit=crop",
    competencies: [
      "Facilities Engineering & Management: Comprehensive facility management and engineering services for military installations and government facilities.",
      "Operations & Maintenance (O&M) Services: Preventive and corrective maintenance programs ensuring sustained operational readiness across critical infrastructure.",
      "Bulk & Retail Fuel / Water Distribution Support: Fuel facility support, water distribution, and utility management for base operations.",
      "Airfield Operations & Ground Support: Ground support equipment maintenance, airfield operations, and aviation support services.",
      "Food Service Operations & Logistics: Dining facility support, food service logistics, and nutrition program management.",
      "Power Generation & Utilities Management: Generator operations, electrical distribution, and utilities infrastructure sustainment.",
      "Emergency & Critical Response Services: Rapid response capabilities for facility emergencies, natural disasters, and mission-critical situations.",
      "Transportation & Fleet Management: Vehicle fleet maintenance, transportation logistics, and motor pool operations.",
      "Physical Security & Installation Support Services: Access control, perimeter security, and installation support operations."
    ]
  },
  "global-logistics": {
    id: "global-logistics",
    title: ["Global", "Logistics"],
    description: "We serve as a specialized merchant wholesaler, sourcing and delivering industrial machinery, commercial equipment, and specialty chemicals. Our reach is notably global, with a focus on the U.S., Mexico, and the Middle East (specifically Qatar and Kuwait).",
    backgroundImage: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2000&auto=format&fit=crop",
    competencies: [
      "Strategic Global Reach: Active operational presence in the U.S. and the Middle East, for USACE-Med and AFCENT operations.",
      "Wholesale & Procurement Expertise: Specialized merchant wholesaler for industrial supplies, commercial equipment, and plumbing/heating machinery (NAICS 423840, 423440, 423720).",
      "Defense Logistics Integration: Over 40 task orders successfully executed under LOGCAP, providing recurring supplies for facility maintenance and aircraft support.",
      "Compliance & Scale: JCCS approval for Middle East operations and ISO 9001 certified quality management. Supported by a $100M aggregate bonding capacity to ensure seamless deployment for large-scale international contracts."
    ]
  },
  "waste-management-environmental": {
    id: "waste-management-environmental",
    title: ["Waste Management &", "Environmental Services"],
    description: "G&E Industrial Supplies, Inc. provides comprehensive waste management and environmental support solutions, specializing in sustainable waste collection, treatment, and elimination programs meeting rigorous federal environmental standards for domestic and international installations.",
    backgroundImage: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=2000&auto=format&fit=crop",
    competencies: [
      "Waste Collection & Treatment: Dedicated focus on hazardous and non-hazardous waste collection, including specialized sewage tanker operations and solid waste management.",
      "Sustainable Programs: Implementation of sustainable waste elimination programs engineered to meet rigorous federal and DoD environmental standards.",
      "Utility Oversight: Expertise in mission-critical utility management to ensure operational readiness at international military installations.",
      "Compliance & Reliability: JCCS approval for Middle East operations and ISO 9001 certified quality management, with full adherence to EPA, RCRA, and host-nation environmental regulations."
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
  "industrial-supply-distribution": {
    id: "industrial-supply-distribution",
    title: ["Industrial Supply,", "Logistics & Distribution"],
    description: "G&E Industrial Supplies provides mission-ready industrial and commercial supplies supported by reliable logistics and distribution capabilities. We support military installations, federal facilities, and industrial operations with MRO materials, safety and PPE, tools and equipment, janitorial and sanitation products, electrical and mechanical components, and time-sensitive specialty items—delivered where and when needed.",
    backgroundImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop",
    competencies: [
      "MRO Materials: Maintenance, repair, and operations supplies to keep facilities and equipment running at peak readiness.",
      "Safety & PPE: Personal protective equipment and safety products meeting federal compliance and OSHA standards.",
      "Tools & Equipment: Industrial-grade tools and equipment for construction, maintenance, and field operations.",
      "Janitorial & Sanitation: Cleaning and sanitation products for facility hygiene and environmental compliance.",
      "Electrical & Mechanical Components: Critical electrical and mechanical parts for systems maintenance and infrastructure support.",
      "Time-Sensitive Specialty Items: Rapid procurement and delivery of hard-to-find and mission-critical specialty supplies."
    ]
  },
  "professional-solutions": {
    id: "professional-solutions",
    title: ["Professional", "Solutions"],
    description: "We provide mission-critical technical manpower to government and private-sector partners to enhance business agility and operational oversight through scalable HR solutions.",
    backgroundImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop",
    competencies: [
      "Skilled Manpower Outsourcing: Provision of technically trained staff, including specialized engineers and procurement officers, for long-term contract support.",
      "Leadership & Management: Delivery of experienced managerial and supervisory teams with a 30+ year reputation for reliability and responsive service.",
      "Strategic Staffing: Scalable human resource solutions designed to meet the technical requirements of large-scale federal task orders.",
      "International Expertise: Staffing solutions backed by JCCS approval and experience managing 40+ task orders under LOGCAP."
    ]
  },
  "engineering-services": {
    id: "engineering-services",
    title: ["Engineering", "Services"],
    description: "G&E delivers comprehensive engineering solutions spanning civil, mechanical, and electrical disciplines. Our in-house engineering team provides program management, design oversight, quality assurance, and construction supervision for federal infrastructure and defense projects worldwide.",
    backgroundImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000&auto=format&fit=crop",
    competencies: [
      "Civil Engineering: Site development, structural analysis, infrastructure design, and construction oversight for military and government installations.",
      "Program Management: End-to-end project lifecycle management including planning, scheduling, cost control, and stakeholder coordination.",
      "Quality Assurance & Control: Rigorous QA/QC programs ensuring compliance with federal standards, specifications, and safety requirements.",
      "Construction Supervision: On-site engineering oversight for civil and electrical construction ensuring total project compliance and quality delivery.",
      "Design & Technical Review: Engineering analysis, design review, and technical documentation to support facility modernization and sustainment projects."
    ]
  },
  "charter-flight-services": {
    id: "charter-flight-services",
    title: ["Charter Flight", "Services"],
    description: "G&E provides reliable aircraft and support services to move people and supplies across remote and challenging environments. Our charter flight operations support humanitarian missions, defense logistics, and emergency response with ICAO and UN-compliant aviation services.",
    backgroundImage: "https://images.unsplash.com/photo-1436491865332-7a61a109db05?q=80&w=2000&auto=format&fit=crop",
    competencies: [
      "Scheduled Flights: Regular rotations between operational hubs supporting sustained mission logistics and personnel movement.",
      "Ad-hoc Charters: Flexible flight services for specific mission needs, time-sensitive cargo, and VIP transport requirements.",
      "MEDEVAC & Rapid Response: Emergency medical evacuation missions with stretcher-equipped aircraft and medical support capabilities.",
      "Remote Access Operations: Bush flying operations from short, unpaved, or basic airstrips with minimal ground infrastructure in hot and high-altitude areas.",
      "Passenger & Cargo Handling: Complete ground handling including check-ins, manifests, safety briefings, weight/balance calculations, and logistics coordination.",
      "Compliance & Safety: Full adherence to ICAO and UN Aviation Safety standards with a strict Safety Management System (SMS) and continuous flight tracking."
    ]
  },
  "security-services": {
    id: "security-services",
    title: ["Security", "Services"],
    description: "G&E provides integrated physical security solutions for military installations, government facilities, and critical infrastructure. Our security services encompass access control, surveillance, force protection, and installation security operations tailored to DoD and federal requirements.",
    backgroundImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2000&auto=format&fit=crop",
    competencies: [
      "Physical Security & Access Control: Perimeter security, entry control points, badge verification, and visitor management for secure installations.",
      "Surveillance & Monitoring: CCTV operations, intrusion detection systems, and 24/7 security monitoring for critical facilities.",
      "Force Protection: Threat assessment, vulnerability analysis, and protective security measures aligned with DoD force protection standards.",
      "Installation Security Operations: Guard services, patrol operations, and security response teams for military and government installations.",
      "Security Planning & Compliance: Development of security plans, risk assessments, and standard operating procedures compliant with federal security directives."
    ]
  },
  "emergency-response": {
    id: "emergency-response",
    title: ["Emergency", "Response"],
    description: "G&E delivers rapid-deployment emergency management and disaster response capabilities. Our teams are trained and equipped to provide crisis coordination, damage assessment, continuity of operations support, and emergency facility services for federal and defense clients.",
    backgroundImage: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2000&auto=format&fit=crop",
    competencies: [
      "Crisis Coordination: Rapid mobilization and coordination of emergency response teams for natural disasters, facility emergencies, and mission-critical situations.",
      "Damage Assessment: Post-incident structural and infrastructure assessments to determine repair priorities and restoration requirements.",
      "Continuity of Operations (COOP): Planning and execution of continuity measures to maintain essential functions during and after emergency events.",
      "Emergency Facility Services: Temporary power generation, water supply, debris removal, and emergency shelter support for affected installations.",
      "Disaster Recovery Support: Restoration of critical infrastructure, utility systems, and operational facilities following emergency events."
    ]
  },
  "operational-support": {
    id: "operational-support",
    title: ["Operational", "Support"],
    description: "G&E provides expanded mission support services that sustain and enhance operational readiness across military installations and government facilities. Our operational support covers communications, IT infrastructure, fleet management, and administrative functions critical to day-to-day mission success.",
    backgroundImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop",
    competencies: [
      "Communications Support: Installation and maintenance of communication systems, radio networks, and mission-critical connectivity infrastructure.",
      "IT Infrastructure: Network management, systems administration, and technology support services for secure government and defense operations.",
      "Vehicle Fleet Management: Comprehensive fleet maintenance, motor pool operations, and transportation logistics for installation vehicle assets.",
      "Administrative Operations: Office management, document control, records management, and administrative support services for program offices.",
      "Training & Readiness Support: Facility preparation, range operations support, and logistics coordination for training exercises and readiness activities."
    ]
  }
};

/**
 * ServicePage Component
 * 
 * Renders the detail page for an individual service.
 * Uses URL parameters to determine which service to display.
 */
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
