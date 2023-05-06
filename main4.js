function generateGameLegend() {
    return'твой второй противник - Бонк!';
  } 
  const legend = generateGameLegend();
  alert(legend);
  
  function generateGameLegend2() {
    return 'Остерегайся его биты';
  } 
  const legend2 = generateGameLegend2();
  alert(legend2);
   
   
   let choice = prompt(
       "Бонк напал! Выберите действие: \ударить ножом(1), \перехватить биту(2)\ Кто тут хороший мальчик????(3)?",
     );
  
     let pchoice = +choice + 0
  
  
    if (pchoice<2) {
        alert('Бонк успел ударить раньше');
      } else if (pchoice>2) {
        alert('Вы выиграли! Бонк радостно виляет хвостом');
      } else  {
        alert('Бонк оказался быстрее...');
      } 
  