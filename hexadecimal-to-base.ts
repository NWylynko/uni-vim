

const hexadecimalToBase = (hexadecimal: string) => {

  const hexValues = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
  }

  return hexadecimal.split("").map((char, index, array) => {
    const num = hexValues[char]
    const multi = Math.pow(16, (array.length - index - 1)) 

    console.log({ num, multi })

    return num * multi

  }).reduce((sum, num) => sum + num, 0)

}

const base = hexadecimalToBase("2B")
const base2 = hexadecimalToBase("9F2")

console.log(base)
console.log(base2)

export {}