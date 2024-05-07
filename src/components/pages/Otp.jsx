import React from 'react';

class Otp extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const val = event.target.elements.otp.value;
    if (val === "7799") {
      alert("Login Successfully");
      window.location.href = "index.html";
      localStorage.setItem("switch", true);
    } else {
      alert("Wrong OTP !");
      localStorage.setItem("switch", false);
    }
  }

  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Login</title>
        </head>
        <style>
          {`
            body {
              background-color: #F3F3F3;
              display: flex;
              justify-content: center;
              text-align: center;
              align-items: center;
              font-family: sans-serif;
            }

            .main-div {
              margin: 64px 302px;
              background-color: white;
              height: 560px;
              width: 300px;
              border-radius: 3% 3% 0 0;
              outline: 1px solid #c9c8c8;
              padding: 0 30px 37px;
            }

            .header-div {
              display: flex;
              border-bottom: 1px solid rgba(0, 19, 37, .16);
            }

            #close_btn_div {
              padding-top: 20px;
            }

            .close-btn {
              background-color: white;
              border: none;
              cursor: pointer;
              padding: 0;
            }

            #otp {
              width: 100%;
              height: 40px;
              text-align: center;
              font-size: 15px;
              border-radius: 3px;
              border: 1px solid rgb(228, 43, 43);
              margin: 10px 0 0 0;
              background-color: #F3F3F3;
            }

            .button-separator > * {
              margin-top: 160px;
              width: 100%;
              height: 50px;
              background-color: #FC2779;
              color:white;
              font: sans-serif;
              font-weight: 600;
              letter-spacing: 1.8px;
              border:none;
              cursor: pointer;
            }

            .help-msg {
              display: block;
              font-size: 10px;
              font-weight: 600;
              right: 5 px;
              bottom: 0;
              text-align: right;
              text-transform: uppercase;
            }
          `}
        </style>
        <body>
          <div className="main-div">
            <div className="header-div">
              <div id="close_btn_div">
                <button type="button" className="close-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path fill="#3F414D" d="M1.319 0L0 1.319 6.681 8 0 14.681 1.319 16 8 9.319 14.681 16 16 14.681 9.319 8 16 1.319 14.681 0 8 6.681z" />
                  </svg>
                </button>
              </div>
              <div id="login">
                <p>OTP</p>
              </div>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <input name="otp" id="otp" required />
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13">
                  <title>success checkmark</title>
                </svg>
                <span className="help-msg">Required</span>
              </div>
              <div className="button-separator">
                <button type="submit">PROCEED</button>
              </div>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

export default Otp;
