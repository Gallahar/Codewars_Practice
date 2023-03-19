// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:

// the returned string should only contain lowercase letters

function kebabize(str) {
	let result = str.replace(/\d+/g, '')
	return result.replace(/[A-Z]/g, (x) =>
		result.indexOf(x) !== 0 ? '-' + x.toLowerCase() : x.toLowerCase()
	)
}
