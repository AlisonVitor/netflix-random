var imagens = [
    {
      urlImagem:  "img/iammother.jpg",
      linkExterno: "https://www.netflix.com/br/title/80227090"
    },
    {
      urlImagem:  "img/teoriadetudo.jpg",
      linkExterno: "https://www.netflix.com/br/title/80227090"
    },
    {
      urlImagem: "img/alemdamorte.jpg",
      linkExterno: "https://www.netflix.com/br/title/80183339"
    },
    {
      urlImagem: "img/oxigenio.jpg",
      linkExterno: "https://www.netflix.com/br/title/81277610"
    },
    {
      urlImagem: "img/spiderhead.jpg",
      linkExterno: "https://www.netflix.com/br/title/80210767"
    },
    {
      urlImagem: "img/awake.jpg",
      linkExterno: "https://www.netflix.com/br/title/81040362"
    },
    {
      urlImagem: "img/whipplash.jpg",
      linkExterno: "https://www.netflix.com/br/title/70299275"
    },
    {
      urlImagem: "img/ela.jpg",
      linkExterno: "https://www.netflix.com/br/title/70278933"
    },
    {
      urlImagem: "img/historiadeumcasamento.jpg",
      linkExterno: "https://www.netflix.com/br/title/80223779"
    },
    
    // Adicione aqui mais objetos com as URLs das imagens e links externos correspondentes
  ];
  
  function sortearImagem() {
    var loading = document.getElementById("loading");
    var imagemContainer = document.getElementById("imagem-container");
    var imagem = document.getElementById("imagem-aleatoria");
    var imagemnetflix = document.getElementById("imagemnetflix");
    var botaoLink = document.getElementById("botao-link");
    var linkExterno = document.getElementById("link-externo");
  
    // Exibir animação de carregamento
    loading.classList.remove("hidden");
  
    // Ocultar imagem atual e botão de link (se houver)
    imagemContainer.classList.add("hidden");
    botaoLink.classList.add("hidden");
    imagemnetflix.style.display = "none";
    // Simular um tempo de carregamento
    setTimeout(function() {
      // Gerar um índice aleatório para selecionar um objeto de imagem aleatória
      var indiceAleatorio = Math.floor(Math.random() * imagens.length);
      var imagemAleatoria = imagens[indiceAleatorio];
  
      // Atualizar a imagem com a URL selecionada aleatoriamente
      imagem.src = imagemAleatoria.urlImagem;
  
      // Exibir a imagem
      imagemContainer.classList.remove("hidden");
      imagemContainer.classList.remove("hidden");
  
      // Atualizar o link externo com a URL selecionada aleatoriamente
      linkExterno.href = imagemAleatoria.linkExterno;
  
      // Exibir o botão de link
      botaoLink.classList.remove("hidden");
  
      // Ocultar animação de carregamento
      loading.classList.add("hidden");
    }, 1000); // Tempo de carregamento simulado: 2 segundos
  }
  

  function mostrarConteudo(id) {
    // Oculta todos os conteúdos
    var conteudos = document.getElementsByClassName("conteudo");
    for (var i = 0; i < conteudos.length; i++) {
      conteudos[i].style.display = "none";
    }
    
    // Mostra o conteúdo selecionado
    var conteudo = document.getElementById(id);
    conteudo.style.display = "block";
  }

  let selectedMovies1 = [];
  let selectedMovies2 = [];
  
  function toggleDropdown(dropdownId) {
    const dropdown1 = document.getElementById("dropdown-content1");
    const dropdown2 = document.getElementById("dropdown-content2");
  
    if (dropdownId === "dropdown1") {
      dropdown1.classList.toggle("show");
      dropdown2.classList.remove("show");
    } else if (dropdownId === "dropdown2") {
      dropdown2.classList.toggle("show");
      dropdown1.classList.remove("show");
    }
  }
  
  function selectMovie(movie, selectedMovieId, dropdownId) {
    const selectedMovie = document.getElementById(selectedMovieId);
    selectedMovie.innerHTML = `<p>Filme selecionado: </br> <img src="${movie}" alt="Filme selecionado"></p>`;
  
    const dropdown1 = document.getElementById("dropdown-content1");
    dropdown1.classList.remove("show");
  
    const dropdown2 = document.getElementById("dropdown-content2");
    dropdown2.classList.remove("show");
  
    if (dropdownId === "1") {
      selectedMovies1.push(movie);
    } else if (dropdownId === "2") {
      selectedMovies2.push(movie);
    }
  }
  
  function drawWinner() {
    const winnerContainer = document.getElementById("winner");
    const winnerImage = document.getElementById("winner-image");
    const winnerText = document.getElementById("winner-text");
    const loadingSpinner = document.getElementById("loading");
  
    if (selectedMovies1.length >= 1 && selectedMovies2.length >= 1) {
      const randomIndex1 = Math.floor(Math.random() * selectedMovies1.length);
      const randomIndex2 = Math.floor(Math.random() * selectedMovies2.length);
      const winner1 = selectedMovies1[randomIndex1];
      const winner2 = selectedMovies2[randomIndex2];
  
      const finalWinner = Math.random() < 0.5 ? winner1 : winner2;
  
      // Exibe a animação de carregamento
      loadingSpinner.classList.remove("hidden");
      winnerContainer.style.display = "none";
  
      setTimeout(() => {
        loadingSpinner.classList.add("hidden");
        winnerContainer.style.display = "block";
        winnerImage.innerHTML = `<img src="${finalWinner}" alt="Vencedor">`;
        winnerText.textContent = "Vencedor!";
      }, 1000); // Ajuste o valor do atraso conforme necessário
    } else {
      winnerContainer.style.display = "none";
      winnerText.textContent = "Selecione pelo menos um filme em cada categoria.";
    }
  }
  