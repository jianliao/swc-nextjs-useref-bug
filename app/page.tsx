"use client";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { SpActionButton } from "@/components/SpActionButton";
import { useEffect, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const btnRef = useRef(null);
  useEffect(() => {
    console.log("btnRef reference:", btnRef.current);
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <SpActionButton variant="black" ref={btnRef}>
          Click me
        </SpActionButton>
      </div>
    </main>
  );
}
