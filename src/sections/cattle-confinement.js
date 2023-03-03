/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import PatternBG from 'assets/bg6.webp';
import Charts from 'components/chart';
import CattleConfinementTable from 'components/table/cattle-confinement-table';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const chartData = ([
    {
        id: 11,
        backgroundColor: '#ffffff0d',
        barColor: ["#c1c1c1", "#932e8f"],
        fontColor: '#343d48',
        title: 'Média de peso vivo médio inicial (kg)',
        scale: [0, 50, 100, 150, 200, 250, 300, 350, 400],
        value: [384.50, 384.60],
    },
    {
        id: 12,
        backgroundColor: '#ffffff0d',
        barColor: ["#c1c1c1", "#932e8f"],
        fontColor: '#343d48',
        title: 'Média de ganho de peso médio diário (kg)',
        scale: [0, 0.5, 1, 1.5, 2],
        value: [1.16, 1.41],
    },
    {
        id: 13,
        backgroundColor: '#ffffff0d',
        barColor: ["#c1c1c1", "#932e8f"],
        fontColor: '#343d48',
        title: 'Média de consumo de matéria seca (kg)',
        scale: [0, 2, 4, 6, 8, 10, 12, 14],
        value: [10.26, 10.90],
    },
    {
        id: 14,
        backgroundColor: '#ffffff0d',
        barColor: ["#c1c1c1", "#932e8f"],
        fontColor: '#343d48',
        title: 'Média de rendimento de carcaça (%)',
        scale: [0, 20, 40, 60],
        value: [53.10, 54.74],
    },
    {
        id: 15,
        backgroundColor: '#ffffff0d',
        barColor: ["#c1c1c1", "#932e8f"],
        fontColor: '#343d48',
        title: 'Média de arrobas produzidas no período (@)',
        scale: [0, 1, 2, 3, 4, 5],
        value: [3.70, 4.63],
    },
    {
        id: 16,
        backgroundColor: '#ffffff0d',
        barColor: ["#c1c1c1", "#932e8f"],
        fontColor: '#343d48',
        title: 'Média de conversão alimentar',
        scale: [0, 2, 4, 6, 8, 10],
        value: [8.80, 7.73],
    }
]);

const chartData2 = ([
    {
        id: 17,
        backgroundColor: '#ffffff0d',
        barColor: ["#c1c1c1", "#932e8f"],
        fontColor: '#343d48',
        title: 'Média de peso vivo médio final (kg)',
        scale: [0, 100, 200, 300, 400, 500, 600],
        value: [488.88, 511.90],
    },
    {
        id: 18,
        backgroundColor: '#ffffff0d',
        barColor: ["#c1c1c1", "#932e8f"],
        fontColor: '#343d48',
        title: 'Média de ganho de peso vivo total (kg)',
        scale: [0, 20, 40, 60, 80, 100, 120, 140, 160],
        value: [104.38, 126.90],
    }
]);

export default function CattleConfinement() {
    return (
        <section sx={styles.workflow} id="cattle-confinement">
            <Container>
                <AnimationOnScroll animateIn="animate__flash">
                    <SectionHeader
                        slogan="Efeito da suplementação de bovinos terminandos em confinamento"
                        title="Com a utilização do aditivo probiótico MultSacch"
                        isWhite={true}
                    />
                </AnimationOnScroll>

                <CattleConfinementTable></CattleConfinementTable>

                <Grid sx={styles.grid}>
                    {chartData.map((it) => (
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
                    {chartData2.map((it) => (
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
        backgroundColor: '#bcbdbe',
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
