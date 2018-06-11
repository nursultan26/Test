//При выподнении заданий использвать callback

/* task1 - Написать функцию check() которая проверит содержит ли данный массив 
все числа от 1 до n. Возращает callback с аргументом true или false. Получает 1 аргумент массив*/
//[1,2,4,3] true
//[5,3,1,2] false
//пример вызова функции

var aray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var senArray = [1, 2, 3, 4, 5, 7, 8, 9, 10];
var n = 10;
var bool = true;

function check(array, cb) {
	for (var i = 0; i < n; i++) {
		console.log(i + 1, array[i])
		if (i + 1 == array[i]) {
			bool = true;
		}else {
			bool = false;
			break;
		}
	}
	cb(bool);
}

check(aray, function(result) {
	console.log(result);
})

/* task2 - Написать функцию которая находит наиболее часто встречающийся элемент
в массиве целых чисел. Одинаковых часто встречающихся элементов не будет
Возращает callback с результатом. Получает 1 аргумент массив */
console.log (" ")
var ah = [1,2,3,3,4,1,1,2] // 1
var b = [2,2,3,4,1,1,2] // 2
//пример вызова функции
function search(ar, fn) {
	let quan = [];
	let sum = 0;
	for (var i = 0; i < ah.length; i++) {
		for (var j = i + 1; j < ah.length; j++) {
			if (ah[i] == ah[j]) {
				quan.push(ah[i])
				quan.push(ah[i])
				for (var k = 0; k < quan.length; k++) {
					if (quan[k] == ah[i]) {
						quan.pop()
					}
				}
			}			
		}
	}
	fn(quan.length)
}


search(ah, function(result) {
	console.log(result);
})