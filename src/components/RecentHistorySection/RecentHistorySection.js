import React, { useState, useEffect } from "react";
import styles from "./RecentHistorySection.module.css";
import topImage from "../../assets/mainPageImage4.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import axios from "axios";
import noHistoryImage from "../../assets/MainPage/RecentHistorySectionImage.svg";
import { useNavigate } from "react-router-dom";

const RecentHistorySection = () => {
  const [swiper, setSwiper] = useState();
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  const serverURL = process.env.REACT_APP_SERVER_URL;

  useEffect(() => {
    // API로부터 데이터 가져오기
    axios
      .get(`${serverURL}/reviews/recent`, {
        withCredentials: true,
      })
      .then((response) => {
        setHistory(response.data);
      });
  }, []);

  const handleButtonClick = () => {
    navigate("/archiving"); // 클릭 시 해당 경로로 이동
  };

  if (!history || Object.keys(history).length === 0) {
    return (
      <div className={styles.RecentHistorySection}>
        <img src={topImage} alt="" className={styles.topImage} />
        <div className={styles.container}>
          <img src={noHistoryImage} alt="" className={styles.noHistoryImage} />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.RecentHistorySection}>
      <img src={topImage} alt="" className={styles.topImage} />
      <div className={styles.container}>
        <div className={styles.topText}>
          <div className={styles.title}>최근 쓴 기록</div>
          <div className={styles.button} onClick={handleButtonClick}>
            전체보기
          </div>
        </div>
        <div>
          <div className={styles.content}>
            <IoIosArrowDropleft
              onClick={() => swiper.slidePrev()}
              className={styles.leftButton}
            />
            <Swiper
              modules={[Navigation]}
              breakpoints={{
                1: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                500: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                800: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1100: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              onSwiper={(e) => {
                setSwiper(e);
              }}
              speed={500}
              loop={true}
            >
              {history.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className={styles.card}>
                    <div className={styles.cardInner}>
                      {/* 카드 앞면 */}
                      <div className={styles.cardFront}>
                        <img
                          src={item.cardFront}
                          alt="Front"
                          className={styles.historyImage}
                        />
                      </div>
                      {/* 카드 뒷면 */}
                      <div className={styles.cardBack}>
                        <img
                          src={item.cardBack}
                          alt="Back"
                          className={styles.historyImage}
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <IoIosArrowDropright
              onClick={() => swiper.slideNext()}
              className={styles.rightButton}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentHistorySection;
