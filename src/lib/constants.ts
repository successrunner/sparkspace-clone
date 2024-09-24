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

export const SAMPLE_GRADE = 10;

export const SAMPLE_INSTRUCTION = `Essay Assignment: Exploring Themes of Prejudice and Empathy in To Kill a Mockingbird
Objective:
Write a literary analysis essay examining how Harper Lee develops the themes of prejudice and empathy in To Kill a Mockingbird. Your essay should:
	•	Identify and explain how these themes are presented in the novel.
	•	Analyze how characters such as Scout, Jem, and Atticus contribute to the development of these themes.
	•	Use specific examples and quotations from the text to support your analysis.
Guidelines:
	•	Structure: Your essay should include an introduction with a clear thesis statement, at least three body paragraphs, and a conclusion.
	•	Length: 800-1,000 words.
	•	Formatting: Typed, double-spaced, using a standard font and size (e.g., Times New Roman, 12 pt).
	•	Citations: Use proper in-text citations when quoting or paraphrasing from the text. Include a Works Cited page if necessary.
	•	Language: Use formal academic language appropriate for an 8th-grade audience.
	•	Mechanics: Proofread your essay for correct grammar, spelling, and punctuation.
Due Date: [Insert due date here]
Tips:
	•	Begin by re-reading key passages that highlight the themes of prejudice and empathy.
	•	Develop a thesis statement that makes a clear argument about how these themes are developed.
	•	Organize your essay so that each body paragraph focuses on a specific aspect of the themes or characters.
	•	Use transitional phrases to improve the flow between paragraphs.
	•	Conclude by summarizing your main points and reflecting on the significance of these themes in the novel.`;

export const SAMPLE_RUBRIC = `Rubric for Literary Analysis Essay on Themes in To Kill a Mockingbird
Thesis and Introduction (15 points)
	•	Excellent (14-15 points): The introduction effectively engages the reader and presents a clear, insightful thesis statement that addresses how the themes of prejudice and empathy are developed in the novel.
	•	Good (11-13 points): The introduction includes a clear thesis statement that addresses the themes, though it may be somewhat general or lacking in depth.
	•	Fair (8-10 points): The introduction presents a vague thesis or lacks a clear focus on the themes of prejudice and empathy.
	•	Needs Improvement (0-7 points): The introduction is incomplete or missing; the thesis statement is unclear or absent.
Understanding of Text (20 points)
	•	Excellent (18-20 points): Demonstrates a deep understanding of the novel, accurately interpreting how the themes are developed through characters and events.
	•	Good (14-17 points): Shows a good understanding with accurate interpretations but may miss some nuances.
	•	Fair (10-13 points): Displays a basic understanding but includes some inaccuracies or omissions.
	•	Needs Improvement (0-9 points): Shows limited understanding with significant inaccuracies.
Analysis and Evidence (25 points)
	•	Excellent (23-25 points): Provides insightful analysis supported by relevant and well-integrated quotations and examples from the text.
	•	Good (18-22 points): Offers solid analysis with appropriate evidence, though integration may be less smooth.
	•	Fair (13-17 points): Provides some analysis but relies on summary or lacks sufficient evidence.
	•	Needs Improvement (0-12 points): Lacks analysis and evidence; may summarize rather than analyze.
Organization and Structure (15 points)
	•	Excellent (14-15 points): Essay is logically organized with clear topic sentences and effective transitions between paragraphs.
	•	Good (11-13 points): Organization is clear but may have minor lapses in coherence or transitions.
	•	Fair (8-10 points): Essay has some organizational structure but may be disjointed or lack clear topic sentences.
	•	Needs Improvement (0-7 points): Lacks clear organization, making the essay difficult to follow.
Language and Style (10 points)
	•	Excellent (9-10 points): Uses precise, varied vocabulary and complex sentences appropriate for academic writing; tone is formal and consistent.
	•	Good (7-8 points): Language is appropriate but may lack variety; tone is generally formal.
	•	Fair (5-6 points): Language is simple and may be informal; sentences are basic.
	•	Needs Improvement (0-4 points): Language is inappropriate for academic writing; frequent colloquialisms or slang.
Grammar, Spelling, and Mechanics (10 points)
	•	Excellent (9-10 points): Few to no errors in grammar, spelling, or punctuation.
	•	Good (7-8 points): Minor errors that do not impede understanding.
	•	Fair (5-6 points): Several errors that may distract the reader but do not significantly hinder comprehension.
	•	Needs Improvement (0-4 points): Frequent errors that interfere with the reader’s understanding.
Citation and Formatting (5 points)
	•	Excellent (5 points): All quotations and references are correctly cited; formatting guidelines are followed precisely.
	•	Good (4 points): Most citations are correct; minor formatting errors.
	•	Fair (3 points): Some citations are missing or incorrect; formatting is inconsistent.
	•	Needs Improvement (0-2 points): Lacks proper citations; formatting guidelines are not followed.
Total Points Possible: 100`;

