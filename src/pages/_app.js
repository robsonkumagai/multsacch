import { useEffect } from 'react';
import { initGA, logPageView } from '../../utils/analytics';
import { ArticleJsonLd, NextSeo, DefaultSeo } from 'next-seo';

// Load DM Sans typeface
import 'typeface-dm-sans';

// Load other package css file
import 'react-modal-video/css/modal-video.min.css';
import 'rc-drawer/assets/index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "animate.css/animate.min.css";

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA('G-684YYMPHVH');
      window.GA_INITIALIZED = true;
    }

    logPageView();
  }, []);

  return (
    <>
      <NextSeo
        title="MultSacch - Aditivo probiótico para ruminantes"
        description="MultSacch - Com cepas exclusivas e selecionadas MultSacch é a melhor opção de aditivo probiótico para bovinos, bubalinos, ovinos e caprinos. Entre em contato e solicite uma cotação."
        canonical='https://www.multsacch.com'
        openGraph={{
          type: 'website',
          url: 'https://www.multsacch.com',
          title: 'MultSacch - Aditivo probiótico para ruminantes',
          description: 'MultSacch - Com cepas exclusivas e selecionadas MultSacch é a melhor opção de aditivo probiótico para bovinos, bubalinos, ovinos e caprinos. Entre em contato e solicite uma cotação.',
          images: [
            {
              url: 'https://www.multsacch.com/_next/static/images/mockup-ec874ec14c52d48144db66ea47595a72.webp',
              alt: 'Embalagem do produto MultSacch',
            },
          ],
        }}
      />
      <ArticleJsonLd
        type="website"
        url="https://www.multsacch.com"
        title="MultSacch - Aditivo probiótico para ruminantes"
        images={[
          {
            type: 'ImageObject',
            url: 'https://www.multsacch.com/_next/static/images/mockup-ec874ec14c52d48144db66ea47595a72.webp',
            caption: 'Embalagem do produto MultSacch',
          },
        ]}
        datePublished="2023-05-11T23:04:13Z"
        dateModified="2023-06-02T09:50:13Z"
        authorName="Biomart Nutrição Animal Imp. e Exp LTDA"
        description="MultSacch - Com cepas exclusivas e selecionadas MultSacch é a melhor opção de aditivo probiótico para bovinos, bubalinos, ovinos e caprinos. Entre em contato e solicite uma cotação."
      />
      <Component {...pageProps} />
    </>
  )
}
