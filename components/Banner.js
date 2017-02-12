import React, { Component } from 'react';

export default class Banner extends Component {
  componentDidMount() {
    window.sr = ScrollReveal();
  }
  render() {
    const { text, subText, paddingTop = '200px', imageClass } = this.props;
    return (
      <div className="banner" style={{ paddingTop }}>
        <div className="banner-gradient" />
        <div className="container">
          <div className="six columns">
            <h1>{text}</h1>
            <h5>{subText}</h5>
            <div className="download">
              <img src="/static/ios.png" alt="LENKILA on Apple Store" width="190" />
              <img src="/static/android.png" alt="LENKILA on Google Play" width="190" />
            </div>
          </div>
          <div className="six columns" style={{ position: 'relative' }}>
            <div className={imageClass} />
          </div>
        </div>
        <style jsx>{`
          .banner {
            background-image: url('/static/bg-1.jpg');
            background-size: cover;
            background-position: center;
            position: relative;
            height: 670px;
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
          .download img {
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
          .iphone {
            position: absolute;
            top: -80px;
            left: 70px;
            width: 340px;
            height: 685px;
            // background-color: red;
            background-image: url('/static/iphone-black.png');
            background-size: cover;
            background-position: center;
          }
          .browser {
            position: absolute;
            top: -50px;
            left: 40px;
            width: 860px;
            height: 520px;
            border-radius: 5px;
            overflow: hidden;
            // background-color: red;
            background-image: url('/static/browser.png');
            background-size: cover;
            background-position: center;
          }
        `}</style>
      </div>
    );
  }
}
