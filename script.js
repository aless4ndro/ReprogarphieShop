// Récupération du formulaire
let form = document.querySelector('form');
let resultatDiv = document.querySelector('#resultat');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nbPhotocopies = parseInt(document.querySelector('#nb-photocopies').value);
  let cout = 0;

  if (nbPhotocopies <= 10) {
    cout = nbPhotocopies * 0.1;
    alert(`Le cout de ${nbPhotocopies} photocopies est de ${cout.toFixed(2)} euros`);
  } else if (nbPhotocopies <= 30) {
    cout = 10 * 0.1 + (nbPhotocopies - 10) * 0.09;
    alert(`Le cout de ${nbPhotocopies} photocopies est de ${cout.toFixed(2)} euros`);
  } else {
    cout = 10 * 0.1 + 20 * 0.09 + (nbPhotocopies - 30) * 0.08;
    alert(`Le cout de ${nbPhotocopies} photocopies est de ${cout.toFixed(2)} euros`);
  }
});
