import React, { Component } from 'react';
import { tabBarData } from '@/assets/js/local';
import './TabBar.scss';
class TabBar extends Component {
  
  render () {
    const { index } = this.props
    return (
      <div className="tab-bar" >
        {tabBarData.map((tabItem,i) => {
          return (
            <a href={ tabItem.pageUrl } key={tabItem.title} className="tab-item" >
              <img className={ i === 2 ? 'login' : '' } src={ index === i ? tabItem.imgSelectPath : tabItem.imgPath } />
              { tabItem.title 
                  ? (<span className={`title ${ index === i ? 'active' : ''}`} >{tabItem.title}</span>) 
                  : null 
              }
            </a>
          )
        })}
      </div>
    )
  }
  
}

export default TabBar