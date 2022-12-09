// gitprofile.config.js

const config = {
  github: {
    username: 'QuantResearch', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['Create-Beautiful-Financial-Data-Charts-in-R','AIM-IT4.github.io'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'company/quanteconresearch2023/',
    twitter: '@AmitKJIITM',
    facebook: '@AmitJha',
    instagram: '@hello_mr_jha',
    dribbble: '',
    behance: '',
    medium: '@Akjha22',
    website: 'https://quantresearch.github.io',
    phone: '+91-8587995664',
    email: 'jha.8@iitj.ac.in',
  },
  resume: {
    fileUrl: 'https://drive.google.com/file/d/1SRccMubon_lAaNZNl5BpqIVanUHEE4vR/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
          'Python',
          'R',
          'SQL',
          'MS Office',
          'SPSS',
          'Eviews',
          'STATA',
          'SPSS',
          'C++',
          'Tableau',
          'PowerBI',
        ],
  experiences: [
          {
            company: 'Elint Data Private Limited',
            position: 'Data Scientist',
            from: 'April 2022',
            to: 'Present', 
          },
    {  company: 'Reserve Bank of India',
            position: 'Research Intern',
            from: 'Jan 2023',
            to: 'Present',
    },
          {
            company: 'IIT Roorkee',
            position: 'Research Intern',
            from: 'January 2022',
            to: ' April 2022',
          },
        ],
   education: [
          {
            institution: 'Indian Institute of Technology Madras',
            degree: 'Ph.D. Financial Economics',
            from: 'July 2022',
            to: 'May 2025(Expected)'
          },
          {
            institution: 'Indian Institute of Technology Jodhpur',
            degree: 'Master of Science',
            from: 'July 2020',
            to: 'April 2022',
          },
        ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: '@Akjha22', // to hide blog section, keep it empty
    limit: 5, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: 'G-BBDPHYSR5X', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '3193432', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'Dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
