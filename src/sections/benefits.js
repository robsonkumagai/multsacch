/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import BenefitsCard from 'components/benefits-card.js';
import Smart from 'assets/feature/smart.svg';
import Winner from 'assets/feature/winner.svg';
import Cloud from 'assets/feature/cloud.svg';
import Setting from 'assets/feature/setting.svg';
import Design from 'assets/feature/design.svg';
import Chat from 'assets/feature/chat.svg';


import Estresse from 'assets/feature/estresse.svg';
import Gordura from 'assets/feature/gordura.svg';
import Leite from 'assets/feature/leite.svg';
import Materia from 'assets/feature/materiaseca.svg';

const data = [
  {
    id: 1,
    imgSrc: Design,
    altText: 'Productivity',
    title: 'Ganho de peso',
    text:
      'Maior ganho de peso;',
  },
  {
    id: 2,
    imgSrc: Winner,
    altText: 'Performance',
    title: 'Metabolismo',
    text:
      'Harmozina o sistema digestivo e equilibra o metabolismo animal;',
  },
  {
    id: 3,
    imgSrc: Cloud,
    altText: 'Content',
    title: 'Ambiente ruminal',
    text:
      'Melhora o ambiente ruminal e intestinal;',
  },
  {
    id: 4,
    imgSrc: Setting,
    altText: 'Customization',
    title: 'Digestibilidade',
    text:
      'Maior digestibilidade de fibras;',
  },
  {
    id: 5,
    imgSrc: Smart,
    altText: 'Smart',
    title: 'Rumen e intestinos',
    text:
      'Restabelece, estimula e equilibra a população biológica do rúmen e intestinos;',
  },
  {
    id: 6,
    imgSrc: Chat,
    altText: 'Support',
    title: 'Crescimento',
    text:
      'Maior crescimento;',
  },
  {
    id: 7,
    imgSrc: Materia,
    altText: 'Support',
    title: 'Matéria seca',
    text:
      'Aumenta a ingestão de matéria seca;',
  },
  {
    id: 8,
    imgSrc: Leite,
    altText: 'Support',
    title: 'Leite',
    text:
      'Aumenta a produção e percentual de gordura no leite;',
  },
  {
    id: 9,
    imgSrc: Estresse,
    altText: 'Support',
    title: 'Estresse',
    text:
      'Reduz o estresse.',
  },
];

export default function Benefits() {
  return (
    <section sx={{ variant: 'section.benefits' }}>
      <Container>
        <SectionHeader
          slogan="MultSacch"
          title="Confira 9 benefícios do probiótico MultSacch"
        />

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
