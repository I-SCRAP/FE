import React, { useEffect, useState } from "react";
import styles from "./LoginMainPage.module.css";
import MainSection from "../../components/MainSection/MainSection";
import MonthlyPopupSection from "../../components/MonthlyPopupSection/MonthlyPopupSection";
import RecommendPopupSection from "../../components/RecommendPopupSection/RecommendPopupSection";
import BookmarkPopupSection from "../../components/BookmarkPopupSection/BookmarkPopupSection";
import RecentHistorySection from "../../components/RecentHistorySection/RecentHistorySection";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

const LoginMainPage = () => {
  return (
    <div className={styles.LoginMainPage}>
      <MainSection />
      <MonthlyPopupSection />
      <RecommendPopupSection />
      <BookmarkPopupSection />
      <RecentHistorySection />
      <Footer />
    </div>
  );
};

export default LoginMainPage;
