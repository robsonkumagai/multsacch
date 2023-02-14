/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Grid } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';
import Partner from 'assets/partner.png';
import { Carousel } from 'react-responsive-carousel';

const data = {
  subTitle: 'Aditivo probiótico super premium',
  title: 'MultSacch',
  description:
    'MultSacch é um blend super premium composto por bactérias e leveduras vivas utilizadas como aditivo probiótico',
  btnName: 'Outros produtos',
  btnURL: 'https://biomart.com.br',
};

export default function Information() {
  return (

    <section sx={{ variant: 'section.partner' }}>
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
          {/* <Image src={Partner} alt="Partner" /> */}
          <Carousel>
                <div>
                    <img src={Partner} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={Partner} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={Partner} />
                    <p className="legend">Legend 3</p>
                </div>
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
  }
};
