import React, { Component } from 'react';
import axios from 'axios';
import {increment, decrement, reset} from 'actions/counter';
import http from '@/api/http';
import Api from '@/api/api';
import { connect } from 'react-redux';
import './Home.css';

class Home extends Component {
    constructor () {
        super()
        this.state = {
            userinfo: {}
        }
    }
    _getUser () {
        http(Api.login)
            .then((res) => {
                console.log(res);
            })
    }
    render () {
        const { counter,increment,decrement,reset} = this.props
        console.log(this.props);
        return (
            <div className="wrap" >
                this is home <br/>
                当前计数： { counter.count }
                <button onClick={ () => increment()} >自增</button>
                <button onClick={ () => decrement()} >自减</button>
                <button onClick={ () => reset()} >重置</button>
                <div>
                    <a href="#/Personal">跳转个人中心</a>
                </div>

                <button onClick = { () =>  this._getUser() } >获取个人信息</button>
                <div>{this.state.userinfo.name}</div>
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