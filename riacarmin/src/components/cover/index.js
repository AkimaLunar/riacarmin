import React from "react";
import style from "./style.module.scss";

import Name from "../name";
import About from "../about";

function Cover() {
  return (
    <section className={style.cover}>
      <div className={style.cover__leftColumn}>
        <Name />
        <div
          className={`${style.cover__skewed} ${style.cover__skewed__left__1}`}
        >
          &nbsp;
        </div>
        <div
          className={`${style.cover__skewed} ${style.cover__skewed__left__2}`}
        >
          &nbsp;
        </div>
      </div>

      <div className={style.cover__rightColumn}>
        <About />
        <div
          className={`${style.cover__skewed} ${style.cover__skewed__right__1}`}
        >
          &nbsp;
        </div>
        <div
          className={`${style.cover__skewed} ${style.cover__skewed__right__2}`}
        >
          &nbsp;
        </div>
      </div>
    </section>
  );
}

export default Cover;
