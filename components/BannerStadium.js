import React, { Component } from 'react';

export default class BannerStadium extends Component {
  componentDidMount() {
    window.sr = ScrollReveal();
    sr.reveal('.text-reveal');
    sr.reveal('.iphone', { delay: 500 });
    sr.reveal('.browser', { delay: 500 });
  }
  render() {
    const { text, subText, paddingTop = '140px', imageClass } = this.props;
    return (
      <div className="banner" style={{ paddingTop }}>
        <div className="banner-gradient" />
        <div className="container">
          <div className="row">
            <div className="text-reveal">
              <h1>{text}</h1>
              <h5>{subText}</h5>
              <button className="button-primary">ลงทะเบียนใช้งาน</button>
            </div>
          </div>
          <div className="row" style={{ paddingTop: '50px' }}>
            <img src="/static/browser.png" alt="Stadium UI Preview" className="browser" />
          </div>
        </div>
        <style jsx>{`
          .banner {
            text-align: center;
            background-image: url('/static/bg-1.jpg');
            background-size: cover;
            background-position: center;
            position: relative;
            height: 930px;
            width: 100%;
            color: #fff;
            text-shadow: 0px 2px 4px rgba(0,0,0,0.3);
            -webkit-transition: background-image 1s ease-in-out;
            -moz-transition: background-image 1s ease-in-out;
            -o-transition: background-image 1s ease-in-out;
            transition: background-image 1s ease-in-out;
            animation-name: cf3FadeInOut;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
            animation-duration: 10s;
            // animation-direction: alternate;
          }
          .banner h1 {
            font-size: 56px;
          }
          .banner h5 {
            letter-spacing: 0.1rem;
          }
          .banner .button {
            margin: 20px 15px 0 0;
          }
          @keyframes cf3FadeInOut {
            0% {
              background-image: url('/static/bg-1.jpg');
            }
            45% {
              background-image: url('/static/bg-2.jpg');
            }
            55% {
              background-image: url('/static/bg-2.jpg');
            }
            100% {
              background-image: url('/static/bg-1.jpg');
            }
          }
        `}</style>
        <style jsx global>{`
          .browser {
            width: 100%;
          }
        `}</style>
      </div>
    );
  }
}
