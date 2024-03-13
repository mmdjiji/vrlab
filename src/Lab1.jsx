import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, extend, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });

const Orbit = () => {
  const { camera, gl } = useThree();
  // eslint-disable-next-line react/no-unknown-property
  return <orbitControls args={[camera, gl.domElement]} />;
};

function MySelf() {
  const mySelfRef = useRef();
  
  const model = useLoader(
    GLTFLoader,
    "/vrlab/avatar.glb"
  );

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas
        style={{ backgroundColor: "white" }}
        camera={{ position: [1, 1, 4] }}
      >
        <Orbit />
        <mesh ref={mySelfRef}>
          <hemisphereLight intensity={0.15} />
          <ambientLight />
          <primitive
            object={model.scene}
            scale={1}
          />
        </mesh>
      </Canvas>
    </div>
  );
}

export default MySelf;