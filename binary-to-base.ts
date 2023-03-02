
const binaryToBase = (binary: string) => {
  let num = 0
  let base = 0

  for(let i = binary.length - 1; i >= 0; i--) {
    const digit = Number(binary[i])

    num += digit * Math.pow(2, base)

    base++
  }

  return num
}

const base = binaryToBase("10101")
const base2 = binaryToBase("100111110010")

console.log({ base })
console.log({ base2 })

export {}