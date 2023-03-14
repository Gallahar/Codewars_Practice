// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n, times = 0) {
	if (n <= 0 || !text) return text
	const filteredOdd = [...text].filter((t, i) => i % 2 !== 0 && t).join``
	const filteredEven = [...text].filter((t, i) => i % 2 == 0 && t).join``
	let result = filteredOdd + filteredEven
	times++
	return times === n ? result : encrypt(result, n, times)
}

function decrypt(encryptedText, n) {
	if (n <= 0 || !encryptedText) return encryptedText
	let result = ''
	let times = 0
	while (times <= n) {
		const oddHalf = encryptedText.slice(
			0,
			Math.floor(encryptedText.length / 2)
		)
		const evenHalf = encryptedText.slice(
			Math.floor(encryptedText.length / 2)
		)
		let iterable =
			oddHalf.length > evenHalf.length ? oddHalf.length : evenHalf.length
		for (let i = 0; i < iterable; i++) {
			result +=
				(evenHalf[i] ? evenHalf[i] : '') +
				(oddHalf[i] ? oddHalf[i] : '')
		}
		encryptedText = result
		result = ''
		times++
		if (times === n) break
	}
	return encryptedText
}