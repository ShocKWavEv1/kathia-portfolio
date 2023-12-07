import "../styles/globals.css";
import Meta from " @/components/meta/meta";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import { ScrollProvider } from " @/hooks/useLenis";
import theme from " @/theme/theme";

export default function App({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  const LoadingBarRef: any = useRef(null);

  const router = useRouter();

  useEffect(() => {
    // router event listeners for loadingBar
    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteComplete);
    router.events.on("routeChangeError", handleRouteError);

    return () => {
      // remove loadingBar event listeners
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteComplete);
      router.events.off("routeChangeError", handleRouteError);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRouteComplete = () => {
    if (LoadingBar !== null) {
      setTimeout(function () {
        LoadingBarRef.current.complete();
      }, 300);
    }
  };

  const handleRouteStart = () => {
    LoadingBarRef.current.continuousStart();
  };

  const handleRouteError = (err: any) => {
    setTimeout(function () {
      if (err.cancelled) {
        return null;
      }
      LoadingBarRef.current.complete();
    }, 300);
  };

  return (
    <ChakraProvider theme={theme}>
      <Meta
        title={"Kathia Romero | Copywriter and lead content"}
        description="construimos experiencias y productos digitales"
      />
      <LoadingBar ref={LoadingBarRef} height={3} color="#ff98a2" />
      <ScrollProvider>
        <Component {...pageProps} />
      </ScrollProvider>
    </ChakraProvider>
  );
}
