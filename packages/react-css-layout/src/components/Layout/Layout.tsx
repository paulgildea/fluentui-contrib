import {
  getNativeElementProps,
  mergeClasses,
} from '@fluentui/react-components';
import * as React from 'react';

import { useStyles } from './Layout.styles';

export const layoutClassName = 'fui-Layout';

export type LayoutProps = React.HTMLAttributes<HTMLElement>;

export const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
  (props, ref) => {
    const classes = useStyles();
    const className = mergeClasses(
      layoutClassName,
      classes.root,
      props.className
    );

    const rootProps = getNativeElementProps('div', {
      ref,
      ...props,
    });

    return <div {...rootProps} className={className} ref={ref} />;
  }
);
Layout.displayName = 'Layout';
