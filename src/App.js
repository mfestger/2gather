import React, { Component } from 'react';
import './App.css';
var FaLeaf = require('react-icons/lib/fa/leaf');

class App extends Component {
    render() {
        return (
            <div className="App">

                <div>
                    <span id="big2">
                        2
                    </span>
                    <span id="bigGather">
                        Gather
                    </span>
                    <span id="splashBranchText">
                        A powerful yet simple event planner.
                    </span>
                    <img id="splashBranch1" alt="tree"
                         src="http://clipart.pd4pic.com/images/branch-with-leaves-clipart-1.jpg"></img>
                </div>

                <div id="splashWelcome">
                    <div className="splashText">
                        Welcome to 2Gather!
                    </div>
                    <div className="splashText">
                        Plan events, coordinate details, and centralize your event planning needs in a convenient and easy to use tool.
                    </div>
                </div>
                <div id="splashFeatures">
                    <div className="splashText">
                        <div>
                            <FaLeaf/>
                            Organize Events
                        </div>
                        <div>                           <FaLeaf/>
                            Manage Lists
                        </div>
                        <div>
                            <FaLeaf/>
                            Communicate with Guests
                        </div>
                        <div>
                            <FaLeaf/>
                            Sync your Calender with Google
                        </div>



                </div>

            </div>


    </div>


    );

    }

}






export default App;
