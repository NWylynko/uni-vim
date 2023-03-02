
const decimalToOctal = (decimal: number) => {
  let output = ""
  let sub_decimal = decimal

  for (let i = 0; i < decimal.toString().length; i++) {
    const remainder = Math.floor(sub_decimal % 8)
    sub_decimal = Math.floor(sub_decimal / 8)

    output = remainder + output

    console.log({ output, sub_decimal, remainder })

  }

  return output
}

const octal = decimalToOctal(42)
const octal2 = decimalToOctal(2546)

console.log({ octal })
console.log({ octal2 })

export {}