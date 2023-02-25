import styled from 'styled-components';
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaWhatsapp
} from 'react-icons/fa';
import { tablet } from '../styles/responsive';

const Container = styled.footer`
  border-top: 1px solid #00000005;
  padding-block: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${tablet({
    flexWrap: 'wrap',
    justifyContent: 'center',
    columnGap: '2rem',
    rowGap: '1rem'
  })}
`;

const Socials = styled.div`
  display: flex;
  column-gap: 45px;
`;

const Link = styled.a`
  color: var(--title);
  font-size: var(--h4);
  transition: all 0.7s var(--timing);

  &:hover {
    color: var(--primary);
  }
`;

const Copyright = styled.p`
  font-size: var(--large);
  font-weight: 700;

  & span {
    color: var(--primary);
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper className="container">
        <Socials>
          {socials.map(item => {
            return (
              <Link key={item.title} href={item.href} target="_blank">
                {item.icon}
              </Link>
            );
          })}
        </Socials>
        <Copyright className="text-cs">
          &copy; 2023 <span>Leandro</span> Arbelo
        </Copyright>
      </Wrapper>
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
  },
  {
    title: 'Whatsapp',
    icon: <FaWhatsapp />,
    href: 'https://api.whatsapp.com/send/?phone=5493515912166&text&app_absent=0'
  }
];

export default Footer;
