import React, { Fragment } from 'react'

function Register() {
    return (
        <Fragment>
            <div>
                <style dangerouslySetInnerHTML={{ __html: "\n    body {\n        background-color: #F3F3F3;\n        display: flex;\n        justify-content: center;\n        text-align: center;\n        align-items: center;\n        font-family: sans-serif;\n\n    }\n\n    .main-div {\n        margin: 64px 302px;\n        background-color: white;\n        height: 560px;\n        width: 300px;\n        border-radius: 3% 3% 0 0;\n        outline: 1px solid #c9c8c8;\n        padding: 0 30px 37px;\n    }\n\n    .header-div {\n        display: flex;\n        border-bottom: 1px solid rgba(0, 19, 37, .16);\n    }\n\n    #close_btn_div {\n        /* position: relative ; */\n        padding-top: 20px;\n    }\n\n    .close-btn {\n        background-color: white;\n        border: none;\n        cursor: pointer;\n        padding: 0;\n    }\n\n    #email {\n        width: 100%;\n        height: 40px;\n        text-align: center;\n        font-size: 15px;\n        border-radius: 3px;\n        border: 1px solid rgb(228, 43, 43);\n        margin: 10px 0 0 0;\n        background-color: #F3F3F3;\n    }\n    #paasword{\n        width: 100%;\n        height: 40px;\n        text-align: center;\n        font-size: 15px;\n        border-radius: 3px;\n        border: 1px solid rgb(228, 43, 43);\n        margin: 10px 0 0 0;\n        background-color: #F3F3F3;\n        font: black;\n    \n    }\n\n    #login {\n        width: 300px;\n    }\n\n    p {\n        font-size: 15px;\n    }\n\n    #button-separator > * {\n        margin-top: 160px;\n        width: 100%;\n        height: 50px;\n        background-color: #FC2779;\n        color:white;\n        font: sans-serif;\n        font-weight: 600;\n        letter-spacing: 1.8px;\n        border:none;\n        cursor: pointer;\n    }\n\n    .help-msg {\n        display: block;\n        font-size: 10px;\n        font-weight: 600;\n        right: 5 px;\n        bottom: 0;\n        text-align: right;\n        text-transform: uppercase;\n        \n    }\n    #container-2{\n        margin-top: 15Px;\n        padding-top: 20px;\n        padding-bottom: 40px;\n    }\n   \n\n" }} />
                <div className="main-div">
                    <div className="header-div">
                        <div id="close_btn_div">
                            <button type="button" className="close-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16}>
                                    <path fill="#3F414D" d="M1.319 0L0 1.319 6.681 8 0 14.681 1.319 16 8 9.319 14.681 16 16 14.681 9.319 8 16 1.319 14.681 0 8 6.681z">
                                    </path>
                                </svg></button>
                        </div>
                        <div id="login">
                            <p>REGISTER</p>
                        </div>
                    </div>
                    <div id="container-2">
                        <p>Register to Earn2000  Reward Points!</p>
                    </div>
                    <form>
                        <div>
                            <input name="emailMobile" defaultValue placeholder="Enter Email ID or Phone Number" id="email" required />
                            {/* <input type="email" value="" id="email" placeholder="Enter email" name="email"> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={13} viewBox="0 0 16 13">
                                <title>success checkmark</title>
                            </svg>
                            <span className="help-msg">Required</span>
                        </div>
                        <div>
                            <input name="password" defaultValue placeholder="password" id="paasword" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" minLength={8} />
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={13} viewBox="0 0 16 13">
                            </svg>
                            <span className="help-msg">Required</span>
                        </div>
                        <div id="button-separator">
                            <button id="submit">PROCEED</button>
                        </div>
                    </form>
                </div>
            </div>

        </Fragment>
    )
}
export default Register;