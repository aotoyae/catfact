'use client';
import React, { useEffect, useState } from 'react';

// state 표시를 할 수 있다.
const CSRPage = () => {
  const [catfact, setCatfact] = useState(null);

  useEffect(() => {
    const fetchCatfact = async () => {
      const response = await fetch(`https://catfact.ninja/fact`);
      const { fact } = await response.json();
      setCatfact(fact);
    };

    fetchCatfact();
  }, []);

  if (!catfact) {
    return <div>Loding...</div>;
  }

  return (
    <div>
      CSR Page<p>{catfact}</p>
    </div>
  );
};

export default CSRPage;
