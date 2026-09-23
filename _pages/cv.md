---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}
<br>

Education
======
* **Ph.D in Human-Centered Design and Engineering**, University of Washington, *2027 (Expected)*<br>
Concentration: Human-Computer Interaction, AI/ML Fairness<br>
Co-Advised by Dr. Daniela K. Rosner and Dr. Katharina Reinecke<br>
* **M.S. in Human-Centered Design and Engineering**, University of Washington, *2025*<br>
Co-Advised by Dr. Daniela K. Rosner and Dr. Katharina Reinecke<br>
* **M.S. in Systems Engineering**, University of Virginia, *2022*<br>
Thesis: “The SPORT-C Intervention: An Integration of Sports, Case-Based Pedagogy, and Systems Thinking Learning”
Advised by Dr. William Scherer<br>
* **B.S. in Mechanical Engineering**, Virginia Polytechnic Institute and State University, *2018*<br>
Minor: Green Engineering<br>

Honors and Awards
======

*2025*&emsp;	  DEI Recognition — ACM Conference on Computer-Supported Cooperative Work and Social Computing (CSCW 2025)<br>
*2025*&emsp;	  AFCEA Ralph W. Shrader Graduate Scholarship<br>
*2024*&emsp;	  Social Action Term Fellowship in Human-Centered Design & Engineering<br>
*2023*&emsp;	  Neon Blackboard Term Fellowship in Human-Centered Design & Engineering<br>
*2022*&emsp;	  University of Washington College of Engineering Dean’s Fellowship<br>
*2022*&emsp;	  GOMAP Top Off Award, Graduate Student Equity & Excellence (GSEE)<br>
*2022*&emsp;	  GEM Full Engineering Fellow, The National GEM Consortium and IBM – Ph.D.<br>
*2021*&emsp;	  Inclusive Excellence Fellow<br>
*2021*&emsp;	  National Society of Black Engineers Honors APEx Member<br>
*2020*&emsp;	  GEM Full Engineering Fellow, The National GEM Consortium and Intel – M.S.<br>
*2020*&emsp;	  Intel Scholar<br>
*2013*&emsp;	  Virginia Tech Presidential Scholarship Initiative Recipient<br>

Research Experience
======

**Tactile and Tactical Design Lab x Wildlab @ University of Washington**<br>
*Graduate Research Assistant (September 2022 – Present)*<br>

