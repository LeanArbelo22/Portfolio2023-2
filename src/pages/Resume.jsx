import styled from 'styled-components';
import ResumeCard from '../components/ResumeCard';
import { curriculum } from '../data';
import { large, mobile } from '../styles/responsive';

const Container = styled.section`
  background-image: var(--gradient2);
  min-height: 100vh;
  padding-top: 7rem;
`;

const Title = styled.h2`
  text-align: center;
  font-size: var(--h1);

  ${mobile({
    fontSize: 'var(--h2)'
  })}
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

const ResumeContent = styled.div`
  grid-template-columns: repeat(2, 1fr);

  ${mobile({
    gridTemplateColumns: 'repeat(1, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
  })}
`;

const Group = styled.div`
  ${large({
    maxWidth: '95%'
  })}

  ${mobile({
    marginBottom: '4rem'
  })}
`;

const Heading = styled.h3`
  text-align: center;
  font-size: var(--h4);
  padding-bottom: 30px;
  border-bottom: 2px solid var(--border);
`;

const Items = styled.div``;

const Resume = () => {
  return (
    <Container className="section" id="resume">
      <Title className="text-cs">Curriculum</Title>
      <Subtitle>
        mi <span>trayectoria</span>
      </Subtitle>

      <ResumeContent className="container grid">
        <Group>
          <Heading>Estudios</Heading>
          <Items>
            {curriculum.map(item => {
              if (item.category === 'educacion') {
                return <ResumeCard key={item.id} item={item} />;
              }
            })}
          </Items>
        </Group>
        <Group>
          <Heading>Trabajo</Heading>
          <Items>
            {curriculum.map(item => {
              if (item.category === 'trabajo') {
                return <ResumeCard key={item.id} item={item} />;
              }
            })}
          </Items>
        </Group>
      </ResumeContent>
    </Container>
  );
};

export default Resume;
