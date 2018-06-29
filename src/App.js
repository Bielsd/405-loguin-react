import React, { Component } from 'react';
import './App.css';

import Controle from './components/Controle';
import Formulario from './components/Formulario';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      atual: ""
    };

  }

  irParaLogin = () => {
    this.setState({atual: "login"});
  }

  irParaCadastro = () => {
    this.setState({atual: "cadastro"});
  }

  render() {
      return (
       <div id="telalogin">
        <Controle login={this.irParaLogin} cadastro={this.irParaCadastro} />
        <Formulario tela={this.state.atual}/>
       </div>
    );
  }
}

export default App;