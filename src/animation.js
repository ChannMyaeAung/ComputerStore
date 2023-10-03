export const dropdownAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

export const dropdownItems = {
  hidden: { x: "-1000px" },
  show: {
    x: 0,

    transition: { duration: 0.1 },
  },
};
