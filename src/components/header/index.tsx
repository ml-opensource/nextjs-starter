import * as React from 'react';

// @ts-ignore
import { Link } from '../../../routes';

// Constants
import CONFIG from '../../constants/config';

// Components
import LinkButton from '../links/button';

// Styles
import {
  StyledHamburger,
  StyledHeader,
  StyledLinks,
  StyledLogoLink,
  StyledNavLink,
} from './styles';

interface Props {
  toggleMobileNav: (show: boolean) => void;
  data: {
    [key: string]: LinkType[],
  };
  isMobileNav: boolean;
}

interface LinkType {
  external: boolean;
  url: string;
  text: string;
}

const Links = (links: LinkType[]) => links.map((link: LinkType, i: number) => (
  <StyledNavLink key={i}>
    <LinkButton
      moduleLabel="header"
      link={link}
    >
      {link.text}
    </LinkButton>
  </StyledNavLink>
));

const Header = ({ toggleMobileNav, data, isMobileNav }: Props) => (
  <StyledHeader>
    <div>
      <Link href="/" passHref>
        <StyledLogoLink
          data-on="click"
          data-event-category="header"
          data-event-action="click"
          data-event-label="logo"
        >
          <img src={CONFIG.LOGO} alt={CONFIG.BRAND_NAME} />
        </StyledLogoLink>
      </Link>
      <StyledLinks isMobileNav={isMobileNav}>
        {Object.keys(data).map((key: string) => Links(data[key]))}
      </StyledLinks>
      <StyledHamburger
        onClick={() => toggleMobileNav(!isMobileNav)}
        isMobileNav={isMobileNav}
        aria-label="Main Menu"
      >
        <div><span></span></div>
      </StyledHamburger>
    </div>
  </StyledHeader>
);

export default Header;
