let prevScrollY = 0;

window.addEventListener('scroll', function() {
  const image = document.querySelector('.logo');
  const scrollY = window.scrollY;
  image.style.opacity =1;
  
  if (scrollY > prevScrollY) {
    
    image.style.opacity = 1 - scrollY / 3400; 
  } else {
    
    image.style.opacity = 1;
  }
  image.style.opacity = Math.min(Math.max(opacity,0.5), 1);
  
  prevScrollY = scrollY;
});
