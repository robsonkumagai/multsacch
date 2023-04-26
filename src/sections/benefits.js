/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import SectionHeader from 'components/section-header';
import BenefitsCard from 'components/benefits-card.js';

import Peso from 'assets/benefits/peso.svg';
import Metabolismo from 'assets/benefits/metabolismo.svg';
import Ruminal from 'assets/benefits/ruminal.svg';
import Digestibilidade from 'assets/benefits/digestibilidade.svg';
import Rumen from 'assets/benefits/rumen.svg';
import Crescimento from 'assets/benefits/crescimento.svg';
import Materia from 'assets/benefits/materiaseca.svg';
import Leite from 'assets/benefits/leite.svg';
import Estresse from 'assets/benefits/estresse.svg';

const data = [
  {
    id: 1,
    imgSrc: Peso,
    altText: 'Ganho de peso com a utilização de probióticos.',
    title: 'Ganho de peso',
    text:
      'Maior ganho de peso;',
  },
  {
    id: 2,
    imgSrc: Metabolismo,
    altText: 'Harmonização do sistema digestivo com a utilização de probióticos.',
    title: 'Metabolismo',
    text:
      'Harmoniza o sistema digestivo e equilibra o metabolismo;',
  },
  {
    id: 3,
    imgSrc: Ruminal,
    altText: 'Melhoria do ambiente ruminal com a utilização de probióticos.',
    title: 'Ambiente ruminal',
    text:
      'Melhora o ambiente ruminal e intestinal;',
  },
  {
    id: 4,
    imgSrc: Digestibilidade,
    altText: 'Maior digestibilidade com a utilização de probióticos.',
    title: 'Digestibilidade',
    text:
      'Maior digestibilidade de fibras;',
  },
  {
    id: 5,
    imgSrc: Rumen,
    altText: 'Melhoria da população biológoca do rúmen e intestinos com a utilização de probióticos.',
    title: 'Rumen e intestinos',
    text:
      'Restabelece, estimula e equilibra a população biológica do rúmen e intestinos;',
  },
  {
    id: 6,
    imgSrc: Crescimento,
    altText: 'Maior crescimento de animais com a utilização de probióticos.',
    title: 'Crescimento',
    text:
      'Maior crescimento;',
  },
  {
    id: 7,
    imgSrc: Materia,
    altText: 'Aumento da ingestão de matéria seca utilizando probióticos.',
    title: 'Matéria seca',
    text:
      'Aumenta a ingestão de matéria seca;',
  },
  {
    id: 8,
    imgSrc: Leite,
    altText: 'Aumento da produção de leite com a utilização de probióticos.',
    title: 'Leite',
    text:
      'Aumenta a produção e percentual de gordura no leite;',
  },
  {
    id: 9,
    imgSrc: Estresse,
    altText: 'Redução do estresse animal com a utilização de probióticos.',
    title: 'Estresse',
    text:
      'Reduz o estresse.',
  },
];

export default function Benefits() {
  return (
    <section sx={{ variant: 'section.benefits' }} id="benefits">
      <Container>
        <AnimationOnScroll animateIn="animate__flash">
          <SectionHeader
            slogan="MultSacch"
            title="Confira alguns dos principais benefícios do probiótico MultSacch"
          />
        </AnimationOnScroll>

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <BenefitsCard
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
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
