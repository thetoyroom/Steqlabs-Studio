import { useScroll, useTransform } from 'framer-motion';

export const useParallax = (distance: number = 150) => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, distance]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    return { y, opacity };
};
