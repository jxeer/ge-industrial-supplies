import { motion } from "framer-motion";
import { 
  Wrench, 
  Globe2, 
  Leaf, 
  Building2, 
  Truck, 
  Users,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    id: "facility",
    icon: Wrench,
    title: "Facility Maintenance",
    description: "This is a primary pillar of their business, specifically under the LOGCAP V contract. They provide comprehensive \"base ops\" and life support, including plumbing and HVAC, as well as technical inspections and mechanical systems maintenance for military installations.",
    competencies: [
      "Multi-trade base support: inspections, repairs, HVAC, water and wastewater",
      "Custodial service and sanitation",
      "Equipment leasing and fuel facility support",
      "Security and site infrastructure"
    ],
    project: {
      title: "Base Ops and Life Support, Qatar and Kuwait (LOGCAP V)",
      client: "Vectrus Systems Corporation",
      value: "$23.4M"
    }
  },
  {
    id: "logistics",
    icon: Globe2,
    title: "Global Logistics",
    description: "We serve as a specialized merchant wholesaler, sourcing and delivering industrial machinery, commercial equipment, and specialty chemicals. Their reach is notably global, with a focus on the U.S., Mexico, and the Middle East (specifically Qatar and Kuwait).",
    competencies: [
      "Strategic Global Reach: Active operational presence in the U.S. and the Middle East, for USACE-Med and AFCENT operations",
      "Wholesale & Procurement Expertise: Specialized merchant wholesaler for industrial supplies, commercial equipment, and plumbing/heating machinery (NAICS 423840, 423440, 423720)",
      "Defense Logistics Integration: Over 40 task orders successfully executed under LOGCAP, providing recurring supplies for facility maintenance and aircraft support",
      "Compliance & Scale: JCCS approval for Middle East operations and ISO 9001 certified quality management. Supported by a $100M aggregate bonding capacity"
    ]
  },
  {
    id: "environmental",
    icon: Leaf,
    title: "Environmental Management",
    description: "G&E Industrial Supplies, Inc. provides comprehensive environmental and facility support solutions, specializing in sustainable waste elimination and mission-critical utility management for federal and international installations.",
    competencies: [
      "Waste Collection & Treatment: Dedicated focus on hazardous and non-hazardous waste collection, including specialized sewage tanker operations",
      "Sustainable Programs: Implementation of sustainable waste elimination programs engineered to meet rigorous federal environmental standards",
      "Utility Oversight: Expertise in mission-critical utility management to ensure operational readiness at international military installations",
      "Compliance & Reliability: JCCS approval for Middle East operations and ISO 9001 certified quality management"
    ]
  },
  {
    id: "construction",
    icon: Building2,
    title: "Construction Services",
    description: "G&E handles diverse, large-scale infrastructure projects, delivering turnkey engineering solutions that enhance operational readiness for federal and local agencies.",
    competencies: [
      "Facility Upgrades: Execution of diverse renovations, including medical air system improvements and modern facility upgrades",
      "Specialized Construction: High-stakes performance in roofing services and airfield maintenance and emergency repairs",
      "Engineering Support: Professional oversight for civil and electrical construction supervision to ensure total project compliance",
      "Bonding Capacity: Supported by $30M single project and $100M aggregate bonding capacity to manage high-value infrastructure contracts"
    ]
  },
  {
    id: "equipment",
    icon: Truck,
    title: "Specialized Equipment",
    description: "A core pillar of our defense operations involves the deployment and leasing of heavy machinery and tactical vehicles to support global readiness.",
    competencies: [
      "Heavy Machinery: Rapid deployment of material handling equipment and heavy vehicles for international construction and defense projects",
      "Fleet Management: Flexible passenger car leasing programs tailored to meet the mobility needs of government and private-sector clients",
      "Tactical Support: Supply of specialized items, including jet refueler trucks, trailers, and hazardous containment units for defense clients",
      "Global Logistics: Integrated logistics and spares support to maintain equipment operationality in remote environments"
    ]
  },
  {
    id: "professional",
    icon: Users,
    title: "Professional Solutions",
    description: "We offer \"HR Solutions\" by providing mission-critical technical manpower to government and private-sector partners to enhance business agility and operational oversight.",
    competencies: [
      "Skilled Manpower Outsourcing: Provision of technically trained staff, including specialized engineers and procurement officers, for long-term contract support",
      "Leadership & Management: Delivery of experienced managerial and supervisory teams with a 30+ year reputation for reliability and responsive service",
      "Strategic Staffing: Scalable human resource solutions designed to meet the technical requirements of large-scale federal task orders",
      "International Expertise: Staffing solutions backed by JCCS approval and experience managing 40+ task orders under LOGCAP"
    ]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Capabilities</h1>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Comprehensive support solutions for federal government and private-sector clients worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List - Like PDF layout */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {services.map((service, idx) => (
          <motion.div
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="scroll-mt-24"
          >
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left Panel - Dark Blue like PDF */}
              <div className="bg-slate-800 text-white p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-display font-bold">{service.title}</h2>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {service.description}
                </p>
                {service.project && (
                  <div className="mt-6 pt-6 border-t border-slate-700">
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">Featured Project</p>
                    <p className="font-semibold text-white">{service.project.title}</p>
                    <p className="text-sm text-slate-400">Client: {service.project.client}</p>
                    <p className="text-sm text-slate-400">Value: {service.project.value}</p>
                  </div>
                )}
              </div>

              {/* Right Panel - Core Competencies like PDF */}
              <div className="bg-white p-8 rounded-lg border border-slate-200">
                <h3 className="text-lg font-display font-bold text-slate-900 mb-6">Core Competencies</h3>
                <ul className="space-y-4">
                  {service.competencies.map((comp, cIdx) => (
                    <li key={cIdx} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm leading-relaxed">{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Ready to Partner?</h2>
          <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
            Contact us today to discuss how G&E Industrial Supplies can support your next mission-critical project.
          </p>
          <a href="/contact">
            <button 
              className="px-8 py-3 bg-white text-primary rounded-md font-semibold hover:bg-slate-100 transition-colors"
              data-testid="button-contact-cta"
            >
              Contact Us
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
