import React from 'react';
import './App.css';
// var FaLeaf = require('react-icons/lib/fa/leaf');
class LoginButton extends React.Component{
    render(
    ){ return (
        <button>Something</button>
        )

    }
}


class App extends React.Component {
    render(
    ) {
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
                        Welcome to <span id="small2">2</span><span id="smallGather">Gather</span>!
                    </div>
                    <div className="splashText">
                        Plan events, coordinate details, and centralize your event planning needs in a convenient and easy to use tool.
                    </div>
                </div>
                <div id="splashFeatures">
                    <div className="splashText">

                        <ul className="leaf">
                            <li>Event Scheduling</li>
                            <li>Syncing Calenders</li>
                            <li>Sharing lists</li>
                            <li>People: connected</li>
                        </ul>



                </div>

            </div>


    </div>


    );

    }

}






export default App;

