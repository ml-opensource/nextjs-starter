import * as React from 'react';

// Config
import CONFIG from '../../constants/config';

// Styles
import { StyledCopyright, StyledFooter } from './styles';

const Footer = () => (
  <StyledFooter>
    <StyledCopyright>{CONFIG.BRAND_NAME} by <a href="https://fuzzproductions.com" target="_blank">Fuzz</a> {new Date().getFullYear()}. All Rights Reserved</StyledCopyright>
  </StyledFooter>
);

export default Footer;
