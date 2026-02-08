import { RefObject } from 'react';
import { useScroll, useTransform } from 'framer-motion';

export const useCardAnimation = (ref: RefObject<HTMLElement>) => {
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

    return { y, scale };
};
