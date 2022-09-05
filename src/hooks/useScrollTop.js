import { useEffect, useState } from 'react';

const testScrollTop = (scrollTop) => {
  if (typeof window === 'undefined') {
    return true;
  }

  return window.scrollY > scrollTop;
};

export const useScrollTop = (scrollTop = window.innerHeight) => {
  const [isScrolled, setIsScrolled] = useState();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const detectScrollTop = () => {
      setIsScrolled(testScrollTop(scrollTop));
    };

    window.addEventListener('scroll', detectScrollTop);
    detectScrollTop();

    return () => window.removeEventListener('scroll', detectScrollTop);
  }, [scrollTop]);

  return isScrolled;
};
