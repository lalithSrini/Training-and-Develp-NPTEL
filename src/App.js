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
      question: "Consider the following statements and select the correctanswer 1. Training refers to teaching an employee new skills to help them improve their job performance and work more efficiently. 2. Training helps to enhance specific abilities or acquire new ones relevant to a job, task, or activity. 3. A proper training program is both Trainee and Trainer dependent 4. A proper training program is only trainee-dependent and does not depend on the Trainer.",
      options: [
        "1 and 4 are correct, 2 and 3 are false.",
        "All 1, 2, 3, and 4 are correct.",
        "1, 2 and 3 are correct, 4 is false.",
        "None of these is correct"
      ],
      answer: "1, 2 and 3 are correct, 4 is false."
    },
    {
      question: "Which one of the following is incorrect in connection to sec. 2(f) of the Indian Employee's Provident Fund act?",
      options: [
        "\"employee\" means any person who is employed for wages in any kind of work, manual or otherwise, in or in connection with the work of [an establishment], and who gets his wages directly or indirectly from the employer,",
        "\"employee\" term covers any person employed by or through a contractor in or in connection with the work of the establishment;",
        "The \"employee\" term covers any person engaged as an apprentice, not being an apprentice engaged under the Apprentices Act, 1961 (52 of 1961), or under the standing orders of the establishment;",
        "None of these"
      ],
      answer: "None of these"
    },
    {
      question: "Which type of training refers to familiarizing employees with the means of preventing, detecting, and eliminating non-quality items, usually in an organisation that produces a product?",
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
      answer: "Independent contractor/consultant"
    },
    {
      question: "Which of the following best defines \"Human Capital\"?",
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
      question: "Which of the following best describes \"Knowledge Capital\" as a type of human capital?",
      options: [
        "The skills and abilities of employees to form relationships.",
        "The expertise, education, and training individuals possess.",
        "The emotional resilience and well-being of individuals.",
        "The loyalty and trust of customers."
      ],
      answer: "The expertise, education, and training individuals possess."
    },
    {
      question: "Which of the following is/are correct statements about \"strategy\"?",
      options: [
        "Only 1 and 2",
        "Only 4",
        "Only 1 and 3",
        "Only 2"
      ],
      answer: "Only 4"
    },
    {
      question: "Identify the correct order of the steps of strategy implementation: 1. Developing an organization having potential of carrying out strategy successfully. 2. Disbursement of abundant resources to strategy-essential activities. 3. Creating strategy-encouraging policies 4. Employing best policies and programs for constant improvement. 5. Linking reward structure to accomplishment of results. 6. Making use of strategic leadership",
      options: [
        "2-1-3-5-4-6",
        "1-4-2-3-5-6",
        "3-2-4-1-5-6",
        "1-2-3-4-5-6"
      ],
      answer: "1-2-3-4-5-6"
    },
    {
      question: "The success of a competitive strategy is contingent on the demands of the __________ ________ and factors internal to the organization?",
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
        "All the three as mentioned above are business strategies."
      ],
      answer: "All the three as mentioned above are business strategies."
    },
    {
      question: "Metrics that show value of training involves ____________, performance improvement, reduced customer complaints, reduced turnover and greater employee satisfaction. Fill up the blank with suitable one of the following.",
      options: [
        "turnover",
        "satisfaction",
        "learning",
        "training"
      ],
      answer: "learning"
    },
    {
      question: "\"A perception that training is \"forced\" may lead to more time spent discussing than implementing training.\" Which model of organizing strategic training have the above constraints?",
      options: [
        "Corporate University Model",
        "Customer Model",
        "Matrix Model",
        "None of these"
      ],
      answer: "Customer Model"
    },
    {
      question: "\"It's more suitable for large companies with ample resources to invest in long-term training. There may be conflicts related to the curriculum of content areas.\" Which model of organizing strategic training have the above drawbacks?",
      options: [
        "Corporate University Model",
        "Customer Model",
        "Matrix Model",
        "None of these"
      ],
      answer: "Corporate University Model"
    },
    {
      question: "Which model involves having a training function for each division of function of the organization?",
      options: [
        "Corporate university model",
        "Matrix model",
        "Faculty model",
        "Customer model"
      ],
      answer: "Matrix model"
    },
    {
      question: "\"The organizational managers and employees may be anxious about change, feel like unable to cope up, value the current and do not understand the value of the new one.\" Which of the following change related problem depicts the above?",
      options: [
        "Resistance to change",
        "Loss of control",
        "Power imbalance",
        "Task redefinition"
      ],
      answer: "Resistance to change"
    },
    {
      question: "Fill in the blanks: A _____________ __________ is a business approach where an organization focuses its efforts on a single product line, market, or set of resources to achieve a competitive advantage. This strategy involves intensifying resources in a specific area rather than diversifying into new markets or products.",
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
      question: "Which of the following is NOT an importance of learning mentioned in the lecture?",
      options: [
        "Promotes leadership qualities",
        "Guarantees a higher salary",
        "Develops self-confidence",
        "Helps achieve personal goals"
      ],
      answer: "Guarantees a higher salary"
    },
    {
      question: "Which theory of transfer is best suited for situations where the training environment is identical to the work environment?",
      options: [
        "Stimulus Generalization",
        "Cognitive Theory",
        "Identical Elements",
        "Social Learning"
      ],
      answer: "Identical Elements"
    },
    {
      question: "What aspect of training design helps anticipate potential issues and provides knowledge on handling problems?",
      options: [
        "Behavioral modeling",
        "Error management",
        "Realistic training environment",
        "Transfer climate"
      ],
      answer: "Error management"
    },
    {
      question: "What does the concept of \"transfer of training\" refer to?",
      options: [
        "The application of learned skills and knowledge to the job",
        "The monetary cost of training initiatives",
        "The entertainment value of training programs",
        "The immediate evaluation of training programs"
      ],
      answer: "The application of learned skills and knowledge to the job"
    },
    {
      question: "What type of learning is characterized by observing things like images and animations?",
      options: [
        "Visual",
        "Imaginary",
        "Auditory",
        "Haptic"
      ],
      answer: "Visual"
    },
    {
      question: "Which learning theory emphasizes that behavior is influenced by consequences such as rewards and punishments?",
      options: [
        "Social Learning Theory",
        "Goal Setting Theory",
        "Reinforcement Theory",
        "Adult Learning Theory"
      ],
      answer: "Reinforcement Theory"
    },
    {
      question: "What is Negative Transfer in the context of training?",
      options: [
        "Training has no impact on the workplace.",
        "Training improves productivity but not performance.",
        "Training results in better employee engagement only.",
        "Training causes participants to perform worse than before."
      ],
      answer: "Training causes participants to perform worse than before."
    },
    {
      question: "Which trainee characteristic reflects confidence in one's ability to apply learned competencies?",
      options: [
        "Cognitive ability",
        "Motivation",
        "Self-efficacy",
        "Perceived utility of training"
      ],
      answer: "Self-efficacy"
    },
    {
      question: "In Social Learning Theory, what is the step where individuals decide whether to imitate behavior based on its perceived rewards or costs?",
      options: [
        "Attention",
        "Retention",
        "Motivational Process",
        "Motor Reproduction"
      ],
      answer: "Motivational Process"
    },
    {
      question: "The Stimulus Generalization approach focuses on which type of transfer?",
      options: [
        "Near transfer",
        "Identical transfer",
        "Applied transfer",
        "Far transfer"
      ],
      answer: "Far transfer"
    },
    {
      question: "What type of training focuses on introducing new employees to the company's values and policies?",
      options: [
        "Onboarding training",
        "Orientation training",
        "Technical-skills training",
        "Compliance training"
      ],
      answer: "Orientation training"
    },
    {
      question: "What is the 'Li' in Procter & Gamble's 'Li-La-La' training model?",
      options: [
        "Learning environment",
        "Learning instruction",
        "Learning intent",
        "Learning integration"
      ],
      answer: "Learning intent"
    },
    {
      question: "Which of the following is a type of training programme?",
      options: [
        "Budget training",
        "Franchise training",
        "Virtual training",
        "Casual training"
      ],
      answer: "Virtual training"
    },
    {
      question: "Which phase focuses on ensuring the work environment supports learning and transfer of training?",
      options: [
        "Pre-training",
        "Learning event",
        "Evaluation phase",
        "Post-training"
      ],
      answer: "Post-training"
    },
    {
      question: "Electrical outlets should be available every ________ feet to support technology use during training.",
      options: [
        "Two",
        "Four",
        "Six",
        "Eight"
      ],
      answer: "Six"
    },
    {
      question: "The \"T\" in S.M.A.R.T. stands for ________, meaning the objective should be achievable by the end of the training session.",
      options: [
        "time-framed",
        "targeted",
        "timely",
        "teachable"
      ],
      answer: "time-framed"
    },
    {
      question: "Which of the following is/are included in a design document?",
      options: [
        "Only 1, 3, 4",
        "Only 1 and 2",
        "Only 2",
        "All of these"
      ],
      answer: "All of these"
    },
    {
      question: "How can design documentation support the training process?",
      options: [
        "By limiting content to basic details",
        "By ensuring clear communication between trainers and managers",
        "By replacing training programs with written documents",
        "By reducing the need for evaluation"
      ],
      answer: "By ensuring clear communication between trainers and managers"
    },
    {
      question: "Hands-on training sessions are best suited for ________ learners.",
      options: [
        "Visual",
        "Kinaesthetic",
        "Auditory",
        "Passive"
      ],
      answer: "Kinaesthetic"
    },
    {
      question: "Which of the following is NOT typically part of a curriculum roadmap?",
      options: [
        "Learning objectives",
        "Prerequisite skills",
        "Delivery method",
        "Instructor Qualifications"
      ],
      answer: "Instructor Qualifications"
    },
    {
      question: "Which type of evaluation measures the immediate effects of a training program?",
      options: [
        "Formative evaluation",
        "Process evaluation",
        "Impact evaluation",
        "Outcome evaluation"
      ],
      answer: "Formative evaluation"
    },
    {
      question: "Which level of evaluation assesses the knowledge gained by the learner?",
      options: [
        "Reaction",
        "Learning",
        "Behavior",
        "Results"
      ],
      answer: "Learning"
    },
    {
      question: "What is the primary purpose of evaluation in training?",
      options: [
        "To criticize employee performance",
        "To establish and maintain standards",
        "To maximize profits",
        "To manage employee attendance"
      ],
      answer: "To establish and maintain standards"
    },
    {
      question: "Which term refers to the extent to which training outcomes measure inappropriate capabilities?",
      options: [
        "Relevance",
        "Criteria Deficiency",
        "Criteria Contamination",
        "Reliability"
      ],
      answer: "Criteria Contamination"
    },
    {
      question: "Which tool provides qualitative feedback about training effectiveness?",
      options: [
        "Multiple-choice tests",
        "Surveys with Likert scales",
        "Focus groups",
        "Completion rates"
      ],
      answer: "Focus groups"
    },
    {
      question: "__________ refers to breaking down material learned into component parts to facilitate understanding of inter-relationships.",
      options: [
        "Knowledge",
        "Comprehension",
        "Synthesis",
        "Analysis"
      ],
      answer: "Analysis"
    },
    {
      question: "What is the main goal of formative evaluation?",
      options: [
        "Assess long-term impact",
        "Determine ROI",
        "Generate post-training reports",
        "Refine the training program"
      ],
      answer: "Refine the training program"
    },
    {
      question: "Return on investment is an important training -----------------. It is calculated through a cost benefit analysis which is the process of determining economic benefits of a training programme using accounting methods based on the training costs and benefits. Fill up the blank.",
      options: [
        "evaluation",
        "transfer",
        "input",
        "outcome"
      ],
      answer: "evaluation"
    },
    {
      question: "Which type of interview is entirely free-flowing?",
      options: [
        "Structured",
        "Semi-structured",
        "Unstructured",
        "Guided"
      ],
      answer: "Unstructured"
    },
    {
      question: "The Solomon four-group design combines:",
      options: [
        "Pre/post-tests with a control group design",
        "Post-tests with observation",
        "Pre-training questionnaires and interviews",
        "Training sessions and unstructured feedback"
      ],
      answer: "Pre/post-tests with a control group design"
    },
    {
      question: "Traditional training programs often focus on a specific set of ________ skills, limiting opportunities for trainees to ask questions or challenge norms.",
      options: [
        "Managerial",
        "Interpersonal",
        "Tactical",
        "Theoretical"
      ],
      answer: "Theoretical"
    },
    {
      question: "A challenge of group building methods is that certain team members may not be willing or able to work as hard as others, which can hurt ________?",
      options: [
        "Morale",
        "Creativity",
        "Coordination",
        "Productivity"
      ],
      answer: "Productivity"
    },
    {
      question: "Which type of training is typically conducted within the workplace and addresses specific job requirements?",
      options: [
        "Blended training",
        "In-house training",
        "Soft skills training",
        "Remedial training"
      ],
      answer: "In-house training"
    },
    {
      question: "The three components of team performance are knowledge, ________, and behavioral requirements.",
      options: [
        "Attitude",
        "Communication",
        "Motivation",
        "Leadership"
      ],
      answer: "Attitude"
    },
    {
      question: "What is one key challenge associated with traditional training methods?",
      options: [
        "Lack of real-world application",
        "High level of interactivity",
        "Over-reliance on technology",
        "Cost-effectiveness"
      ],
      answer: "Lack of real-world application"
    },
    {
      question: "Which is an example of simulation training?",
      options: [
        "Conducting mock presentations",
        "Learning through apprenticeships",
        "Flight simulation for pilots",
        "Learning through apprenticeships"
      ],
      answer: "Flight simulation for pilots"
    },
    {
      question: "Which of the following is NOT an audio-visual technique?",
      options: [
        "DVDs and films",
        "Role-playing",
        "PowerPoints",
        "Videotapes"
      ],
      answer: "Role-playing"
    },
    {
      question: "Which hands-on training method involves trainees taking the initiative to learn independently?",
      options: [
        "On-the-job",
        "Apprenticeship",
        "Self-directed",
        "Simulations method"
      ],
      answer: "Self-directed"
    },
    {
      question: "What is one of the primary advantages of using the lecture method in training?",
      options: [
        "High level of interaction between trainer and trainees",
        "Allows trainees to practice skills in real time",
        "Enables trainers to convey large amounts of information quickly",
        "Provides hands-on experience for trainees"
      ],
      answer: "Enables trainers to convey large amounts of information quickly"
    },
    {
      question: "Which type of learning enhances job-related competencies through interaction with others?",
      options: [
        "Guided competency development",
        "Guided contextual learning",
        "Social competency development",
        "Social contextual learning"
      ],
      answer: "Social contextual learning"
    },
    {
      question: "Which of the following is NOT an environmental factor influencing technology-based training?",
      options: [
        "Globalization",
        "Economic Pressure",
        "Employee Resistance",
        "Technological Advancement"
      ],
      answer: "Employee Resistance"
    },
    {
      question: "What is a major benefit of technology-based training compared to traditional classroom training?",
      options: [
        "Higher travel costs",
        "Reduced accessibility",
        "Just-in-time access to training",
        "Limited scalability"
      ],
      answer: "Just-in-time access to training"
    },
    {
      question: "Which of the following technologies allows real-time interaction between trainers and trainees in different locations?",
      options: [
        "Webcasts/Webinars",
        "CD-ROM-based training",
        "Asynchronous e-learning",
        "Printed training manuals"
      ],
      answer: "Webcasts/Webinars"
    },
    {
      question: "One of the key objectives of technology-based training is:",
      options: [
        "To eliminate the need for trainers",
        "To explain the influence of new technologies on training",
        "To replace all classroom training",
        "To reduce the overall workforce"
      ],
      answer: "To explain the influence of new technologies on training"
    },
    {
      question: "Which of the following is an advantage of e-learning over traditional training?",
      options: [
        "Higher costs",
        "Limited learner control",
        "Increased flexibility in training",
        "Less engagement"
      ],
      answer: "Increased flexibility in training"
    },
    {
      question: "What is a key feature of technology-based training?",
      options: [
        "Fixed schedule for all learners",
        "Trainee control over learning pace",
        "Lack of multimedia integration",
        "One-time access only"
      ],
      answer: "Trainee control over learning pace"
    },
    {
      question: "Which of the following is NOT a component of a Learning Management System (LMS)?",
      options: [
        "Enrollment management",
        "Performance tracking",
        "Inventory management",
        "Online course delivery"
      ],
      answer: "Inventory management"
    },
    {
      question: "Which of the following is a limitation of computer-based training?",
      options: [
        "Requires extensive capital investment",
        "Completely replaces face-to-face training",
        "Has no tracking features",
        "Cannot provide interactive elements"
      ],
      answer: "Requires extensive capital investment"
    },
    {
      question: "What is an example of blended learning?",
      options: [
        "Only classroom-based training",
        "Only online-based training",
        "A combination of online and face-to-face training",
        "Self-paced reading without interaction"
      ],
      answer: "A combination of online and face-to-face training"
    },
    {
      question: "Which of the following is a major factor in deciding to use social media for training?",
      options: [
        "High employee turnover",
        "Need for collaboration and knowledge sharing",
        "Preference for printed manuals",
        "Reducing workplace interactions"
      ],
      answer: "Need for collaboration and knowledge sharing"
    },
    {
      question: "Which of the following is NOT an importance of employee development?",
      options: [
        "Attracting top talent",
        "Reducing the need for training",
        "Improving employee performance",
        "Promoting job satisfaction"
      ],
      answer: "Reducing the need for training"
    },
    {
      question: "What is the primary goal of employee development?",
      options: [
        "To ensure employees work longer hours",
        "To upgrade skills and knowledge to support organizational goals",
        "To make employees independent of the organization",
        "To reduce communication within teams"
      ],
      answer: "To upgrade skills and knowledge to support organizational goals"
    },
    {
      question: "Which of the following is an example of short-term employee development?",
      options: [
        "Implementing remote work policies",
        "Sending employees for an international MBA",
        "Assigning long-term leadership roles",
        "Creating a new organizational culture"
      ],
      answer: "Implementing remote work policies"
    },
    {
      question: "Which of these is NOT a type of employee development program?",
      options: [
        "Mentorship programs",
        "360-degree feedback",
        "Employee demotion programs",
        "Workshops and working groups"
      ],
      answer: "Employee demotion programs"
    },
    {
      question: "What is the main purpose of a 360-degree feedback system?",
      options: [
        "To provide feedback from multiple sources",
        "To reduce employee responsibilities",
        "To increase employee workload",
        "To eliminate performance reviews"
      ],
      answer: "To provide feedback from multiple sources"
    },
    {
      question: "Which of the following describes job enlargement?",
      options: [
        "Increasing responsibilities in an employee's current job",
        "Moving an employee to a lower position",
        "Providing fewer tasks to employees",
        "Reducing an employee's work responsibilities"
      ],
      answer: "Increasing responsibilities in an employee's current job"
    },
    {
      question: "Which of these is an example of a stretch assignment?",
      options: [
        "Assigning tasks that employees are already skilled in",
        "Placing employees in challenging roles beyond their current expertise",
        "Giving fewer responsibilities to employees",
        "Assigning only routine tasks"
      ],
      answer: "Placing employees in challenging roles beyond their current expertise"
    },
    {
      question: "Which of the following is an example of an interpersonal relationship in the workplace?",
      options: [
        "A formal organizational policy",
        "A project team working together",
        "An employee working in isolation",
        "A robotic process automation system"
      ],
      answer: "A project team working together"
    },
    {
      question: "Which factor does NOT contribute to building a strong interpersonal relationship?",
      options: [
        "Trust",
        "Rapport",
        "Poor communication",
        "Mutual respect"
      ],
      answer: "Poor communication"
    },
    
    
      {
        question: "Which type of employee development focuses on building leadership within an organization?",
        options: [
          "Succession planning",
          "Mentorship programs",
          "On-the-job training",
          "Self-guided reading"
        ],
        answer: "Succession planning"
      },
      {
        question: "Which of the following is NOT a category of Corporate Social Responsibility (CSR)?",
        options: [
          "Legal Responsibility",
          "Environmental Responsibility",
          "Philanthropic Responsibility",
          "Economic Responsibility"
        ],
        answer: "Economic Responsibility"
      },
      {
        question: "What does \"job hopping\" refer to?",
        options: [
          "Regular promotion within the same company",
          "Employees frequently changing jobs for growth or compensation",
          "Skipping jobs on resumes",
          "Avoiding challenging roles"
        ],
        answer: "Employees frequently changing jobs for growth or compensation"
      },
      {
        question: "What is the primary role of the CSR Committee in a company?",
        options: [
          "Marketing the company's products",
          "Formulating CSR policies and monitoring their implementation",
          "Hiring employees",
          "Reducing the company's financial expenditures"
        ],
        answer: "Formulating CSR policies and monitoring their implementation"
      },
      {
        question: "What is the \"Platinum Rule\" in managing diversity?",
        options: [
          "Treat others as you want to be treated",
          "Treat others equally",
          "Treat others with respect",
          "Treat others as they want to be treated"
        ],
        answer: "Treat others as they want to be treated"
      },
      {
        question: "Which of the following is a key characteristic of effective diversity programs?",
        options: [
          "Employees are left to adapt on their own",
          "Demographic quotas are imposed",
          "Diversity goals are evaluated using metrics",
          "Managers are blamed for diversity issues"
        ],
        answer: "Diversity goals are evaluated using metrics"
      },
      {
        question: "According to the Bureau of Labour Statistics, the labor force growth rates of those __________ are projected to outpace all other age groups over the 2014-24 decade.",
        options: [
          "50 and older",
          "55 and older",
          "60 and older",
          "65 and older"
        ],
        answer: "55 and older"
      },
      {
        question: "Which stage of career development involves employees updating their skills and maintaining their value to the company?",
        options: [
          "Exploration",
          "Establishment",
          "Maintenance",
          "Decline"
        ],
        answer: "Maintenance"
      },
      {
        question: "What are the two key documents that provide a legal framework for CSR in India?",
        options: [
          "Section 135 of Companies Act 2013 and Companies (CSR Policy) Rules 2014",
          "Section 135 of Income Tax Act 1961 and SEBI Guidelines",
          "Companies Act 2002 and CSR Guidelines 2015",
          "CSR Compliance Rules and Section 137 of Companies Act"
        ],
        answer: "Section 135 of Companies Act 2013 and Companies (CSR Policy) Rules 2014"
      },
      {
        question: "Which entity is responsible for ensuring that a company's CSR policy is implemented?",
        options: [
          "The CSR Committee",
          "The HR Department",
          "The Board of the Company",
          "The Ministry of Corporate Affairs"
        ],
        answer: "The Board of the Company"
      },
      {
        question: "Why are older workers preferred in training roles?",
        options: [
          "Lack of other trainers",
          "Expertise and ability to mentor the next generation",
          "Disinterest in other job roles",
          "Inability to learn new skills"
        ],
        answer: "Expertise and ability to mentor the next generation"
      },
      {
        question: "How does training contribute to sustainability?",
        options: [
          "By reducing employee wages",
          "By eliminating unnecessary training programs",
          "By teaching employees to protect the environment",
          "By avoiding technological advancements"
        ],
        answer: "By teaching employees to protect the environment"
      },
      {
        question: "What is a key feature of mobile learning in training?",
        options: [
          "It is expensive and difficult to implement",
          "It allows flexible, on-the-go learning",
          "It eliminates the need for trainers",
          "It only benefits technical employees"
        ],
        answer: "It allows flexible, on-the-go learning"
      },
      {
        question: "What is the purpose of gamification in training?",
        options: [
          "To make training longer and more complex",
          "To enhance engagement and motivation",
          "To replace traditional learning methods entirely",
          "To eliminate assessments in training"
        ],
        answer: "To enhance engagement and motivation"
      },
      {
        question: "What is a major benefit of e-learning platforms?",
        options: [
          "They limit the number of training programs",
          "They provide learning opportunities anytime, anywhere",
          "They require physical attendance for training",
          "They increase training costs significantly"
        ],
        answer: "They provide learning opportunities anytime, anywhere"
      },
      {
        question: "What is a key advantage of just-in-time learning?",
        options: [
          "Learning happens exactly when needed",
          "It removes the need for performance support",
          "It focuses only on theoretical concepts",
          "It requires extensive classroom sessions"
        ],
        answer: "Learning happens exactly when needed"
      },
      {
        question: "What is a major benefit of Learning Record Stores (LRS)?",
        options: [
          "They eliminate the need for online training",
          "They help store and analyze learning data",
          "They increase training costs significantly",
          "They only work with traditional classroom training"
        ],
        answer: "They help store and analyze learning data"
      },
      {
        question: "What is a key role of a business partner in training?",
        options: [
          "Conducting classroom training only",
          "Using business knowledge to improve employee performance",
          "Replacing HR departments",
          "Limiting training programs"
        ],
        answer: "Using business knowledge to improve employee performance"
      },
      {
        question: "What is the primary goal of upskilling and reskilling?",
        options: [
          "To replace existing employees",
          "To enhance employee skills for evolving job roles",
          "To reduce workforce size",
          "To increase employee workload"
        ],
        answer: "To enhance employee skills for evolving job roles"
      },
      {
        question: "What is a primary benefit of outsourcing training?",
        options: [
          "Reducing training costs and gaining expert knowledge",
          "Increasing employee workload",
          "Eliminating training needs",
          "Limiting learning opportunities"
        ],
        answer: "Reducing training costs and gaining expert knowledge"
      },
      {
        question: "What is an positive impact of virtual mentoring?",
        options: [
          "Decreased employee engagement",
          "Increased accessibility to expert guidance",
          "Reduced need for training",
          "Elimination of soft skills training"
        ],
        answer: "Increased accessibility to expert guidance"
      },
      {
        question: "What is business disruption?",
        options: [
          "The process of completely stopping business operations",
          "The introduction of an unexpected product or service that displaces an existing one",
          "The natural evolution of business without external influence",
          "A temporary market decline due to external shocks"
        ],
        answer: "The introduction of an unexpected product or service that displaces an existing one"
      },
      {
        question: "What is the first stage of disruption?",
        options: [
          "Complete reimagination",
          "Disruption of incumbent",
          "Rapid linear evolution",
          "Appealing convergence"
        ],
        answer: "Rapid linear evolution"
      },
      {
        question: "What is a key characteristic of disruptive innovation?",
        options: [
          "Immediate success",
          "Gradual decline in market acceptance",
          "Initially lower performance but rapid improvement",
          "Dependence on high initial investment"
        ],
        answer: "Initially lower performance but rapid improvement"
      },
      {
        question: "What is an example of a disruptive technology?",
        options: [
          "Landline telephones",
          "Printed newspapers",
          "Ride-sharing apps",
          "Traditional film cameras"
        ],
        answer: "Ride-sharing apps"
      },
      {
        question: "What is the role of digital disruption in training?",
        options: [
          "It eliminates the need for employee training",
          "It makes learning more accessible and personalized",
          "It reduces the importance of skill development",
          "It focuses only on traditional classroom training"
        ],
        answer: "It makes learning more accessible and personalized"
      },
      {
        question: "How does disruptive technology affect businesses?",
        options: [
          "It always leads to business failure",
          "It forces businesses to adapt or risk obsolescence",
          "It has minimal impact on traditional businesses",
          "It only affects small companies"
        ],
        answer: "It forces businesses to adapt or risk obsolescence"
      },
      {
        question: "What is an example of digital disruption in education?",
        options: [
          "Traditional textbook-based learning",
          "Online learning platforms like Coursera",
          "In-person-only corporate training",
          "Handwritten assignments"
        ],
        answer: "Online learning platforms like Coursera"
      },
      {
        question: "What role does artificial intelligence (AI) play in disruption?",
        options: [
          "AI helps businesses automate and personalize services",
          "AI slows down digital transformation",
          "AI replaces all human workers",
          "AI has no impact on businesses"
        ],
        answer: "AI helps businesses automate and personalize services"
      },
      {
        question: "What is a major challenge of digital disruption?",
        options: [
          "Reduced technological innovation",
          "Resistance to change within organizations",
          "Increased reliance on outdated systems",
          "Declining digital literacy"
        ],
        answer: "Resistance to change within organizations"
      },
      {
        question: "What is the impact of cloud computing on training?",
        options: [
          "It limits training accessibility",
          "It enables scalable and on-demand learning solutions",
          "It only benefits large corporations",
          "It reduces employee engagement"
        ],
        answer: "It enables scalable and on-demand learning solutions"
      },
      {
        question: "Which type of employee development focuses on building leadership within an organization?",
        options: [
          "Succession planning",
          "Mentorship programs",
          "On-the-job training",
          "Self-guided reading"
        ],
        answer: "Succession planning"

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
              Time Taken: {(() => {
                const totalSeconds = Math.round((endTime - startTime) / 1000); 
                const hours = Math.floor(totalSeconds / 3600);
                const minutes = Math.floor((totalSeconds % 3600) / 60);
                const seconds = totalSeconds % 60;
                return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
              })()}
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