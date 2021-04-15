import {
  StyledNavbar,
  StyledNavList,
  StyledNavLink,
  StyledLogo,
  StyledIcon,
} from 'styles/NavbarStyle';

import WorkButton from './WorkButton';
import ContactButton from './ContactButton';
import ThemeToggler from './ThemeToggler';

export default function Navbar({
  themeToggler,
  theme,
  gridState,
  setChatBotState,
}) {
  return (
    <StyledNavbar gridState={gridState}>
      <StyledNavList>
        <li>
          <WorkButton>Work</WorkButton>
        </li>
        <li>
          <StyledNavLink href="/about" rotate="1deg">
            About
          </StyledNavLink>
        </li>
        <li>
          <ContactButton setChatBotState={setChatBotState}>
            Contact
          </ContactButton>
        </li>
        <li className="center">
          <StyledNavLink href="/" className="no-pd">
            <StyledLogo
              src={`${theme === 'light' ? '/logo.svg' : '/logo-dark.svg'}`}
              alt="logo"
            />
          </StyledNavLink>
        </li>
        <li className="align-left">
          <StyledNavLink href="https://github.com/Halmesn">
            <StyledIcon
              src={`${
                theme === 'light'
                  ? '/icons/github.svg'
                  : '/icons/github-dark.svg'
              }`}
              alt="github icon"
              className="icon"
            ></StyledIcon>
            GitHub
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            href="https://www.linkedin.com/in/adrian-li-332395208/"
            rotate="-1deg"
          >
            <StyledIcon
              src={`${
                theme === 'light'
                  ? '/icons/linkedin.svg'
                  : '/icons/linkedin-dark.svg'
              }`}
              alt="linkedin icon"
              className="icon"
            ></StyledIcon>
            LinkedIn
          </StyledNavLink>
        </li>
        <ThemeToggler themeToggler={themeToggler} />
      </StyledNavList>
    </StyledNavbar>
  );
}
