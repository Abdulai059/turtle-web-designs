import { Badge } from "@/components/ui/badge";

import { Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SimplePricing() {
  // const [frequency, setFrequency] = useState("monthly");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div className="flex items-center justify-center mt-20 sm:mt-20 sm:min-h-screen">
      <div className="not-prose relative flex w-full flex-col items-center justify-center px-4 py-12 text-center sm:gap-16 sm:px-8 sm:py-30">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="bg-primary/10 absolute -top-[10%] left-[50%] h-[40%] w-[60%] -translate-x-1/2 rounded-full blur-3xl" />
          <div className="bg-primary/5 absolute -right-[10%] -bottom-[10%] h-[40%] w-[40%] rounded-full blur-3xl" />
          <div className="bg-primary/5 absolute -bottom-[10%] -left-[10%] h-[40%] w-[40%] rounded-full blur-3xl" />
        </div>

        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-center space-y-2">
            <Badge
              variant="outline"
              className="border-primary/20 bg-primary/5 mb-4 rounded-full px-4 py-1 text-sm font-medium"
            >
              <Sparkles className="text-primary mr-1 h-3.5 w-3.5 animate-pulse" />
              Join Our Watchlist
            </Badge>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="from-foreground to-foreground/30 bg-gradient-to-b bg-clip-text text-4xl font-bold text-transparent sm:text-5xl"
            >
              Pick the perfect plan for your needs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground max-w-md pt-2 text-lg"
            >
              Simple, transparent pricing that scales with your business. No
              hidden fees, no surprises.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
