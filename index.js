function bruteForceTwoSum(arr, sum) {
  let result = []

  while (arr.length > 1) {
    let x = arr[0]
    
    arr.shift()
    for (let i = 0; i < arr.length; i++) {
      if (x + arr[i] === sum) {
        result.push([x, arr[i]])
      }
    }
  }
  return result
}

function binarySearchTwoSum(arr, sum) {
  let result = []
  let sortedArr = arr.sort((a, b) => a - b)

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] !== sortedArr[i + 1]) {
      let num = sum - sortedArr[i]

      if (binaryMatch(sortedArr, num)) {
        result.push([sortedArr[i], num])
      }
    }
  }
  return result
}

function binaryMatch(arr, num) {
  let start = arr[0]
  let end = arr.length - 1

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)

    if (num === arr[mid]) {
      return true
    } else if (num > arr[mid]) {
      start = mid + 1
    } else if (num < arr[mid]) {
      end = mid - 1
    } else {
      return false
    }
  }
}

function hashTwoSum(arr, sum) {
  let result = []
  let hash = {}
  
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]

    if (hash[num]) {
      hash[num] += 1
    } else {
      hash[num] = 1
    }
  }
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]

    if (hash[sum - num]) {
      result.push([num, sum - num])
    }
  }
  return result.slice(0, result.length / 2)
}
