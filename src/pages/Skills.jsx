import styled from 'styled-components';
import SkillsItems from '../components/SkillsItems';

const Container = styled.section`
  background-image: var(--gradient2);
  padding-top: 180px;
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

const Skills = () => {
  return (
    <Container className="section" id="skills">
      <Title className="text-cs">habilidades</Title>
      <Subtitle>
        y <span>tecnologias</span>
      </Subtitle>
      <SkillsItems />
    </Container>
  );
};

export default Skills;
