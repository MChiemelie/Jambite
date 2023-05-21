export const navVariants = {
 hidden: {
   opacity: 0,
   y: -50,
   transition: {
     type: 'spring',
     stiffness: 400,
     damping: 140,
   },
 },
 show: {
   opacity: 1,
   y: 0,
   transition: {
     type: 'spring',
     stiffness: 80,
     delay: 2,
     duration: 2,
   },
 },
};

export const slideIn = (direction, delay, duration, type) => ({
 hidden: {
   opacity: 0,
   x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
   y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
 },
 show: {
  opacity: 1,
   x: 0,
   y: 0,
   transition: {
     type,
     delay,
     duration,
     ease: 'easeOut',
   },
 },
});

export const staggerContainer = (staggerChildren, delayChildren) => ({
 hidden: {},
 show: {
   transition: {
     staggerChildren,
     delayChildren,
   },
 },
});

export const textVariant = (delay) => ({
 hidden: {
   y: 50,
   opacity: 0,
 },
 show: {
   y: 0,
   opacity: 1,
   transition: {
     type: 'spring',
     duration: 1.25,
     delay,
   },
 },
});


export const textVariant2 = {
 hidden: {
   opacity: 0,
   y: 20,
 },
 show: {
   opacity: 1,
   y: 0,
   transition: {
     type: 'tween',
     ease: 'easeIn',
   },
 },
};

export const fadeIn = (direction, type, delay, duration) => ({
 hidden: {
   x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
   y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
   opacity: 0,
 },
 show: {
   x: 0,
   y: 0,
   opacity: 1,
   transition: {
     type,
     delay,
     duration,
     ease: 'easeOut',
   },
 },
});


export const zoomIn = (delay, duration) => ({
 hidden: {
   scale: 0,
   opacity: 0,
 },
 show: {
   scale: 1,
   opacity: 1,
   transition: {
     type: 'tween',
     delay,
     duration,
     ease: 'easeOut',
   },
 },
});

export const footerVariants = {
 hidden: {
   opacity: 0,
   y: 50,
   transition: {
     type: 'spring',
     stiffness: 300,
     damping: 140,
   },
 },
 show: {
   opacity: 1,
   y: 0,
   transition: {
     type: 'spring',
     stiffness: 80,
     delay: 0.5,
   },
 },
};