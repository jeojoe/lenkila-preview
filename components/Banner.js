export default ({ text, subText, paddingTop = '100px', imageClass }) => (
  <div className="banner" style={{ paddingTop }}>
    <div className="container">
      <div className="six columns">
        <h3>{text}</h3>
        <h6>{subText}</h6>
      </div>
      <div className="six columns">
        <div className={imageClass} />
      </div>
    </div>
    <style jsx>{`
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
