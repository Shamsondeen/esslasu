import React, { Component } from 'react';
import Header from './Header/Header';
import Executives from './Executives/Executives';
import Parliament from './Parliament/Parliament';
import Responsibilties from './Responsibilities/Resbonsibilities';
import News from './News/News';
import Footer from './Footer/Footer';





class Home extends Component {

    render() {
       
        return (
            <React.Fragment>
           <Header />
            {/*Executives*/}
           <Executives />
            {/* End Of Executives */}
            {/*Responbilities*/}
            <Responsibilties />
            {/*End Of Responsibilties*/}
            {/* News*/}
           <News />
           {/*Parliament*/}
           <Parliament/>
            {/* Footer */}
            <Footer />
            </React.Fragment>

        )
    }
}



export default Home;




