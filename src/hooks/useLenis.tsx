import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  ReactNode,
} from "react";
import Lenis from "@studio-freight/lenis";
import { useRouter } from "next/router";
import { usePathname, useSearchParams } from "next/navigation";

const ScrollContext = createContext({
  lenis: null,
});

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const lenis: any = useRef<Lenis | null>(null);
  const reqIdRef: any = useRef(null);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (lenis.current) lenis.current!.scrollTo(0, { immediate: true });
  }, [router, pathname, searchParams, lenis]);

  useEffect(() => {
    const animate = (time: any) => {
      lenis?.current.raf(time);
      reqIdRef.current = requestAnimationFrame(animate);
    };
    reqIdRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(reqIdRef.current);
  }, [lenis]);

  useEffect(() => {
    const lenisNew = new Lenis({
      duration: 2.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    lenis.current = lenisNew;

    return () => {
      lenis.current.reset();
      lenis.current.destroy();
      lenis.current = null;
    };
  }, []);

  const memoedValue = useMemo(
    () => ({
      lenis,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <ScrollContext.Provider value={memoedValue}>
      {children}
    </ScrollContext.Provider>
  );
};
export default function usePage() {
  return useContext(ScrollContext);
}