* Not Like Us, Hunty: Measuring Perceptions and Behavioral Effects of Minoritized Anthropomorphic Cues in LLMs

  * Designed and executed two large-scale user studies (n=985) examining whether LLM sociolect usage affects user reliance and perception among African American English (AAE) and Queer slang speakers.
  * Recruited and coordinated 498 AAE speakers and 487 Queer slang speakers across counterbalanced question-answering tasks comparing LLM agents in Standard American English (SAE) vs. self-identified sociolect conditions.
  * Found that both AAE and Queer slang speakers relied more on and held more positive perceptions of the SAE agent, while Queer slang speakers uniquely reported greater social presence from the sociolect agent, surfacing meaningful divergence across minoritized communities.
  * Demonstrated the need to measure behavioral outcomes rather than assuming personalization leads to improved reliance and safety, challenging a dominant assumption in adaptive AI design.
  * Published in *Proceedings of the 2025 ACM Conference on Fairness, Accountability, and Transparency* (FAccT '25); 26.8% acceptance rate.

* Hopeful Failure: How Collaborative Design Fiction Reimagines AI

  *	Developed "Exquisite Tellings," a novel participatory storytelling method, and facilitated collaborative design fiction workshops with 10 Black American participants to center marginalized voices in speculative AI futures.
  * Synthesized workshop narratives to surface five engagement axes with AI that blend acceptance and resistance, moving beyond binary optimism/pessimism framings dominant in prior HCI and futures research.
  *	Demonstrated that collective design fiction, balancing individual agency with shared imagination, can generate community-centered visions of AI that reflect the complexity of marginalized communities' lived experiences.
  *	Introduced a replicable methodological contribution to participatory HCI, expanding the toolkit available for inclusive speculative design research.
  *	Accepted to ACM Designing Interactive Systems (DIS 2026); 21% acceptance rate.

* Should AI Mimic People? Understanding AI-Supported Writing Technology Among Black Users

  *	Designed and conducted a two-phase qualitative study examining how Black American users experience AI-supported writing technologies, combining 13 semi-structured interviews with a remote-moderated user study of Google Docs and ChatGPT.
  * Synthesized findings across participants to document expectations, apprehensions, and perceptions of NLP tools among Black American users, contributing empirical grounding to an underexamined population in HCI research.
  * Uncovered a novel concern absent from prior literature: the potential for AI-driven gradual erasure of Black American cultural expression as future generations increasingly depend on AI for information.
  * Published in Proceedings of the ACM on Human-Computer Interaction (CSCW 2025); journal-style peer review with an effective selectivity of ~15–20%.

**The Sports Analytics Club Program**<br>
*Mixed-Methods Researcher (February 2021 – May 2022)*<br>

* The SPORT-C Intervention: An Integration of Sports, Case-Based Pedagogy and Systems Thinking Learning 

  * Designed and deployed Qualtrics surveys across multiple classrooms to measure academic engagement, self-efficacy, expectancy, value, and cost among underrepresented STEM students, generating preliminary data to guide sports-integrated curriculum development. 
  * Conducted qualitative usability tests with 2 classrooms to assess the impact of sports-related case studies on student learning experiences, directly aligning case development iterations with student feedback. 
  * Synthesized mixed-methods findings and communicated insights to an interdisciplinary research team, ensuring the curriculum development roadmap addressed all 4 stakeholder goals and tracked relevant engagement metrics. 
  * Accepted to Springer Nature CAC 2026 proceedings

**Monumental Sports and Entertainment**<br>
*Data Analyst (January 2021 – March 2021)*<br>

* Fired Fairly? Examining Racial Disparities in NCAA Football Coaching Positions 

  * Identified and framed a critical racial imbalance in college football — where African Americans constitute nearly 50% of FBS players but hold less than 10% of head coaching positions — and designed a large-scale quantitative study to examine whether racial bias drives minority coach firing decisions.
  * Applied classical and exploratory data analysis techniques including linear regression, binary regression, ANOVA, and T-tests to a longitudinal dataset of 200 NCAA coaches spanning a decade, using Minitab for hypothesis testing and regression model construction.
  * Synthesized complex statistical findings into accessible data visualizations and presented results to 20 MBA executives in an educational workshop, communicating evidence of racial bias in NCAA coaching hiring and firing practices.


Publications
======
<style>
  .cv-publications .list__item {
    padding-right: 100px !important;
  }
  @media (min-width: 925px) {
    .cv-publications .list__item {
      padding-right: 150px !important;
    }
  }
</style>
<div class="cv-publications">
  <ul>{% for post in site.publications reversed %}
    {% if post.category == "articles" %}
      {% continue %}
    {% endif %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
</div>

Press and Industry Writing
======
<div class="cv-publications">
  <ul>{% for post in site.publications reversed %}
    {% if post.category != "articles" %}
      {% continue %}
    {% endif %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
</div>

Work experience
======

**Microsoft**<br>

*Design Researcher, Intern (June 2026 – September 2026)*<br>

* Uncovered a previously unrecognized pattern in how users delegate work to AI agents across 3 product lines; revealed critical gaps in control, accountability, and human oversight requirements<br>
* Finding prompted the Cowork and Scout teams to reprioritize human-in-the-loop interactions and informed new thinking on agent-to-person coordination with Microsoft's future of work researchers<br>
* Shaped the Q2 product roadmap for Cowork and Scout by translating user research into product requirements for human sign-off, ownership, and intervention in higher-stakes AI workflows<br>
* Extended work beyond the immediate product teams by contributing research principles to Microsoft's organization-wide human-AI collaboration framework, helping establish scalable boundaries for when AI agents should act autonomously versus defer to people<br>

*Design Researcher, Intern (June 2025 – September 2025)*<br>

*	Led foundational research shaping mid- to long-term AI UX strategy for Microsoft's Agent 365 initiative, focusing on risks and design opportunities around personified, agentic AI and AI-powered digital workers<br>
* Reviewed 30+ academic research papers and public debate on agentic AI; distilled insights into a taxonomy of 14 organizational, group, and individual-level risks<br>
* Mapped 14 risks to existing and emergent design mitigation tactics; produced a scalable risk-to-mitigation framework adopted into BIC's Responsible AI design strategy<br>
* Prioritized 3 critical risks for immediate mitigation; partnered with Agent 365 team to prototype design principle cards deployed to AI UX teams across BIC<br>
* Presented strategic recommendations to BIC's Corporate Vice President, global design organization, and company-wide Aether v-team; shaped responsible deployment of agentic AI across Microsoft 365 and Dynamics ecosystems<br>
* Findings were adopted by Microsoft's Office of Responsible AI into company-wide policy and governance frameworks for AI agent design, culminating in a co-authored publication on Microsoft Design: When AI Joins the Team: Three Principles for Responsible Agent Design<br>


**IBM Corporation**<br>

*User Experience Researcher, Senior Intern (January 2024 – August 2024)*<br>

*	Initiated and implemented a company-wide program spanning 6+ client accounts to identify challenges across multiple clients, with a focus on improving user experience and engagement<br>
* Drove a 14% UMUX score improvement within 6 months; developed a strategic mixed-methods plan combining usability testing and design critiques to pinpoint and address key friction areas<br>
*	Identified 2 previously unrecognized user segments for IBM z/OSMF through in-depth interviews and usability sessions, expanding the product team's understanding of who their primary users actually were<br>
*	Translated user segment findings into targeted design priorities, directly shaping UI and product feature development roadmap iterations for z/OSMF<br>

*User Experience Researcher, Senior Intern (June 2023 – September 2023)*<br>

* Analyzed 20+ customer feedback responses bi-weekly during product beta testing; surfaced key highlights and challenges that aligned product development priorities for an upcoming release<br>
* Distilled 100+ user comments into 5 generative research workshops; sessions surfaced foundational user grievances with product release and shaped product development priorities<br>
*	Oversaw 15+ internal interviews examining impact of 2 distinct visual frameworks on client adoption; derived 7 evidence-based insights feeding directly into exploratory customer research aimed at increasing product adoption<br>

*User Experience Researcher, Intern (May 2022 – December 2022)*<br>

*	Ran 2 heuristic evaluations of IBM z/OSMF by assessing primary end-to-end user flows across 2 personas; flagged 20 improvement points within user flows<br>
*	Partnered with UX Designer to architect 2 Airtable databases and sponsor user feedback forms; streamlined user experience feedback capture and integration with client feedback processes<br>
*	Administered 6 usability tests on sponsor users alongside UX Designer; built affinity map from results and communicated findings to three-in-a-box team<br>
*	Deployed an on-platform CSAT survey to 200+ z/OSMF users; generated actionable satisfaction and usability data fed directly into product improvement roadmap<br>

**Intel Corporation**<br>

*Process Engineer (August 2018 – August 2020)*<br>

*	Modeled and assessed tool trends of over 150 tools to predict and identify potential unscheduled downtime using Statistical Process Control (SPC) system<br>
*	Launched a daily report for the SCC toolset tracking and monitoring matching discrepancies across 3 tools, led to biweekly optimization of all tool’s measured layers<br>
*	Revamped disposition system for REG valid data failures toolset to maintain seamless data review and communication throughout all 4 shifts and command center<br>
*	Chaired project formed to reduce quarterly spending for DPCdc, reduced spending by an average of $6000 per quarter while doubling allocated annual budget<br>
*	Managed and investigated equipment failures of 7 tools, diagnosed faulty operation and incorporated learnings into procedures to anticipate future equipment issues<br>
*	Shaped DPCdc availability roadmap; tool availability improved from an annual average of 86% to 94% as tool owner<br>

**Ford Motor Company** 

*Stamping Coordinator, Intern (May 2016 – August 2016)*

*	Developed visual aids and single point lessons for new control point process verification system, increasing quality of stamped panels by 25%
*	Implemented verification system into assembly line, educated & coached 20 Tool & Die staff in proper procedure 

Grants
======

*2026*

* University of Washington Human Centered Design & Engineering Doctoral Research Grant – *Awarded ~$400*
  * Designed to support HCDE PhD students who need assistance to carry out research that advances their progress toward their degree.
* University of Washington Human Centered Design & Engineering Diversity, Equity, and Inclusion Grant – *Awarded ~$400*
  * Support grassroots diversity, equity, and inclusion initiatives within the department. Proposals can cover a wide range of community building, group training, and other DEI-related efforts.

*2023*

* University of Washington Human Centered Design & Engineering Diversity, Equity, and Inclusion Grant – *Awarded ~$700*
  * Support grassroots diversity, equity, and inclusion initiatives within the department. Proposals can cover a wide range of community building, group training, and other DEI-related efforts.
* University of Washington Human Centered Design & Engineering Doctoral Research Grant – *Awarded ~$1,400*
  * Designed to support HCDE PhD students who need assistance to carry out research that advances their progress toward their degree.

Teaching Experience
======

*Graduate Teaching Assistant*<br>

CSE 581: Computer Ethics (Winter 2026) - University of Washington<br>

*	Facilitated weekly graduate-level seminar discussions on ethics in computing, engaging students across CS, HCDE, and information science in critical analysis of algorithmic fairness, AI accountability, and responsible technology design.
*	Mentored 6+ student research teams through a quarter-long independent ethics research project, guiding proposal development, research design, and fairness/justice-oriented analysis culminating in a publishable-style paper (4–6 pages) and poster presentation.
*	Provided formative feedback on student work at the intersection of technical systems and social impact, drawing on ongoing scholarship in AI sociolinguistic bias and minoritized user experiences to ground seminar discussions in active scholarship.

HCDE492: Capstone Planning (Winter 2024), HCDE493: Senior Capstone (Spring 2024, Spring 2025) - University of Washington<br>

*	Facilitated discussions and group activities during class sessions for over 70 students to enhance learning and engagement
*	Served as a mentor for 4 4-person industry-sponsored capstone groups over the course of two quarters, promoting academic integrity, professionalism, and ethical practices
*	Conducted review sessions and provided guidance to students on course concepts, assignments, and capstone milestones

SYS3034: System Evaluation (Spring 2021, Spring 2022) - University of Virginia<br>

*	Provided academic support and instruction to 60 students in undergraduate level course
*	Facilitated classroom discussion sessions and held weekly office hours to provide tutoring, counseling, or assistance to students in need
*	Contributed to the development of appropriate teaching materials to ensure content and methods of delivery met learning objectives

SYS6001:  Intro to Systems Analysis & Design (Fall 2021) - University of Virginia<br>

*	Delivered comprehensive academic support and instruction to a cohort of 30 graduate-level students, ensuring a conducive learning environment and fostering intellectual growth.
*	Collaborated with faculty members to facilitate lectures, evaluate student performance, and conduct grading assessments, contributing to the overall success of the instructional team.

Invited Talks and Panels
======

*2026*&emsp;	Panelist - Stealing My Magic: Data, Agency, and the Future of Black Communities in the AI Era (Seattle Black Nerd Festival)<br>
*2026*&emsp;	Guest Lecture – Inclusive Design and Engineering (Winter Quarter)<br>
*2025*&emsp;	Guest Lecture – Inclusive Design and Engineering (Winter Quarter)<br>
*2024*&emsp;	Guest Lecture – Inclusive Design and Engineering (Winter Quarter)<br>
*2022*&emsp;	Presenter - The 18th International Conference on Frontiers in Education: Computer Science & Computer Engineering<br>
*2021*&emsp;	Panelist - Navigating & Maximizing Professional Conferences<br>
*2021*&emsp;	Presenter - Darden Executive MBA Course: Data Analytics and Leadership Judgment in Sports<br>
*2020*&emsp;	Panelist - Tapia Conference: Secure Your Bag(s) & Degree(s): Graduate School Edition<br>

Leadership
======
*2022 - Present*&emsp;	Design Team Lead - A Vision for Engineering Literacy & Access (AVELA)<br>
*2022 – 2023*&emsp;	Professional Development Program Committee Member - National Society of Black Engineers (NSBE)<br>
*2021 - 2022*&emsp;	Program Assistant - Men/Women of Color, Honor, and Ambition (M.O.C.H.A/W.O.C.H.A)<br>
*2017 - Present*&emsp;		Co-Founder – Acquiring Knowledge for Transcendence, Inc. (Non-Profit)<br>
*2015 – 2016*&emsp;	Senator – National Society of Black Engineers (Virginia Tech)<br>

Professional & Service Activities
======

*Reviewer Work*

*2026*&emsp;		ACM Designing Interactive Systems (DIS 2026)<br>
*2025 - 2026*&emsp;	ACM Conference on Human Factors in Computing Systems (CHI 2026)<br>

*Department Service*

*2024*&emsp;		PhD Admissions Review Committee, University of Washington Human-Centered Design & Engineering<br>
*2023 - Present*&emsp;	PhD Student Ambassador, University of Washington Human-Centered Design & Engineering<br>
*2023*&emsp;		PhD Admissions Review Committee, University of Washington Human-Centered Design & Engineering<br>

Involvement and Community Engagement
======

*2022 - Present*&emsp; 	Member/ Outreaching Grad - Graduate Student Equity & Excellence (GSEE) – University of Washington<br>
*2022 - Present*&emsp;	Member – Black Graduate Student Association (BGSA) – University of Washington<br>
*2017 - Present*&emsp; 	Board of Director, Education Outreach – Acquiring Knowledge for Transcendence, Inc<br>

Conferences
======

*2026*&emsp;	ACM Designing Interactive Systems (DIS 2026)<br>
*2025*&emsp;	The 28th ACM Conference on Computer-Supported Cooperative Work and Social Computing (CSCW 2025)<br>
*2025*&emsp;	ACM Conference on Fairness, Accountability, and Transparency (FAccT 2025)<br>
*2025*&emsp;	AAAI/ACM Conference on AI, Ethics, and Society (AIES 2025)<br>
*2023*&emsp;	ACM Conference on Human Factors in Computing Systems (CHI 2023)<br>
*2022*&emsp;	The 18th International Conference on Frontiers in Education: Computer Science & Computer Engineering<br>
*2022*&emsp;	GEM Annual Board Meeting and Conference<br>
*2022*&emsp;	NSBE National Convention<br>
*2021*&emsp;	CMD-IT/ACM Richard Tapia Celebration of Diversity in Computing Conference<br>
*2021*&emsp;	NSBE Fall Regional Conference – Region 2<br>
*2021*&emsp;	AfroTech Conference<br>
*2021*&emsp;	Black is Tech Conference<br>
*2021*&emsp;	GEM Annual Board Meeting and Conference<br>
*2020*&emsp;	CMD-IT/ACM Richard Tapia Celebration of Diversity in Computing Conference<br>
*2013 - 2018*&emsp;	  NSBE National Convention and Fall Regional 2 Conference	<br>

Skills
======

* Qualitative Research
  * Semi Structured Interviews
  * Remote Moderated Usability Testing
  * Heuristic Evaluation
  * Usability Testing
  * Affinity Mapping
  * Experimental Design
  * Stakeholder Walkthrough
  * Survey Design
  * Participatory Design / Co-Design Facilitation
  * Thematic Analysis
* Quantitative Research
  * Linear Regression
  * Binary Regression
  * Hypothesis Testing
  * Chi-Square
  * ANOVA
  * T-Test
  * Correlation
  * Power Analysis
  * Within-Subjects Experimental Design
  * Between-Subjects Experimental Design
  * Psychometric Scale Development and Adaptation
* Project Management
  * Multi-Phase Study Design and Execution
  * Research Timeline and Milestone Management
  * Cross-Institutional Research Collaboration
  * Grant Writing and Reporting
  * Research Budget Management
  * Stakeholder Communication and Research Translation
* Analytical Tools
  * Minitab 
  * Tableau 
  * Power BI 
  * Qualtrics 
  * Airtable
  * Advanced Microsoft Excel
  * Overleaf
* Programming Languages
  * R/RStudio 
  * LaTeX



<!-- Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Currently signed in to 43 different slack teams -->
