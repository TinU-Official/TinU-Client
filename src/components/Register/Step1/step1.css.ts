import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const step1Container = style({
  width: '100%',
  height: '100dvh',
  padding: '0 2rem',
});

export const step1Wrapper = style({
  display: 'flex',
  flexDirection: 'column',

  width: '100%',
});

export const titleWrapper = style({
...vars.fontStyles.title2_sb_22,

  marginLeft: '1rem',
});

export const agreeContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem'
});

export const nextButton = recipe({
  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed'
      }
    }
  }
});

export const optionalAgreeContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.8rem',
  padding: '0 2rem'
});

export const optionalAgreeWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});

export const agreeWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem'
});

export const agreeText = recipe({
  base: {
    ...vars.fontStyles.body2_m_14,
  },
  variants: {
    isRequired: {
      true: {
        color: vars.color.mint_500
      },
      false: {
        color: vars.color.grey_6
      }
    }
  }
});