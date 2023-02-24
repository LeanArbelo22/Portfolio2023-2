import styled from 'styled-components';
import { motion } from 'framer-motion';
import shapeTwo from '../assets/shape-2.png';
import { FaArrowRight } from 'react-icons/fa';

const Image = styled.img`
  height: 240px;
  width: 100%;
  object-fit: cover;
  vertical-align: middle;
  transition: all 0.6s var(--timing);
`;

const Item = styled(motion.div)`
  padding: 30px;
  border-radius: 20px;

  &:hover ${Image} {
    transform: scale(1.049);
  }
`;

const ImageWrapper = styled.div`
  border-radius: 1rem;
  overflow: hidden;
`;

const Category = styled.span`
  color: var(--primary);
  font-size: var(--tiny);
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: block;
  margin-top: 1.5rem;
`;

const Title = styled.h3`
  font-size: var(--h4);
`;

const Description = styled.p`
  min-height: 150px;
  margin-top: 1.6rem;
`;

const Link = styled.a``;

const Shape = styled.img`
  width: 141px;
  height: 141px;
  right: -6%;
  bottom: -6%;
  opacity: 0.3;
`;

const PortfolioItems = ({ projects }) => {
  return (
    <>
      {projects?.map(({ id, img, category, title, description, href }) => {
        return (
          <Item
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.8, scale: 0.6 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 0.3 }}
            key={id}
            className="card"
          >
            <ImageWrapper>
              <Image src={img} alt="item" />
            </ImageWrapper>
            <Category className="text-cs">{category}</Category>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Link href={href} className="links" target="_blank">
              Ver más
              <FaArrowRight className="icon" />
            </Link>
            <Shape src={shapeTwo} className="shape" alt="shape" />
          </Item>
        );
      })}
    </>
  );
};

export default PortfolioItems;
