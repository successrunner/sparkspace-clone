export const FOOTER_MENUS = [
  {
    title: 'Follow us',
    links: [
      { name: 'Github', url: 'https://github.com' },
      { name: 'Discord', url: 'https://discord.gg' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', url: '#' },
      { name: 'Terms & Conditions', url: '#' },
    ],
  },
];

export const GRADE_OPTIONS = [5, 6, 7, 8, 9, 10, 11, 12].map((grade) => ({
  label: `${grade}th Grade`,
  value: grade,
}));

export const SUBJECT_OPTIONS = [
  'English Language Arts',
  'History/Social Studies',
  'Civics/Govt',
  'Other',
];

export const TESTIMONIALS = [
  {
    quote:
      'This AutoGrading Essay platform has revolutionized my teaching process. It saves me hours of grading time and provides consistent, fair evaluations for my students.',
    authorName: 'Dr. Emily Chen',
    authorPosition: 'Professor of English, Stanford University',
    authorImageSrc: '/images/leon.jpg',
  },
  {
    quote:
      'As a student, I love getting instant feedback on my essays. It helps me improve my writing skills faster than ever before!',
    authorName: 'Alex Johnson',
    authorPosition: 'Undergraduate Student, MIT',
    authorImageSrc: '/images/leon.jpg',
  },
  {
    quote:
      "The AI-powered grading system is remarkably accurate. It's been a game-changer for our online education program, allowing us to scale without compromising on quality.",
    authorName: 'Sarah Thompson',
    authorPosition: 'Director of E-Learning, Harvard Extension School',
    authorImageSrc: '/images/leon.jpg',
  },
  {
    quote:
      "This platform has significantly reduced grading inconsistencies in our department. It's an invaluable tool for maintaining high academic standards.",
    authorName: 'Dr. John Smith',
    authorPosition: 'Professor of Mathematics, MIT',
    authorImageSrc: '/images/leon.jpg',
  },
];

export const STATS = [
  {
    count: 1243,
    label: 'Schools',
  },
  {
    count: 60184,
    label: 'Happy Teachers',
  },
  {
    count: 1204658,
    label: 'Essays Graded',
  },
];

export const FAQS = [
  {
    question: 'How does the essay autograding system work?',
    answer:
      'Our autograding system uses advanced natural language processing and machine learning algorithms to analyze essays. It evaluates various aspects such as content, structure, grammar, and coherence to provide comprehensive feedback and grades.',
  },
  {
    question: 'How accurate is the autograding compared to human grading?',
    answer:
      'Our system has been rigorously tested and shows a high correlation with human graders. While it may not replace human evaluation entirely, it provides consistent, objective feedback and can handle large volumes of essays quickly.',
  },
  {
    question: 'How can educators integrate this tool into their workflow?',
    answer:
      'Educators can easily integrate our autograding system into their existing learning management systems. It offers features like bulk essay uploads, customizable rubrics, and detailed analytics to help streamline the grading process and provide timely feedback to students.',
  },
  {
    question: 'What types of essays can be graded using this system?',
    answer:
      'Our system is designed to grade a wide range of essays, including narrative, argumentative, persuasive, and descriptive essays. It can handle various genres and styles, making it versatile for different educational contexts.',
  },
  {
    question: 'How do you ensure the security and privacy of student data?',
    answer:
      'We take data security and privacy very seriously. Our system uses advanced encryption and secure data storage protocols to protect student information. All data is stored securely and only accessible to authorized personnel.',
  },
];
