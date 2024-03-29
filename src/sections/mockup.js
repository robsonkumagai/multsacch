/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Image, Container, Box, Grid, Text, Heading } from 'theme-ui';
import TextFeature from 'components/text-feature';
import MockupMultsacch from 'assets/mockup/mockup.webp';
import Bacteria from 'assets/mockup/bacteria.svg';
import Tecnologia from 'assets/mockup/tecnologia.svg';

const data = {
    subTitle: 'MultSacch',
    title: 'Um blend de bactérias e leveduras vivas utilizadas como aditivo probiótico.',
    features: [
        {
            id: 1,
            imgSrc: Bacteria,
            altText: 'Bactérias e leveduras vivas',
            title: 'Bactérias e leveduras vivas',
            text:
                'MultSacch é composto por cepas criteriosamente escolhidas, garantidas pela sua estabilidade e conferindo funções específicas com benefícios capazes de melhorar o desempenho animal.',
        },
        {
            id: 2,
            imgSrc: Tecnologia,
            altText: 'Tecnologia própria',
            title: 'Tecnologia própria',
            text:
                'O MultSacch é produzido através de tecnologia própria com rastreabilidade e certificação de qualidade.',
        },
    ],
};

export default function Mockup() {
    return (
        <section id="mockup" sx={{ variant: 'section.mockup' }}>
            <Container sx={styles.containerBox}>
                <Box sx={styles.thumbnail}>
                    <Image src={MockupMultsacch} alt="Embalagem do probiótico para ruminantes MultSacch" sx={styles.mockup} />
                </Box>
                <Box sx={styles.contentBox}>
                    <Box sx={styles.headingTop}>
                        <TextFeature subTitle={data.subTitle} title={data.title} />
                    </Box>

                    <Grid gap="15px 0" columns={1} sx={styles.grid}>
                        {data.features.map((item) => (
                            <Box sx={styles.card} key={item.id}>
                                <Image src={item.imgSrc} alt={item.altText} style={styles.icon} />

                                <Box sx={styles.wrapper}>
                                    <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                                    <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
                                </Box>
                            </Box>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </section>
    );
}

const styles = {
    coreFeature: {
        py: [0, null, null, 2, null, 7],
        position: 'relative',
        '&::before': {
            position: 'absolute',
            content: '""',
            top: ['auto', null, null, '50%'],
            bottom: ['0px', 0, null, 'auto'],
            left: 0,
            background: 'linear-gradient(-157deg, #F6FAFD, #F9FCFC, #FCFDFC)',
            height: [350, 550, '60%'],
            width: '50%',
            zIndex: -1,
            borderTopRightRadius: '50%',
            borderBottomRightRadius: '50%',
            transform: ['translateY(0)', null, null, 'translateY(-50%)'],
        },
    },
    containerBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: ['column', null, null, 'row'],
        marginTop: '50px'
    },
    thumbnail: {
        pl: [0, 5, 0, null, 7, 45],
        pr: [0, 5, null, null, null, 75, 45],
        order: [2, null, null, 0],
    },
    contentBox: {
        width: ['100%', 450, 550, 350, 500, 570],
        pr: [0, null, 'auto', null, null, 80],
        pl: 'auto',
        flexShrink: 0,
    },
    headingTop: {
        pl: [0, null, null, null, '35px', null, '55px', 6],
        mb: [3, null, null, null, 1],
        textAlign: ['center', null, null, 'left'],
    },
    grid: {
        p: ['0 0px 35px', null, null, null, '0 20px 40px', null, '0 40px 40px', 0],
    },
    card: {
        display: 'flex',
        alignItems: 'flex-start',
        p: [
            '0 17px 20px',
            null,
            null,
            '0 0 20px',
            '20px 15px 17px',
            null,
            null,
            '25px 30px 23px',
        ],
        backgroundColor: 'white',
        borderRadius: '10px',
        transition: 'all 0.3s',
        width: ['100%', '85%', null, '100%'],
        mx: 'auto',
        '&:hover': {
            boxShadow: [
                '0px 0px 0px rgba(0, 0, 0, 0)',
                null,
                null,
                null,
                '0px 8px 24px rgba(69, 88, 157, 0.07)',
            ],
        },
    },

    icon: {
        width: "100px",
        height: 'auto',
        flexShrink: 0,
        mr: [3, 4],
        paddingRight: "20px"
    },
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        mt: '-5px',
        title: {
            fontSize: 3,
            color: 'heading_secondary',
            lineHeight: 1.4,
            fontWeight: 700,
            mb: [2, null, null, null, 3],
        },

        subTitle: {
            fontSize: 1,
            fontWeight: 400,
            lineHeight: [1.85, null, 2],
        },
    },
};
