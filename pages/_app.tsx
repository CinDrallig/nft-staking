import { Pulsechain } from "@thirdweb-dev/chains";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { clientId } from "../consts/contractAddresses";
import type { AppProps } from "next/app";
import "../styles/globals.css";

// This is the chain your dApp will work on.
const activeChain = "Pulsechain";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      clientId={clientId}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
