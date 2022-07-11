import React, {useEffect, useState} from "react";
import MainBoxComponent from "./components/MainBoxComponent";
import QuoteBoxComponent from "./components/QuoteBoxComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "../../common/FooterComponent";

const initialValue = {
    createAt: "",
    fullName: "",
    id: -1,
    idNumber: "",
    majorId: -1,
    phone: "",
    resume: "",
    semester: "",
    updatedAt: "",
    userId: -1
};

const StudentInfo = () => {
    const [info, setInfo] = useState(initialValue);
    useEffect(() => {
        fetch("https://073e-123-20-158-181.ap.ngrok.io/student?id=2")
            .then(response => response.json())
            .then((result) => {
                setInfo(result);
            })
    }, []);

    return info ? (
        <>
            <HeaderComponent />
            <QuoteBoxComponent />
            <MainBoxComponent info={info} />
            <FooterComponent />
        </>
    ) : <div/>
};

export default StudentInfo;
