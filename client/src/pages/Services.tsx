import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "facility-maintenance",
      title: "Facility Maintenance",
      description: "As a primary pillar under LOGCAP V, we provide comprehensive base operations support. Our teams handle life support services, plumbing, HVAC installation and repair, electrical systems, and rigorous technical inspections to ensure mission readiness.",
      /* unsplash: industrial hvac technician */
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "global-logistics",
      title: "Global Logistics",
      description: "We are a specialized merchant wholesaler facilitating complex supply chains. We source and deliver industrial machinery, commercial equipment, and critical supplies across the US, Mexico, and the Middle East (Qatar, Kuwait).",
      /* unsplash: warehouse logistics forklift */
      image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "environmental",
      title: "Environmental Management",
      description: "ISO 9001 certified environmental solutions including sustainable waste elimination, hazardous and non-hazardous waste collection, and specialized sewage tanker operations compliant with strict federal regulations.",
      /* unsplash: recycling waste management industrial */
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "construction",
      title: "Construction Services",
      description: "Capable of large-scale infrastructure projects. Our portfolio includes medical air systems, commercial roofing, airfield maintenance, and structural development with a $100M aggregate bonding capacity.",
      /* unsplash: building construction structure steel */
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "specialized-equipment",
      title: "Specialized Equipment",
      description: "From heavy machinery to tactical support vehicles. We manage fleet leasing programs for passenger cars and operate specialized assets like jet refueler trucks for airfield support.",
      /* unsplash: heavy truck transport industrial */
      image: "https://images.unsplash.com/photo-1605218427306-635ba2439af2?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "professional",
      title: "Professional Solutions",
      description: "Providing human capital excellence. We offer HR solutions, skilled manpower outsourcing (engineers, procurement officers), and deploy experienced leadership teams to manage complex projects.",
      /* unsplash: engineer architect meeting construction site */
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-900 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Our Services</h1>
        <p className="text-slate-400 max-w-2xl mx-auto px-4">
          Integrated solutions designed for reliability, compliance, and efficiency in any environment.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-80 md:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="inline-block px-3 py-1 rounded bg-slate-100 text-slate-600 font-bold text-xs uppercase tracking-wider mb-4">
                  Service Area {index + 1}
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                  {service.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {service.description}
                </p>
                <Link href="/contact">
                  <button className="inline-flex items-center font-semibold text-primary hover:text-primary/80 transition-colors">
                    Request Info <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
