import React, { Fragment } from 'react'
import Header from './Header';
import Footer from './Footer';


function MyWish() {
  return (
    <Fragment>
   <Header/>
<div>
  <div id="navbar" />
  <p className="H-Mtext"><a href="index.html">HOME</a> &gt; My Wishlist</p>
  <div className="MyProfile-Container">
    <div className="Myprofile-navdiv">
      <a href="profile.html">&nbsp; ☺ &nbsp; My Profile</a>
      <a href="wallet.html">&nbsp; ⍌ &nbsp; My Wallet</a>
      <a href="order.html">&nbsp; ✆ &nbsp; My Orders</a>
      <a href="mywish.html">&nbsp; ♡ &nbsp; My Wishlist</a>
      <a href="Mysavedpayment.html">&nbsp; ❐ &nbsp; My Saved Payment</a>
      <a href="index.html">&nbsp; ⊘ &nbsp; Logout</a>
    </div>
    <div className="MYWISH-CONT">
      <p className="mywish-text">My Wishlist <span className="prod-count" /></p>
      <div className="MYWISH-BOX">
        <div className="data">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACpCAMAAAB3a6PBAAABQVBMVEX////r6+v+/v78Jnn6+vo/QU34+Pjz8/Pq6urx8fH19fWen6VzdH3n5+fDw8bKy85naXK9EOB+0yHh4eFLTVheYGpGSFM9P0vV1tjuw/fQ0NP2J3hYWmSNjpVQUl3c8sWN2Dz9j5u2trqtrrN6e4PUcuf78P3ELOL1piPv+uO25oH+8/SV20lJP0/oKnSOOV2Fh45WPlHULnDNS+fenevHOuPilvH2tUr5yXv626axsrf979f++fH5z4r4w2z74bX1rjn+3OD+zNH9qLLn99X9hZOd3lf+v8bO7qv9rrf9naf+5ej9eom+6Y/F65xjPFRzOle7MmmnNmN9OljIMWyMOlv8WI/9j7D+rsX+wtf+gK38bpb9obn+tcn8RIr9X5f+0t+aNl/9iqnnxu3q1O7qtPXXgen3u1n07N700Zj14sSO/mOzAAAMTUlEQVR4nO2deX/SyhrHScgkZEJCNIsICSqgVisUelzbalu1p3bRltp6rl5v7+nVY7Xv/wXcyb4SQhZAPvz+gLRkmW+fZWaeJkOhsNBC6YQXcFvTbku2wsM07UZlolCyOUGMZvu9CeOwzTgfTpAQUjQShqS9UxCSRFyyWeXDSWgQhamEQCnoMKItAum3oMMJOJRLZzOF0QiQ8GmW+UaBudhYTRpgiGaRDh9J5sCxlko0qfGQ0YTTJiNjkHnt5uKzNIxuqmgEFYMsxG6sIFSaXI3FKNKlML6poeEwHprDZ6JVKwzP84oo82pTgEh+vqnT4TGtFmSrMA0Ajo6PjwAQJbVKQ1MuvOnSxXVIN5zpkVwZ9PuD1dXVbn315LijrAm01ulXuYoAQ/Amjjae1TxwQpPvfBx060VN9e7pSqfBCEIV+akkyTLPcKyJNyW6sWLND4fYVlaLjuoXHYlRRdDpf/x4DECDZ1jTelOBI+Ik/yCawVYtyyur9aKb7kRudI7OTpGbFruDlaOOxHltN0G0JGYz8HQ4pnHkZSsWu2d9ZEvjl93u4KyjtOB0TJfAbB44Hlz42Ir100FXez//9En7qPsR8JyHLn8qrNWWZJBGN5BQF3Ba9Kuu4/71r8/Ly9tfPxW7K52eMFHHZBAYrzJp1QYr3QCcIYRGFAoHX8+L3WOxRbtMlzMaLAOpQiQ71vzra6NkEjJgMISt/tfnL/V/fz04+FIsnnR4dnJ+yQMm8bEeOFUc+EPO45zn/1n+G4XdkWhkzEnA9UAl+cEeuJ48FM7Ql4Ptc9Q7iCo5Ib/kgJriaDccrXaGuaWp//69jfxy0OlRE/JLRSFTHO2Gw1qdi2i4888H/9OCzsiX+fd0VdBKc7jNprllK9jN+U13jnY46ZudQe6GY0A1zeEeuKZyNqwrcOuko9KujJIVSYh6wHP2QOlqtLSJDJqvUWhew/dXR7PVL0QGTgauzLt+GH9k6a4wCEJPPhnhl0VtBKa0WDgJOJwv29tEwmGlA8fJR6P98vSozLHYBOBwyoHDE42aPXC1dn+k6dAUj6myLJZ/TwBpB45MwuaFE1rKx1FRd3qk1PTSX96Gg7QLbuzigh8O0VXb8kW0Y6I5j6qxlUpUvnAE7YZLNpcreenWpE7kEKyLhs0VHQ7DYJ5wOO2BS8TmN52gip0Ix6wP+nzLZMMwIj84nMoOzom6ahsMD7vuSb+hZRMTjs4PDtKZwPlNVyt3VvyFFIvtoi+abDqc5pj5sBF0lnAuOg7RhSaV1RUgNwUbTbs6kQ8cTucFJzTLnZCU2T05lnkXmw5H5wMHM4ML0q3xftvVu6fH/UaPY+14M+FgHmymU2YI56ZrScAzP9Dq6nK75Q43zLx+wtpNlIxMmRGc13SGZ4qdCytn1uuDs74otWoCy/qcUrsXInvHJOks4ULoOAl5Zl13yMFRX+YZQWADPqkrTR0gVDidB5zXduUO8sz66uAIyGWmwoZZjc4lp8CM4XymM2xXls8GF8dyA6g1kyxgtTxyCkFnDeenQ3gYVwadjtRjbnCRbFnnFJg9XOC//gINOamhciUOwZUi0DI2ndtwucGxFISVaglCBOeghbB9+26b7p8M4GAecAE67T4N7b/gGpy9U4jd6Ls/DNPd/ONeejaczgXOf68N1MtiBIITW8PJkO7dv//0+71/7l57nJ6tACm3soPz0Vk3gHE3pBt8xQfkacLja7ruZ8CGU3nB2XQlDxyoNRXQE4ayUdR9He5HBnAwPzgsDK4CajhkZJnBhqBR1F0d7mZ6Np/hsoVzbFcqkUahHdfgcLzUA0pzCBv1Iys4Ilc4zA+Hm3A4XuUBXw1lo57ocE9jtP7qeeTHMF84B88Ph+PNBuixIWw3r92/++OPa09Goq0/31qKGon6vTJ7OAsvCKeFnsgETffkKXrBbz4Z4Zfrr569KLz8FbGH3yvzgMN8cBWnbs62gcL5WvD4m/aKRilPozrxq8vLTfS2sRWxj98rc4HT5cBx7jpQTQLlqrsB3+/pb9oo5dtwqz27vDK2nr+wfhcoCwa8Ml84rQUIDsNc8218TQRqKRh5kdO6zXVr6+eWubHxcsk3nQh4ZX5w1pV1OAxzDf2hChqtQEPiTnxebeqMz7d++eMv4JUTg8Pc0zZBu63H15C4E5/1Z1pu2ULeubHk+SDolZOD06rnTksqCmgLY/ilS5e/Lp/p1nPFn6agV04SzuObeEtEI7Ikfvliy8wtTvwh4vUCAQOaKBxKM04jaRR6a5TTkrhwG86mEX9abrl8WQiyTRouEHo1pykx4VzS4k/PLfjGEj4DcJ5uocChyRBrNSVBje9y08gtKP5+zQScJ/QIRlaqyeGutszcguLPRvq5Pk0450MkVhEr4wWdSxsv7Ah89cIk+rX0arpw7tCjeNnwzHSF9fVn2jnol0vPfy5NGc4depTYywAOXm7Cn8+XXqL8a8ff1OBcoceAasJ06QiHV89ebRlUdvxNEc4eshANPmlGccHBLTthWvE3TTgMM3FahunSwHnGJ0b8TRvO9MQq4BKmy3A4+GpzBuAwYx8BNNPCkR64q8tZgDM8kQatbC0HL69mAM7YKwO39FoObvycATjDcoxMp+3ofHCzkFBoYx+pDecQztiJNUJuzuBMw/VA+sFlGNt04ax0wpiNmSc4ythDatDp4cgwTRPOSJVN0LQaM0dwBgvZ4Mn5gzPnBGi+M4dwVjfQI+cPzuwG2jKbCRwxU3CGU9YA47Ql1cB5luCMtI9LCjWHcIbhWoAj5w/OCC9K5MmM4PDZgTOzierqBpBSFYhmB874UAAqOX9w5qCSF7HM4EI7uqnAGRQcaHnbkoatEPas8PT+y0Mokm/durmAswaVFWL+4IxPaLnta0q6BwzCnnCfPJxdWxAmCJfsgdyhspoagDM+qALG35SUj4ZEwiVbOGqorNP64cxaAt+g/U1JxxYNh2fKZud1P5xdWwg0JSVciF+mXb5giJxajw/Oqi1IgZakfWApGi47z3TfbOKFs2sLtczhQvzSA5doyZCgPGf0wpm1Bbk34qgkCrbdB5e9PHDmoLItl7I33NTh7NpC0HAZPCM4XTgzzUjKKF9OpoDpPHA4SdHxRcWao7jhjP3XAJeL4aLhxl8RJUZ13wVndANQ5EMMl8mTq346F1ySjmA0netOWeMXamBQmRVbBFyyEcrIVjlwVolZzctwEXDJevCRprPhzG6gLAYGlZnB+enSrmRDx4azawux2V4vZwWXdNw86m9uwZkmVoKDymFwy4dvxjYoHg6XdLI66nIWnFVi9tcWhhtuf/v14etx4TxKO1mlYsLZtQU8TPber7edzTfoZe/OQWywtw9sund+uFwTinPfQiRbYefQpjvUX7d3dmPTPXxvwN36c8MPl2tXYNcWog23u7e8v2+kkTeWR+7uxDXexu3bHx5s3Hp4/V3ALRNNVkcPCXU4u7YAg2Tbuzbc8g562T7UbLW9b59heS8mXOHddV23rVOnWiUxzr0VHKhYWacJmiFm29uxG79v+KQWaDtjdwOabutw761Tt2XPp+NMVuPlaQZUTackG1II28GdgpUU9RSi6eDOnfiR5tZDHe6WdW4GCIlOE1tt2bqVGWGGwGnpkHijB9qh7eTLbxIZrvDeC1cFXBYIw9XomRus3Ath2zV8UkuKe+5OLdl47JEO98E+u8KPPiaFmvYfry2XgmzLhxbF3s6d1Be7df32w/d/Xn9kn76ZYv3t0WJlyWx9LbQb2HestTvuaCSoRx+011uPbL/E+TQrcI8QyYOasYVLChlke70fffx4evfW3PiwYV2AknKzXVWxnXINcCGGO0yWN8L1wHls8K19BYoHUh4pk2CAbDkFFPkQtoP4A8cx5bpISwGNcvrvK/B+eQEPQM/+m6lACIHLcSVgt2q9lN80EVCjvObMGFighrHluYZzNtIerG2OaGZZpCfLlhkdLpQBH7kCOwdak2bLjg7XHqwdPicnFCns6wPzZcuQjtRWGRo2/2k5S6JMkC07OBzHekAJH6YOqS3kDpeptFWGwvpLFbATb0sOajaAGihkVnIdvE5QBCOLLa/DCTKf+eKj01KpByR36GENZWRR+jdSjQdlK/RoRhRznulPWij02pxAsJwqA3VkSfp3E9EsGwPM+UPTBWutZnVuMslCCy200EILLbTQQgsttNBCCy00L/o/unCQ+ca8JIcAAAAASUVORK5CYII=" alt />
        </div>
      </div>
      <div className="Text">
        <h3>
          NO ITEMS IN THE WISHLIST
        </h3>
      </div>
      <div>
        <p id="ptag">Add now, Buy Later</p>
      </div>
      <div>
        <p id="ptag"> Save your favourite beauty items here!</p>
      </div>
      <div className="vertical-center">
        <button onclick="changepage()">Start shopping</button>
      </div>
    </div>
  </div>
  <div className="ForChatT" />
</div>
<Footer/>
    </Fragment>
  )
}
export default MyWish;
                   

