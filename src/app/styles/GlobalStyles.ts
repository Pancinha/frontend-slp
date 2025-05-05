  import { createGlobalStyle } from "styled-components";


  const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: montserrat;
    }

    body {
      text-align: center;
      align-items: flex-start;
      justify-content: center;
      background-color: white;
      

    }

    h1 {
      color: black;
      text-align: center;
      margin-top: 20px;
      font-size: 40px;
      line-height: 46px;
      font-weight: 700;
      margin-bottom: 15%;
      margin-top: 5%;
      
    }

    button {
      cursor: pointer;
    }
    
    #banner{
      background-color: #003b95;
      padding-top: 5%;
      padding-bottom: 5%;
      height: 325px
    }

    #mainBanner{
      color: black;
    }
  
  #menubuttons{
  margin-top: 10%
  }

  #imagemLogo{
  margin-left: 20%;
  }



    #button-75 {
      align-items: center;
      background-image: linear-gradient(174deg, #4b40f3 40%, #4dfcec);
      border: 0;
      border-radius: 24px;
      box-sizing: border-box;
      color: #fff;
      cursor: pointer;
      margin: 47px;
      flex-direction: column;
      font-family: montserrat;
      font-size: 13px;
      font-weight: 400;
      height: 42px;
      justify-content: center;
      letter-spacing: .4px;
      line-height: 1;
      margin-bottom: 0px;
      max-width: 100%;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 3px;
      text-decoration: none;
      text-transform: uppercase;
      user-select: none;
      -webkit-user-select: none;
      margin-top: 10px;
      touch-action: manipulation;
  }
      #button-76 {
      align-items: center;
      background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
      border: 0;
      border-radius: 24px;
      box-sizing: border-box;
      color: #fff;
      cursor: pointer;
      margin: 47px;
      flex-direction: column;
      font-family: montserrat;
      font-size: 13px;
      font-weight: 400;
      height: 42px;
      justify-content: center;
      letter-spacing: .4px;
      line-height: 1;
      margin-bottom: 0px;
      max-width: 100%;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 3px;
      text-decoration: none;
      text-transform: uppercase;
      user-select: none;
      -webkit-user-select: none;
      margin-top: 10px;
      touch-action: manipulation;
  }

  #button-75:active {
    outline: 0;
  }

  #button-75:hover {
    outline: 0;
  }

  #button-75 span {
    transition: all 200ms;
  }

  #button-75:hover span {
    transform: scale(.9);
    opacity: .75;
  }

  @media screen and (max-width: 991px) {
    #button-75 {
      font-size: 15px;
      height: 50px;
    }

    #button-75 span {
      line-height: 50px;
    }
  }



  #divBotoesMenu{
  display: inline-flex;
  }

  #centralizaButton{
  
  }
  
  #carrosel{
  margin-top: 20%;
  
  }

  #infosCircuitos{
    margin-top: -10%;
    text-align: left;
    margin-left: 5%;
    }

  .titulosDestinos{
    font-size: 55px;
    font-weight: bold;
    color: #111827;
    text-align: left;
    padding: 0px 12.5rem;
  }
  .infosHomePage{
    font-size: 18px;
    color: #374151;
    line-height: 1.8;
    max-width: 720px;
    margin: 20px 12.5rem 40px;
    /* padding: 0 11.5rem; */
    text-align: left;
}

.cards-destinos {
  padding: 20px 0;
  background-color: #fff;
}

.cards-container {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  padding: 0 12.5rem;
}

.card-destino {
  max-width: 400px;
  text-align: left;
}

.card-destino img {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
    height: 265px;
}

.card-destino h3 {
  font-size: 18px;
  font-weight: 1.3;
  margin-top: 12px;
  color: black;
  font-weight: 600;
}

.card-destino p {
  font-size: 14px;
  color: #4B5563;
  margin-top: 6px;
  line-height: 1.5;
}
.tituloEspecialista{
    margin-top: 5%;
    font-size: 55px;
    font-weight: bold;
    color: #111827;
    text-align: left;
    padding: 0px 12.5rem;
}
  .sectionDestinos {
    padding-top: 377px; /* ou altura exata do seu banner */
}
#imageTravelAcademy{
  padding-left: 12.5rem;
  width: 50%;
}
.infosTravel{
display: flex;
}
.topicosTravel{
  text-align: left;
  padding-left: 80px;
}
li{
  color: black;
  font-size: 23px;
  font-weight: 500;
}
#paragrafoTravel{
  padding-bottom: 50px;
    color: grey;
    font-size: larger;
}
.bannerMad{
    position: relative;
    display: flex;
    height: 320px;
    width: 100%;
    margin-top: 10%;
}
.divBlue{
   background-color: #003893;
  width: 65%; /* aumente aqui para deixar a azul maior */
  height: 100%;
  
}
.divPink{
 background-color: #e91e63;
  width: 35%; /* diminua aqui proporcionalmente */
  height: 100%;
}

.textoBanner {
    color: white;
    font-size: 28px;
    font-weight: 600;
    max-width: 700px;
    padding-top: 10%;
    padding-left: 4%;
}

.madImage {
  position: absolute;
  height: 400px;
  bottom: 0;
  left: 66%;
  transform: translateX(-50%);
  z-index: 2;
}
  `;

  export default GlobalStyles;