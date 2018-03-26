export const BREAKPOINTS = {
  /*
   * Min BPS
   */
  mobileMin: {
    value: 576,
    type: 'min',
  },
  tabletMin: {
    value: 768,
    type: 'min',
  },
  // targeting devices that are LARGER than the iPad (which is 1024px in landscape mode)
  desktopMin: {
    value: 1025,
    type: 'min',
  },

  /*
   * Max BPS
   */
  // targeting small width phones below width of an iPhone6
  smallMobileMax: {
    value: 395,
    type: 'max',
  },

  mobileMax: {
    value: 577,
    type: 'max',
  },
  tabletMax: {
    value: 767,
    type: 'max',
  },
  desktopMax: {
    value: 1024,
    type: 'max',
  },
};
