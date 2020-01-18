function bruteForceTwoSum(arr, sum) {
    let sums = []
    let a
    for (a of arr) {
        let num = arr.splice(0, 1)[0]
        if (arr.find(n => n + num === sum)) {
            let x = arr.find(n => n + num === sum)
            sums.push([num, x])
        }
    }
    return sums
}

function binarySearchTwoSum(arr, sum) {
    let sums = []
    let newArr = arr.sort((a, b) => a - b)
    newArr.forEach(num => {
        let start = 0
        let end = arr.length - 1
        let target = sum - num
        while (start <= end) {
            let middle = Math.floor((start + end) / 2)
            if (newArr[middle] === target) {
                console.log(sums)
                return sums.push([num, newArr[middle]])
            }
            if (newArr[middle] < target) {
                start = middle + 1
            }
            if (newArr[middle] > target) {
                end = middle - 1
            }
            else {
                console.log("Target not found. Next Iteration.")
            }
        }
    })
    return sums.slice(0, (sums.length / 2))
}

function binaryMatch(sortedArr, num) {
    let start = 0
    let end = sortedArr.length - 1
    while (start <= end) {
        let middle = Math.floor((start + end) / 2)
        if (sortedArr[middle] === num) {
            return true
        }
        if (sortedArr[middle] < num) {
            start = middle + 1
        }
        if (sortedArr[middle] > num) {
            end = middle - 1
        }
        else {
            console.log("Target not found. Next Iteration.")
        }
    }
}

function hashTwoSum(arr, sum) {
    let hash = {}
    let sums = []
    arr.forEach(i => {
        if (hash[i]) {
            return hash[i] += 1
        } else {
            return hash[i] = 1
        }
    })
    arr.forEach(i => {
        if (hash[sum - i]) {
            return sums.push([i, sum - i])
        }
    })
    return sums.slice(0, sums.length / 2)
}