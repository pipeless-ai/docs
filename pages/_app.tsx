import { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url.startsWith('/') && window.location.hostname === "www.pipeless.ai") {
         // HACK: to allow the page reload, we trick the URL that is
         // shown to the user by adding `/docs` when accesed from
         // pipeless.ai instead of docs.pipeless.ai
         // This works along with some re-write rules on the amin website
         // as well as on the sitemaps generation to show the docs under
         // the main website
         const showURL = `/docs${url}`
         window.history.pushState({}, '', showURL);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-WC0BWXKK0M" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-WC0BWXKK0M');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
