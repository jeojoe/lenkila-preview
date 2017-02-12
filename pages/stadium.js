import Layout from '../components/Layout';
import BannerStadium from '../components/BannerStadium';

export default ({ url }) => (
  <Layout url={url}>
    <BannerStadium
      text="สะดวกยิ่งขึ้น คนเล่นมากขึ้น"
      subText="ปัญหาช่องว่าง ปัญหาไม่มีคนจองจะหมดไป ถ้าใช้แอพเราจัดการ"
      imageClass="browser"
    />
  </Layout>
);
