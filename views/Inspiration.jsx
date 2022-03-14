const React = require('react');
const DefaultLayout = require('./Default.jsx');

class Index extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <nav className="navbar navbar-light bg-light p-4">
                    <a className="navbar-brand d-flex flex-row" href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="31"
                            height="31"
                            fill="currentColor"
                            className="bi bi-journal pb-1 mx-2 mt-3"
                            viewBox="0 0 16 16"
                        >
                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                        </svg>
                        <p className="pt-1"style={{fontSize: "31px"}}>Notes.io</p>
                    </a>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link active pt-3" aria-current="page" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled pt-3" href="/pricing">Inspiration</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/user/login">
                                <button type="button" className="btn btn-outline-primary">Sign In</button>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="container px-4 py-5" id="hanging-icons">
                  <h2 className="pb-2 border-bottom">App Graveyard</h2>

                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">

                      <div className="col d-flex align-items-start">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="45"
                            height="45"
                            fill="currentColor"
                            className="bi bi-cup-straw mt-1"
                            viewBox="0 0 16 16"
                          >
                            <path d="M13.902.334a.5.5 0 0 1-.28.65l-2.254.902-.4 1.927c.376.095.715.215.972.367.228.135.56.396.56.82 0 .046-.004.09-.011.132l-.962 9.068a1.28 1.28 0 0 1-.524.93c-.488.34-1.494.87-3.01.87-1.516 0-2.522-.53-3.01-.87a1.28 1.28 0 0 1-.524-.93L3.51 5.132A.78.78 0 0 1 3.5 5c0-.424.332-.685.56-.82.262-.154.607-.276.99-.372C5.824 3.614 6.867 3.5 8 3.5c.712 0 1.389.045 1.985.127l.464-2.215a.5.5 0 0 1 .303-.356l2.5-1a.5.5 0 0 1 .65.278zM9.768 4.607A13.991 13.991 0 0 0 8 4.5c-1.076 0-2.033.11-2.707.278A3.284 3.284 0 0 0 4.645 5c.146.073.362.15.648.222C5.967 5.39 6.924 5.5 8 5.5c.571 0 1.109-.03 1.588-.085l.18-.808zm.292 1.756C9.445 6.45 8.742 6.5 8 6.5c-1.133 0-2.176-.114-2.95-.308a5.514 5.514 0 0 1-.435-.127l.838 8.03c.013.121.06.186.102.215.357.249 1.168.69 2.438.69 1.27 0 2.081-.441 2.438-.69.042-.029.09-.094.102-.215l.852-8.03a5.517 5.517 0 0 1-.435.127 8.88 8.88 0 0 1-.89.17zM4.467 4.884s.003.002.005.006l-.005-.006zm7.066 0-.005.006c.002-.004.005-.006.005-.006zM11.354 5a3.174 3.174 0 0 0-.604-.21l-.099.445.055-.013c.286-.072.502-.149.648-.222z"/>
                          </svg>
                        </div>
                        <div>
                          <h2>Home.io</h2>
                          <p>Home.io was intended to be a web application for travelers, transplants, and locals to get a perspective of the nightlife created and maintained by locals.</p>
                          <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#homeModal">
                            Learn More
                          </a>
                        </div>
                      </div>
                      <div class="modal fade" id="homeModal" tabindex="-1" aria-labelledby="homeModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="homeModalLabel">Home.io</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <h5>R.I.P. Monday March 7th</h5>
                              <hr/>
                              <h5>Relatioinal Data Issues</h5>
                              <p>Home.io originally was supposed to have 3 models: users, bars, and bartenders. A bar does not need to have a bartender, but a bartender can have an array of bars where they work. Ultimately I could not figure out how to share data between both entities. If I figured out how to build that relationship the next level was adding favorites for each user to track your friends favorite bars and bartenders in different cities.</p>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col d-flex align-items-start">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="45"
                            height="45"
                            fill="currentColor"
                            className="bi bi-sticky mt-1"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1h-11zM2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V8H9.5A1.5 1.5 0 0 0 8 9.5V14H2.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V9.5a.5.5 0 0 1 .5-.5h4.293L9 13.793z"/>
                          </svg>
                        </div>
                        <div>
                          <h2>Share.io</h2>
                          <p>Share.io was intended to be a paid web application where users can create notes for free, and for a monthly price pay to share notes between different people.</p>
                          <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#shareModal">
                            Learn More
                          </a>
                        </div>
                      </div>
                      <div className="modal fade" id="shareModal" tabindex="-1" aria-labelledby="shareModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="shareModalLabel">Share.io</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              <h5>R.I.P. Wednesday March 9th</h5>
                              <hr/>
                              <h5>Many to Many Failure</h5>
                              <p>Similar to Home.io I wanted to create different types of notes, where a user could have free form, recipes, journal entry, and more types. I could not figure out to dynamically render each form type and display different field types based on the user selection.</p>                      
                            </div>                           
                            <div className="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col d-flex align-items-start">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="45"
                            height="45"
                            fill="currentColor"
                            className="bi bi-cloud-drizzle mt-1"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973zM8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 2z"/>
                          </svg>
                        </div>
                        <div>
                          <h2>Wear.io</h2>
                          <p>Wear.io was intended to be a web application to track how often a person wears different clothes as well as the weather conditions that day. A user could also search across their historical data.</p>
                          <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#wearModal">
                            Learn More
                          </a>
                        </div>
                      </div>
                      <div className="modal fade" id="wearModal" tabindex="-1" aria-labelledby="wearModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="wearModalLabel">Wear.io</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              <h5>R.I.P. Thursday March 10th</h5>
                              <hr/>
                              <h5>Search Issues</h5>
                              <p>In addition to relating multiple objects, I could not figure out to get Search to work, so Wear.io just ended up being a bunch of different show pages with no discernable way to look back at past data other than manually looking into a item.</p>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                </div>

            </DefaultLayout>
        )
    }
}

module.exports = Index