function generateGameLegend() {
    return'твой послeдний противник - Кот-Качок!';
  } 
  const legend = generateGameLegend();
  alert(legend);
  
  function generateGameLegend2() {
    return 'Тут даже советовать нечего...удачи';
  } 
  const legend2 = generateGameLegend2();
  alert(legend2);
   
   
   let choice = prompt(
       "Кот-Качок напал! Выберите действие: \ударить ножом(1), \посыпать мяту(2)\вступить в кулачный бой(3)?",
     );
  
     let pchoice = +choice + 0
  
  
    if (pchoice<2) {
        alert('Как ни странно, но это помогло...ты победил');
      } else if (pchoice>2) {
        alert('Кот-Качок вырубил тебя с первого удара');
      } else  {
        alert('Это не помогло. На запах мяты пришли друзья Кота-Качка и задавили тебя');
      } 
  