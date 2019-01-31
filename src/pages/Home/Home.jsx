import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';
import { increment, decrement, reset } from 'actions/counter';
import http from '@/api/http';
import Api from '@/api/api';
import { connect } from 'react-redux';
import './Home.scss';
import { indexTabs } from '@/assets/js/local';
import SearchBox from './Search/SearchBox';
import TabBar from './TabBar/TabBar';
import QuickEntry from './QuickEntry/QuickEntry';
import Carousel from './Carousel/Carousel';

class Home extends Component {
	constructor() {
		super()
		this.state = {
			userinfo: {}
		}
	}
	_getUser() {
		http(Api.login)
			.then((res) => {
				console.log(res);
			})
	}
	render() {
		const { counter, increment, decrement, reset } = this.props
		console.log(this.props);
		return (
			<div className="wrap" >
				<SearchBox></SearchBox>
				<Tabs 
					tabs={indexTabs}
					swipeable={false}
					initialPage={1}
					onChange={(tab, index) => { console.log('onChange', index, tab); }}
					onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }} 
					tabBarBackgroundColor="#1f1e53"
					tabBarInactiveTextColor="#fff"
					tabBarActiveTextColor="#53d6e2"
					
				>
					<div>
						<button onClick={() => increment()} >自增</button>
						<button onClick={() => decrement()} >自减</button>
						<button onClick={() => reset()} >重置</button>
						<div>
							<a href="#/Personal">跳转个人中心</a>
						</div>

						<button onClick={() => this._getUser()} >获取个人信息</button>
						<div>{this.state.userinfo.name}</div>
					</div>
					<div >
						<Carousel></Carousel>
					</div>
					<div >
						
					</div>
				</Tabs>
				
				
				<TabBar index={0} ></TabBar>
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
		reset: () => {
			dispatch(reset())
		}

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)