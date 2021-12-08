import React, { Component } from 'react';
import './App.css';
import preval from 'preval.macro'

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


<div className="App" >

<audio id="clamber" src="/art/starry.mp4" preload="auto"></audio>

<div class="top-bar">
 <div class="top-bar-left" style={{position:"absolute",top:8,left:20}}>🌟🤖</div>
 <div class="top-bar-name text-center">Starrybot</div>
</div>

<div class="body-wrap">

<div class="starry-intro row medium-10 small-12 large-10 column text-center">
 <i class="fas fa-meteor"  >☄️</i>
 <h2 class="starry-welcome"> StarryBot welcomes you! </h2>
 <p>Click on the link below to add add StarryBot to your Discord server.</p>
 <a href="validation-page.html">
  <a href="https://discord.com/oauth2/authorize?client_id=912554498050891796&scope=bot&permissions=8" class="add-bot-button large button round-button"> Add Bot <img src="/art/star.png"></img> </a>  
 </a>
</div>


<div class="starry-deets row medium-10 small-12 large-10 column text-center">
 <div class="row">
  <div class="large-7 medium-12 small-12 columns text-left">
   <h3>Create token-gated roles and channels.</h3>
   <p>Add rules checking if the user has certain tokens in the cosmos ecosystem.</p>
   <p>By default, any user with Juno tokens will be given the role: <code>juno-hodler</code></p>
  </div>
  <div class="large-5 medium-12 small-12 columns">
   <img src="/art/discord.png" alt="discord window screenshot"></img>
  </div>
 </div>
</div>

<div class="starry-bonus row medium-10 small-12 large-10 column text-center">
 <h3>Starrybot authenticates with Keplr wallet</h3>
 <p>Promote membership for your Discord Community</p>
 <a href="validation-page.html">
  <a href="https://discord.com/oauth2/authorize?client_id=912554498050891796&scope=bot&permissions=8" class="add-bot-button large button round-button"> Add Bot <img src="/art/star.png"></img> </a>  
 </a>
</div>
  

</div>

<p>A fusion of web2 and web3 for the cosmos ecosystem by your team at <a href="https://github.com/starryzone">github.com/starryzone</a></p>
<p>Join us on <a href="https://discord.gg/BqjEhWzJKU">Discord</a></p>
<br/>
<br/>
<a href="https://www.youtube.com/watch?v=sJ_tZr0D2pk">🌟</a>
<br/>
<p style={{color:"white"}}>Build Date: {preval`module.exports = new Date().toLocaleString();`}</p>
</div>



    );
  }
}

export default App;
