import React, { Component } from 'react';
import {connect} from 'react-redux';
import ComponentInner from './ComponentInner';



class TestComponent extends Component {
    render() {
        const list = this.props.list.map((list,index)=> <li key={index}><ComponentInner lists={list}/></li>)
        return (
            <ul>
                {list}
            </ul>
        )
    }

}

 export default connect(state=>{
     return{
         list:state.counter
     }
 })(TestComponent);
