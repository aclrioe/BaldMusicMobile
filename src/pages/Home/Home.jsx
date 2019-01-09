import React, { Component } from 'react';
import {increment, decrement, reset} from 'actions/counter';

import { connect } from 'react-redux';

class Home extends Component {
    
    render () {
        const { counter,increment,decrement,reset} = this.props
        console.log(this.props);
        return (
            <div>
                this is home <br/>
                当前计数： { counter.count }
                <button onClick={ () => increment()} >自增</button>
                <button onClick={ () => decrement()} >自减</button>
                <button onClick={ () => reset()} >重置</button>
                <div>
                    <a href="#/Personal">跳转个人中心</a>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment())
        },
        decrement: () => {
            dispatch(decrement())
        },
        reset: () =>{
            dispatch(reset())
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)