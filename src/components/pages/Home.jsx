import React, { Fragment } from 'react'
import Header from './Header';
import Footer from './Footer';

function Home() {
  return (
    <fragment>
      <Header />                    
      <div>
        {/* Carousel 1 */}
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            <li data-target="#carouselExampleIndicators" data-slide-to={3} />
            <li data-target="#carouselExampleIndicators" data-slide-to={4} />
            <li data-target="#carouselExampleIndicators" data-slide-to={5} />
            <li data-target="#carouselExampleIndicators" data-slide-to={6} />
            <li data-target="#carouselExampleIndicators" data-slide-to={7} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="https://images-static.nykaa.com/uploads/6bebd1e3-840d-41ab-9fdb-2277acab02ba.jpg?tr=w-1200,cm-pad_resize" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://images-static.nykaa.com/uploads/e0197b42-e11d-4508-b2f2-9f301eb44728.jpg?tr=w-1200,cm-pad_resize" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://images-static.nykaa.com/uploads/981ac15c-c9d7-48cc-b66c-c2f1563655ec.jpg?tr=w-1200,cm-pad_resize" alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://images-static.nykaa.com/uploads/eb1bd929-bea6-4ec7-9d84-6ad3b238dd73.jpg?tr=w-1200,cm-pad_resize" alt="Fourth slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://images-static.nykaa.com/uploads/914d46b1-9717-4f18-9a7e-612532521329.jpg?tr=w-1200,cm-pad_resize" alt="Fifth slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://images-static.nykaa.com/uploads/01010ca2-6741-48ff-822c-c818943a4a21.gif?tr=w-1200,cm-pad_resize" alt="Sixth slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://images-static.nykaa.com/uploads/e0197b42-e11d-4508-b2f2-9f301eb44728.jpg?tr=w-1200,cm-pad_resize" alt="Seventh slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://images-static.nykaa.com/uploads/ce070189-8f3e-4bb9-81cd-e2d1393424f1.jpg?tr=w-1200,cm-pad_resize" alt="Eigth slide" />
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
     
        {/* Discount coupon */}
        <div className="discount-cpn mt-3">
          <img src=" https://images-static.nykaa.com/uploads/3027100e-16e3-4e6a-919f-32a5cc5e86d8.jpg?tr=w-1200,cm-pad_resize" alt />
        </div>
        <section id="top-brands-section">
          <div className="t-b-heading">
            <h3 className="text-center py-3">TOP BRANDS</h3>
          </div>
          <div className="top-brands-wrapper">
            <div className="top-brands-child1 box_sh">
              <div className="top-brands-child-text">
                <p>Last Chance To Grab These Offers! Upto 40% Off</p>
              </div>
            </div>
            <div className="top-brands-child2 box_sh">
              <div className="top-brands-child-text">
                <p>Upto 35% Off Face Makeup That Fits Me As I Am!</p>
              </div>
            </div>
            <div className="top-brands-child3 box_sh">
              <div className="top-brands-child-text">
                <p>Upto 30% Off + Free Face Wash worth Rs. 139 on Rs. 699</p>
              </div>
            </div>
            <div className="top-brands-child4 box_sh">
              <div className="top-brands-child-text">
                <p>Buy 2 Get 1 Free gift Upto 10% off</p>
              </div>
            </div>
            <div className="top-brands-child5 box_sh">
              <div className="top-brands-child-text">
                <p>Buy 2 Get 1 Free Flat 10% Off On Singles</p>
              </div>
            </div>
            <div className="top-brands-child6 box_sh">
              <div className="top-brands-child-text">
                <p>
                  Bestseller Minis Starting at ₹425 + Exciting Gifts on Purchase!
                </p>
              </div>
            </div>
          </div>
          {/* Deals of the day */}
          <div className="deals_of_the_day">
            <img src="https://images-static.nykaa.com/uploads/5b47c37e-e0fe-47d7-9c60-f719ff6e75d3.jpg?tr=w-1200,cm-pad_resize" alt />
          </div>
        </section>
        {/* Only At Nykaa SECTION*/}
        <section className="only_at_nykaa">
          <div className="o-a-heading">
            <h3 className="text-center py-3">ONLY AT WEBREAK</h3>
          </div>
          <div className="only-nykaa-wrapper text-center d-flex justify-content-center flex-wrap p-5">
            <div className="only-nykaa-child1 box_sh only_at_nykaa_child">
              <div className="only-nykaa-child-text">
                <p>Last Chance To Grab These Offers! Upto 40% Off</p>
              </div>
            </div>
            <div className="only-nykaa-child2 box_sh only_at_nykaa_child">
              <div className="only-nykaa-child-text">
                <p>Upto 35% Off Face Makeup That Fits Me As I Am!</p>
              </div>
            </div>
          </div>
        </section></div>

      <Footer />




    </fragment>

  )
}
export default Home;