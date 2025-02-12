import { motion } from "framer-motion";

const textMotion = {
  rest: {
    x: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn"
    }
  },
  hover: {
    color: "blue",
    x: 30,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut"
    }
  }
};

const slashMotion = {
  rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn"
    }
  }
};

export const ButtonMinimal = ({children}) => {
  return (
    <motion.div initial="rest" whileHover="hover" animate="rest" className="relative max-w-[250px] pointer">
      <motion.div variants={slashMotion} className="absolute top-[50%] left-0 opacity-0 -translate-y-[50%]">
        <svg width="1em" height="1em" viewBox="0 0 27 50" className="w-auto h-[50px] object-scale-down">
          <path
            fill="#154FFF"
            d="M21.177 0L0 50h5.818L26.995 0z"
            fillRule="evenodd"
          />
        </svg>
      </motion.div>
      <motion.h1 variants={textMotion} className="py-3 justify-center">{children}</motion.h1>
    </motion.div>
  );
};