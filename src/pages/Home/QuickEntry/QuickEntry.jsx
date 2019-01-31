import React, { Component } from 'react';
import { quickEntryData } from '@/assets/js/local';
import './QuickEntry.scss';

class QuickEntry extends Component {
  render() {
    return (
      <div className="quick-entry" >
        {
          quickEntryData.map((quickEntryItem) => {
            return (
              <a 
                className="quick-entry-item" 
                key={quickEntryItem.title} 
                href={quickEntryItem.path}
              >{quickEntryItem.title}</a>
            )
          })
        }
      </div>
    )
  }
}

export default QuickEntry