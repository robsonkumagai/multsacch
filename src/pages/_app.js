import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from '../../utils/analytics';
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

  return <Component {...pageProps} />;
}
