import styles from "./SearchBar.module.scss";
import React from "react";

export default function SearchBar() {
  if (window.screen.width <= 420) {
    return (
      <section className={styles.searchBar}>
        <input type="text" placeholder="digite um produto"></input>
        <div className={styles.button}>Search</div>
      </section>
    );
  }
}
