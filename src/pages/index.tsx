import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { isMobile } from "@site/src/utils";
import styles from "./styles.module.css";
import favicon from "@site/static/img/favicon/favicon.png";

export default function Home(): JSX.Element {
  return (
    <BrowserOnly fallback={undefined}>
      {() => {
        return (
          <Layout
            title="Home"
            description="Description will go into a meta tag in <head />"
          >
            <section className={clsx(styles.homepageContent)}>
              <BackgroundContainer />
              <PersonalPanel />
            </section>
          </Layout>
        );
      }}
    </BrowserOnly>
  );
}

const BackgroundContainer = () => {
  return (
    <>
      <article className={styles.space} role="img"></article>
      <article className={styles.missionImpossible} role="img"></article>
    </>
  );
};

const PersonalPanel = () => {
  const { siteConfig } = useDocusaurusContext();
  const isMobileDevice: boolean = isMobile();

  return (
    <>
      {isMobileDevice ? (
        <div className={clsx(styles.mobileHeroTextContainer)}>
          <div className={styles.mobileHeroTextArea}>
            <div className={styles.mobileAvatarArea}>
              <img src={favicon} alt="Winwoo" />
            </div>
            <p className={styles.mobileHeroTextSubTitle}>
              {siteConfig.tagline}
            </p>
          </div>
        </div>
      ) : (
        <div className={clsx(styles.heroTextContainer)}>
          <div className={styles.heroTextArea}>
            <div className={styles.avatarArea}>
              <img src={favicon} alt="Winwoo" />
            </div>
            <p className={styles.heroTextSubTitle}>{siteConfig.tagline}</p>
          </div>
        </div>
      )}
    </>
  );
};
