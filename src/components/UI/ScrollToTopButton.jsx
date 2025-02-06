import { motion, useScroll, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { ChevronUpIcon} from '@heroicons/react/24/solid'

const ScrollToTopContainerVariants = {
    hide: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
};

export default function ScrollToTopButton() {
    const { scrollYProgress } = useScroll();
    const controls = useAnimationControls();
    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        return scrollYProgress.on('change', (latestValue) => {
            if (latestValue > 0.5) {
                controls.start('show');
            } else {
                controls.start('hide');
            }
        });
    });

    return (
        <motion.button
            className="fixed bottom-0 right-0 p-8"
            variants={ScrollToTopContainerVariants}
            initial="hide"
            animate={controls}
            onClick={scrollToTop}>
            <div className="bg-black text-white rounded-md p-6">
                <ChevronUpIcon className="text-white" />
            </div>
        </motion.button>
    );
}