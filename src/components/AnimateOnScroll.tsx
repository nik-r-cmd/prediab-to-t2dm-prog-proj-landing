
import { useEffect, useRef, ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  animation?: 'fade-up' | 'fade-in' | 'slide-in-right' | 'slide-in-left' | 'scale-in';
}

const AnimateOnScroll = ({ 
  children, 
  className = "", 
  threshold = 0.1,
  delay = 0,
  animation = 'fade-up'
}: AnimateOnScrollProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (elementRef.current) {
              elementRef.current.classList.add('visible');
              elementRef.current.classList.add(`animate-${animation}`);
            }
          }, delay);
        }
      },
      { threshold }
    );
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, delay, animation]);
  
  return (
    <div ref={elementRef} className={`animate-on-scroll ${className}`}>
      {children}
    </div>
  );
};

export default AnimateOnScroll;
