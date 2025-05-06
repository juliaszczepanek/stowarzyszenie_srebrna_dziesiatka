import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer__main">

        <div className="footer__left">
          <img
            src="logo-white.png"
            alt="Logo Stowarzyszenia"
            className="footer__logo"
          />
          <div className="footer__left-box">
            <PhoneInTalkIcon sx={{ color: "white" }} />
            <p className="footer__text">+48 733 300 305</p>
          </div>
          <div className="footer__left-box">
            <EmailIcon sx={{ color: "white" }} />
            <a
              href="mailto:stowarzyszeniesrebrna10@gmail.com"
              className="footer__text"
            >
              stowarzyszeniesrebrna10@gmail.com
            </a>
          </div>
          <div className="footer__left-box">
            <LocationOnIcon sx={{ color: "white" }} />
            <a href="https://www.google.pl/maps/place/Elizy+Orzeszkowej+14%2F17,+32-300+Olkusz/@50.2666647,19.5624239,17z/data=!3m1!4b1!4m5!3m4!1s0x4716e483f5c65a21:0x42213717697cd85c!8m2!3d50.2666647!4d19.5649988?entry=ttu&g_ep=EgoyMDI1MDQzMC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" target="_blank" rel="noreferrer" className="footer__text">Olkusz, 32-300 ul. Orzeszkowej 14/17</a>
          </div>
        </div>

        
        <div className="footer__center">
          <ul className="footer__nav-list">
            <li>
              <a className="footer__nav-link" href="/home/#about-us">
                O nas
              </a>
            </li>
            <li>
              <a className="footer__nav-link" href="/runs">
                Biegi
              </a>
            </li>
            <li>
              <a className="footer__nav-link" href="/news">
                Aktualności
              </a>
            </li>
            <li>
              <a className="footer__nav-link" href="/registration">
                Zapisy
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__right">
          <h3 className="footer__heading">Znajdź nas</h3>
          <div className="footer__social">
            <a href="https://www.facebook.com/profile.php?id=61575601856285" target="_blank" rel="noreferrer">
              <FacebookRoundedIcon sx={{ color: "white", fontSize: 30 }} />
            </a>
            <a href="https://www.instagram.com/ssd102025/" target="_blank" rel="noreferrer">
              <InstagramIcon sx={{ color: "white", fontSize: 30 }} />
            </a>
          </div>
        </div>
      </section>


      <section className="footer__copyright">
        <hr className="footer__divider" />
        <p className="footer__copyright--text">
          © 2025 by Julia Szczepanek
        </p>
      </section>
    </footer>
  );
}
