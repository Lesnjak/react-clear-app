import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bigPic from '../assets/images/chon.png';
export default class TestComp extends Component {
    constructor(){
        super();
        this.state = {
            counter:0
        }
    }
    render() {
        return (
            <div>
                <p style={{color: "green"}}>ghgfhhgh gfhgfh</p>
                <p >{this.state.counter}</p>
                <img src={bigPic} alt=""/>
                <button onClick={()=> this.setState({
                    counter: ~~(Math.random() * 10)
                })}>нажать</button>
            </div>
        )
    }
}

