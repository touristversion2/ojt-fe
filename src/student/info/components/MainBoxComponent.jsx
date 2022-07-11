import './../styles.css';

const MainBoxComponent = ({ info }) => {
    return (<div className="mainbox">

            <form action="/EditCVGo">
                <div className="inforow">

                    <div className="form-element">
                        Full Name
                        <br/>
                        <input className="inputinfo" type="text" id="fullname" placeholder="Student Fullname"
                               name="student_fullname" value={info.fullname} readOnly="" disabled/>
                    </div>

                    <div className="form-element">
                        Email
                        <br/>
                        <input className="inputinfo" type="email" id="email" placeholder="Email" name="email" value={info.email}
                               readOnly=""
                               disabled/>
                    </div>

                    <div className="form-element">
                        Student Code
                        <br/>
                        <input className="inputinfo" type="text" id="studentcode" placeholder="Student Code"
                               name="student_id_number" readOnly="" disabled/>
                    </div>

                </div>

                <div className="inforow">
                    <div className="form-element">
                        Phone number
                        <br/>
                        <input type="tel" className="inputinfo" id="phonenumber" placeholder="Phone number"
                               name="student_phone" value = {info.phone}
                               readOnly="" disabled/>

                    </div>
                    <div className="form-element">
                        Major
                        <br/>
                        <input type="text" className="inputinfo" id="major" placeholder="Major" name="major_id"
                               readOnly=""
                               disabled/>
                    </div>
                    <div className="form-element">
                        Semester
                        <br/>
                        <input type="text" className="inputinfo" id="semester" placeholder="Semester"
                               name="semester" value = {info.semester}
                               readOnly="" disabled/>
                    </div>
                </div>

                <div className="bigbox">
                    Link CV
                    <br/>
                    <input type="text" id="linkcv" className="inputinfo" placeholder="Your link CV here"
                           name="resume" value = {info.resume}
                           readOnly="" disabled/>
                    <input type="button" value="Edit CV"/>
                </div>

                <div className="bigbox">
                    Certificate<br/>
                    <input type="text" className="inputinfo" id="certificate" placeholder="Internship Certificate"
                           name="certificate" readOnly="" disabled/>
                </div>

                <div className="bigbox">
                    Current Internship<br/>
                    <input type="text" className="inputinfo" id="internship" placeholder="Link Internship"
                           name="internship_id"
                           readOnly="" disabled/>
                </div>
            </form>

        </div>);
};

export default MainBoxComponent;
