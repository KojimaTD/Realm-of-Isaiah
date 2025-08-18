import { useContext } from "react";
import VisitorCtx from "./VisitorContext";

// hook-only file (no components exported)
export function useVisitor() {
  const ctx = useContext(VisitorCtx);
  if (!ctx) throw new Error("useVisitor must be used within <VisitorProvider>");
  return ctx;
}

export default useVisitor; // optional; you can import { useVisitor } or default
