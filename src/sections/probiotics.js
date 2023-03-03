/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import ProbioticsCardColumn from 'components/probiotics-card-column.js';

import Acidophilus from 'assets/probiotics/acidophilus.webp';
import Bifidum from 'assets/probiotics/bifidum.webp';
import Buchneri from 'assets/probiotics/buchneri.webp';
import Casei from 'assets/probiotics/casei.webp';
import Enterococcus from 'assets/probiotics/enterococcus.webp';
import Lactis from 'assets/probiotics/lactis.webp';
import Saccharomyces from 'assets/probiotics/sacch.webp';
import Subtilis from 'assets/probiotics/subtilis.webp';


const data = [
  {
    id: 1,
    imgSrc: Subtilis,
    altText: 'Bactéria Bacillus subtilis utilizada como probiótico para ruminantes.',
    nivel: '3,00 x 10⁹ UFC/g',
    title: '5.67',
    text: 'Bacillus subtilis',
  },
  {
    id: 2,
    imgSrc: Bifidum,
    altText: 'Bactéria Bifidobacterium bifidum utilizada como probiótico para ruminantes.',
    nivel: '1,00 x 10⁹ UFC/g',
    title: '25.67',
    text: 'Bifidobacterium bifidum',
  },
  {
    id: 3,
    imgSrc: Enterococcus,
    altText: 'Bactéria Enterococcus faecium utilizada como probiótico para ruminantes.',
    nivel: '1,00 x 10⁹ UFC/g',
    title: '95.67',
    text: 'Enterococcus faecium',
  },
  {
    id: 4,
    imgSrc: Acidophilus,
    altText: 'Bactéria Lactobacillus acidophilus utilizada como probiótico para ruminantes.',
    nivel: '1,00 x 10⁹ UFC/g',
    title: '87.67',
    text: 'Lactobacillus acidophilus',
  },
  {
    id: 5,
    imgSrc: Buchneri,
    altText: 'Bactéria Lactobacillus buchneri utilizada como probiótico para ruminantes.',
    nivel: '2,00 x 10⁹ UFC/g',
    title: '69.67',
    text: 'Lactobacillus buchneri',
  },
  {
    id: 6,
    imgSrc: Casei,
    altText: 'Bactéria Lactobacillus casei utilizada como probiótico para ruminantes.',
    nivel: '1,00 x 10⁹ UFC/g',
    title: '25.67',
    text: 'Lactobacillus casei',
  },
  {
    id: 7,
    imgSrc: Lactis,
    altText: 'Bactéria Lactobacillus lactis utilizada como probiótico para ruminantes.',
    nivel: '1,00 x 10⁹ UFC/g',
    title: '54.67',
    text: 'Lactobacillus lactis',
  },
  {
    id: 8,
    imgSrc: Saccharomyces,
    altText: 'Levedura Saccharomyces cerevisiae utilizada como probiótico para ruminantes.',
    nivel: '2,00 x 10⁸ UFC/g',
    title: '9.67',
    text: 'Saccharomyces cerevisiae',
  },
];

export default function Probiotics() {
  return (
    <section sx={{ variant: 'section.probiotics' }} id="probiotics">
      <Container>
        <SectionHeader
          slogan="8 cepas selecionadas criteriosamente, totalizando"
          title="+ de 30 Trilhões UFC/kg de Produto."
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <ProbioticsCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              nivel={item.nivel}
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
