export default ({ text, subText, paddingTop = '200px', imageClass }) => (
  <div className="banner" style={{ paddingTop }}>
    <div className="banner-gradient" />
    <div className="container">
      <div className="six columns">
        <h1>{text}</h1>
        <h5>{subText}</h5>
        <div className="download">
          <img src="/static/ios.png" alt="LENKILA on Apple Store" width="180" />
          <img src="/static/android.png" alt="LENKILA on Google Play" width="180" />
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
        height: 700px;
        width: 100%;
        color: #fff;
        text-shadow: 0px 2px 4px rgba(0,0,0,0.3);
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
    `}</style>
    <style jsx global>{`
      .iphone {
        position: absolute;
        top: -80px;
        left: 50px;
        width: 360px;
        height: 730px;
        // background-color: red;
        background-image: url('/static/iphone-black.png');
        background-size: cover;
        background-position: center;
      }
    `}</style>
  </div>
);
