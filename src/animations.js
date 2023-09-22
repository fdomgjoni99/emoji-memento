export const startScreenContainerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    y: 100,
    filter: "blur(20px)",
    transition: {
      type: "spring",
      when: "afterChildren",
      staggerChildren: 0.1,
      duration: 0.3,
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.3,
    },
  },
};

export const startScreenItemVariants = {
  hidden: {
    y: 20,
    opacity: 0,
    skew: 20,
    transition: {
      type: "tween",
      duration: 0.2,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    skew: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.4,
    },
  },
};

export const cardContainerVariants = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  visible: {
    opacity: 1,
  },
};

export const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    y: -100,
    skewX: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    skewX: 0,
  },
};

export const endScreenContainerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    y: 100,
    transition: {
      type: "spring",
      when: "afterChildren",
      staggerChildren: 0.1,
      duration: 0.3,
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      when: "beforeChildren",
      delayChildren: 0.4,
      staggerChildren: 0.1,
      duration: 0.3,
    },
  },
};

export const endScreenItemVariants = {
  hidden: {
    y: 20,
    opacity: 0,
    skew: 20,
    transition: {
      type: "tween",
      duration: 0.2,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    skew: 0,
    transition: {
      type: "spring",
      bounce: 0.7,
      duration: 1,
    },
  },
};
