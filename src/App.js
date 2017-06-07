import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <span id = "big2">
                        2
                    </span>
                    <span id = "bigGather">
                        Gather
                    </span>
                    <span id="splashBranchText">
                        A powerful yet simple event planner.
                    </span>
                    <img id="splashBranch1" src="http://clipart.pd4pic.com/images/branch-with-leaves-clipart-1.jpg"></img>
                </div>

                <div id = "splashGallery">
                    Pictures will go here, ya?
                </div>

                <div id = "splashWelcome">
                    <div className="splashText">
                        Welcome to 2Gather!
                    </div>
                    <div className="splashText">
                        site description goes here
                    </div>
                </div>
                <div id = "splashFeatures">

                </div>


            </div>
        );
    }
}






export default App;
