const formActions = {
  POST_GENERIC_FORM: '/forms/POST_GENERIC_FORM',
  FORM_SUCCESS: '/forms/FORM_SUCCESS',
  FORM_FAILURE: '/forms/FORM_FAILURE',
  RESET_FORM_STATES: '/forms/RESET_FORM_STATES',

  postGenericForm: (path: string, values: any) => ({
    path,
    params: values,
    type: formActions.POST_GENERIC_FORM,
  }),

  resetFormStates: () => ({
    type: formActions.RESET_FORM_STATES,
  }),

  formSuccess: () => ({
    type: formActions.FORM_SUCCESS,
  }),

  formFailure: () => ({
    type: formActions.FORM_FAILURE,
  }),
};

export default formActions;
