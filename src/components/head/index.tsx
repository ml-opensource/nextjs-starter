import Head from 'next/head';
import * as React from 'react';

// Config
import CONFIG from '../../constants/config';

// Types
import { Page } from '../../types/pages';

const defaultPage = {
  description: CONFIG.SEO.DESCRIPTION,
  image: CONFIG.LOGO,
  title: CONFIG.SEO.TITLE,
};

interface Props {
  page?: Page;
}

const PageHead = ({ page = defaultPage }: Props) => (
  <Head>
    <meta charSet="UTF-8" />
    <title>{page.title}</title>
    <meta name="description" content={page.description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />
    {/* TODO - <meta property="og:url" content={page.url || defaultOGURL} /> */}
    <meta property="og:title" content={page.title} />
    <meta property="og:description" content={page.description} />
    {/* TODO - <meta name="twitter:site" content={page.url} /> */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={page.image} />
    <meta property="og:image" content={page.image} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </Head>
);

export default PageHead;
