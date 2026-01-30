import { motion } from "framer-motion";
import { Check, Shield, FileText, Globe } from "lucide-react";

export default function Capabilities() {
  const clients = [
    "Department of Defense", "US State Department", "US Air Force", "NATO",
    "Lockheed Martin", "Raytheon", "Boeing", "General Dynamics"
  ];

  const naicsCodes = [
    { code: "561210", desc: "Facilities Support Services" },
    { code: "423840", desc: "Industrial Supplies Wholesalers" },
    { code: "236220", desc: "Commercial Building Construction" },
    { code: "562910", desc: "Remediation Services" },
    { code: "541611", desc: "Admin Mgmt Consulting" },
    { code: "532490", desc: "Other Industrial Machinery Rental" }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Our Capabilities</h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Proven performance in high-stakes environments. We deliver mission-critical support services globally with precision and reliability.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-12 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
          
          {/* About Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Company Overview</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Founded in 1989, G&E Industrial Supplies, Inc. is a HUBZone-certified small business headquartered in El Paso, Texas. We have established ourselves as a trusted partner for federal government agencies and private-sector clients worldwide.
                </p>
                <p>
                  With over 40+ task orders executed under LOGCAP and extensive experience in the Middle East, we bring a deep understanding of logistical complexities in austere environments. Our operations are fully JCCS approved and ISO 9001 compliant.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/5 p-6 rounded-xl text-center">
                <h3 className="text-4xl font-black text-primary mb-2">30+</h3>
                <p className="text-sm font-bold text-slate-600">Years Experience</p>
              </div>
              <div className="bg-primary/5 p-6 rounded-xl text-center">
                <h3 className="text-4xl font-black text-primary mb-2">40+</h3>
                <p className="text-sm font-bold text-slate-600">Task Orders</p>
              </div>
              <div className="col-span-2 bg-slate-900 text-white p-6 rounded-xl flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg">Bonding Capacity</h3>
                  <p className="text-slate-400 text-sm">Aggregate Capacity</p>
                </div>
                <span className="text-3xl font-display font-bold text-accent">$100M</span>
              </div>
            </div>
          </div>

          <hr className="border-slate-100 my-16" />

          {/* Codes & Certs */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-display font-bold text-slate-900">NAICS Codes</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {naicsCodes.map((item) => (
                  <div key={item.code} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="font-mono font-bold text-primary bg-white px-2 py-1 rounded shadow-sm text-sm">{item.code}</span>
                    <span className="text-xs font-medium text-slate-700 truncate" title={item.desc}>{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-display font-bold text-slate-900">Past Performance</h3>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <p className="text-sm text-slate-500 mb-4 font-semibold uppercase tracking-wider">Trusted by major organizations</p>
                <div className="flex flex-wrap gap-3">
                  {clients.map(client => (
                    <span key={client} className="px-3 py-1.5 bg-white text-slate-700 rounded-full text-sm font-medium border border-slate-200 shadow-sm">
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <hr className="border-slate-100 my-16" />

          {/* Global Footprint */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Globe className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-display font-bold text-slate-900">Global Footprint</h3>
            </div>
            <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
              Our operations span critical strategic locations, providing reliable supply chains and on-ground support where it matters most.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {['United States & Mexico', 'Middle East (Qatar, Kuwait)', 'International Bases'].map((region, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-md border border-slate-100 flex items-center justify-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  <span className="font-bold text-slate-800">{region}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
