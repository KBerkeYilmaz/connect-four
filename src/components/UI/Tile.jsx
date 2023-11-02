import { useSpring, animated } from '@react-spring/web';

const Tile = ({ start, end }) => {
  const springProps = useSpring({
    from: { transform: `translateY(${start}%)` },
    to: { transform: `translateY(${end}%)` },
    config: { friction: 20, tension: 280 },
    onRest: onFinished 
  });

  return (
    <animated.div style={{
      ...springProps,
      width: '50px',
      height: '50px',
      backgroundColor: 'blue'
    }}>
      Tile
    </animated.div>
  );
}
export default Tile;
