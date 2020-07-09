# Algorithm Analysis

The first thing we are going to do is algorithm correctness.

## Algorithm Correctness

### Inductive Hypothesis

The algorithm will generate a timetable for all sections without any clash for courseID[i] where i is the total number of courses taken and section[j] where j is the total available sections.

### Base Case

Since our algorithm has 5 parameters, we are going to assume base values for all of these parameters. The base case is as follow:

- courseID[0] = 101
- creditHrs = 3
- section[0] = 1
- availableHrs[0] = [
    {
        monday: [1, 2, 3, 4, 5],
        tuesday: [1, 2, 3, 4, 5],
        wednesday: [1, 2, 3, 4, 5],
        thursday: [1, 2, 3, 4, 5],
        friday: [1, 2, 3, 4, 5],
    },
]
- reservedHrs = [
    {
        monday: [0, 0, 0, 0, 0],
        tuesday: [0, 0, 0, 0, 0],
        wednesday: [0, 0, 0, 0, 0],
        thursday: [0, 0, 0, 0, 0],
        friday: [0, 0, 0, 0, 0],
    },
]

### Inductive Step

*Assume IH is true.*

1. The first **for loop** will run till its loop invariant value increases the length of section array. Since we have only 1 section, it will run only once. The loop invariant value is 0.
2. The second **for loop** will run till its loop invariant value increases the number of credit hours. Since we have 3 credit hours, it will run thrice. The loop invariant value is 0.
3. Setting the next day index to 0 to set day to Monday.
4. A random index will be generated. Let's call this index *k*.
5. Since we have only one course to schedule then it means we have all the available timeslots. So the algorithm will not go into **first** **while** loop.
6. The next while loop will check if on that index *k*, the course is register for some other section. Since we have only one section then our algorithm will not go into the **second** **while** loop.
7. Setting timeslot to 0 on that generated index in the available hours to not use it later for any other course.
8. Setting reservedHr timeslot to our courseID on the generated index in the available hours to not use it later to register any course.
9. Updating to the next day index.
10. Checking if next day has become greater than 5. If it does then set the next day back to 0.
11. Now the second for loop's loop invariant value value will increment and the process will be repeated.

Since the algorithm is perfectly working for this specific input then it will also work for any other inputs too.

## Time Complexity

The time complexity of an algorithm represents the running time of an algorithm, as a function of its length of input. Simply put, the time complexity offers us a mode to understand, and show the amount of time a program will take to execute, and output a result, while signifying the relationship between the inputs, and the total running time of a program.

### Time Complexity Analysis of Activity Scheduling Algorithm

The Algorithm for our Activity Scheduling Web Application takes in various inputs such as

- Course ID
- Credit Hours
- Number of Sections

After taking in the necessary inputs, our program runs a total of five different loops, and additional statements to generate an optimal time-table.

These loops are described below:

- *for loop*

This is the first loop in our algorithm, and runs for the number of sections the time-table is being generated for. It runs through the entirety of the program.

- *nested for loop*

This loop runs for the number of credit hours input to the program for a particular course, and is active throughout the total duration of our algorithm’s running time

- *while loop*

This loop was added in our algorithm to cater to certain corner cases, such as running out of available time-slots on a particular day. Thus, this loop only runs in the program if certain conditions/cases arise.

- *while loop*

One of the most important parts of the algorithm, this loop runs every time a clash arises between two subjects, and outputs a randomized index, which will then again be compared for a clash. Therefore, this loop is called when a clash arises between two subjects, and runs for as long as an available time-slot (without any clash) is found.

- *for loop*

This loop is for the number of courses that are input to our program, and runs over the objective function - which adds the course to the time-table.

Other than the loops mentioned above, the following conditions may also play a part in the time complexity analysis of our algorithm:

- generation of random index for time-table at the start of the nested for loop
- generation of random index for time-table during the while loop considering clash cases
- use of if condition to reset the time-table back to Monday, if it crosses Friday

For each iteration of the nested for loops, our algorithm generates a two-dimensional array, which shows the time-slots booked by the course, by replacing a set number of time-slots – depending upon the credit hours – with the course ID of the certain course.

Although the for loops run for a specific number of iterations, and are certainly going to be called by the program, the while loops have varied running times, and are only run, when their specific conditions are met. Thus, we are going to discuss the best-case scenario (lower bound), the worst-case scenario (upper bound), and the average-case scenario while calculating the time complexity of our algorithm.

### Worst Case Scenario

- *for loop for courses*

The loop calls in the activity scheduler for the number of courses that need to be added.

