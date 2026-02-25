import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import { X } from "lucide-react";
import ajithPhoto from "@assets/Ajith-Photo_1771271267641.jpg";
import johnPaulPhoto from "@assets/John_Paul_Vice_President_1771271267642.png";
import davidBanksPhoto from "@assets/Screenshot_2026-02-16_at_2.51.02_PM_1771271514254.png";
import melissaPhoto from "@assets/Melissa_Tate__1771271267643.jpg";
import vivekPhoto from "@assets/Screenshot_2026-02-16_at_2.51.35_PM_1771271514256.png";
import stephanPhoto from "@assets/Stephan_Headshot_1771619592702.jpg";
import muhammadPhoto from "@assets/muhammad_1772059292964.png";
import prakashPhoto from "@assets/prakash_1772059292964.png";
import mernaPhoto from "@assets/merna_1772059292963.png";
import ericPhoto from "@assets/eric-bach_1772059292963.png";
import brandyPhoto from "@assets/hardin_1772059292963.png";

interface Leader {
  name: string;
  title: string;
  image: string | null;
  bio: string;
}

const leaders: Leader[] = [
  {
    name: "Ajith K. Nair",
    title: "President & Chief Operating Officer",
    image: ajithPhoto,
    bio: "Ajith K. Nair is the President and Chief Operating Officer of G&E Industrial Supplies Inc., bringing more than 35 years of experience in industrial supply, technical sales, and executive leadership within domestic and international markets. He provides strategic oversight and executive direction for all government and commercial operations, ensuring compliance, operational excellence, and mission-focused performance.\n\nMr. Nair began his career as a Sales Engineer in 1993, developing deep technical expertise in mechanical power transmission systems, industrial components, bearings, gearboxes, abrasives, tools, and engineered supply solutions. His early international experience in Kuwait strengthened his understanding of procurement processes, vendor coordination, logistics management, and customer service in demanding operational environments.\n\nIn 2002, Mr. Nair assumed executive leadership of Siyahead General Trading in Houston, Texas, where he expanded business operations through disciplined financial management, strategic sourcing, competitive pricing strategies, and long-term client relationship development.\n\nSince 2009, Mr. Nair has led G&E Industrial Supplies Inc., where he is responsible for corporate strategy and business development for federal, state, and commercial contracts; compliance with Federal Acquisition Regulations (FAR); financial oversight, cost controls, and risk management; vendor qualification and supply chain reliability; contract negotiation, execution, and performance management; and quality assurance and ethical business governance.\n\nUnder his leadership, G&E Industrial Supplies Inc. has strengthened its operational capabilities, enhanced supplier partnerships, and maintained a strong commitment to regulatory compliance, accountability, and performance reliability. His leadership philosophy is grounded in integrity, responsiveness, technical competence, and a commitment to supporting government and institutional clients with dependable, mission-ready solutions."
  },
  {
    name: "John Paul",
    title: "Vice President, Global Sales",
    image: johnPaulPhoto,
    bio: "John Paul serves as Vice President of G&E Industrial Supplies Inc., an SBA HUBZone-certified small business specializing in compliant sourcing, procurement, and logistics solutions for federal, defense, industrial, and commercial clients.\n\nWith over 25 years of experience in industrial equipment, safety systems, and contract-driven environments, John provides executive leadership across federal account management, strategic growth initiatives, and operational alignment. He oversees client engagement, contract execution, manufacturer coordination, and supply chain performance to ensure full compliance with federal acquisition requirements, including transparency, traceability, and regulatory adherence.\n\nHis core focus areas include FAR-based contract negotiation and execution, HUBZone program engagement, prime and subcontractor coordination, strategic sourcing and global supply chain management, multi-million dollar program oversight, risk mitigation and performance assurance, and OEM and manufacturer partnerships.\n\nJohn leads federal and commercial program execution, ensuring procurement processes align with client specifications, performance work statements (PWS), and contractual requirements. He directs cross-functional coordination between operations, supply chain, and manufacturer partners to deliver compliant, timely, and cost-effective solutions.\n\nHe has supported projects across the United States and the Middle East, managing the sourcing and distribution of critical industrial spare parts, safety equipment, and technical systems. His leadership ensures strict adherence to quality standards, documentation requirements, and contractual obligations.\n\nJohn brings a disciplined, compliance-focused approach to business development and program execution. His leadership emphasizes accountability, transparency, long-term client relationship development, strategic alignment with federal procurement standards, and performance-driven growth."
  },
  {
    name: "David Banks",
    title: "Vice President, Mission Operations",
    image: davidBanksPhoto,
    bio: "David Banks is a senior executive and operations leader with more than two decades of experience driving performance, growth, and operational excellence across construction, petroleum engineering, energy services, industrial equipment, and government-supported operations. As Vice President of Mission Operations for G&E Industrial Supplies, he brings a disciplined, results-oriented approach to managing complex projects from initial engagement through execution, with a strong emphasis on accountability, profitability, and customer satisfaction. His leadership spans both CONUS and OCONUS environments, supporting mission-critical operations in high-demand and high-risk markets.\n\nWith a strong foundation in petroleum engineering principles and energy-sector operations, David has developed a deep understanding of upstream and midstream environments, asset reliability, infrastructure sustainment, and field-based operational logistics. This technical grounding enhances his ability to evaluate risk, optimize performance, and align engineering-driven execution with broader business strategy.\n\nThroughout his career, David has demonstrated a proven ability to scale organizations, build high-performing teams, and align operations with strategic business objectives. He has led regional and international operations, overseen large asset portfolios, developed and executed growth strategies, and partnered closely with executive leadership to improve margins, optimize costs, and strengthen customer value propositions.\n\nDavid's background combines operational rigor with entrepreneurial execution. In addition to his corporate leadership roles, he is a founding partner of a successful custom design and construction firm, giving him hands-on perspective in cost control, scheduling, contract administration, and client delivery. At G&E Industrial Supplies, David is focused on strengthening operational maturity, expanding market presence, and delivering reliable, high-quality solutions in support of government and commercial clients."
  },
  {
    name: "Melissa Harris Tate",
    title: "Lead Director, Business Development & Capture Management",
    image: melissaPhoto,
    bio: "Melissa Harris Tate serves as Lead Director of Business Development and Capture Management, providing enterprise-level leadership for growth strategy, capture execution, and market expansion in support of DoD, federal, state, and public infrastructure mission environments, including OCONUS operations. With more than 20 years of experience, she advises executive leadership on market entry, pipeline investment decisions, competitive positioning, and capture prioritization aligned with mission requirements, operational readiness, and long-term sustainment objectives. Her work supports more than $4.5B in awarded and pursued contract growth across construction, facilities support, logistics, operations & maintenance, engineering, and information technology services.\n\nMelissa began her federal contracting career in senior leadership with an SBA 8(a) firm, strengthening engineering and IT capabilities to enhance mission effectiveness and expand federal market presence. She brings deep expertise in FAR-based contracting, regulatory compliance, and federal acquisition strategy, with experience supporting competitive procurements and task order execution under IDIQ, MATOC, SATOC, and SABER contract vehicles.\n\nShe later served as Vice President of Business Development for Metro Service Group in partnership with the AECOM/Hunt-Gibbs Boh Metro Joint Venture on the $2.5B Louis Armstrong New Orleans International Airport (MSY) CMAR North Terminal project. In this role, she led capture and go-to-market strategy within a complex multi-partner environment.\n\nThroughout her career, Melissa has partnered with both emerging and established firms to advance new market penetration, structured teaming strategies, and scalable growth across federal and commercial sectors. She has also served as Vice Chair of the Society of American Military Engineers (SAME), strengthening collaboration between industry and government stakeholders within the defense and infrastructure community.\n\nMelissa is recognized for translating customer intelligence, theater-specific operational realities, and regulatory requirements into executable capture strategies that strengthen competitiveness, manage risk, and deliver sustainable enterprise growth in mission-driven environments."
  },
  {
    name: "Stephan Mentler",
    title: "Director, Civil Solutions",
    image: stephanPhoto,
    bio: "A former soldier and first responder, Mr. Mentler possesses more than 30 years of experience across disciplines and industries. While focused on threat management policy, analysis, and planning for terrestrial and maritime, conventional and Chemical Biological Radiological Nuclear and Explosive (CBRNE) threats, he has been a Chief Operating Officer (COO) for a small business focused on growth. He has demonstrated experience in leading complex programs, business development, marketing, finance, change management, and general policy development and implementation. He consults on myriad programs and has supported federal, state, regional coalitions, local governments, and private sector partners in the U.S., Iraq, and Kuwait.\n\nIn addition to his demonstrated real-world practical experience, Mr. Mentler has a bachelor's degree in criminal justice and a master's degree in business administration. This integration of experience with an advanced education has allowed Mr. Mentler to develop, apply, and adapt solutions in a dynamic and evolving business and operational environment, across infrastructure sectors. Most importantly, he is customer centered and focused on delivering the best value in every business relationship."
  },
  {
    name: "Vivek Krishnamoorthy",
    title: "Civil Engineer & Program Manager",
    image: vivekPhoto,
    bio: "Vivek Krishnamoorthy is a senior construction and infrastructure executive with over 15 years of progressive leadership experience delivering complex, high-value civil and infrastructure programs across Qatar and India. As Program Manager \u2013 Qatar, he provides executive oversight of multiple concurrent projects within mission-critical, high-security, and U.S. government-supported environments. His leadership is grounded in disciplined execution, operational accountability, and performance-driven results across technically demanding markets.\n\nIn his current role, Vivek directs end-to-end program operations from strategic planning and preconstruction through execution and closeout. He leads financial governance, procurement strategy, subcontractor management, contract administration, regulatory coordination, and stakeholder engagement to ensure projects are delivered safely, on schedule, and within budget.\n\nVivek has successfully delivered major infrastructure programs including underground metro stations, mega water reservoirs, high-capacity pumping stations, backup power facilities, and integrated utility networks. His technical expertise encompasses large-scale excavation, diaphragm wall systems, deep piling operations, waterproof concrete structures, GRP/HDPE/carbon steel pipeline installations, and comprehensive civil infrastructure works.\n\nThroughout his career, Vivek has demonstrated strong capabilities in budgeting, forecasting, cost control, competitive bidding, contract negotiation, and schedule optimization. He applies structured reporting frameworks and proactive risk mitigation strategies to improve predictability and operational maturity across project portfolios.\n\nCombining engineering execution expertise with program-level strategic oversight, Vivek operates effectively at the intersection of field operations and executive leadership. His focus remains on expanding operational excellence in Qatar, strengthening client partnerships, and delivering infrastructure solutions that meet the highest standards of safety, quality, and performance."
  },
  {
    name: "Muhammed Jishad",
    title: "Quality Assurance / Civil Engineer",
    image: muhammadPhoto,
    bio: "Muhammed Jishad is a Quality Assurance and Civil Engineer supporting U.S. Government operations in Qatar with G&E Industrial Supplies, Inc. He brings over five years of progressive experience delivering civil and MEP infrastructure projects within secure, mission critical environments. With a bachelor's degree in civil engineering and a disciplined compliance driven mindset, he provides structured engineering oversight aligned with stringent U.S. Government standards.\n\nAs a Ministry of Municipality and Environment Certified Engineer in Qatar and a PMP\u00AE credential holder from the Project Management Institute, Jishad integrates technical field execution with formal project governance frameworks. His dual expertise enables him to bridge on-site operational control with contract compliance, documentation discipline, and risk-based quality management systems.\n\nIn his current role, Jishad oversees quality assurance processes across infrastructure upgrades, facility modernization programs, and MEP enhancement projects within secure U.S. Government installations in Qatar. His scope includes technical submittal review, site inspections, BOQ validation, schedule monitoring using Primavera P6, documentation control, and inspection readiness coordination. He works closely with subcontractors, vendors, and client representatives to ensure strict adherence to contractual specifications, safety regulations, and inspection standards prior to final approval.\n\nHis project portfolio includes water system improvements, HVAC replacements, generator cooling line upgrades, structural modifications, residential villa programs, and large-scale infrastructure developments. Through proactive risk identification and disciplined quality enforcement, he contributes to reduced rework exposure, improved inspection approval cycles, and strengthened compliance performance across multi building projects.\n\nTechnically proficient in Primavera P6, Microsoft Project, AutoCAD 2D, and Revit Architecture, Jishad enhances schedule predictability, cost awareness, and operational efficiency by aligning project controls with field supervision. His structured approach supports financial accountability, protects contractual integrity, and ensures mission continuity within high demand government environments.\n\nAt G&E Industrial Supplies, he is focused on strengthening integrated quality management frameworks, advancing compliance systems, and supporting sustainable infrastructure delivery for U.S. Government customers in Qatar. His leadership philosophy centers on accountability, safety excellence, disciplined execution, and long-term operational reliability ensuring both organizational performance objectives and customer mission requirements are consistently achieved."
  },
  {
    name: "Prakash Gopi",
    title: "General Manager, Middle East Operations",
    image: prakashPhoto,
    bio: "Prakash is a Mechanical Engineer and senior business leader with over 20 years of executive experience driving strategic growth, operational excellence, and commercial expansion across the Oil & Gas, Construction, and Automobile sectors.\n\nAs General Manager \u2013 Middle East Operations at G&E Industrial Supplies, he leads the region's strategic direction, business development, operational execution, and supply chain optimization. His mandate extends beyond operational oversight to building a scalable regional growth platform aligned with long-term corporate objectives.\n\nPrakash combines engineering rigor with commercial foresight, enabling him to bridge technical depth with executive decision-making. He has successfully led cross-functional teams, structured expansion strategies, strengthened OEM and global supplier partnerships, and implemented disciplined sourcing models that enhance margins while maintaining compliance, safety, and quality standards.\n\nHe has extensive experience in the energy sector, working directly with leading operators and global OEMs to deliver technically compliant, performance-driven solutions across complex industrial environments. With international exposure across Europe, Africa, and the United States, he brings a global perspective on regulatory frameworks, performance benchmarks, and market dynamics, enabling him to align Middle East projects with global best practices while managing high-value, regulated supply frameworks.\n\nWith a strong emphasis on governance, compliance, and risk management, he ensures structured, responsible growth without compromising regulatory standards or performance benchmarks. His hands-on involvement across the full project lifecycle provides both operational credibility and strategic oversight.\n\nAt G&E Industrial Supplies, Prakash is focused on expanding the company's regional footprint, enhancing strategic alliances, and delivering technically robust, commercially optimized solutions that support clients' evolving energy and infrastructure sector requirements\u2014positioning G&E as a trusted sourcing partner and contractor in the Middle East."
  },
  {
    name: "Merna Almekkawi",
    title: "Sales & Marketing Engineer, Middle East Operations",
    image: mernaPhoto,
    bio: "Merna Almekkawi is an accomplished sales and marketing executive recognized for driving strategic growth, strengthening market presence, and delivering high-impact commercial performance within the industrial, construction, and energy sectors. As a Sales & Marketing Engineer at G&E Industrial Supplies Inc., she leads initiatives that expand regional business opportunities while aligning technical solutions with long-term organizational objectives.\n\nMerna brings a sophisticated blend of engineering insight and commercial leadership, enabling her to manage complex project pipelines from opportunity identification through successful execution. She oversees business development activities across key GCC markets, guiding proposal strategy, contract negotiations, and client engagement with a strong emphasis on profitability, operational discipline, and customer value creation. Her portfolio includes supporting major oil & gas and infrastructure projects, where she acts as a trusted technical and commercial advisor to clients.\n\nKnown for her ability to cultivate high-value partnerships, Merna builds and sustains executive-level relationships with operators, contractors, and consultants. She contributes to strategic planning through market intelligence, competitive analysis, and pricing strategy development, ensuring the company remains agile and responsive to evolving industry demands. Her leadership extends to cross-functional collaboration with engineering and quality teams to deliver seamless execution and superior client satisfaction.\n\nMerna's executive approach is defined by accountability, strategic vision, and performance excellence. She is committed to advancing operational maturity, strengthening brand positioning, and accelerating sustainable growth. Through disciplined execution and client-focused leadership, she plays a pivotal role in supporting the long-term success and expansion of G&E Industrial Supplies Inc. in the regional industrial marketplace."
  },
  {
    name: "Jeffery Bell",
    title: "Senior Sales Manager",
    image: null,
    bio: "Jeffery Bell serves as Senior Sales Manager at G&E Industrial Supplies, Inc., supporting domestic sales operations and client engagement across federal and commercial accounts."
  },
  {
    name: "Eric Bach",
    title: "Senior Sales Representative",
    image: ericPhoto,
    bio: "Eric is a Senior Sales Representative at G&E Industrial Supplies with more than 40 years of experience delivering engineered mechanical solutions across industrial manufacturing facilities, military installations, and healthcare systems. He partners closely with plant operators, facility engineers, and healthcare administrators to provide tailored solutions ranging from critical replacement components to fully integrated turnkey mechanical system installations.\n\nThroughout his career, Eric has developed extensive technical expertise in hydronic systems, steam systems, boiler operations and controls, ancillary equipment, compressed air systems, and vacuum systems. His hands-on experience and deep system knowledge enable him to translate complex operational requirements into practical, cost-effective solutions that support both performance and budget objectives. Clients consistently rely on him as a trusted technical resource capable of aligning engineering requirements with real-world application.\n\nEric's consultative approach to sales has resulted in long-standing customer relationships built on responsiveness, accountability, and measurable results. His portfolio of work spans industrial plants, military bases, and hospital facilities, where dependable system performance and operational continuity are mission-critical. From initial assessment and system specification through procurement coordination and final installation, he maintains oversight and engagement to ensure seamless execution.\n\nWith more than 15 years representing Beacon Medaes medical gas equipment, Eric brings specialized knowledge of healthcare compliance standards governing medical air and medical vacuum systems. His familiarity with regulatory requirements and facility accreditation considerations positions him to support healthcare clients with precision and confidence.\n\nEric remains focused on delivering reliable, efficient, and compliant mechanical solutions that strengthen long-term client partnerships. His technical depth, operational insight, and customer-first philosophy reinforce G&E Industrial Supplies' commitment to performance excellence and sustained operational success."
  },
  {
    name: "Brandy Hardin",
    title: "HR & Administration Manager",
    image: brandyPhoto,
    bio: "Brandy Hardin brings over 30 years of experience in human resources, administrative management, and operations across government contracting and industrial sectors. As HR and Administration Manager at G&E Industrial Supplies, she oversees talent strategy, workforce planning, administrative functions, warehouse operations, supply chain, and logistics.\n\nBrandy's expertise lies in identifying, hiring, and developing the right talent to drive organizational performance. She combines HR strategy with operational knowledge, ensuring seamless coordination between departments and alignment with both business and regulatory requirements.\n\nShe has led recruitment, on-boarding, performance management, and employee development initiatives, while managing operational areas including warehouse, shipping and receiving, accounts, and deliveries. Her oversight ensures compliance, efficiency, and cost-effective operations that directly support business growth and client satisfaction.\n\nBrandy maintains hands-on involvement in all administrative and operational processes, from supply chain and warehouse management to daily office functions, ensuring that policies translate effectively into action.\n\nExperienced in working with prime government contractors, she ensures adherence to labor laws, safety regulations, and organizational policies, maintaining high standards of compliance and accountability.\n\nBrandy is focused on optimizing workforce performance, streamlining operations, and ensuring efficient delivery of services. Her integrated approach strengthens G&E Industrial Supplies' operational foundation while enabling growth and consistent, high-quality service for clients."
  },
];

