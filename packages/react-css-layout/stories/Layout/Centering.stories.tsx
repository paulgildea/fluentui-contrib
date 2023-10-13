import * as React from 'react';
import {
  Button,
  mergeClasses as xc,
  Title1,
} from '@fluentui/react-components';
import { Layout, useFlex } from '@fluentui-contrib/react-css-layout';
import { useOutline } from './useOutline';

export const Centering = () => {
  const flex = useFlex();
  const styles = useOutline();

  return (
    <>
      <Title1>Centering within an element</Title1>
      <Layout
        className={xc(
          styles.outlineLarge,
          flex.centerRoot
        )}
      >
        <Button>Hello</Button>
      </Layout>
    </>
  );
};
