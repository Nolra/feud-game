import './style.css';
import { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Slider from 'react-animated-slider';
import horizontal from 'react-animated-slider/build/horizontal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { LightBox } from 'react-lightbox-pack';
import "react-lightbox-pack/dist/index.css";


const content = [
  {
    title: 'Как выжить в Городе Бесов?',
    image: require(`../../images/entry/city-of-demons.png`).default
  },
  {
    title: 'Выбрать безопасный путь',
    image: require(`../../images/entry/good-night.png`).default
  },
  {
    title: 'Установить контакт с потусторонним',
    image: require(`../../images/entry/gypsy-children.png`).default
  },
  {
    title: 'Скрыться в тени',
    image: require(`../../images/final/visitor.png`).default
  },
  {
    title: 'Усвоить традиции',
    image: require(`../../images/main/true-vision.png`).default
  },
  {
    title: 'Уяснить закон',
    image: require(`../../images/main/judgment.png`).default
  },
  {
    title: 'Познать благо',
    image: require(`../../images/main/power-of-music.png`).default
  },

  {
    title: 'Проявить лояльность',
    image: require(`../../images/entry/all-doors-key.png`).default
  },
]

const contentInterface = [
  {
    title: 'screen',
    image: require(`../../images/screen-1.png`).default
  },
  {
    title: 'screen',
    image: require(`../../images/screen-2.png`).default
  },
  {
    title: 'screen',
    image: require(`../../images/screen-3.png`).default
  },
  {
    title: 'screen',
    image: require(`../../images/screen-4.png`).default
  },
  {
    title: 'screen',
    image: require(`../../images/screen-5.png`).default
  },
  {
    title: 'screen',
    image: require(`../../images/screen-6.png`).default
  }
]





function PromoLanding() {
  const [toggle, setToggle] = useState(false);
  const [sIndex, setSIndex] = useState(0);
  // Handler
  const lightBoxHandler  = (state, sIndex) => {
    setToggle(state);
    setSIndex(sIndex);
  };


  return (
    <div className='promo-landing'>
      <section className='promo'>
        <img className='promo__img' src={require(`../../images/cover.jpg`).default} alt='Feud' />
        <ul className='promo__list'>
          <li className='promo__item'> 
            <Link
                activeClass="active"
                to="aboutUs"
                spy={false}
                smooth={true}
                offset={-40}
                duration={500}
                className='promo__link'
            >Кто мы</Link>   
          </li>
          <li className='promo__item'>       
            <Link
                activeClass="active"
                to="whatIsIt"
                spy={false}
                smooth={true}
                offset={-40}
                duration={500}
                className='promo__link'
            >О чем это</Link>
          </li>
          <li className='promo__item'>
            <Link
                activeClass="active"
                to="about"
                spy={false}
                smooth={true}
                offset={-40}
                duration={500}
                className='promo__link'
            >Об игре</Link>
          </li>
          <li className='promo__item'>
            <Link
                activeClass="active"
                to="footer"
                spy={false}
                smooth={true}
                offset={-40}
                duration={500}
                className='promo__link'
            >Контакты</Link>
          </li>
        </ul>
        <h1 className='promo__title'>Феод</h1>
        <Link
            activeClass="active"
            to="aboutUs"
            spy={false}
            smooth={true}
            offset={-40}
            duration={500}
            className='promo__link'
        ><div className='promo__arrow'></div></Link>
      </section>




      <section className='whatIsIt' id="aboutUs">
          <div className='container'>
              <h2 className='whatIsIt__title'>Кто мы</h2>
              <p className='whatIsIt__descr'>
                Мы – группа независимых художников и активистов из Москвы, Петербурга и Омска. 
                В октябре 2019 года беседы судьбах России завели нас в дебри, в которых родился проект Феод. 
                Мы делали его почти два года и ни разу подробно о нем не рассказывали. 
                Нам кажется, что сейчас самое время. 
              </p>
          </div>
      </section>





      <section className='whatIsIt' id="whatIsIt">
          <div className='container'>
              <h2 className='whatIsIt__title'> О чем это</h2>
              <p className='whatIsIt__descr'>
                Феод  – это междисциплинарный игровой проект, 
                созданный командой из семи человек на абсолютно независимых и некоммерческих 
                основах и посвященный нашему главному источнику вдохновения – современной России 
                и ее хитроумной социальной и политической структуре. 

                <div className='img-slider'>
                  {contentInterface.map((item, index) => (
                    <img
                      key={index}
                      src={item.image}
                      alt={item.title}
                      onClick={() => {
                        lightBoxHandler(true, index);
                      }}
                    />
                  ))}
                </div>
                Игровой - потому, что основа нашего проекта – это серия игровых новелл, 
                а междисциплинарный – потому, что Феод – это не только игра, но и музыка, 
                тексты, видео, и вообще призма восприятия реальности. 
                Как это работает, можно прочитать ниже.
                <br/><br/>
                Феод – это квест, исследующий популярное высказывание, что современная Россия 
                возвращается в “Средневековье”. Такая идея давно существует на уровне мема, 
                который не развивается в полноценную попытку интерпретации реальности. 
                Мы представили, что получится, если всерьез 
                разобрать события последних лет в контексте неофеодализма.
                <br/><br/>
                Два года мы следили за происходящим и коллекционировали истории, 
                которые кажутся нам знаковыми для понимания России как неофеодального государства. 
                В результате оказалось, что современная Россия – не классическая автократия, 
                и не просто тоталитарная страна, а клановая, раздробленная и, может быть, 
                даже полувымышленная сущность, которую нам только предстоит постигнуть. 
                Так появилась эта игра.
              </p>
          </div>
          <div className='people'>
              <img className='people__img' src={require(`../../images/main/pandemonium.png`).default} alt='people' />
          </div>
      </section>
      <section className='about'>
          <div className='container'>
              <h2 className='about__title'>
                  Об игре
              </h2>
              <p className='about__descr'>
                Игра состоит из набора новелл, объединенных общим сеттингом, 
                концепцией и контекстом, но не связанных напрямую сюжетно. 
                Такая структура позволила нам задействовать многих авторов и 
                дать им большую свободу в выборе тем, времени, места и 
                событий для своих текстов. При этом все новеллы исследуют одну 
                и ту же идею российского неофеодализма и в сумме, как мы надеемся, 
                дают взглянуть на “общую картину”.
                <br/><br/>
                В рамках каждой новеллы игрок, двигаясь по сюжету, совершает выборы, 
                которые определяют дальнейшее развитие событий. В финале все, что вы выбираете, 
                обернется против вас. А может и нет. Потому что в Феоде все не то, чем кажется.
              </p>
          </div>
      </section>
      <section className='slider'>
        <Slider 
         className="slider-wrapper"
        >
          {content.map((item, index) => <div key={index}>
            <div 
              className="slider-content"
              style={{ background: `url('${item.image}') no-repeat center center`, 'background-size': 'contain' }}
            >
              <div className="inner">
                <h1>{item.title}</h1>
              </div>
            </div>
          </div>)}
        </Slider>
      </section>  
      <footer className='footer'>
          <div className='container'>
              <div className='footer__horizontalLine'>~~ Примкнуть к нам ~~</div>
              <div className='footer__socials'>
                  <a href='https://www.facebook.com/feudalrussia/'><FontAwesomeIcon icon={faFacebook} /></a>
                  <a href='./' className="feud-link">Ф</a>
                  <a href='https://www.instagram.com/feod_art/'><FontAwesomeIcon icon={faInstagram} /></a>
              </div>
          </div>
      </footer>

      <LightBox
        state={toggle}
        event={lightBoxHandler}
        data={contentInterface}
        imageWidth="60vw"
        imageHeight="80vh"
        thumbnailHeight={30}
        thumbnailWidth={30}
        setImageIndex={setSIndex}
        imageIndex={sIndex}
      />

    </div>
  );
}

export default PromoLanding;
