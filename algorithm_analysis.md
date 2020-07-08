# Algorithm Analysis

The first thing we are going to do is algorithm correctness.

## Algorithm Correctness

### Inductive Hypothesis

The algorithm will generate a timetable without any clash for courseID[i] where i is the total number of courses taken.

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
10. Checking if index has become greater than 5. If it does then set the index back to 0.
11. Now the second for loop loop invariant value value will increment and the process will be repeated.
