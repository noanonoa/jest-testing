// Array Chunking
// Split an array into chunked arrays of a specified length
// example: chunkArray([1,2,3,4,5,6,7], 3) --> [[1,2,3], [4,5,6], [7]]

const chunkArray = (array, length) => {
  // index starts at the beginning of the array
  let index = 0
  // and chunked array of sub arrays which remains to be determined
  let chunked = []
  while (index < array.length) {
    // a new sub array starts at the beginning of index up to the specified length
    const subArray = array.slice(index, (index + length))
    // push it to the chunked array
    chunked.push(subArray)
    // index on the next iteration needs to start from where the previous subarray ended
    index += length;
  }
  return chunked
}

const chunkArr = (array, length) => {
  let chunked = []
  array.forEach(value => {
    const lastValue = chunked[chunked.length - 1]
    if (!lastValue || lastValue.length === length) {
      chunked.push([value])
    } else {
      lastValue.push(value)
    }
  })
  return chunked
}

// console.log(chunkArr([1,2,3,4,5,6,7], 3))

module.exports = chunkArray