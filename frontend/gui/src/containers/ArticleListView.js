import React, { Component } from "react";
import axios from "axios";
import Articles from "../components/Articles";
import CustomForm from '../components/Form'

class ArticleList extends Component {
  state = {
    articles: [],
    loading: true
  };
  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/").then(res => {
      this.setState({
        loading: res.status == 200 ? false : true,
        articles: res.data
      });
    });
  }
  render() {
    const { articles, loading } = this.state;
    const token = localStorage.getItem('token')
    return (
      <div>
        <Articles data={articles} loading={loading} />
        <br />
        {token != null && (
          <div>
            <h2>Create an article</h2>
            <CustomForm requestType="POST" articleID={null} btnText="Create" />
          </div>
        )}
      </div>
    );
  }
}

export default ArticleList;
