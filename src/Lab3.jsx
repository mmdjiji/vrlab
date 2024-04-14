import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, extend, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Sky } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

extend({ OrbitControls });

const Orbit = () => {
  const { camera, gl } = useThree();
  // eslint-disable-next-line react/no-unknown-property
  return <orbitControls args={[camera, gl.domElement]} />;
};

const MySun = () => {
  const mesh = useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 2;
    const x = Math.sin(a) * 1000;
    const y = Math.cos(a) * 1000;
    const z = Math.sin(a) * 1000;
    mesh.current.material.uniforms.sunPosition.value = [x, y, z]
  });
  return (
    <Sky ref={mesh} scale={1000} turbidity={0.1} />
  );
}

const Bed = () => {
  const mesh = useRef();
  const bed = useLoader(GLTFLoader, "/vrlab/bed.glb");
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 2;
    mesh.current.position.z = Math.sin(a) * 2;
  })
  return (
    <primitive
      ref={mesh}
      object={bed.scene}
      scale={0.03}
      position={[4, 2.1, -5]}
    />
  );
}

const Test = () => {
  const mySelfRef = useRef();
  const floor = useLoader(GLTFLoader, "/vrlab/floor.glb");
  const lamp = useLoader(GLTFLoader, "/vrlab/lamp.glb");
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas
        style={{ backgroundColor: "black" }}
        camera={{ position: [14, 6, 0] }}
      >
        <Orbit />
        <group>
          <mesh ref={mySelfRef}>
            <primitive
              object={floor.scene}
              scale={0.15}
            />
          </mesh>
          <mesh ref={mySelfRef}>
            <hemisphereLight intensity={0.15} />
            <primitive
              object={lamp.scene}
              scale={0.01}
              position={[8, 1.7, 2]}
            />
          </mesh>
          <Bed />
          <pointLight
            position={[8, 4, 2]}
            decay={1}
            intensity={Math.PI}
          />
          <MySun />
        </group>
      </Canvas>
    </div>
  );
};
export default Test;