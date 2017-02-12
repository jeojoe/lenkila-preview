import Link from 'next/prefetch';
import c from 'classnames';

export default ({ url: { pathname } }) => (
  <div className="navbar">
    <div className="wrapper">
      <div className="left"><h4>LENKILA</h4></div>
      <div className="right">
        คุณคือ :
        <Link href="/">
          <a className={c('nav-item', { active: pathname === '/' })}>
            ผู้เล่น</a>
        </Link>
        <Link href="/stadium">
          <a className={c('nav-item', { active: pathname === '/stadium' })}>สนาม</a>
        </Link>
        <Link href="/join">
          <a className={c('nav-item', { active: pathname === '/join' })}>ร่วมงานกับเรา</a>
        </Link>
      </div>
    </div>
    <style jsx>{`
      .navbar h4 {
        color: #fff;
        // text-shadow: 0px 2px 4px rgba(0,0,0,0.3);
        letter-spacing: 0.1rem;
      }
      .navbar {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        margin: 55px 0 0;
        text-shadow: 0px 2px 4px rgba(0,0,0,0.3);
      }
      .wrapper {
        width: 90%;
        max-width: 1000px;
        margin: 0 auto;
      }
      .left, .right {
        display: inline-block;
        verticle-align: middle;
      }
      .right {
        float: right;
        color: #fff;
        font-size: 21px;
        font-weight: 600;
        font-style: italic;
      }
      .nav-item {
        color: #fff;
        text-decoration: none;
        margin-left: 20px;
      }
      .nav-item.active {
        text-decoration: underline;
      }
      .nav-item:hover {
        text-decoration: underline;
      }
    `}</style>
  </div>
);

