import { useEffect, useState } from 'react';
import Router from 'next/router';
import type { AppProps } from 'next/app';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import {ThemeProvider} from 'next-themes';

import '../../styles/globals.css';
import LoadingScreen from '../components/loadingScreen';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 400);
  }, []);

  return (
    <ThemeProvider enableSystem={true} attribute='class' defaultTheme='dark'>
      {
        !loading ? (
          <Component {...pageProps} />
          
        ) : (
          <LoadingScreen />
        )
      }
    </ThemeProvider>
  );
}

export default MyApp;
