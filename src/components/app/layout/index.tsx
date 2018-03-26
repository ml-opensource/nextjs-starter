import * as React from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';

// Components
import Footer from '../../footer';
import Header from '../../header';

// Styles
import { COLORS, ORDER } from '../../../constants/styles';
import { AccessibilityAid, StyledContent, StyledLayout } from './styles';

// Actions
import globalActions from '../../../redux/global/actions';

interface ParentProps {
  loading: boolean;
}

interface ReduxProps {
  header: {};
  isMobileNav: boolean;
}

interface Dispatch {
  toggleMobileNav: (show: boolean) => void;
}

class Layout extends React.Component<(ReduxProps & ParentProps) & Dispatch> {
  state = {
    disableFocus: false,
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.mouseDown);
    document.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.mouseDown);
    document.removeEventListener('keydown', this.keyDown);
  }

  mouseDown = () => {
    this.setState({
      disableFocus: true,
    });
  }

  keyDown = () => {
    this.setState({
      disableFocus: false,
    });
  }

  render() {
    const {
      header,
      children,
      isMobileNav,
      toggleMobileNav,
      loading,
    } = this.props;

    return (
      <StyledLayout disableFocus={this.state.disableFocus}>
        <LoadingBar
          scope="page-transition"
          style={{
            backgroundColor: COLORS.PRIMARY,
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: ORDER.LOADING,
          }}
        />
        <AccessibilityAid href="#start-of-content">Skip to content</AccessibilityAid>
        <Header
          data={header}
          isMobileNav={isMobileNav}
          toggleMobileNav={toggleMobileNav}
        />
        <StyledContent loading={loading} id="start-of-content">
          <div>
            {children}
          </div>
        </StyledContent>
        <Footer />
      </StyledLayout>
    );
  }
}

const mapStateToProps = (state: any): ReduxProps => ({
  header: state.app.global.header,
  isMobileNav: state.app.global.isMobileNav,
});

const mapDispatchToProps = (dispatch: any): Dispatch => ({
  toggleMobileNav: (show: boolean) => dispatch(globalActions.toggleMobileNav(show)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
