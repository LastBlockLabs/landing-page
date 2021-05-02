import React from "react";
import { useWeb3React } from "@web3-react/core";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const LandingPage = () => {
  const { activate, active } = useWeb3React();

  return (
    <React.Fragment>
      <Nav activate={activate} active={active} />
      <section className="home-banner parallax" id="banner">
        <div className="container">
          <div className="row mh-banner">
            <div className="col-lg-12 col-md-12 position-u flex-align wow fadeInLeft">
              <div className="banner-contain">
                <h1 className="banner-heading">
                  Decentralized Tools for NFT Creators
                </h1>
                <p className="banner-des">
                  Enabling the next stage of digital commerce
                </p>
                {/* <a href="#" className="btn">Learn more</a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="work-part darkblue ptb-100">
        <div className="container">
          <div className="row mh-heading">
            <div className="col-md-12 flex-align wow fadeInUp">
              <div className="section-heading text-center pb-65">
                <h2 className="heading-title">What is Mod-B</h2>
                <p className="heading-des">
                  Imagine a decentralized Shopify for NFTs. We enable creators to sell any Ethereum NFT for any ERC-20 token through their own website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="feature-part skyblue bg-pattern ptb-100"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 wow fadeInUp">
              <div className="section-heading text-center pb-65">
                {/* <label className="sub-heading">cryptcon Feature</label> */}
                <h2 className="heading-title">Key Features</h2>
                {/* <p className="heading-des"></p> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 wow fadeInUp pb-80">
              <div className="feature-box">
                <div className="feature-icon">
                  <img src="images/feature-1.png" alt="Early Bonus" />
                </div>
                <div className="feature-contain pt-25">
                  <div className="feature-title pb-15">Storefront Integration</div>
                  <p className="feature-des">
                    Sell your NFTs through your own site and own your own branding.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 wow fadeInUp pb-80">
              <div className="feature-box">
                <div className="feature-icon">
                  <img src="images/feature-2.png" alt="Early Bonus" />
                </div>
                <div className="feature-contain pt-25">
                  <div className="feature-title pb-15">
                    Open Source Contracts
                  </div>
                  <p className="feature-des">
                    Fully open, fully decentralized. Never worry about losing control of your brand's future.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 wow fadeInUp pb-80">
              <div className="feature-box">
                <div className="feature-icon">
                  <img src="images/feature-3.png" alt="Univarsal Access" />
                </div>
                <div className="feature-contain pt-25">
                  <div className="feature-title pb-15">All Tokens Allowed</div>
                  <p className="feature-des">
                    Sell any ERC721 & ERC 731 NFTs for any ERC20 tokens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="tokensale-part"
        className="token-sale darkblue parallax ptb-100"
      >
        <div className="container mh-sale">
          <div className="row">
            <div className="col-md-12 flex-align wow fadeInUp">
              <div className="section-heading text-center pb-65">
                <h2 className="heading-title">Our Vision</h2>
                <p className="heading-des">
                  With Denex, we raised over 500 Eth in 2 days which proved the demand for decentralizated NFT exchange.
                  Mod-B builds on top of this ceoncept and gives creators freedom over their brand. 
                  Beyond this, we will continuously unlock features 
                  for NFTs and enable open assets for all.
                </p>
              </div>
            </div>
            {/* <div className="col-lg-6 wow fadeInLeft flex-align">
              <div className="w-100">
                <div className="section-heading pb-20 px-20">
                  <div className="pb-35">
                    <h2 className="heading-title">Tokenomics</h2>
                  </div>
                  <label className="feature-title pb-20">
                    How is DNX distributed?
                  </label>
                  <p className="">
                    We will be conducting a token pre-sale to kickstart our
                    project. This pre-sale will be split into four rounds over 4
                    weeks and will consist of 10% total supply. Our total token
                    distribution breakdown is as follows:
                  </p>
                </div>
                <div className="token-graphic-detail">
                  <ul>
                    <li className="color-code-2">60% Community</li>
                    <li className="color-code-3">20% Team (3 Year Vesting)</li>
                    <li className="color-code-4">20% Company & Partners</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 flex-align justify-center-r">
              <div className="token-graph w-100">
                <div className="donut">
                  <div data-lcolor="#5ad6f8">60.0</div>
                  <div data-lcolor="#f8c04e">20.0</div>
                  <div data-lcolor="#ac56f7">20.0</div>
                </div>
                <div className="graph-logo">
                  <h1>DNX</h1>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className="timeline skyblue bg-pattern ptb-100">
        <div className="container mh-time">
          <div className="row">
            <div className="col-md-12 wow fadeInUp">
              <div className="section-heading text-center pb-65">
                <label className="sub-heading">roadmap</label>
                <h2 className="heading-title">The Timeline</h2>
                {/* <p className="heading-des">Hello</p> */}
              </div>
            </div>
          </div>
          <div className="main-roadmap">
            <div className="row">
              <div className="col-md-12">
                <div className="h-border wow fadeInLeft"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="roadmap-slider owl-carousel">
                  <div className="roadmap wow fadeInLeft">
                    <div className="roadmap-box text-center">
                      <div className="date-title">Early Q2 2021</div>
                      <div className="map-graphic">
                        <div className="small-round">
                          <span></span>
                        </div>
                        <div className="v-row"></div>
                      </div>
                      <div className="roadmap-detail-box">
                        <p>Seed Round & Early Development</p>
                      </div>
                    </div>
                  </div>
                  <div className="roadmap wow fadeInLeft">
                    <div className="roadmap-box text-center">
                      <div className="date-title">Q3 2021</div>
                      <div className="map-graphic">
                        <div className="small-round">
                          <span></span>
                        </div>
                        <div className="v-row"></div>
                      </div>
                      <div className="roadmap-detail-box">
                        <p>Platform TestNet Launch</p>
                      </div>
                    </div>
                  </div>
                  <div className="roadmap wow fadeInLeft">
                    <div className="roadmap-box text-center">
                      <div className="date-title">Q4 2021</div>
                      <div className="map-graphic">
                        <div className="small-round">
                          <span></span>
                        </div>
                        <div className="v-row"></div>
                      </div>
                      <div className="roadmap-detail-box">
                        <p>Mainnet Launch</p>
                      </div>
                    </div>
                  </div>
                  <div className="roadmap wow fadeInLeft">
                    <div className="roadmap-box text-center">
                      <div className="date-title">Q1 2022</div>
                      <div className="map-graphic">
                        <div className="small-round">
                          <span></span>
                        </div>
                        <div className="v-row"></div>
                      </div>
                      <div className="roadmap-detail-box">
                        <p>v2.0 Launch & Scaling</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
