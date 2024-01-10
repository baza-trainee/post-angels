import { useMediaPredicate } from 'react-media-hook';

const useBreakpoints = () => {
  const less480px = useMediaPredicate('(max-width: 479px)');
  const less768px = useMediaPredicate('(max-width: 767px)');
  const bigger480px = useMediaPredicate('(min-width: 480px)');
  const bigger768px = useMediaPredicate('(min-width: 768px)');
  const bigger1280px = useMediaPredicate('(min-width: 1280px)');
  const bigger1000px = useMediaPredicate('(min-width: 1000px)');
  const bigger1440px = useMediaPredicate('(min-width: 1440px)');

  return { less480px, less768px, bigger768px, bigger1280px, bigger1000px, bigger1440px, bigger480px };
};
export default useBreakpoints;
