var time, day, moon;
var nowDate = new Date();
//var NowDateMilisek = Date.now();



//Функция вывода в консоль цифры кол-ва дней
function consDay() {
	day = Number(document.getElementById('inputSelectDay').value);
	console.log('Прошло '+day+' дней');
}

function consMoon() {
	moon = Number(document.getElementById('inputSelectMonth').value);
	console.log('Прошло '+moon+' месяца');
}

function consYear() {
var	years = Number(document.getElementById('inputSelectYears').value);
var	yourDate = new Date(years, moon-1, day);
var	yourSek = parseInt(nowDate-yourDate/1000);
var	yourMinutes = parseInt(yourSek/60);
var	yourHour = parseInt(yourMinutes/60);
var	yourDay = parseInt(yourHour/24);

	console.log('Вы родились в '+years+' году');
	console.log('Вам '+yourSek+' секунд');
	console.log('Вам '+yourHour+' часов');
	console.log('Вам '+yourMinutes+' минут');
	console.log('Вам '+yourDay+' дней');
	console.log('Вы родились в '+years+' году, в '+moon+ ' месяце и в '+day+' дня');
	console.log('Сейчас '+nowDate.getFullYear()+' год, '+nowDate.getMonth()+ ' месяц и '+nowDate.getDate()+' день');
}

