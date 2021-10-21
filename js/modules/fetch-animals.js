import AnimateNumbers from './animate-numbers';

export default function fetchAnimals(url, target) {
  function createAnimal(animal) {
    const div = document.createElement('div');
   
    div.classList.add('animal-number');
    div.innerHTML = `<h3>${animal.specie}</h3><span date-number>${animal.total}</span>`;
   
    return div;
  }

  const gridNumbers = document.querySelector(target);
  
  function fillAnimals(animal) {
    const divAnimal = createAnimal(animal);
    
    gridNumbers.appendChild(divAnimal);
  }

  function animateAnimalsNumbers() {
    const animateNumbers = new AnimateNumbers('[date-number]', '.numbers', 'active');
    animateNumbers.init();
  }

  async function createAnimals() {
    try {
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();

      animalsJSON.forEach(animal => fillAnimals(animal));
      
      animateAnimalsNumbers();
    } catch (erro) {
      console.log(erro);
    }
  }

  return createAnimals();
}
