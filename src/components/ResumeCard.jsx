import { useState } from 'react';
import styled from 'styled-components';

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
  max-height: 0;
  overflow: hidden;
  transition: all 0.4s var(--timing);

  &.show {
    max-height: 510px;
  }
`;

const DateTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Subtitle = styled.h3`
  font-family: var(--font2);
  font-size: var(--h5);
  font-weight: 700;
`;

const Date = styled.span`
  user-select: none;
`;

const Description = styled.p`
  margin-block: 1.25rem 1.875rem;
  user-select: none;
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
