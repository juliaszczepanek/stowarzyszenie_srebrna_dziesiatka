import React, {useEffect, useRef} from 'react';
import { useLocation } from "react-router-dom";
import LogoTicker from "../UI/LogoTicker"; 
import GroupsIcon from '@mui/icons-material/Groups';
import Filter3Icon from '@mui/icons-material/Filter3';

import DirectionsRun from '@mui/icons-material/DirectionsRun';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


export default function Home() {
  const aboutRef = useRef(null);
  const { hash } = useLocation();


  useEffect(() => {
    if (hash === "#about-us" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
   <div className='home'>
        <div className='home__header'>
            <h1 className='home__heading heading heading--1'>Biegaj z nami w Olkuszu</h1>
            <h3 className='home__subheading heading heading--2'>Twoje tempo, nasza pasja – spotkajmy się na trasie!</h3>
        </div>
        <LogoTicker />
        <section className='race'>
          <h1 className='race__header heading heading--1'>VIII Srebrna Dziesiątka</h1>
          <h2 className='race__header--sub heading heading--2'>Bieg Uliczny</h2>
          <div className='race__content'>
          <div className="race__text">
            <p className= "race__paragraph">
              <strong>6&nbsp;września&nbsp;2025&nbsp;r.</strong> widzimy się na
              <strong> VIII Srebrnej Dziesiątce</strong> – biegu, który od 2016 r.
                integruje amatorów i profesjonalistów z całego regionu.
                Zapisz się już dziś przez&nbsp;
            <a
              href="/registration"
              target="_blank"
              rel="noreferrer"
              className="race__link"
            >elektronicznezapisy.pl
            </a>{" "}lub sprawdź szczegóły na&nbsp;
            <a
              href="https://www.facebook.com/events/939887468224718"
              target="_blank"
              rel="noreferrer"
              className="race__link"
            >stronie wydarzenia
            </a>.
            </p>

            <ul className="race__distances">
              <li><span className="badge badge--red">10&nbsp;km</span> - Bieg główny</li>
              <li><span className="badge badge--yellow">5&nbsp;km</span> - Bieg rekreacyjny</li>
              <li><span className="badge badge--green">5&nbsp;km</span> - Nordic Walking</li>
            </ul>
          </div>
          <div className="race__images">
            <img className="race__img race__img--2" src="/race_img-2.jpg" />
            <img className="race__img race__img--1" src="/race_img-1.jpg" />
          </div>
        </div>
        </section>
        <div className='numbers'>
          <h1 className='numbers__heading heading heading--1'>Dlaczego warto z nami biegać?</h1>
          <div className='numbers__content'>
            <div className='numbers__box numbers__box--1'> 
              <span className="numbers__icon numbers__icon--blue">
                 <DirectionsRun fontSize="inherit" />
              </span>
              <div className= "numbers__box-text">
                <h1 className='numbers__number heading heading--1'>16</h1>
                <p className='heading heading--sub'>zorganizowanych biegów</p>
              </div>
            </div>
            <div className='numbers__box numbers__box--2'>
              <span className="numbers__icon numbers__icon--green">
               <GroupsIcon fontSize="inherit" />
              </span>
              <div className= "numbers__box-text">
                <h1 className='numbers__number heading heading--1'>4000+</h1>
                <p className='heading heading--sub'>uczestników biegów</p>
              </div>
            </div>
            <div className='numbers__box numbers__box--3'> 
              <span className="numbers__icon numbers__icon--red">
               <CalendarMonthIcon fontSize="inherit" />
              </span>
            <div className= "numbers__box-text"> 
              <h1 className='numbers__number heading heading--1'>9</h1>
              <p className='heading heading--sub'>lat działalności</p>
            </div>
          </div>
            <div className='numbers__box numbers__box--4'>
               <span className="numbers__icon numbers__icon--yellow">
                <Filter3Icon fontSize="inherit" />
               </span>
               <div className= "numbers__box-text">
                <h1 className='numbers__number heading heading--1'>3</h1>
                <p className='heading heading--sub'>kategorie biegowe</p>
                </div>
              </div>
          </div>
        </div>
        
        <section className='about-us' id="about-us"         
        ref={aboutRef}          
       >
          <h2 className='about-us__heading heading heading--2'>O nas</h2>
          <article className='about-us__article'>
            <p className='about-us__paragraph'> <strong>Stowarzyszenie Srebrna Dziesiątka</strong> powstało w marcu 2025 roku z myślą o biegaczach i pasjonatach aktywnego trybu życia. Naszym celem jest szerzenie kultury biegania oraz promowanie zdrowego stylu życia wśród mieszkańców Olkusza i okolic.
Organizujemy wydarzenia sportowe od 2016 roku, w tym coroczny bieg <strong>Olkuska Srebrna Dziesiątka</strong>, który stał się symbolem sportowej społeczności naszego miasta. Stawiamy na integrację biegaczy na każdym poziomie zaawansowania — od początkujących po doświadczonych zawodników.
Wierzymy, że bieganie to nie tylko sport, ale także sposób na budowanie relacji, pokonywanie własnych barier i czerpanie radości z ruchu na świeżym powietrzu. Zapraszamy wszystkich chętnych do wspólnego działania i rozwijania pasji do biegania razem z nami!
</p>
          </article>
          <div></div>
        </section>

        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.7/gsap.min.js" integrity="sha512-f6bQMg6nkSRw/xfHw5BCbISe/dJjXrVGfz9BSDwhZtiErHwk7ifbmBEtF9vFW8UNIQPhV2uEFVyI/UHob9r7Cw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.7/ScrollTrigger.min.js" integrity="sha512-AcqPGqrrAEtEwe+ADO5R8RbdFi7tuU7b/A2cJJH0Im0D18NRk5p5s4B3E5PMuO81KFw0ClN7J5SHVUJz7KOb0A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://unpkg.com/split-type"></script>
   </div>
  
  )
}

