/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Button, Container, Box, Heading, Link, Text } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import Bezerro from 'assets/animals/bezerro.webp';
import Boi from 'assets/animals/bovino.webp';
import Bufalo from 'assets/animals/bufalo.webp';
import Cabra from 'assets/animals/cabra.webp';
import Ovelha from 'assets/animals/ovelha.webp';
import Vaca from 'assets/animals/vaca.webp';
import LogoDark from 'assets/logo/multsacch.webp';
import { Carousel } from 'react-responsive-carousel';

const data = {
  subTitle: 'Aditivo probiótico super premium',
  title: 'MultSacch',
  description:
    'Com cepas exclusivas e selecionadas MultSacch é utilizado na alimentação de bovinos, bubalinos, ovinos e caprinos.',
  btnName: 'Confira todos os nossos produtos',
  btnURL: 'https://biomart.com.br',
};

const dataImg = [
  {
    id: 1,
    imgSrc: Bezerro,
    altText: 'Aditivo probiótico para bezerros.'
  },
  {
    id: 2,
    imgSrc: Boi,
    altText: 'Aditivo probiótico para bois.'
  },
  {
    id: 3,
    imgSrc: Ovelha,
    altText: 'Aditivo probiótico para ovelhas.'
  },
  {
    id: 4,
    imgSrc: Cabra,
    altText: 'Aditivo probiótico para cabras.'
  },
  {
    id: 5,
    imgSrc: Bufalo,
    altText: 'Aditivo probiótico para búfalos.'
  },
  {
    id: 6,
    imgSrc: Vaca,
    altText: 'Aditivo probiótico para vacas.'
  },
];

export default function Information() {
  return (
    <section sx={{ variant: 'section.information' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>

          <Box sx={styles.card}>
            <Box sx={styles.wrapper}>
              <Text as="p" sx={styles.wrapper.subTitle}>
                {data.subTitle}
              </Text>
              <Image src={LogoDark} alt="MultSacch Logo" width={250} sx={styles.logo} />
            </Box>

            <Text as="p" className="description" sx={styles.description}>
              {data.description}
            </Text>

            <Link href={data.btnURL} variant="default" target="_blank" sx={styles.btn} rel="noopener noreferrer">
              <Button variant="primary" aria-label={data.btnName}>
                {data.btnName}
              </Button>
            </Link>
          </Box>
        </Box>
        <Box>
          <Carousel autoPlay={true} showArrows={true} infiniteLoop={true} showStatus={false} showThumbs={false}>
            {dataImg.map((it) => (
              <Image src={it.imgSrc} alt={it.altText} id={it.id} sx={styles.img} key={it.id} />
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  btn: {
    paddingTop: '20px',

  },
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', 450, 550, '350px', '410px', '485px'],
    mx: 'auto',
    pb: ['30px', null, null, 0],
    '.description': {
      pr: [0, null, null, null, 4],
    },
  },
  gridBox: {
    paddingTop: '20px',
  },
  img: {
    width: '100%',
    maxWidth: '600px',
    maxHeight: '500px',
    height: 'auto'
  },
  logo: {
    width: '250px',
    marginBottom: '20px',
    '@media screen and (max-device-width: 480px)': {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexShrink: 0,
    a: {
      m: ['0 auto', null, null, 0],
    },
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: ['24px', null, '28px', '32px', '36px', '42px', null, '46px'],
      color: 'heading_secondary',
      lineHeight: [1.35, null, null, 1.3, 1.2],
      fontWeight: '700',
      letterSpacing: '-.5px',
      mb: 5,
    },
    subTitle: {
      fontSize: [0, null, '14px'],
      color: 'heading',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: [2, null, null, null, 3],
      lineHeight: 1.5,
    },
  },
};