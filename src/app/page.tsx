import Image from "next/image";
import Banner from "@/app/components/PersistentBanner";

export default function HomePage() {
  return (
    <>
      <Banner />

      <main className="">
        <section className="sectionDestinos">
          <h2 className="titulosDestinos">
            Os Destinos Mais Procurados
          </h2>
          <p className="infosHomePage">
            Os destinos mais procurados da América Latina você encontra aqui na <strong>Soy Loco Por Ti América</strong>, com roteiros completos, seguros e preparados para encantar viajantes de todos os estilos.
            <br /><br />
            De paisagens naturais imponentes a cidades vibrantes cheias de história, nossos circuitos combinam conforto, 
            cultura e beleza em cada detalhe. Trabalhamos com hospedagens de qualidade, guias locais especializados e 
            experiências inesquecíveis para que você viva o melhor de cada país latino-americano.
          </p>
        </section>
        <section className="cards-destinos">
          <div className="cards-container">
            <div className="card-destino">
              <img src="/patagonia.jpg" alt="Patagônia" />
              <h3>Patagônia</h3>
              <p>
                Cenários deslumbrantes de montanhas, lagos cristalinos e geleiras em um dos lugares mais incríveis da América do Sul.
              </p>
            </div>

            <div className="card-destino">
              <img src="/machu-picchu.jpeg" alt="Machu Picchu" />
              <h3>Machu Picchu</h3>
              <p>
                Uma das Sete Maravilhas do Mundo. Cultura Inca, natureza e espiritualidade em um só lugar.
              </p>
            </div>

            <div className="card-destino">
              <img src="/deserto-atacama.png" alt="Machu Picchu" />
              <h3>Deserto do Atacama</h3>
              <p>
                Uma das Sete Maravilhas do Mundo. Cultura Inca, natureza e espiritualidade em um só lugar.
              </p>
            </div>
          </div>
        </section>

        <div className="especialista">
          <h2 className="tituloEspecialista">Seja um Especialista em Viagens</h2>
          <p className="infosHomePage">Aprenda de forma simples, rápida e de qualquer lugar como se tornar referência no ramo de turismo. Com o apoio da Soy Loco Port Ti América nunca foi tão fácil..</p>
          <div className="infosTravel">
            <img id="imageTravelAcademy" src="/imageTravelAcademy.jpg" alt="travelAcademy" /> 

            <ul className="topicosTravel">
              <li>📍 Acesso a Conteúdos Exclusicos</li>
              <p id="paragrafoTravel">Dicas de roteiros, tendências de turismo e materiais de apoio.</p>
              <li>📍 Atualizações em Tempo Real</li>
              <p id="paragrafoTravel">Novos pacotes, promoções e informações essenciais sempre disponíveis.</p>
              <li>📍 Ferramentas Inteligentes</li>
              <p id="paragrafoTravel">Tudo o que você precisa para oferecer viagens inesquecíveis.</p>
            </ul>
          </div>  
          </div>
          <section className="bannerMad">
            <div className="divBlue">
              <p className="textoBanner">Uma seleção especial com o melhor do turismo.</p>
            </div>
            <div className="divPink"></div>

            {/* Imagem do MAD sobrepondo as divs */}
            <img
              className="madImage"
              src="https://soylocoportiamerica.com.br/wp-content/uploads/2025/02/1024-1024-avatar-mad.webp"
              alt="Consultor MAD"
            />
        </section>
      </main>
    </>
  );
}
