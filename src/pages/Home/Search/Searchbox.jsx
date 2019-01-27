import React, {Component} from 'react';
import { List, InputItem, Button } from 'antd-mobile';

class SearchBox extends Component {
    constructor() {
      super()
      this.state = {
        searchValue: '',
        hasError: false
      }
    }
    changeValue (value) {
      console.log(value);
    }
    render() {
      return (
        <div>
          <List>
            <InputItem
              placeholder="请输入搜索内容"
              error={this.state.hasError}
              onChange={() => this.changeValue() }
            >
            </InputItem>
            <Button type="primary" >搜索</Button>
          </List>
          
        </div>
      )
    }
}
export default SearchBox