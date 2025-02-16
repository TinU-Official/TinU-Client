import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';


export const stepIconContainer = style({
  display: 'flex',
  gap: '0.5rem'
});

export const stepIconWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

export const stepText = style({
...vars.fontStyles.caption1_m_11,

  marginTop: '0.3rem',

  color: vars.color.grey_6
});