import actions from './actions';

const initialState = {
  error: false,
  submitting: false,
  success: false,
};

export default function(state: {} = initialState, action: { type: string }) {
  switch (action.type) {
    case actions.POST_GENERIC_FORM:
      return Object.assign({}, state, {
        error: false,
        success: false,
        submitting: true,
      });
    case actions.FORM_SUCCESS:
      return Object.assign({}, state, {
        error: false,
        success: true,
        submitting: false,
      });
    case actions.FORM_FAILURE:
      return Object.assign({}, state, {
        error: true,
        submitting: false,
        success: false,
      });
    case actions.RESET_FORM_STATES:
      return initialState;
    default:
      return state;
  }
}
