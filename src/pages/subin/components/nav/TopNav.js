import React from "react";
import "./TopNav.scss"

function TopNav() {
    return (
        <div className="TopNav">
        <header>
        <h2 className="title">WeBucks</h2>
        <nav>
            <ul>
                {/* a 태그를 div로 임시 변경함 */}
                <li><div>COFFEE</div></li>
                <li><div>MENU</div></li>
                <li><div>STORE</div></li>
                <li><div>WHAT'S NEW</div></li>
            </ul>
        </nav>
    </header>
    </div>
    )
}

export default TopNav;