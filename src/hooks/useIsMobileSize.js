import { useEffect, useState } from 'react';

const testIsMobile = () => {
  if (typeof window === 'undefined') {
    return true;
  }
  return window.innerWidth < 768;
};

export const useIsMobileSize = () => {
  const [isMobileSize, setIsMobileSize] = useState(testIsMobile);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const autoResize = () => {
      setIsMobileSize(testIsMobile());
    };

    window.addEventListener('resize', autoResize);
    autoResize();

    return () => window.removeEventListener('resize', autoResize);
  }, []);

  return isMobileSize;
};
