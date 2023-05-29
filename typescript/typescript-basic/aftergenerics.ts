interface Person {
  name: string,
  age: number
}
type IPartial = Partial<Person>
let abs : IPartial = { name: '1', age: 2 }
type IOmit = Omit<Person, 'name'>
let dds : IOmit = { age: 2 }

type Direction = 'Up' | 'Down' | 'Left' | 'Right'
let a : Direction = 'Right'

type ePerson = Person & { love: 'eat' }
let newPerson : ePerson = { name: 'hello', age: 1, love: 'eat' }

let arrnum : Array<number> = [1, 2, 3]

