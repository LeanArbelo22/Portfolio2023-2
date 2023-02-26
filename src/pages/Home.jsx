import styled, { css } from 'styled-components';
import HomeProfile from '../components/HomeProfile';
import Socials from '../components/HomeSocials';
import { large, mobile, smallMobile, tablet } from '../styles/responsive';

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

  ${large({
    top: '5rem',
    padding: '0 2rem'
  })}

  ${tablet({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  })}

  ${mobile({
    top: '1rem'
  })}

  ${smallMobile({
    padding: '0 1rem'
  })}
`;

const Span = styled.span``;

const Subtitle = styled.p`
  font-weight: 700;
  font-size: var(--small);
  color: var(--title);

  & ${Span} {
    color: var(--primary);
  }

  ${mobile({
    display: 'none'
  })}
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

  ${large({
    fontSize: 'var(--big)'
  })}

  ${mobile({
    fontSize: 'var(--h1)'
  })}

  ${smallMobile({
    fontSize: '2.45rem'
  })}
`;

const Job = styled.p`
  font-weight: 700;

  & ${Span} {
    font-size: var(--small);
    color: var(--title);

    ${smallMobile({
      fontSize: '.7rem'
    })}
  }

  & b {
    font-family: var(--font2);
    font-size: var(--h2);
    margin-left: 0.55rem;

    ${smallMobile({
      fontSize: 'var(--h4)'
    })}
  }
`;

const Description = styled.p`
  font-size: var(--large);
  margin-block: 2.5rem 1.75rem;
  max-width: 520px;

  ${large({
    maxWidth: '420px'
  })}

  ${mobile({
    fontSize: 'var(--normal)'
  })}

  ${smallMobile({
    fontSize: 'var(--small)'
  })}
`;

const Buttons = styled.div`
  display: flex;
  column-gap: 4.375rem;

  ${mobile({
    position: 'relative',
    top: '2.2rem'
  })}

  ${smallMobile({
    top: '1.3rem'
  })}
`;

const Button = styled.a`
  ${mobile({
    padding: '0 1rem'
  })}

  &::before {
    ${mobile({
      display: 'none'
    })}
  }

  ${smallMobile({
    fontSize: '0.7rem',
    padding: '0 .5rem'
  })}/* 
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
            <Span className="text-cs">{/* soy */}</Span>
            <b>Desarrollador Full Stack</b>
          </Job>
          <HomeProfile />
          <Description>
            ...con preferencia y mayor experiencia en desarrollo frontend.
            <br />
            Soy un programador altamente motivado y apasionado por lo que hago. Con capacidad para aprender rápidamente nuevas
            tecnologías y habilidades, me destaco por mi
            atención al detalle y mi compromiso con la calidad en todas las
            soluciones que desarrollo. Estoy seguro de que mi compromiso
            y habilidades me permitirán ser un miembro valioso de cualquier
            equipo de programación.
            <br />
          </Description>
          <Socials />
          <Buttons>
            <Button
              download
              href="/CV-2023-ESP-LeandroArbelo.pdf"
              alt="CV"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-cs"
            >
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
