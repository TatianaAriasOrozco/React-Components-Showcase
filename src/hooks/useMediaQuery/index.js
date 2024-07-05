import { useState, useEffect } from 'react';

function useMediaQuery(query) {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);
  
    useEffect(() => {
      const mediaQueryList = window.matchMedia(query);
      const listener = () => setMatches(mediaQueryList.matches);
  
      mediaQueryList.addListener(listener);
      return () => mediaQueryList.removeListener(listener);
    }, [query]);
  
    return matches;
  }

  export default useMediaQuery;
  