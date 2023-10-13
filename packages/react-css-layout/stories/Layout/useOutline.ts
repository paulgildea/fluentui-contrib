import { makeStyles, shorthands, tokens } from '@fluentui/react-components';

export const useOutline = makeStyles({
  outline: {
    ...shorthands.border(
      tokens.strokeWidthThin,
      'solid',
      tokens.colorNeutralStroke1
    ),
    ...shorthands.margin(tokens.spacingVerticalM, tokens.spacingHorizontalM),
    ...shorthands.padding(tokens.spacingVerticalM, tokens.spacingHorizontalM),
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    height: '100px',
  },
  outlineLarge: {
    ...shorthands.border(
      tokens.strokeWidthThin,
      'solid',
      tokens.colorNeutralStroke1
    ),
    ...shorthands.margin(tokens.spacingVerticalM, tokens.spacingHorizontalM),
    ...shorthands.padding(tokens.spacingVerticalM, tokens.spacingHorizontalM),
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    height: '400px',
  },
});
