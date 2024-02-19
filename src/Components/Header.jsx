import "../Searchbar.css";
function Header() {
  return (
    <div className="mainContainer">
      <div className="vector-header-container">
        <header className="vector-header mw-header">
          <header class="wiki-header">
            <div class="topnav">
              <a href="#" class="wiki-logo">
                <img
                  class="mw-logo-icon"
                  src="images/wikipedia.png"
                  alt=""
                  aria-hidden="true"
                  height="50"
                  width="50"
                />
                <span class="wiki-logo-container">
                  <img alt="Wikipedia" src="images/wikipedia-wordmark-en.svg" />
                  <img
                    alt="The Free Encyclopedia"
                    src="images/wikipedia-tagline-en.svg"
                    width="117"
                    height="13"
                  />
                </span>
              </a>

              <div class="search-container">
                <form>
                  <input
                    type="text"
                    placeholder="Search Wikipedia"
                    name="search"
                  />
                  <button type="submit">Search</button>
                </form>
              </div>

              <div class="right-cl">
                <ul class="right-cl-ul">
                  <li>
                    <a href="#">
                      <span>Create account</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Log in</span>
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </header>
        </header>
      </div>
    </div>
  );
}
export default Header;
