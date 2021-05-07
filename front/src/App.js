import React from 'react'
import style from './App.module.css'
import {BrowserRouter,Link,Route} from 'react-router-dom'
import logo from './images/logo.png'
import Home from './HighComponents/Home'
import AboutUs from './HighComponents/AboutUs'
import Contact from './HighComponents/Contact'
import News from './HighComponents/News'
import Products from './HighComponents/Products'
import Services from './HighComponents/Services'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MailIcon from '@material-ui/icons/Mail';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import { IconButton } from '@material-ui/core'
import PageForOneProd from './components/PageForOneProd/PageForOneProd'
import {Carusel} from './components/Carusel/Carusel'
import {Slide} from './components/Carusel/Carusel'


function App() {
  return (
    <>       
    <BrowserRouter>
         {/* hight header    */}
            <nav className={style.navbar} >
                <div className={style.navbarLeft}>
                  <Link to="/" className={style.a1} >
                    <img alt='nkar' className={style.imgTop} src={logo}  />
                  </Link>
                  <a className={style.a2}>                  
                    <p className="animated1"><span className={style.demo1}>
                        <b>Smart</b>
                      </span></p>
                    <p className="animated2"> <span className={style.demo2}>
                        <b>Solutions</b>
                      </span></p>
                    <p className="animated3">
                      <span className={style.demo3} >
                        <b>For</b>
                      </span>
                      <span className={style.demo4} >
                        <b>Success</b>
                      </span>
                    </p>
                  </a>
                </div>           

                <div className={style.navbarRight} >
                      <IconButton>
                        <ExitToAppIcon color='secondary'/>
                         Login
                      </IconButton>                                       
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <ImportContactsIcon color='primary'/>   
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
                        </div>
                                   
                </div>              
            </nav>




{/*HEADER*/}
            
            <header style={{lineHeight: '0.9', background: '#525252'}}>
             
              {/* Collapsible content */}
              
                {/* Links */}
                <div className={style.headerlist}>
                  <div className={style.headItemActive}>
                    <Link to="/">Home</Link>
                  </div>
                  <div>
                    <Link to="/products">Products</Link>
                  </div>
                  <div >
                    <Link  to="/services">Services</Link>
                  </div>
                  <div >
                    <Link  to="/news">News</Link>
                  </div>
                  <div >
                    <Link  to="/aboutUs">About us</Link>
                  </div>
                  <div >
                    <Link  to="/contact">Contact</Link>
                  </div>
                </div>          
               
                {/* Collapsible content */}
                
                    <form>
                      <div className style={{margin: 0}}>
                        <input name="q" type="text" placeholder="Search..." style={{margin: '0px', padding: '6px', width: '10rem', outline: 'none', borderRadius:10}} />
                        <IconButton>
                          <SearchIcon color='secondary'/>
                        </IconButton>
                      </div>
                    </form>
                  </header>

{/* <Slide />
<Carusel /> */}

<Route exact path='/' component={Home} />
<Route exact path='/products' component={Products} />
<Route exact path='/services' component={Services} />
<Route exact path='/news' component={News} />
<Route exact path='/aboutUs' component={AboutUs} />
<Route exact path='/contact' component={Contact} />
<Route exact path='/pageForOneProd' component={PageForOneProd} />




                  <footer>                    
                    <div className="forIcon">
                     <IconButton>
                       <FacebookIcon color='primary'/>
                     </IconButton>                     
                     <IconButton>
                       <InstagramIcon  color='secondary'/>
                     </IconButton>
                     <IconButton>
                       <YouTubeIcon  color='secondary'/>
                     </IconButton>
                     <IconButton>
                       <MailIcon  color='error'/>
                     </IconButton>
                     <IconButton>
                       <TwitterIcon color='primary'/>
                     </IconButton>                     
                    </div>
                  </footer> 
            </BrowserRouter>
    </>
  )
}
export default App