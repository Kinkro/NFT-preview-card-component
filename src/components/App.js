import React from "react";
import Header from "./Header.js";
import MainContent from "./MainContent.js";
import Footer from "./Footer.js";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
