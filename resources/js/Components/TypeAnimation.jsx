import { TypeAnimation } from 'react-type-animation';

const TypeAnimationTex = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We Manage Your Time',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'We Manage Your Profile',
        2000,
        'We Manage Your Tasks',
        2000,
        'We Manage Your Plans',
        2000,
        'We Manage Your Money',
        2000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};


export default TypeAnimationTex;