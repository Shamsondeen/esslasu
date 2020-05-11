import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import News from './News/News';
import Executives from './Executives/Executives';
import Responsibilities from './Responsibilities/Resbonsibilities'



class Home extends Component {

    render() {
        return (
            <React.Fragment>
            <Header />
            {/*Executives*/}
            <Executives/>
            {/*Responbilities*/}
           <Responsibilities/>
            {/* News*/}
            <News/>
            {/* Footer */}
            <Footer />
            </React.Fragment>

        )
    }
}



export default Home;




