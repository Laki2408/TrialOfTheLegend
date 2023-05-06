function generateGameLegend() {
  return 'Твой первый противник - Змеюка-Гадюка!';
} 
const legend = generateGameLegend();
alert(legend);

function generateGameLegend2() {
  return 'Она чемпионка в ближнем бою!';
} 
const legend2 = generateGameLegend2();
alert(legend2);

// ./img/1.jpg


 let choice = prompt(
     "Змеюка-Гадюка напала! Выберите действие: \ударить ножом(1), \кинуть камень(2)\ наступить(3)?",
   );

   let pchoice = +choice + 0


  if (pchoice<2) {
      alert('Вы промахнулись! Змеюка-гадюка укусила вашу руку!');
    } else if (pchoice>2) {
      alert('Змеюка-Гадюка успела увернуться и укусила тебя за руку');
    } else  {
      alert('Вы победили!');
    } 

//   if (pchoice=2) {
//       return'Змеюка-Гадюка успела увернуться и укусила тебя за руку';
//     } 

//  if (pchoice=3) {
//      return'Вы победили и получили одно очко Испытаний';
//      Och==1;
//    } 

