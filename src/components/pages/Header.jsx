import React, { Fragment} from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Fragment>
      <header className="position-fixed">
        <div className="nav-top-parent d-flex justify-content-around align-items-center">
          <div className="message">
            <p className="mb-0" id="blink">
              Get Your Daily Dose Of Amazing Deals
            </p>
          </div>
          <div className="top-nav-links">
            <div className="d-flex justify-content-between">
              <a href><i className="bi bi-question-circle" />Help</a>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link to="/" className="navbar-brand" style={{ width: '120px' }}>
            <img src="assets/image/WEBREAK.png" alt="Your alt text" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <a href className="navbar-mobile">
            <img src="assets/image/WEBREAK.png" alt />
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto align-items-center">
              <li className="nav-item">
                <li className="nav-item">
                  <Link to="/" className="nav-link" style={{ color: 'black' }} >Home</Link>
                </li>
              </li>
              <ul className="nav">
              <li className="nav-item">
                  <Link to="/shop" className="nav-link" style={{ color: 'black' }} >Shop</Link>
                </li>
              </ul>
              <li className="nav-item">
                <li className="nav-item">
                  <Link to="/about" className="nav-link" style={{ color: 'black' }} >About</Link>
                </li>
              </li>
              <li className="nav-item">
                <li className="nav-item">
                  <Link to="/contacts" className="nav-link" style={{ color: 'black' }} >Contact</Link>
                </li>
              </li>

            </ul>
            <form className="form-inline my-2 my-lg-0 mr-lg-5 justify-content-center">
              <div class="search_wrap position-relative">
                <input class="form-control mr-sm-2" type="text" placeholder="Search on Webreak" aria-label="Search" id="search_products" />
                <button type="button" class="btn btn-sm-1 btn-pink search-btn">
                  <i class="bi bi-search"></i>
                </button>
                <div id="search_suggestions" class="position-absolute w-100"></div>
              </div>
              <div className="dropdown">
                <div className="d-flex align-items-center ml-3">
                  <div id="visi"><i className="bi bi-person" id="bi_person" /></div>
                  <button className="dropbtn btn sign-in-btn my-2 my-sm-0" id="changeonsign">
                    Sign in
                  </button>
                </div>
                <div className="dropdown-content sign-in-content" id="sign_in_content">
                  <div id="sign_in_options_1">
                    <div className="sign_in_head">
                      <h3 className="py-3">Login / Create Account</h3>
                      <p className>
                        Register now and get 2000 Webreak reward points instantly!
                      </p>
                    </div>
                    <div className="sign_in_options text-center">
                      <Link to="/signin" className="d-flex ml-1 align-items-center justify-content-between">
                        <p className="w-75 text-center">Sign in with Mobile / Email</p>
                        <i className="bi bi-arrow-right ml-4" />
                      </Link>
                      <a href className="d-flex align-items-center justify-content-between">
                        <p className="text-center">
                          <img src="https://static.wixstatic.com/media/2cd43b_4c865a6338cd460b8f88f375e1b596c3~mv2.png/v1/fill/w_320,h_320,q_90/2cd43b_4c865a6338cd460b8f88f375e1b596c3~mv2.png" alt className="mr-2" />Google
                        </p>
                        <i className="bi bi-arrow-right ml-4" />
                      </a>
                    </div>
                  </div>
                  <div id="after_sign_in_option">
                    <ul style={{ listStyle: 'none' }}>
                      <li><a href><i className="bi bi-box" />Orders</a></li>
                      <li><a href="profile.html"><i className="bi bi-person-circle" />Profile</a></li>
                      <li><a href><i className="bi bi-wallet2" />Wallet</a></li>
                      <li><a href="mywish.html"><i className="bi bi-heart" />Wishlist</a></li>
                      <li><a href id="logout"><i className="bi bi-box-arrow-right" />Logout</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <a href="#" className="ml-3 position-relative" id="cart_icon"><i className="bi bi-bag" /><span id="cart_counter">0</span>
              </a>
            </form>



          </div>
        </nav>
      </header>
      <div>
        <section id="bag_section">
          <div className="bag_section_wrapper d-flex">
            <div id="bag_section_overlay" className />
            <div id="bag_items_display" className>
              <div className="bag_section_overlay_head py-1 position-fixed w-100">
                <i className="bi bi-arrow-left" id="bi_arrow_left" />
                <h5>Bag</h5>
              </div>
              <div id="products_cart_list" className="my-5 p-3" />
              <div className="bag_section_overlay_btm position-fixed p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <p id="grand_total">₹0</p>
                  <button id="proceed_btn">Proceed</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="pt-5 lg-rem" />
        <div className="pt-5" />

        {/* HERO SECTION */}
        <section className="hero-section" id="hero">
          <nav className="btm-nav pb-1">
            <ul className="d-flex justify-content-between" style={{ listStyle: 'none' }}>
              <Link to="/tshirt" >T-Shirt</Link>
              <Link to="/bag" >Bags</Link>
              <Link to="/jense" >Jense</Link>
              <Link to="/shirt" >Shirt</Link>
              <Link to="/jacket" >Jacket</Link>


              <li><a href className="offers-link"> </a></li>
            </ul>
          </nav>

        </section>
      </div>
    </Fragment>
  )
}

export default Header;