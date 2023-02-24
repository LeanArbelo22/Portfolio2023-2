import styled from 'styled-components';
import HomeProfile from '../components/HomeProfile';
import Socials from '../components/HomeSocials';

const Section = styled.section`
  background-image: var(--gradient1);
  user-select: none;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Span = styled.span``;

const Subtitle = styled.p`
  font-weight: 700;
  font-size: var(--small);
  color: var(--title);

  & ${Span} {
    color: var(--primary);
  }
`;

const Title = styled.h1`
  font-size: var(--bigger);
  text-shadow: var(--text-shadow);
  line-height: 1.2;
  margin-top: 0.99rem;
  color: #fff;

  & ${Span} {
    color: var(--primary);
  }
`;

const Job = styled.p`
  font-weight: 700;

  & ${Span} {
    font-size: var(--small);
    color: var(--title);
  }

  & b {
    font-family: var(--font2);
    font-size: var(--h2);
    margin-left: 0.55rem;
  }
`;

const Description = styled.p`
  font-size: var(--large);
  margin-block: 2.5rem 1.75rem;
  max-width: 520px;
`;

const Buttons = styled.div`
  display: flex;
  column-gap: 4.375rem;
`;

const Button = styled.a`
  /* 
  .btn, .link {
    color: var(--title);
    font-size: var(--smaller);
    font-weight: 700;
    height: 3.5rem;
    display: grid;
    place-items: center;
    position: relative; 
  }
  
  .btn::before {
    content: '';
    position: absolute;
    inset: 2px;
    background-color: var(--primary);
    transform: scale(.3);
    filter: blur(10px);
    opacity: 0;
    transition: all .7s var(--timing);
    z-index: -1;
  }

  .btn:hover::before {
    transform: scale(1);
    filter: blur(0);
    opacity: 1;
  }

  .link::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -85%;
    width: 45px;
    height: 2px;
    background-color: var(--border);
  }
  */
`;

const Home = () => {
  return (
    <Section id="home">
      <Wrapper>
        <Container className="container">
          <Subtitle className="text-cs">
            Hola, <Span>mi nombre es</Span>
          </Subtitle>
          <Title className="text-cs">
            <Span>LEA</Span> ARBELO
          </Title>
          <Job>
            <Span className="text-cs">Soy</Span> <b>Desarrollador Full Stack</b>
          </Job>
          <HomeProfile />
          <Description>
            Un apasionado programador con preferencia y mayor experiencia en Desarrollo Frontend. Aunque no poseo mucha experiencia en proyectos reales me gusta aspirar a poder trabajar en proyectos desafiantes en los que tenga la oportunidad de aprender y crecer profesionalemente.
          </Description>
          <Socials />
          <Buttons>
            <Button href="../assets/CV-2023-ESP-LeandroArbelo.pdf" download={"CV-Leandro-Arbelo.pdf"} className="btn text-cs">
              Descargar CV
            </Button>
            <Button href="#skills" className="link text-cs">
              Skills
            </Button>
          </Buttons>
        </Container>
      </Wrapper>
    </Section>
  );
};

export default Home;
