import { useState } from 'react';
import styled from 'styled-components';
import { mobile, smallMobile } from '../styles/responsive';

const List = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 2.5rem;
  margin-bottom: 60px;

  ${mobile({
    columnGap: '4rem',
    rowGap: '2rem',
    flexWrap: 'wrap'
  })}
`;

const Button = styled.button`
  color: var(--title);
  font-size: var(--tiny);
  font-weight: 700;
  position: relative;
  transition: all 0.7s var(--timing);

  &::before {
    content: '';
    width: ${props => (props.active ? '40px' : '0')};
    height: 2px;
    max-width: 65%;
    background-color: var(--primary);
    position: absolute;
    bottom: -12px;
    left: 0;
    transition: all 0.3s var(--timing);
  }

  &:hover::before {
    width: 40px;
  }

  &.active {
    color: var(--primary);
  }

  ${smallMobile({
      fontSize: '.7rem'
  })}
`;

const PortfolioList = ({ list, filter }) => {
  const [active, setActive] = useState(0);

  return (
    <List>
      {list.map((category, index) => {
        return (
          <Button
            active={active === index}
            onClick={() => {
              setActive(index);
              filter(category);
            }}
            className={`${active === index ? 'active' : ''} text-cs`}
            key={index}
          >
            {category}
          </Button>
        );
      })}
    </List>
  );
};

export default PortfolioList;
