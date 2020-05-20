import React, { Component } from 'react';
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header className="header">
                    <div className="header__text-box">
                        <h1 className="heading-primary">
                            <span className="heading-primary__sub">We Are</span>
                            <span className="heading-primary__main">Lasu </span>
                            <div>
                                <span className="heading-primary__sub">We Are Proud</span>
                                <span className="heading-primary__sub-1">ENGINEERING STUDENT SOCIETY</span>
                            </div>

                        </h1>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}
