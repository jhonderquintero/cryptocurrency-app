import type { AppProps } from 'next/app';
import '../styles/globals.css';
import 'normalize.css';
import { ThemeProvider } from '../context/ThemeContext';
import { BaseLayout } from '../atomic/templates/BaseLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </ThemeProvider>
  );
}

export default MyApp;
