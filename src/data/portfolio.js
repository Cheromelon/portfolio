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
  cgpa: '8.2',
  year: '3rd year',
  available: true,
  interests: ['Cricket', 'Tennis', 'Motorsports'],
  role: 'Software Vice Head, AERO Club @ Mahindra University',
};

export const education = [
  {
    school: 'Mahindra University',
    degree: 'B.Tech Computer Science',
    grade: 'CGPA: 8.2 / 10',
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
    period: 'Jan 2026 – Mar 2026',
    status: 'COMPLETED',
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
  title: 'LLM From Scratch',
  period: 'Jun 2025 – Jul 2025',
  status: 'COMPLETED',
  description:
    'Implemented a decoder-only Transformer language model from scratch in PyTorch, recreating the core architecture behind modern LLMs without using pre-built model libraries.',
  details:
    'Built the complete training pipeline including BPE tokenization, input embeddings, positional embeddings, masked multi-head self-attention, feed-forward networks, residual connections, layer normalization, text generation, and autoregressive training. Trained and evaluated the model to understand every stage of LLM development.',
  tech: [
    'Python',
    'PyTorch',
    'NumPy',
    'tiktoken'
  ],
  category: 'ML / Deep Learning',
  color: '#8b5cf6',
  github: 'https://github.com/Cheromelon/LLM-from-scratch',
},
{
  id: 3,
  title: 'Potato Disease Classification',
  period: 'Apr 2026 – May 2026',
  status: 'SHIPPED',
  description:
    'Built a deep learning model using transfer learning with ResNet50 to classify potato leaves as Early Blight, Late Blight, or Healthy from leaf images.',
  details:
    'Developed an end-to-end image classification pipeline including dataset preprocessing, data augmentation, transfer learning with ResNet50, model evaluation, and deployment through a FastAPI backend with a responsive web interface for real-time predictions.',
  tech: [
    'Python',
    'TensorFlow',
    'Keras',
    'ResNet50',
    'FastAPI',
    'HTML',
    'CSS',
    'JavaScript'
  ],
  category: 'ML / Deep Learning',
  color: '#2e8b57',
  github: 'https://github.com/Cheromelon/Potato-Disease-Classification',
  demo: 'https://potato-disease-classifier-rho.vercel.app/'
},
{
    id: 4,
    title: 'Lost and Found Platform',
    period: 'Sep 2025 – Dec 2025',
    status: 'SHIPPED',
    description:
      'Web platform enabling users to report lost items and post found items, with direct communication features to reconnect owners with belongings.',
    details:
      'Designed with a user-first approach — minimal friction for posting, clear categorisation, and a simple messaging flow so people can recover their belongings quickly.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Development',
    color: '#7fddbb',
    github: 'https://github.com/Cheromelon',
    demo:'https://lost-and-found-website-rho.vercel.app/'
  },
  {
  id: 5,
  title: 'Handwritten Digit Recognizer',
  period: 'Jan 2025 – Feb 2025',
  status: 'COMPLETED',
  description:
    'Built a deep learning model to classify handwritten digits (0–9) using the MNIST dataset with high prediction accuracy.',
  details:
    'Developed a complete image classification pipeline including data preprocessing, normalization, model training, hyperparameter tuning, and evaluation. Implemented a neural network using TensorFlow/Keras to recognize handwritten digits and tested its performance on unseen test samples.',
  tech: [
    'Python',
    'TensorFlow',
    'Keras',
    'NumPy',
    'Matplotlib'
  ],
  category: 'ML / Deep Learning',
  color: '#4f8cff',
  github: 'https://github.com/Cheromelon/Digits_recogniser'
}
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
