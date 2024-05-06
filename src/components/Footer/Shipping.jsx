import React, { Fragment } from 'react'
import Header from '../pages/Header';
import Footer from '../pages/Footer';


function Shipping() {
  return (
    <Fragment>
      <Header />
   <div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n    #main {\n        border: 1px solid #e1e1e1;\n        margin: 20px auto 20px;\n        max-width: 82em;\n        overflow: hidden;\n        padding: 15px;\n        background: #fff;\n        font-family: 'Inter', sans-serif;\n    }\n\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6,\n    .h1,\n    .h2,\n    .h3,\n    .h4,\n    .h5,\n    .h6 {\n        font-family: 'Inter', sans-serif;\n    }\n\n    .policy .heading {\n        color: #3f414d;\n\n        text-transform: uppercase;\n        text-align: center;\n        margin-bottom: 10px;\n    }\n\n\n    .policy ul {\n        padding-left: 15px;\n        margin-bottom: 15px;\n    }\n\n    .policy p {\n        margin: 10px 0;\n        line-height: 20px;\n    }\n\n    .policy .circalstyle li,\n    .policy ul li {\n        list-style: disc;\n        margin-top: 5px;\n    line-height: 20px;\n    }\n \n" }} />
  <div id="main" className="policy">
    <h2 className="heading title-medium"> SHIPPING POLICY</h2>
    <h4 className="subHeading title-xsmall">How does the delivery process work?</h4>
    <ul className="body-medium">
      <li>Once our system processes your order, your products are inspected thoroughly to
        ensure they are in a perfect
        condition.
      </li>
      <li>After they pass through the final round of quality check, they are packed and handed
        over to our trusted
        delivery partner.
      </li>
      <li>Our delivery partners then bring the package to you at the earliest possiblity. In
        case, they are unable to
        reach your provided address or at a suitable time, they will contact you to resolve
        the issue.
      </li>
      {/* <li>International Shipping – International clients do not pay import duties levied by
      their government to Webreak.
      Clients will have to pay the customs duty to the courier provider in order to
      receive the product.
  </li> */}
    </ul>
    <h4 className="subHeading title-xsmall">How are items packaged?</h4>
    <p className="body-medium">We are committed to sustainability in our packaging while ensuring the safety of the orders
      dispatched. Our Webreak cardboard outer box is eco friendly and made from 100% recycled paper. Where feasible, we
      use paper-fillers instead of bubble wrap, and this is a process of continuous improvement for us. We are
      committed to further substantially reducing plastic in our packaging and are constantly innovating new solutions
      given the nature of our category.</p>
    <h4 className="subHeading title-xsmall">What is the range of locations to which Webreak ships their
      products?</h4>
    <p className="body-medium">Webreak does not ship internationally currently.</p>
    <h4 className="subHeading title-xsmall">My order has been shipped. Now how can I track it?</h4>
    <p> After placing your order, you will receive a confirmation message on your registered email
      and phone number. As
      we prepare and ship your order within 24-48 hours of the confirmation, you can then check the
      status of your package
      through the 'Track' button on the 'My Orders' section. You can also choose to receive your
      order updates on WhatsApp.</p> 
    <h4 className="subHeading title-xsmall">What is the estimated delivery time?</h4>
    <p>We usually dispatch most orders within 1-4 business days (excluding Sundays and public
      holidays)
    </p>
    <ul>
      <li>Though, we keep 95% of our catalogue in our inventory, certain products need to be
        sourced directly from the
        brand itself so that we can live up to our promise of providing fresh, non-expired
        products.
      </li>
      <li>While we are trying our best to avoid this situation, these products might delay
        your order.
      </li>
      <li>If you are ordering our products from a Mega Sale event, dispatches may be a bit
        delayed due to increased
        volumes. We will target to dispatch all orders within 5 days of order date.
      </li>
    </ul>
    <h4 className="subHeading title-xsmall">My order will be shipped in multiple shipments? What does
      this mean?</h4>
    <p>Don’t worry! This is a completely normal situation. This just means that different parts
      of your order may have
      simply been shipped from our different warehouse locations.
      Rest assured, you will only have to pay the shipping/CoD charge if applicable, on the
      first package you receive.
    </p>
    {/* <p>International orders, in most instances, will be shipped in their entirety as one
  shipment.
    </p> */}
    <h4 className="subHeading title-xsmall">Are there any shipping charges applicable on my order?</h4>
    <ul>
      <li>We have standard shipping charges for most addresses.
      </li>
      <li>The shipping charges currently are - New customers- Free shipping on orders above 299 Existing customers- Free shipping on orders above 299.
      </li>
      {/* <li>International shipping charges-A flat rate of all Rs.500 will be charged for all
      orders below Rs.5000,
      while there is free shipping for all orders above Rs.5000.
  </li> */}
      <li>We are currently not accepting Cash On Delivery orders below Rs.499 or above
        Rs.50,000.
      </li>
    </ul>
    <h4>Does Webreak ship outside India?</h4>
    <p>Webreak does not ship internationally currently.
    </p>
  </div>
</div>

      <Footer />
    </Fragment>
  )
}
export default Shipping;