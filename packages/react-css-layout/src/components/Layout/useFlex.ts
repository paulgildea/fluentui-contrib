import { makeStyles, shorthands, tokens } from '@fluentui/react-components';

export const useFlex = makeStyles({
  root: {
    display: 'flex',
  },
  row: {
    flexDirection: 'row',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  col: {
    flexDirection: 'column',
  },
  colReverse: {
    flexDirection: 'column-reverse',
  },
  gapXXS: {
    ...shorthands.gap(tokens.spacingVerticalXXS, tokens.spacingHorizontalXXS),
  },
  gapXS: {
    ...shorthands.gap(tokens.spacingVerticalXS, tokens.spacingHorizontalXS),
  },
  gapS: {
    ...shorthands.gap(tokens.spacingVerticalS, tokens.spacingHorizontalS),
  },
  gapSNudge: {
    ...shorthands.gap(
      tokens.spacingVerticalSNudge,
      tokens.spacingHorizontalSNudge
    ),
  },
  gapM: {
    ...shorthands.gap(tokens.spacingVerticalM, tokens.spacingHorizontalM),
  },
  gapMNudge: {
    ...shorthands.gap(
      tokens.spacingVerticalMNudge,
      tokens.spacingHorizontalMNudge
    ),
  },
  gapL: {
    ...shorthands.gap(tokens.spacingVerticalL, tokens.spacingHorizontalL),
  },
  gapXL: {
    ...shorthands.gap(tokens.spacingVerticalXL, tokens.spacingHorizontalXL),
  },
  gapXXL: {
    ...shorthands.gap(tokens.spacingVerticalXXL, tokens.spacingHorizontalXXL),
  },
  gapXXXL: {
    ...shorthands.gap(tokens.spacingVerticalXXXL, tokens.spacingHorizontalXXXL),
  },
  itemGrow: {
    ...shorthands.flex(1),
  },
  itemRowStart: {
    marginRight: 'auto',
  },
  itemRowEnd: {
    marginLeft: 'auto',
  },
  itemColStart: {
    marginBottom: 'auto',
  },
  itemColEnd: {
    marginTop: 'auto',
  },
  centerRoot: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
