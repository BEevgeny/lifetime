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





// кричащие кнопки:


var jealousButton = document.getElementsByClassName("btn");
var wohooSound = document.getElementById("sound-wohoo");
var meSound = document.getElementById("sound-me");

var getSiblings = function (elem) {
  var siblings = [];
  var sibling = elem.parentNode.firstChild;
  for (; sibling; sibling = sibling.nextSibling) {
    if (sibling.nodeType !== 1 || sibling === elem) continue;
    siblings.push(sibling);
  }
  return siblings;
};

for (var i = 0; i < jealousButton.length; i++) {

  jealousButton[i].addEventListener("mouseover", function(event) { 
    wohooSound.play();  
    meSound.play();
    this.classList.add("yeay");

    var siblings = getSiblings(this);
    for (var i = 0; i < siblings.length; i++) {
      siblings[i].classList.add("pick-me");
    }
  }, false);


  jealousButton[i].addEventListener("mouseleave", function(event) {   
    wohooSound.pause();  
    wohooSound.currentTime = 0;
    meSound.pause();
    meSoundcurrentTime = 0;
    event.target.classList.remove("yeay");

    for (var i = 0; i < jealousButton.length; i++) {
      jealousButton[i].classList.remove("pick-me");
      jealousButton[i].classList.remove("yeay");
    }
  }, false);

}

//  JQUERY CODE
// $(".btn" ).mouseover(function() {
//   $("#sound-wohoo")[0].play();
//   $("#sound-me")[0].play();
//   $(this).addClass("yeay");
//  $(this).siblings().addClass("pick-me");
//   $(this).siblings().children( ".hand" ).css( "display", "block" );
// });

// $(".btn" ).mouseout(function() {
//   $("#sound-woohoo")[0].pause();
//   $("#sound-me")[0].pause();
//   $(this).removeClass("yeay");
//    $(".btn").removeClass("pick-me");
// });

