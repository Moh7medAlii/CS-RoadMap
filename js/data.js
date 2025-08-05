// ===========================
// CS ROADMAP 2025 - DATA
// ===========================

const roadmapData = {
    // ===========================
    // LEARNING TOPICS (11 Core Topics)
    // ===========================
    topics: [
        {
            id: 'programming',
            title: 'Programming Fundamentals',
            subtitle: 'The foundation of everything - Start here with C++!',
            cards: [
                {
                    icon: 'fas fa-question-circle',
                    title: 'What is it?',
                    content: `
                        <ul>
                            <li><strong>Writing instructions for computers</strong></li>
                            <li>Converting human logic to code</li>
                            <li>Problem-solving methodology</li>
                            <li>Building blocks: Variables, Functions, Control Flow</li>
                            <li>Foundation for ALL programming</li>
                            <li>C++ recommended for deep understanding</li>
                        </ul>
                        <div class="priority-label priority-essential">
                            <i class="fas fa-fire"></i> Essential - Start Here
                        </div>
                    `
                },
                {
                    icon: 'fas fa-bullseye',
                    title: 'Why Important?',
                    content: `
                        <ul>
                            <li><strong>Foundation for EVERYTHING in CS</strong></li>
                            <li>Can't do anything without programming</li>
                            <li>Builds logical thinking</li>
                            <li>Opens all career paths</li>
                            <li>C++ teaches how computers really work</li>
                            <li>Skills transfer to any language</li>
                        </ul>
                        <div class="tip-box">
                            <strong>💡 Tip:</strong> You can learn with any language, but C++ gives the deepest understanding
                        </div>
                    `
                },
                {
                    icon: 'fas fa-graduation-cap',
                    title: 'What to Learn?',
                    content: `
                        <h4>Core Concepts:</h4>
                        <ul>
                            <li><strong>Variables & Data Types</strong> (int, float, char, bool)</li>
                            <li><strong>Operators</strong> (arithmetic, logical, comparison)</li>
                            <li><strong>Control Flow</strong> (if/else, switch, loops)</li>
                            <li><strong>Functions</strong> (parameters, return values, scope)</li>
                            <li><strong>Arrays & Strings</strong></li>
                            <li><strong>Pointers & References</strong> (C++ specific)</li>
                            <li><strong>Input/Output</strong></li>
                            <li><strong>Error Handling</strong></li>
                        </ul>
                    `
                },
                {
                    icon: 'fas fa-calendar-alt',
                    title: 'Learning Plan',
                    content: `
                        <h4>Month 1: C++ Basics (4 weeks)</h4>
                        <ul>
                            <li><strong>Week 1:</strong> Setup, first program, variables, data types</li>
                            <li><strong>Week 2:</strong> Operators, if/else, switch statements</li>
                            <li><strong>Week 3:</strong> Loops (for, while, do-while), nested loops</li>
                            <li><strong>Week 4:</strong> Functions, parameters, recursion basics</li>
                        </ul>
                        
                        <h4>Daily Practice:</h4>
                        <ul>
                            <li>2-3 hours minimum</li>
                            <li>Solve 3-5 problems daily</li>
                            <li>Build mini projects weekly</li>
                        </ul>
                    `
                }
            ],
            projects: [
                {
                    level: 'Week 1-2 Projects',
                    description: 'Calculator, Temperature Converter, Grade Calculator'
                },
                {
                    level: 'Week 3-4 Projects',
                    description: 'Number Guessing Game, Pattern Printing, Prime Number Checker'
                },
                {
                    level: 'Month End Project',
                    description: 'Student Management System (using arrays and functions)'
                }
            ],
            resources: [
                {
                    title: 'Mohamed Moshrif - C++ Course',
                    url: 'https://www.linkedin.com/in/mmeshref/',
                    icon: 'fab fa-linkedin',
                    description: 'Complete C++ course in Arabic'
                },
                {
                    title: 'C++ Primer (5th Edition)',
                    url: 'https://www.amazon.com/Primer-5th-Stanley-B-Lippman/dp/0321714113',
                    icon: 'fas fa-book',
                    description: 'Best book for C++ fundamentals'
                },
                {
                    title: 'Programming: Principles and Practice Using C++',
                    url: 'https://www.stroustrup.com/programming.html',
                    icon: 'fas fa-book',
                    description: 'By C++ creator Bjarne Stroustrup'
                },
                {
                    title: 'CS50 Harvard (Free)',
                    url: 'https://cs50.harvard.edu/x/',
                    icon: 'fas fa-university',
                    description: 'World-class introduction to CS'
                }
            ]
        },
        
        {
            id: 'oop',
            title: 'Object-Oriented Programming (OOP)',
            subtitle: 'Organize code like the real world',
            cards: [
                {
                    icon: 'fas fa-question-circle',
                    title: 'What is it? ',
                    content: `
                        <h4>OOP = Objects + Classes</h4>
                        <ul>
                            <li><strong>Classes:</strong> Blueprints for creating objects</li>
                            <li><strong>Objects:</strong> Instances of classes</li>
                            <li><strong>Real-world modeling:</strong> Car, Student, BankAccount</li>
                            <li>Organize code into reusable components</li>
                            <li>Group data and functions together</li>
                        </ul>
                        
                        <h4>The 4 Pillars:</h4>
                        <ol>
                            <li><strong>Encapsulation</strong> - Hide internal details</li>
                            <li><strong>Inheritance</strong> - Reuse code via parent/child</li>
                            <li><strong>Polymorphism</strong> - Many forms, one interface</li>
                            <li><strong>Abstraction</strong> - Hide complexity</li>
                        </ol>
                    `
                },
                {
                    icon: 'fas fa-bullseye',
                    title: 'Why Important? ',
                    content: `
                        <ul>
                            <li><strong>Industry standard</strong> for large applications</li>
                            <li>Makes code reusable and maintainable</li>
                            <li>Essential for team projects</li>
                            <li>Models real-world problems naturally</li>
                            <li>Required for most programming jobs</li>
                            <li>Foundation for design patterns</li>
                        </ul>
                        
                        <div class="example-box">
                            <strong>Example:</strong> Instead of separate variables for student data, create a Student class with name, id, grades, and methods to calculate GPA
                        </div>
                    `
                },
                {
                    icon: 'fas fa-graduation-cap',
                    title: 'What to Learn? ',
                    content: `
                        <h4>Core Concepts:</h4>
                        <ul>
                            <li><strong>Classes & Objects</strong></li>
                            <li><strong>Constructors & Destructors</strong></li>
                            <li><strong>Access Modifiers</strong> (public, private, protected)</li>
                            <li><strong>Getters & Setters</strong></li>
                            <li><strong>Inheritance</strong> (single, multiple, multilevel)</li>
                            <li><strong>Polymorphism</strong> (compile-time, runtime)</li>
                            <li><strong>Virtual Functions</strong></li>
                            <li><strong>Abstract Classes & Interfaces</strong></li>
                            <li><strong>Operator Overloading</strong></li>
                            <li><strong>Friend Functions</strong></li>
                        </ul>
                    `
                },
                {
                    icon: 'fas fa-calendar-alt',
                    title: 'Learning Plan ',
                    content: `
                        <h4>Month 2: OOP with C++ (4 weeks)</h4>
                        <ul>
                            <li><strong>Week 1:</strong> Classes, Objects, Constructors</li>
                            <li><strong>Week 2:</strong> Encapsulation, Access Modifiers</li>
                            <li><strong>Week 3:</strong> Inheritance, Types of Inheritance</li>
                            <li><strong>Week 4:</strong> Polymorphism, Virtual Functions</li>
                        </ul>
                        
                        <h4>Projects:</h4>
                        <ul>
                            <li>Bank Management System</li>
                            <li>Library Management System</li>
                            <li>Simple Game using OOP</li>
                        </ul>
                    `
                }
            ],
            resources: [
                {
                    title: 'Mohamed Meshref - OOP Course',
                    url: 'https://www.linkedin.com/in/mmeshref/',
                    icon: 'fab fa-linkedin',
                    description: 'Complete OOP course in Arabic'
                },
                {
                    title: 'Object-Oriented Programming in C++',
                    url: 'https://www.amazon.com/Object-Oriented-Programming-4th-Robert-Lafore/dp/0672323087',
                    icon: 'fas fa-book',
                    description: 'Robert Lafore - Best OOP book'
                },
                {
                    title: 'Head First Object-Oriented Analysis and Design',
                    url: 'https://www.oreilly.com/library/view/head-first-object-oriented/0596008678/',
                    icon: 'fas fa-book',
                    description: 'Visual learning approach'
                }
            ]
        },
        
        {
            id: 'ood',
            title: 'Object-Oriented Design (OOD)',
            subtitle: 'Design systems before coding',
            cards: [
                {
                    icon: 'fas fa-question-circle',
                    title: 'What is it? ',
                    content: `
                        <ul>
                            <li><strong>Planning before coding</strong></li>
                            <li>Designing class structures and relationships</li>
                            <li>Creating system architecture</li>
                            <li>UML diagrams (visual representation)</li>
                            <li>SOLID principles application</li>
                            <li>Design decisions and trade-offs</li>
                        </ul>
                        
                        <div class="tip-box">
                            <strong>Key Point:</strong> OOD is about "what classes to create" and "how they interact"
                        </div>
                    `
                },
                {
                    icon: 'fas fa-bullseye',
                    title: 'Why Important? ',
                    content: `
                        <ul>
                            <li><strong>Prevents costly mistakes</strong> early</li>
                            <li>Makes code scalable and maintainable</li>
                            <li>Essential for senior positions</li>
                            <li>Improves team communication</li>
                            <li>Reduces development time</li>
                            <li>Creates professional-quality software</li>
                        </ul>
                        
                        <div class="example-box">
                            <strong>Real Impact:</strong> Good design = Easy to add features. Bad design = Rewrite everything!
                        </div>
                    `
                },
                {
                    icon: 'fas fa-graduation-cap',
                    title: 'What to Learn? ',
                    content: `
                        <h4>SOLID Principles:</h4>
                        <ul>
                            <li><strong>S</strong>ingle Responsibility Principle</li>
                            <li><strong>O</strong>pen/Closed Principle</li>
                            <li><strong>L</strong>iskov Substitution Principle</li>
                            <li><strong>I</strong>nterface Segregation Principle</li>
                            <li><strong>D</strong>ependency Inversion Principle</li>
                        </ul>
                        
                        <h4>UML Diagrams:</h4>
                        <ul>
                            <li>Class Diagrams</li>
                            <li>Use Case Diagrams</li>
                            <li>Sequence Diagrams</li>
                            <li>Activity Diagrams</li>
                        </ul>
                        
                        <h4>Design Skills:</h4>
                        <ul>
                            <li>Identifying classes and responsibilities</li>
                            <li>Defining relationships (inheritance, composition)</li>
                            <li>Creating clean interfaces</li>
                        </ul>
                    `
                },
                {
                    icon: 'fas fa-calendar-alt',
                    title: 'Learning Plan ',
                    content: `
                        <h4>Month 3: OOD & SOLID (4 weeks)</h4>
                        <ul>
                            <li><strong>Week 1:</strong> SOLID principles deep dive</li>
                            <li><strong>Week 2:</strong> UML basics and class diagrams</li>
                            <li><strong>Week 3:</strong> Design case studies</li>
                            <li><strong>Week 4:</strong> Complete system design project</li>
                        </ul>
                        
                        <h4>Practice Projects:</h4>
                        <ul>
                            <li>Design an Online Shopping System</li>
                            <li>Design a Parking Lot System</li>
                            <li>Design a Hotel Management System</li>
                        </ul>
                    `
                }
            ],
            resources: [
                {
                    title: 'Mohamed Meshref - SOLID & Design',
                    url: 'https://www.linkedin.com/in/mmeshref/',
                    icon: 'fab fa-linkedin',
                    description: 'SOLID principles in Arabic'
                },
                {
                    title: 'Clean Architecture',
                    url: 'https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164',
                    icon: 'fas fa-book',
                    description: 'Robert C. Martin - Architecture bible'
                },
                {
                    title: 'UML Distilled',
                    url: 'https://www.amazon.com/UML-Distilled-Standard-Modeling-Language/dp/0321193687',
                    icon: 'fas fa-book',
                    description: 'Martin Fowler - UML essentials'
                }
            ]
        },
        
        {
            id: 'ds-algo',
            title: 'Data Structures & Algorithms',
            subtitle: 'The heart of problem solving and technical interviews',
            cards: [
                {
                    icon: 'fas fa-question-circle',
                    title: 'What is it? ',
                    content: `
                        <h4>Data Structures:</h4>
                        <ul>
                            <li><strong>Ways to organize and store data</strong></li>
                            <li>Arrays, Linked Lists, Stacks, Queues</li>
                            <li>Trees, Graphs, Hash Tables</li>
                            <li>Each has specific use cases</li>
                        </ul>
                        
                        <h4>Algorithms:</h4>
                        <ul>
                            <li><strong>Step-by-step procedures to solve problems</strong></li>
                            <li>Searching (Binary Search)</li>
                            <li>Sorting (Quick Sort, Merge Sort)</li>
                            <li>Graph algorithms (BFS, DFS)</li>
                            <li>Dynamic Programming</li>
                        </ul>
                    `
                },
                {
                    icon: 'fas fa-bullseye',
                    title: 'Why Important? ',
                    content: `
                        <ul>
                            <li><strong>#1 topic for technical interviews</strong></li>
                            <li>Required by ALL major tech companies</li>
                            <li>Improves problem-solving skills</li>
                            <li>Makes you write efficient code</li>
                            <li>Understand time/space complexity</li>
                            <li>Foundation for system design</li>
                        </ul>
                        
                        <div class="warning-box">
                            <strong>⚠️ Reality Check:</strong> You CANNOT get a good job without DS&A!
                        </div>
                    `
                },
                {
                    icon: 'fas fa-graduation-cap',
                    title: 'What to Learn? ',
                    content: `
                        <h4>Data Structures:</h4>
                        <ul>
                            <li><strong>Linear:</strong> Arrays, Linked Lists, Stacks, Queues</li>
                            <li><strong>Trees:</strong> Binary Trees, BST, AVL, Heap</li>
                            <li><strong>Hashing:</strong> Hash Tables, Hash Maps</li>
                            <li><strong>Graphs:</strong> Representation, Traversal</li>
                        </ul>
                        
                        <h4>Algorithms:</h4>
                        <ul>
                            <li><strong>Sorting:</strong> Bubble, Selection, Insertion, Merge, Quick</li>
                            <li><strong>Searching:</strong> Linear, Binary, BFS, DFS</li>
                            <li><strong>Dynamic Programming:</strong> Memoization, Tabulation</li>
                            <li><strong>Greedy:</strong> Activity Selection, Huffman Coding</li>
                        </ul>
                        
                        <h4>Analysis:</h4>
                        <ul>
                            <li>Time Complexity (Big O)</li>
                            <li>Space Complexity</li>
                            <li>Best/Average/Worst Case</li>
                        </ul>
                    `
                },
                {
                    icon: 'fas fa-calendar-alt',
                    title: 'Learning Plan ',
                    content: `
                        <h4>Months 4-6: DS&A Deep Dive (12 weeks)</h4>
                        
                        <h4>Month 4: Basic Structures</h4>
                        <ul>
                            <li><strong>Week 1-2:</strong> Arrays, Strings, Two Pointers</li>
                            <li><strong>Week 3-4:</strong> Linked Lists, Stacks, Queues</li>
                        </ul>
                        
                        <h4>Month 5: Trees & Graphs</h4>
                        <ul>
                            <li><strong>Week 1-2:</strong> Binary Trees, BST</li>
                            <li><strong>Week 3-4:</strong> Graphs, BFS/DFS</li>
                        </ul>
                        
                        <h4>Month 6: Advanced Topics</h4>
                        <ul>
                            <li><strong>Week 1-2:</strong> Dynamic Programming</li>
                            <li><strong>Week 3-4:</strong> Practice & Review</li>
                        </ul>
                        
                        <div class="target-box">
                            <strong>🎯 Target:</strong> Solve 150+ LeetCode problems
                        </div>
                    `
                }
            ],
            resources: [
                {
                    title: 'Mohamed Meshref - DS&A Course',
                    url: 'https://www.linkedin.com/in/mmeshref/',
                    icon: 'fab fa-linkedin',
                    description: 'Complete DS&A in Arabic'
                },
                {
                    title: 'Ahmed Metwally - Cloud Native Base Camp',
                    url: 'https://cloudnativebasecamp.com/',
                    icon: 'fas fa-globe',
                    description: 'Algorithms analysis and design + DS Decode in Arabic'
                },
                {
                    title: 'Introduction to Algorithms (CLRS)',
                    url: 'https://mitpress.mit.edu/books/introduction-algorithms-third-edition',
                    icon: 'fas fa-book',
                    description: 'The algorithm bible'
                },
                {
                    title: 'Cracking the Coding Interview',
                    url: 'https://www.crackingthecodinginterview.com/',
                    icon: 'fas fa-book',
                    description: 'Interview preparation essential'
                },
                {
                    title: 'LeetCode',
                    url: 'https://leetcode.com/',
                    icon: 'fas fa-code',
                    description: 'Practice platform #1'
                }
            ]
        },
        
        {
            id: 'patterns',
            title: 'Design Patterns',
            subtitle: 'Reusable solutions to common programming problems',
            cards: [
                {
                    icon: 'fas fa-question-circle',
                    title: 'What is it? ',
                    content: `
                        <ul>
                            <li><strong>Reusable solutions to common problems</strong></li>
                            <li>Best practices from experienced developers</li>
                            <li>23 classic patterns (Gang of Four)</li>
                            <li>Categories: Creational, Structural, Behavioral</li>
                            <li>Templates for solving recurring design problems</li>
                            <li>Language-agnostic concepts</li>
                        </ul>
                        
                        <div class="tip-box">
                            <strong>Note:</strong> Patterns are tools, not rules. Use them when they make sense!
                        </div>
                    `
                },
                {
                    icon: 'fas fa-bullseye',
                    title: 'Why Important? ',
                    content: `
                        <ul>
                            <li><strong>Write cleaner, more maintainable code</strong></li>
                            <li>Avoid reinventing the wheel</li>
                            <li>Common vocabulary with team</li>
                            <li>Solve complex problems elegantly</li>
                            <li>Understand framework internals</li>
                            <li>Senior developer requirement</li>
                        </ul>
                        
                        <div class="example-box">
                            <strong>Real Impact:</strong> Most frameworks use patterns extensively (MVC, Observer, Factory)
                        </div>
                    `
                },
                {
                    icon: 'fas fa-graduation-cap',
                    title: 'What to Learn? ',
                    content: `
                        <h4>Creational Patterns:</h4>
                        <ul>
                            <li><strong>Singleton:</strong> One instance only</li>
                            <li><strong>Factory:</strong> Create objects without specifying class</li>
                            <li><strong>Builder:</strong> Construct complex objects step by step</li>
                            <li><strong>Prototype:</strong> Clone existing objects</li>
                        </ul>
                        
                        <h4>Structural Patterns:</h4>
                        <ul>
                            <li><strong>Adapter:</strong> Make incompatible interfaces work</li>
                            <li><strong>Decorator:</strong> Add new functionality dynamically</li>
                            <li><strong>Facade:</strong> Simplified interface to complex system</li>
                            <li><strong>Proxy:</strong> Placeholder for another object</li>
                        </ul>
                        
                        <h4>Behavioral Patterns:</h4>
                        <ul>
                            <li><strong>Observer:</strong> Notify multiple objects of changes</li>
                            <li><strong>Strategy:</strong> Switch algorithms at runtime</li>
                            <li><strong>Command:</strong> Encapsulate requests as objects</li>
                            <li><strong>Iterator:</strong> Traverse collections</li>
                        </ul>
                    `
                },
                {
                    icon: 'fas fa-calendar-alt',
                    title: 'Learning Plan ',
                    content: `
                        <h4>Month 5: Design Patterns (4 weeks)</h4>
                        <ul>
                            <li><strong>Week 1:</strong> Creational patterns (Singleton, Factory)</li>
                            <li><strong>Week 2:</strong> Structural patterns (Adapter, Decorator)</li>
                            <li><strong>Week 3:</strong> Behavioral patterns (Observer, Strategy)</li>
                            <li><strong>Week 4:</strong> Apply patterns to real projects</li>
                        </ul>
                        
                        <h4>Practice Projects:</h4>
                        <ul>
                            <li>Implement each pattern from scratch</li>
                            <li>Refactor existing code with patterns</li>
                            <li>Build a mini framework using patterns</li>
                        </ul>
                    `
                }
            ],
            resources: [
                {
                    title: 'Mohamed Meshref - Design Patterns',
                    url: 'https://www.linkedin.com/in/mmeshref/',
                    icon: 'fab fa-linkedin',
                    description: 'Design patterns in Arabic'
                },
                {
                    title: 'Head First Design Patterns',
                    url: 'https://www.oreilly.com/library/view/head-first-design/0596007124/',
                    icon: 'fas fa-book',
                    description: 'Best patterns book for beginners'
                },
                {
                    title: 'Design Patterns: Elements of Reusable OO Software',
                    url: 'https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612',
                    icon: 'fas fa-book',
                    description: 'Gang of Four - The original patterns book'
                },
                {
                    title: 'Refactoring Guru',
                    url: 'https://refactoring.guru/',
                    icon: 'fas fa-globe',
                    description: 'Visual pattern explanations'
                }
            ]
        },
        {
            id: 'software-engineering',
            title: 'Software Engineering',
            subtitle: 'Professional development practices and methodologies',
            cards: [
                {
                    icon: 'fas fa-question-circle',
                    title: 'What is it? ',
                    content: `
                        <ul>
                            <li><strong>Engineering approach to software development</strong></li>
                            <li>Systematic methods for building software</li>
                            <li>Project planning and management</li>
                            <li>Team collaboration techniques</li>
                            <li>Quality assurance practices</li>
                            <li>Software development lifecycle (SDLC)</li>
                        </ul>
                        
                        <div class="tip-box">
                            <strong>Key:</strong> It's not just coding - it's building software professionally
                        </div>
                    `
                },
                {
                    icon: 'fas fa-bullseye',
                    title: 'Why Important? ',
                    content: `
                        <ul>
                            <li><strong>Work effectively in teams</strong></li>
                            <li>Deliver projects on time</li>
                            <li>Maintain code quality</li>
                            <li>Reduce bugs and technical debt</li>
                            <li>Handle changing requirements</li>
                            <li>Essential for career growth</li>
                        </ul>
                        
                        <div class="example-box">
                            <strong>Reality:</strong> Most software fails due to poor engineering practices, not bad code
                        </div>
                    `
                },
                {
                    icon: 'fas fa-graduation-cap',
                    title: 'What to Learn? ',
                    content: `
                        <h4>Development Practices:</h4>
                        <ul>
                            <li><strong>Clean Code:</strong> Writing readable, maintainable code</li>
                            <li><strong>Version Control:</strong> Git workflows, branching strategies</li>
                            <li><strong>Code Reviews:</strong> Giving and receiving feedback</li>
                            <li><strong>Documentation:</strong> Code comments, API docs, wikis</li>
                            <li><strong>Testing:</strong> Unit, Integration, E2E testing</li>
                            <li><strong>Debugging:</strong> Systematic problem-solving</li>
                        </ul>
                        
                        <h4>Development Methodologies:</h4>
                        <ul>
                            <li><strong>Agile:</strong> Scrum, Kanban basics</li>
                            <li><strong>Waterfall:</strong> When and why to use</li>
                            <li><strong>DevOps basics:</strong> CI/CD concepts</li>
                        </ul>
                        
                        <h4>Best Practices:</h4>
                        <ul>
                            <li>DRY (Don't Repeat Yourself)</li>
                            <li>KISS (Keep It Simple)</li>
                            <li>YAGNI (You Aren't Gonna Need It)</li>
                            <li>SOLID principles application</li>
                        </ul>
                    `
                },
                {
                    icon: 'fas fa-calendar-alt',
                    title: 'Learning Plan ',
                    content: `
                        <h4>Month 6: Software Engineering (4 weeks)</h4>
                        <ul>
                            <li><strong>Week 1:</strong> Clean code principles & practices</li>
                            <li><strong>Week 2:</strong> Git mastery & team workflows</li>
                            <li><strong>Week 3:</strong> Testing fundamentals (Unit & Integration)</li>
                            <li><strong>Week 4:</strong> Agile/Scrum & project management</li>
                        </ul>
                        
                        <h4>Hands-on Practice:</h4>
                        <ul>
                            <li>Contribute to open source projects</li>
                            <li>Set up CI/CD pipeline</li>
                            <li>Practice code reviews on GitHub</li>
                            <li>Document a complete project</li>
                        </ul>
                    `
                }
            ],
            resources: [
                {
                    title: 'Clean Code',
                    url: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882',
                    icon: 'fas fa-book',
                    description: 'Robert Martin - Must read for every developer'
                },
                {
                    title: 'The Pragmatic Programmer',
                    url: 'https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052',
                    icon: 'fas fa-book',
                    description: 'Timeless software engineering wisdom'
                },
                {
                    title: 'Pro Git',
                    url: 'https://git-scm.com/book',
                    icon: 'fas fa-globe',
                    description: 'Free comprehensive Git guide'
                },
                {
                    title: 'Agile Software Development',
                    url: 'https://www.agilealliance.org/agile101/',
                    icon: 'fas fa-globe',
                    description: 'Complete guide to Agile methodologies'
                }
            ]
        },
        
        {
            id: 'databases',
            title: 'Databases (SQL & NoSQL)',
            subtitle: 'Where data lives and how to manage it',
            cards: [
                {
                    icon: 'fas fa-question-circle',
                    title: 'What is it? ',
                    content: `
                        <h4>Databases = Data Storage Systems</h4>
                        
                        <h4>SQL (Relational):</h4>
                        <ul>
                            <li>Data in tables with rows and columns</li>
                            <li>Relationships between tables</li>
                            <li>ACID properties (reliability)</li>
                            <li>Examples: MySQL, PostgreSQL</li>
                        </ul>
                        
                        <h4>NoSQL (Non-Relational):</h4>
                        <ul>
                            <li>Flexible data structures</li>
                            <li>Document, Key-Value, Graph formats</li>
                            <li>Horizontal scaling</li>
                            <li>Examples: MongoDB, Redis</li>
                        </ul>
                    `
                },
                {
                    icon: 'fas fa-bullseye',
                    title: 'Why Important? ',
                    content: `
                        <ul>
                            <li><strong>Every application needs data storage</strong></li>
                            <li>Backend development essential</li>
                            <li>Required for full-stack roles</li>
                            <li>Data is the new oil!</li>
                            <li>Performance optimization</li>
                            <li>System design foundation</li>
                        </ul>
                        
                        <div class="example-box">
                            <strong>Real Apps:</strong> Facebook (MySQL), Netflix (Cassandra), Uber (MySQL + NoSQL)
                        </div>
                    `
                },
                {
                    icon: 'fas fa-graduation-cap',
                    title: 'What to Learn? ',
                    content: `
                        <h4>SQL Fundamentals:</h4>
                        <ul>
                            <li><strong>DDL:</strong> CREATE, ALTER, DROP</li>
                            <li><strong>DML:</strong> SELECT, INSERT, UPDATE, DELETE</li>
                            <li><strong>Joins:</strong> INNER, LEFT, RIGHT, FULL</li>
                            <li><strong>Functions:</strong> Aggregate, String, Date</li>
                            <li><strong>Advanced:</strong> Subqueries, Views, Indexes</li>
                        </ul>
                        
                        <h4>Database Design:</h4>
                        <ul>
                            <li>ER Diagrams</li>
                            <li>Normalization (1NF, 2NF, 3NF)</li>
                            <li>Primary & Foreign Keys</li>
                            <li>Relationships (1:1, 1:N, N:N)</li>
                        </ul>
                        
                        <h4>NoSQL Basics:</h4>
                        <ul>
                            <li>MongoDB (Document DB)</li>
                            <li>When to use NoSQL vs SQL</li>
                        </ul>
                    `
                },
                {
                    icon: 'fas fa-calendar-alt',
                    title: 'Learning Plan ',
                    content: `
                        <h4>Month 7: Databases (4 weeks)</h4>
                        <ul>
                            <li><strong>Week 1:</strong> SQL basics, simple queries</li>
                            <li><strong>Week 2:</strong> Joins, functions, complex queries</li>
                            <li><strong>Week 3:</strong> Database design, normalization</li>
                            <li><strong>Week 4:</strong> MongoDB basics, SQL vs NoSQL</li>
                        </ul>
                        
                        <h4>Projects:</h4>
                        <ul>
                            <li>Design E-commerce Database</li>
                            <li>Social Media Database Schema</li>
                            <li>Build API with Database</li>
                        </ul>
                    `
                }
            ],
            resources: [
                {
                    title: 'SQL Tutorial - W3Schools',
                    url: 'https://www.w3schools.com/sql/',
                    icon: 'fas fa-globe',
                    description: 'Interactive SQL learning'
                },
                {
                    title: 'Database System Concepts',
                    url: 'https://www.amazon.com/Database-System-Concepts-Abraham-Silberschatz/dp/0078022150',
                    icon: 'fas fa-book',
                    description: 'Comprehensive database theory'
                },
                {
                    title: 'MongoDB University',
                    url: 'https://university.mongodb.com/',
                    icon: 'fas fa-graduation-cap',
                    description: 'Free MongoDB courses'
                }
            ]
        },
        
        {
            id: 'architecture',
            title: 'Computer Architecture',
            subtitle: 'The hardware that runs your code',
            cards: [
                {
                    icon: 'fas fa-question-circle',
                    title: 'What is it?',
                    content: `
                        <ul>
                            <li><strong>How computers are built internally</strong></li>
                            <li>CPU design and operation</li>
                            <li>Memory hierarchy (Cache, RAM)</li>
                            <li>Instruction execution</li>
                            <li>Performance optimization</li>
                            <li>Modern processor features</li>
                        </ul>
                        
                        <div class="tip-box">
                            <strong>Focus:</strong> Understanding hardware to write better software
                        </div>
                    `
                },
                {
                    icon: 'fas fa-bullseye',
                    title: 'Why Important?',
                    content: `
                        <ul>
                            <li><strong>Write high-performance code</strong></li>
                            <li>Understand bottlenecks</li>
                            <li>Optimize for cache</li>
                            <li>Parallel programming</li>
                            <li>Embedded systems</li>
                            <li>Game development</li>
                        </ul>
                        
                        <div class="example-box">
                            <strong>Impact:</strong> Why is array faster than linked list? Architecture explains it!
                        </div>
                    `
                },
                {
                    icon: 'fas fa-graduation-cap',
                    title: 'What to Learn?',
                    content: `
                        <h4>Core Components:</h4>
                        <ul>
                            <li><strong>CPU:</strong> ALU, Control Unit, Registers</li>
                            <li><strong>Memory:</strong> Cache levels (L1, L2, L3)</li>
                            <li><strong>Instructions:</strong> Fetch-Decode-Execute</li>
                            <li><strong>Pipelining:</strong> Parallel execution</li>
                        </ul>
                        
                        <h4>Important Concepts:</h4>
                        <ul>
                            <li>Von Neumann vs Harvard architecture</li>
                            <li>RISC vs CISC processors</li>
                            <li>Cache coherence</li>
                            <li>Virtual memory implementation</li>
                            <li>I/O systems</li>
                        </ul>
                        
                        <h4>Modern Topics:</h4>
                        <ul>
                            <li>Multi-core processors</li>
                            <li>GPU architecture basics</li>
                            <li>Performance metrics</li>
                        </ul>
                    `
                },
                {
                    icon: 'fas fa-calendar-alt',
                    title: 'Learning Plan',
                    content: `
                        <h4>Month 10: Architecture (4 weeks)</h4>
                        <ul>
                            <li><strong>Week 1:</strong> CPU basics and instruction cycle</li>
                            <li><strong>Week 2:</strong> Memory hierarchy and cache</li>
                            <li><strong>Week 3:</strong> Pipelining and parallelism</li>
                            <li><strong>Week 4:</strong> Modern architectures and optimization</li>
                        </ul>
                        
                        <h4>Practical Understanding:</h4>
                        <ul>
                            <li>Write cache-friendly code</li>
                            <li>Understand performance counters</li>
                            <li>Basic assembly reading</li>
                        </ul>
                    `
                }
            ],
            resources: [
                {
                    title: 'Computer Organization and Design',
                    url: 'https://www.amazon.com/Computer-Organization-Design-MIPS-Architecture/dp/0124077269',
                    icon: 'fas fa-book',
                    description: 'Patterson & Hennessy - The hardware bible'
                },
                {
                    title: 'Computer Architecture: A Quantitative Approach',
                    url: 'https://www.amazon.com/Computer-Architecture-Quantitative-Approach-Kaufmann/dp/012383872X',
                    icon: 'fas fa-book',
                    description: 'Hennessy & Patterson - Advanced architecture'
                },
                {
                    title: 'nand2tetris',
                    url: 'https://www.nand2tetris.org/',
                    icon: 'fas fa-microchip',
                    description: 'Build a computer from scratch'
                }
            ]
        },
        
        {
            id: 'os',
            title: 'Operating Systems',
            subtitle: 'Understand how computers really work',
            cards: [
                {
                    icon: 'fas fa-question-circle',
                    title: 'What is it? ',
                    content: `
                        <ul>
                            <li><strong>Software that manages computer hardware</strong></li>
                            <li>Interface between applications and hardware</li>
                            <li>Examples: Windows, Linux, macOS</li>
                            <li>Manages resources (CPU, Memory, Disk)</li>
                            <li>Provides services to programs</li>
                            <li>Handles multiple programs running</li>
                        </ul>
                        
                        <div class="tip-box">
                            <strong>Simple:</strong> OS is like a manager that organizes everything in your computer
                        </div>
                    `
                },
                {
                    icon: 'fas fa-bullseye',
                    title: 'Why Important? ',
                    content: `
                        <ul>
                            <li><strong>Understand system-level issues</strong></li>
                            <li>Debug complex problems</li>
                            <li>Write efficient programs</li>
                            <li>Required for system programming</li>
                            <li>Cloud and DevOps foundation</li>
                            <li>Interview questions (FAANG)</li>
                        </ul>
                        
                        <div class="example-box">
                            <strong>Real Impact:</strong> Why does your program crash? Why is it slow? OS knowledge answers these!
                        </div>
                    `
                },
                {
                    icon: 'fas fa-graduation-cap',
                    title: 'What to Learn? ',
                    content: `
                        <h4>Core Concepts:</h4>
                        <ul>
                            <li><strong>Processes:</strong> Running programs</li>
                            <li><strong>Threads:</strong> Lightweight processes</li>
                            <li><strong>Memory Management:</strong> RAM allocation</li>
                            <li><strong>Virtual Memory:</strong> Using disk as RAM</li>
                            <li><strong>File Systems:</strong> How files are stored</li>
                            <li><strong>Scheduling:</strong> CPU time sharing</li>
                        </ul>
                        
                        <h4>Important Topics:</h4>
                        <ul>
                            <li>Deadlocks and prevention</li>
                            <li>Synchronization (mutex, semaphore)</li>
                            <li>Inter-process communication</li>
                            <li>Security basics</li>
                        </ul>
                        
                        <h4>Linux Basics:</h4>
                        <ul>
                            <li>Command line usage</li>
                            <li>File permissions</li>
                            <li>Process management</li>
                        </ul>
                    `
                },
                {
                    icon: 'fas fa-calendar-alt',
                    title: 'Learning Plan ',
                    content: `
                        <h4>Month 8: Operating Systems (4 weeks)</h4>
                        <ul>
                            <li><strong>Week 1:</strong> Processes and threads</li>
                            <li><strong>Week 2:</strong> Memory management</li>
                            <li><strong>Week 3:</strong> File systems and I/O</li>
                            <li><strong>Week 4:</strong> Linux basics and practice</li>
                        </ul>
                        
                        <h4>Hands-on Practice:</h4>
                        <ul>
                            <li>Install Linux (Ubuntu/Fedora)</li>
                            <li>Write simple shell scripts</li>
                            <li>Process management commands</li>
                        </ul>
                    `
                }
            ],
            resources: [
                {
                    title: 'Ahmed Metwally - Cloud Native Base Camp',
                    url: 'https://cloudnativebasecamp.com/',
                    icon: 'fas fa-globe',
                    description: 'OS + Linux in Arabic'
                },
                {
                    title: 'Operating System Concepts',
                    url: 'https://www.amazon.com/Operating-System-Concepts-Abraham-Silberschatz/dp/1119800366',
                    icon: 'fas fa-book',
                    description: 'Silberschatz - The OS bible'
                },
                {
                    title: 'Modern Operating Systems',
                    url: 'https://www.amazon.com/Modern-Operating-Systems-Andrew-Tanenbaum/dp/013359162X',
                    icon: 'fas fa-book',
                    description: 'Tanenbaum - Excellent OS book'
                }
            ]
        },
        
        {
            id: 'networking',
            title: 'Computer Networking',
            subtitle: 'How computers communicate across the world',
            cards: [
                {
                    icon: 'fas fa-question-circle',
                    title: 'What is it? ',
                    content: `
                        <ul>
                            <li><strong>How computers connect and communicate</strong></li>
                            <li>Internet infrastructure and protocols</li>
                            <li>Data transmission methods</li>
                            <li>Network security basics</li>
                            <li>From your computer to servers worldwide</li>
                        </ul>
                        
                        <h4>Key Components:</h4>
                        <ul>
                            <li><strong>Protocols:</strong> Rules for communication (HTTP, TCP/IP)</li>
                            <li><strong>Hardware:</strong> Routers, switches, cables</li>
                            <li><strong>Software:</strong> Network applications</li>
                        </ul>
                    `
                },
                {
                    icon: 'fas fa-bullseye',
                    title: 'Why Important? ',
                    content: `
                        <ul>
                            <li><strong>Everything is connected today</strong></li>
                            <li>Web development foundation</li>
                            <li>Debug network issues</li>
                            <li>Security understanding</li>
                            <li>Cloud computing basics</li>
                            <li>System design interviews</li>
                        </ul>
                        
                        <div class="example-box">
                            <strong>Real Use:</strong> Why is the website slow? How does video streaming work? Networking explains it all!
                        </div>
                    `
                },
                {
                    icon: 'fas fa-graduation-cap',
                    title: 'What to Learn? ',
                    content: `
                        <h4>OSI Model (7 Layers):</h4>
                        <ol>
                            <li>Physical Layer</li>
                            <li>Data Link Layer</li>
                            <li>Network Layer (IP)</li>
                            <li>Transport Layer (TCP/UDP)</li>
                            <li>Session Layer</li>
                            <li>Presentation Layer</li>
                            <li>Application Layer (HTTP)</li>
                        </ol>
                        
                        <h4>Key Protocols:</h4>
                        <ul>
                            <li><strong>TCP/IP:</strong> Internet foundation</li>
                            <li><strong>HTTP/HTTPS:</strong> Web protocols</li>
                            <li><strong>DNS:</strong> Domain name system</li>
                            <li><strong>DHCP:</strong> IP assignment</li>
                        </ul>
                        
                        <h4>Important Concepts:</h4>
                        <ul>
                            <li>IP addressing and subnetting</li>
                            <li>Routing and switching</li>
                            <li>Network security basics</li>
                            <li>Wireless networks</li>
                        </ul>
                    `
                },
                {
                    icon: 'fas fa-calendar-alt',
                    title: 'Learning Plan ',
                    content: `
                        <h4>Month 9: Networking (4 weeks)</h4>
                        <ul>
                            <li><strong>Week 1:</strong> OSI model and basics</li>
                            <li><strong>Week 2:</strong> TCP/IP and protocols</li>
                            <li><strong>Week 3:</strong> HTTP, DNS, and web</li>
                            <li><strong>Week 4:</strong> Security and practice</li>
                        </ul>
                        
                        <h4>Practical Labs:</h4>
                        <ul>
                            <li>Use Wireshark to analyze packets</li>
                            <li>Configure basic networks</li>
                            <li>Build simple client-server app</li>
                        </ul>
                    `
                }
            ],
            resources: [
                {
                    title: 'Computer Networking: A Top-Down Approach',
                    url: 'https://www.amazon.com/Computer-Networking-Top-Down-Approach-7th/dp/0133594149',
                    icon: 'fas fa-book',
                    description: 'Kurose & Ross - Best networking book'
                },
                {
                    title: 'TCP/IP Illustrated',
                    url: 'https://www.amazon.com/TCP-Illustrated-Vol-Addison-Wesley-Professional/dp/0321336313',
                    icon: 'fas fa-book',
                    description: 'Stevens - Deep TCP/IP understanding'
                },
                {
                    title: 'Professor Messer - Network+',
                    url: 'https://www.professormesser.com/network-plus/n10-008/n10-008-video/n10-008-training-course/',
                    icon: 'fas fa-video',
                    description: 'Free networking course'
                }
            ]
        },
        
        {
            id: 'security',
            title: 'Security Fundamentals',
            subtitle: 'Protect applications and data from threats',
            cards: [
                {
                    icon: 'fas fa-question-circle',
                    title: 'What is it?',
                    content: `
                        <ul>
                            <li><strong>Protecting systems, applications, and data</strong></li>
                            <li>Understanding common vulnerabilities</li>
                            <li>Implementing security best practices</li>
                            <li>Cryptography basics and applications</li>
                            <li>Authentication and authorization</li>
                            <li>Network and application security</li>
                        </ul>
                        
                        <div class="tip-box">
                            <strong>Remember:</strong> Security is everyone's responsibility, not just security teams!
                        </div>
                    `
                },
                {
                    icon: 'fas fa-bullseye',
                    title: 'Why Important?',
                    content: `
                        <ul>
                            <li><strong>Data breaches cost millions</strong></li>
                            <li>Legal compliance requirements (GDPR, HIPAA)</li>
                            <li>Protect user privacy and trust</li>
                            <li>Prevent financial losses</li>
                            <li>Career opportunities in security</li>
                            <li>Required knowledge for all developers</li>
                        </ul>
                        
                        <div class="warning-box">
                            <strong>Fact:</strong> 90% of breaches are due to basic security mistakes!
                        </div>
                    `
                },
                {
                    icon: 'fas fa-graduation-cap',
                    title: 'What to Learn?',
                    content: `
                        <h4>Cryptography Fundamentals:</h4>
                        <ul>
                            <li><strong>Hashing:</strong> SHA-256, MD5, bcrypt</li>
                            <li><strong>Encryption:</strong> Symmetric (AES) vs Asymmetric (RSA)</li>
                            <li><strong>Encoding:</strong> Base64, URL encoding</li>
                            <li><strong>Public Key Cryptography:</strong> Digital signatures, SSL/TLS</li>
                        </ul>
                        
                        <h4>Common Vulnerabilities (OWASP Top 10):</h4>
                        <ul>
                            <li><strong>Injection:</strong> SQL, NoSQL, Command injection</li>
                            <li><strong>Broken Authentication:</strong> Session management</li>
                            <li><strong>XSS:</strong> Cross-Site Scripting</li>
                            <li><strong>Broken Access Control:</strong> Authorization flaws</li>
                            <li><strong>Security Misconfiguration:</strong> Default settings</li>
                            <li><strong>Sensitive Data Exposure:</strong> Encryption in transit/rest</li>
                        </ul>
                        
                        <h4>Security Practices:</h4>
                        <ul>
                            <li>Input validation and sanitization</li>
                            <li>Secure coding principles</li>
                            <li>Authentication methods (JWT, OAuth)</li>
                            <li>API security</li>
                            <li>Security testing basics</li>
                        </ul>
                    `
                },
                {
                    icon: 'fas fa-calendar-alt',
                    title: 'Learning Plan',
                    content: `
                        <h4>Month 11: Security Fundamentals (4 weeks)</h4>
                        <ul>
                            <li><strong>Week 1:</strong> Cryptography basics (Hashing, Encryption)</li>
                            <li><strong>Week 2:</strong> OWASP Top 10 vulnerabilities</li>
                            <li><strong>Week 3:</strong> Authentication & Authorization</li>
                            <li><strong>Week 4:</strong> Secure coding & testing</li>
                        </ul>
                        
                        <h4>Hands-on Labs:</h4>
                        <ul>
                            <li>Implement secure authentication system</li>
                            <li>Practice on vulnerable apps (DVWA, WebGoat)</li>
                            <li>Security audit of your own projects</li>
                            <li>Set up HTTPS and understand certificates</li>
                        </ul>
                    `
                }
            ],
            resources: [
                {
                    title: 'OWASP Top 10',
                    url: 'https://owasp.org/www-project-top-ten/',
                    icon: 'fas fa-shield-alt',
                    description: 'Most critical web application security risks'
                },
                {
                    title: 'Web Application Security',
                    url: 'https://www.amazon.com/Web-Application-Security-Beginners-Guide/dp/0071776168',
                    icon: 'fas fa-book',
                    description: 'Comprehensive security guide'
                },
                {
                    title: 'Crypto101',
                    url: 'https://www.crypto101.io/',
                    icon: 'fas fa-lock',
                    description: 'Free cryptography course for developers'
                },
                {
                    title: 'PortSwigger Web Security Academy',
                    url: 'https://portswigger.net/web-security',
                    icon: 'fas fa-graduation-cap',
                    description: 'Free interactive security training'
                },
                {
                    title: 'Professor Messer - Security+',
                    url: 'https://www.professormesser.com/security-plus/sy0-601/sy0-601-video/sy0-601-security-plus-course/',
                    icon: 'fas fa-video',
                    description: 'Free security fundamentals course'
                }
            ]
        }
    ],

    // ===========================
    // CAREER PATHS
    // ===========================
    careers: [
        {
            id: 'frontend',
            category: 'frontend',
            icon: 'fas fa-paint-brush',
            title: 'Frontend Developer',
            description: 'Build beautiful, interactive user interfaces for web applications.',
            csRequired: '40%',
            requiredFromCS: 'Programming, Basic DS&A, Design Patterns basics',
            additionalSkills: 'HTML/CSS mastery, JavaScript frameworks (React/Vue), Responsive design, API integration',
            technologies: ['HTML/CSS', 'JavaScript', 'React/Vue/Angular', 'TypeScript', 'Webpack', 'SASS/Tailwind'],
            roadmapLink: 'https://roadmap.sh/frontend'
        },
        
        {
            id: 'backend',
            category: 'backend',
            icon: 'fas fa-server',
            title: 'Backend Developer',
            description: 'Build robust server-side applications and APIs.',
            csRequired: '70%',
            requiredFromCS: 'All programming concepts, DS&A, Databases, OS basics, Networking',
            additionalSkills: 'API design, Authentication, Caching, Message queues, Microservices',
            technologies: ['Node.js/Python/Java', 'Express/Django/Spring', 'PostgreSQL/MongoDB', 'Redis', 'Docker', 'AWS/GCP'],
            roadmapLink: 'https://roadmap.sh/backend'
        },
        
        {
            id: 'fullstack',
            category: 'backend',
            icon: 'fas fa-layer-group',
            title: 'Full-Stack Developer',
            description: 'Master both frontend and backend development.',
            csRequired: '60%',
            requiredFromCS: 'Programming, DS&A, Databases, Basic networking',
            additionalSkills: 'Frontend + Backend skills, DevOps basics, System design',
            technologies: ['JavaScript/TypeScript', 'React + Node.js', 'SQL + NoSQL', 'Docker', 'CI/CD', 'Cloud basics'],
            roadmapLink: 'https://roadmap.sh/full-stack'
        },
        
        {
            id: 'mobile',
            category: 'mobile',
            icon: 'fas fa-mobile-alt',
            title: 'Mobile Developer',
            description: 'Create native or cross-platform mobile applications.',
            csRequired: '50%',
            requiredFromCS: 'Programming, OOP, Basic DS&A, Design patterns',
            additionalSkills: 'Mobile UI/UX, Platform guidelines, App store deployment',
            technologies: ['Swift/Kotlin', 'React Native/Flutter', 'iOS/Android SDK', 'Firebase', 'Mobile UI patterns'],
            roadmapLink: 'https://roadmap.sh/android'
        },
        
        {
            id: 'devops',
            category: 'backend',
            icon: 'fas fa-infinity',
            title: 'DevOps Engineer',
            description: 'Automate deployments and manage infrastructure.',
            csRequired: '60%',
            requiredFromCS: 'Programming, OS mastery, Networking, Basic architecture',
            additionalSkills: 'Cloud platforms, Containerization, CI/CD, Infrastructure as Code',
            technologies: ['Docker/Kubernetes', 'AWS/Azure/GCP', 'Terraform', 'Jenkins/GitLab CI', 'Python/Go', 'Ansible'],
            roadmapLink: 'https://roadmap.sh/devops'
        },
        
        {
            id: 'data-engineer',
            category: 'data',
            icon: 'fas fa-database',
            title: 'Data Engineer',
            description: 'Build data pipelines and manage data infrastructure.',
            csRequired: '65%',
            requiredFromCS: 'Programming, DS&A, Databases mastery, Basic OS',
            additionalSkills: 'Big data tools, ETL/ELT, Data warehousing, Streaming',
            technologies: ['Python/Scala', 'Apache Spark', 'Airflow', 'SQL/NoSQL', 'Kafka', 'Data Lakes'],
            roadmapLink: 'https://roadmap.sh/data-analyst'
        },
        
        {
            id: 'ml-engineer',
            category: 'data',
            icon: 'fas fa-robot',
            title: 'Machine Learning Engineer',
            description: 'Build and deploy machine learning models.',
            csRequired: '75%',
            requiredFromCS: 'Strong programming, DS&A mastery, Architecture understanding',
            additionalSkills: 'Mathematics, Statistics, ML algorithms, Deep learning',
            technologies: ['Python', 'TensorFlow/PyTorch', 'Scikit-learn', 'NumPy/Pandas', 'MLOps', 'CUDA'],
            roadmapLink: 'https://roadmap.sh/ai-data-scientist'
        },
        
        {
            id: 'embedded',
            category: 'emerging',
            icon: 'fas fa-microchip',
            title: 'Embedded Systems Engineer',
            description: 'Program hardware devices and IoT systems.',
            csRequired: '80%',
            requiredFromCS: 'C/C++ mastery, OS deep knowledge, Architecture mastery',
            additionalSkills: 'Hardware interfaces, Real-time systems, Low-level programming',
            technologies: ['C/C++', 'Assembly', 'RTOS', 'Arduino/Raspberry Pi', 'Hardware protocols', 'IoT'],
            roadmapLink: 'https://roadmap.sh/embedded-systems'
        },
        
        {
            id: 'game-dev',
            category: 'mobile',
            icon: 'fas fa-gamepad',
            title: 'Game Developer',
            description: 'Create video games for various platforms.',
            csRequired: '70%',
            requiredFromCS: 'Strong programming, DS&A, OOP mastery, Architecture basics',
            additionalSkills: 'Game engines, Physics, Graphics programming, Game design',
            technologies: ['C++/C#', 'Unity/Unreal', 'Graphics APIs', 'Game physics', 'AI for games', 'Optimization'],
            roadmapLink: 'https://roadmap.sh/game-developer'
        },
        
        {
            id: 'blockchain',
            category: 'emerging',
            icon: 'fas fa-link',
            title: 'Blockchain Developer',
            description: 'Build decentralized applications and smart contracts.',
            csRequired: '65%',
            requiredFromCS: 'Programming, DS&A, Networking, Basic cryptography from OS',
            additionalSkills: 'Smart contracts, DeFi protocols, Web3 development',
            technologies: ['Solidity', 'Web3.js', 'Ethereum', 'Smart Contracts', 'DeFi', 'IPFS'],
            roadmapLink: 'https://roadmap.sh/blockchain'
        }
    ],
    
    // ===========================
    // RESOURCES
    // ===========================
    resources: {
        books: [
            {
                title: 'Programming & OOP',
                icon: 'fas fa-code',
                items: [
                    {
                        title: 'C++ Primer (5th Edition)',
                        author: 'Stanley Lippman',
                        description: 'The most comprehensive C++ book for beginners to intermediate.',
                        level: 'Beginner-Intermediate',
                        url: 'https://www.amazon.com/Primer-5th-Stanley-B-Lippman/dp/0321714113'
                    },
                    {
                        title: 'Programming: Principles and Practice Using C++',
                        author: 'Bjarne Stroustrup',
                        description: 'By the creator of C++. Excellent for learning programming properly.',
                        level: 'Beginner',
                        url: 'https://www.stroustrup.com/programming.html'
                    },
                    {
                        title: 'Object-Oriented Programming in C++',
                        author: 'Robert Lafore',
                        description: 'Best book for understanding OOP concepts with C++.',
                        level: 'Intermediate',
                        url: 'https://www.amazon.com/Object-Oriented-Programming-4th-Robert-Lafore/dp/0672323087'
                    }
                ]
            },
            {
                title: 'Data Structures & Algorithms',
                icon: 'fas fa-project-diagram',
                items: [
                    {
                        title: 'Introduction to Algorithms (CLRS)',
                        author: 'Cormen, Leiserson, Rivest, Stein',
                        description: 'The comprehensive textbook covering algorithms in depth.',
                        level: 'Advanced',
                        url: 'https://mitpress.mit.edu/books/introduction-algorithms-third-edition'
                    },
                    {
                        title: 'Cracking the Coding Interview',
                        author: 'Gayle Laakmann McDowell',
                        description: '189 programming questions and solutions for interviews.',
                        level: 'Intermediate',
                        url: 'https://www.crackingthecodinginterview.com/'
                    },
                    {
                        title: 'Algorithm Design Manual',
                        author: 'Steven Skiena',
                        description: 'Practical algorithm design with real-world examples.',
                        level: 'Intermediate',
                        url: 'https://www.algorist.com/'
                    }
                ]
            },
            {
                title: 'System Design & Architecture',
                icon: 'fas fa-sitemap',
                items: [
                    {
                        title: 'Clean Architecture',
                        author: 'Robert C. Martin',
                        description: 'How to structure and design software systems properly.',
                        level: 'Advanced',
                        url: 'https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164'
                    },
                    {
                        title: 'Design Patterns: Elements of Reusable OO Software',
                        author: 'Gang of Four',
                        description: 'The original design patterns book. A must-read classic.',
                        level: 'Advanced',
                        url: 'https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612'
                    },
                    {
                        title: 'Head First Design Patterns',
                        author: "O'Reilly",
                        description: 'Design patterns explained in a fun, easy-to-understand way.',
                        level: 'Intermediate',
                        url: 'https://www.oreilly.com/library/view/head-first-design/0596007124/'
                    }
                ]
            }
        ],
        
        courses: [
            {
                title: 'Complete Learning Paths',
                icon: 'fas fa-route',
                items: [
                    {
                        title: 'Mohamed Moshref - Complete CS Path',
                        author: 'Mohamed Moshref',
                        description: 'Programming, OOP, OOD, DS&A, and Design Patterns in Arabic.',
                        level: 'All Levels',
                        duration: 'Self-paced',
                        url: 'https://www.linkedin.com/in/mmeshref/',
                        price: 'paid'
                    },
                    {
                        title: 'CS50 - Introduction to Computer Science',
                        author: 'Harvard University',
                        description: 'World-class introduction covering C, Python, SQL, and more.',
                        level: 'Beginner',
                        duration: '12 weeks',
                        url: 'https://cs50.harvard.edu/x/',
                        price: 'Free'
                    },
                    {
                        title: 'Ahmed Metwally - Cloud Native Base Camp',
                        author: 'Ahmed Metwally',
                        description: 'Operating Systems and Linux fundamentals in Arabic.',
                        level: 'Intermediate',
                        duration: 'Self-paced',
                        url: 'https://cloudnativebasecamp.com/',
                        price: 'paid'
                    }
                ]
            },
            {
                title: 'Specialized Courses',
                icon: 'fas fa-graduation-cap',
                items: [
                    {
                        title: 'Algorithms Specialization',
                        author: 'Stanford University',
                        description: 'Master algorithmic programming techniques.',
                        level: 'Intermediate',
                        duration: '4 months',
                        url: 'https://www.coursera.org/specializations/algorithms',
                        price: 'Paid'
                    },
                    {
                        title: 'Database Management Essentials',
                        author: 'University of Colorado',
                        description: 'Complete database course with SQL and design.',
                        level: 'Beginner-Intermediate',
                        duration: '7 weeks',
                        url: 'https://www.coursera.org/learn/database-management',
                        price: 'Paid'
                    }
                ]
            }
        ],
        
        practice: [
            {
                title: 'Coding Practice',
                icon: 'fas fa-code',
                items: [
                    {
                        title: 'LeetCode',
                        description: 'The #1 platform for technical interview preparation.',
                        level: 'All Levels',
                        url: 'https://leetcode.com/',
                        price: 'Free/Premium'
                    },
                    {
                        title: 'HackerRank',
                        description: 'Practice coding with structured learning paths.',
                        level: 'All Levels',
                        url: 'https://www.hackerrank.com/',
                        price: 'Free'
                    },
                    {
                        title: 'Codeforces',
                        description: 'Competitive programming platform with contests.',
                        level: 'Intermediate-Advanced',
                        url: 'https://codeforces.com/',
                        price: 'Free'
                    }
                ]
            },
            {
                title: 'Projects & Portfolio',
                icon: 'fas fa-project-diagram',
                items: [
                    {
                        title: 'GitHub',
                        description: 'Host your code and build your portfolio.',
                        level: 'All Levels',
                        url: 'https://github.com/',
                        price: 'Free'
                    },
                    {
                        title: 'Build Your Own X',
                        description: 'Tutorials for building real projects from scratch.',
                        level: 'Intermediate',
                        url: 'https://github.com/danistefanovic/build-your-own-x',
                        price: 'Free'
                    }
                ]
            }
        ],
        
        communities: [
            {
                title: 'General Communities',
                icon: 'fas fa-users',
                items: [
                    {
                        title: 'Stack Overflow',
                        description: 'Largest Q&A platform for programmers.',
                        url: 'https://stackoverflow.com/',
                        members: '20M+ developers'
                    },
                    {
                        title: 'Reddit - r/learnprogramming',
                        description: 'Supportive community for beginners.',
                        url: 'https://www.reddit.com/r/learnprogramming/',
                        members: '3M+ members'
                    },
                    {
                        title: 'Discord - The Programmer\'s Hangout',
                        description: 'Active Discord server for all levels.',
                        url: 'https://discord.gg/programming',
                        members: '500K+ members'
                    }
                ]
            }
        ]
    },
    
    // ===========================
    // ADDITIONAL SECTIONS
    // ===========================
    additionalSections: {
        beginnerTips: {
            mistakes: [
                'Jumping between languages - Master C++ first',
                'Tutorial hell - Balance learning with building',
                'Comparing yourself - Everyone learns differently',
                'Skipping fundamentals - No shortcuts to mastery',
                'Not practicing daily - Consistency is key'
            ],
            successTips: [
                'Practice 2-3 hours daily minimum',
                'Build projects, not just exercises',
                'Join communities for support',
                'Focus on understanding, not memorizing',
                'Take breaks to avoid burnout'
            ]
        },
        
        timeline: {
            note: 'Topics can be studied in parallel after Phase 1. For example: Databases alongside DS&A, Networking with Architecture. Adjust based on your pace and career goals.'
        }
    }
};

// Make data available globally
window.roadmapData = roadmapData;