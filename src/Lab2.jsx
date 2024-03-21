import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, extend, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Sky } from '@react-three/drei';
extend({ OrbitControls });

const Orbit = () => {
  const { camera, gl } = useThree();
  // eslint-disable-next-line react/no-unknown-property
  return <orbitControls args={[camera, gl.domElement]} />;
};

let decay = 1;

function MySelf() {
  const mySelfRef = useRef();
  
  const floor = useLoader(GLTFLoader, "/vrlab/floor.glb");
  const tip = useLoader(GLTFLoader, "/vrlab/tip.glb");
  const lamp = useLoader(GLTFLoader, "/vrlab/lamp.glb");
  const bed = useLoader(GLTFLoader, "/vrlab/bed.glb");

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas
        style={{ backgroundColor: "black" }}
        camera={{ position: [8, 8, 8] }}
      >
        <Orbit />
        <group>
          {/* <ambientLight /> */}
          <mesh ref={mySelfRef}>
            <primitive
              object={floor.scene}
              scale={0.15}
            />
          </mesh>
          <mesh ref={mySelfRef}>
            <primitive
              object={tip.scene}
              scale={0.15}
            />
          </mesh>
          <mesh ref={mySelfRef}>
            <hemisphereLight intensity={0.15} />
            <primitive
              object={lamp.scene}
              scale={0.01}
              position={[2, 1.7, 2]}
            />
          </mesh>
          <mesh ref={mySelfRef}>
            <primitive
              object={bed.scene}
              scale={0.03}
              position={[5, 2.1, -5]}
            />
          </mesh>
          <pointLight
            position={[2, 4, 2]}
            decay={Math.random() * 2}
            intensity={Math.PI}
          />
          <Sky scale={1000} sunPosition={[500, -20, -1000]} turbidity={0.1} />
        </group>
      </Canvas>
    </div>
  );
}

setInterval(() => {
  decay = Math.random() * 2;
}, 1000);

export default MySelf;