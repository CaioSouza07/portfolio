function Panel({ children, className = "" }) {
  return (
    <div
      className={`relative border-2 border-[#7ab0e8] shadow-[0_0_0_1px_#1a4a8a,0_8px_32px_rgba(0,0,0,0.6)] bg-linear-to-b from-[#d6e8f8] to-[#c0d8f0] rounded-sm ${className}`}
    >
      {children}
    </div>
  );
}

export default Panel;
