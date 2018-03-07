var day, moon, years, nowDate, wordDay, yourDate;



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
	document.getElementById('outputDay').innerHTML = thousandSeparator(yourDay);
	document.getElementById('outputHour').innerHTML = thousandSeparator(yourHour);
	document.getElementById('outputMinutes').innerHTML = thousandSeparator(yourMinutes);
	document.getElementById('outputSek').innerHTML = thousandSeparator(yourSek);

	newName();

}




//Функция вывода текста с правильными окончаниями
function newName() {
	document.getElementById('inputNameMoon').innerHTML = pluralForm(yourMoon, ['Месяц','Месяца','Месяцев']);
	document.getElementById('inputNameWeek').innerHTML = pluralForm(yourWeek, ['Неделя','Недели','Недель']);
	document.getElementById('inputNameDay').innerHTML = pluralForm(yourDay, ['День','Дня','Дней']);
	document.getElementById('inputNameHour').innerHTML = pluralForm(yourHour, ['Час','Часа','Часов']);
	document.getElementById('inputNameMinutes').innerHTML = pluralForm(yourMinutes, ['Минута','Минуты','Минут']);
	document.getElementById('inputNameSek').innerHTML = pluralForm(yourSek, ['Секунда','Секунды','Секунд']);
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

// функция склонения окончания по числу:
function pluralForm ( n, forms ) {
    return forms[(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2) ];
}





// настройки анимации кнопки

