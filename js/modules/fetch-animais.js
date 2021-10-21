import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  function createAnimal(animal) {
    const div = document.createElement('div');
   
    div.classList.add('animal-number');
    div.innerHTML = `<h3>${animal.specie}</h3><span date-number>${animal.total}</span>`;
   
    return div;
  }

  const numerosGrid = document.querySelector(target);
  
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[date-number]', '.numbers', 'active');
    animaNumeros.init();
  }

  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      animaisJSON.forEach(animal => preencherAnimais(animal));
      
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
