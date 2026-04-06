import { siteConfig } from "@/lib/siteConfig";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-40 grid gap-2 rounded-2xl border border-slate-900/10 bg-white/95 p-3 shadow-2xl backdrop-blur md:hidden">
      <a
        href="#availability"
        className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white"
      >
        Check Availability
      </a>
      <a
        href={siteConfig.contact.whatsappUrl}
        className="inline-flex items-center justify-center rounded-xl border border-teal-200 bg-teal-50 px-4 py-3 text-sm font-semibold text-teal-900"
      >
        WhatsApp Us Now
      </a>
    </div>
  );
}
