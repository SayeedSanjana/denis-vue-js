module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { colors: {
      'regal-blue': '#73C6CA',
      'regal-cyan': '#036792',
      'regal-cyan-blue': '#C5F7FA',
      'regal-paste': '#CEF0FF',
      'regal-teal' : '#005072',
      'regal-white' : '#F2FBFC',
      'regal-bg' : '#ECFBFC',
      'regal-light':'#7FBED7',
      'regal-green':'#A6D2E3',
      'regal-light-blue':'#E5F2F7',
      'regal-red' : '#FE646F',
      'regal-success' : '#3EBB52',
      'regal-examined' : '#BDD2CB',
      'regal-scheduled' : '#2BD799',
      'regal-cancelled' : '#FF796F',
      'regal-gray' : '#E9F0F0',
      
    },
    height: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
      yxl: '500px',
      xxl: '800px',
     }
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
