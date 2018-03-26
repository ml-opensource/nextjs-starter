import actions from './actions';

const initialState = {
  isMobileNav: false,
  header: {
    col1: [
      {
        url: '/generic-page',
        text: 'Generic Page',
      },
      {
        url: '/contact',
        text: 'Contact Form',
      },
      {
        url: '/route/doesnt/exist',
        text: '404 Page',
      },
      {
        url: 'https://fuzzproductions.com/jobs',
        text: 'External Link',
        external: true,
      },
    ],
  },
};

export default function(state = initialState, action: { type: string, show?: boolean }) {
  switch (action.type) {
    case actions.TOGGLE_MOBILE_NAV:
      return Object.assign({}, state, {
        isMobileNav: typeof action.show !== 'undefined' ? action.show : !state.isMobileNav,
      });
    default:
      return state;
  }
}
