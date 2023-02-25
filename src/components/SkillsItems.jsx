import styled from 'styled-components';
import { skills } from '../data';
import { large, mobile, smallMobile, tablet } from '../styles/responsive';

const SkillsContent = styled.div`
  grid-template-columns: repeat(3, 1fr);
  row-gap: 4.375rem;

  ${tablet({
    rowGap: '3rem',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(4, 1fr)',
    placeItems: 'center'
  })}

  ${mobile({
    rowGap: '1rem',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gridTemplateRows: 'repeat(9, 1fr)',
    placeItems: 'center'
  })}

  & :last-child {
    ${mobile({
      borderBottom: 'none'
    })}
  }
`;

const Item = styled.div`
  ${large({
    maxWidth: '280px'
  })}

  ${mobile({
    width: '375px',
    borderBottom: '2px solid var(--border)'
  })}

  ${smallMobile({
    maxWidth: '90vw'
  })}
`;

const ItemTitles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.99rem;
  padding-inline: 1.825rem;
`;

const ItemName = styled.h3`
  font-size: var(--largest);
  
  ${large({
    fontSize: 'var(--large)'
  })}
`;

const ItemNumber = styled.span`
  color: var(--title);
  font-weight: 700;

  & span {
    color: var(--primary);
  }

  ${large({
    fontSize: 'var(--small)'
  })}
`;

const ItemDescription = styled.p`
  margin-bottom: 1.875rem;
  padding-inline: 1.825rem;
  min-height: 3.5rem;

  ${large({
    fontSize: 'var(--small)'
  })}

  ${mobile({
    display: 'none'
  })}
`;

const ItemBar = styled.div`
  background-color: #ffffff33;
  height: 2px;

  ${mobile({
    display: 'none'
  })}
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
