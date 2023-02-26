import { useState } from 'react';
import styled from 'styled-components';
import { large, mobile, tablet } from '../styles/responsive';

const Container = styled.div`
  border-bottom: 2px solid var(--border);
  position: relative;

  &:not(:first-child) {
    border-right: 2px solid var(--border);
  }
`;

const Header = styled.div`
  padding: 2rem 1.875rem;
`;

const Title = styled.h3`
  font-size: var(--largest);
  cursor: pointer;
`;

const Icon = styled.span`
  background-color: var(--container);
  border: 2px solid var(--border);
  font-size: var(--h2);
  box-shadow: var(--shadow);
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  line-height: 1.3;
  text-align: center;
  cursor: pointer;
  position: absolute;
  right: -24px;
  bottom: -24px;
  z-index: 10;
  user-select: none;
`;

const Content = styled.div`
  padding-inline: 1.875rem 3.1rem;
  height: fit-content;
  overflow: hidden;

  & p,
  h3,
  span {
    display: none;
  }

  &.show {
    transition: all 0.4s var(--timing);
    & p,
    h3,
    span {
      display: block;
    }

    ${large({
      maxHeight: 'fit-content'
    })} // !

    ${tablet({
      paddingInline: '1.8rem'
    })}
  }
`;

const DateTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  ${large({
    flexWrap: 'wrap'
  })}
`;

const Subtitle = styled.h3`
  font-family: var(--font2);
  font-size: var(--h5);
  font-weight: 700;

  ${mobile({
    fontSize: '1.12rem'
  })}
`;

const Date = styled.span`
  user-select: none;

  ${large({
    margin: '1rem 0'
  })}

  ${mobile({
    fontSize: '0.8rem'
  })}
`;

const Description = styled.p`
  margin-block: 1.25rem 1.875rem;
  user-select: none;

  ${large({
    fontSize: 'var(--small)'
  })}
`;

const ResumeCard = ({ item: { title, subtitle, description, date } }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <Container>
      <Header onClick={() => setShowInfo(!showInfo)}>
        <Title>{title}</Title>
        <Icon>{showInfo ? '-' : '+'}</Icon>
      </Header>

      <Content className={showInfo ? 'show' : ''}>
        <DateTitle>
          <Subtitle>{subtitle}</Subtitle>
          <Date className="text-cs">{date}</Date>
        </DateTitle>
        <Description>{description}</Description>
      </Content>
    </Container>
  );
};

export default ResumeCard;
