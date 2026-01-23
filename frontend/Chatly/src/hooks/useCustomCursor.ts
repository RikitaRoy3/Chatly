import { useEffect, useRef, useState } from 'react';

export const useCustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const outlineRef = useRef<HTMLDivElement | null>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const outlinePositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if it's a touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    // Create cursor elements
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    document.body.appendChild(dot);
    dotRef.current = dot;

    const outline = document.createElement('div');
    outline.className = 'cursor-outline';
    document.body.appendChild(outline);
    outlineRef.current = outline;

    // Add custom-cursor class to body
    document.body.classList.add('custom-cursor');

    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Detect hoverable elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
        target.closest('.hover-target');
      
      setIsHovering(!!isHoverable);
    };

    // Animation loop for smooth cursor following
    let animationId: number;
    const animate = () => {
      if (dotRef.current && outlineRef.current) {
        // Dot follows instantly
        dotRef.current.style.transform = `translate(${positionRef.current.x - 4}px, ${positionRef.current.y - 4}px)`;
        
        // Outline follows with lag
        outlinePositionRef.current.x += (positionRef.current.x - outlinePositionRef.current.x) * 0.15;
        outlinePositionRef.current.y += (positionRef.current.y - outlinePositionRef.current.y) * 0.15;
        outlineRef.current.style.transform = `translate(${outlinePositionRef.current.x - 20}px, ${outlinePositionRef.current.y - 20}px)`;
        
        // Visibility
        dotRef.current.style.opacity = isVisible ? '1' : '0';
        outlineRef.current.style.opacity = isVisible ? '1' : '0';
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousemove', handleElementHover);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      cancelAnimationFrame(animationId);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousemove', handleElementHover);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      if (dotRef.current) document.body.removeChild(dotRef.current);
      if (outlineRef.current) document.body.removeChild(outlineRef.current);
      document.body.classList.remove('custom-cursor');
    };
  }, []);

  // Update outline classes based on state
  useEffect(() => {
    if (outlineRef.current) {
      outlineRef.current.classList.toggle('hover', isHovering);
      outlineRef.current.classList.toggle('click', isClicking);
    }
  }, [isHovering, isClicking]);

  return { isVisible, isHovering, isClicking };
};
