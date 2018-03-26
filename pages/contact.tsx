import * as React from 'react';
import { compose } from 'redux';

// Redux Dependencies
import { withReduxSaga } from '../src/redux/store';

// Components
import Layout from '../src/components/app/layout';
import withApp from '../src/components/app/withApp';
import ContactForm from '../src/components/forms/contactForm';
import Head from '../src/components/head';

// Types
import { Page } from '../src/types/pages';

interface Props {
  page: Page;
  pageLoading: boolean;
}

class GenericPage extends React.Component<Props> {
  static getInitialProps() {
    return;
  }

  render() {
    const { page, pageLoading } = this.props;

    return (
      <Layout loading={pageLoading}>
        <Head page={page} />
        <ContactForm />
      </Layout>
    );
  }
}

export default withReduxSaga(compose(
  withApp,
)(GenericPage));
