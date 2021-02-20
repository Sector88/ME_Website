import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';


// Dark Home Layout 
import DarkPortfolioLanding from './dark/PortfolioLanding';

// Element Layout
import About from "./elements/About";
import Contact from "./elements/Contact";
import Blog from "./elements/Blog";
import BlogDetails from "./elements/BlogDetails";
import error404 from "./elements/error404";


// Blocks Layout
import VideoPopup from "./blocks/VideoPopup";
import Gallery from "./blocks/Gallery";
import Brand from "./blocks/Brand";
import ContactForm from "./blocks/ContactForm";
import Columns from "./blocks/Columns";

import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

/*
TODO: Blog and blog list are commented out below, uncomment them to use them again. 
*/

class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={DarkPortfolioLanding}/>
                    

                    {/* Element Layot */}
                    <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About}/>
                    {/* <Route exact path={`${process.env.PUBLIC_URL}/blog`} component={Blog}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-details`} component={BlogDetails}/> */}


                    {/* Blocks Elements  */}
                    {/* <Route exact path={`${process.env.PUBLIC_URL}/video-popup`} component={VideoPopup}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/gallery`} component={Gallery}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/clint-logo`} component={Brand}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/contact-form`} component={ContactForm}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/columns`} component={Columns}/> */}


                    
                    <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                    <Route component={error404}/>

                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();