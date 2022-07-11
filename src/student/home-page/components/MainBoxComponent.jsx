import OverallInternshipProgram from './../../../picture-collection/Overall-Internship-Program-2022.png';
import TeslaInternshipProgram from './../../../picture-collection/Tesla-Internship-Program-2022.png';
import NestleInternshipProgram from './../../../picture-collection/Nestle-Internship-Program-2022.png';
import MicrosoftLogo from './../../../picture-collection/Microsoft-Logo.png';
import RenderLogo from './../../../picture-collection/Render-Logo.png';
import './../styles.css';

const MainBoxComponent = () => {
    return (<div className="mainbox">
            <form action="SearchGo" method="get" className="searchbox">
                <input type="text" id="course" className="searchinput" placeholder="Search Intership" autoFocus
                       required=""/>
                <input type="reset" className="searchreset" value=""/>
                <input type="submit" className="searchsubmit" value=""/>
            </form>
            <div className="contentbox">
                <div className="slider">
                    <div className="slides">
                        <input type="radio" name="radio-btn" id="radio1"/>
                        <input type="radio" name="radio-btn" id="radio2"/>
                        <input type="radio" name="radio-btn" id="radio3"/>
                        <input type="radio" name="radio-btn" id="radio4"/>
                        <div className="slide first">
                            <img id="sponsortags1"
                                 src={OverallInternshipProgram}
                                 alt="Overall Internship Program"/>
                        </div>
                        <div className="slide">
                            <img id="sponsortags2"
                                 src={TeslaInternshipProgram}
                                 alt="Microsoft Internship Program"/>
                        </div>
                        <div className="slide">
                            <img id="sponsortags3"
                                 src={TeslaInternshipProgram}
                                 alt="Tesla Internship Program"/>
                        </div>
                        <div className="slide">
                            <img id="sponsortags4"
                                 src={NestleInternshipProgram}
                                 alt="Nestle Internship Program"/>
                        </div>
                        <div className="navigation-auto">
                            <div className="auto-btn1"></div>
                            <div className="auto-btn2"></div>
                            <div className="auto-btn3"></div>
                            <div className="auto-btn4"></div>
                        </div>
                    </div>
                    <div className="navigation-manual">
                        <label htmlFor="radio1" className="manual-btn"></label>
                        <label htmlFor="radio2" className="manual-btn"></label>
                        <label htmlFor="radio3" className="manual-btn"></label>
                        <label htmlFor="radio4" className="manual-btn"></label>
                    </div>
                </div>
                <div className="internshipsbox">
                    <ul className="internships">
                        <li className="intern">
                            <img id="companylogo" src={MicrosoftLogo} alt="Microsoft Logo"/>
                            <div className="interndetail">
                                <h2>Software Engineer</h2>
                                <h3>Redmond, Washington, United States</h3>
                                <ul className="internrequirements">
                                    <p>Requirements:</p>
                                    <li>
                                        3+ years of experience in writing SQL, COSMOS, and/or Python
                                    </li>
                                    <li>
                                        3+ years of experience advanced data modeling within Power BI
                                    </li>
                                    <li>
                                        3+ years of experience defining, building, releasing, and evangelizing Power
                                        BI based solutions
                                    </li>
                                    <li>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore
                                        et dolore magna aliqua.
                                    </li>
                                    <li>
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo
                                        consequat.
                                    </li>
                                    <li>
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo
                                        consequat.
                                    </li>
                                    <li>
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo
                                        consequat.
                                    </li>
                                    <li>
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo
                                        consequat.
                                    </li>
                                    <li>
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo
                                        consequat.
                                    </li>
                                    <li>
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo
                                        consequat.
                                    </li>
                                    <li>
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo
                                        consequat.
                                    </li>
                                    <li>
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo
                                        consequat.
                                    </li>
                                    <li>
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo
                                        consequat.
                                    </li>

                                </ul>
                                <div className="interndetailtoggle">
                                    <ul className="interntagslist">
                                        <li id="tagPLSQL">SQL</li>
                                        <li id="tagPLPython">Python</li>
                                        <li id="tagPLCOSMOS">COSMOS</li>
                                        <li id="tagPLPowerBI">PowerBI</li>
                                        <li id="tagPLAzure">Azure</li>
                                        <li id="tagPLMVC">MVC</li>
                                    </ul>
                                    <a href="#" className="internfulldetail" id="toggleon">Detail</a>
                                </div>
                            </div>
                        </li>
                        <li className="intern">
                            <img id="companylogo" src="/PictureCollection/Render-Logo.png" alt="Render Logo"/>
                            <div className="interndetail">
                                <h2 className="internName">Junior C# .Net Core Engineer</h2>
                                <h3 className="internAddres">No. 05, Lane 82, Dich Vong Hau Ward, Cau Giay District,
                                    Hanoi.</h3>
                                <ul className="internrequirements">
                                    <p>Requirements:</p>
                                    <li>About 1 Year experience with C#, ASP.NET, MVC.</li>
                                    <li>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla
                                        pariatur.
                                    </li>
                                    <li>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla
                                        pariatur.
                                    </li>
                                    <li>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla
                                        pariatur.
                                    </li>
                                    <li>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla
                                        pariatur.
                                    </li>
                                </ul>
                                <div className="interndetailtoggle">
                                    <ul className="interntagslist">
                                        <li id="tagPLC#">C#</li>
                                        <li id="tagPLASP.NET">ASP.NET</li>
                                        <li id="tagPLAssembly">Assembly</li>
                                        <li id="tagPLGraphTalk">GraphTalk</li>
                                        <li id="tagPLSOPHAEROS">SOPHAEROS</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                    </ul>
                                    <a href="#" className="internfulldetail" id="toggleon">Detail</a>
                                </div>
                            </div>
                        </li>
                        <li className="intern">
                            <img id="companylogo" src="/PictureCollection/Render-Logo.png" alt="Render Logo"/>
                            <div className="interndetail">
                                <h2 className="internName">Junior C# .Net Core Engineer</h2>
                                <h3 className="internAddres">No. 05, Lane 82, Dich Vong Hau Ward, Cau Giay District,
                                    Hanoi.</h3>
                                <ul className="internrequirements">
                                    <p>Requirements:</p>
                                    <li>
                                        About 1 Year experience with C#, ASP.NET, MVC.
                                    </li>
                                    <li>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla
                                        pariatur.
                                    </li>
                                    <li>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla
                                        pariatur.
                                    </li>
                                    <li>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla
                                        pariatur.
                                    </li>
                                    <li>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla
                                        pariatur.
                                    </li>
                                </ul>
                                <div className="interndetailtoggle">
                                    <ul className="interntagslist">
                                        <li id="tagPLC#">C#</li>
                                        <li id="tagPLASP.NET">ASP.NET</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                    </ul>
                                    <a href="#" className="internfulldetail" id="toggleon">Detail</a>
                                </div>
                            </div>
                        </li>

                        <li className="intern">
                            <img id="companylogo" src="/PictureCollection/Render-Logo.png" alt="Render Logo"/>
                            <div className="interndetail">
                                <h2 className="internName">Junior C# .Net Core Engineer</h2>
                                <h3 className="internAddres">No. 05, Lane 82, Dich Vong Hau Ward, Cau Giay District,
                                    Hanoi.</h3>
                                <ul className="internrequirements">
                                    <p>Requirements:</p>
                                    <li>
                                        About 1 Year experience with C#, ASP.NET, MVC.
                                    </li>
                                    <li>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla
                                        pariatur.
                                    </li>
                                    <li>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla
                                        pariatur.
                                    </li>
                                    <li>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla
                                        pariatur.
                                    </li>
                                    <li>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla
                                        pariatur.
                                    </li>
                                </ul>
                                <div className="interndetailtoggle">
                                    <ul className="interntagslist">
                                        <li id="tagPLC#">C#</li>
                                        <li id="tagPLASP.NET">ASP.NET</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                    </ul>
                                    <a href="#" className="internfulldetail" id="toggleon">Detail</a>
                                </div>
                            </div>
                        </li>

                        <li className="intern">
                            <img id="companylogo" src={RenderLogo} alt="Render Logo"/>
                            <div className="interndetail">
                                <h2 className="internName">Junior C# .Net Core Engineer</h2>
                                <h3 className="internAddres">No. 05, Lane 82, Dich Vong Hau Ward, Cau Giay District,
                                    Hanoi.</h3>
                                <ul className="internrequirements">
                                    <p>Requirements:</p>
                                    <li>
                                        About 1 Year experience with C#, ASP.NET, MVC.
                                    </li>
                                    <li>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla
                                        pariatur.
                                    </li>
                                    <li>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla
                                        pariatur.
                                    </li>
                                    <li>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla
                                        pariatur.
                                    </li>
                                    <li>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla
                                        pariatur.
                                    </li>
                                </ul>
                                <div className="interndetailtoggle">
                                    <ul className="interntagslist">
                                        <li id="tagPLC#">C#</li>
                                        <li id="tagPLASP.NET">ASP.NET</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                    </ul>
                                    <a href="#" className="internfulldetail" id="toggleon">Detail</a>
                                </div>
                            </div>
                        </li>
                        <li className="intern">
                            <img id="companylogo" src={RenderLogo} alt="Render Logo"/>
                            <div className="interndetail">
                                <h2 className="internName">Junior C# .Net Core Engineer</h2>
                                <h3 className="internAddres">No. 05, Lane 82, Dich Vong Hau Ward, Cau Giay District,
                                    Hanoi.</h3>
                                <ul className="internrequirements">
                                    <p>Requirements:</p>
                                    <li>
                                        About 1 Year experience with C#, ASP.NET, MVC.
                                    </li>
                                    <li>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla
                                        pariatur.
                                    </li>
                                    <li>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla
                                        pariatur.
                                    </li>
                                    <li>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla
                                        pariatur.
                                    </li>
                                    <li>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla
                                        pariatur.
                                    </li>
                                </ul>
                                <div className="interndetailtoggle">
                                    <ul className="interntagslist">
                                        <li id="tagPLC#">C#</li>
                                        <li id="tagPLASP.NET">ASP.NET</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                    </ul>
                                    <a href="#" className="internfulldetail" id="toggleon">Detail</a>
                                </div>
                            </div>
                        </li>

                        <li className="intern">
                            <img id="companylogo" src={RenderLogo} alt="Render Logo"/>
                            <div className="interndetail">
                                <h2 className="internName">Junior C# .Net Core Engineer</h2>
                                <h3 className="internAddres">No. 05, Lane 82, Dich Vong Hau Ward, Cau Giay District,
                                    Hanoi.</h3>
                                <ul className="internrequirements">
                                    <p>Requirements:</p>
                                    <li>
                                        About 1 Year experience with C#, ASP.NET, MVC.
                                    </li>
                                    <li>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla
                                        pariatur.
                                    </li>
                                    <li>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla
                                        pariatur.
                                    </li>
                                    <li>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla
                                        pariatur.
                                    </li>
                                    <li>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla
                                        pariatur.
                                    </li>
                                </ul>
                                <div className="interndetailtoggle">
                                    <ul className="interntagslist">
                                        <li id="tagPLC#">C#</li>
                                        <li id="tagPLASP.NET">ASP.NET</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                    </ul>
                                    <a href="#" className="internfulldetail" id="toggleon">Detail</a>
                                </div>
                            </div>
                        </li>

                        <li className="intern">
                            <img id="companylogo" src={RenderLogo} alt="Render Logo"/>
                            <div className="interndetail">
                                <h2 className="internName">Junior C# .Net Core Engineer</h2>
                                <h3 className="internAddres">No. 05, Lane 82, Dich Vong Hau Ward, Cau Giay District,
                                    Hanoi.</h3>
                                <ul className="internrequirements">
                                    <p>Requirements:</p>
                                    <li>
                                        About 1 Year experience with C#, ASP.NET, MVC.
                                    </li>
                                    <li>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla
                                        pariatur.
                                    </li>
                                    <li>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla
                                        pariatur.
                                    </li>
                                    <li>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla
                                        pariatur.
                                    </li>
                                    <li>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla
                                        pariatur.
                                    </li>
                                </ul>
                                <div className="interndetailtoggle">
                                    <ul className="interntagslist">
                                        <li id="tagPLC#">C#</li>
                                        <li id="tagPLASP.NET">ASP.NET</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                        <li id="tagPLMVC">MVC</li>
                                    </ul>
                                    <a href="#" className="internfulldetail" id="toggleon">Detail</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <ul className="pagenumberlist">
                    <li id="pagefirst"></li>
                    <li id="pageprevious"></li>
                    <li id="pagenumbers">1</li>
                    <li id="pagenumbers">2</li>
                    <li id="pagenumbers">3</li>
                    <li id="pagenumbers">4</li>
                    <li id="pagenumbers">5</li>
                    <li id="pagenext">></li>
                    <li id="pagelast">>></li>
                </ul>
            </div>
        </div>
    )
};

export default MainBoxComponent;