"use client";

import { useEffect, useState } from "react";

export default function LocalTime({ timeZone }: { timeZone: string }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  if (!now) {
    return <span className="tabular-nums">--:--</span>;
  }

  const formatted = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone,
  })
    .format(now)
    .replace(/\s/g, "")
    .toLowerCase();

  return <span className="tabular-nums">{formatted}</span>;
}
