import { TypeAnimation } from 'react-type-animation';

const TypeAnimationTex = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We Manage Your Time Management',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'We Manage Your Profile Management',
        2000,
        'We Manage Your Task Management',
        2000,
        'We Manage Your Plan Making',
        2000,
        'We Manage Your Money Management',
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