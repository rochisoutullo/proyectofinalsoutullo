//DOM
/*BOTON DESLIZAR*/
document.getElementById('deslizar').addEventListener('click', function() {
    const projectSection = document.querySelector('.project');
    projectSection.scrollIntoView({ behavior: 'smooth' });
  });