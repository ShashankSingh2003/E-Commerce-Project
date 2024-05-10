import React, { Fragment, useEffect } from 'react'
import Header from '../pages/Header';
import Footer from '../pages/Footer';

function Tshirt() {

    useEffect(() => {
        // JavaScript code
        var acc = document.getElementsByClassName("accordion");
        var i;
    
        // Function for Default disabling of accordion 
        disableAccordion();
    
        function disableAccordion() {
          for (i = 0; i < acc.length; i++) {
            var panel = acc[i].nextElementSibling;
            panel.style.display = "none";
          }
        }
    
        // Function for Enabling disabling on click accordion    
    
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
              panel.style.display = "none";
            } else {
              panel.style.display = "block";
            }
          });
        }
      }, []);
  return (
    <Fragment>
    <Header/>
   
        <h1 className="centerText productPageTitleFont" id="title-listing"> T-Shirts</h1>
        <div className="showFLEX" id="face-primer-middle-div-ID">
          {/* sidebar html and js present HERE  */}
          <div id="face-primer-sidebar-ID">
            <div id="ok">
              {/* sort here --  */}
              <button className="accordion">
                <div id="span-accordian-title-ID">
                  <div> Sort By : Price </div>
                </div>
                <i className="fa fa-angle-down" />
              </button>
              <div className="panel">
                <div className="control-box css-1ap0cm9"><input className="radio_sort_CLASS" name="PriceSort" type="radio" defaultValue="Low" />
                  <label className="control control-radio" htmlFor="radio_popularity_undefined">
                    <div className="control-value"><span className="title"> Price: Low To High </span></div>
                    <div className="control-indicator radio " />
                  </label>
                </div>
              </div>
              <div className="panel">
                <div className="control-box css-1ap0cm9"><input className="radio_sort_CLASS" name="PriceSort" type="radio" defaultValue="High" /><label className="control control-radio" htmlFor="radio_popularity_undefined">
                  <div className="control-value"><span className="title"> Price: High To Low </span></div>
                  <div className="control-indicator radio " />
                </label>
                </div>
              </div>
              <br />
              {/* sort enddddd */}
              {/* Brand */}
              <button className="accordion">
                <div id="span-accordian-title-ID">
                  <div> Brand </div>
                </div>
                <i className="fa fa-angle-down" />
              </button>
              <div className="panel">
                <div className="control-box css-1ap0cm9"><input className="filter_select_CLASS" name="Brand" defaultValue="Makeup Revolution" type="radio" /><label className="control control-radio" htmlFor="radio_popularity_undefined">
                  <div className="control-value"><span className="title">Makeup Revolution</span></div>
                  <div className="control-indicator radio " />
                </label>
                </div>
                <div className="control-box css-1ap0cm9"><input className="filter_select_CLASS" name="Brand" defaultValue="Lakme" type="radio" /><label className=" control control-radio" htmlFor="radio_popularity_undefined">
                  <div className="control-value"><span className="title">Lakme
                  </span></div>
                  <div className="control-indicator radio ">
                  </div>
                </label>
                </div>
                <div className="control-box css-1ap0cm9"><input className="filter_select_CLASS" name="Brand" defaultValue="Loreal Paris" type="radio" /><label className="control control-radio" htmlFor="radio_popularity_undefined">
                  <div className="control-value"><span className="title">Loreal Paris
                  </span></div>
                  <div className="control-indicator radio ">
                  </div>
                </label>
                </div>
                <div className="control-box css-1ap0cm9"><input className="filter_select_CLASS" name="Brand" defaultValue="SUGAR" type="radio" /><label className="control control-radio" htmlFor="radio_popularity_undefined">
                  <div className="control-value"><span className="title">SUGAR
                  </span></div>
                  <div className="control-indicator radio ">
                  </div>
                </label>
                </div>
                <div className="control-box css-1ap0cm9"><input className="filter_select_CLASS" name="Brand" defaultValue="Kay Beauty" type="radio" /><label className="control control-radio" htmlFor="radio_popularity_undefined">
                  <div className="control-value"><span className="title">Kay Beauty
                  </span></div>
                  <div className="control-indicator radio ">
                  </div>
                </label>
                </div>
                <div className="control-box css-1ap0cm9"><input className="filter_select_CLASS" defaultValue="Maybelline New York" name="Brand" type="radio" /><label className="control control-radio" htmlFor="radio_popularity_undefined">
                  <div className="control-value"><span className="title">Maybelline New York
                  </span></div>
                  <div className="control-indicator radio ">
                  </div>
                </label>
                </div>
              </div>
              {/* Brand */}
              {/* Price */}
              <button className="accordion">
                <div id="span-accordian-title-ID">
                  <div> Price </div>
                </div>
                <i className="fa fa-angle-down" />
              </button>
              <div className="panel">
                <div className="control-box css-1ap0cm9"><input className="radio_price_CLASS" name="Price" type="radio" defaultValue={999} /><label className="control control-radio" htmlFor="radio_popularity_undefined">
                  <div className="control-value"><span className="title">Rs. 1 - Rs. 999</span></div>
                  <div className="control-indicator radio " />
                </label>
                </div>
                <div className="control-box css-1ap0cm9">
                  <input className="radio_price_CLASS" name="Price" type="radio" defaultValue={1999} /><label className="control control-radio" htmlFor="radio_popularity_undefined">
                    <div className="control-value"><span className="title">Rs. 1000 - Rs. 1999
                    </span></div>
                    <div className="control-indicator radio ">
                    </div>
                  </label>
                </div>
                <div className="control-box css-1ap0cm9"><input className="radio_price_CLASS" name="Price" type="radio" defaultValue={3999} /><label className="control control-radio" htmlFor="radio_popularity_undefined">
                  <div className="control-value"><span className="title">Rs. 2000 - Rs. 3999
                  </span></div>
                  <div className="control-indicator radio ">
                  </div>
                </label>
                </div>
                <div className="control-box css-1ap0cm9"><input className="radio_price_CLASS" name="Price" type="radio" defaultValue={4000} /><label className="control control-radio" htmlFor="radio_popularity_undefined">
                  <div className="control-value"><span className="title">Rs. 4000 &amp; Above
                  </span></div>
                  <div className="control-indicator radio ">
                  </div>
                </label>
                </div>
              </div>
              {/* Price */}
              {/* Discount */}
              <button className="accordion">
                <div id="span-accordian-title-ID">
                  <div> Discount </div>
                </div>
                <i className="fa fa-angle-down" />
              </button>
              <div className="panel">
                <div className="control-box css-1ap0cm9"><input className="radio_Discount_CLASS" name="Discount" type="radio" defaultValue={40} /><label className="control control-radio" htmlFor="radio_popularity_undefined">
                  <div className="control-value"><span className="title">40% And Above</span></div>
                  <div className="control-indicator radio " />
                </label>
                </div>
                <div className="control-box css-1ap0cm9">
                  <input className="radio_Discount_CLASS" name="Discount" type="radio" defaultValue={30} /><label className="control control-radio" htmlFor="radio_popularity_undefined">
                    <div className="control-value"><span className="title">30% And Abovee
                    </span></div>
                    <div className="control-indicator radio ">
                    </div>
                  </label>
                </div>
                <div className="control-box css-1ap0cm9"><input className="radio_Discount_CLASS" name="Discount" type="radio" defaultValue={20} /><label className="control control-radio" htmlFor="radio_popularity_undefined">
                  <div className="control-value"><span className="title">20% And Above
                  </span></div>
                  <div className="control-indicator radio ">
                  </div>
                </label>
                </div>
                <div className="control-box css-1ap0cm9"><input className="radio_Discount_CLASS" name="Discount" type="radio" defaultValue={10} /><label className="control control-radio" htmlFor="radio_popularity_undefined">
                  <div className="control-value"><span className="title">10% And Above
                  </span></div>
                  <div className="control-indicator radio ">
                  </div>
                </label>
                </div>
                <div className="control-box css-1ap0cm9"><input className="radio_Discount_CLASS" name="Discount" type="radio" defaultValue={1} /><label className="control control-radio" htmlFor="radio_popularity_undefined">
                  <div className="control-value"><span className="title">All Discounted Products
                  </span></div>
                  <div className="control-indicator radio ">
                  </div>
                </label>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div id="products-grid-ID">
            
            <div class="cart-product-div-class">
              <div id="keyword-div-ID">
                <ul id="keyword-ul-ID">
                  <li id="keyword-li-ID" className='text-center'>FEATURED BESTSELLER</li>
                </ul>
              </div>
              <img src="/assets/image/productimage/Red.jpg" />
              <h5>T-Shirt</h5>
              <div class="price-Box-div-CLASS"><p>MRP: </p><p>₹450</p><p>-25%</p></div>
              <div id="extra-discount-div-ID"><p></p></div><h2 class="rating-box-h2-CLASS"><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></h2><div id="hoverCartSlide-ID"><button id="wishlist-button-ID"><img src="https://lh3.googleusercontent.com/drive-viewer/AFDK6gPrOYtFM7-C2NztwjjdjAnDYq8gLLhv6ciZ9ElkfqO9mg8TJWfKTLiRJaplG_yceF39QJUyL3cwFVRlB0Ri1nktX5z7xA=w1960-h1810" /></button><button id="add-to-cart-button-ID">Add To Bag</button></div>
            </div>

 
            <div class="cart-product-div-class">
              <div id="keyword-div-ID">
                <ul id="keyword-ul-ID">
                  <li id="keyword-li-ID" className='text-center'>FEATURED BESTSELLER</li>
                </ul>
              </div>
              <img src="/assets/image/productimage/Green.jpg"/>
              <h5>T-Shirt</h5>
              <div class="price-Box-div-CLASS"><p>MRP: </p><p>₹450</p><p>-25%</p></div>
              <div id="extra-discount-div-ID"><p></p></div><h2 class="rating-box-h2-CLASS"><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></h2><div id="hoverCartSlide-ID"><button id="wishlist-button-ID"><img src="https://lh3.googleusercontent.com/drive-viewer/AFDK6gPrOYtFM7-C2NztwjjdjAnDYq8gLLhv6ciZ9ElkfqO9mg8TJWfKTLiRJaplG_yceF39QJUyL3cwFVRlB0Ri1nktX5z7xA=w1960-h1810" /></button><button id="add-to-cart-button-ID">Add To Bag</button></div>
            </div>

            
            <div class="cart-product-div-class">
              <div id="keyword-div-ID">
                <ul id="keyword-ul-ID">
                  <li id="keyword-li-ID" className='text-center'>FEATURED BESTSELLER</li>
                </ul>
              </div>
              <img src="/assets/image/productimage/Black.jpg"/>
              <h5>T-Shirt</h5>
              <div class="price-Box-div-CLASS"><p>MRP: </p><p>₹450</p><p>-25%</p></div>
              <div id="extra-discount-div-ID"><p></p></div><h2 class="rating-box-h2-CLASS"><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></h2><div id="hoverCartSlide-ID"><button id="wishlist-button-ID"><img src="https://lh3.googleusercontent.com/drive-viewer/AFDK6gPrOYtFM7-C2NztwjjdjAnDYq8gLLhv6ciZ9ElkfqO9mg8TJWfKTLiRJaplG_yceF39QJUyL3cwFVRlB0Ri1nktX5z7xA=w1960-h1810" /></button><button id="add-to-cart-button-ID">Add To Bag</button></div>
            </div>
            

          </div>
          



        </div>
        <Footer/>
    </Fragment>
  )
}

export default Tshirt;
