const AuthenHeaderComponent = () => {
    return (
        <header>
            <div className="ctn">
                <h3 className="title">Kivi</h3>
                <div className="title-box">An OJT Website for Students and Companies</div>
                <a href="/StudentPage/StudentInfoPage.html" className="btstyle">Account</a>
                <a href="/StudentPage/StudentHomePage.html" className="btstylehome">Home</a>
                <a href="/HomePageWithoutLogin/HomePageWithoutLogin.html" className="btstylelogout">Logout</a>
            </div>
        </header>
    );
};

export default AuthenHeaderComponent;