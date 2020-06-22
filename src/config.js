module.exports = {
  siteTitle: 'Himanshu Dixit | Full stack Software Engineer, Product guy',
  siteDescription:
    'Himanshu Dixit is a software engineer based in BLR, India who specializes in building (and occasionally designing) E2E products.',
  siteKeywords: 'Himanshu Dixit, Full stack engineer, Frontend Engineer, Product guy, Bangalore',
  siteUrl: 'https://himanshudixit.me',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-51200421-1',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Himanshu Dixit',
  location: 'BLR, India',
  email: 'hello@himanshudixit.me',
  github: 'https://github.com/himanshu-dixit',
  twitterHandle: '@1x_engineer',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/himanshu-dixit',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ishimanshudixit',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/1x_engineer',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/1x_engineer',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Wiki',
      url: 'https://wiki.himanshudixit.me',
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
