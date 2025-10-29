// src/components/Welcome.tsx
import React from 'react';
import './welcome.css';

const Welcome = () => {
    return (
        <section className="welcome">
            <h2>Bem-vindo(a) ao Retro Movies 🎬</h2>

            <p>
                Este projeto foi desenvolvido como parte do meu portfólio pessoal, com o objetivo de demonstrar 
                minhas habilidades em <strong>desenvolvimento frontend</strong> e integração com APIs externas.
                A aplicação consome dados de uma API de filmes por meio de um backend intermediário, garantindo 
                segurança das chaves e evitando problemas com políticas de CORS.
            </p>

            <p>
                O foco principal deste projeto é oferecer uma interface moderna com um visual <strong>retrô neon</strong>, 
                inspirada nos estilos dos anos 80, enquanto aplico conceitos de <strong>componentização</strong>, 
                <strong>hooks</strong> e <strong>boas práticas em React</strong>.
            </p>

            <p>
                Fique à vontade para explorar, deixar um feedback e acompanhar minha evolução como desenvolvedor! 🚀
            </p>

            <div className="welcome-links">
                <a 
                    href="https://github.com/PedroOliveiraWish" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="neon-button github"
                >
                    <i className="fa-brands fa-github"></i> GitHub
                </a>

                <a 
                    href="https://www.linkedin.com/in/pedro-oliveira-webdeveloper/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="neon-button linkedin"
                >
                    <i className="fa-brands fa-linkedin"></i> LinkedIn
                </a>
            </div>
        </section>
    );
};

export default Welcome;
