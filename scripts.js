var day, moon, years, nowDate, wordDay, yourDate;


//Функция вывода текста
function nameDay() {
	console.log('Вывод текста - здни заменены');

	wordDay = Number(document.getElementById('outputDay').value);
	if (wordDay > 0) {
		wordDay = 'Денечек';
	}
	document.getElementById('inputNameDay').innerHTML = "Дней";
}



//Функция вывода в консоль цифры кол-ва дней
/*
function submit() {
	day = Number(document.getElementById('inputSelectDay').value);
	moon = Number(document.getElementById('inputSelectMonth').value);
	years = Number(document.getElementById('inputSelectYears').value);
	nowDate = new Date();
	yourDate = new Date(years, moon-1, day);
	var	yourSek = parseInt((nowDate-yourDate)/1000); 
	var	yourMinutes = parseInt(yourSek/60);
	var	yourHour = parseInt(yourMinutes/60);
	var	yourDay = parseInt(yourHour/24);

	document.getElementById('outputDay').innerHTML = yourDay;
	document.getElementById('outputHour').innerHTML = yourHour;
	document.getElementById('outputMinutes').innerHTML = yourMinutes;
	document.getElementById('outputSek').innerHTML = yourSek;

	nameDay()

	console.log('Вы родились в '+years+' году');
	console.log('Вам '+yourSek+' секунд');
	console.log('Вам '+yourHour+' часов');
	console.log('Вам '+yourMinutes+' минут');
	console.log('Вам '+yourDay+' дней');
	console.log('Вы родились в '+years+' году, в '+moon+ ' месяце и в '+day+' дня');
//	console.log('Сейчас '+nowDate.getFullYear()+' год, '+nowDate.getMonth()+ ' месяц и '+nowDate.getDate()+' день');

}



*/