import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Car from './components/Car'

export default function Router() { 
    return(
    (<BrowserRouter>
                <div>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/car/:id" exact component={Car} />
                </div>
     </BrowserRouter>))
}
/* 
    Write code for React Router here
Import the Home and About components from 
the component folder. Assign the default
path "/" to the Home component and "/about"
to the About component.

Remember to export the component at the end
*/


// Write component imports here //



// Start Router function here //
