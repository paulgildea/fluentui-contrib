import * as React from 'react';
import { Button, mergeClasses as xc } from '@fluentui/react-components';
import { Layout, useFlex } from '@fluentui-contrib/react-css-layout';

export const Default = () => {
  const flex = useFlex();

  return (
    <>
      <Layout className={xc(flex.root, flex.row)}>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Layout>
      <Layout className={xc(flex.root, flex.col)}>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Layout>
      <Layout className={xc(flex.root, flex.col, flex.alignStart)}>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Layout>
      <Layout className={xc(flex.root, flex.col, flex.alignCenter)}>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Layout>
      <Layout className={xc(flex.root, flex.col, flex.alignEnd)}>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Layout>
    </>
  );
};
