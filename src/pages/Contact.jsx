import styled from 'styled-components';
import {
  FaRegAddressBook,
  FaRegEnvelope,
  FaRegUser,
  FaRegMap
} from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const Container = styled.section`
  background-image: var(--gradient1);
  padding-top: 7rem;
`;

const Title = styled.h2`
  text-align: center;
  font-size: var(--h1);
`;

const Subtitle = styled.p`
  color: var(--primary);
  text-align: center;
  font-size: var(--smaller);
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 5rem;

  & span {
    font-family: var(--font2);
    color: var(--title);
    font-size: var(--h3);
    text-transform: capitalize;
    margin-left: 10px;
  }
`;

const Content = styled.div`
  grid-template-columns: 5fr 7fr;
`;

const Card = styled.div`
  padding-left: 130px;
  margin-bottom: 2.5rem;
  position: relative;
`;

const Icon = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  border: 2px solid var(--border);
  background-color: var(--container);
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  box-shadow: var(--shadow);
  font-size: var(--larger);
  display: grid;
  place-items: center;

  &::after {
    content: '';
    width: 2.5rem;
    height: 2px;
    background-color: var(--border);
    position: absolute;
    left: 100%;
    top: 50%;
    margin-top: -1px;
  }
`;

const CardTitle = styled.h3`
  font-size: var(--h2);
  font-family: var(--font2);
  padding-block: 6px;
  color: var(--title);
  font-weight: 400;
`;

const CardData = styled.p``;

const Wrapper = styled.div``;

const Link = styled.a`
  color: var(--primary);
  text-decoration: underline;
`;

const Contact = () => {
  return (
    <Container className="section" id="contact">
      <Title className="text-cs">Contacto</Title>
      <Subtitle>
        te interesa? <span>Hablemos!</span>
      </Subtitle>

      <Content className="container grid">
        <Wrapper>
          {cards.map(item => {
            return (
              <Card key={item.title}>
                <Icon>{item.icon}</Icon>
                <CardTitle>{item.title}</CardTitle>
                <CardData>{item.data}</CardData>
              </Card>
            );
          })}
        </Wrapper>

        <ContactForm />
      </Content>
    </Container>
  );
};

const cards = [
  {
    icon: <FaRegAddressBook />,
    title: 'Celular',
    data: (
      <Link
        href="https://api.whatsapp.com/send/?phone=5493515912166&text&app_absent=0"
        target="_blank"
      >
        +54 9 3515912166
      </Link>
    )
  },
  {
    icon: <FaRegEnvelope />,
    title: 'Email',
    data: (
      <Link href="mailto:lean.arbelo.dev@gmail.com" target="_blank">
        lean.arbelo.dev@gmail.com
      </Link>
    )
  },
  {
    icon: <FaRegUser />,
    title: 'LinkedIn',
    data: (
      <Link href="https://www.linkedin.com/in/leandro-arbelo/" target="_blank">
        Leandro Arbelo
      </Link>
    )
  },
  {
    icon: <FaRegMap />,
    title: 'Direccion',
    data: (
      <Link href="https://goo.gl/maps/uaRkBFCv5kGwfu2E7" target="_blank">
        Córdoba, Argentina
      </Link>
    )
  }
];

export default Contact;
