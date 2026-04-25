export const personalInfo = {
  name: 'Chervith Nannuru',
  title: 'CS Undergrad · ML Engineer · Web Developer',
  tagline: 'Building models that understand humans.',
  bio: `I'm a Computer Science undergrad at Mahindra University, Hyderabad, working at the intersection of machine learning and web development. Currently exploring how deep neural networks can capture human disagreement and uncertainty in labeling tasks.`,
  bioExtended: `My academic journey has covered everything from data structures and algorithms to deep neural networks and social computing. I care deeply about building things that are both technically rigorous and practically useful.`,
  email: 'nannuruchervith@gmail.com',
  github: 'https://github.com/Cheromelon',
  linkedin: 'https://www.linkedin.com/in/chervith-nannuru/',
  location: 'Hyderabad, India',
  cgpa: '8.04',
  year: '3rd year',
  available: true,
  interests: ['Cricket', 'Tennis', 'Motorsports'],
  role: 'Software Vice Head, AERO Club @ Mahindra University',
};

export const education = [
  {
    school: 'Mahindra University',
    degree: 'B.Tech Computer Science',
    grade: 'CGPA: 8.04 / 10',
    period: 'Aug 2023 – Present',
    location: 'Hyderabad',
    courses: [
      'Data Structures & Algorithms',
      'Deep Neural Networks',
      'Machine Learning',
      'Database Management',
      'Operating Systems',
      'Social Computing',
      'Object Oriented Programming',
      'Design & Analysis of Algorithms',
    ],
  },
  {
    school: 'Narayana Junior College (TSBIE)',
    degree: 'Intermediate',
    grade: '89.6%',
    period: 'Jun 2021 – May 2023',
    location: 'Kothapet',
    courses: [],
  },
  {
    school: 'Johnson Grammar School (ICSE)',
    degree: '10th Grade',
    grade: '90%',
    period: 'May 2020 – Jun 2021',
    location: 'Mallapur',
    courses: [],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Predicting Human Annotator Disagreement',
    period: 'Apr 2026 – Present',
    status: 'ACTIVE',
    description:
      'Deep learning model that predicts how different humans would label an image — capturing inter-annotator disagreement using probability distributions rather than a single hard label.',
    details:
      'Uses ResNet-based CNNs to model the full distribution of possible annotations, rather than collapsing to a majority vote. This approach better reflects the inherent ambiguity in subjective labeling tasks.',
    tech: ['Python', 'TensorFlow', 'ResNet/CNN', 'NumPy'],
    category: 'ML / Deep Learning',
    color: '#f5e642',
    github: 'https://github.com/Cheromelon',
  },
  {
    id: 2,
    title: 'Lost and Found Platform',
    period: 'Jan 2026 – Feb 2026',
    status: 'SHIPPED',
    description:
      'Web platform enabling users to report lost items and post found items, with direct communication features to reconnect owners with belongings.',
    details:
      'Designed with a user-first approach — minimal friction for posting, clear categorisation, and a simple messaging flow so people can recover their belongings quickly.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Development',
    color: '#7fddbb',
    github: 'https://github.com/Cheromelon',
  },
  {
    id: 3,
    title: 'Salary Prediction Model',
    period: 'Mar 2025 – Apr 2025',
    status: 'SHIPPED',
    description:
      'Compared Linear Regression, SVM, and Random Forest to predict salaries from structured dataset features. Full preprocessing and evaluation pipeline included.',
    details:
      'Implemented a complete ML pipeline — data cleaning, feature engineering, model training, hyperparameter tuning, and comparative evaluation across three different algorithm families.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
    category: 'ML / Data Science',
    color: '#e8321a',
    github: 'https://github.com/Cheromelon',
  },
];

export const skills = {
  Languages: ['Python', 'C', 'MATLAB'],
  'Web Development': ['HTML', 'CSS', 'JavaScript', 'Node.js'],
  'ML / Data': ['Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy'],
  Databases: ['MongoDB'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Google Colab'],
};

export const achievements = [
  {
    title: 'Top 10 — 24-Hour Hackathon',
    org: 'Mahindra University',
    date: 'March 2024',
    desc: 'Competed in a 24-hour hackathon, finishing in the top 10 out of all participating teams.',
  },
  {
    title: 'Software Vice Head',
    org: 'AERO Club, Mahindra University',
    date: '2024 – Present',
    desc: 'Leading software development initiatives within the university aero club.',
  },
];
