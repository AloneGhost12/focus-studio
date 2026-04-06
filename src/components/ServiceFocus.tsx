"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

const points = [
  "Wedding photography first",
  "Pre-wedding, wedding day, and couple portraits",
  "Fast delivery and clear communication",
  "Secondary print support when needed",
];

export function ServiceFocus() {
  return (
    <section id="services" className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto grid w-full max-w-[2200px] gap-6 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-3xl border border-white/35 bg-white/75 p-6 shadow-xl lg:col-span-3 sm:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-700">Main Service</p>
          <h3 className="mt-2 font-serif text-2xl leading-tight text-slate-900 sm:text-4xl">
            Wedding Photography in Kozhikode for Couples Who Want Clear Results
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">
            Focus Studio helps you capture the full wedding story with clean direction, premium editing, and a smooth booking process. We keep wedding photography as the main focus, with printing available as a secondary studio service.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <div key={point} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800">
                {point}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#availability" className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
              Check Availability
            </a>
            <a href="#portfolio" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50">
              View Portfolio
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-3xl border border-teal-100 bg-teal-50/80 p-6 shadow-xl lg:col-span-2 sm:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-700">Secondary Service</p>
          <h4 className="mt-2 text-2xl font-bold text-slate-900">Additional Studio Services</h4>
          <p className="mt-3 text-slate-700">
            Passport photos, lamination, PVC cards, and urgent prints are available on request as a secondary service.
          </p>

          <div className="mt-5 rounded-2xl border border-teal-200 bg-white p-4 text-sm text-slate-700">
            {siteConfig.location.street}, {siteConfig.location.city}
          </div>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">Available only as an add-on</p>
        </motion.aside>
      </div>
    </section>
  );
}
