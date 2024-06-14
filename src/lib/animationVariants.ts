import { Variants } from "framer-motion";

const defaultAnimation: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 2, type: "spring" },
  },
  fromLeft: {
    opacity: 0,
    x: -50,
  },
  fromRight: {
    opacity: 0,
    x: 50,
  },
  fromBottom: {
    opacity: 0,
    y: 50,
  },
  fromTop: {
    opacity: 0,
    y: -50,
  },
};

const fromRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 2, type: "spring", staggerChildren: 0.4 },
  },
};

const fromLeft: Variants = {
  ...fromRight,
  hidden: {
    opacity: 0,
    x: -50,
  },
};

const fromBottom: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, type: "spring", staggerChildren: 0.4 },
  },
};

export { fromRight, fromBottom, fromLeft, defaultAnimation };
