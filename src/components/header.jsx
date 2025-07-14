const Header = (props) => {
    return (
        <>
            <header>
                <nav>
                    <div>
                        <h1>Shyam Trader's</h1>
                    </div>
                    <div className="nav-menu">
                        <ul>
                            <li className={props.cntPage === "home"?'active':''} onClick={() => {
                                if (props.cntPage === "home")
                                    return;
                                document.getElementsByClassName("page-container")[0].classList.toggle("rotate-animation");
                                setTimeout(() => {
                                    props.pageStatus("home");
                                    document.getElementsByClassName("page-container")[0].classList.toggle("rotate-animation");
                                }, 600);
                                }}>Home</li>
                            <li className={props.cntPage === "product"?'active':''} onClick={() => {
                                if (props.cntPage === "product") {
                                    return;
                                }
                                document.getElementsByClassName("page-container")[0].classList.toggle("rotate-animation");
                                setTimeout(() => {
                                    props.pageStatus("product");
                                    document.getElementsByClassName("page-container")[0].classList.toggle("rotate-animation");
                                }, 600);
                                }}>Product's</li>
                            <li className={props.cntPage === "about"?'active':''} onClick={() => {
                                if (props.cntPage === "about")
                                    return;
                                document.getElementsByClassName("page-container")[0].classList.toggle("rotate-animation");
                                setTimeout(() => {
                                    props.pageStatus("about");
                                    document.getElementsByClassName("page-container")[0].classList.toggle("rotate-animation");
                                }, 600);
                                }}>About Us</li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header