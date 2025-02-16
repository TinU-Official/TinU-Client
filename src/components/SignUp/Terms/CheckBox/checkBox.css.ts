import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const checkboxWrapper = style({
  padding: '1.5rem',

  backgroundColor: vars.color.grey_2,
  borderRadius: '1.2rem'
});

export const checkboxContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem'
});

export const checkboxText = style({
  ...vars.fontStyles.subtitle1_sb_16,

  color: vars.color.grey_8
});