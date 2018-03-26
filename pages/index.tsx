import * as React from 'react';
import { compose } from 'redux';

// Redux Dependencies
import { withReduxSaga } from '../src/redux/store';

// Components
import Layout from '../src/components/app/layout';
import withApp from '../src/components/app/withApp';
import Head from '../src/components/head';

// Types
import { Page } from '../src/types/pages';

// Styles
import { GenericSlot } from '../src/constants/mixins';

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
        <GenericSlot>
          <h1>NextJS Starter</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.</p>
          <p>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.</p>
        </GenericSlot>
      </Layout>
    );
  }
}

export default withReduxSaga(compose(
  withApp,
)(GenericPage));
