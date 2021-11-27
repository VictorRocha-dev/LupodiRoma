<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lupo di Roma | catalogo</title>

    <!--Fontes utilizadas no projeto-->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@300&family=Sen:wght@400;700;800&display=swap"
      rel="stylesheet"
    />

    <!--Css Local -->
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="/css/navbar.css" />
    <link rel="stylesheet" href="/css/footer.css" />
    <link rel="stylesheet" href="/css/global.css">
  </head>
<body>  

    <header>
        <nav>
            <a class="logo" href="/index.html"><img src="/assets/logo.svg" alt="" /></a>
            <div class="mobile-menu">
              <div class="line1"></div>
              <div class="line2"></div>
              <div class="line3"></div>
            </div>
            <ul class="nav-list" id="nav-list">
              <li><a href="/index.html">Home</a></li>
              <li><a href="/pages/catalogo/index.html">Catalogo</a></li>
              <li><a href="/pages/oquefazemos/index.html">O que fazemos</a></li>
            <li><a href="#">Quem somos</a></li>
            <li><a href="#">entre ou cadastre-se</a></li>
            <li>
              <a href="#"
                ><img src="/assets/carrinho.svg" alt="carrinho shopping"
              /></a>
            </li>
          </ul>
        </nav>
    </header>



    <footer>
        <div class="footer-container">
          <div class="social-medias">
            <h1>Redes Sociais</h1>
            <div class="social-medias-icon">
              <img src="/assets/instagram.svg" alt="logo instagram" />
              <img src="/assets/Facebook.svg" alt="logo facebook" />
              <img src="/assets/twitter.svg" alt="logo twitter" />
            </div>
          </div>
  
          <div class="contact">
            <h1>Contato</h1>
  
            <div class="send-mensage">
              <p>contato@lupodiroma.com.br</p>
              <input
                type="email"
                value="Digite seu email para receber noticias"
              />
            </div>
          </div>
  
          <div class="localization">
            <h1>Localização</h1>
  
            <p>Rua Itália Nº 999 cep 69360-540</p>
          </div>
        </div>
      </footer>


      <script src="/javascript/mobile-navbar.js"></script>
      <script src="/javascript/dynamicproducts.js" type="module"></script>

</body>
</html>