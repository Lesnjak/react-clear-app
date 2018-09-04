import React, { Component } from 'react';
import  { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {increment} from '../AC';

class ComponentInner extends Component {
    static propTypes = {
    };
    render() {
        return (
            <div>
                <strong onClick={this.props.increment.bind(null, this.props.lists.name)}>{this.props.lists.name}</strong>
            </div>
        )
    }

}
export default connect(null,{increment})(ComponentInner);
