import React from 'react';
import UnAuthenHeaderComponent from "./components/UnAuthenHeaderComponent";
import QuoteBoxComponent from "./components/QuoteBoxComponent";
import MailBoxComponent from "./components/MailBoxComponent";
import FooterComponent from "../common/FooterComponent";
import TitleComponent from "./components/TitleComponent";

import './loginstyle.css';

const Login = () => {
    return (
        <>
            <UnAuthenHeaderComponent />
            <QuoteBoxComponent />
            <TitleComponent />
            <MailBoxComponent />
            <FooterComponent />
        </>
    );
};

export default Login;