For 5 courses, the loop will call the activity scheduling function 5 times. Thus, for n number of courses, we will call the function *n* number of times.

- *for loop for sections*

For 3 numbers of sections, this for loop runs 3 times. Thus, for *m* number of sections, this loop will run *m* number of times.

However, because it is a nested loop, it will run 15 times for 5 courses and 3 sections. Thus, the total number of iterations are *n x m*.

- *for loop for credit hours*

For 3 credit hours, this for loop runs 3 times. Thus, for *p* number of credit hours, it must run for *p* number of times.

However, because it is a nested loop, it will run 45 times for 5 courses, 3 sections and 3 credit hours per course. This makes the total number of iterations to *n x m x p*.

- *while loop for time-slots*

This loop only runs when all the time-slots for a day have been filled out. In the worst case, this loop will run for the total number of working days in a week. For our algorithm, the number of working days is 5, which helps us know that this loop will run for a maximum of 5 times.

The total number of iterations for this loop would be 5.

- while loop for clashes

This loop only runs when a clash appears between the different sections. For a single iteration, the loop checks if the credit hour to be scheduled is falling on an already used index.

As it only checks the used indexes, and generates a random index when a clash is found, and that it can fall on only the unused time-slots, we can induct that in the worst case possible, the loop will run a total of 25 times (5 number of days, and 5 time-slots per day)

If we let number of time-slots be c, then the number of iterations of this loop can be calculated as:

*B = 5 x c*

Time Complexity of Statements/Conditions

| Statement      | Iterations |
| ----------- | ----------- |
| for i=0 to number of courses      | n       |
| let days [1-5] = Monday, Tuesday … Friday   | 1        |
| let length = section.length | 1 |
| for j=0 to number of sections | n x m |
| let nextDay = 0 | m |
| for k=0 to number of credit hours | n x m x p |
| let day = days[nextDay] | p |
| let index = rand[1-5] | p |
| while (availableHrs[i]) == 0... | 5 * (n x m x p) |
| inc nextDay | 1 |
| if nextDay > 5 | q (where q is the iterations of the while loop) |
| day = days[nextDay] | q |
| while (clash b/w sections) | B = 5 x c |
| index = rand[1-5] | B |
| inc nextDay | B |
| if nextDay > 5 | B |
| day = days [nextDay] | B |
| availableHrs[index] = 0 | p |
| reservedHrs[index] = courseID | p |
| inc nextDay | p |
| if nextDay > 5 | p |

**Total Time Complexity**

[T.C.] = n + 1 + 1 + (n x m) + m + (n x m x p) + p + p + (5*(n x m x p)) + 1 + q + q + (B*(n x m x p)) + B + B + B + B + p + p + p

For the sake of generalising the above statement, we will analyse the above equation to find out the dominating factors in our algorithm’s time complexity. Thus, we can rule out the statements with constant or linear time complexity, and focus on the nested loops.

Now, [T.C.] = n + (n x m) + (n x m x p) + ((5*(n x m x p)) + (B*(n x m x p))

Also, as the number of courses = 5, and the number of sections (m) and number of credit hours (p) is 3 – less than n – we can replace m and p with n, and focus on it being our most dominating factor.

Now, [T.C.] = n + (n^2) + (n^3) + (5*n^3) + (B*n^3)

As we can see, lesser powers will not make a considerable dent on the total time complexity, and the expression with n3, is not a constant. The value of B (number of clashes) depends directly upon the number of courses, and thus, we can bring our time complexity equation to:

[T.C.] = O(n^4)

### Best Case Scenario

In the best-case scenario, our program does not enter the two nested while loops i.e.

- the scheduler does not run out of free time-slots in a day
- the scheduler does not generate any clash in the time-table

Keeping these two conditions in mind, we can formulate the following Time Complexity Equation:

[T.C.] = n + 1 + 1 + (n x m) + m + (n x m x p) + p + p + p + p + p

For the sake of generalisation, we find out that the dominating factors in the following equation are the nested loops. Therefore, we ignore the constant, and linear time statements.

[T.C.] = n + (n x m) + (n x m x p)

As the values of m and p are considerably less than that of n, we can substitute them with n, without altering the factors in our time complexity equation.

[T.C.] = n + n^2 + n^3

This means: [T.C.] = O(n^3)

### Average Case Scenario

For the average case, the while loops will be used for some conditions, and will not run for the rest. Thus, their usage and impact on the total running time will shift the time complexity between the two extreme cases: worst-case scenario, and the best-case scenario. The time complexity for an average case can be anywhere from O(n^3) to O(n^4).