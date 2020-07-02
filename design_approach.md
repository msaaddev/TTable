# Design Approach

We will implement an algorithm which outputs the optimal time-table for a university, with particular emphasis on the professor's ease and availability for classes.

## Simple Activity Scheduling Application

### Constraints

- The program only deals with Session 2018
- There is at least **1** Lecture Hall available for each group of students
- Each section takes **5** mandatory courses
- There are enough teachers available for each course to be offered to each section
- Credit Hours are equal to Contact Hours (no labs)
- Courses do not require special accomodation
- The scheduler aims to generate a clash-free time-table -- without taking into account an ease in schedule for students, or the teachers.

### Algorithm Methodology

- The algorithm is based on a Brute-Force Approach
- The working days of the week are divided into equal time-frames
- The time-frames are filled through a random index generator
- If the index generated lands at a time-frame susceptible to a clash, the index number is generated again
- If the time-frames for a day are full - or result in a clash - the course is moved to the next day
- In this approach, the sections are simply being matched with the teachers on respective time-slots, with the Course ID acting like the "middle-man"

### Necessary Parameters

- Course ID
- Credit Hours of the course
- No. of Sections
- Time-frames available in a day (AvailableHrs)
- Potential Clash time-frames (ReservedHrs)

## Complex Activity Scheduling Application

After building and successfully testing the Simple Activity Scheduling Application, we can broaden the scope of our program by implementing more functionalities.

### Probable Future Functionalities

- Number of Lecture Halls may not necessarily be equal to the number of sections
- All Sessions (**4**) can be processed by the program
- Each Session, or Section, may not necessarily have the same courses over a semester
- Teachers may teach more than **1** course e.g. a lecturer may be teaching Calculus and Multivariate Calculus to different sessions during the same semester
- The number of Contact Hours may vary from the Credit Hours (for labs)
- Courses may be offered special accomodation
- The ease of the professors, and the students is taken into account (no long breaks)
- The program may cover different departments in the university, and take intra-departmental teachers (Humanities, Mathematics,etc) into account

### Other Algorithm Approaches

- Genetic Algorithm 
- Tree Search and Tabu Search Algorithm
- Iterated Local Search Algorithm

### Additional Parameters

- Sessions
- Maximum Number of professor's Working Hours per week
- Courses the professor can Teach
- Names of Professors
- Contact Hours of a course
- Variable Number of Courses per Session
- Number of Lecture Halls Available
- Special Accomodation for courses

### Links for Further Reading

- [Implementation that won International Timetable Competition (Hybrid of Local Search and Constraint Programming)
](https://www.patatconference.org/patat2008/proceedings/Cambazard-WD1c.pdf)
- [Implementation using Tree Search and Tabu Search 
](http://alexandria.tue.nl/extra2/200211248.pdf)
- [Implementation using Iterated Local Search 
](https://www.researchgate.net/publication/221656138_Solving_the_Course_Timetabling_Problem_with_a_Hybrid_Heuristic_Algorithm)
- [Implementation using Genetic and Local Search
](https://www.researchgate.net/profile/Hamza_Turabieh/publication/232627738_Generating_University_Course_Timetable_Using_Genetic_Algorithms_and_Local_Search/links/5c4b6385a6fdccd6b5c86165/Generating-University-Course-Timetable-Using-Genetic-Algorithms-and-Local-Search.pdf)
