import "../styles/globals.scss";
import { Layout } from "../templates/Base";
import "@fontsource/roboto";
import "@fontsource/montserrat";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
