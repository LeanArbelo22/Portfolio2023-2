import styled from 'styled-components';
import { skills } from '../data';

const SkillsContent = styled.div`
  grid-template-columns: repeat(3, 1fr);
  row-gap: 4.375rem;
`;

const Item = styled.div``;

const ItemTitles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.99rem;
  padding-inline: 1.825rem;
`;

const ItemName = styled.h3`
  font-size: var(--largest);
`;

const ItemNumber = styled.span`
  color: var(--title);
  font-weight: 700;

  & span {
    color: var(--primary);
  }
`;

const ItemDescription = styled.p`
  margin-bottom: 1.875rem;
  padding-inline: 1.825rem;
  min-height: 3.5rem;
`;

const ItemBar = styled.div`
  background-color: #ffffff33;
  height: 2px;
`;

const PercentageBar = styled.span`
  display: block;
  background-color: var(--primary);
  height: 2px;
  position: relative;
  width: ${props => props.width}%;
`;

const Dot = styled.span`
  background-color: var(--container);
  border: 2px solid var(--border);
  box-shadow: var(--shadow);
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: -12px;
`;

const SkillsItems = () => {
  return (
    <SkillsContent className="container grid">
      {skills.map(({ name, percentage, description }, index) => {
        return (
          <Item key={index}>
            <ItemTitles>
              <ItemName>{name}</ItemName>
              <ItemNumber>
                {percentage} <span>%</span>
              </ItemNumber>
            </ItemTitles>
            <ItemDescription>{description}</ItemDescription>
            <ItemBar className='bar'>
              <PercentageBar className='percent' width={percentage}>
                <Dot></Dot>
              </PercentageBar>
            </ItemBar>
          </Item>
        );
      })}
    </SkillsContent>
  );
};

export default SkillsItems;
