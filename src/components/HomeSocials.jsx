import styled from 'styled-components';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { mobile, smallMobile } from '../styles/responsive';

const Container = styled.div`
  display: flex;
  column-gap: 1.25rem;
  margin-bottom: 1.875rem;

  
`;

const Link = styled.a`
  color: var(--title);
  font-size: var(--h4);
  transition: all 0.7s var(--timing);

  &:hover {
    color: var(--primary);
  }

  ${mobile({
    fontSize: 'var(--h5)',
    position: 'relative',
    top: '1.2rem'
  })}

  ${smallMobile({
    top: '.5rem'
  })}
`;

const Socials = () => {
  return (
    <Container>
      {socials.map(item => {
        return (
          <Link key={item.title} href={item.href} target="_blank">
            {item.icon}
          </Link>
        );
      })}
    </Container>
  );
};

const socials = [
  {
    title: 'Linkedin',
    icon: <FaLinkedinIn />,
    href: 'https://www.linkedin.com/in/leandro-arbelo/'
  },
  {
    title: 'Github',
    icon: <FaGithub />,
    href: 'https://github.com/LeanArbelo22'
  },
  {
    title: 'Instagram',
    icon: <FaInstagram />,
    href: 'https://www.instagram.com/leaarbelo/'
  }
];

export default Socials;
