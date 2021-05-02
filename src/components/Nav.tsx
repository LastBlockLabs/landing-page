import React from "react";
import { AbstractConnector } from "@web3-react/abstract-connector";

type NavProps = {
  activate: (
    connector: AbstractConnector,
    onError?: (error: Error) => void,
    throwErrors?: boolean
  ) => Promise<void>;
  active: boolean;
};

const Nav = ({ activate, active }: NavProps) => {
  function toTop() {
    window.scrollTo(0, 0);
  }
  return (
    <React.Fragment>
      {/* < div id="preloader" ></div > */}

      <div className="top-scroll transition" onClick={toTop}>
        <i className="fa fa-angle-up" aria-hidden="true"></i>
      </div>

      <header className="transition">
        <div className="container">
          <div className="row flex-align">
            <div className="col-lg-4 col-md-3 col-8">
              <div className="logo">
                <a href="/">
                  <h2>Mod-B</h2>
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-md-9 col-4 text-right">
              <div className="menu-toggle">
                <span></span>
              </div>
              <div className="menu">
                {/* <ul className="d-inline-block">
                  <li>
                    <a
                      href="https://denexnft.gitbook.io/denex/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Docs
                    </a>
                  </li>
                  <li>
                    <a href="/#token">Presale</a>
                  </li>
                </ul> */}
                <div className="signin d-inline-block hide-mobile">
                  {/* <ConnectWallet activate={activate} active={active} /> */}
                  <div className="signin d-inline-block">
                    <a
                      href="https://drive.google.com/drive/folders/1RMi4_XpLoy0nepIXDKCus7TbsWXcB23t"
                      target="_blank"
                      rel="noreferrer"
                    ><button className="btn">Pitch Deck</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Nav;
