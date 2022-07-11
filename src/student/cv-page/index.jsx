import AuthenHeaderComponent from "../../common/AuthenHeaderComponent";
import HeaderBoxComponent from "./components/HeaderBoxComponent";
import FooterComponent from "../../common/FooterComponent";
import MailBoxComponent from "./components/MailBoxComponent";

const StudentCVPage = () => {
    return (
        <>
            <AuthenHeaderComponent />
            <HeaderBoxComponent />
            <MailBoxComponent />
            <FooterComponent />
        </>
    );
};

export default StudentCVPage;