import { ReactNode } from "react";

export interface FadeProps {
  children: ReactNode;
  delay: number;
  duration: number;
  triggerOnce?: boolean;
}
