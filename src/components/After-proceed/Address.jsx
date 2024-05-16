import React, { Fragment } from 'react'


function Address() {
  return (
    <Fragment>
      <>
  <div>
  {/*------ header placed here -------*/}
  <div id="header-Shoppingbag-ID">
    <div id="logo-Shoppingbag-ID">
      <span>
        <img src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/nykaa-logo.svg" alt srcSet />
      </span>
    </div>
    <div id="progress-steps-ID">
      <div className="steps-CLASS">
        <img src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/tick-icon.svg" alt srcSet />
        <span>
          <p> Sign Up </p>
        </span>
      </div>
      <hr />
      <div className="steps-CLASS">
        <img src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/edit-icon.svg" alt srcSet />
        <span>
          <p> Address </p>
        </span>
      </div>
      <hr />
      <div className="steps-CLASS">
        <img src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/step-3-icon.svg" alt srcSet />
        <span>
          <p> Payment </p>
        </span>
      </div>
    </div>
  </div>
  {/* BAG SECTION */}
  <section id="bag_section">
    <div className="bag_section_wrapper d-flex">
      <div id="bag_section_overlay" className />
      <div id="bag_items_display" className>
        <div className="bag_section_overlay_head py-1 position-fixed w-100">
          <i className="bi bi-arrow-left" id="bi_arrow_left" />
          <h5>Bag</h5>
        </div>
        <div id="products_cart_list" className="mt-5 p-3">
          <div className="sidebar-address-main-div-CLASS">
            <form id="my-address-form">
              <header>Address</header>
              <div className="address-first-div-CLASS">
                <input className="address-input-CLASS" type="text" placeholder="Pincode" maxLength={6} minLength={6} />
                <input className="address-input-CLASS" type="text" placeholder="House/ Flat/ Office No." />
                <input className="address-input-CLASS" type="text" placeholder="Road Name/Area/ Colony" />
              </div>
              <div className="address-second-div-CLASS">
                <input className="address-input-CLASS" type="text" name id placeholder="Name" />
                <input className="address-input-CLASS" type="text" name id placeholder="Phone" maxLength={10} minLength={10} />
                {/* <input class="address-input-CLASS" type="email" name="" id=""
                                  placeholder="Email Id(Optional)"> */}
              </div>
              <div id="ship-to-address-div-ID">
                <button type="submit" id="ship-to-address-button-ID">Ship to this Address <a href /></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*------ header end  here -------*/}
  <div id="address-page-parent-box-ID">
    <div id="first-main-div-choose-address-ID">
      <div>
        <p>Choose Address</p>
        <p>Detailed address will help our delivery partner reach your doorstep quickly
        </p>
      </div>
      <div>
        <img src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/header-address.svg" alt srcSet />
      </div>
    </div>
    <div id="second-main-div-choose-address-ID">
      <div id="add-new-address-ID">
        <div>
          <img src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/plus-icon.svg" alt />
          <p>Add new Address</p>
        </div>
      </div>
      <div className="user-cart-details-CLASS">
        <div className="bag-quantity-CLASS">
          <div>
            <p>Bag</p>
          </div>
          <div className="items-count-CLASS"> 2 items </div>
        </div>
        <div className="bag-price-details-CLASS">
          <div>
            <p>Price Details</p>
          </div>
          <div className="items-total-value-CLASS"> ₹1999 </div>
        </div>
        <br />
        <div className="nykaa-trust-payment-CLASS">
          <p>Buy authentic products. Pay securely. Easy returns and exchange</p>
          <span>
          </span>
          <div>
            <img src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/pay-secure-lock.png" alt />
          </div>
        </div>
      </div>
    </div>
    <div className="pt-5 lg-rem" />
    <div className="pt-5" />
  </div></div>

      </>
    </Fragment>
  )
}
export default Address;