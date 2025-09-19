import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

function Logo() {
  return (
    <motion.div
      className="flex items-center space-x-2"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Link prefetch={false} href="/" className="flex items-center space-x-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 to-rose-700">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
        <span className="bg-gradient-to-r from-rose-500 to-rose-700 bg-clip-text text-xl font-bold text-transparent">
          Acme Inc.
        </span>
      </Link>
    </motion.div>
  );
}

export default Logo;
