function GlassButton({ href, label, variant }) {
  const styles = {
    primary: "bg-secondary/20 text-secondary shadow-inner",
    accent: "bg-secondary/20 text-secondary shadow-inner",
    secondary: "bg-secondary/20 text-secondary shadow-inner",
  };

  // const styles = {
  //   primary: "bg-primary/10 text-primary shadow-inner",
  //   accent: "bg-white/10 text-white shadow-inner",
  //   secondary: "bg-secondary/20 text-secondary shadow-inner",
  // };

  return (
    <a href={href} target="_blank" rel="noreferrer" className="relative group">
      <button
        className={`h-12 w-40 rounded-xl font-manrope transition-all ${styles[variant]}`}
      >
        {label}
      </button>
      <span className="absolute bottom-[-40%] w-24 h-12 bg-primary/30 blur-xl rounded-full opacity-0 group-hover:opacity-60 transition"></span>
    </a>
  );
}

export default GlassButton;
