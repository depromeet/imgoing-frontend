/* eslint-disable @next/next/no-title-in-document-head */
/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Main, NextScript, Head } from 'next/document';

const MAP_APP_KEY = 'cdd8d683c977b841c655a75efe254c4f';

class MyDocumnet extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
          <link
            href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap'
            rel='stylesheet'
          />
          <script
            type='text/javascript'
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${MAP_APP_KEY}&libraries=services,clusterer`}
          />
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    );
  }
}

export default MyDocumnet;
