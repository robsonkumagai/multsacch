/** @jsx jsx */
import { jsx, Box, Container, Heading, Text } from 'theme-ui';
import Image from './image';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function ProbioticsCardColumn({
  src,
  altText = 'default alt text',
  nivel,
  title,
  text,
}) {
  return (
    <Container sx={styles.card}>
      <AnimationOnScroll initiallyVisible={true} animateIn="animate__zoomIn">
        <Box sx={styles.box}>
          <Image src={src} alt={altText} sx={styles.img} />
        </Box>
      </AnimationOnScroll>

      <Box>
        <Heading sx={styles.wrapper.title}><span sx={styles.wrapper.numberTitle}>{title}</span> <br></br>Bilhões UFC/g</Heading>
        <Text sx={styles.wrapper.subTitle}>{text}</Text>
        <Text>{nivel}</Text>
      </Box>
    </Container>
  );
}

const styles = {
  card: {
    textAlign: 'center',
    flexDirection: 'column',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  box: {
    height: '180px',
    maxHeight: '180px',
  },
  img: {
    width: '170',
    height: '150px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    title: {
      fontSize: [5, null, null, null, null, 5],
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, null, 3],
    },
    numberTitle: {
      fontSize: '48px',
      lineHeight: 0.7,
      fontWeight: 1900,
      color: '#932e8f',
      fonts: '-apple-system'
    },
    subTitle: {
      fontStyle: 'italic',
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
    },
  },
};
