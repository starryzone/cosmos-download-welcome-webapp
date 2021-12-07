import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  discordRedirect() {
    console.log('hi')
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.handleLoad)
  }

  handleLoad = async () => {
    console.log('loaded')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">StarryBot welcomes you!</h1>
          <p className="App-subtitle">Explore the frontier of Discord gating with Cosmos…</p>
          <div className="messages">
            <p>Click on the link below to add add StarryBot to your Discord server.</p>
          </div>
          <div className="download-btn">
            <input type="submit" value="Add StarryBot" onClick={e =>  window.location.href='https://discord.com/oauth2/authorize?client_id=912554498050891796&scope=bot&permissions=8'} />
          </div>
        </header>
        <div className="below-the-fold">
          <div className="messages">
            <p>You can add rules checking if the user has certain tokens in the Cosmos ecosystem.</p>
            <p>By default, any user with Juno tokens will be given the role: <code>juno-hodler</code></p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
