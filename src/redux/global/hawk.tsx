import * as React from 'react';
import { connect } from 'react-redux';

// Actions
import globalActions from './actions';

interface GlobalProps {
  isMobileNav: boolean;
}

interface GlobalDispatch {
  toggleMobileNav: (show: boolean) => void;
}

export default function globalHoc(WrappedComponent: any) {
  class GlobalHoc extends React.Component<GlobalProps & GlobalDispatch> {
    static getInitialProps(context: any) {
      return WrappedComponent.getInitialProps(context);
    }

    render() {
      return (<WrappedComponent
        {...this.props}
      />);
    }
  }

  const mapStateToProps = (state: any): GlobalProps => ({
    isMobileNav: state.app.global.isMobileNav,
  });

  const mapDispatchToProps = (dispatch: any): GlobalDispatch => ({
    toggleMobileNav: (show: boolean) => dispatch(globalActions.toggleMobileNav(show)),
  });

  return connect<GlobalProps, GlobalDispatch, any>(mapStateToProps, mapDispatchToProps)(GlobalHoc);
}
