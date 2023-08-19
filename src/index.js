const horses = [
    'Secretariat',
    'Eclipse',
    'West Australian',
    'Flying Fox',
    'Seabiscuit',
];

function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function run(horse){
  const time = getRandomTime(1500,2500);
  return new Promise(resolve=>{
      setTimeout(()=>{
          resolve({horse, time})
      },time)
  })
}


const startBtn = document.querySelector('.js-start-race')
startBtn.addEventListener('click', () =>{
    progressEl.innerHTML = 'Заїзд почався';
    const promiseArr = horses.map(horse => run(horse))
    Promise.race(promiseArr).then(({horse,time}) => {
        winnerEl.textContent = `🎉 Переможець ${horse}, финишував за ${time}мс часу`
    })
    Promise.all(promiseArr).then(()=> {
        progressel.innerHTML = 'Заїзд закінчився'
    })
})