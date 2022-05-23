import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@400;700&family=Literata:wght@300;400;500;700&display=optional" rel="stylesheet" />
        </Head>
        <body className="bg-light dark:bg-dark font-literata overflow-x-hidden">
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;