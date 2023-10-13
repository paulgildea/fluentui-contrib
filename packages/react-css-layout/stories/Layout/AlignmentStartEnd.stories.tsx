import * as React from 'react';
import {
  Button,
  mergeClasses as xc,
  Title1,
} from '@fluentui/react-components';
import { Layout, useFlex } from '@fluentui-contrib/react-css-layout';
import { useOutline } from './useOutline';

export const AlignmentStartEnd = () => {
  const flex = useFlex();
  const styles = useOutline();

  return (
    <>
      <Title1>Row Alignment with Start and End Items</Title1>
      <Layout
        className={xc(styles.outline, flex.root, flex.row, flex.alignStart)}
      >
        <Button className={flex.itemRowStart}>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Layout>
      <Layout
        className={xc(styles.outline, flex.root, flex.row, flex.alignStart)}
      >
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button className={flex.itemRowEnd}>Hello</Button>
      </Layout>
      <Title1>Column Alignment with Start and End Items</Title1>
      <Layout
        className={xc(
          styles.outlineLarge,
          flex.root,
          flex.col
        )}
      >
        <Button className={flex.itemColStart}>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Layout>
      <Layout
        className={xc(
          styles.outlineLarge,
          flex.root,
          flex.col
        )}
      >
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button className={flex.itemColEnd}>Hello</Button>
      </Layout>
    </>
  );
};
