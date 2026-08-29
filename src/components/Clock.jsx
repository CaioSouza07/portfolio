import { useState } from "react";

function Clock() {
  const [time, setTime] = useState(() => new Date());

  useState(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  });

  const hh = String(time.getHours()).padStart(2, "0");
  const mm = String(time.getMinutes()).padStart(2, "0");

  return (
    <div
      className="fixed bottom-4 right-4 px-3 py-1 text-xs text-white/70 border border-white/10 rounded-sm"
      style={{
        background: "rgba(0,20,60,0.5)",
        fontFamily: "Tahoma, sans-serif",
        backdropFilter: "blur(4px)",
      }}
    >
      {hh}:{mm}
    </div>
  );
}

export default Clock;
