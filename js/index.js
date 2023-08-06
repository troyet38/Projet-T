let prevScrollY = 0;

window.addEventListener('scroll', function() {
  const image = document.querySelector('.logo');
  const scrollY = window.scrollY;
  image.style.opacity =1;
  // Vérifiez si l'utilisateur fait défiler vers le bas
  if (scrollY > prevScrollY) {
    // Défilement vers le bas, diminuez l'opacité de l'image
    image.style.opacity = 1 - scrollY / 3400; // Vous pouvez ajuster la valeur 500 pour contrôler la vitesse du changement d'opacité
  } else {
    // L'utilisateur fait défiler vers le haut, réinitialisez l'opacité à 1
    image.style.opacity = 1;
  }
  image.style.opacity = Math.min(Math.max(opacity,0.5), 1);
  // Mémorisez la position de défilement actuelle pour la prochaine itération
  prevScrollY = scrollY;
});
