import Layout from '../components/Layout';
import Banner from '../components/Banner';

export default ({ url }) => (
  <Layout url={url}>
    <Banner
      text="สะดวกยิ่งขึ้น คนเล่นมากขึ้น"
      subText="ปัญหาช่องว่าง ไม่มีคนจองจะหมดไป ถ้าใช้แอพเราจัดการ"
      imageClass="browser"
    />
  </Layout>
);
