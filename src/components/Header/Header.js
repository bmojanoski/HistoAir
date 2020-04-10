import React, { Component } from 'react';
import { NavLink,Link  } from "react-router-dom";


class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary  navbar-fixed sticky-top shadow">
                    <div className="container-fluid">
                        <Link className="navbar-brand p-0 m-0"  to={"/"}>
                            <img src="https://i.ibb.co/kMXVvr2/HISTOAIR-01.png" width="150" height="50"
                                 className="d-inline-block align-top" alt=""/>

                        </Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>

                        <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                            <ul className="navbar-nav mt-2 mt-lg-0" >
                                <li className="nav-item">
                                    <NavLink className="nav-link text-menu-size" activeClassName="active" to={"/"} >Searching</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
