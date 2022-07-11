import {useEffect} from "react";
import MicrosoftLogo from './../../../picture-collection/Microsoft-Logo.png';
import RenderLogo from './../../../picture-collection/Render-Logo.png';
import './../student-home-page.css';

const MailBoxComponent = () => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = '../scripts';
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <div class="mainbox">
            <form action="SearchGo" method="get" class="searchbox">
                <input type="text" id="course" class="searchinput" placeholder="Search Intership" autofocus
                       required=""/>
                <input type="reset" class="searchreset" value=""/>
                <input type="submit" class="searchsubmit" value=""/>
            </form>
            <div class="internshipsbox">
                <ul class="internships">
                    <li class="intern internfirst">
                        <img id="companylogo" src={MicrosoftLogo} alt="Microsoft Logo"></img>
                        <div class="interndetail">
                            <h2>Software Engineer</h2>
                            <h3>Redmond, Washington, United States</h3>
                            <ul class="internrequirements">
                                <p>Requirements:</p>
                                <li>
                                    3+ years of experience in writing SQL, COSMOS, and/or Python
                                </li>
                                <li>
                                    3+ years of experience advanced data modeling within Power BI
                                </li>
                                <li>
                                    3+ years of experience defining, building, releasing, and evangelizing Power BI
                                    based
                                    solutions
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore
                                    et dolore magna aliqua.
                                </li>
                                <li>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea
                                    commodo
                                    consequat.
                                </li>
                                <li>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea
                                    commodo
                                    consequat.
                                </li>
                                <li>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea
                                    commodo
                                    consequat.
                                </li>
                                <li>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea
                                    commodo
                                    consequat.
                                </li>
                                <li>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea
                                    commodo
                                    consequat.
                                </li>
                                <li>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea
                                    commodo
                                    consequat.
                                </li>
                                <li>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea
                                    commodo
                                    consequat.
                                </li>
                                <li>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea
                                    commodo
                                    consequat.
                                </li>
                                <li>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea
                                    commodo
                                    consequat.
                                </li>

                            </ul>
                            <div class="interndetailtoggle">
                                <ul class="interntagslist">
                                    <li id="tagPLSQL">SQL</li>
                                    <li id="tagPLPython">Python</li>
                                    <li id="tagPLCOSMOS">COSMOS</li>
                                    <li id="tagPLPowerBI">PowerBI</li>
                                    <li id="tagPLAzure">Azure</li>
                                    <li id="tagPLMVC">MVC</li>
                                </ul>
                                <a href="#" class="internfulldetail" id="toggleon">Queue</a>
                            </div>
                        </div>
                    </li>
                    <li class="intern">
                        <img id="companylogo" src={RenderLogo} alt="Render Logo"></img>
                        <div class="interndetail">
                            <h2 class="internName">Junior C# .Net Core Engineer</h2>
                            <h3 class="internAddres">No. 05, Lane 82, Dich Vong Hau Ward, Cau Giay District, Hanoi.</h3>
                            <ul class="internrequirements">
                                <p>Requirements:</p>
                                <li>About 1 Year experience with C#, ASP.NET, MVC.</li>
                                <li>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat
                                    nulla
                                    pariatur.
                                </li>
                                <li>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat
                                    nulla
                                    pariatur.
                                </li>
                                <li>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat
                                    nulla
                                    pariatur.
                                </li>
                                <li>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat
                                    nulla
                                    pariatur.
                                </li>
                            </ul>
                            <div class="interndetailtoggle">
                                <ul class="interntagslist">
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
                                <a href="#" class="internfulldetail" id="toggleon">Passed</a>
                            </div>
                        </div>
                    </li>
                    <li class="intern">

                    </li>
                    <li class="intern">

                    </li>
                    <li class="intern">

                    </li>
                    <li class="intern">

                    </li>
                </ul>
            </div>
            <ul class="pagenumberlist">
                <li id="pagefirst"></li>
                <li id="pageprevious"></li>
                <li id="pagenumbers">1</li>
                <li id="pagenumbers">2</li>
                <li id="pagenumbers">3</li>
                <li id="pagenumbers">4</li>
                <li id="pagenumbers">5</li>
                <li id="pagenext"></li>
                <li id="pagelast"></li>
            </ul>
        </div>
    )
};

export default MailBoxComponent;