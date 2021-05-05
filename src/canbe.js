// import logo from './logo.svg';
// import React from 'react'
import './App.css';
// import './css/bootstrap.min.css'
// import './css/centralflex.css'
// import './css/css.css'
// import './css/cssone.css'

import React from 'react'

function App() {
  return (
          <div>
            {/* JQuery */}
           
            <nav className="navbar navbar-expand-md navbar-light white" style={{lineHeight: 0}}>
              <div className="container" style={{padding: '0px'}}>
                <div className="navbar-brand d-flex ">
                  <a href="/" className style={{paddingRight: '10px', borderRight: '2px solid dimgrey'}}>
                    <img className="img-fluid" src="images/logo.png" width={80} style={{borderRadius: '5px', MozBoxShadow: '10px 10px 26px -15px rgba(0,0,0,0.75)', boxShadow: '10px 10px 26px -15px rgba(0,0,0,0.75)'}} />
                  </a>
                  <a style={{float: 'left'}} className>
                    <p className="animated_span"><span id="demo">
                        Smart
                      </span></p>
                    <p className="animated_span"> <span id="demo2">
                        Solutions
                      </span></p>
                    <p className="animated_span">
                      <span id="demo3" style={{color: 'red', padding: 0}}>
                        For
                      </span>
                      <span id="demo4" style={{display: 'inline', position: 'relative', right: '10px'}} className>
                        Success
                      </span>
                    </p>
                  </a>
                </div>
                {/* Collapse */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                {/* Links */}
                <div className="collapse navbar-collapse row justify-content-end" id="navbarSupportedContent">
                  {/* Left */}
                  <ul className="navbar-nav mr-auto">
                  </ul>
                  {/* Right */}
                  <ul className="navbar-nav dark-text ">
                    <li className="nav-item mt-1 ">
                      <a className="nav-link waves-effect" href="/accounts/login/">
                        <span className="fas fa-sign-in-alt"> Login </span>
                      </a>
                    </li>
                    <li className="nav-item mt-1">
                      <a className="nav-link waves-effect" href="/accounts/signup/">
                        <span className="fas fa-bullseye"> Sign up </span>
                      </a>
                    </li>
                    {/*  <li class="nav-item btn-outline-danger rounded " style="">
                    
          
            
            
                <span class="">
    
                </span>
            
                <span class="">
                    English
                  
    
                </span>
            
                </li> */}
                    <li className="nav-item mt-2 ">
                      <form action="/i18n/setlang/" method="post" id="myForm"><input type="hidden" name="csrfmiddlewaretoken" defaultValue="pTSnjat9lojkHgY7KzufJ8xjBUxIJppG3XmnapmQjqOo6LBZgguUnMe5Xcil6M9D" />
                        <input type="hidden" name="text" defaultValue />
                        <span className="fas fa-book-open">
                          <select name="language" id onchange="submitForm();" style={{color: 'white', background: '#212121'}}>
                            <option value="hy">
                              հայերեն
                              (hy)
                            </option>
                            <option value="en" selected>
                              English
                              (en)
                            </option>
                          </select>
                        </span>
                      </form>
                    </li>
                  </ul>
                </div>
                {/*
          <div class="btn-outline-danger rounded nav-item ">
               
          
            
            
                <span class=" mt-2">
    
                </span>
            
                <span class=" mt-2">
                    English
                  
    
                </span>
            
            </div>
    */}
              </div>
            </nav>
            {/*
        <div class="mt-5 pt-4">
        
        </div>
    */}














            {/*Navbar*/}
            <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\n\n.hovereffect {\n  width: 100%;\n  height: 100%;\n  float: left;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  cursor: default;\n}\n\n.hovereffect .overlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  /*background-color: rgba(75,75,75,0.4);*/\n  -webkit-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n\n.hovereffect:hover .overlay {\n  background-color: rgba(75, 75, 75, 0.4);\n}\n\n.hovereffect img {\n  display: block;\n  position: relative;\n}\n\n.hovereffect h2 {\n  text-transform: uppercase;\n  color: #fff;\n  text-align: center;\n  position: relative;\n  font-size: 23px;\n  padding: 10px;\n  line-height: 2;\n  background: rgba(0, 0, 0, 0.6);\n\n  -webkit-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n\n}\n.hovereffect p{\n  text-transform: uppercase;\n  color: #fff;\n  text-align: center;\n  position: relative;\n  font-size: 17px;\n  padding: 10px;\n  background: rgba(0, 0, 0, 0.6);\n  -webkit-transform: translateY(205px);\n  -ms-transform: translateY(205px);\n  transform: translateY(205px);\n  -webkit-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n.hovereffect:hover p{\n  -webkit-transform: translateY(255px);\n  -ms-transform: translateY(255px);\n  transform: translateY(255px);\n}\n\n\n\n\n.hovereffect a.info {\n  display: inline-block;\n  text-decoration: none;\n  padding: 7px 14px;\n  text-transform: uppercase;\n  color: #fff;\n  border: 1px solid #fff;\n  background-color: rgba(255,255,255,0.2);\n  opacity: 0;\n  filter: alpha(opacity=0);\n  -webkit-transform: scale(0);\n  -ms-transform: scale(0);\n  transform: scale(0);\n  -webkit-transform: translateY(5px);\n  -ms-transform: translateY(5px);\n  transform: translateY(5px);\n  -webkit-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n  font-weight: normal;\n  margin: -52px 0 0 0;\n  padding: 32px 50px;\n}\n\n.hovereffect:hover a.info {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  transform: scale(1);\n}\n\n.hovereffect a.info:hover {\n  box-shadow: 0 0 5px #fff;\n}\n\n\n\n.plusicon{\n  background:rgba(255,0,0,0.2);\n  color:rgba(255,0,0,.8);\n  border-radius:50px;\n  transition:1s;\n  padding:15px;\n\ntext-shadow: #FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px;\nposition:relative;\ntop:0px;\nopacity:0;\n}\n\nslideshow-container {\n  max-width: 1200px;\n  position: relative;\n  margin: auto;\n}\n\n/* Hide the images by default */\n.mySlides {\n  display: none;\n}\n\n/* Next & previous buttons */\n\n/* Caption text */\n.text {\n  color: #f2f2f2;\n  font-size: 15px;\n  padding: 8px 12px;\n\n  width: 100%;\n  text-align: center;\n}\n\n/* Number text (1/3 etc) */\n.numbertext {\n\n  font-size: 18px;\n    text-align:center;color:white;display:block;width:100%;\n}\n\n/* The dots/bullets/indicators */\n.dot {\n  cursor: pointer;\n  height: 15px;\n  width: 15px;\n\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease;\n}\n\n.activate, .dot:hover {\n  background-color: white;\n}\n\n/* Fading animation */\n.fades {\n  -webkit-animation-name: fade;\n  -webkit-animation-duration: 1.5s;\n  animation-name: fade;\n  animation-duration: 1.5s;\n}\n.prev , .next{\n font-size:30px;\n}\n.prev:hover , .next:hover ,.prev:active , .next:active{\n    background:rgba(255,255,255,0.3);\n    border-radius:50%;\n}\n\n@-webkit-keyframes fade {\n  from {opacity: .4}\n  to {opacity: 1}\n}\n\n@keyframes fade {\n  from {opacity: .4}\n  to {opacity: 1}\n}\n\n\n\n\n@media screen and (max-width: 600px) {\n.hovereffect p{\n  -webkit-transform: translateY(100px);\n  -ms-transform: translateY(100px);\n  transform: translateY(100px);\n}\n\n.hovereffect a.info {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  -webkit-transform: scale(0.2);\n  border:none;\n  -webkit-transform:translateY(-105px);\n  -ms-transform: scale(0.2);\n  -ms-transform: translateY(-105px);\n  transform: scale(0.2);\n  transform:translateY(-105px);\n}\n\n\n\n" }} />
            <style dangerouslySetInnerHTML={{__html: "\n.flex-menu{\n    background:crimson;\n    transition:1s;\n}\n\n.flex-menu:focus{\n    background:rgba(255,255,255,0.85);\n    border:2px solid crimson;\n}\n.search-icon{\nborder-top-right-radius:5px;\nborder-bottom-right-radius:5px;\n\n}\n\n" }} />
            <nav className="navbar-expand-sm navbar-dark " style={{lineHeight: '0.9', background: '#525252'}}>
              {/* Navbar brand */}
              {/*
            <span class="navbar-brand" style="text-align:center;font-size:30px"><h2>GN</h2>
            <p style="font-size:14px">SMART SOLUTIONS</p>
            </span>
            */}
              {/* Collapse button */}
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              {/* Collapsible content */}
              <div className="collapse navbar-collapse" id="basicExampleNav">
                {/* Links */}
                <ul className="navbar-nav mr-auto" style={{}}>
                  <li className="nav-item p-2 active">
                    <a className="nav-link" href="/">Home
                    </a>
                  </li>
                  <li className="nav-item p-2 ">
                    <a className="nav-link" href="/services">Services</a>
                  </li>
                  <li className="nav-item p-2 ">
                    <a className="nav-link" href="/blog">News</a>
                  </li>
                  <li className="nav-item p-2 ">
                    <a className="nav-link" href="/about">About us</a>
                  </li>
                  <li className="nav-item p-2 ">
                    <a className="nav-link" href="/contact">Contact</a>
                  </li>
                </ul>
                {/* Links */}
                {/*
              <form class="form-inline" action="/search" method="get">
                <div class="md-form active-pink active-pink-" style="background:rgba(255,255,255,0.5)">
                    <span class="fas fa-search text-white"></span>
                  <input name="q" class="form-control" type="text" placeholder="Search..." aria-label="Search" >
    
                </div>
              </form>
            */}
                {/* Collapsible content */}
                <ul className="navbar-nav justify-content-right">
                  <li className="nav-item">
                    <form className="form-inline" action="/search" method="get">
                      <div className style={{margin: 0}}>
                        <input name="q" className type="text" placeholder="Search..." aria-label="Search" style={{margin: '0px', padding: '6px', width: '10rem', outline: 'none'}} />
                        <button type="submit" className="btn btn-outline-danger" style={{padding: '7px'}}>
                          <span className="fas fa-search search-icon" style={{padding: '0px', margin: '0px'}} />
                        </button>
                      </div>
                    </form>
                  </li>
                </ul>
              </div>
              </nav>









              
            {/*/.Navbar*/}

            <main>
              <section className="grey lighten-3" id="features2-i" data-rv-view={860}>
                <div className="media-container-row" style={{}}>
                  <div className="card p-3 col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
                    <a href="/medical">
                      <div className="hovereffect waves-effect">
                        <div className="card-wrapper">
                          <div className="card-img">
                            <img className="img-responsive" src="images/surgery.jpg" alt="" media-simple="true" />
                          </div>
                          <div className="overlay">
                            <h2><i className="fas fa-hand-pointer" />
                              Medical Solutions</h2>
                            <div className="overlayplus text-center ">
                              {/*
    
            */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="card p-3 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <a href="/laborator">
                      <div className="hovereffect waves-effect">
                        <div className="card-wrapper">
                          <div className="card-img">
                            <img className="img-responsive" src="images/home_lab.jpg" alt="" media-simple="true" />
                          </div>
                          <div className="overlay">
                            <h2>
                              <i className="fas fa-hand-pointer" />
                              Laboratory Solutions
                            </h2>
                            {/*
    
    
                */}
                            <div className="overlayplus text-center">
                              {/*
    
            */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                {/* Cubes  */}
                <section className="pt-4 pb-4 grey lighten-2" id="testimonials3-4" data-rv-view={872}>
                  <div className="container text-center">
                    <span className="fas fa-box-open text-muted pb-2">
                      New Products
                    </span>
                    <div className="media-container-row">
                      <div className="card w-50 m-3 " style={{background: 'url("images/14981348312258.png") center center scroll', backgroundSize: 'cover', height: '15rem'}}>
                        <div style={{background: 'rgba(0,0,0,0.3)', width: '100%', height: '100%'}} className="pt-5">
                          <div className="card-body">
                            <h5 className="card-title white-text">IC-Flow™ Imaging System</h5>
                            <p className="card-text white-text">Our latest products</p>
                            <a href="/plasticsurgery/imagingsys/MD/icflow/" className="btn danger-color-dark white-text rounded" style={{padding: '7px'}}>View</a>
                          </div>
                        </div>
                      </div>
                      <div className="card w-50 m-3 " style={{background: 'url("images/csm_M720_LongReachSurgeon_RGB72_cc0685986d.jpg") center center scroll', backgroundSize: 'cover', height: '15rem'}}>
                        <div style={{background: 'rgba(0,0,0,0.3)', width: '100%', height: '100%'}} className="pt-5">
                          <div className="card-body">
                            <h5 className="card-title white-text">Leica M720 OH5</h5>
                            <p className="card-text white-text">Our latest products</p>
                            <a href="/plasticsurgery/microplastic/MD/LeicaM720OH5/" className="btn danger-color-dark white-text rounded" style={{padding: '7px'}}>View</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="fas fa-bell text-muted">
                      Latest News
                    </span>
                    <div className="media-container-row">
                      <div className="card w-50 m-3 " style={{background: 'url("images/wolff_et_all_science_covid-19_high_res_scaled.jpg") center center scroll', backgroundSize: 'cover', height: '15rem'}}>
                        <div style={{background: 'rgba(0,0,0,0.3)', width: '100%', height: '100%'}} className="pt-5">
                          <div className="card-body">
                            <h5 className="card-title white-text">Coronavirus Replication in Host Cells</h5>
                            <p className="card-text white-text">A Molecular Pore Spans the Double Membrane of the</p>
                            <a href="/blog/2209/" className="btn danger-color-dark white-text rounded" style={{padding: '7px'}}>View</a>
                          </div>
                        </div>
                      </div>
                      <div className="card w-50 m-3 " style={{background: 'url("images/csm_Clinical-Microscopes-teaser_e4d37c0f0d_YpRZe3Y.jpg") center center scroll', backgroundSize: 'cover', height: '15rem'}}>
                        <div style={{background: 'rgba(0,0,0,0.3)', width: '100%', height: '100%'}} className="pt-5">
                          <div className="card-body">
                            <h5 className="card-title white-text">Why use Leica microscopes for Clinical Microscopy?</h5>
                            <p className="card-text white-text" />
                            <a href="/blog/23/" className="btn danger-color-dark white-text rounded" style={{padding: '7px'}}>View</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                
                {/* end of cubes */}
                <section className="pb-2 pt-2  grey lighten" id="features16-g" data-rv-view={889}>
                  <div className="container align-center" style={{display: 'block'}}>
                    <h2 className="pb-1 mbr-fonts-style mbr-section-title display-2">
                      Our partners
                    </h2>
                    <div className="row justify-content-center">
                      <div className="slideshow-container" style={{width: '100%'}}>
                        {/* Full-width images with number and caption text */}
                        {/* Full-width images with number and caption text */}
                        <div className="mySlides fades">
                          <img className="p-2" src="images/1._%D4%B1%D6%80%D5%B5%D5%A1%D5%B6_%D4%B2%D5%A1%D5%B6%D5%AF.png" width={150} height={120} />
                          <img className="p-2" src="images/2._Armenia.png" width={150} height={120} />
                          <img className="p-2" src="images/3._Avagyan.png" width={150} height={120} />
                          <img className="p-2" src="images/4._%D4%B1%D5%BD%D5%BF%D5%B2%D5%AB%D5%AF_%D4%B2%D4%BF.jpg" width={150} height={120} />
                        </div>
                        <div className="mySlides fades">
                          <img className="p-2" src="images/5._Avagyan.png" width={150} height={120} />
                          <img className="p-2" src="images/6._Davidyanc.png" width={150} height={120} />
                          <img className="p-2" src="images/7._DM_eye.png" width={150} height={120} />
                          <img className="p-2" src="images/8._Zilfyan.png" width={150} height={120} />
                        </div>
                        <div className="mySlides fades">
                          <img className="p-2" src="images/9._Ecosence.png" width={150} height={120} />
                          <img className="p-2" src="images/10._Erebuni.png" width={150} height={120} />
                          <img className="p-2" src="images/11._Lumiere.png" width={150} height={120} />
                          <img className="p-2" src="images/12._Hay-amerikyan.png" width={150} height={120} />
                        </div>
                        <div className="mySlides fades">
                          <img className="p-2" src="images/13._HistoGen.png" width={150} height={120} />
                          <img className="p-2" src="images/14._Malayan.png" width={150} height={120} />
                          <img className="p-2" src="images/15._Miqayelyan.png" width={150} height={120} />
                          <img className="p-2" src="images/16._Normed.png" width={150} height={120} />
                        </div>
                        <div className="mySlides fades">
                          <img className="p-2" src="images/17._SA.png" width={150} height={120} />
                          <img className="p-2" src="images/18._Sirmed.png" width={150} height={120} />
                          <img className="p-2" src="images/19._slavmed.png" width={150} height={120} />
                          <img className="p-2" src="images/20._Vardananc.png" width={150} height={120} />
                        </div>
                        {/*
      <div class="mySlides fades">
        <div class="numbertext"  >1 / 3</div>
        <img class="p-2" src="/static/images/microsystems_logo.png" width="150" height="120">
      <img class="p-2" src="/static/images/geosystems_logo.png" width="150" height="120">
        <img class="p-2" src="/static/images/biosystems_logo.png" width="150" height="120">
        <img class="p-2" src="/static/images/canon_logo.png" width="150" height="120">
        <img class="p-2" src="/static/images/navilas_logo.png" width="150" height="120">
    
        <div class="text">We ensure quality</div>
      </div>
    
      <div class="mySlides fades" style="text-align:center;color:white">
        <div class="numbertext">2 / 3</div>
        <img src="https://html5css.ru/css/img_lights.jpg" width="150" height="120">
        <div class="text">We ensure quality</div>
      </div>
    
      <div class="mySlides fades" style="text-align:center;color:white">
        <div class="numbertext">3 / 3</div>
        <img src="https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg" width="150" height="120">
        <div class="text">We ensure quality</div>
    
      </div>
    */}
                        <div className="prev_next" style={{textAlign: 'center', color: 'rgba(255,255,255,1)', fontSize: '24px'}}>
                          <a className="prev p-3" onclick="plusSlides(-1)">❮</a>
                          <a className="next p-3" onclick="plusSlides(1)">❯</a>
                        </div>
                        <br />
                        {/* The dots/circles */}
                        <div style={{textAlign: 'center'}}>
                          <span className="dot" onclick="currentSlide(1)" />
                          <span className="dot" onclick="currentSlide(2)" />
                          <span className="dot" onclick="currentSlide(3)" />
                          <span className="dot" onclick="currentSlide(4)" />
                          <span className="dot" onclick="currentSlide(5)" />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className id="clients-f" data-rv-view={875}>
                  <section className="cid-qySupntCRq" id="social-buttons2-j" data-rv-view={901}>
                    <div className="mbr-overlay" style={{opacity: '0.8', backgroundColor: 'rgb(79, 73, 67)'}}>
                    </div>
                    <div className="container">
                      <div className="media-container-row">
                        <div className="col-md-8 align-center">
                          <h2 className=" mbr-fonts-style display-2">
                            Follow us!  
                          </h2>
                          <div className="social-list pl-0 mb-0">
                            <a href="https://twitter.com/mobirise" target="_blank">
                              <span className="px-2 socicon-twitter socicon mbr-iconfont mbr-iconfont-social" media-simple="true" />
                            </a>
                            <a href="https://www.facebook.com/pages/Mobirise/1616226671953247" target="_blank">
                              <span className="px-2 socicon-facebook socicon mbr-iconfont mbr-iconfont-social" media-simple="true" />
                            </a>
                            <a href="https://instagram.com/mobirise" target="_blank">
                              <span className="px-2 socicon-instagram socicon mbr-iconfont mbr-iconfont-social" media-simple="true" />
                            </a>
                            <a href="https://www.youtube.com/c/mobirise" target="_blank">
                            </a>
                            <a href="https://plus.google.com/u/0/+Mobirise" target="_blank">
                            </a>
                            <a href="https://www.behance.net/Mobirise" target="_blank">
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>






                  <footer className="page-footer text-center font-small elegant-color">
                    {/* Social icons */}
                    <div className="pb-4 pt-4">
                      <a href="https://www.facebook.com/mdbootstrap" target="_blank">
                        <i className="fab fa-facebook-f mr-3" />
                      </a>
                      <a href="https://twitter.com/MDBootstrap" target="_blank">
                        <i className="fab fa-twitter mr-3" />
                      </a>
                      <a href="https://www.youtube.com/watch?v=7MUISDJ5ZZ4" target="_blank">
                        <i className="fab fa-youtube mr-3" />
                      </a>
                      <a href="https://plus.google.com/u/0/b/107863090883699620484" target="_blank">
                        <i className="fab fa-google-plus-g mr-3" />
                      </a>
                      <a href="https://dribbble.com/mdbootstrap" target="_blank">
                        <i className="fab fa-dribbble mr-3" />
                      </a>
                      <a href="https://pinterest.com/mdbootstrap" target="_blank">
                        <i className="fab fa-pinterest mr-3" />
                      </a>
                      <a href="https://github.com/mdbootstrap/bootstrap-material-design" target="_blank">
                        <i className="fab fa-github mr-3" />
                      </a>
                      <a href="http://codepen.io/mdbootstrap/" target="_blank">
                        <i className="fab fa-codepen mr-3" />
                      </a>
                    </div>
                    {/* Social icons */}
                    {/*Copyright*/}
                    <div className="footer-copyright py-3">
                      © 2020 created by:
                      <a href="https://mdbootstrap.com/education/bootstrap/" target="_blank"> Artur Sahakyan</a>
                    </div>
                    {/*/.Copyright*/}
                  </footer>
                  {/* Bootstrap tooltips */}
                  {/* Bootstrap core JavaScript */}
                  {/* MDB core JavaScript */}
                  {/* Initializations */}
                  {/*   
    
     */}
                </section></section></main>
          </div>
        );
      }
    ;


export default App;
