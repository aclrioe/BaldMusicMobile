import React, {Component} from 'react';
import { Flex, List, InputItem, Button } from 'antd-mobile';
import "./SearchBox.scss";

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
      this.setState({searchValue: value})
    }
    render() {
      return (
        <div>
          <Flex>
            <Flex.Item>
              <List >
                <InputItem
                  placeholder="请输入搜索内容"
                  error={this.state.hasError}
                  onChange={() => this.changeValue() }
                >
                </InputItem>
              </List>
            </Flex.Item>
            <Flex.Item>
              <Button type="primary" >搜索</Button>
            </Flex.Item>
          </Flex>
        </div>
      )
    }
}
export default SearchBox