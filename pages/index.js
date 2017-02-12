import Layout from '../components/Layout';
import Banner from '../components/Banner';

export default ({ url }) => (
  <Layout url={url}>
    <Banner
      text="THAI COMMUNITY FOR SPORT LOVER"
      subText="หาเพื่อนเล่นกีฬา จองสนาม จบในที่เดียว"
      imageClass="iphone"
    />
  </Layout>
);
