import Link from 'next/prefetch';

export default () => (
  <div className="footer">
    <div className="container">
      <p>&#169; 2017 LENKILA</p>
      <div>
        <Link href="/"><a>User</a></Link>
        <Link href="/stadium"><a>Stadium</a></Link>
        <Link href="/join"><a>Work with Us</a></Link>
      </div>
    </div>
    <style jsx>{`
      .footer {
        padding: 50px 0;
        color: #999;
      }
      .footer p {
        margin: 10px 0;
      }
      .footer a {
        margin: 0 15px 0 0;
        text-decoration: none;
      }
      .footer a:hover {
        text-decoration: underline; 
      }
    `}</style>
  </div>
);
