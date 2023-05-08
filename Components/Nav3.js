import React, { useState } from 'react'
import Styles from '../src/styles/Nav.module.css'

const data = [
    { name: "Home", Link: "/" },
    { name: "Problems", Link: "/problems" },
    {
        name: "Team",
        Link: "/team",
    },
    {
        name: "Events",
        Link: "/events",
    },
];

function Nav3() {
    const [active, setActive] = useState(false);
    return (
        <div className={Styles.main}>
            <div className={Styles.container}>
                <div className={Styles.wrapper}>
                    {/* <img src="/codeloper1.png" alt="logo" className={Styles.img} /> */}
                    <div onClick={() => setActive(!active)}>
                        <div
                            className={active ? Styles.activeHamburger : Styles.hamburber}
                        />
                    </div>
                </div>
            </div>
            <div className={active ? Styles.activeSidenav : Styles.sidenav}>
                <ul className={Styles.ul}>
                    {data.map((item, i) => (
                        <li key={i}>
                            <a href="#" className={Styles.a}>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Nav3