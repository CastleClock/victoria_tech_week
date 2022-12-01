import Head from "next/head";
import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import preview from "../public/preview.png";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Victoria Tech Week</title>
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
        title="Victoria Tech Week"
        description="Happening in Victoria, June 5-12, 2023"
        canonical="https://victoriatechweek.com"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://Victoriatechweek.com",
          site_name: "SF Tech Week",

          images: [
            {
              url: `https://victoriatechweek.com${preview.src}`,
              width: preview.width,
              height: preview.height,
              alt: "Victoria Tech Week",
              type: "image/png",
            },
          ],
        }}
        twitter={{
          handle: "@sftechweek",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "twitter:image",
            content: `https://victoriatechweek.com${preview.src}`,
          },
          { name: "twitter:title", content: "SF Tech Week" },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
