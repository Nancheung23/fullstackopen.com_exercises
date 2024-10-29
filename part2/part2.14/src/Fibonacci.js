const sumOfFibonacciSerie = (totalCount) => {
    let totalSum = 0
    let first = 0
    let second = 1
    if (totalCount === 1) {
        // while totalCount equals 1, output first
        console.log(`current value: ${first}; totalSum: ${totalSum}`)
    } else if (totalCount === 2) {
        // while totalCount equals 2, output first + second
        totalSum = first + second
        console.log(`current value: ${second}; totalSum: ${totalSum}`)
    } else if (totalCount >= 3) {
        // while totalCount greater than 3, do loop
        // when it's 3, totalSum equals 1
        totalSum = first + second
        // index starts at 3
        let index = 3
        while (index <= totalCount) {
            let next = second + first
            first = second
            second = next
            console.log(`current value: ${next}; totalSum: ${totalSum += next}`)
            index++
        }
    } else {
        console.log("input value must be greater than 1, your input: ", totalCount)
    }
}

sumOfFibonacciSerie(10)