// united type
let StringOrNumber: string | number

function getLength(input: string | number) {
  const string = input as string
  if (string.length) {
    return string.length
  } else {
    const number = input as number
    return number.toString().length
  }
}

function getLength2(input: string | number) {
  if (typeof input === 'string') {
    return input.length
  } else {
    return input.toString().length
  }
}