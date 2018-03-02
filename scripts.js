var day, moon, years, nowDate, wordDay, yourDate;


//Функция вывода текста
/*function nameDay() {
	console.log('Вывод текста - дни заменены');

	wordDay = Number(document.getElementById('outputDay').value);
	if (wordDay > 0) {
		wordDay = 'Денечек';
	}
	
	document.getElementById('inputNameDay').innerHTML = "Дней";
}
*/


//Функция вывода в консоль цифры кол-ва дней
function submit() {
	day = Number(document.getElementById('inputSelectDay').value);
	moon = Number(document.getElementById('inputSelectMonth').value);
	years = Number(document.getElementById('inputSelectYears').value);
	nowDate = new Date();
	yourDate = new Date(years, moon-1, day);
	yourSek = parseInt((nowDate-yourDate)/1000); 
	yourMinutes = parseInt(yourSek/60);
	yourHour = parseInt(yourMinutes/60);
	yourDay = parseInt(yourHour/24);
	yourWeek = parseInt(yourDay/7);
	yourMoon = parseInt(yourWeek/4.5);

	document.getElementById('outputMoon').innerHTML = thousandSeparator(yourMoon);
	document.getElementById('outputWeek').innerHTML = thousandSeparator(yourWeek);
	document.getElementById('outputHour').innerHTML = thousandSeparator(yourHour);
	document.getElementById('outputMinutes').innerHTML = thousandSeparator(yourMinutes);
	document.getElementById('outputDay').innerHTML = thousandSeparator(yourDay);
	document.getElementById('outputSek').innerHTML = thousandSeparator(yourSek);


//	nameDay()

}



//Разделение числа пробелами по 3 символа
var thousandSeparator = function(str) {
    var parts = (str + '').split('.'),
        main = parts[0],
        len = main.length,
        output = '',
        i = len - 1;
    
    while(i >= 0) {
        output = main.charAt(i) + output;
        if ((len - i) % 3 === 0 && i > 0) {
            output = ' ' + output;
        }
        --i;
    }

    if (parts.length > 1) {
        output += '.' + parts[1];
    }
    return output;
}