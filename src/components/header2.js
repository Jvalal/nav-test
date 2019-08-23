import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/ss-primary-orange.svg'
import './Header2.css'

var Header2 = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
        <title>Blueprint: Horizontal Drop-Down Menu</title>
        <meta name="description" content="Blueprint: Horizontal Drop-Down Menu" />
        <meta name="keywords" content="horizontal menu, microsoft menu, drop-down menu, mega menu, javascript, jquery, simple menu" />
        <meta name="author" content="Codrops" />
        <link rel="shortcut icon" href="../favicon.ico" />
        <link rel="stylesheet" type="text/css" href="css/default.css" />
        <link rel="stylesheet" type="text/css" href="css/component.css" />
        <div className="container">
          <header className="clearfix">
          </header>	
          <div className="main">
            <nav id="cbp-hrmenu" className="cbp-hrmenu">
              <ul>
                <li>
                  <a href="#"><img src="./images/ss-primary-orange.svg" style={{width: '82px', height: '64px', justifyContent: 'center'}} title="White flower" /></a>
                  <a href="#">Dashboard</a>
                  <div className="cbp-hrsub">
                    <div className="cbp-hrsub-inner"> 
                      <div>
                        <h4>2020 - K-8  Digital </h4>
                        <ul>
                          <li><a href="#">Grade 7 - Class Name 1</a></li>
                          <li><a href="#">Grade 8 - Class Name 2</a></li>
                          <li><a href="#">Grade 5 - Class Name 2</a></li>
                          <li><a href="#">View All Classes</a></li>
                        </ul>
                      </div>
                      <div>
                        <h4>SEL for Adults</h4>
                        <ul>
                          <li><a href="#">My Portoflio</a></li>
                          <li><a href="#">Activity Playlist</a></li>
                          <li><a href="#">Leadership Stuff</a></li>
                        </ul>
                      </div>
                      <div>
                        <h4>4th Edition SEL Kits</h4>
                        <ul>
                          <li><a href="#">K-8</a></li>
                          <li><a href="#">Bullying Prevention Unit</a></li>
                          <li><a href="#">Child Proection Unit</a></li>
                        </ul>
                        <h4>Professional Development</h4>
                        <ul>
                          <li><a href="#">Module 1</a></li>
                          <li><a href="#">MOdule 2</a></li>
                        </ul>
                      </div>
                    </div>{/* /cbp-hrsub-inner */}
                  </div>{/* /cbp-hrsub */}
                </li>
                <li>
                  <a href="#">My Classes</a>
                  <div className="cbp-hrsub">
                    <div className="cbp-hrsub-inner">
                      <div>
                        <h4><a href="#">K-8 Classes</a></h4>
                        <ul>
                          <li><a href="#">Grade 7 - Class Name 1</a></li>
                          <li><a href="#">Grade 8 - Class Name 2</a></li>
                          <li><a href="#">Grade 5 - Class Name 2</a></li>
                          <li><a href="#">+ Create a New Class</a></li>
                        </ul>
                      </div>
                      <div>
                      </div>{/* /cbp-hrsub-inner */}
                    </div>{/* /cbp-hrsub */}
                  </div></li>
                <li>
                  <a href="#">Resource Library</a>
                  <div className="cbp-hrsub">
                    <div className="cbp-hrsub-inner"> 
                      <div>
                        <h4>K-8 Resources</h4>
                        <ul>
                          <li><a href="#">Resource Name</a></li>
                          <li><a href="#">Resrouce Name</a></li>
                        </ul>
                        <h4>SEL for Adults Resourrces</h4>
                        <ul>
                          <li><a href="#">Resource List Item</a></li>
                          <li><a href="#">Resource List Item</a></li>
                          <li><a href="#">Resource List Item</a></li>
                        </ul>
                      </div>
                      <div>
                        <h4>Other Resource Library</h4>
                        <ul>
                          <li><a href="#">Resource List Item</a></li>
                          <li><a href="#">Resource List Item</a></li>
                        </ul>
                        <h4>View All Resources</h4>
                        <ul>
                          <li><a href="#">Resource List Item</a></li>
                          <li><a href="#">Resource List Item</a></li>
                        </ul>
                      </div>
                    </div>{/* /cbp-hrsub-inner */}
                  </div>{/* /cbp-hrsub */}
                </li>
                <li>
                  <a href="#">Professional Development</a>
                  <div className="cbp-hrsub">
                    <div className="cbp-hrsub-inner"> 
                      <div>
                        <h4>K-8 </h4>
                        <ul>
                          <li><a href="#">PD 1</a></li>
                          <li><a href="#">PD 1</a></li>
                          <li><a href="#">PD 1</a></li>
                          <li><a href="#">PD 1</a></li>
                        </ul>
                        <h4>4th Edition SEL Kits</h4>
                        <ul>
                          <li><a href="#">PD 1</a></li>
                          <li><a href="#">PD 1</a></li>
                        </ul>
                      </div>
                      <div>
                        <h4>SEL for Adults</h4>
                        <ul>
                          <li><a href="#">PD 1</a></li>
                          <li><a href="#">PD 1</a></li>
                          <li><a href="#">View All</a></li>
                        </ul>
                      </div>
                      <div>
                        <h4>Out of School Time</h4>
                        <ul>
                          <li><a href="#">PD 1</a></li>
                          <li><a href="#">PD 1</a></li>
                        </ul>
                      </div>
                    </div>{/* /cbp-hrsub-inner */}
                  </div>{/* /cbp-hrsub */}
                </li>
                <li>
                  <a href="#">Reports</a>
                  <div className="cbp-hrsub">
                    <div className="cbp-hrsub-inner"> 
                      <div>
                        <h4>Report Area 1</h4>
                        <ul>
                          <li><a href="#">Report Area 1 Report</a></li>
                          <li><a href="#">Report Area 1 Report</a></li>
                          <li><a href="#">Report Area 1 Report</a></li>
                        </ul>
                      </div>
                      <div>
                        <h4>Report Area 2</h4>
                        <ul>
                          <li><a href="#">Report Area 2 Report</a></li>
                          <li><a href="#">Report Area 2 Report</a></li>
                          <li><a href="#">Report Area 2 Report</a></li>
                        </ul>
                      </div>
                      <div>
                        <h4>Report Area 4</h4>
                        <ul>
                          <li><a href="#">Report Area 4 Report</a></li>
                          <li><a href="#">Report Area 4 Report</a></li>
                          <li><a href="#">Report Area 4 Report</a></li>
                          <li><a href="#">Report Area 4 Report</a></li>
                        </ul>
                      </div>
                    </div>{/* /cbp-hrsub-inner */}
                  </div>{/* /cbp-hrsub */}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
});

export default Header
