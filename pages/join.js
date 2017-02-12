import Layout from '../components/Layout';
import BannerStadium from '../components/BannerStadium';

export default ({ url }) => (
  <Layout url={url}>
    <BannerStadium
      text="ร่วมเป็นพาร์ทเนอร์กับ LENKILA"
      subText="เปิดช่องทางการขายใหม่บน LENKILA เพิ่มยอดขายให้กับธุรกิจคุณ"
      imageClass="join"
    />
  </Layout>
);
