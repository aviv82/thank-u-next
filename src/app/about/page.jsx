import styles from "./about.module.css";

import Image from "next/image";

export default function Page() {
  return (
    <main>
      <div className={styles.about}>
        <h3>about me</h3>
        <Image src="/rat.jpg" alt="some rat" width={400} height={280} />
      </div>
    </main>
  );
}
