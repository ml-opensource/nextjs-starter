import * as React from 'react';
import { compose } from 'redux';

// Redux Dependencies
import { withReduxSaga } from '../src/redux/store';

// Components
import Layout from '../src/components/app/layout';
import withApp from '../src/components/app/withApp';
import Head from '../src/components/head';
import Error from '../src/components/uielements/error';

// Types
import { Page } from '../src/types/pages';

interface Props {
  page: Page;
  pageLoading: boolean;
  statusCode?: number;
}

class GenericPage extends React.Component<Props> {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return {
      statusCode,
    };
  }

  render() {
    const { page, pageLoading, statusCode } = this.props;

    return (
      <Layout loading={pageLoading}>
        <Head page={page} />
        <Error
          statusCode={statusCode}
          show
        />
      </Layout>
    );
  }
}

export default withReduxSaga(compose(
  withApp,
)(GenericPage));
