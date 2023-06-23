import styles from "./MainCarousel.module.scss";
import banner from "./img/carousel/slider_01/banner.png";
import banner_medium from "./img/carousel/slider_01/banner_medium.png";
import banner_small from "./img/carousel/slider_01/banner_small.png";
import banner_02 from "./img/carousel/slider_02/banner_02.png";
import banner_02_medium from "./img/carousel/slider_02/banner_02_medium.png";
import banner_02_small from "./img/carousel/slider_02/banner_02_small.png";
import banner_03 from "./img/carousel/slider_03/banner_03.png";
import banner_03_medium from "./img/carousel/slider_03/banner_03_medium.png";
import banner_03_small from "./img/carousel/slider_03/banner_03_small.png";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function MainCrousel() {
  let screenWidth = window.screen.width;
  let clientBanner_01 = null;
  let clientBanner_02 = null;
  let clientBanner_03 = null;

  if (screenWidth <= 450) {
    clientBanner_01 = banner_small;
    clientBanner_02 = banner_02_small;
    clientBanner_03 = banner_03_small;
  } else if (screenWidth > 450 && screenWidth < 1440) {
    clientBanner_01 = banner_medium;
    clientBanner_02 = banner_02_medium;
    clientBanner_03 = banner_03_medium;
  } else {
    clientBanner_01 = banner;
    clientBanner_02 = banner_02;
    clientBanner_03 = banner_03;
  }

  let bannerInfo = [
    {
      label: "COLEÇÃO ATEMPORAL",
      sub: "Estilo e qualidade para durar. ",
    },
    {
      label: "COLEÇÃO ATEMPORAL",
      sub: "Alto impacto visual, baixo impacto ambiental!",
    },
  ];

  return (
    <section className={styles.mainCarousel}>
      <Carousel>
        <Carousel.Item className={styles.__item}>
          <img
            src={clientBanner_01}
            alt="Banner - Meteora, moda de impacto positivo"
          />
        </Carousel.Item>
        <Carousel.Item className={styles.__item}>
          <div>
            <img
              src={clientBanner_02}
              alt="Banner - Meteora, moda de impacto positivo"
            />
            <div className={styles.c_info} style={{ textAlign: "left" }}>
              <h1>{bannerInfo[0].label}</h1>
              <p>{bannerInfo[0].sub}</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className={styles.__item}>
          <img
            src={clientBanner_03}
            alt="Banner - Meteora, moda de impacto positivo"
          />
          <div className={styles.c_info} style={{ textAlign: "right" }}>
            <h1>{bannerInfo[1].label}</h1>
            <p>{bannerInfo[1].sub}</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
