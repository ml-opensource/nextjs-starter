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
          <h1>Most Other Pages</h1>
          <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.</p>
          <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa.</p>
          <p>Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci.</p>
        </GenericSlot>
      </Layout>
    );
  }
}

export default withReduxSaga(compose(
  withApp,
)(GenericPage));
