import { useEffect } from 'react';

interface useObserverProps {
  target: React.RefObject<HTMLElement>;
  root?: HTMLElement;
  rootMargin?: string;
  threshold?: number;
  onIntersect: (entries: IntersectionObserverEntry[]) => void;
}

export const useObserver = ({
  target,
  root,
  rootMargin,
  threshold,
  onIntersect,
}: useObserverProps) => {
  useEffect(() => {
    let observer: IntersectionObserver | undefined;

    if (target.current) {
      observer = new IntersectionObserver(onIntersect, {
        root,
        rootMargin,
        threshold,
      });
      observer.observe(target.current);
    }

    return () => observer && observer.disconnect();
  }, [target, root, rootMargin, threshold, onIntersect]);
};
