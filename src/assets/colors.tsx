const primary = {
  brand: '#543BF0',
  brandLight: '#D5D1F7',
  brandTransparent: 'rgba(84, 59, 240, 0.4)',
  white: '#FFFFFF',
  whiteOpaque: 'rgba(255,255,255,0.85)',
  whiteTransparent: 'rgba(255,255,255,0.16)',
  black: '#000000',
  gradient: [
    { stop: 0, color: '#543BF0' },
    { stop: 0.125, color: '#2F0DA6' },
    { stop: 0.8, color: '#3D77CE' },
    { stop: 1, color: '#543BF0' }
  ],
  shadow: {
    shadowColor: '#8CB4F2',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8
  }
};

const tertiary = {
  red: '#FF390B',
  orange: '#F7931A',
  yellow: '#F3BF65',
  green: '#5DC78D',
  teal: '#00C4CC',
  blue: '#8CB4F2',
  blurple: primary.brand,
  lightPurple: '#E3E4FA',
  lightBlue: '#EFF2FC',
  lightGray: '#E2E2E2',
  gray: '#55557A',
  darkGray: '#363A43',
  white: primary.white,
};

const text = {
  header: '#444450',
  body: '#8A8A8E'
};

const dev = '#FF00FF';

export default { primary, tertiary, text, dev };
