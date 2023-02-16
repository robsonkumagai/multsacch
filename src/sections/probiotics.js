/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import ProbioticsCardColumn from 'components/probiotics-card-column.js';
import Dish from 'assets/dish.png';

import Acidophilus from 'assets/acidophilusdish.png';
import Subtilis from 'assets/subtilisdish.png';
import Casei from 'assets/caseidish.png';

const data = [
  {
    id: 1,
    imgSrc: Subtilis,
    altText: 'Bacillus subtilis',
    title: '5.67',
    text: 'Bacillus subtilis',
  },
  {
    id: 2,
    imgSrc: Dish,
    altText: 'Bifidobacterium bifidum',
    title: '25.67',
    text: 'Bifidobacterium bifidum',
  },
  {
    id: 3,
    imgSrc: Dish,
    altText: 'Enterococcus faecium',
    title: '95.67',
    text: 'Enterococcus faecium',
  },
  {
    id: 4,
    imgSrc: Acidophilus,
    altText: 'Lactobacillus acidophilus',
    title: '87.67',
    text: 'Lactobacillus acidophilus',
  },
  {
    id: 5,
    imgSrc: Dish,
    altText: 'Lactobacillus buchneri',
    title: '69.67',
    text: 'Lactobacillus buchneri',
  },
  {
    id: 6,
    imgSrc: Casei,
    altText: 'Lactobacillus casei',
    title: '25.67',
    text: 'Lactobacillus casei',
  },
  {
    id: 7,
    imgSrc: Dish,
    altText: 'Lactobacillus lactis',
    title: '54.67',
    text: 'Lactobacillus lactis',
  },
  {
    id: 8,
    imgSrc: Dish,
    altText: 'Saccharomyces cerivisiae',
    title: '9.67',
    text: 'Saccharomyces cerivisiae',
  },
];

export default function Probiotics() {
  return (
    <section sx={{ variant: 'section.probiotics' }} id="probiotics">
      <Container>
        <SectionHeader
          slogan="Diversas cepas selecionadas... "
          title="MultSacch é a melhor escolha de probiótico (Trocar)"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <ProbioticsCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    px: [0, null, null, '20px', null, '0px'],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['35px 0', null, '40px 0'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
      null,
      'repeat(4,1fr)',
      null,
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
};
