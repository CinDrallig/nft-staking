import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>Wolf Cola Premium Soda Can</h1>
      <p className={styles.description}>
          Stake Premium Soda Can NFTs, Earn $WOOF!
        </p>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/mint`)}
        >
          {/* Mint a new NFT */}
          <Image src="/icons/drop.webp" alt="drop" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>Mint 🐺 Premium Soda Can</h2>
          <p className={styles.selectBoxDescription}>
            href="https://app.pulsex.com/swap?outputCurrency=0x13342624b9D3049fB8Ef0a15b803f704864Bb844/">Buy $WOOF to mint Wolf Cola Premium Soda Cans
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          <Image src="/icons/token.webp" alt="token" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>Stake 🐺 Premium Soda Cans </h2>
          <p className={styles.selectBoxDescription}>
            Earn <b>3,200% APR</b> $WOOF.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
