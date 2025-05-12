import styles from "@/styles/index.module.css";

import Image from "next/image";

export default function Page() {
  return (
    <main>
      <div className={styles.main}>some</div>
      <Image src="/rat.jpg" alt="some rat" width={400} height={240} />
    </main>
  );
}
