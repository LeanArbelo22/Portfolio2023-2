import { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import PortfolioItems from '../components/PortfolioItems';
import PortfolioList from '../components/PortfolioList';
import { projects } from '../data';

const Wrapper = styled.div`
  padding-top: 6rem;
`;

const Container = styled.section`
  background-image: var(--gradient1);
  user-select: none;
  padding-top: 1rem;
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

const ItemsContainer = styled.div`
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
`;

const categories = [
  'Todas',
  ...new Set(projects.map(project => project.category))
];

const Portfolio = () => {
  const [projectItems, setProjectItems] = useState(projects);
  const [categoriesList, setCategoriesList] = useState(categories);

  const filterProjects = category => {
    if (category === 'Todas') {
      setProjectItems(projects);
      return;
    }
    const newList = projects.filter(item => item.category === category);
    setProjectItems(newList);
  };

  return (
    <Wrapper id="portfolio">
      <Container className="section">
        <Title className="text-cs">portafolio</Title>
        <Subtitle>
          algunos <span>proyectos</span>
        </Subtitle>
        <PortfolioList list={categoriesList} filter={filterProjects} />
        <ItemsContainer className="container grid">
          <AnimatePresence initial={false}>
            <PortfolioItems projects={projectItems} />
          </AnimatePresence>
        </ItemsContainer>
      </Container>
    </Wrapper>
  );
};

export default Portfolio;
