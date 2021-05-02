import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faRocket,
  // faCoins,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faTelegram,
  faTwitter,
  faMedium,
  faGithub,
  faYoutube,
  // faEthereum,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-pattern darkblue ptb-100">
      <div className="container">
        <div className="footer">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-logo pb-25">
                <a href="index.html">
                  <h1>Mod-B</h1>
                </a>
              </div>
              <div className="footer-icon">
                <ul>
                  <li>
                    <a
                      href="https://discord.gg/5Sa83hdasv"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faDiscord} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/joinchat/GNtZD3XJwAgC-2vS"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faTelegram} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/DenexNFT"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://medium.com/@denexnft"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faMedium} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-lg-8 col-md-6">
              <div className="footer-link">
                <ul>
                  <li>
                    <a
                      href="https://denexnft.gitbook.io/denex/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faBook} /> &nbsp; Docs
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/denex-project"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} /> &nbsp; Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCpz0DUlFQelr-nZy0oKx9SA/featured"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faYoutube} /> &nbsp; Youtube
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://denexnft.gitbook.io/denex/our-vision"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faRocket} /> &nbsp; Our Vision
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://denexnft.gitbook.io/denex/project-overview"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faCircleNotch} /> &nbsp; Overview
                    </a>
                  </li>
                  <li>
                    <a href="./#/ToS" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faBook} /> &nbsp; Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>*/}
          </div> 
        </div>
        <div className="copyright">
          <div className="row">
            <div className="col-lg-6">
              <p>© LastBlock Inc all Rights Reserved 2021</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
