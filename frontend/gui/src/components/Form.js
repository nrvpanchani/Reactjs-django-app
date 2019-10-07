import React from 'react'
import axios from 'axios'
import { Form, Input, Button, Textarea } from 'antd';

const { TextArea } = Input;

class CustomForm extends React.Component {
  handleFormSubmit = (event, requestType, articleID) => {
    event.preventDefault()
    const title = event.target.elements.title.value
    const content = event.target.elements.content.value
    const description = event.target.elements.description.value
    
    switch(requestType){
        case 'POST':
            return axios.post('http://127.0.0.1:8000/api/', {
                title: title,
                content: content,
                description: description
            }).then(res => {
                console.log(res, 'res...')
            }).catch(err => {
                console.log(err, 'errr..')
            })
        case 'PUT':
            return axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
                title: title,
                content: content,
                description: description
            }).then(res => {
                console.log(res, 'res...')
            }).catch(err => {
                console.log(err, 'errr..')
            })
    }
  }
  render() {
      const { requestType, articleID, btnText } = this.props
    return (
      <div>
        <Form onSubmit={(event) => this.handleFormSubmit(
            event,
            requestType,
            articleID
        )}>
          <Form.Item label="Title">
            <Input name="title" placeholder="Put a title here" />
          </Form.Item>
          <Form.Item label="Content">
            <Input name="content" placeholder="Enter some content ..." />
          </Form.Item>
          <Form.Item label="Description">
            <TextArea
                name="description"
                placeholder="Post description"
                autosize={{ minRows: 5, maxRows: 6 }}
                />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">{btnText}</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default CustomForm