import React from 'react';

export default function Head({title, description}) {
    return (
      <>
        <title>{title}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </>
    )
  }
  