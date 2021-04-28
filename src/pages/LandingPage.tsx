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
                  The Decentralized NFT Exchange
                </h1>
                <p className="banner-des">
                  Bringing the philosophy of Uniswap to the NFT space
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
                <h2 className="heading-title">How it Works</h2>
                <p className="heading-des">
                  Our platform lets anyone buy or sell any NFT for any ERC20
                  token on the Ethereum Network using our smart contracts.
                  Whether you are buying art, collectibles, or in-game items,
                  the transaction will be peer to peer, secure, transparent, and
                  censorship resistent.
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
                  <div className="feature-title pb-15">Compatibility</div>
                  <p className="feature-des">
                    Our contracts let you trade your ERC-721 and ERC-1155 NFTs
                    for any ERC-20 Token. This gives sellers the flexibility to
                    list speculatively, or boost the use of social tokens.
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
                    Non-Locking Contracts
                  </div>
                  <p className="feature-des">
                    No Locking Requirements - NFTs never need to be locked into
                    the listing contract. Instead, keep NFTs safe in your wallet
                    until the purchase is complete.
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
                  <div className="feature-title pb-15">Liquidity Mining</div>
                  <p className="feature-des">
                    Make an immediate return on investment by staking your DNX
                    tokens for rewards. Paid out on a regular basis, and
                    redeemable straight to your wallet.
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
                <h2 className="heading-title">Next Steps</h2>
                <p className="heading-des">
                  Denex raised over 500 Eth through the massive support from the
                  community. Since then, we've returned 100% of this to each
                  investor but saw this support as validation to keep working on
                  this project. We're working in the backgrounds to launch this
                  properly. Stay tooned!
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
                      <div className="date-title">Q1 2021</div>
                      <div className="map-graphic">
                        <div className="small-round">
                          <span></span>
                        </div>
                        <div className="v-row"></div>
                      </div>
                      <div className="roadmap-detail-box">
                        <p>Token Pre-Sale & Development</p>
                      </div>
                    </div>
                  </div>
                  <div className="roadmap wow fadeInLeft">
                    <div className="roadmap-box text-center">
                      <div className="date-title">Q2 2021</div>
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
                      <div className="date-title">Q3 2021</div>
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
                      <div className="date-title">Q4 2021</div>
                      <div className="map-graphic">
                        <div className="small-round">
                          <span></span>
                        </div>
                        <div className="v-row"></div>
                      </div>
                      <div className="roadmap-detail-box">
                        <p>v2.0 Testnet Launch</p>
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
