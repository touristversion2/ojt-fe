import './../loginstyle.css';

const MailBoxComponent = () => {
    return (
        <div className="mainbox">

            <form id="form_id" method="post" name="myform">
                Email
                <input className="inputinfo" type="text" name="email" id="email" placeholder="Email"/>

                Password
                <input className="inputinfo" type="password" name="password" id="password" placeholder="Password"/>

            </form>

            <a className="forgotpwlink" href="/LoginPage/ForgotPasswordPage.html">Forgot Password?</a>

            <p className="support">An Employer new to this site?
                <a className="supportbtn" href="src/login/components/MailBoxComponent#Contactus">Contact Us</a>
            </p>

            <input type="button" value="Login" id="submit" onClick="validate()"/>

            <p className="googlelog">Or Login with</p>
            <div className="g-signin2" data-onsuccess="onSignIn"></div>

        </div>
    )
};

export default MailBoxComponent;