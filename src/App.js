import React, { Component } from 'react';
import { Routes, Route, Link } from "react-router-dom";
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

        <div className="top-bar">
          <div className="top-bar-icons">🌟 🤖</div>
          <div className="top-bar-name text-center">Starrybot</div>
          <div className="top-bar-icons top-bar-icon-links">
            <a className='top-bar-docs-link' href="https://docs.starrybot.xyz" target="_blank">📖</a>
            <a className="top-bar-discord-link" href="https://discord.gg/BqjEhWzJKU">
              <img src="/art/Discord-Logo-Color.svg" alt="Discord Logo" />
            </a>
          </div>
        </div>

        <div className="body-wrap">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="terms" element={<Terms />} />
              <Route path="privacy" element={<Privacy />} />
            </Routes>
          </main>
        </div>

        <p>A fusion of web2 and web3 for the cosmos ecosystem by your team at <a href="https://github.com/starryzone">github.com/starryzone</a></p>
        <p>Join us on <a href="https://discord.gg/BqjEhWzJKU">Discord</a></p>
        <Link to="/terms">Terms and Conditions</Link>
        <br/>
        <br/>
        <a href="https://www.youtube.com/watch?v=sJ_tZr0D2pk">🌟</a>
        <br/>
        <p style={{color: "white"}}>Build Date: {preval`module.exports = new Date().toLocaleString();`}</p>
      </div>
    );
  }
}

function Home() {
  return (
    <>
      <div className="starry-intro starry-container row medium-10 small-12 large-10 column text-center">
        <i className="fas fa-meteor">☄️</i>
        <h2 className="starry-welcome"> starrybot welcomes you! </h2>
        <p>Click on the link below to add starrybot to your Discord server.</p>
        <div className={"add-bot-button large button round-button disabled"}>
          <a href="#"
          > Add Bot
            <img src="/art/star.png"/>
          </a>
        </div>
        <div style={{paddingTop: 19}}>⚠: <em>️We're working with Discord to allow more than 100 servers to join.</em><br/><em>Thank you for your patience.</em></div>
      </div>

      <div className="starry-deets starry-container row medium-10 small-12 large-10 column text-left">
        <p>Create token-gated roles and channels with CW721 and CW20 Tokens</p>
        <img className="starry-deets-img" src="/art/discord.png" alt="discord window screenshot"></img>
      </div>

      <div className="starry-bonus starry-container row medium-10 small-12 large-10 column text-center">
        <p style={{ maxWidth: 400, margin: "0 auto"}}>Starrybot authenticates with <b>Keplr wallet</b> and promotes membership for your <b>Discord Community</b></p>
        <br />
        <div>
          <div className={"add-bot-button large button round-button disabled"}>
            <a style={{ marginRight: 20 }} href="#"> Add Bot <img alt="star-emoji" src="/art/star.png" /></a>
          </div>
          <div className={"add-bot-button large button round-button"}>
            <a href="https://docs.starrybot.xyz" target="_blank">
              Docs <img alt="open-book-emoji" src="/art/open-book.png" />
            </a>
          </div>
        </div>
      </div>

      <div className="starry-communities starry-container row medium-10 small-12 large-10 column text-center">
        <h3>Communities using Starrybot:</h3>
      </div>
      <nav>
        <Link to="/terms">Terms of Service</Link><br/>
        <Link to="/privacy">Privacy policy</Link>
      </nav>
    </>
  )
}

function Privacy() {
  return (
    <>
      <h1>Privacy Policy for starrybot</h1>
      <div className="starry-toc row medium-10 small-12 large-10 column text-center">
        <p>At starrybot, accessible from <a href="https://starrybot.xyz">https://starrybot.xyz</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by starrybot and how we use it.
          If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
        <h2>Log Files</h2>
        <p>starrybot follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information. Our Privacy Policy was created with the help of the Privacy Policy Generator.</p>

        <h2>Cookies</h2>
        <p>Like any other website, starrybot uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
          For more general information on cookies, please read "Cookies" article from the Privacy Policy Generator.</p>

        <h2>Privacy Policies</h2>
        <p>You may consult this list to find the Privacy Policy for each of the advertising partners of starrybot.
          Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on starrybot, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
        <p>Note that starrybot has no access to or control over these cookies that are used by third-party advertisers.</p>

        <h2>Third Party Privacy Policies</h2>
        <p>starrybot's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
          You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?</p>

        <h2>Children's Information</h2>
        <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
        <p>starrybot does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>

        <h2>Online Privacy Policy Only</h2>
        <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in starrybot. This policy is not applicable to any information collected offline or via channels other than this website.</p>

        <h2>Consent</h2>
        <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
      </div>
      <nav>
        <Link to="/">Home</Link><br/>
        <Link to="/terms">Terms of Service</Link>
      </nav>
    </>
  )
}