const sections = [
  { label: "EXECUTIVE LEADERSHIP", indices: [0, 1, 2] },
  { label: "GOVERNMENT CONTRACTS", indices: [3, 4] },
  { label: "ENGINEERING", indices: [5, 6] },
  { label: "GLOBAL SALES AND SERVICES (OCONUS)", indices: [7, 8] },
  { label: "DOMESTIC SALES AND SERVICES (CONUS)", indices: [9, 10, 11] },
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

          {sections.map((section) => (
            <div key={section.label}>
              <h2 className="text-xl md:text-2xl font-display font-bold text-white/80 mb-8 tracking-wider border-b border-white/10 pb-3">
                {section.label}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 mb-16">
                {section.indices.map((index) => {
                  const leader = leaders[index];
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                      className="flex flex-col items-center text-center"
                      data-testid={`card-leader-${index}`}
                    >
                      <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden mb-6 border-4 border-white/10 bg-slate-700">
                        {leader.image ? (
                          <img
                            src={leader.image}
                            alt={leader.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-slate-600">
                            <span className="text-white/40 text-4xl md:text-5xl font-display font-bold">
                              {leader.name.split(" ").map(n => n[0]).join("")}
                            </span>
                          </div>
                        )}
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
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedLeader !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 py-8"
          onClick={() => setSelectedLeader(null)}
          data-testid="modal-leader-bio"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="bg-slate-800 border border-white/10 rounded-md max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-4 right-4 text-white/50 hover:text-white sticky float-right"
              data-testid="button-close-modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-5 border-2 border-white/10">
                {leaders[selectedLeader].image ? (
                  <img
                    src={leaders[selectedLeader].image}
                    alt={leaders[selectedLeader].name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-600">
                    <span className="text-white/40 text-3xl font-display font-bold">
                      {leaders[selectedLeader].name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                )}
              </div>
              <h3 className="text-white font-display font-bold text-2xl mb-1">
                {leaders[selectedLeader].name}
              </h3>
              <p className="text-white/50 text-sm mb-6">
                {leaders[selectedLeader].title}
              </p>
              <div className="text-white/70 text-sm leading-relaxed text-left space-y-4">
                {leaders[selectedLeader].bio.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
