# Algorithm 

## Parameters

- courseID
- creditHrs
- section
- availableHrs
- reservedHrs

## Pseudo Code

```
SCHEDULER (courseID, creditHrs, section, availableHrs, reservedHrs)

    let days [1 to 5] = {'monday', 'tuesday', 'wednesday', 'thursday', 'friday'}

    let length = section.length

    for i=0 to length 
        let nextDay = 0

        for j=0 to creditHrs
            let day = days[nextDay]
            let index = rand[1,5]

            while availableHrs[i].day[1] == 0 and availableHrs[i].day[2] == 0 and availableHrs[i].day[3] and availableHrs[i].day[4] and availableHrs[i].day[5]
                inc nextDay
                if nextDay > 4 
                    nextDay = 0
                day = days[nextDay]

            while reservedHrs[1].day[index] == courseID or reservedHrs[2].day[index] == courseID or reservedHrs[3].day[index] == courseID or reservedHrs[i].day[index] != 0     
                index = rand[1,5]
                inc nextDay
                if nextDay > 4 
                    nextDay = 0
                day = days[nextDay]

            availableHrs[i].day[index] = 0
            reservedHrs[i].day[index] = courseID

            inc nextDay
            if nextDay > 4 
                nextDay = 0
```



        


                

