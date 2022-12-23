export const theme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    whiteAlpha: '#ffffff60',
    accent: '#F59256',
    primaryBackground: '#FDF7F2',
    burgerBackground: 'FDF7F2',
    // border: '#E0E0E0',

    text: {
      sectionTitle: '#111111',
      primaryText: '#111321',
      secondaryText: '#111111',
      accent: '#F59256',
      dataText: 'rgba(17, 17, 17, 0.6)',
    },

    button: {
      primaryBackground: '#FFFFFF',
      secondaryBackground: '#FFFFFF',
      accent: '#F59256',
      border: '#F59256',
      primaryText: '#111111',
      secondaryText: '#FFFFFF',
      none: 'transparent',
    },

    form: {
      formTitle: '#111111',
      formText: '#535353',
      formPlaceholder: '#535353',
      // formInputBorder: '#E0E0E0',
      // formErrorMessage: '#FC842D',
      // checkboxText: '#9B9FAA',
      // checkboxAccentText: '#FC842D',
      // checkboxAccent: '#FC842D',
      // checkboxBorder: '#E0E0E0',
    },
  },

  space: [0, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024],

  fonts: {
    logo: 'Poppins, sans-serif',
    body: 'Manrope, sans-serif',
    // heading: 'Gotham Pro, sans-serif',
    main: 'Manrope, sans-serif',
    forminput: 'Inter, sans-serif',
  },

  textTransform: {
    cap: 'capitalize',
    lowCase: 'lowercase',
    upCase: 'uppercase',
  },

  fontSizes: {
    xxs: '12px',
    xs: '14px',
    s: '16px',
    m: '20px',
    l: '28px',
    xl: '32px',
    xxl: '48px',
    xxxl: '68px',
  },

  fontWeights: {
    thin: 100,
    extraLight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
  },

  letterSpacing: {
    xs: '-0.01em',
    s: '0.01em',
    m: '0.03em',
    l: '0.04em',
    xl: '0.05em',
    xxl: '0.07em',
  },

  lineHeights: {
    body: 1.375,
    form: 1.75,
    nav: 0.93,
    title: 1.23,
    text: 1.21,
  },

  borders: {
    none: 'none',
    normal: ' 2px solid',
  },

  radii: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '30px',
    round: '50%',
  },
  animation: {
    cubic: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  breakpoints: ['320px', '480px', '768px', '1200px'],
};
