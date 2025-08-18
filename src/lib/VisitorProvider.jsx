import { useEffect, useState } from "react";
import VisitorCtx from "./VisitorContext";

const KEY_NAME = "visitorName";
const KEY_SKIP = "visitorSkip";

// component-only export 
export default function VisitorProvider({ children }) {
  const [ready, setReady] = useState(false);
  const [name, setName] = useState("");
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    try {
      const savedName = (localStorage.getItem(KEY_NAME) || "").trim();
      const savedSkip = localStorage.getItem(KEY_SKIP) === "1";
      if (savedName) setName(savedName);
      if (savedSkip) setSkip(true);
    } finally {
      setReady(true);
    }
  }, []);

  const saveName = (val) => {
    const cleaned = String(val || "").trim().slice(0, 40);
    setName(cleaned);
    if (cleaned) {
      localStorage.setItem(KEY_NAME, cleaned);
      localStorage.removeItem(KEY_SKIP);
      setSkip(false);
    }
  };

  const setSkipped = (v) => {
    const b = Boolean(v);
    setSkip(b);
    if (b) localStorage.setItem(KEY_SKIP, "1");
    else localStorage.removeItem(KEY_SKIP);
  };

  const clear = () => {
    setName("");
    setSkip(false);
    localStorage.removeItem(KEY_NAME);
    localStorage.removeItem(KEY_SKIP);
  };

  return (
    <VisitorCtx.Provider value={{ ready, name, skip, saveName, setSkipped, clear }}>
      {children}
    </VisitorCtx.Provider>
  );
}
