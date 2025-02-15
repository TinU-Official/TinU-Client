import { Z_INDEX } from '@/constants/zIndex';
import { style } from '@vanilla-extract/css';

export const headerWrapper = style({
  position: 'sticky',
  zIndex: Z_INDEX.HEADER,
  top: 0,
  display: 'flex',
  width: '100%',
  height: '6rem',
  backgroundColor: 'white'
  });

export const leftElement = style({
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  left: '2rem',
  height: '100%'
});

export const centerElement = style({
  display: 'flex',
  alignItems: 'center',
  margin: '0 auto',
  height: '100%'
});

export const rightElement = style({
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  right: '2rem',
  height: '100%'
});