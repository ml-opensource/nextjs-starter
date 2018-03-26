import * as React from 'react';
import { connect } from 'react-redux';

// Actions
import formActions from './actions';

interface FormsProps {
  formSubmitting: boolean;
  formError: boolean;
  formSuccess: boolean;
}

interface FormsDispatch {
  postGenericForm: (path: string, formData: any) => void;
  resetFormStates: (formData: any) => void;
}

export default function formsHoc(WrappedComponent: any) {
  class FormsHoc extends React.Component<FormsProps & FormsDispatch> {
    static getInitialProps(context: any) {
      return WrappedComponent.getInitialProps(context);
    }

    submitGenericForm = (path, formData, formName) => {
      this.props.postGenericForm(path, formData);
    }

    render() {
      return (<WrappedComponent
        {...this.props}
        submitGenericForm={this.submitGenericForm}
        />);
    }
  }

  const mapStateToProps = (state: any): FormsProps => ({
    formSubmitting: state.app.forms.submitting,
    formError: state.app.forms.error,
    formSuccess: state.app.forms.success,
  });

  const mapDispatchToProps = (dispatch: any): FormsDispatch  => ({
    postGenericForm: (path: string, formData: any) => dispatch(formActions.postGenericForm(path, formData)),
    resetFormStates: () => dispatch(formActions.resetFormStates()),
  });

  return connect<FormsProps, FormsDispatch, any>(mapStateToProps, mapDispatchToProps)(FormsHoc);
}
