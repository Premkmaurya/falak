import { useState, useEffect } from 'react';

/**
 * Preloads an array of image URLs, tracks progress, and returns preloaded HTMLImageElement objects.
 * @param urls Array of image URLs to preload
 */
export const usePreloadImages = (urls: string[]) => {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    if (!urls || urls.length === 0) {
      const timer = setTimeout(() => {
        setLoaded(true);
      }, 0);
      return () => clearTimeout(timer);
    }

    let loadedCount = 0;
    const total = urls.length;
    const preloadedImages: HTMLImageElement[] = new Array(total);
    let isMounted = true;

    const handleImageLoad = (img: HTMLImageElement, index: number) => {
      if (!isMounted) return;
      preloadedImages[index] = img;
      loadedCount++;
      setProgress(Math.round((loadedCount / total) * 100));
      if (loadedCount === total) {
        setImages(preloadedImages);
        setLoaded(true);
      }
    };

    const handleImageError = (index: number) => {
      console.warn(`Failed to preload frame at index ${index}, skipping to prevent lockup`);
      loadedCount++;
      if (loadedCount === total) {
        setImages(preloadedImages);
        setLoaded(true);
      }
    };

    urls.forEach((url, idx) => {
      const img = new Image();
      img.onload = () => handleImageLoad(img, idx);
      img.onerror = () => handleImageError(idx);
      img.src = url;
    });

    return () => {
      isMounted = false;
    };
  }, [urls]);

  return { loaded, progress, images };
};
