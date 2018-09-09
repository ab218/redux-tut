import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

class IncrementCounter extends Component {

    static propTypes = {
        text: PropTypes.string.isRequired,
        handleClick: PropTypes.func.isRequired
    }

    render() {

        const { handleClick, text } = this.props
        
        return (
            <button onClick={handleClick}>{text}</button>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        text: state.count 
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        handleClick: () => dispatch({
            type: 'COUNTER_DEC',
            payload: 1,
        })
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncrementCounter);