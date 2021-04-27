import "../styles/global.scss";
import { Header } from "../componets/Header";
import styles from "../styles/app.module.scss";
import { Player } from "../componets/Player";
import { PlayerContextProvider } from "../contexts/PlayerContext";
import React from "react";
// import { PlayerContext } from "../contexts/PlayerContext";
// import { useState } from "react";

function MyApp({ Component, pageProps }) {
return (
  <PlayerContextProvider>
    <div className={styles.wrapper}>
      <div className="main">
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      </div>
      <div className="player">
      <Player />
      </div>
    </div>
    </PlayerContextProvider>
  );
}

export default MyApp;

// novas atualizações