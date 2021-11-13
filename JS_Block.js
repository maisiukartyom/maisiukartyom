
// Задание 1
function task1() {
	const stringCases = myString => myString[0].toUpperCase() + myString.toLowerCase().slice(1)

	document.getElementById('result').defaultValue = stringCases(prompt('Введите слово')) 
}
//

// Задание 2
function task2() {
	name = prompt('Как вас зовут?')
	const greet = name => name === 'Mark' ? alert('Hi, Mark!') : alert(`Hello, ${name}!`)

	greet(name)
}
//

// Задание 3
function task3(){
	function filterStrings(arr, count){
		return arr.filter(word => {if (word.length <= count) return word})
	}

	document.getElementById('result').defaultValue = filterStrings(prompt('Перечислите строки через запятую').split(", "), parseInt(prompt('Введите MAX длинну слова'), 10))
}
//
