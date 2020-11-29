import styles from "../styles/Home.module.scss";
import { gsap, Power3 } from "gsap";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.addEventListener("mousemove", (ev) => {
      gsap.to(".Home_text__dq4ii", {
        x: ev.clientX,
        y: ev.clientY,
        stagger: -0.02,
      });
    });
  });

  return (
    <div>
      <div className={styles.text}>MAKERBENCH</div>
      <div className={styles.text}>MAKERBENCH</div>
      <div className={styles.text}>MAKERBENCH</div>
      <div className={styles.text}>MAKERBENCH</div>
      <div className={styles.text}>
        <span>MAKERBENCH</span>
      </div>
    </div>
  );
}