export const SAMPLE_ESSAY = `Unveiling the Illusions: Symbolism in F. Scott Fitzgerald&apos;s The Great Gatsby
F. Scott Fitzgerald&apos;s The Great Gatsby is a profound critique of the American Dream and the moral decay of society during the Roaring Twenties. Through rich symbolism, Fitzgerald weaves a narrative that delves into themes of ambition, greed, and the pursuit of an unattainable ideal. This essay examines three significant symbols in the novel—the green light at the end of Daisy&apos;s dock, the eyes of Doctor T.J. Eckleburg, and the Valley of Ashes—and analyzes how they contribute to the overarching themes.
One of the most prominent symbols is the green light at the end of Daisy&apos;s dock, which represents Gatsby&apos;s longing and the elusive nature of the American Dream. The green light is first introduced when Nick observes Gatsby reaching out towards it: "He stretched out his arms toward the dark water… I glanced seaward—and distinguished nothing except a single green light" (Fitzgerald 21). The light embodies Gatsby&apos;s hope to reunite with Daisy and attain his idealized future. However, the distance between Gatsby and the light symbolizes the gap between reality and illusion. As the novel progresses, the green light loses its enchantment, reflecting Gatsby&apos;s realization that his dream is unattainable. Nick reflects, "Now it was again a green light on a dock. His count of enchanted objects had diminished by one" (Fitzgerald 93). The diminishing significance of the green light underscores the disillusionment inherent in the pursuit of the American Dream.
Another crucial symbol is the eyes of Doctor T.J. Eckleburg, depicted on a faded billboard overlooking the Valley of Ashes. These eyes represent the moral blindness and the loss of spiritual values in society. Fitzgerald describes them as "blue and gigantic—their retinas are one yard high… they look out of no face, but, instead, from a pair of enormous yellow spectacles" (Fitzgerald 24). The eyes watch over the desolation of the Valley, symbolizing a neglected higher power or conscience observing the moral decay. After Myrtle&apos;s death, George Wilson fixates on the eyes, telling Michaelis, "God sees everything" (Fitzgerald 160). This indicates Wilson&apos;s belief that divine judgment looms over the corrupt actions of the characters. The eyes serve as a stark reminder of the consequences of moral corruption and the absence of ethical oversight in the characters&apos; lives.
The Valley of Ashes itself is a powerful symbol of decay and the dark underbelly of the glamorous lifestyles portrayed in the novel. It is described as "a fantastic farm where ashes grow like wheat into ridges and hills and grotesque gardens" (Fitzgerald 23). This desolate area represents the consequences of industrialization and the neglect of those who do not share in the wealth of the elite. The Valley stands in stark contrast to the opulence of East Egg and West Egg, highlighting the stark socioeconomic divide. It is the setting where the novel&apos;s most tragic events unfold, symbolizing the moral and social deterioration resulting from the characters&apos; relentless pursuit of wealth and pleasure.
In conclusion, Fitzgerald&apos;s use of symbolism in The Great Gatsby enriches the narrative by providing deeper insight into the themes of illusion versus reality, moral decay, and the hollowness of the American Dream. The green light symbolizes the elusive nature of dreams and the inevitable disillusionment that follows. The eyes of Doctor T.J. Eckleburg represent the loss of spiritual values and the unseen moral judgment on society&apos;s corruption. The Valley of Ashes highlights the consequences of unchecked ambition and the societal neglect of the less fortunate. Together, these symbols create a tapestry that critiques the hedonistic pursuits of the era and invites readers to reflect on the true cost of blind ambition.
Works Cited:
Fitzgerald, F. Scott. The Great Gatsby. Scribner, 2004.
Note: All quotations are properly cited in MLA format, and page numbers correspond to the edition listed in the Works Cited.`;

