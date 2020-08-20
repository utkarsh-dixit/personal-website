module.exports = {
  siteTitle: 'Utkarsh Dixit Dixit | Full stack Software Engineer',
  siteDescription:
    'Utkarsh Dixit is self-taught full stack programmer who is always excited to get his hands dirty to build something interesting.',
  siteKeywords:
    'UTkarsh Dixit, Full stack engineer, Frontend Engineer, React Native Developer, Jaipur',
  siteUrl: 'http://utkarsh.work',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-51200421-1',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Utkarsh Dixit',
  location: 'Jaipur, India',
  email: 'utkarshdix02@gmail.com',
  github: 'https://github.com/utkarsh-dixit',
  twitterHandle: '@letmecodeamigo',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/utkarsh-dixit',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/isutkarshdixit',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/utkarsh3403',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/letmecodeamigo',
    },
    {
      name: 'Stackoverflow',
      url: 'https://stackoverflow.com/users/3857918/utkarsh-dixit',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
