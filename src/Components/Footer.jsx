import "../Content.css";
function Footer() {
  return (
    <div className="mw-footer-container">
      <footer id="footer" className="mw-footer" role="contentinfo">
        <ul id="footer-info">
          <li id="footer-info-lastmod">
            {" "}
            This page was last edited on 8 August 2023, at 02:45
            <span className="anonymous-show">&#160;(UTC)</span>.
          </li>
          <li id="footer-info-copyright">
            Text is available under the{" "}
            <a rel="license" href="#">
              Creative Commons Attribution-ShareAlike License 4.0
            </a>
            <a rel="license" href="#" style={{ display: "none" }}></a>;
            additional terms may apply. By using this site, you agree to the{" "}
            <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
            Wikipedia® is a registered trademark of the{" "}
            <a href="#">Wikimedia Foundation, Inc.</a>, a non-profit
            organization.
          </li>
        </ul>

        <ul id="footer-places">
          <li id="footer-places-privacy">
            <a href="#y">Privacy policy</a>
          </li>
          <li id="footer-places-about">
            <a href="#">About Wikipedia</a>
          </li>
          <li id="footer-places-disclaimers">
            <a href="#">Disclaimers</a>
          </li>
          <li id="footer-places-contact">
            <a href="#">Contact Wikipedia</a>
          </li>
          <li id="footer-places-wm-codeofconduct">
            <a href="#">Code of Conduct</a>
          </li>
          <li id="footer-places-developers">
            <a href="#">Developers</a>
          </li>
          <li id="footer-places-statslink">
            <a href="#">Statistics</a>
          </li>
          <li id="footer-places-cookiestatement">
            <a href="#">Cookie statement</a>
          </li>
          <li id="footer-places-mobileview">
            <a href="#" className="noprint stopMobileRedirectToggle">
              Mobile view
            </a>
          </li>
        </ul>

        <ul id="footer-icons" className="noprint">
          <li id="footer-copyrightico">
            <a href="#">
              <img
                src="/static/images/footer/wikimedia-button.png"
                srcSet="\src\imgs\wikimedia-button.png"
                width="88"
                height="31"
                alt="Wikimedia Foundation"
                loading="lazy"
              />
            </a>
          </li>
          <li id="footer-poweredbyico">
            <a href="https://www.mediawiki.org/">
              <img
                src="/static/images/footer/poweredby_mediawiki_88x31.png"
                alt="Powered by MediaWiki"
                srcSet="\src\imgs\poweredby_mediawiki_88x31.png"
                width="88"
                height="31"
                loading="lazy"
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
export default Footer;
