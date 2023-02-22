import Head from "next/head";
import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import preview from "../public/preview.png";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Scale YYJ</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <DefaultSeo
        title="Scale YYJ"
        description="Happening in Victoria, May 29th - June 2nd, 2023"
        canonical="https://scaleyyj.com"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://scaleyyj.com",
          site_name: "Scale YYJ",

          images: [
            {
              url: `https://scaleyyj.com${preview.src}`,
              width: preview.width,
              height: preview.height,
              alt: "Scale YYJ",
              type: "image/png",
            },
          ],
        }}
        twitter={{
          handle: "@victechweek",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "twitter:image",
            content: `https://scaleyyj.com${preview.src}`,
          },
          { name: "twitter:title", content: "Scale YYJ" },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
