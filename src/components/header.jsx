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
                            <li className={props.cntPage === "home"?'active':''} onClick={() => {props.pageStatus("home")}}>Home</li>
                            <li className={props.cntPage === "product"?'active':''} onClick={() => {props.pageStatus("product")}}>Product's</li>
                            <li className={props.cntPage === "about"?'active':''} onClick={() => {props.pageStatus("about")}}>About Us</li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header