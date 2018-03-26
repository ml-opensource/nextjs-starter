import Router from 'next/router';
import * as React from 'react';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { compose } from 'redux';

// HOC
import globalHawk from '../../../redux/global/hawk';

interface Props {
  children: any;
  dispatch: (arg: any) => void;
  toggleMobileNav: (arg: boolean) => void;
}

// Do global things like potentially load maps or make some kind of API call
function withApp(WrappedComponent: any) {
  class WithApp extends React.Component<Props> {
    static getInitialProps(context: any) {
      // Fetch global data if it does not already exist
      const currentState = context.store.getState().app;
      console.log(currentState);

      return WrappedComponent.getInitialProps(context);
    }

    componentWillMount() {
      Router.onRouteChangeStart = () => {
        // Show global loading bar
        // TODO - only show if pathname actually changes
        this.props.dispatch(showLoading('page-transition'));
      };

      Router.onRouteChangeComplete = () => {
        // Ensure mobile nav is closed
        this.props.toggleMobileNav(false);

        // Hide global loading bar
        window.setTimeout(() => {
          this.props.dispatch(hideLoading('page-transition'));
        }, 300); // Timeout to prove the loader works
      };
    }

    render() {
      return (<WrappedComponent
        {...this.props}
      />);
    }
  }

  return compose(
    globalHawk,
  )(WithApp);
}

export default withApp;
