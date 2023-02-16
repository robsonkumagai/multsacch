/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';
import Partner from 'assets/partner.png';

import Bezerro from 'assets/animals/bezerro.png';
import Boi from 'assets/animals/bovino.png';
import Bufalo from 'assets/partner.png';
import Caprinos from 'assets/partner.png';
import Vaca from 'assets/partner.png';

import { Carousel } from 'react-responsive-carousel';

const data = {
  subTitle: 'Aditivo probiótico super premium',
  title: 'MultSacch',
  description:
    'Com cepas exclusivas e selecionadas MultSacch pode ser utilizado em produções de: Bovinos, Bubalinos, Ovinos e Caprinos.',
  btnName: 'Outros produtos',
  btnURL: 'https://biomart.com.br',
};

const dataImg = [
  {
    id: 1,
    imgSrc: Bezerro,
    altText: 'Bactérias e leveduras vivas'
  },
  {
    id: 2,
    imgSrc: Boi,
    altText: 'Tecnologia própria'
  },
  {
    id: 3,
    imgSrc: Boi,
    altText: 'Tecnologia própria'
  }
];

export default function Information() {
  return (
    <section sx={{ variant: 'section.information' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={{ px: [0, null, '40px', 0] }}>
          <Carousel autoPlay={true} showArrows={true} infiniteLoop={true} showStatus={false}>
            {dataImg.map((it) => (
              <Image src={it.imgSrc} alt={it.altText} id={it.id} sx={styles.img}/>
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
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
      // opacity: 0.3,
  }
};