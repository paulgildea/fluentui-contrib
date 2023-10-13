import * as React from 'react';
import { Button, mergeClasses as xc, Title1 } from '@fluentui/react-components';
import { Layout, useFlex } from '@fluentui-contrib/react-css-layout';
import { useOutline } from './useOutline';

export const Direction = () => {
  const flex = useFlex();
  const styles = useOutline();

  return (
    <>
      <Title1>Row</Title1>
      <Layout className={xc(styles.outline, flex.root, flex.row)}>
        <Button>Hello 1</Button>
        <Button>Hello 2</Button>
        <Button>Hello 3</Button>
      </Layout>
      <Title1>Row Reverse</Title1>
      <Layout className={xc(styles.outline, flex.root, flex.rowReverse)}>
        <Button>Hello 1</Button>
        <Button>Hello 2</Button>
        <Button>Hello 3</Button>
      </Layout>
      <Title1>Column</Title1>
      <Layout className={xc(styles.outline, flex.root, flex.col)}>
        <Button>Hello 1</Button>
        <Button>Hello 2</Button>
        <Button>Hello 3</Button>
      </Layout>
      <Title1>Column Reverse</Title1>
      <Layout className={xc(styles.outline, flex.root, flex.colReverse)}>
        <Button>Hello 1</Button>
        <Button>Hello 2</Button>
        <Button>Hello 3</Button>
      </Layout>
    </>
  );
};
