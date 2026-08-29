function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
}) {
  const base =
    "relative px-5 py-1.5 text-sm font-bold border cursor-pointer select-none transition-all duration-75 active:translate-y-px focus:outline-none";

  const styles = {
    primary:
      "bg-gradient-to-b from-[#6ab0f5] via-[#3a7fcc] to-[#1a55aa] border-[#1a4a8a] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_2px_4px_rgba(0,0,0,0.4)] hover:from-[#7dc0ff] hover:to-[#2060c0] rounded-sm",
    secondary:
      "bg-gradient-to-b from-[#e8e8e8] via-[#d0d0d0] to-[#b8b8b8] border-[#888] text-[#222] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_2px_4px_rgba(0,0,0,0.3)] hover:from-[#f0f0f0] hover:to-[#c8c8c8] rounded-sm",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${styles[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      <span className="absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-white/30 to-transparent pointer-events-none rounded-sm" />
      {children}
    </button>
  );
}

export default Button;
