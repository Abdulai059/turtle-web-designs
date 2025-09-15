import { motion } from "framer-motion";

function Button({ children, onClick, className = "" }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`bg-primary rounded-none px-6 py-3 font-semibold text-stone-100 shadow-lg transition-all ${className}`}
    >
      {children}
    </motion.button>
  );
}

export default Button;
