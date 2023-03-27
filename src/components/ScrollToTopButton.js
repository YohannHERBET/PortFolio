import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    }
    else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <Button className="scroll-to-top" onClick={scrollToTop} variant="dark">
        &#x25B2;
      </Button>
    )
  );
};

export default ScrollToTopButton;
