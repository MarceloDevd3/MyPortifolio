import React from "react";
import banner from '../assets/img/banner.png';
export default function Hero(props) {
    return (
        <section class="Home">
        <div class="banner-img">
            <img src={banner} alt="banner" id="banner--img"/ >
        </div>
        <div className="info">
        <h1 className={props.darkMode ? "hero-title dark" : "hero-title"}>Olá amigo(a), meu nome e Italo Marcelo</h1>
        <p className={props.darkMode ? "about-me dark" : "about-me"}> Desenvolvedor Frontend, Meu foco e tornar suas ideias e projetos em realidade atraves de codigos uso bastante React. </p>
        <div className="btn-row">
        <button className=" btn-item btn-orange">About me</button>
        <button className="btn-item btn-gray">downloand CV</button>
        </div>
        </div>
      </section>
    )
}