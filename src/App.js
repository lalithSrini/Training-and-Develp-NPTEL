// A complete React Quiz App (mobile friendly) without TailwindCSS
// Uses basic CSS and React Hooks

import React, { useState, useEffect } from "react";
import "./App.css";

const rawQuestions = [
  {
    question: "How did Louis Allen define organization?",
    options: [
      "Organization is the process of identifying and grouping work to be performed, defining and delegating responsibility and authority and establishing relationships to enable people to work most effectively together in accomplishing objectives.",
      "Organization is the process of combining the work that individuals or groups have to perform with the facilities necessary for its execution, that the duties so performed provide the best channels for efficient, systematic, positive and coordinated application of the available effort.",
      "An organization is a collective group of people working without having a common purpose.",
      "None of these"
    ],
    answer: "Organization is the process of identifying and grouping work to be performed, defining and delegating responsibility and authority and establishing relationships to enable people to work most effectively together in accomplishing objectives."
  },
  {
    question: "There is a wide scope of employer-employee relationships, but which one is NOT an issue involved with that scope?",
    options: [
      "Collective bargaining",
      "Customer service",
      "Standing orders",
      "Grievances and their redressal"
    ],
    answer: "Customer service"
  },
  {
    question: "Consider the following statements and select the correctanswer\n1. Training refers to teaching an employee new skills to help them improve their job performance and work more efficiently.\n2. Training helps to enhance specific abilities or acquire new ones relevant to a job, task, or activity.\n3. A proper training program is both Trainee and Trainer dependent\n4. A proper training program is only trainee-dependent and does not depend on the Trainer.",
    options: [
      "1 and 4 are correct, 2 and 3 are false.",
      "All 1, 2, 3, and 4 are correct.",
      "1, 2 and 3 are correct, 4 is false.",
      "None of these is correct"
    ],
    answer: "1, 2 and 3 are correct, 4 is false."
  },
  {
    question: "Which one of the following is incorrect in connection to sec. 2(f) of the Indian Employee’s Provident Fund act?",
    options: [
      "“employee” means any person who is employed for wages in any kind of work, manual or otherwise, in or in connection with the work of [an establishment], and who gets his wages directly or indirectly from the employer.",
      "“employee” term covers any person employed by or through a contractor in or in connection with the work of the establishment;",
      "The “employee” term covers any person engaged as an apprentice, not being an apprentice engaged under the Apprentices Act, 1961 (52 of 1961), or under the standing orders of the establishment;",
      "None of these"
    ],
    answer: "None of these"
  },
  {
    question: "Which type of training refers to familiarizing employees with the means of preventing, detecting, and eliminating non-quality items?",
    options: [
      "Technical training",
      "Soft skills training",
      "Quality training",
      "Skill training"
    ],
    answer: "Quality training"
  },
  {
    question: "Find out the odd one of the following in terms of types of employment contract.",
    options: [
      "Ad-hoc employment contract",
      "Permanent employment contract",
      "Temporary employment contract",
      "Independent contractor/consultant"
    ],
    answer: "Ad-hoc employment contract"
  },
  {
    question: "Which of the following best defines 'Human Capital'?",
    options: [
      "The financial resources owned by an organization.",
      "The physical assets, such as buildings and machinery, used by an organization.",
      "The skills, knowledge, abilities, and health of employees that contribute to organizational success.",
      "The legal framework that governs organizational operations."
    ],
    answer: "The skills, knowledge, abilities, and health of employees that contribute to organizational success."
  },
  {
    question: "Which of the following is a primary goal of knowledge management in an organization?",
    options: [
      "To store large volumes of data in databases",
      "To encourage employee retention",
      "To create, share, and utilize knowledge effectively to achieve organizational goals",
      "To replace traditional organizational structures"
    ],
    answer: "To create, share, and utilize knowledge effectively to achieve organizational goals"
  },
  {
    question: "Which of the following best defines Intellectual Capital?",
    options: [
      "Financial assets held by a company",
      "Tangible resources such as buildings and equipment",
      "Knowledge, skills, and intellectual property contributing to a company's value",
      "Current market value of a company's shares"
    ],
    answer: "Knowledge, skills, and intellectual property contributing to a company's value"
  },
  {
    question: "Which of the following best describes 'Knowledge Capital' as a type of human capital?",
    options: [
      "The skills and abilities of employees to form relationships.",
      "The expertise, education, and training individuals possess.",
      "The emotional resilience and well-being of individuals.",
      "The loyalty and trust of customers."
    ],
    answer: "The expertise, education, and training individuals possess.",
  },
  {
    question: "Which of the following is/are correct statements about 'strategy'?",
    options: [
      "Only 1 and 2",
      "Only 4",
      "Only 1 and 3",
      "Only 2"
    ],
    answer: "Only 4"
  },
  {
    question: "Identify the correct order of the steps of strategy implementation:",
    options: [
      "2-1-3-5-4-6",
      "1-4-2-3-5-6",
      "3-2-4-1-5-6",
      "1-2-3-4-5-6"
    ],
    answer: "1-2-3-4-5-6"
  },
  {
    question: "The success of a competitive strategy is contingent on the demands of the __________ and factors internal to the organization?",
    options: [
      "company mission",
      "company goals",
      "strategic choice",
      "external environment"
    ],
    answer: "external environment"
  },
  {
    question: "There are four business strategies and which of the following is NOT one of them?",
    options: [
      "Disinvestment",
      "Internal growth",
      "External growth",
      "All the three as mentioned above are business strategies"
    ],
    answer: "All the three as mentioned above are business strategies"
  },
  {
    question: "Metrics that show value of training involves _______, performance improvement, reduced customer complaints, reduced turnover and greater employee satisfaction.",
    options: [
      "turnover",
      "satisfaction",
      "learning",
      "training"
    ],
    answer: "learning"
  },
  {
    question: "A perception that training is 'forced' may lead to more time spent discussing than implementing training. Which model of organizing strategic training has the above constraints?",
    options: [
      "Corporate University Model",
      "Customer Model",
      "Matrix Model",
      "None of these"
    ],
    answer: "Matrix Model"
  },
  {
    question: "It's more suitable for large companies with ample resources to invest in long-term training. There may be conflicts related to the curriculum of content areas. Which model has these drawbacks?",
    options: [
      "Corporate University Model",
      "Customer Model",
      "Matrix Model",
      "None of these"
    ],
    answer: "Corporate University Model"
  },
  {
    question: "Which model involves having a training function for each division or function of the organization?",
    options: [
      "Corporate university model",
      "Matrix model",
      "Faculty model",
      "Customer model"
    ],
    answer: "Customer model"
  },
  {
    question: "The organizational managers and employees may be anxious about change, feel unable to cope up, value the current and do not understand the value of the new one. Which change-related problem is described?",
    options: [
      "Resistance to change",
      "Loss of control",
      "Power imbalance",
      "Task redefinition"
    ],
    answer: "Resistance to change"
  },
  {
    question: "A __________ strategy is a business approach where an organization focuses its efforts on a single product line, market, or set of resources to achieve a competitive advantage.",
    options: [
      "Internal growth strategy",
      "External growth strategy",
      "Disinvestment strategy",
      "concentration strategy"
    ],
    answer: "concentration strategy"
  },
  {
    question: "How can training needs be identified?",
    options: [
      "Current Capability + Desired Capability",
      "Desired Capability - Current Capability",
      "Current Performance + Future Needs",
      "Training Budget - Performance Gap"
    ],
    answer: "Desired Capability - Current Capability"
  },
  {
    question: "Which of the following factors is directly related to an employee's motivation to learn and performance?",
    options: [
      "Department size",
      "Training budget allocation",
      "Age and generation",
      "Organizational hierarchy"
    ],
    answer: "Age and generation"
  },
  {
    question: "Which step in the TNA process involves analyzing the collected data to draw conclusions and make recommendations for training?",
    options: [
      "5th step",
      "4th step",
      "3rd step",
      "2nd step"
    ],
    answer: "4th step"
  },
  {
    question: "What distinguishes the proactive approach from the reactive approach in TNA?",
    options: [
      "Proactive TNA addresses current performance gaps.",
      "Reactive TNA considers only non-training solutions.",
      "Proactive TNA focuses on anticipated future performance issues.",
      "Reactive TNA is completed after implementing new technology."
    ],
    answer: "Proactive TNA focuses on anticipated future performance issues."
  },
  {
    question: "Why are focus group discussions useful in training needs assessment?",
    options: [
      "They are quick to organize.",
      "They explore complex issues and reduce training rejection by stakeholders.",
      "They minimize bias in employee responses",
      "They are ideal for analyzing quantitative data."
    ],
    answer: "They explore complex issues and reduce training rejection by stakeholders."
  },
  {
    question: "What is the primary goal of competency assessments in the workplace?",
    options: [
      "To determine salary adjustments",
      "To measure employee attendance",
      "To evaluate employee job satisfaction",
      "To identify and correct performance issues before they affect"
    ],
    answer: "To identify and correct performance issues before they affect"
  },
  {
    question: "What is one disadvantage of using questionnaires for TNA?",
    options: [
      "They require too much time to complete",
      "They do not allow for feedback from employees",
      "The results may lack confidentiality",
      "There is a high drop-out rate and potential for misinterpretation"
    ],
    answer: "There is a high drop-out rate and potential for misinterpretation"
  },
  {
    question: "What is defined as 'the application of knowledge, skills and behaviours used in performing specific job tasks'?",
    options: [
      "Appraisal",
      "Efficiency",
      "Competency",
      "None of the above"
    ],
    answer: "Competency"
  },
  {
    question: "Which of the following is NOT a key level of Training Needs Assessment (TNA)?",
    options: [
      "Occupational Assessment",
      "Individual assessment",
      "Educational assessment",
      "Organizational assessment"
    ],
    answer: "Educational assessment"
  },
  {
    question: "According to the TNA model, what happens if the performance deficiency (PD) is due to something other than a KSA (Knowledge, Skills, Abilities) deficiency?",
    options: [
      "Training is the only solution to the problem",
      "Non-training solutions should be considered",
      "Performance issues are ignored",
      "Only individual training is necessary"
    ],
    answer: "Non-training solutions should be considered"
  },
  {
    question: "What is the first step in the training process model?",
    options: [
      "Designing the training program",
      "Conducting the needs assessment",
      "Evaluating the training",
      "Implementing the training"
    ],
    answer: "Conducting the needs assessment"
  },
  {
    question: "Which of the following is NOT a component of the training design process?",
    options: [
      "Developing learning objectives",
      "Creating employee payroll systems",
      "Selecting training methods",
      "Developing course content"
    ],
    answer: "Creating employee payroll systems"
  },
  {
    question: "Which term refers to the ability to apply learning from training to the job context?",
    options: [
      "Learning reinforcement",
      "Training efficiency",
      "Transfer of training",
      "Training retention"
    ],
    answer: "Transfer of training"
  },
  {
    question: "According to adult learning theory, adults are:",
    options: [
      "Not motivated to learn",
      "Dependent learners",
      "Internally motivated and self-directed",
      "Unable to retain new information"
    ],
    answer: "Internally motivated and self-directed"
  },
  {
    question: "Which principle is NOT part of adult learning theory?",
    options: [
      "Adults are result-oriented",
      "Adults need to be told what to do",
      "Adults bring experience to learning",
      "Adults need to be involved in the planning and evaluation of their instruction"
    ],
    answer: "Adults need to be told what to do"
  },
  {
    question: "What is one way to increase transfer of training?",
    options: [
      "Avoid feedback to learners",
      "Provide a realistic training environment",
      "Isolate training from real-world applications",
      "Discourage collaboration"
    ],
    answer: "Provide a realistic training environment"
  },
  {
    question: "In instructional design, what is a 'learning objective'?",
    options: [
      "The reason for choosing the training venue",
      "A broad organizational strategy",
      "A measurable outcome of training",
      "An employee's job description"
    ],
    answer: "A measurable outcome of training"
  },
  {
    question: "Which of the following best describes the 'training methods'?",
    options: [
      "HR department policies",
      "The tools and techniques used to deliver training content",
      "A type of budgeting tool",
      "None of the above"
    ],
    answer: "The tools and techniques used to deliver training content"
  },
  {
    question: "Why is feedback important in training?",
    options: [
      "To criticize learners",
      "To control the pace of the session",
      "To reinforce learning and improve performance",
      "To extend training time"
    ],
    answer: "To reinforce learning and improve performance"
  },
  {
    question: "Which of the following is a technique used in experiential learning?",
    options: [
      "Case studies",
      "Lectures",
      "Audio podcasts",
      "Performance appraisals"
    ],
    answer: "Case studies"
  },
  {
    question: "Which of the following best describes 'On-the-job training' (OJT)?",
    options: [
      "Training conducted in a classroom setting.",
      "Training by reading manuals and handouts.",
      "Training while performing job tasks under supervision.",
      "Training using virtual simulations only."
    ],
    answer: "Training while performing job tasks under supervision."
  },
  {
    question: "Which method is considered a traditional training method?",
    options: [
      "Online learning",
      "Job rotation",
      "Virtual reality simulation",
      "Self-paced e-learning"
    ],
    answer: "Job rotation"
  },
  {
    question: "A major disadvantage of apprenticeship training is:",
    options: [
      "It is too quick and ineffective.",
      "It provides no real job experience.",
      "It is time-consuming and costly.",
      "It does not teach technical skills."
    ],
    answer: "It is time-consuming and costly."
  },
  {
    question: "In vestibule training, training is conducted:",
    options: [
      "Directly at the worksite.",
      "In a classroom using only theoretical lectures.",
      "In a simulated environment similar to the actual job.",
      "Through home-based assignments."
    ],
    answer: "In a simulated environment similar to the actual job."
  },
  {
    question: "Which one is NOT a feature of job instruction training (JIT)?",
    options: [
      "Demonstration of job tasks.",
      "Detailed feedback for improvement.",
      "Random assignment without supervision.",
      "Step-by-step instruction."
    ],
    answer: "Random assignment without supervision."
  },
  {
    question: "Which of the following is NOT an advantage of traditional training methods?",
    options: [
      "Social interaction with peers and trainers.",
      "Immediate feedback.",
      "Scalability for large remote audiences.",
      "Practical skill development."
    ],
    answer: "Scalability for large remote audiences."
  },
  {
    question: "Which training method uses experienced employees to guide newcomers?",
    options: [
      "Lecture-based training",
      "Mentoring",
      "Vestibule training",
      "Simulation training"
    ],
    answer: "Mentoring"
  },
  {
    question: "Which type of analysis identifies specific skills gaps in employees?",
    options: [
      "Organizational analysis",
      "Task analysis",
      "Strategic analysis",
      "Economic analysis"
    ],
    answer: "Task analysis"
  },
  {
    question: "Which of the following is an example of a 'simulation' training method?",
    options: [
      "Role-playing negotiation scenarios.",
      "Listening to a motivational lecture.",
      "Reading about customer service techniques.",
      "Filling out online surveys."
    ],
    answer: "Role-playing negotiation scenarios."
  },
  {
    question: "Which of the following is NOT an example of an experiential training method?",
    options: [
      "Role Plays",
      "Simulations",
      "Lectures",
      "Case studies"
    ],
    answer: "Lectures"
  },
  {
    question: "Which of the following is the most important feature of e-learning?",
    options: [
      "Geographical flexibility",
      "In-person supervision",
      "Handwritten material delivery",
      "One-on-one classroom discussions"
    ],
    answer: "Geographical flexibility"
  },
  {
    question: "Which term best describes training delivered through mobile devices?",
    options: [
      "Vestibule training",
      "M-learning",
      "Job rotation",
      "On-the-job training"
    ],
    answer: "M-learning"
  },
  {
    question: "Which technology uses 'immersive 3D environments' for training employees?",
    options: [
      "E-learning platforms",
      "Virtual reality (VR)",
      "Video conferencing",
      "Email-based training"
    ],
    answer: "Virtual reality (VR)"
  },
  {
    question: "Which of the following is an advantage of technology-based training?",
    options: [
      "Limited accessibility",
      "Higher cost than traditional training",
      "Self-paced learning",
      "Requires full-time trainers always present"
    ],
    answer: "Self-paced learning"
  },
  {
    question: "A major disadvantage of e-learning is:",
    options: [
      "It provides no flexibility for learners",
      "It may result in limited hands-on practice",
      "It increases travel expenses",
      "It discourages independent learning"
    ],
    answer: "It may result in limited hands-on practice"
  },
  {
    question: "Which of the following training methods uses real-time instructor-led online training?",
    options: [
      "Webinars",
      "Job shadowing",
      "Apprenticeship",
      "Self-paced online course"
    ],
    answer: "Webinars"
  },
  {
    question: "Which type of learning platform is an online-based environment offering self-paced course modules?",
    options: [
      "Mobile app learning",
      "Learning Management System (LMS)",
      "Virtual coaching",
      "Job instruction training"
    ],
    answer: "Learning Management System (LMS)"
  },
  {
    question: "Which of these is an example of 'blended learning'?",
    options: [
      "Only classroom training",
      "Only e-learning modules",
      "A combination of classroom and online learning",
      "Self-taught training with no guidance"
    ],
    answer: "A combination of classroom and online learning"
  },
  {
    question: "Which of the following is NOT a benefit of mobile learning (m-learning)?",
    options: [
      "Learning on-the-go",
      "Easy content accessibility",
      "Device compatibility issues",
      "Flexibility in learning time"
    ],
    answer: "Device compatibility issues"
  },
  {
    question: "Which one is an important consideration for designing e-learning content?",
    options: [
      "Focus only on text-heavy materials",
      "Ignore learner interaction",
      "Interactive and multimedia-rich content",
      "Minimize assessments"
    ],
    answer: "Interactive and multimedia-rich content"
  },
  {
    question: "Which of the following best defines 'behavior modeling' in training?",
    options: [
      "Employees learn by creating their own training modules.",
      "Employees learn by observing and practicing behaviors demonstrated by a model.",
      "Employees memorize the company policy manuals.",
      "Employees focus only on theoretical concepts without practice."
    ],
    answer: "Employees learn by observing and practicing behaviors demonstrated by a model."
  },
  {
    question: "In experiential learning, which of the following comes FIRST in the process?",
    options: [
      "Concrete experience",
      "Abstract conceptualization",
      "Reflective observation",
      "Active experimentation"
    ],
    answer: "Concrete experience"
  },
  {
    question: "Which of the following is an example of an 'adventure learning' activity?",
    options: [
      "Role-playing a customer complaint",
      "Attending a web seminar",
      "Completing a ropes course challenge",
      "Reading case studies"
    ],
    answer: "Completing a ropes course challenge"
  },
  {
    question: "Which term describes group members being assigned different roles and acting out scenarios?",
    options: [
      "Role playing",
      "Simulation",
      "Case study",
      "Adventure learning"
    ],
    answer: "Role playing"
  },
  {
    question: "Which of the following is a major goal of team training?",
    options: [
      "To teach individual leadership skills only",
      "To enhance communication and collaboration among team members",
      "To focus only on technical knowledge",
      "To replace the team leader"
    ],
    answer: "To enhance communication and collaboration among team members"
  },
  {
    question: "Which technique emphasizes solving realistic problems using analytical tools and decision-making skills?",
    options: [
      "Simulation",
      "Case study method",
      "Role playing",
      "E-learning"
    ],
    answer: "Case study method"
  },
  {
    question: "Which of the following is NOT typically part of team training?",
    options: [
      "Cross-training",
      "Coordination training",
      "Simulation training",
      "Individual sports coaching"
    ],
    answer: "Individual sports coaching"
  },
  {
    question: "In which type of learning do employees participate in 'hypothetical real-world situations'?",
    options: [
      "Lecture method",
      "Simulation",
      "Self-paced reading",
      "Vestibule training"
    ],
    answer: "Simulation"
  },
  {
    question: "What is the primary benefit of using role plays in training?",
    options: [
      "Employees memorize more company policies",
      "Employees improve problem-solving and interpersonal skills",
      "Employees improve handwriting skills",
      "Employees complete training faster"
    ],
    answer: "Employees improve problem-solving and interpersonal skills"
  },
  {
    question: "What distinguishes simulation from other traditional training methods?",
    options: [
      "It is mainly used for leisure activities",
      "It mimics real job conditions without the real-world risks",
      "It uses only lectures to teach concepts",
      "It limits decision-making practice"
    ],
    answer: "It mimics real job conditions without the real-world risks"
  },
  {
    question: "Which of the following best defines evaluation in the context of training?",
    options: [
      "Assessing employee salaries after training",
      "Assessing how effective the training program was in achieving its objectives",
      "Deciding who should be promoted",
      "Creating new organizational policies"
    ],
    answer: "Assessing how effective the training program was in achieving its objectives"
  },
  {
    question: "Which model is the most commonly used for evaluating training effectiveness?",
    options: [
      "ADDIE Model",
      "Kirkpatrick Model",
      "Maslow's Hierarchy",
      "Kolb's Learning Cycle"
    ],
    answer: "Kirkpatrick Model"
  },
  {
    question: "What is measured at the first level (Reaction) of Kirkpatrick’s Model?",
    options: [
      "Knowledge gain",
      "Change in employee behavior",
      "Participants' satisfaction with the training",
      "Return on Investment (ROI)"
    ],
    answer: "Participants' satisfaction with the training"
  },
  {
    question: "Which of the following is assessed at the second level (Learning) of Kirkpatrick's model?",
    options: [
      "Whether employees liked the trainer",
      "The extent to which participants improved knowledge and skills",
      "Impact on organizational revenue",
      "Quality of post-training refreshments"
    ],
    answer: "The extent to which participants improved knowledge and skills"
  },
  {
    question: "What is measured at the Behavior level (Level 3) of Kirkpatrick's Model?",
    options: [
      "Changes in job performance after training",
      "Trainees' initial feedback",
      "Written tests only",
      "Training budget efficiency"
    ],
    answer: "Changes in job performance after training"
  },
  {
    question: "Which of the following would be an indicator at the Results level of Kirkpatrick's Model?",
    options: [
      "Improved customer satisfaction scores",
      "Completion of a training evaluation form",
      "Passing a training quiz",
      "Attending the entire training session"
    ],
    answer: "Improved customer satisfaction scores"
  },
  {
    question: "Which evaluation method is based on calculating the economic return from training investment?",
    options: [
      "ROI Analysis",
      "Reaction Survey",
      "Post-training Assessment",
      "Behavior Observation"
    ],
    answer: "ROI Analysis"
  },
  {
    question: "Which of these is an example of formative evaluation?",
    options: [
      "Evaluation after the training ends",
      "Evaluation during training to improve the ongoing program",
      "Assessment six months after training",
      "Budget evaluation of the training program"
    ],
    answer: "Evaluation during training to improve the ongoing program"
  },
  {
    question: "Which type of evaluation occurs after the training is fully completed?",
    options: [
      "Formative Evaluation",
      "Summative Evaluation",
      "Behavior Evaluation",
      "Organizational Analysis"
    ],
    answer: "Summative Evaluation"
  },
  {
    question: "Which of the following is NOT a direct benefit of evaluating training programs?",
    options: [
      "Improving future training design",
      "Demonstrating value to stakeholders",
      "Eliminating all training costs",
      "Identifying areas for improvement"
    ],
    answer: "Eliminating all training costs"
  },
  {
    question: "Which of the following best defines 'career planning'?",
    options: [
      "Randomly changing jobs frequently",
      "Process of setting career goals and creating a plan to achieve them",
      "Focusing only on salary without personal growth",
      "Depending entirely on employer for career decisions"
    ],
    answer: "Process of setting career goals and creating a plan to achieve them"
  },
  {
    question: "Career development is primarily the responsibility of:",
    options: [
      "The employer only",
      "The employee only",
      "Both the employee and the organization",
      "The government"
    ],
    answer: "Both the employee and the organization"
  },
  {
    question: "Which of the following is NOT a step in the career planning process?",
    options: [
      "Self-assessment",
      "Career exploration",
      "Implementing random choices",
      "Setting goals"
    ],
    answer: "Implementing random choices"
  },
  {
    question: "Which term describes the pattern of work-related experiences throughout a person's life?",
    options: [
      "Job hopping",
      "Career path",
      "Salary progression",
      "Career recession"
    ],
    answer: "Career path"
  },
  {
    question: "Which of the following is an internal factor affecting career choice?",
    options: [
      "Parental expectations",
      "Economic conditions",
      "Self-concept",
      "Labor market trends"
    ],
    answer: "Self-concept"
  },
  {
    question: "Which type of mentoring relationship is usually planned and formalized by the organization?",
    options: [
      "Informal mentoring",
      "Self-mentoring",
      "Formal mentoring",
      "Reverse mentoring"
    ],
    answer: "Formal mentoring"
  },
  {
    question: "The psychological contract in careers refers to:",
    options: [
      "A formal written employment contract",
      "Unspoken mutual expectations between employer and employee",
      "Government-mandated career rules",
      "Terms of retirement benefits"
    ],
    answer: "Unspoken mutual expectations between employer and employee"
  },
  {
    question: "Which career development initiative involves employees working in multiple departments?",
    options: [
      "Job shadowing",
      "Succession planning",
      "Job rotation",
      "Technical training"
    ],
    answer: "Job rotation"
  },
  {
    question: "Which of the following is a disadvantage of poor career planning by an employee?",
    options: [
      "Better salary growth",
      "Job satisfaction",
      "Uncertainty and career stagnation",
      "Early promotions"
    ],
    answer: "Uncertainty and career stagnation"
  },
  {
    question: "Which of the following best describes succession planning?",
    options: [
      "Planning vacations for employees",
      "Training employees in customer service",
      "Identifying and developing internal candidates for key leadership positions",
      "Reducing employee headcount"
    ],
    answer: "Identifying and developing internal candidates for key leadership positions"
  },
  {
    question: "Which of the following best describes 'performance appraisal'?",
    options: [
      "A method to randomly reward employees",
      "A process to systematically evaluate employee performance against set criteria",
      "A meeting only about salary discussions",
      "A casual conversation with no documentation"
    ],
    answer: "A process to systematically evaluate employee performance against set criteria"
  },
  {
    question: "Which performance appraisal method uses a comparison between employees?",
    options: [
      "Rating scales method",
      "Essay appraisal",
      "Ranking method",
      "Self-appraisal method"
    ],
    answer: "Ranking method"
  },
  {
    question: "Which of the following is a major drawback of the traditional ranking method?",
    options: [
      "It promotes teamwork",
      "It demotivates lower-ranked employees",
      "It accurately identifies strengths",
      "It is unbiased and objective"
    ],
    answer: "It demotivates lower-ranked employees"
  },
  {
    question: "Which performance appraisal approach involves setting specific measurable goals?",
    options: [
      "Critical Incident Method",
      "360-Degree Feedback",
      "Management by Objectives (MBO)",
      "Checklist Method"
    ],
    answer: "Management by Objectives (MBO)"
  },
  {
    question: "In 360-degree feedback, who provides evaluation input?",
    options: [
      "Only the employee’s manager",
      "Only the HR department",
      "Peers, subordinates, supervisors, and self",
      "External auditors"
    ],
    answer: "Peers, subordinates, supervisors, and self"
  },
  {
    question: "Which appraisal method records specific examples of employee effective and ineffective behaviors?",
    options: [
      "Critical Incident Method",
      "Paired Comparison Method",
      "Checklist Method",
      "Essay Method"
    ],
    answer: "Critical Incident Method"
  },
  {
    question: "Which of the following is a primary purpose of performance appraisal?",
    options: [
      "Only to terminate underperformers",
      "To maintain employee discipline records",
      "To improve employee performance and development",
      "To distribute organizational bonuses randomly"
    ],
    answer: "To improve employee performance and development"
  },
  {
    question: "Which factor may introduce bias in performance appraisals?",
    options: [
      "Using standardized evaluation forms",
      "Objective goal setting",
      "Halo effect",
      "Management by Objectives (MBO)"
    ],
    answer: "Halo effect"
  },
  {
    question: "Which of these is NOT typically evaluated during a performance appraisal?",
    options: [
      "Employee’s job-related competencies",
      "Employee’s physical appearance",
      "Employee’s achievement of goals",
      "Employee’s work behavior"
    ],
    answer: "Employee’s physical appearance"
  },
  {
    question: "Which of the following is a key benefit of using performance appraisals?",
    options: [
      "Reduces organizational feedback channels",
      "Helps in identifying training needs",
      "Promotes favoritism among supervisors",
      "Discourages communication between employees and managers"
    ],
    answer: "Helps in identifying training needs"
  },
  {
    question: "Which of the following best defines 'organizational development' (OD)?",
    options: [
      "A quick restructuring of the company's financial plans",
      "A planned, organization-wide effort to increase effectiveness and health through interventions in processes",
      "Random changes implemented by top management",
      "Annual financial reporting adjustments"
    ],
    answer: "A planned, organization-wide effort to increase effectiveness and health through interventions in processes"
  },
  {
    question: "Which OD intervention focuses on improving interpersonal relationships through activities such as team building?",
    options: [
      "Technostructural interventions",
      "Human process interventions",
      "Strategic interventions",
      "Financial interventions"
    ],
    answer: "Human process interventions"
  },
  {
    question: "Which of the following is an example of a technostructural intervention?",
    options: [
      "Team building exercises",
      "Job redesign",
      "Conflict resolution workshops",
      "Leadership training"
    ],
    answer: "Job redesign"
  },
  {
    question: "The key role of a change agent in OD is to:",
    options: [
      "Resist organizational change",
      "Facilitate and manage change within the organization",
      "Focus only on financial audits",
      "Terminate low-performing employees"
    ],
    answer: "Facilitate and manage change within the organization"
  },
  {
    question: "Which of the following is a reason why organizational change often fails?",
    options: [
      "Strong leadership",
      "Employee engagement",
      "Resistance to change",
      "Effective communication"
    ],
    answer: "Resistance to change"
  },
  {
    question: "Which model describes the three stages of organizational change: Unfreezing, Changing, and Refreezing?",
    options: [
      "Lewin's Change Management Model",
      "Maslow's Hierarchy of Needs",
      "Vroom's Expectancy Theory",
      "Kolb's Experiential Learning Model"
    ],
    answer: "Lewin's Change Management Model"
  },
  {
    question: "In Lewin’s model, the 'unfreezing' stage involves:",
    options: [
      "Implementing the change",
      "Returning to old processes",
      "Creating awareness for the need for change",
      "Rewarding unchanged behavior"
    ],
    answer: "Creating awareness for the need for change"
  },
  {
    question: "Which of the following interventions is designed to improve communication patterns within groups?",
    options: [
      "Survey feedback",
      "Process consultation",
      "Career planning",
      "Technical skills training"
    ],
    answer: "Process consultation"
  },
  {
    question: "What is the main goal of team building as an OD intervention?",
    options: [
      "To improve individual salaries",
      "To strengthen interpersonal relationships and enhance team effectiveness",
      "To reduce employee benefits",
      "To create organizational silos"
    ],
    answer: "To strengthen interpersonal relationships and enhance team effectiveness"
  },
  {
    question: "Which OD technique involves collecting data from employees about their perceptions and providing feedback for action planning?",
    options: [
      "Benchmarking",
      "Survey feedback",
      "Self-assessment",
      "Budget review"
    ],
    answer: "Survey feedback"
  },

  {
    question: "Which of the following best defines 'learning organization'?",
    options: [
      "An organization focused only on training programs",
      "An organization that continually enhances its capabilities to create and innovate",
      "An organization that ignores employee input",
      "An organization strictly following traditional rules without change"
    ],
    answer: "An organization that continually enhances its capabilities to create and innovate"
  },
  {
    question: "Which of the following is NOT one of Peter Senge’s five disciplines for a learning organization?",
    options: [
      "Personal mastery",
      "Shared vision",
      "Rigid hierarchy",
      "Team learning"
    ],
    answer: "Rigid hierarchy"
  },
  {
    question: "In a learning organization, systems thinking is essential because it:",
    options: [
      "Focuses on isolated parts of the organization",
      "Encourages linear problem solving",
      "Helps understand the organization as a complex interrelated system",
      "Discourages feedback mechanisms"
    ],
    answer: "Helps understand the organization as a complex interrelated system"
  },
  {
    question: "Which discipline emphasizes clarifying and deepening personal vision?",
    options: [
      "Shared vision",
      "Mental models",
      "Personal mastery",
      "Team learning"
    ],
    answer: "Personal mastery"
  },
  {
    question: "Which of the following is an example of organizational learning?",
    options: [
      "Hiring new employees",
      "Conducting exit interviews",
      "Adapting business strategies based on past failures",
      "Firing underperformers immediately"
    ],
    answer: "Adapting business strategies based on past failures"
  },
  {
    question: "Which of the following statements is TRUE about knowledge management?",
    options: [
      "Knowledge management discourages information sharing",
      "Knowledge management involves capturing, distributing, and effectively using knowledge",
      "Knowledge management focuses solely on archiving old documents",
      "Knowledge management is only applicable in universities"
    ],
    answer: "Knowledge management involves capturing, distributing, and effectively using knowledge"
  },
  {
    question: "Which process ensures that tacit knowledge (personal know-how) is converted into explicit knowledge (documented know-how)?",
    options: [
      "Knowledge hoarding",
      "Knowledge codification",
      "Knowledge hiding",
      "Knowledge ignoring"
    ],
    answer: "Knowledge codification"
  },
  {
    question: "A community of practice (CoP) primarily helps in:",
    options: [
      "Regulating salaries across industries",
      "Sharing and creating new knowledge among practitioners",
      "Designing formal organizational structures",
      "Auditing financial records"
    ],
    answer: "Sharing and creating new knowledge among practitioners"
  },
  {
    question: "Which of the following is NOT a characteristic of a learning organization?",
    options: [
      "Encouragement of continuous improvement",
      "Punishing mistakes harshly",
      "Promoting knowledge sharing",
      "Building shared visions"
    ],
    answer: "Punishing mistakes harshly"
  },
  {
    question: "Knowledge management tools are primarily used to:",
    options: [
      "Monitor employee behavior",
      "Store, share, and analyze organizational knowledge",
      "Track vacation leaves",
      "Create employee attendance reports"
    ],
    answer: "Store, share, and analyze organizational knowledge"
  }






  
];

