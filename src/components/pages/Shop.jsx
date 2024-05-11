import React, { Fragment, useEffect } from 'react'
import Header from './Header';
import Footer from './Footer';

function Shop() {
  useEffect(() => {
    const product_data = JSON.parse(localStorage.getItem("data"));
    display_Products(product_data);
  }, []);

  function display_Products(productDataDisplay) {
      console.log("product_data");
      console.log(productDataDisplay);
      if (!productDataDisplay) return;
      productDataDisplay.map(function (elem) {
          var productcarddiv = document.createElement("div");
          productcarddiv.setAttribute('class', "cart-product-div-class");
  
          // keyword featured tag corner left div
          var keywordDiv = document.createElement("div");
          keywordDiv.setAttribute("id", "keyword-div-ID");
  
          var keywordUl = document.createElement("ul");
          keywordUl.setAttribute("id", "keyword-ul-ID");
  
          var keywordLi = document.createElement("li");
          keywordLi.setAttribute("id", "keyword-li-ID");
  
          keywordLi.textContent = elem.Keywords;
  
          // |-----| Apending
          keywordUl.append(keywordLi);
          keywordDiv.append(keywordUl);
  
  
          //keyword featured tag corner left div END <----->
  
  
  
          var image = document.createElement("img");
          image.setAttribute("src", elem.img_url);
          image.setAttribute("alt", elem.prodname)
          var namE = document.createElement("h5");
          namE.textContent = elem.prodname;
          var priceBox = document.createElement("div");
          priceBox.setAttribute("class", "price-Box-div-CLASS")
  
          var price1 = document.createElement("p");
          var MRP = document.createElement("p");
          var preDiscount = document.createElement("p");
  
          // preDiscount.textContent = 1;
          var disVar1 = elem.price;
          var disVar2 = elem.str_price;
          preDiscount.textContent = Math.round(100 - ((disVar1.replace('₹', '')) / disVar2.replace('₹', '') * 100)) + "%";
          // 100 - (disVar1.replace('₹', '') / disVar2.replace('₹', '') * 100);
          price1.textContent += "" + elem.price;
          MRP.textContent += "MRP: " + elem.str_price;
  
          var extraDiscount = document.createElement("p");
          var extraDiscountDiv = document.createElement("div");
          extraDiscountDiv.setAttribute("id", "extra-discount-div-ID")
  
          extraDiscount.textContent = elem.extraOff;
  
          extraDiscountDiv.append(extraDiscount);
  
          // Rating  start (not dynamic)
  
          var h2TagFor_Rate = document.createElement("h2");
          h2TagFor_Rate.setAttribute("class", "rating-box-h2-CLASS")
          var star1 = document.createElement("span");
          star1.setAttribute("class", "fa fa-star checked");
          var star2 = document.createElement("span");
          star2.setAttribute("class", "fa fa-star checked");
          var star3 = document.createElement("span");
          star3.setAttribute("class", "fa fa-star checked");
          var star4 = document.createElement("span");
          star4.setAttribute("class", "fa fa-star");
          var star5 = document.createElement("span");
          star5.setAttribute("class", "fa fa-star");
  
          // append all stars
          h2TagFor_Rate.append(star1, star2, star3, star4, star5)
  
          //rating end <------>
  
  
          var hoverCartSlide = document.createElement("div");
          hoverCartSlide.setAttribute("id", "hoverCartSlide-ID");
  
          var wishlist_button = document.createElement("button");
          wishlist_button.setAttribute("id", "wishlist-button-ID");
  
          var image_for_wishlist = document.createElement("img");
          image_for_wishlist.setAttribute("src", "https://lh3.googleusercontent.com/drive-viewer/AFDK6gPrOYtFM7-C2NztwjjdjAnDYq8gLLhv6ciZ9ElkfqO9mg8TJWfKTLiRJaplG_yceF39QJUyL3cwFVRlB0Ri1nktX5z7xA=w1960-h1810");
          wishlist_button.append(image_for_wishlist);
  
          var add_cart_BTN = document.createElement("button");
          add_cart_BTN.textContent = 'Add To Bag';
          add_cart_BTN.setAttribute("id", "add-to-cart-button-ID");
  
  
  
  
          add_cart_BTN.addEventListener("click", function () {
              add_cart_BTN.style.backgroundColor = "#E8734C";
              add_cart_BTN.textContent = 'Added To Bag';
              setTimeout(() => {
                  add_cart_BTN.textContent = 'Add To Bag';
                  add_cart_BTN.style.backgroundColor = "#FC2779";
              }, 2000);
              addToCart(elem)
          });
          hoverCartSlide.append(wishlist_button, add_cart_BTN);
          console.log(document.querySelector("#products-grid-ID"));
          priceBox.append(MRP, price1, preDiscount);
          productcarddiv.append(keywordDiv, image, namE, priceBox, extraDiscountDiv, h2TagFor_Rate, hoverCartSlide);
          document.querySelector("#products-grid-ID").append(productcarddiv);
      });
  
  
  
      var cartArr = JSON.parse(localStorage.getItem("carts")) || [];
  
      function addToCart(product) {
  
          console.log(product);
  
          cartArr.push(product);
          localStorage.setItem("carts", JSON.stringify(cartArr));
  
  
      }
  
  
  
  }

  return (
    <Fragment>
      <Header />
 
   <div id="face-primer-page-ID">
  <h1 className="centerText productPageTitleFont" id="page-title-name-ID"> Products Collection </h1>
  {/* <img class="imgDefault"
      src="https://images-static.nykaa.com/uploads/388338e8-81fc-4f05-aab3-84c2b38265ea.jpg?tr=w-2400,cm-pad_resize"
      alt="" srcset=""> */}
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
        {/* Discount */}
        {/* sidebar html and js END HERE  */}
      </div>
    </div>
    <br />
    {/* All products cards making through JS and appended here       */}
    {/* <div id="products-grid-ID2"></div> */}
    <div id="products-grid-ID"> </div>
  </div>
  {/* Rest making through JS */}
</div>
{/* All products cards making through JS and appended here       */}


      <Footer />
    </Fragment>
  )
}
export default Shop;