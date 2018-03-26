import * as React from 'react';
import { END } from 'redux-saga';

export default function withReduxSaga(BaseComponent: any) {
  class WrappedComponent extends React.Component {
    static async getInitialProps(ctx: any) {
      const {isServer, store} = ctx;

      let props;
      if (BaseComponent.getInitialProps) {
        props = await BaseComponent.getInitialProps(ctx);
      }

      if (isServer) {
        store.dispatch(END);
        await store.sagaTask.done;
      }

      return props;
    }

    render() {
      return <BaseComponent {...this.props} />;
    }
  }

  return WrappedComponent;
}
