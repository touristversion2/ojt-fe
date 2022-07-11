import HeaderComponent from "./components/HeaderComponent";
import MainBoxComponent from "./components/MainBoxComponent";
import QuoteBoxComponent from "./components/QuoteBoxComponent";
import FooterComponent from "../../common/FooterComponent";
import './styles.css';

const StudentHomePage = () => {
    return (
        <>
            <HeaderComponent/>
            <QuoteBoxComponent/>
            <MainBoxComponent/>
            <FooterComponent/>
        </>
    )
};

export default StudentHomePage;