import "../Content.css";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
function Contents() {
  return (
    <div className="mainContainer">
      <div className="mw-page-container">
        <div className="mw-page-container-inner">
          <Sidebar />
          <div className="mw-content-container">
            <main className="mw-body">
              <header className="mw-body-header vector-page-titlebar">
                <nav
                  role="navigation"
                  aria-label="Contents"
                  className="vector-toc-landmark"
                >
                  <div
                    id="vector-page-titlebar-toc"
                    className="vector-dropdown vector-page-titlebar-toc vector-button-flush-left"
                  >
                    <input
                      type="checkbox"
                      id="vector-page-titlebar-toc-checkbox"
                      role="button"
                      aria-haspopup="true"
                      data-event-name="ui.dropdown-vector-page-titlebar-toc"
                      className="vector-dropdown-checkbox"
                      aria-label="Toggle the table of contents"
                      area-expanded="true"
                    />
                    <label
                      id="vector-page-titlebar-toc-label"
                      htmlFor="vector-page-titlebar-toc-checkbox"
                      className="vector-dropdown-label cdx-button cdx-button--fake-button cdx-button--fake-button--enabled cdx-button--weight-quiet cdx-button--icon-only"
                      aria-hidden="true"
                    >
                      <span className="vector-icon mw-ui-icon-listBullet mw-ui-icon-wikimedia-listBullet"></span>
                      <span className="vector-dropdown-label-text">
                        Toggle the table of contents
                      </span>
                    </label>
                    <div className="vector-dropdown-content">
                      <div
                        id="vector-page-titlebar-toc-unpinned-container"
                        className="vector-unpinned-container"
                      ></div>
                    </div>
                  </div>
                </nav>
                <h1 id="firstHeading" className="firstHeading mw-first-heading">
                  <br />
                  <span className="mw-page-title-main">React</span>
                </h1>
                <div
                  id="p-lang-btn"
                  className="vector-dropdown mw-portlet mw-portlet-lang"
                >
                  <input
                    type="checkbox"
                    id="p-lang-btn-checkbox"
                    role="button"
                    aria-haspopup="true"
                    data-event-name="ui.dropdown-p-lang-btn"
                    className="vector-dropdown-checkbox mw-interlanguage-selector"
                    aria-label="Go to an article in another language. Available in 6 languages"
                  />
                  <label
                    id="p-lang-btn-label"
                    htmlFor="p-lang-btn-checkbox"
                    className="vector-dropdown-label cdx-button cdx-button--fake-button cdx-button--fake-button--enabled cdx-button--weight-quiet cdx-button--action-progressive mw-portlet-lang-heading-6"
                    aria-hidden="true"
                  >
                    <span className="vector-icon mw-ui-icon-language-progressive mw-ui-icon-wikimedia-language-progressive"></span>
                    <span className="vector-dropdown-label-text">
                      6 languages
                    </span>
                  </label>
                  <div className="vector-dropdown-content">
                    <div className="vector-menu-content">
                      <ul className="vector-menu-content-list"></ul>
                      <div className="after-portlet after-portlet-lang">
                        <span className="wb-langlinks-edit wb-langlinks-link">
                          <a
                            href="#"
                            title="Edit interlanguage links"
                            className="wbc-editpage"
                          >
                            Edit links
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <div className="vector-page-toolbar">
                <div className="vector-page-toolbar-container">
                  <div id="left-navigation">
                    <nav aria-label="Namespaces">
                      <div className="vector-menu vector-menu-tabs mw-portlet mw-portlet-associated-pages">
                        <div className="vector-menu-content">
                          <ul className="vector-menu-content-list">
                            <li className="selected vector-tab-noicon mw-list-item">
                              <a href="#">
                                <span>Article</span>
                              </a>
                            </li>
                            <li className="vector-tab-noicon mw-list-item">
                              <a href="#">
                                <span>Talk</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                  </div>
                  <div className="vector-collapsible" id="right-navigation">
                    <nav aria-label="Views">
                      <div className="vector-menu vector-menu-tabs mw-portlet mw-portlet-views">
                        <div className="vector-menu-content">
                          <ul className="vector-menu-content-list">
                            <li className="selected vector-tab-noicon mw-list-item">
                              <a href="#">
                                <span>Read</span>
                              </a>
                            </li>
                            <li className="vector-tab-noicon mw-list-item">
                              <a href="#">
                                <span>Edit</span>
                              </a>
                            </li>
                            <li className="vector-tab-noicon mw-list-item">
                              <a href="#">
                                <span>View History</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                    <nav className="vector-page-tools-landmark">
                      <div
                        id="vector-page-tools-dropdown"
                        className="vector-dropdown vector-page-tools-dropdown"
                      >
                        <input
                          id="vector-page-tools-dropdown-checkbox"
                          aria-haspopup="true"
                          type="checkbox"
                          className="vector-dropdown-checkbox "
                        />
                        <label
                          aria-hidden="true"
                          id="vector-page-tools-dropdown-label"
                          className="vector-dropdown-label cdx-button cdx-button--fake-button cdx-button--fake-button--enabled cdx-button--weight-quiet"
                        >
                          <span className="vector-dropdown-label-text">
                            Tools
                          </span>
                        </label>
                      </div>
                    </nav>
                  </div>
                </div>

                <div
                  id="bodyContent"
                  className="vector-body ve-init-mw-desktopArticleTarget-targetContainer"
                >
                  <div className="vector-body-before-content">
                    <div id="#" className="noprint">
                      From Wikipedia, the free encyclopedia
                    </div>
                  </div>
                  <div id="contentSub">
                    <div id="mw-content-subtitle"></div>
                  </div>
                  <div id="mw-content-text" className="mw-body-content">
                    <div className="mw-content-ltr mw-parser-output">
                      <p>
                        <b>REACT</b> or <b>React</b> may refer to:
                      </p>
                      <h2>
                        <span className="mw-headline" id="Computing">
                          Computing
                        </span>
                        <span className="mw-editsection">
                          <span className="mw-editsection-bracket">[</span>
                          <a href="#">
                            <span>edit</span>
                          </a>
                          <span className="mw-editsection-bracket">]</span>
                        </span>
                      </h2>

                      <ul>
                        <li>
                          <a href="#">React (software)</a> , a JavaScript
                          library for building user interfaces, from Facebook
                          <ul>
                            <li>
                              <a href="#">React Native</a>, a mobile application
                              framework created by Facebook
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">ReactOS</a>, an open-source operating
                          system compatible with Microsoft Windows
                        </li>
                      </ul>

                      <h2>
                        <span
                          className="mw-headline"
                          id="Arts_and_entertainment"
                        >
                          Arts and Entertainment
                        </span>
                        <span className="mw-editsection">
                          <span className="mw-editsection-bracket">[</span>
                          <a href="#">
                            <span>edit</span>
                          </a>
                          <span className="mw-editsection-bracket">]</span>
                        </span>
                      </h2>

                      <ul>
                        <li>
                          <a href="#">
                            <i>React</i> (book)
                          </a>
                          , originally <i>Reacciona</i>, a 2011 Spanish-language
                          book
                        </li>
                        <li>
                          <a href="#">
                            <i>React</i> (media franchise)
                          </a>
                          , a metaseries of web videos created by the Fine
                          Brothers
                        </li>
                      </ul>
                      <h3>
                        <span class="mw-headline" id="Music">
                          Music
                        </span>
                        <span class="mw-editsection">
                          <span class="mw-editsection-bracket">[</span>
                          <a href="#">
                            <span>edit</span>
                          </a>
                          <span class="mw-editsection-bracket">]</span>
                        </span>
                      </h3>
                      <ul>
                        <li>
                          <a href="#">React (band)</a>, a 1990s American boys
                          band made of Tim Cruz and Daniel Matrium
                        </li>
                        <li>
                          <a href="#">React Music Limited</a>, a 1990s London
                          based dance record label
                        </li>
                        <li>
                          <a href="#">
                            <i>React</i> (The Fixx album)
                          </a>
                          , a 1987 live album by the band The Fixx
                        </li>
                        <li>
                          <a href="#">
                            <i>React</i> (Erick Sermon album)
                          </a>
                          , a 2002 album by rapper Erick Sermon
                          <ul>
                            <li>
                              <a href="#">"React" (Erick Sermon song)</a>, a
                              song from the album
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <i>React</i> (Robert Rich and Ian Boddy album)
                          </a>
                          , a 2008 album by electronic musicians Robert Rich and
                          Ian Boddy
                        </li>
                        <li>
                          <a href="#">"React" (Onyx song)</a>, a song by Onyx on
                          their 1998 album <i>Shut 'Em Down</i>
                        </li>
                        <li>
                          <a href="#">"React" (The Pussycat Dolls song)</a>, a
                          2020 song by the Pussycat Dolls
                        </li>
                        <li>
                          <a href="#">
                            "React" (Switch Disco and Ella Henderson song)
                          </a>
                          , a 2023 song by Switch Disco and Ella Henderson
                        </li>
                      </ul>

                      <h2>
                        <span class="mw-headline" id="Organizations">
                          Organizations
                        </span>
                        <span class="mw-editsection">
                          <span class="mw-editsection-bracket">[</span>
                          <a href="#">
                            <span>edit</span>
                          </a>
                          <span class="mw-editsection-bracket">]</span>
                        </span>
                      </h2>

                      <ul>
                        <li>
                          <a href="#">
                            Radio Emergency Associated Communication Teams
                          </a>
                          , a volunteer radio emergency service across the US
                          and Canada
                        </li>
                        <li>
                          Rapid Enforcement Allied Computer Team, a task force
                          of the{" "}
                          <a href="#">
                            High Technology Theft Apprehension and Prosecution
                            Program
                          </a>
                          , California, US
                        </li>
                      </ul>

                      <h2>
                        <span class="mw-headline" id="Other_uses">
                          Other uses
                        </span>
                        <span class="mw-editsection">
                          <span class="mw-editsection-bracket">[</span>
                          <a href="#">
                            <span>edit</span>
                          </a>
                          <span class="mw-editsection-bracket">]</span>
                        </span>
                      </h2>

                      <ul>
                        <li>
                          <a href="#" class="mw-redirect">
                            REACT (telescope)
                          </a>
                          , a telescope at Fenton Hill Observatory, New Mexico,
                          US
                        </li>
                        <li>
                          <a href="#">
                            Rapid Execution and Combat Targeting System
                          </a>
                          , the command and control system of the US for nuclear
                          intercontinental ballistic missiles
                        </li>
                        <li>
                          <a href="#" class="mw-redirect">
                            Remote Electronically Activated Control Technology
                            belt
                          </a>{" "}
                          (REACT belt), a restraint device
                        </li>
                      </ul>

                      <h2>
                        <span className="mw-headline" id="See_also">
                          See also
                        </span>
                        <span className="mw-editsection">
                          <span className="mw-editsection-bracket">[</span>
                          <a href="#">
                            <span>edit</span>
                          </a>
                          <span className="mw-editsection-bracket">]</span>
                        </span>
                      </h2>
                      <ul>
                        <li>
                          <a href="#" class="mw-redirect mw-disambig">
                            Reaction (disambiguation)
                          </a>
                        </li>
                      </ul>
                      <div
                        id="disambigbox"
                        className="metadata plainlinks dmbox dmbox-disambig"
                      >
                        <span>
                          <a href="#" className="mw-file-description">
                            <img
                              src=""
                              className="mw-file-element"
                              data-file-width="220"
                              data-file-height="168"
                            />
                          </a>
                        </span>
                        <div className="dmbox-body">
                          This <a href="#">disambiguation</a> page lists
                          articles associated with the title <b>React</b>.
                          <br />
                          <small>
                            If an <a href="#">internal link</a>
                            led you here, you may wish to change the link to
                            point directly to the intended article.
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="catlinks" className="catlinks">
                  <div id="mw-normal-catlinks" className="mw-normal-catlinks">
                    <a href="#">Category</a> :
                    <ul>
                      <li>
                        <a href="#">Disambiguation pages</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </main>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default Contents;
