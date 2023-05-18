import { useEffect } from 'react';
import { initGA, logPageView } from '../../utils/analytics';
import { NextSeo, DefaultSeo } from 'next-seo';

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

  const defaultSeoConfig = {
    title: 'MultSacch - Aditivo probiótico para ruminantes',
    description: 'MultSacch - Com cepas exclusivas e selecionadas MultSacch é a melhor opção de aditivo probiótico para bovinos, bubalinos, ovinos e caprinos. Entre em contato e solicite uma cotação.',
    openGraph: {
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
    },
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Biomart Nutrição Animal',
    url: 'https://www.multsacch.com',
    logo: 'data:image/webp;base64,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',
  };

  return (
    <>
      <DefaultSeo {...defaultSeoConfig} />
      <NextSeo
        title="MultSacch - Aditivo probiótico para ruminantes"
        description="MultSacch - Com cepas exclusivas e selecionadas MultSacch é a melhor opção de aditivo probiótico para bovinos, bubalinos, ovinos e caprinos. Entre em contato e solicite uma cotação."
        jsonLd={[structuredData]}

      // Adicione outras informações de SEO personalizadas, se necessário
      />
      <Component {...pageProps} />
    </>
  )
}
