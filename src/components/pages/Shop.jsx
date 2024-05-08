import React, { Fragment, useEffect } from 'react'
import Header from './Header';
import Footer from './Footer';

function Shop() {

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
      <Header />
      <div id="face-primer-page-ID">
        <h1 className="centerText productPageTitleFont" id="page-title-name-ID">Shop  </h1>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100 changeIMG1 " src="https://images-static.nykaa.com/uploads/3c9e27f1-705d-4d5a-8ec3-c9c3c28dc9e3.jpg?tr=w-1200,cm-pad_resize" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 changeIMG2" src="https://images-static.nykaa.com/uploads/388338e8-81fc-4f05-aab3-84c2b38265ea.jpg?tr=w-2400,cm-pad_resize" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 changeIMG3" src="https://images-static.nykaa.com/uploads/67dc1a42-52d5-4f03-b7eb-ce1e35bf6594.jpg?tr=w-2400,cm-pad_resize" alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://images-static.nykaa.com/uploads/fe975d47-3792-4599-978f-ee185ef9f114.jpg?tr=w-1200,cm-pad_resize" alt="Fourth slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <h1 className="centerText productPageTitleFont" id="title-listing"> All Products</h1>
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
              <img src="https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/c/d/cd0f1fb4710032517839_1.jpg" alt="Neutrogena Hydro Boost Water Gel" />
              <h5>Neutrogena Hydro Boost Water Gel</h5>
              <div class="price-Box-div-CLASS"><p>MRP: </p><p>₹450</p><p>-Infinity%</p></div>
              <div id="extra-discount-div-ID"><p></p></div><h2 class="rating-box-h2-CLASS"><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></h2><div id="hoverCartSlide-ID"><button id="wishlist-button-ID"><img src="https://lh3.googleusercontent.com/drive-viewer/AFDK6gPrOYtFM7-C2NztwjjdjAnDYq8gLLhv6ciZ9ElkfqO9mg8TJWfKTLiRJaplG_yceF39QJUyL3cwFVRlB0Ri1nktX5z7xA=w1960-h1810" /></button><button id="add-to-cart-button-ID">Add To Bag</button></div>
            </div>

 
            <div class="cart-product-div-class">
              <div id="keyword-div-ID">
                <ul id="keyword-ul-ID">
                  <li id="keyword-li-ID" className='text-center'>FEATURED BESTSELLER</li>
                </ul>
              </div>
              <img src="https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/1/d/1de91fbDOTKE00000164-1.jpg" alt="Dot &amp; Key Cica Niacinamide Night Gel With Tea Tree Oil, Figh..."/>
              <h5>Neutrogena Hydro Boost Water Gel</h5>
              <div class="price-Box-div-CLASS"><p>MRP: </p><p>₹450</p><p>-Infinity%</p></div>
              <div id="extra-discount-div-ID"><p></p></div><h2 class="rating-box-h2-CLASS"><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></h2><div id="hoverCartSlide-ID"><button id="wishlist-button-ID"><img src="https://lh3.googleusercontent.com/drive-viewer/AFDK6gPrOYtFM7-C2NztwjjdjAnDYq8gLLhv6ciZ9ElkfqO9mg8TJWfKTLiRJaplG_yceF39QJUyL3cwFVRlB0Ri1nktX5z7xA=w1960-h1810" /></button><button id="add-to-cart-button-ID">Add To Bag</button></div>
            </div>

            
            <div class="cart-product-div-class">
              <div id="keyword-div-ID">
                <ul id="keyword-ul-ID">
                  <li id="keyword-li-ID" className='text-center'>FEATURED BESTSELLER</li>
                </ul>
              </div>
              <img src="https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/9/f9441e58906009450070_1.jpg" alt="Biotique Morning Nectar Nourish &amp; Hydrate Moisturizer"/>
              <h5>Neutrogena Hydro Boost Water Gel</h5>
              <div class="price-Box-div-CLASS"><p>MRP: </p><p>₹450</p><p>-Infinity%</p></div>
              <div id="extra-discount-div-ID"><p></p></div><h2 class="rating-box-h2-CLASS"><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></h2><div id="hoverCartSlide-ID"><button id="wishlist-button-ID"><img src="https://lh3.googleusercontent.com/drive-viewer/AFDK6gPrOYtFM7-C2NztwjjdjAnDYq8gLLhv6ciZ9ElkfqO9mg8TJWfKTLiRJaplG_yceF39QJUyL3cwFVRlB0Ri1nktX5z7xA=w1960-h1810" /></button><button id="add-to-cart-button-ID">Add To Bag</button></div>
            </div>
            

          </div>
          



        </div>

      </div>
      {/* Rest making through JS */}

      <Footer />

    </Fragment>
  )
}
export default Shop;