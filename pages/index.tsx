// pages/index.tsx
import Home from '@/app/pageDir';
import { getContentByPath } from '@/client/utils/markdown';
import { getPlaiceholder } from 'plaiceholder';

export async function getStaticProps() {
    // getContentByPath is accepting one argument which is the name of the folder that holds the content of the section
    const navData = await getContentByPath("navigation");
    const pureAboutData = (await getContentByPath("about")) || {};
    const contactData = await getContentByPath("contact");
    //@ts-ignore
    const imgSrc = pureAboutData?.image;
    const { img, css: blurredImage } = await getPlaiceholder(imgSrc);
    const aboutData = { ...pureAboutData, blurredImage };
  
    // this props are returned and can be used by the IndexPage
    return {
      props: {
        navData,
        aboutData,
        contactData,
      },
    };
  }
export default Home;
