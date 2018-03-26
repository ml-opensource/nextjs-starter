const globalActions = {
  TOGGLE_MOBILE_NAV: '/nextjs-starter/global/TOGGLE_MOBILE_NAV',
  toggleMobileNav: (show: boolean) => ({
    type: globalActions.TOGGLE_MOBILE_NAV,
    show,
  }),
};

export default globalActions;
