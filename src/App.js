import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="context">
      <header className="know_SC">
        <nav className="navbar">
          <a href="#" className="nav-logo"><img src="./images/Recurso1.png" alt="TruckFARM_Logo" /></a>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#" className="nav-link expand">INICIO</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link expand">CONTACTO</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link expand">WHITEPAPER</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link expand">WHITELIST</a>
            </li>
            <li className="nav-item register">
              <a href="#" className="nav-link expand">MISTERY BOX</a>
            </li>
          </ul>
          <div className="socialmedia">
            <a href target="_blank"><img src="./images/Recurso2.png" alt="Instagram" className="image one" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><img src="./images/Recurso3.png" alt="Twitter" className="image two" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><img src="./images/Recurso4_1.png" alt="Telegram" className="image three" /></a>
          </div>
        </nav>
        <div className="content_info">
          <h1>
            <span className="jugar">Jugar Ahora!</span>
            <br />
            <span className="email">play@thetruckfarm.com</span>
          </h1>
          <p className="info">
            Bienvenido a Truck City en donde podrás emprender una aventura de
            simulación muy interactiva, serás personificado a través de camiones
            de carga que tú mismo puedes adquirir, con el objetivo de hacer
            entregas que te traerán beneficios con el paso del tiempo.
          </p>
          <div className="button-container">
            <a href="#" className="btn"><span>Read More</span></a>
          </div>
        </div>
        <div id="truck_top">
          <img src="./images/Recurso7.png" alt className="truck_top_img" />
        </div>
        <div className="content-right">
          <svg version={1.0} xmlns="http://www.w3.org/2000/svg" width="527.000000px" height="2805.000000px" viewBox="0 0 527.000000 2805.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,2805.000000) scale(0.100000,-0.100000)" fill="#2b334d" stroke="none">
              <path d="M5098 25388 c-798 -882 -1501 -1816 -2130 -2828 -926 -1490 -1664
  -3101 -2163 -4715 -473 -1533 -729 -3017 -785 -4550 -8 -213 -5 -1035 4 -1115
  2 -19 7 -100 11 -180 6 -138 29 -478 40 -585 78 -771 175 -1348 351 -2085 39
  -163 166 -614 230 -820 80 -253 222 -666 263 -760 6 -14 33 -85 61 -157 75
  -197 223 -543 345 -808 51 -110 271 -550 330 -660 615 -1146 1367 -2194 2283
  -3185 354 -383 997 -1009 1285 -1252 l47 -40 0 11961 c0 6579 -2 11961 -4
  11961 -2 0 -78 -82 -168 -182z" />
            </g>
          </svg>
        </div>
      </header>
      <main>
        <div className="content-center">
          <h2>Fechas Importantes</h2>
          <div className="road">
            <img className="rdz" src="./images/Recurso22.png" alt="Road" />
            <div className="number_sign">
              <span className="six">
                <img src="./images/Recurso11.png" alt="numero_6" /></span>
              <span className="five">
                <img src="./images/Recurso13.png" alt="numero_5" /></span>
              <span className="four">
                <img src="./images/Recurso17.png" alt="numero_4" /></span>
              <span className="three">
                <img src="./images/Recurso15.png" alt="numero_3" /></span>
              <span className="two">
                <img src="./images/Recurso19.png" alt="numero_3" /></span>
              <span className="one">
                <img src="./images/Recurso21.png" alt="numero_1" /></span>
            </div>
            <div className="number_info">
              <span className="seis"><img src="./images/Recurso10.png" alt="number_6" /></span>
              <span className="cinco"><img src="./images/Recurso12.png" alt="number_5" /></span>
              <span className="cuatro"><img src="./images/Recurso16.png" alt="number_4" /></span>
              <span className="tres"><img src="./images/Recurso14.png" alt="number_3" /></span>
              <span className="dos"><img src="./images/Recurso18.png" alt="number_2" /></span>
              <span className="uno"><img src="./images/Recurso20_1.png" alt="number_1" /></span>
            </div>
          </div>
          <div className="many">
            <div className="sil" />
            <div className="presale">
              <p className="p">
                Get your TTF in the Game,
                Contract:0x974eae248930a0137ec39d6823a86c2d86d52006
              </p>
              <h2>
                Presale three tff <br />
                Token 0.3 Busd
              </h2>
              <p className="j">
                Get your TTF in the Game, click on TFF coin below, pre-sale will
                be at 23:00 UTC
              </p>
            </div>
            <div className="timer" />
            <div className="coin">
              <a href="#"><img src="./images/Recurso26.png" alt="Coin" /></a>
            </div>
            <div className="cobres">
              <div className="heading">
                <h1>
                  <span id="h1">Cofres</span> <br />
                  <span className="o">En The Truck Farm, existen tres tipos de cofres:</span>
                </h1>
              </div>
              <section className="section">
                <div className="column">
                  <figure className="imag">
                    <img src="./images/Recurso28.png" />
                  </figure>
                  <h3>Cofre De Plata</h3>
                  <p>
                    50% Garage poco común y Camión poco común <br />
                    50% Garage raro y Camión raro
                  </p>
                  <a href="#" className="funfhun"><img src="./images/Recurso29.png" alt={150} /></a>
                </div>
                <div className="column">
                  <figure className="imag">
                    <img src="./images/Recurso30.png" />
                  </figure>
                  <h3>Cofre De Oro</h3>
                  <p>
                    50% Garage Raro y Camión Raro <br />
                    50% Garage Mítico y Camión Mítico
                  </p>
                  <a href="#" className="funfhun"><img src="./images/Recurso31.png" alt={250} /></a>
                </div>
                <div className="column">
                  <figure className="imag">
                    <img src="./images/Recurso32.png" />
                  </figure>
                  <h3>Cofre De Diamante</h3>
                  <p>
                    50% Garage Mítico y Camión Mítico <br />
                    50% Garage Legendario y Camión Legendario
                  </p>
                  <a href="#" className="funfhun"><img src="./images/Recurso33.png" alt={350} /></a>
                </div>
              </section>
            </div>
            <div className="sil2" />
          </div>
          <div className="many_2">
            <div className="curve" />
            <div className="truck_Content">
              <h2>
                Tipo De <br />
                Camiones
              </h2>
              <p>
                Existen varios tipos de camiones, que según su tipo de <br />
                rareza, dan una mayor seguridad en la recompensa <br />
                por cada viaje realizado. Dependiendo de la rareza del <br />
                NFT mayor será el porcentaje de un viaje seguro. Estos <br />
                tipos de rarezas son:
              </p>
              <img className="meep" src="./images/Recurso35.png" alt="purplebakcground" />
              <img className="meeps" src="./images/Recurso36.png" alt="purplebakcground" />
            </div>
            <section className="sections">
              <div className="columnso">
                <figure className="imags">
                  <img src="./images/Recurso37.png" />
                </figure>
                <h3>Comunes</h3>
                <p>
                  50% de probabilidad de avería en el <br />
                  viaje
                </p>
              </div>
              <div className="columnso">
                <figure className="imags">
                  <img src="./images/Recurso38.png" />
                </figure>
                <h3>Poco Comunes</h3>
                <p>
                  40% de probabilidad de avería en el <br />
                  viaje
                </p>
                <a href="#" className="funfhun"><img src="./images/Recurso39.png" alt={250} /></a>
              </div>
              <div className="columnso">
                <figure className="imags">
                  <img src="./images/Recurso40.png" />
                </figure>
                <h3>Raras</h3>
                <p>
                  30% de probabilidad de avería en el <br />
                  viaje
                </p>
                <a href="#" className="funfhun"><img src="./images/Recurso41.png" alt={350} /></a>
              </div>
              <div className="columnso bottom">
                <figure className="imags">
                  <img src="./images/Recurso42.png" />
                </figure>
                <h3>Míticas</h3>
                <p>
                  20% de probabilidad de avería en el <br />
                  viaje
                </p>
                <a href="#" className="funfhun"><img src="./images/Recurso43.png" alt={350} /></a>
              </div>
              <div className="columnso left">
                <figure className="imags">
                  <img src="./images/camion-legendario.svg" />
                </figure>
                <h3>Legendaria</h3>
                <p>
                  10% de probabilidad de avería en el <br />
                  viaje
                </p>
                <a href="#" className="funfhun"><img src="./images/Recurso45.png" alt={350} /></a>
              </div>
            </section>
          </div>
          <div className="tff_road">
            <div className="map_tff" />
            <h2>TFF Road Map</h2>
            <section className="zection">
              <div className="column vier_s">
                <img className="m-l" src="./images/Recurso48.png" alt={150} />
                <figure className="imag">
                  <img className="m-one" src="./images/Recurso23_1.png" />
                </figure>
                <div className="checks-l">
                  <span className="one">
                    <img src="./images/Recurso51.png" alt="CheckMark" />
                    <p>Creacion del token TFF</p>
                  </span>
                  <span className="two">
                    <img src="./images/Recurso51.png" alt="CheckMark" />
                    <p>Whitepaper</p>
                  </span>
                  <span className="three">
                    <img src="./images/Recurso51.png" alt="CheckMark" />
                    <p>Redes Sociales</p>
                  </span>
                  <span className="four"><img src="./images/Recurso51.png" alt="CheckMark" />
                    <p>Pagina Web</p></span>
                  <span className="five">
                    <img src="./images/Recurso52.png" alt="CheckMark" />
                    <p>Air Drops de token NFT</p>
                  </span>
                  <span className="six">
                    <img src="./images/Recurso52.png" alt="CheckMark" />
                    <p>Marketing Agressivo</p>
                  </span>
                  <span className="seven">
                    <img src="./images/Recurso52.png" alt="CheckMark" />
                    <p>Primera Prevente De Tierras</p>
                    <span className="eight">
                      <img src="./images/Recurso52.png" alt="CheckMark" />
                      <p>Primera Prevente De Camiones</p>
                    </span>
                    <span className="nine">
                      <img src="./images/Recurso52.png" alt="CheckMark" />
                      <p>Primera Beta Test De TTF</p>
                    </span>
                    <span className="ten">
                      <img src="./images/Recurso52.png" alt="CheckMark" />
                      <p>Segunda Preventa De tierras</p>
                    </span>
                    <span className="eleven">
                      <img src="./images/Recurso52.png" alt="CheckMark" />
                      <p>Segunda Preventa de Camiones</p>
                    </span>
                    <span className="twelve">
                      <img src="./images/Recurso52.png" alt="CheckMark" />
                      <p>Preventa del token NFt</p>
                    </span>
                    <span className="thirteen">
                      <img src="./images/Recurso52.png" alt="CheckMark" />
                      <p>Enlistar el token TTF en pancakeswap</p>
                    </span>
                    <span className="fourteen">
                      <img src="./images/Recurso52.png" alt="CheckMark" />
                      <p>Auditoria</p>
                    </span>
                    <span className="fifteen">
                      <img src="./images/Recurso52.png" alt="CheckMark" />
                      <p>Creacion de smart contracts</p>
                    </span>
                    <span className="sixteen">
                      <img src="./images/Recurso52.png" alt="CheckMark" />
                      <p>Gaming V1 de ttf</p>
                    </span><span className="seventeen">
                      <img src="./images/Recurso52.png" alt="CheckMark" />
                      <p>Aperaturda del market</p>
                    </span>
                    <span className="eighteen">
                      <img src="./images/Recurso52.png" alt="CheckMark" />
                      <p>beta Cerrado del modo pvp</p>
                    </span>
                    <span className="nineteen">
                      <img src="./images/Recurso52.png" alt="CheckMark" />
                      <p>creacion de app ttf</p>
                    </span>
                    <span className="twenty">
                      <img src="./images/Recurso52.png" alt="CheckMark" />
                      <p>modo pvp de ttf</p>
                    </span>
                  </span></div>
              </div>
              <div className="column funf_s">
                <img className="m-c" src="./images/Recurso49.png" alt={250} />
                <figure className="imag">
                  <img className="m-two" src="./images/Recurso23_2.png" />
                </figure>
              </div>
              <div className="column sechs_">
                <img className="m-r" src="./images/Recurso50.png" alt={350} />
                <figure className="imag">
                  <img className="m-three" src="./images/Recurso23_1.png" />
                </figure>
                <div className="checks-r" />
              </div>
            </section>
          </div>
          <div className="conviertete">
            <div className="curvesboi" />
            <img className="back" src="./images/Recurso53.png" alt="back" />
            <img className="front" src="./images/Recurso54.png" alt="front" />
            <h2>¡Conviertete en <br /> Un Exitoso <br />empresario de <br /> los camiones!</h2>
            <p>Viaja a través de toda Ameurosia realizando encomiendas, <br /> viajes y entregas. ¡Gana prestigio y éxito, <br />
              ocupa más rutas y viajes y convierte tu negocio de <br />
              camiones en el más próspero!</p>
            <a href="#"><img src="./images/Recurso56.png" alt /></a>
          </div>
          <div className="quees">
            <div className="backg" />
            <h2>Que Es the <br /> truck Farm ?</h2>
            <p>The Truck Farm es un juego de simulación de camiones que aprovecha la <br />
              tecnología blockchain. Esto significa, que además de asegurarte un rato de <br />
              diversión, podrás generar dinero mientras juegas
              <br />
              <br />
              En este juego tomarás el papel de un empresario en un país llamado <br />
              Ameurosia, un país como cualquier otro, común y corriente, la diferencia <br />
              es que acá todo tipo de acción es bajo la necesidad de las entregas, viajes <br />
              y/o encomiendas.
            </p>
            <img src="./images/Recurso57.png" alt="meepmeep" />
            <p className="centro"> El negocio número uno serán los camiones, debes hacerte con un camión para poder cubrir la cantidad de pedidos existentes, acá hay todo <br />
              tipo de camiones con el que puedes soñar y todo lo relacionado con ellos. Podrás trabajar para ir creciendo, ocupando más rutas, teniendo <br />
              más éxito en cada viaje y así cada más ir convirtiéndote en un exitoso empresario de las encomiendas</p>
            <div className="columnz left">
              <figure className="imagez">
                <img src="./images/Recurso58.png" />
              </figure>
            </div>
            <div className="columnz middle">
              <figure className="imagez">
                <img src="./images/Recurso59.png" />
              </figure>
            </div>
            <div className="columnz right">
              <figure className="imagez">
                <img src="./images/Recurso60.png" />
              </figure>
            </div>
            <p className="bottom">Tenemos como meta poder mezclar a la perfección un juego simulador divertido más la <br />
              modalidad de juego play to earn que nos facilita la tecnología blockchain. De esta manera podremos contribuir de forma real a las economías <br /> más pequeñas y garantizar una nueva entrada de dinero para quienes lo necesitan en estos tiempos tan difíciles, por ende los <br />
              dispositivos móviles son nuestro objetivo, ya que hoy en día casi todos poseen un teléfono y mediante este podrán generar un ingreso <br />
              extra para aportar en su día a día</p>
          </div>
          <div className="choose">
            <h1>Elige Uno de nuestros <br />Camiones para jugar</h1>
            <div className="back" />
            <div className="bottom" />
            <img src="./images/Recurso62.png" alt="People" />
            <div className="terrenos">
              <h2>Tipos De Terreno</h2>
              <div className="t_com">
                <h3>Terreno Comun</h3>
                <p>Solo tendrá 2 carreteras para viajar y 2 espacios <br />
                  para NFT con 1 espacio para desbloquear.</p>
                <img src="./images/Recurso63.png" alt="arrow" />
                <figure>
                  <img src="./images/Recurso65.png" alt />
                </figure>
              </div>
              <div className="t_com-2">
                <h3>Terreno Poco Comun</h3>
                <p>Solo tendrá 3 carreteras para viajar y 4 espacio <br />
                  para NFT con 1 espacio para desbloquear.</p>
                <img src="./images/Recurso64.png" alt="arrow" />
                <figure>
                  <img src="./images/Recurso66.png" alt />
                </figure>
              </div>
              <div className="t_com-3">
                <h3>Terreno Raro</h3>
                <p>Solo tendrá 4 carreteras para viajar y 5 espacios <br />
                  para NFT con 2 espacios para desbloquear.</p>
                <img src="./images/Recurso63.png" alt="arrow" />
                <figure>
                  <img src="./images/Recurso67.png" alt />
                </figure>
              </div>
              <div className="t_com-4">
                <h3>Terreno Mitico</h3>
                <p>Solo tendrá 5 carreteras para viajar y 6 espacios <br />
                  para NFT con 2 espacios para desbloquear.</p>
                <img src="./images/Recurso64.png" alt="arrow" />
                <figure>
                  <img src="./images/Recurso68.png" alt />
                </figure>
              </div>
              <div className="t_com-5">
                <h3>Terreno Legendario</h3>
                <p>Solo tendrá 6 carreteras para viajar y 7 espacios <br />
                  para NFT con 2 espacios para desbloquear.</p>
                <img src="./images/Recurso63.png" alt="arrow" />
                <figure>
                  <img src="./images/Recurso69.png" alt />
                </figure>
              </div>
            </div>
          </div>
          <div className="arma">
            <div className="back" />
            <div className="curves" />
            <h2>Arma Tu Propio NFT</h2>
            <p>Podrás conseguir un NFT desde la modalidad free to play, pero necesitarás recolectar una serie de <br />
              piezas a lo largo del juego para así conseguirlo. Estás piezas son:</p>
          </div>
          <div className="parts-1">
            <section className="zection">
              <span className="one">
                <img src="./images/Recurso70.png" alt="CheckMark" />
                <p>Systema de frenos</p>
              </span>
              <span className="two">
                <img src="./images/Recurso71.png" alt="CheckMark" />
                <p>Caja de cambios</p>
              </span>
              <span className="three">
                <img src="./images/Recurso72.png" alt="CheckMark" />
                <p>Capot</p>
              </span>
              <span className="four"><img src="./images/Recurso73.png" alt="CheckMark" />
                <p>Llantas</p></span>
              <span className="five">
                <img src="./images/Recurso74.png" alt="CheckMark" />
                <p>Remolque</p>
              </span>
              <span className="six">
                <img src="./images/Recurso75.png" alt="CheckMark" />
                <p>Sistema electrico</p>
              </span>
            </section>
          </div>
          <div className="parts-2">
            <div className="back" />
            <img src="./images/Recurso76.png" alt="coin" />
            <h1>Marketplace</h1>
            <p>Dentro del mercado podrás cambiar, prestar, regalar, vender y alquilar tus camiones, las piezas para <br />
              armar un camión y refacciones también las podrás vender y/o regalar dentro del mercado. Todas estás <br />
              transacciones tendrán un % de mínimo no impuesto y dicho porcentaje podrá ser incrementado o <br />
              reducido para equilibrar la economía</p>
          </div>
          <div className="parts-3">
            <div className="back" />
            <img src="./images/Recurso77.png" alt="LogoRed" />
            <div className="socialmedia">
              <a href="#"><img className="twitter" src="./images/Recurso81.png" alt="Twitter" /></a>
              <a href="#"><img className="instagram" src="./images/Recurso82.png" alt="Instagram" /></a>
              <a href="#"><img className="telegram" src="./images/Recurso83.png" alt="Telegram" /></a>
            </div>
            <div className="ban">
              <a href="#"> <img src="./images/Recurso84.png" alt="banner" /> </a>
            </div>
            <div className="go">
              <img src="./images/Recurso85.png" alt="go" />
            </div>
            <h3>© 2021 The Truck Farm. Todos los derechos reservados.</h3>
          </div>
        </div>
        <div className="cloudz">
          <span className="cloud-one">
            <svg className="clouds eins" version={1.0} xmlns="http://www.w3.org/2000/svg" width="715.000000px" height="310.000000px" viewBox="0 0 715.000000 310.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,310.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                <path d="M3335 3091 c-11 -5 -50 -11 -88 -15 -92 -9 -279 -57 -393 -102 -555
    -215 -973 -684 -1119 -1254 -32 -123 -46 -226 -51 -365 -3 -77 -8 -146 -10
    -154 -3 -9 -14 0 -33 25 -95 129 -299 258 -483 306 -119 31 -328 31 -448 -1
    -292 -77 -542 -303 -638 -577 -53 -149 -68 -336 -38 -468 45 -191 199 -367
    384 -436 140 -53 -18 -50 3139 -50 2097 0 2953 3 3005 11 88 13 197 49 264 85
    27 15 83 62 126 105 59 60 85 95 116 160 22 46 45 107 50 134 31 150 22 422
    -18 594 -110 467 -469 822 -930 918 -117 24 -353 24 -470 0 -137 -29 -285 -86
    -381 -147 -25 -17 -50 -30 -56 -30 -5 0 -17 26 -27 58 -26 84 -127 285 -191
    381 -290 434 -745 729 -1235 802 -41 6 -92 14 -112 19 -49 10 -337 11 -363 1z" />
              </g>
            </svg>
          </span>
          <span className="cloud-two">
            <svg className="clouds zwei" version={1.0} xmlns="http://www.w3.org/2000/svg" width="715.000000px" height="310.000000px" viewBox="0 0 715.000000 310.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,310.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                <path d="M3335 3091 c-11 -5 -50 -11 -88 -15 -92 -9 -279 -57 -393 -102 -555
    -215 -973 -684 -1119 -1254 -32 -123 -46 -226 -51 -365 -3 -77 -8 -146 -10
    -154 -3 -9 -14 0 -33 25 -95 129 -299 258 -483 306 -119 31 -328 31 -448 -1
    -292 -77 -542 -303 -638 -577 -53 -149 -68 -336 -38 -468 45 -191 199 -367
    384 -436 140 -53 -18 -50 3139 -50 2097 0 2953 3 3005 11 88 13 197 49 264 85
    27 15 83 62 126 105 59 60 85 95 116 160 22 46 45 107 50 134 31 150 22 422
    -18 594 -110 467 -469 822 -930 918 -117 24 -353 24 -470 0 -137 -29 -285 -86
    -381 -147 -25 -17 -50 -30 -56 -30 -5 0 -17 26 -27 58 -26 84 -127 285 -191
    381 -290 434 -745 729 -1235 802 -41 6 -92 14 -112 19 -49 10 -337 11 -363 1z" />
              </g>
            </svg>
          </span>
          <span className="cloud-three">
            <svg className="clouds drei" version={1.0} xmlns="http://www.w3.org/2000/svg" width="715.000000px" height="310.000000px" viewBox="0 0 715.000000 310.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,310.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                <path d="M3335 3091 c-11 -5 -50 -11 -88 -15 -92 -9 -279 -57 -393 -102 -555
    -215 -973 -684 -1119 -1254 -32 -123 -46 -226 -51 -365 -3 -77 -8 -146 -10
    -154 -3 -9 -14 0 -33 25 -95 129 -299 258 -483 306 -119 31 -328 31 -448 -1
    -292 -77 -542 -303 -638 -577 -53 -149 -68 -336 -38 -468 45 -191 199 -367
    384 -436 140 -53 -18 -50 3139 -50 2097 0 2953 3 3005 11 88 13 197 49 264 85
    27 15 83 62 126 105 59 60 85 95 116 160 22 46 45 107 50 134 31 150 22 422
    -18 594 -110 467 -469 822 -930 918 -117 24 -353 24 -470 0 -137 -29 -285 -86
    -381 -147 -25 -17 -50 -30 -56 -30 -5 0 -17 26 -27 58 -26 84 -127 285 -191
    381 -290 434 -745 729 -1235 802 -41 6 -92 14 -112 19 -49 10 -337 11 -363 1z" />
              </g>
            </svg>
          </span>
          <span className="cloud-four">
            <svg className="clouds vier" version={1.0} xmlns="http://www.w3.org/2000/svg" width="715.000000px" height="310.000000px" viewBox="0 0 715.000000 310.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,310.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                <path d="M3335 3091 c-11 -5 -50 -11 -88 -15 -92 -9 -279 -57 -393 -102 -555
    -215 -973 -684 -1119 -1254 -32 -123 -46 -226 -51 -365 -3 -77 -8 -146 -10
    -154 -3 -9 -14 0 -33 25 -95 129 -299 258 -483 306 -119 31 -328 31 -448 -1
    -292 -77 -542 -303 -638 -577 -53 -149 -68 -336 -38 -468 45 -191 199 -367
    384 -436 140 -53 -18 -50 3139 -50 2097 0 2953 3 3005 11 88 13 197 49 264 85
    27 15 83 62 126 105 59 60 85 95 116 160 22 46 45 107 50 134 31 150 22 422
    -18 594 -110 467 -469 822 -930 918 -117 24 -353 24 -470 0 -137 -29 -285 -86
    -381 -147 -25 -17 -50 -30 -56 -30 -5 0 -17 26 -27 58 -26 84 -127 285 -191
    381 -290 434 -745 729 -1235 802 -41 6 -92 14 -112 19 -49 10 -337 11 -363 1z" />
              </g>
            </svg>
          </span>
        </div>
      </main>
    </div>
  );
}

export default App;