export const SAMPLE_FEEDBACK = `**Grading the Essay: Exploring Prejudice and Empathy in To Kill a Mockingbird**

**Thesis and Introduction (15 points)**: 14 points  
The introduction is engaging and presents a clear thesis statement addressing how the themes of prejudice and empathy are developed in the novel. It effectively sets the stage for the discussion that follows.

**Understanding of Text (20 points)**: 18 points  
The essay demonstrates a deep understanding of the novel. It accurately interprets how the themes of prejudice and empathy manifest through key events, particularly the trial of Tom Robinson and the character development of Scout and Jem. However, while the interpretation is strong, some nuances, such as the broader societal implications of these themes, could be further explored.

**Analysis and Evidence (25 points)**: 22 points  
The analysis is insightful, and relevant quotations are effectively integrated to support the points made. The examples are well-chosen; however, the connection between the analysis and the quotations could be more explicitly articulated at times. A few more specific details about moments from the text could also strengthen the arguments.

**Organization and Structure (15 points)**: 14 points  
The essay is logically organized, with clear topic sentences and effective transitions between paragraphs. Each paragraph maintains a clear focus on specific aspects of the themes or characters, contributing to the overall coherence of the essay.

**Language and Style (10 points)**: 9 points  
The language used is appropriate for academic writing, with varied vocabulary and sentences. The tone is consistently formal, making it suitable for the intended audience. There are minor areas where more precise vocabulary could enhance the sophistication of the writing.

**Grammar, Spelling, and Mechanics (10 points)**: 10 points  
The essay is well-written with few if any errors in grammar, spelling, or punctuation, contributing to the overall clarity of the analysis.

**Citation and Formatting (5 points)**: 5 points  
All quotations and references are correctly cited, and the formatting guidelines are followed precisely.

**Total Points: 92/100**

### Suggestions for Improvement:
1. **Deepen Analysis**: While you've done a fantastic job with your analysis, consider diving deeper into how societal norms in Maycomb impact the characters' development, and how these reflect broader themes beyond the individual experience.
   
2. **Clarify Connections**: Be sure to explicitly connect your evidence to your analysis. Sometimes the link between the quote and the point you make was implicit; reinforcing these connections can strengthen your argument.

3. **Add Further Examples**: Including a few more specific examples or scenes could further illustrate your points, especially when discussing key character transformations. 

4. **Varied Vocabulary**: While your vocabulary is good, aim for even more variation to elevate your writing. Look for synonyms or phrases that can convey the same ideas more powerfully.

Overall, this is a strong essay that effectively tackles the themes of prejudice and empathy in *To Kill a Mockingbird*. Well done!`;

export const SAMPLE_AI_PROBABILITIES = [
  {
    label: 'AI',
    value: 70.25,
    color: '#000',
  },
  {
    label: 'Human',
    value: 20.75,
    color: '#00ff00',
  },
  {
    label: 'AI Assisted',
    value: 9.0,
    color: '#0000ff',
  },
];
