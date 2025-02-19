import React, { useRef, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const ParallaxStars: React.FC = () => {
  const ref = useRef<any>();
  const scrollRef = useRef(0);

  // Generate sphere positions once and memoize them
  const sphere = useMemo(() => {
    const positions = new Float32Array(5000 * 3); // 5000 points * 3 coordinates (x, y, z)
    random.inSphere(positions, { radius: 1.5, center: new Float32Array([0, 0, 0]) });
    return positions;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      // Calculate scroll-based rotation
      const scrollSpeed = scrollRef.current * 0.0001;
      ref.current.rotation.x = scrollSpeed;
      
      // Add subtle continuous rotation
      ref.current.rotation.y -= delta * 0.05;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
};

export default ParallaxStars;