/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import PatternBG from 'assets/bg5.webp';
import Charts from 'components/chart';
import CalfPastureTable from 'components/table/calf-pasture-table';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const chartDataKg = ([
    {
        id: 1,
        backgroundColor: '#ffffff0d',
        barColor: ["#c1c1c1", "#932e8f"],
        fontColor: '#343d48',
        title: 'Peso vivo médio inicial (kg)',
        scale: [0, 50, 100, 150, 200, 250],
        value: [190.75, 190.25],
    },
    {
        id: 2,
        backgroundColor: '#ffffff0d',
        barColor: ["#c1c1c1", "#932e8f"],
        fontColor: '#343d48',
        title: 'Peso vivo médio final (kg)',
        scale: [0, 50, 100, 150, 200, 250],
        value: [213.00, 221.25],
    },
    {
        id: 3,
        backgroundColor: '#ffffff0d',
        barColor: ["#c1c1c1", "#932e8f"],
        fontColor: '#343d48',
        title: 'Ganho de peso vivo total (kg)',
        scale: [0, 10, 20, 30, 40],
        value: [22.25, 31.00],
    }
]);

const chartDataGr = ([
    {
        id: 4,
        backgroundColor: '#ffffff0d',
        barColor: ["#c1c1c1", "#932e8f"],
        fontColor: '#343d48',
        title: 'Ganho de peso vivo médio diário (g)',
        scale: [0, 100, 200, 300, 400],
        value: [247.22, 344.44],
    },
    {
        id: 5,
        backgroundColor: '#ffffff0d',
        barColor: ["#c1c1c1", "#932e8f"],
        fontColor: '#343d48',
        title: 'Consumo médio diário de suplemento mineral com fontes proteica e energética (g)',
        scale: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180],
        value: [151.00, 150.50],
    }
]);

export default function CalfPasture() {
    return (
        <section sx={styles.workflow} id="calf-pasture">
            <Container>
                <AnimationOnScroll animateIn="animate__flash">
                    <SectionHeader
                        slogan="Efeito da suplementação de bezerros em regime extensivo a pasto"
                        title="Com a utilização do aditivo probiótico MultSacch"
                        isWhite={true}
                    />
                </AnimationOnScroll>

                <CalfPastureTable></CalfPastureTable>

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
        backgroundColor: '#d8d4ca',
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
        paddingTop: '30px',
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
