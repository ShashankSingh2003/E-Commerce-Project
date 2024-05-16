import React, { Fragment } from 'react'

function Payment() {
  return (
    <Fragment>
 <div>
  <div id="header-Shoppingbag-ID">
    <div id="logo-Shoppingbag-ID">
      <span>
        <img src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/nykaa-logo.svg" alt srcSet />
      </span>
    </div>
    <div id="progress-steps-ID">
      <div className="steps-CLASS">
        <img  className='Img' src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/tick-icon.svg" alt srcSet />
        <span>
          <p> Sign Up </p>
        </span>
      </div>
      <hr />
      <div className="steps-CLASS">
        <img className='Img'  src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/tick-icon.svg" alt srcSet />
        <span>
          <p> Address </p>
        </span>
      </div>
      <hr />
      <div className="steps-CLASS">
        <img  className='Img' src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/edit-icon.svg" alt srcSet />
        <span>
          <p> Payment </p>
        </span>
      </div>
    </div>
  </div>
  {/* hero Section  */}
  <div id="hero-section-payment-page-ID">
    <div>
      <p> Choose payment method</p>
      <p>Choose the payment method you prefer
      </p>
    </div>
    <div>
      <img src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/payment-icon.svg" alt />
    </div>
  </div>
  {/* hero Section End  */}
  <div className="container d-flex justify-content-center mt-5 mb-5">
    <div className="row g-3">
      <div className="col-md-6">
        <span>Payment Method Options</span>
        <div className="card">
        <div className="accordion" id="accordionExample">
    <div className="card">
        <div className="card-header p-0" id="headingOne">
            <h2 className="mb-0">
                <button className="btn btn-light btn-block text-left rounded-0 p-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <div className="d-flex align-items-center justify-content-between">
                        <span>Credit card</span>
                        <div className="icons">
                            <img src="https://i.imgur.com/W1vtnOV.png" style={{ width: 20 }} />
                            <img src="https://zeevector.com/wp-content/uploads/2021/03/rupay-logo-768x458.png" style={{ width: 20 }}/>
                            <img src="https://i.imgur.com/2ISgYja.png" style={{ width: 20 }} />
                        </div>
                    </div>  
                </button>
            </h2>
        </div>
        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body payment-card-body">
                <span className="font-weight-normal card-text">Card Number</span>
                <div className="input">
                    <i className="fa fa-credit-card" />
                    <input type="text" className="form-control" id="card-number-on-payment-ID" placeholder="0000 0000 0000 0000" />
                </div>
                <div className="row mt-3 mb-3">
                    <div className="col-md-6">
                        <span className="font-weight-normal card-text">Expiry Date</span>
                        <div className="input">
                            <i className="fa fa-calendar" />
                            <input type="text" className="form-control" placeholder="MM/YY" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <span className="font-weight-normal card-text">CVV</span>
                        <div className="input">
                            <i className="fa fa-lock" />
                            <input type="text" className="form-control" id="cvv-on-payment-ID" placeholder={0o0} />
                        </div>
                    </div>
                </div>
                <div className="p-3">
                    <button className=" free-button pay-now-payment-page-button-CLASS "><a className="pay-now-button-a-tag-CLASS" href>Pay</a></button>
                    <div id="have-a-promo-code-Main-div-ID" className="text-center">
                        <a href="#" id="have-a-promo-code-a-ID">Have a promo code?</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="card">
        <div className="card-header p-0" id="headingTwo">
            <h2 className="mb-0">
                <button className="btn btn-light btn-block text-left collapsed p-3 rounded-0 border-bottom-custom" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <div className="d-flex align-items-center justify-content-between">
                        <span>Paytm</span>
                        <img src="https://scontent.fjai6-1.fna.fbcdn.net/v/t1.6435-9/33653659_1859355310796698_3483423626168893440_n.png?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=ksHg2zIimpAAX_kDGSS&_nc_ht=scontent.fjai6-1.fna&oh=00_AfAFc4Sinpzx0D_7VPwzvsHt7PXk3-G-aoCrbcTTu0C_nw&oe=63B2C31A" width={30} />
                    </div>
                </button>
            </h2>
        </div>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div className="card-body">
                <input type="text" className="form-control" placeholder="Paypal email" />
            </div>
        </div>
    </div>
</div>

        </div>
      </div>
      <div className="col-md-6">
        <span>Summary</span>
        <div className="card">
          <div className="d-flex justify-content-between p-3">
            <div className="d-flex flex-column">
              <span>Bag<i className="fa fa-caret-down" /></span>
              <a href="#" className="billing" />
            </div>
            <div className="mt-1">
              <sup className="super-price" />
              <span className="super-month" />
            </div>
          </div>
          <hr className="mt-0 line" />
          <div className="p-3">
            <div className="d-flex justify-content-between mb-2">
              <span>Deliver To</span>
              <span id="show-address-on-payment-ID">Default Home Address</span>
            </div>
            <div className="d-flex justify-content-between">
              <span><i className="fa fa-clock-o" /></span>
              <span />
            </div>
          </div>
          <hr className="mt-0 line" />
          <div className="p-3 d-flex justify-content-between">
            <div className="d-flex flex-column">
              <span>Price Details</span>
              <small> Total Value </small>
            </div>
            <span id="total-price-details-on-payment-page-ID" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </Fragment>
  )
}
export default Payment;