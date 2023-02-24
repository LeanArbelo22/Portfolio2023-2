import styled, { keyframes } from 'styled-components';
import { links } from '../data';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useEffect, useState } from 'react';

const headerAnimate = keyframes`
  0% {
    transform: translateY(-100px);
  }

  100% {
    transform: translateY(0);
  }
`;

const Container = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 30px;
  z-index: 100;
  display: flex;
  justify-content: center;

  &.nav-scroll {
    position: fixed;
    background-color: var(--bg2);
    opacity: 0.95;
    animation: ${headerAnimate} 0.8s var(--timing) 0s forwards;
  }
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  color: var(--title);
  font-size: var(--h4);
  font-weight: 700;
`;

const Menu = styled.div`
  position: fixed;
  top: 0;
  right: ${props => (props.show ? '0' : '-350px')};
  width: 350px;
  height: 100vh;
  background-color: var(--bg2);
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: all 1s var(--timing);
`;

const List = styled.ul`
  margin-bottom: 2rem;
`;

const Item = styled.li`
  margin-bottom: 2rem;
  font-size: var(--h4);
  font-weight: 700;
`;

const Link = styled.a`
  color: var(--title);
  transition: all 0.3s var(--timing);

  &:hover {
    color: var(--primary);
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  column-gap: 40px;
`;

const ThemeToggler = styled.div`
  font-size: var(--h4);
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const NavToggler = styled.div`
  height: 30px;
  width: 28px;
  position: relative;
  cursor: pointer;
  z-index: 100;

  & :first-child {
    top: 8px;
  }

  & :last-child {
    bottom: 8px;
  }

  &.animate-toggle :first-child {
    transform: rotate(-45deg);
    top: 14px;
  }

  &.animate-toggle :last-child {
    transform: rotate(45deg);
    bottom: 14px;
  }
`;

const Line = styled.span`
  transition: all 0.4s var(--timing);
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--title);
`;

const getStorageTheme = () => {
  let themes = 'light';
  if (localStorage.getItem('theme')) {
    themes = localStorage.getItem('theme');
  }

  return themes;
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [navScroll, setNavScroll] = useState(false);
  const [theme, setTheme] = useState(getStorageTheme());

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    document.body.classList.toggle('no-scroll', showMenu);
  }, [showMenu]);

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <Container className={navScroll ? 'nav-scroll' : ''}>
      <Nav>
        <Logo href="#home" className="text-cs">
          Leandro
        </Logo>
        <Menu show={showMenu}>
          <List>
            {links.map(({ name, path }) => {
              return (
                <Item key={name}>
                  <Link
                    onClick={() => setShowMenu(false)}
                    href={path}
                    className="text-cs"
                  >
                    {name}
                  </Link>
                </Item>
              );
            })}
          </List>
        </Menu>
        <Buttons>
          <ThemeToggler onClick={changeTheme}>
            {theme === 'light' ? <BsMoon /> : <BsSun />}
          </ThemeToggler>

          <NavToggler
            className={showMenu ? 'animate-toggle' : ''}
            onClick={() => setShowMenu(!showMenu)}
          >
            <Line />
            <Line />
          </NavToggler>
        </Buttons>
      </Nav>
    </Container>
  );
};

export default Header;
