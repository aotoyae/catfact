import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SSR PAGE',
  description: 'Generated by create next app',
};

// 요청할 때마다 새 데이터를 가져온다.
const SSRPage = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    cache: 'no-cache',
  });
  const { fact } = await response.json();

  return (
    <div>
      SSR Page<p>{fact}</p>
    </div>
  );
};

export default SSRPage;