function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

function App() {
  const [startTime, setStartTime] = useState(null);
  const [pastScores, setPastScores] = useState(() => JSON.parse(localStorage.getItem("quizScores")) || []);
  const [endTime, setEndTime] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizMode, setQuizMode] = useState("welcome"); // welcome, quiz, results
  const [questionsCount, setQuestionsCount] = useState(20);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    // Load past scores from localStorage
    const savedScores = localStorage.getItem("quizScores");
    if (savedScores) {
      setPastScores(JSON.parse(savedScores));
    }
  }, []);

  const startQuiz = (count = 20) => {
    // Take random subset of questions based on count
    const shuffledQuestions = shuffle([...rawQuestions]);
    setQuestions(shuffledQuestions.slice(0, count));
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResults(false);
    setStartTime(Date.now());
    setEndTime(null);
    setQuizMode("quiz");
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    
    const correctAnswer = questions[currentQuestion].answer;
    const isAnswerCorrect = selectedOption === correctAnswer;
    
    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);
    
    setTimeout(() => {
      setShowFeedback(false);
      setUserAnswers([...userAnswers, selectedOption]);
      setSelectedOption(null);
      
      const next = currentQuestion + 1;
      if (next < questions.length) {
        setCurrentQuestion(next);
      } else {
        setShowResults(true);
        const end = Date.now();
        setEndTime(end);
        setQuizMode("results");
        
        const newEntry = {
          score: score + (isAnswerCorrect ? 1 : 0),
          total: questions.length,
          time: Math.round((end - startTime) / 1000),
          date: new Date().toLocaleString()
        };
        
        const updatedScores = [newEntry, ...pastScores];
        setPastScores(updatedScores);
        localStorage.setItem("quizScores", JSON.stringify(updatedScores));
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setQuizMode("welcome");
  };

  const score = userAnswers.reduce((acc, ans, index) => {
    return ans === questions[index].answer ? acc + 1 : acc;
  }, 0);

  const wrongAnswers = questions.filter((q, i) => userAnswers[i] !== q.answer);

  // Calculate progress percentage
  const progressPercentage = (currentQuestion / questions.length) * 100;
  
  const renderQuizSection = () => {
    if (quizMode === "welcome") {
      return (
        <div className="welcome-screen">
          <h2>Welcome to Training And Development Quiz</h2>
          <p>Test your knowledge with questions on Training And Development</p>
          
          <div className="quiz-options">
            <div className="question-count">
              <h3>How many questions?</h3>
              <div className="count-buttons">
                <button 
                  className={questionsCount === 10 ? "selected" : ""} 
                  onClick={() => setQuestionsCount(10)}
                >
                  10
                </button>
                <button 
                  className={questionsCount === 20 ? "selected" : ""} 
                  onClick={() => setQuestionsCount(20)}
                >
                  20
                </button>
                <button 
                  className={questionsCount === 50 ? "selected" : ""} 
                  onClick={() => setQuestionsCount(50)}
                >
                  50
                </button>
                <button 
                  className={questionsCount === rawQuestions.length ? "selected" : ""} 
                  onClick={() => setQuestionsCount(rawQuestions.length)}
                >
                  All ({rawQuestions.length})
                </button>
              </div>
            </div>
            
            <button className="start-button" onClick={() => startQuiz(questionsCount)}>
              Start Quiz
            </button>
          </div>
          
          {pastScores.length > 0 && (
            <div className="past-scores-preview">
              <h3>Previous Best: {Math.max(...pastScores.map(score => (score.score/score.total) * 100)).toFixed(0)}%</h3>
              <p>You've taken this quiz {pastScores.length} times</p>
            </div>
          )}
        </div>
      );
    }
    
    if (quizMode === "quiz") {
      return (
        <div className="quiz-box">
          <div className="quiz-header">
            <div className="progress-container">
              <div 
                className="progress-bar" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="question-counter">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>
          
          {questions[currentQuestion] && (
            <div className={`question-container ${showFeedback ? (isCorrect ? "correct-feedback" : "incorrect-feedback") : ""}`}>
              <h2 className="question-text">{questions[currentQuestion].question}</h2>
              
              <div className="options-container">
                {questions[currentQuestion].options.map((opt) => (
                  <button
                    key={opt}
                    className={`option-button ${selectedOption === opt ? "selected" : ""}`}
                    onClick={() => handleOptionSelect(opt)}
                    disabled={showFeedback}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              
              {showFeedback && (
                <div className="feedback">
                  {isCorrect ? (
                    <div className="correct">Correct!</div>
                  ) : (
                    <div className="incorrect">
                      
                      <h>{questions[currentQuestion].answer} </h>
                    </div>
                  )}
                </div>
              )}
              
              {!showFeedback && (
                <div className="control-buttons">
                  <button 
                    className="hint-button"
                    onClick={() => setShowHint(!showHint)}
                  >
                    {showHint ? "Hide Hint" : "Need a Hint?"}
                  </button>
                  
                  <button
                    className={`submit-button ${selectedOption ? "active" : ""}`}
                    onClick={handleSubmitAnswer}
                    disabled={selectedOption === null}
                  >
                    Submit Answer
                  </button>
                </div>
              )}
              
              {showHint && (
                <div className="hint-box">
                    <h>{questions[currentQuestion].answer} </h>
                </div>
              )}
            </div>
          )}
        </div>
      );
    }
    
    if (quizMode === "results") {
      const percentage = (score / questions.length) * 100;
      let feedback;
      
      if (percentage >= 90) {
        feedback = "Outstanding! You're an expert in Conservation Economics!";
      } else if (percentage >= 70) {
        feedback = "Great job! You have a solid understanding of the subject.";
      } else if (percentage >= 50) {
        feedback = "Good effort! Keep learning to improve your knowledge.";
      } else {
        feedback = "You might want to review the material again.";
      }
      
      return (
        <div className="result-box">
          <div className="score-display">
            <div className="score-circle">
              <div className="score-number">{score}</div>
              <div className="score-total">/ {questions.length}</div>
            </div>
            <h2 className="score-percentage">{percentage.toFixed(1)}%</h2>
          </div>
          
          <p className="score-feedback">{feedback}</p>
          
          {startTime && endTime && (
            <p className="time-taken">
              Time Taken: {Math.round((endTime - startTime) / 1000)} seconds
            </p>
          )}
          
          {wrongAnswers.length > 0 && (
            <div className="wrong-answers">
              <h3>Questions to Review:</h3>
              <div className="wrong-answers-list">
                {wrongAnswers.map((q, i) => (
                  <div key={i} className="wrong-answer-item">
                    <div className="question">{q.question}</div>
                    <div className="answers">
                      <div className="user-answer">
                        Your Answer: <span className="incorrect">{userAnswers[questions.indexOf(q)]}</span>
                      </div>
                      <div className="correct-answer">
                        Correct Answer: <span className="correct">{q.answer}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="result-buttons">
            <button className="restart-button" onClick={restartQuiz}>
              Back to Menu
            </button>
            <button className="retry-button" onClick={() => startQuiz(questions.length)}>
              Try Again
            </button>
          </div>
          
          <div className="past-scores">
            <h3>Your History:</h3>
            <div className="scores-table">
              <div className="table-header">
                <div className="date-cell">Date</div>
                <div className="score-cell">Score</div>
                <div className="time-cell">Time</div>
              </div>
              {pastScores.slice(0, 5).map((entry, idx) => (
                <div key={idx} className="table-row">
                  <div className="date-cell">{entry.date}</div>
                  <div className="score-cell">{entry.score}/{entry.total} ({((entry.score/entry.total)*100).toFixed(0)}%)</div>
                  <div className="time-cell">{entry.time}s</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="quiz-app-container">
      <header>
        <h1>Training and Development Quizz</h1>
      </header>
      <main>
        {renderQuizSection()}
      </main>
      <footer>
        <p>Training and Development  </p>
        <div className="disclaimer">
        <p><em>Note: This quiz was generated using ChatGPT for educational and revision purposes. We are not responsible for any incorrect answers. Please verify with official sources when in doubt.</em></p>
      </div>
      </footer>
      
    </div>
    
  );
}

export default App;