import * as React from 'react';
import { Button, mergeClasses as xc, Title1 } from '@fluentui/react-components';
import { Layout, useFlex } from '@fluentui-contrib/react-css-layout';
import { useOutline } from './useOutline';

export const Alignment = () => {
  const flex = useFlex();
  const styles = useOutline();

  return (
    <>
      <Title1>Row Alignment</Title1>
      <Layout
        className={xc(styles.outline, flex.root, flex.row, flex.alignStart)}
      >
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Layout>
      <Layout
        className={xc(styles.outline, flex.root, flex.row, flex.alignCenter)}
      >
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Layout>
      <Layout
        className={xc(styles.outline, flex.root, flex.row, flex.alignEnd)}
      >
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Layout>
      <Title1>Column Alignment</Title1>
      <Layout
        className={xc(styles.outline, flex.root, flex.col, flex.alignStart)}
      >
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Layout>
      <Layout
        className={xc(styles.outline, flex.root, flex.col, flex.alignCenter)}
      >
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Layout>
      <Layout
        className={xc(styles.outline, flex.root, flex.col, flex.alignEnd)}
      >
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Layout>
    </>
  );
};
