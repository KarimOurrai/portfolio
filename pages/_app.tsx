import Home from '@/app/pageDir';
import { AppProps } from 'next/app';

function CustomApp({ Component, pageProps }: AppProps) {
    const { navData, aboutData, contactData } = pageProps;
  
    return (
      <Home navData={navData} aboutData={aboutData} contactData={contactData} />
    );
  }
    
export default CustomApp;