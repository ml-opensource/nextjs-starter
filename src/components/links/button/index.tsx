import * as React from 'react';

// @ts-ignore
import { Link } from '../../../../routes';

interface Props {
  children: any;
  link: {
    external?: boolean;
    url: string;
    text: string;
  };
  moduleLabel: string;
}

export default class LinkButton extends React.Component<Props> {
  render() {
    const { link, children, moduleLabel } = this.props;

    if (link.external) {
      return (
        <a
          href={link.url}
          target="_blank"
          data-on="click"
          data-event-category={moduleLabel}
          data-event-action="click"
          data-event-label={link.text}
        >
          {children}
        </a>
      );
    }

    return (
      <Link prefetch route={link.url}>
        <a
          data-on="click"
          data-event-category={moduleLabel}
          data-event-action="click"
          data-event-label={link.text}
        >
          {this.props.children}
        </a>
      </Link>
    );
  }
}
