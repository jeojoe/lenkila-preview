export default ({ text, subText, paddingTop = '190px', imageClass }) => (
  <div className="banner" style={{ paddingTop }}>
    <div className="container">
      <div className="six columns">
        <h1>{text}</h1>
        <h5>{subText}</h5>
      </div>
      <div className="six columns">
        <div className={imageClass} />
      </div>
    </div>
    <style jsx>{`
      .banner {
        height: 600px;
        color: #fff;
        text-shadow: 0px 2px 4px rgba(0,0,0,0.3);
      }
      .banner h5 {
        letter-spacing: 0.1rem;
      }
    `}</style>
    <style jsx global>{`
      .iphone {
        width: 100%;
        height: 100px;
        background-color: red;
      }
    `}</style>
  </div>
);
