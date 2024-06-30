import React from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Plane from "@site/src/components/Plane";

export default function Home(): JSX.Element {
  return (
    <BrowserOnly fallback={undefined}>
      {() => (
        <Layout title="Home">
          <Plane />
        </Layout>
      )}
    </BrowserOnly>
  );
}
