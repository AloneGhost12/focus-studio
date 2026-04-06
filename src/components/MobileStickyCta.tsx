"use client";

import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";
import { useEffect, useState } from "react";

export function MobileStickyCta() {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const hideTimer = window.setTimeout(() => {
      setShowBanner(false);
    }, 3200);

    return () => window.clearTimeout(hideTimer);
  }, []);

  return (
    <AnimatePresence>
      {showBanner ? (
        <motion.div
          initial={{ x: 180, opacity: 0, scale: 0.94 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ x: 180, opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="fixed bottom-24 right-4 z-40 w-[min(88vw,320px)] rounded-2xl border border-slate-900/10 bg-white/95 p-3 shadow-2xl backdrop-blur md:hidden"
        >
          <a
            href={siteConfig.contact.whatsappUrl}
            className="inline-flex w-full items-center justify-center rounded-xl border border-teal-200 bg-teal-50 px-4 py-3 text-sm font-semibold text-teal-900"
          >
            Check Availability on WhatsApp
          </a>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
