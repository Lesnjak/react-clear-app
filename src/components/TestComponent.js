import React, { Component } from 'react';
import TestComp from './TestComp';
import smallPic from '../assets/images/photo.png';


class TestComponent extends Component {


    render() {
        return (
            <div>
                <p>hello';\;jkhjk;'\;\hjk</p>
                <img src={smallPic} alt=""/>
                <TestComp/>
            </div>
        )
    }

}

export default TestComponent;
