/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import PatternBG from 'assets/fundo1.webp';
import Charts from 'components/chart';
import CattlePastureTable from 'components/table/cattle-pasture-table';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const chartDataKg = ([
    {
        id: 6,
        barColor: ['#c1c1c1', '#a79f88'],
        title: 'Peso vivo médio inicial (kg)',
        scale: [0, 50, 100, 150, 200, 250, 300],
        value: [266.10, 256.60],
    },
    {
        id: 7,
        barColor: ['#c1c1c1', '#a79f88'],
        title: 'Peso vivo médio final (kg)',
        scale: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360],
        value: [318.90, 328.50],
    },
    {
        id: 8,
        barColor: ['#c1c1c1', '#a79f88'],
        title: 'Ganho de peso vivo total (kg)',
        scale: [0, 10, 20, 30, 40, 50, 60, 70, 80],
        value: [52.80, 62.90],
    }
]);

const chartDataGr = ([
    {
        id: 9,
        barColor: ['#c1c1c1', '#a79f88'],
        title: 'Ganho de peso vivo médio diário (g)',
        scale: [0, 100, 200, 300, 400, 500, 600, 700, 800],
        value: [586.66, 698.88],
    },
    {
        id: 10,
        barColor: ['#c1c1c1', '#a79f88'],
        title: 'Consumo médio diário de suplemento mineral com fontes proteica e energética (g)',
        scale: [0, 50, 100, 150, 200, 250, 300, 350],
        value: [260.53, 259.48],
    }
]);

export default function CattlePasture() {
    return (
        <section sx={styles.workflow} id="cattle-pasture">
            <Container>
                <AnimationOnScroll animateIn="animate__flash">
                    <SectionHeader
                        slogan="Efeito da suplementação de bovinos em regime extensivo a pasto"
                        title="Com a utilização do aditivo probiótico MultSacch"
                        isWhite={true}
                    />
                </AnimationOnScroll>

                <CattlePastureTable></CattlePastureTable>
                <Grid sx={styles.grid}>
                    {chartDataKg.map((it) => (
                        <Charts
                            key={it.id}
                            backgroundColor={it.backgroundColor}
                            barColor={it.barColor}
                            fontColor={it.fontColor}
                            scale={it.scale}
                            title={it.title}
                            value={it.value}
                        />
                    ))}
                </Grid>
                <Grid sx={styles.grid2}>
                    {chartDataGr.map((it) => (
                        <Charts
                            key={it.id}
                            backgroundColor={it.backgroundColor}
                            barColor={it.barColor}
                            fontColor={it.fontColor}
                            scale={it.scale}
                            title={it.title}
                            value={it.value}
                        />
                    ))}
                </Grid>
            </Container>
        </section>
    );
}

const styles = {
    workflow: {
        backgroundColor: '#932e8f',
        backgroundImage: `url(${PatternBG})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        position: 'relative',
        py: [8, null, 9, null, null, 10],
        '&::before': {
            position: 'absolute',
            content: '""',
            top: 0,
            right: 0,
            width: '100%',
            backgroundSize: '350px 350px',
            height: '100%',
            opacity: 0.3,
            zIndex: 0,
        },
    },
    grid: {
        mb: -1,
        pt: 0,
        gridGap: [
            '35px 0',
            null,
            '45px 50px',
            null,
            '50px 25px',
            null,
            null,
            '50px 65px',
        ],
        gridTemplateColumns: [
            'repeat(1,1fr)',
            null,
            'repeat(2,1fr)',
            null,
            'repeat(3,1fr)',
        ],
        paddingTop: '30px'
    },
    grid2: {
        mb: -1,
        pt: 0,
        gridGap: [
            '35px 0',
            null,
            '45px 50px',
            null,
            '50px 25px',
            null,
            null,
            '50px 65px',
        ],
        gridTemplateColumns: [
            'repeat(1,1fr)',
            null,
            'repeat(2,1fr)',
        ],
        paddingTop: '30px'
    }
};
