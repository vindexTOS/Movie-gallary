import React from "react";
import "../../styles/Footer.css";
import { FaGithub, FaYoutubeSquare, FaFacebook } from "react-icons/fa";

export default function Footer({ dark }) {
  return (
    <footer className={!dark ? `dark-footer` : `light-footer`}>
      <div className="line"></div>
      <div className="footer-wrapper">
        <div className="footer-list">
          <ul>
            <li>
              <a href="https://github.com/vindexTOS">
                <FaGithub
                  className={!dark ? `footer-icon` : `footer-icon-dark`}
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/vindexTOS">
                <FaYoutubeSquare
                  style={{ color: "#FF0000" }}
                  className={!dark ? `footer-icon` : `footer-icon-dark`}
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/vindexTOS">
                <FaFacebook
                  style={{ color: "#4267B2" }}
                  className={!dark ? `footer-icon` : `footer-icon-dark`}
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-info">
          <a>Giorgis Production 2022</a>
        </div>
      </div>
      <div className="line"></div>
    </footer>
  );
}
