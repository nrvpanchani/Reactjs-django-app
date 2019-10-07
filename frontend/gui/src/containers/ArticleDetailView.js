import React, { Component } from "react";
import axios from "axios";

import { Card, Button } from "antd";
import CustomForm from '../components/Form'

class ArticleDetail extends Component {
  state = {
    article: {},
    loading: true
  };
  componentDidMount() {
    const articalID = this.props.match.params.articalID;
    axios.get(`http://127.0.0.1:8000/api/${articalID}`).then(res => {
      console.log(res, 'res');
      this.setState({
        article: res.data,
        loading: res.status == 200 ? false : true
      });
    });
  }
  handleDelete = () => {
    const articalID = this.props.match.params.articalID;
    console.log(articalID, 'articalID')
    axios.delete(`http://127.0.0.1:8000/api/${articalID}`)
    this.props.history.push('/')
  }
  render() {
    const { article, loading } = this.state;
    const token = localStorage.getItem('token')
    return (
      <div>
        {token != null && (<form onSubmit={this.handleDelete}>
          <Button type="danger" htmlType="submit">Delete</Button>
        </form> )}
      <Card title={article.title} loading={loading}>
        <img
          alt="logo"
          src={
            article.image != null
              ? "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"//`http://127.0.0.1:8000${article.image}`
              : "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          }
        />
        <br />
        <br />
        <p>{article.content}</p>
        <br />
        <br />
        <p>{article.description}</p>
      </Card>
      {token != null && <CustomForm requestType="PUT" articleID={article.id} btnText="Update" />}
      </div>
    );
  }
}

export default ArticleDetail;
