import React, { Fragment } from 'react'
import Header from './Header';
import Footer from './Footer';

function Profile() {
  return (
   <Fragment>
    <Header/>
<div>
  <div className="pt-5 lg-rem" />
  <div className="MyProfile-Container">
    <div className="Myprofile-navdiv">
      <a href="profile.html">&nbsp; ☺ &nbsp; My Profile</a>
      <a href="wallet.html">&nbsp; ⍌ &nbsp; My Wallet</a>
      <a href="order.html">&nbsp; ✆ &nbsp; My Orders</a>
      <a href="wishlist.html">&nbsp; ♡ &nbsp; My Wishlist</a>
      <a href="savedpayment.html">&nbsp; ❐ &nbsp; My Saved Payment</a>
      <a href="first.html">&nbsp; ⊘ &nbsp; Logout</a>
    </div>
    <div className="MYPROFILE-BOX">
      <div className="MyProBackground">
        <div className="mainProfile-box">
          <div>
            <img src="data:image/png;base64,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" alt className="Profile-Pic" />
          </div>
          <div>
            <br />
            <p className="USER-NAME">Nykaa user</p> 
            <br />
            <span className="Email___">Email:</span><span className="USER-EMAIL"> abc@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="Address-Container">
        <div>
          <p className="myaddresses-text">⏏ MY ADDRESSES</p>
          <div className="myaddresses-BOx">
            <p className="Noaddress">No Address Found</p>
            <p className="ShowAddress" />
            <p className="ShowNewName" />
            <p className="Showpostelcode" />
            <p className="ShowMobileno" />
          </div>
        </div>
        <div className="Add-New_address">
          ✎ ADD NEW ADDRESS
        </div>
      </div>
    </div>
  </div>
  <div className="NewAddress__Box">
    <p className="Cut-NewAddress__Box">X</p>
    <label htmlFor>Select Country</label>
    <select name id>
      <option value="India" selected>India</option>
    </select>
    <label>NAME</label>
    <input type="text" className="AddNewName" />
    <label>Mobile Number</label>
    <input type="number" placeholder={+91} className="AddNewNumber" />
    <label>Postel Code</label>
    <input type="number" className="AddPostelCode" />
    <textarea name id="Address-Textarea" placeholder="Address" defaultValue={""} />
    <span><input type="checkbox" defaultChecked /> Use this as my default Shipping Address</span>
    <button className="add-address-btn">ADD ADDRESS &gt; </button>
  </div>
</div>
<div>
  <div className="ForChatT" />
  <br /><br /><br /><br />
</div>


<Footer/>
   </Fragment>
  )
}
export default Profile;

