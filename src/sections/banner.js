/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Flex, Box, Heading, Text, Image, Button } from 'theme-ui';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'components/link';
import { FaPlayCircle } from 'react-icons/fa';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { keyframes } from '@emotion/core';

import Bacilos from 'assets/bacilos.png';
import BannerBG from 'assets/11.png';
import BannerThumb from 'assets/banner-thumb.png';

import Bpf from 'assets/certificates/bpf.svg';
import Fda from 'assets/certificates/fda.svg';
import Ibd from 'assets/certificates/ibd.svg';
import Iso from 'assets/certificates/iso.svg';


const data = [
  {
    id: 1,
    path: 'https://sindiracoes.org.br/tag/bpf/',
    image: Bpf,
    title: 'Certificação BPF da Biomart Nutrição Animal',
  },
  {
    id: 2,
    path: 'https://www.fda.gov/',
    image: Fda,
    title: 'Certificação FDA da Biomart Nutrição Animal',
  },
  {
    id: 3,
    path: 'https://www.ibd.com.br/',
    image: Ibd,
    title: 'Certificação IBD da Biomart Nutrição Animal',
  },
  {
    id: 4,
    path: 'http://qmsbrasil.com.br/certificacao-iso-9001/',
    image: Iso,
    title: 'Certificação ISO da Biomart Nutrição Animal',
  },
];

export default function Banner() {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <AnimationOnScroll animateIn="animate__zoomInDown">
          <div sx={styles.avatar}>
            <img src={Bacilos} alt="Skytsunami" />
          </div>
        </AnimationOnScroll>
        <Box sx={styles.banner.contentBox}>
          <AnimationOnScroll animateIn="animate__zoomIn">
            <Heading as="h1" variant="heroPrimary" sx={styles.banner.h1}>
              A melhor opção de probiótico para ruminantes.
            </Heading>
          </AnimationOnScroll>

          <Text as="p" variant="heroSecondary">
            Com 8 cepas exclusivas e concentradas, MultSacch é a escolha perfeita para a sua produção.
          </Text>
          <Flex>
            <a href="https://biomart.com.br" target={'_blank'}>
              <Button variant="whiteButton" aria-label="Biomart">
                Biomart
              </Button>
            </a>

            <>
              <ModalVideo
                channel="youtube"
                isOpen={videoOpen}
                videoId="gCm6-bdMg_E"
                onClose={() => setVideoOpen(false)}
              />
              <Button
                variant="textButton"
                aria-label="Vídeo institucional da Biomart Nutrição Animal"
                onClick={handleClick}
              >
                <FaPlayCircle /> Vídeo institucional
              </Button>
            </>
          </Flex>
          <Flex sx={styles.certificationBox}>
            <Box sx={styles.certificationBox.certifications}>
              {data.map((item, index) => (
                <Link path={item.path} key={`client-key${index}`} target="_blank">
                  <Image src={item.image} alt={item.title} sx={styles.certificationBox.svg} />
                </Link>
              ))}
            </Box>
          </Flex>
        </Box>

        <Box sx={styles.banner.imageBox}>
          {/* <Image src={BannerThumb} alt="banner" /> */}
        </Box>
      </Container>
    </section>
  );
}

const positionAnim = keyframes`
    from { transform: translate(0,  0px); }
    65%  { transform: translate(0, 15px); }
    to   { transform: translate(0, -0px); } 
`;

const styles = {
  banner: {
    overflow: ['hidden', 'initial', null, 'hidden'],
    backgroundImage: `url(${BannerBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pt: ['150px', null, null, null, null, null, '140px', '130px'],
    pb: ['100px', null, null, '110px', null, 10, '150px'],
    backgroundColor: 'primary',
    container: {
      display: 'flex',
    },
    contentBox: {
      width: ['100%', null, '85%', '55%', '50%', '55%'],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      flexShrink: 0,
      pt: [0, null, null, null, null, null, 5, 7],
      zIndex: '0',
    },
    imageBox: {
      display: ['none', null, null, 'block'],
      justifyContent: 'center',
      ml: [0, null, null, '-110px', '-115px', '-150px', '-210px', '-270px'],
      mr: [0, null, null, '-145px', '-160px', '-180px', '-220px', '-290px'],
      mt: [0, null, null, '40px', 4, 7, 0],
      mb: [0, null, null, null, '-45px', '-70px', null, '-115px'],
      overflow: 'hidden',
      textAlign: 'right',
      width: '100%',
    }
  },
  sponsorTitle: {
    color: 'white',
    fontSize: [1, 2],
    opacity: 0.6,
    pr: 20,
    flexShrink: 0,
    pb: [2, null, 0],
  },
  certificationBox: {
    pt: ['35px', null, null, null, null, '45px'],
    flexDirection: ['column', null, 'row'],
    certifications: {
      display: 'flex',
      alignItems: 'center',
      '> a': {
        mr: [5, null, null, 4, 6],
        display: 'flex',
        '&:last-of-type': {
          mr: 0,
        },
      },
    },
    svg: {
      opacity: 0.90,
      width: '60px',
      height: '100%',
      '&:hover': {
        opacity: 1,
        transform: 'translateY(0) scale(1.2)',
        boxShadow: '0 10px 20px rgba(86, 86, 198, 0.3)'
      },
    },
  },
  avatar: {
    animationName: `${positionAnim}`,
    animationDuration: '10s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    zIndex: '-1',
    position: 'absolute'
  }
};


