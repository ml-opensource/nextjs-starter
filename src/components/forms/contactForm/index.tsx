import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, getFormValues, InjectedFormProps, reduxForm } from 'redux-form';

// Validation
import { contactFormValidation } from './validation';

// Styles
import { StyledSubmit, StyledSuccess } from '../styles';
import { StyledForm } from './styles';

// Hoc
import FormHawk from '../../../redux/forms/hawk';

// Components
import Textarea from '../../uielements/textarea';
import Input from '../../uielements/textInput';

interface Props {
  formSubmitting: boolean;
  formSuccess: boolean;
  handleSubmit: (arg: () => void) => void;
  onSubmit: () => void;
  initializeValues: () => void;
  submitGenericForm: (path: string, values: any, formName?: string) => void;
  resetFormStates: () => void;
}

class ContactForm extends React.Component<Props & InjectedFormProps<{}, Props>> {
  componentWillUnmount() {
    this.props.resetFormStates();
  }

  onSubmit = (values: any, context: any) => {
    this.props.submitGenericForm('contact-form', values);
  }

  render() {
    const {
      handleSubmit,
      formSuccess,
      formSubmitting,
    } = this.props;

    return (
      <div>
        {!formSuccess ? (
          <StyledForm onSubmit={handleSubmit(this.onSubmit)}>
            <div className="form">
              <label htmlFor="name">
                <Field label="NAME*" name="name" type="text" component={Input} />
              </label>
            </div>

            <div>
              <label htmlFor="email">
                <Field label="EMAIL*" name="email" type="text" component={Input} />
              </label>
            </div>

            <div className="textarea-form">
              <label htmlFor="comments">
                <Field label="COMMENTS*" name="comments" type="text" component={Textarea} />
              </label>
            </div>

            <StyledSubmit type="submit">
              {formSubmitting ? 'SUBMITTING' : 'SEND'}
            </StyledSubmit>
          </StyledForm>
        ) : (
          <StyledSuccess>
            Thank you for your submission! Someone will be in touch shortly.
          </StyledSuccess>
        )}
      </div>
    );
  }
}

export default compose(
  connect(state => ({
    formValues: getFormValues('contact-form')(state),
  })),
  reduxForm<{}, Props>({
    form: 'contact-form',
    enableReinitialize: true,
    validate: contactFormValidation,
  }),
  FormHawk,
)(ContactForm);
