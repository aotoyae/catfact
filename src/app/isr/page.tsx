import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ISR PAGE',
  description: 'Generated by create next app',
};

// 5초마다 새 데이터를 가져온다.
const ISRPage = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    next: { revalidate: 5 },
  });
  const { fact } = await response.json();

  return (
    <div>
      ISR Page<p>{fact}</p>
    </div>
  );
};

export default ISRPage;
