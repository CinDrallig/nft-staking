import { Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { nftDropContractAddress } from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";

const Mint: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Mint 🐺 Premium Soda Cans</h1>

      <iframe width="420" height="315"
        src="https://wolfcola.co/assets/videos/video01.mp4?v=e7675bf8">
      </iframe>

      <p className={styles.explain}>
        Mint your 🥤 and start earning <b>$WOOF</b>
      </p>
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />
      
      <Web3Button
        theme="dark"
        contractAddress={nftDropContractAddress}
        action={(contract) => contract.erc721.claim(1)}
        onSuccess={() => {
          alert("NFT Claimed!");
          router.push("/stake");
        }}
        onError={(error) => {
          alert(error);
        }}
      >
        Claim
      </Web3Button>
    </div>
  );
};

export default Mint;
