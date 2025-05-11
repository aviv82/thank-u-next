import { MOUSE } from "../app/ui/styles/images";
import styles from "../app/ui/styles/home.module.css";
import { FG } from "./ui/styles/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav className={styles.nav}>nav</nav>
      <main className={styles.main}>
        <div className={styles.section}>
          <h3>body yo</h3>
          <Image
            src={MOUSE.URL}
            alt={MOUSE.ALT}
            width={400}
            height={280}
            className={styles.img}
          />
        </div>
      </main>
      <footer className={`${styles.footer} ${FG.className}`}>foot</footer>
    </div>
  );
}
