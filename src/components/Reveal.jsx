import { motion } from 'framer-motion';

/**
 * Scroll-linked reveal wrapper.
 * - Fades in AND out as the element enters/leaves the viewport (viewport.once = false).
 * - `direction` controls the sideways/vertical origin of the motion:
 *    'left'  -> slides in from the left
 *    'right' -> slides in from the right
 *    'up'    -> rises in from below (default)
 *    'fade'  -> opacity only, no movement
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 32,
  direction = 'up',
  as = 'div',
}) {
  const MotionTag = motion[as] ?? motion.div;

  const distances = {
    up: { x: 0, y },
    left: { x: -70, y: 0 },
    right: { x: 70, y: 0 },
    fade: { x: 0, y: 0 },
  };

  const { x: fromX, y: fromY } = distances[direction] ?? distances.up;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, x: fromX, y: fromY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}
