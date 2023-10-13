import * as React from 'react';
import { Button, mergeClasses as xc, Title1, makeStyles, shorthands } from '@fluentui/react-components';
import { Layout, useFlex } from '@fluentui-contrib/react-css-layout';

const useStyles = makeStyles({
  gap: {
    ...shorthands.gap("20px")
  }
})

export const Gap = () => {
  const flex = useFlex();
  const custom = useStyles();

  return (
    <>
      <Title1>Row Gaps</Title1>
      <Layout className={xc(flex.root, flex.row, flex.gapXXS)}>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Layout>
      <Layout className={xc(flex.root, flex.row, flex.gapXS)}>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Layout>
      <Layout className={xc(flex.root, flex.row, flex.gapS)}>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Layout>
      <Layout className={xc(flex.root, flex.row, flex.gapM)}>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Layout>
      <Layout className={xc(flex.root, flex.row, flex.gapL)}>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Layout>
      <Layout className={xc(flex.root, flex.row, flex.gapXL)}>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Layout>
      <Layout className={xc(flex.root, flex.row, flex.gapXXL)}>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Layout>
      <Layout className={xc(flex.root, flex.row, flex.gapXXXL)}>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Layout>
      <Title1>Column Gaps</Title1>
      <Layout className={xc(flex.root, flex.col, flex.gapXXS)}>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Layout>
      <Layout className={xc(flex.root, flex.col, flex.gapXS)}>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Layout>
      <Layout className={xc(flex.root, flex.col, flex.gapS)}>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Layout>
      <Layout className={xc(flex.root, flex.col, flex.gapM)}>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Layout>
      <Layout className={xc(flex.root, flex.col, flex.gapL)}>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Layout>
      <Layout className={xc(flex.root, flex.col, flex.gapXL)}>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Layout>
      <Layout className={xc(flex.root, flex.col, flex.gapXXL)}>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Layout>
      <Layout className={xc(flex.root, flex.col, flex.gapXXXL)}>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Layout>
      <Title1>Custom Gap Value</Title1>
      <Layout className={xc(flex.root, flex.col, custom.gap)}>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </Layout>
    </>
  );
};
