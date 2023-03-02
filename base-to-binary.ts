
const baseToBinary = (startNum: number) => {
	let num = startNum
	let binary = ""

	while(num >= 1) {
		const remainder = Math.floor(num % 2)

		binary = remainder + binary

		num = num / 2

		console.log({ remainder, binary, num })
	}

	return binary
}

const binary = baseToBinary(42)
const binary2 = baseToBinary(2546)

console.log({ binary })
console.log({ binary2 })

export {}