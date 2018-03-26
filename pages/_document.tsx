import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// Config
import CONFIG from '../src/constants/config';

// Env Config
import env from '../env';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }: { renderPage: any }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App: any) => (props: object) => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    const script = `window.ENV = '${process.env.ENV || 'dev'}'`;

    return (
      <html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width" />
          <meta name="og:site_name" content={CONFIG.BRAND_NAME} />
          <meta name="og:image" content="" />
          <meta name="og:locale" content="en_US" />
          <meta name="og:card" content="summary" />
          <meta name="og:image:width" content="200" />
          <meta name="og:image:height" content="200" />
          <link rel="icon" type="image/png" href={CONFIG.FAVICON} />
          {this.props.styleTags}

          {/* TODO - include polyfills globally for now */}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.23.0/polyfill.min.js" />
        </Head>

        <body>
          <div className="root">
            <Main />
            <NextScript />
          </div>
          <script dangerouslySetInnerHTML={{ __html: script }} />

          {/* Google Analytics */}
          {env.GOOGLE_ANALYTICS_ID && <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                ga('create', '${env.GOOGLE_ANALYTICS_ID}', 'auto');
                ${env.GOOGLE_OPTIMIZE_ID && `ga('require', '${env.GOOGLE_OPTIMIZE_ID}');`}
                ga('require', 'eventTracker', {
                  attributePrefix: 'data-'
                });
                ga('require', 'urlChangeTracker');
                ga('require', 'maxScrollTracker');
                ga('send', 'pageview');
              `,
            }}
          />}

          {/* Google Analytics Autotrack */}
          {env.GOOGLE_ANALYTICS_ID && <script async src="https://cdnjs.cloudflare.com/ajax/libs/autotrack/2.4.1/autotrack.js"></script>}
        </body>
      </html>
    );
  }
}