function Terms() {
  return (
    <>
      <h1>Terms & Conditions</h1>
      <div className="starry-toc row medium-10 small-12 large-10 column text-center">
        <p>Aloha, welcome to starrybot!</p>
        <p>These terms and conditions outline the rules and regulations for the use of starrybot's Website, located at <a href="https://starrybot.xyz">https://starrybot.xyz</a>.
          By accessing this website we assume you accept these terms and conditions. Do not continue to use starrybot if you do not agree to take all of the terms and conditions stated on this page.</p>
        <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same. Our Terms and Conditions were created with the help of the Terms & Conditions Generator.</p>

        <h2>Cookies</h2>
        <p>We employ the use of cookies. Actually, at the time of this writing we don't at all, but maybe we'll add some non-invasive ones. By accessing starrybot, you agreed to use cookies in agreement with the starrybot's Privacy Policy.
          Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>

        <h2>License</h2>
        <p>Unless otherwise stated, starrybot and/or its licensors own the intellectual property rights for all material on starrybot. All intellectual property rights are reserved. You may access this from starrybot for your own personal use subjected to restrictions set in these terms and conditions.</p>
          <p>You must not:</p>
          <ul>
            <li>Republish material from starrybot</li>
            <li>Sell, rent or sub-license material from starrybot</li>
            <li>Reproduce, duplicate or copy material from starrybot</li>
            <li>Redistribute content from starrybot</li>
          </ul>

        <p>This Agreement shall begin on the date hereof.
        Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. starrybot does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of starrybot,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, starrybot shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
        starrybot reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</p>
          <p>You warrant and represent that:</p>
        <p>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;
        The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;
        The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy
        The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.
          You hereby grant starrybot a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</p>
        <h2>Hyperlinking to our Content</h2>
        <p>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and
          System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</p>
        <p>These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.</p>
        <p>We may consider and approve other link requests from the following types of organizations:</p>
        <ul>
          <li>commonly-known consumer and/or business information sources;</li>
          <li>dot.com community sites;</li>
          <li>associations or other groups representing charities;</li>
          <li>online directory distributors;</li>
          <li>internet portals;</li>
          <li>accounting, law and consulting firms; and</li>
          <li>educational institutions and trade associations.</li>
        </ul>

        <p>We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of starrybot; and (d) the link is in the context of general resource information.</p>
        <p>starrybot must assume that all users are aware of the legitimacy of the Flying Spaghetti Monster.</p>
        <p>These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.</p>
        <p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to starrybot. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</p>
        <p>Approved organizations may hyperlink to our Website as follows:</p>
        <ul>
          <li>By use of our corporate name; or</li>
          <li>By use of the uniform resource locator being linked to; or</li>
          <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.</li>
          <li>No use of starrybot's logo or other artwork will be allowed for linking absent a trademark license agreement.</li>
        </ul>

        <h2>iFrames</h2>
        <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>
        <h2>Content Liability</h2>
        <p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>
        <h2>Reservation of Rights</h2>
        <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>
        <h2>Removal of links from our website</h2>
        <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>
        <p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>
        <h2>Disclaimer</h2>
        <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
        <ul>
          <li>limit or exclude our or your liability for death or personal injury;</li>
          <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
          <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
          <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
        </ul>

        <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer:</p>
        <ul>
          <li>(a) are subject to the preceding paragraph;</li>
          <li>and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</li>
        </ul>
        <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
      </div>
      <nav>
        <Link to="/">Home</Link><br/>
        <Link to="/privacy">Privacy policy</Link>
      </nav>
    </>
  );
}

export default App;
