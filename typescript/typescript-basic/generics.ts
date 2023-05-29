function echo<T>(arg: T):T {
  return arg
}

const ae = echo([])

function tp<U, I>(tuple: [U, I]):[I, U] {
  return [tuple[1], tuple[0]]
}

const res = tp(['1', 1])

interface WithLength {
  length: number
}

function echoWithLength<T extends WithLength>(arg: T): T {
  console.log(arg.length)
  return arg
}

const b = echoWithLength([1, '2', 3])
