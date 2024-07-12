import React from "react";
import clsx from "clsx";
import ErrorBoundary from "@docusaurus/ErrorBoundary";
import { PageMetadata, ThemeClassNames } from "@docusaurus/theme-common";
import SkipToContent from "@theme/SkipToContent";
import AnnouncementBar from "@theme/AnnouncementBar";
import Navbar from "@theme/Navbar";
import Footer from "@theme/Footer";
import LayoutProvider from "@theme/Layout/Provider";
import ErrorPageContent from "@theme/ErrorPageContent";
import type { Props } from "@theme/Layout";
import styles from "./styles.module.css";
import { isMobile } from "@site/src/utils/index";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function Layout(props: Props): JSX.Element {
  const { children, noFooter, wrapperClassName, title, description } = props;
  return (
    <BrowserOnly>
      {() => {
        return (
          <LayoutProvider>
            <PageMetadata title={title} description={description} />
            <SkipToContent />

            {!isMobile() && <AnnouncementBar />}
            <Navbar />

            <div
              className={clsx(
                ThemeClassNames.wrapper.main,
                styles.mainWrapper,
                wrapperClassName
              )}
            >
              <ErrorBoundary
                fallback={(params) => <ErrorPageContent {...params} />}
              >
                {children}
              </ErrorBoundary>
            </div>

            {!noFooter && <Footer />}
          </LayoutProvider>
        );
      }}
    </BrowserOnly>
  );
}
