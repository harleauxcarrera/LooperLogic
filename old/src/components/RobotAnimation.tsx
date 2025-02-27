import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

const Robot = () => {
  const robotRef = useRef<any>();
  
  useFrame((state) => {
    if (robotRef.current) {
      robotRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <group ref={robotRef}>
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0, -0.8, 0]}>
        <cylinderGeometry args={[0.3, 0.5, 1, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <group position={[0, 0, 0]}>
        <mesh position={[0.6, 0, 0]}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial color="#00ff00" />
        </mesh>
        <mesh position={[-0.6, 0, 0]}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial color="#00ff00" />
        </mesh>
      </group>
    </group>
  );
};

const RobotAnimation = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Robot />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default RobotAnimation;