import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = 'MultSacch - Com cepas exclusivas e selecionadas MultSacch é a melhor opção de aditivo probiótico para bovinos, bubalinos, ovinos e caprinos.Entre em contato e solicite uma cotação.',
  author = 'Biomart Nutrição Animal',
  meta,
  title = 'MultSacch - Biomart Nutrição Animal',
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `pt-BR`,
  meta: [],
};
