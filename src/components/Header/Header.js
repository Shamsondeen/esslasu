import React, { Component } from 'react';
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
            <header className="header">
                    <div className="header__text-box">
                        <h1 className="heading-primary">
                        <span class="heading-primary__sub">We Are</span>
                            <span className="heading-primary__main">Lasu </span>
                            <span class="heading-primary__sub">We Are Proud</span>
                            <span class="heading-primary__sub-1">ENGINEERING STUDENT SOCIETY</span>
                        </h1>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}
