let slideIndex = 0; //variavel slideIndex com 0. ela controla o slide

function mostrarSlides() { //informa que a função mostrarSlides será a responsável e inicia a declaração de tudo oq vai acontecer nela
  const slides = document.getElementsByClassName("slide_image"); //pega todos os elementos dessa classe
  const pontos = document.getElementsByClassName("ponto");  //pega todos os elementos dessa classe

 
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";   //esconde todos os slides
  }

 
  for (let i = 0; i < pontos.length; i++) {
    pontos[i].classList.remove("ativo");    //remove o branco de todas as bolinhas
  }

  
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1; //aumenta a variavel slideIndex para 1 para aparecer a imagem
  }

  // Exibe o slide atual
  slides[slideIndex - 1].style.display = "block";   //mostra o slide

  // Destaca a bolinha correspondente
  if (pontos.length >= slideIndex) {
    pontos[slideIndex - 1].classList.add("ativo");  //adiciona a classe ativo á bolinha, assim mostrando ela
  }

 
  setTimeout(mostrarSlides, 3000);  //chama essa função a cada 3s
}


mostrarSlides();    //faz a função funcionar


  // Salvar a posição de rolagem antes da atualização
  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('scrollPosition', window.scrollY);
  });

  // Restaurar a posição ao recarregar
  window.addEventListener('load', () => {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition));
    }
  });
  
  
// Código para o menu hamburguer
document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide_image');
    const pontos = document.querySelectorAll('.ponto');

    function showSlide(index) {
        slides.forEach(slide => slide.style.display = 'none');
        pontos.forEach(ponto => ponto.classList.remove('ativo'));
        slides[index].style.display = 'block';
        pontos[index].classList.add('ativo');
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    // Inicia automaticamente
    let interval = setInterval(nextSlide, 3000);

    // Controles das bolinhas
    pontos.forEach((ponto, i) => {
        ponto.addEventListener('click', () => {
            clearInterval(interval);
            slideIndex = i;
            showSlide(slideIndex);
            interval = setInterval(nextSlide, 3000);
        });
    });
});

// hamburguer_script.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-menu');
    const navList = document.getElementById('nav-list');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Fecha ao clicar em links
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navList.classList.remove('active');
            }
        });
    });
});

  