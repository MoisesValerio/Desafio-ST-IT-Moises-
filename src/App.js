import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ApiItem from "./components/ApiItem";


const api = {
  baseUrl: "https://api.github.com/orgs/aws/members"
}

class App extends Component {
  constructor(){
    super();
    this.state ={
      gitHubDadosAPIPrincipal: [],
      gitHubDadosAPISecundaria: []
    }
  }

componentDidMount(){
  axios
   .get(api.baseUrl)
   .then((res) => {
      console.log("infos da API", res);
      this.setState({gitHubDadosAPIPrincipal: res.data});
   });
}

  render() { 
    const {gitHubDadosAPIPrincipal} = this.state;
    return (  
    <div className=" Container App">
      <div className = "row">
        Membros github 
        {gitHubDadosAPIPrincipal.map((DataSetAPIPrincipal) => (
          <div className ="col-md-12" id = {DataSetAPIPrincipal.id}>
            <img src ={DataSetAPIPrincipal.avatar_url}/>
            <ApiItem  rotulo= "Id: " conteudo={DataSetAPIPrincipal.id}/>
            <ApiItem  rotulo= "Login: " conteudo={DataSetAPIPrincipal.login}/>
            <ApiItem  rotulo= "Url: " conteudo={DataSetAPIPrincipal.url}/>    
            <ApiItem  rotulo= "Subscriptions url: " conteudo={DataSetAPIPrincipal.subscriptions_url}/>        
          </div>
        ))}
      </div>
    </div>
     );
    }
  }
  
  export default App;
