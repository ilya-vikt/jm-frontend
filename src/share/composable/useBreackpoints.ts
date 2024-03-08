import { useMediaQuery } from '@vueuse/core';

const isMobile = useMediaQuery('(max-width: 639px)');
const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1024px)');
const isLaptop = useMediaQuery('(min-width: 1025px) and (max-width: 1279px)');
const isDesktop = useMediaQuery('(min-width: 1280px)');
const isUltraWide = useMediaQuery('(min-width: 1921px)');
const isCompact = useMediaQuery('(max-width: 1024px)');

export const useBreackpoints = () => ({
  isDesktop,
  isLaptop,
  isTablet,
  isMobile,
  isCompact,
  isUltraWide
});
