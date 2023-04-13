// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished AND no one has won yet (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

const isSolved = (board) => {
	let results = []
	results.push(
		...board.map((b) => b),
		board.map((b) => b[0]),
		board.map((b) => b[1]),
		board.map((b) => b[2]),
		board.map((b, i) => b[i]),
		board.map((b, i) => b.reverse()[i])
	)
	const isFinished = board
		.reduce((a, c) => a.concat(c), [])
		.some((el) => el === 0)
	const winner = results.some((el) => el.every((n) => n === 1))
		? 1
		: results.some((el) => el.every((n) => n === 2))
		? 2
		: 0
	return !isFinished && winner > 0
		? winner
		: isFinished && winner === 0
		? -1
		: winner
}
