import Router from 'next/router';
import * as React from 'react';

// @ts-ignore
import { Link as ClientLink } from '../../../routes';

interface Props {
  children: any;
}

export default class DropDown extends React.Component<Props> {
  onChange = e => {
    if (!e.target.value) {
      return;
    }

    if (e.target.value.charAt(0) === '/') {
      Router.push({
        pathname: e.target.value,
      });
    } else {
      window.location.href = e.target.value;
    }
  }

  render() {
    const { children} = this.props;

    return (
      <select onChange={this.onChange}>
        {children}
      </select>
    );
  }
}
