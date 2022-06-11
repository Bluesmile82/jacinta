import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { Billboard, OrbitControls, Text, Image, Cloud, Sparkles } from "@react-three/drei";

export function TestBillBoard() {
  return (
    <Canvas
      camera={{ position: [0, 0, 1.8], fov: 75 }}
    >
      <Billboard follow position={[0, 0, 0.2]} scale={[1.3, 1.6, 1]}>
        <Image transparent url="/01_bg.png" />
      </Billboard>
      <Billboard follow={false} position={[0, -0.2, 0.3]}>
        <Image transparent url="/02_plantas.png" />
      </Billboard>
      <Billboard follow={false} position={[0, 0, 0.4]}>
        <Image transparent url="/03_plantas.png" />
      </Billboard>
      <Billboard follow={false} position={[0, 0, 0.45]}>
        <Image transparent url="/04_plantas.png" />
      </Billboard>
      <Image transparent url="/jacinta.png" position={[0, 0, 0.7]} />
      <Billboard follow={false} position={[0, 0, 0.5]}>
        <Image transparent url="/07_brillis01.png" />
      </Billboard>
      <Billboard follow={false} position={[0, 0, 0.6]}>
        <Image transparent url="/08_brillis02.png" />
      </Billboard>
      <Billboard follow={false} position={[0, 0, 0.65]}>
        <Image transparent url="/09_brillis03.png" />
      </Billboard>
      <Cloud scale={[0.5, 0.5, 0.5]} position={[-2, 0, -8]} speed={0.4} segments={20} color="#fcc" depthTest={false} />
      <Sparkles {
          ...{ size: 0.6,
          opacity: 0.7,
          amount: 50,
          speed: 0.4,
          noise: 1,
          random: true}
        }
        position={[0, 0, 0.5]}
        color="yellow"
        count={20}
      />
      <Sparkles {
          ...{ size: 0.5,
          opacity: 0.7,
          amount: 50,
          speed: 0.6,
          noise: 1,
          random: true}
        }
        position={[0, 0, 0.5]}
        color="lightgreen"
        count={20}
      />
      <Text
        color={'lightgreen'}
        fontSize={1.4}
        textAlign={'left'}
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
      >
        Jacinta
      </Text>
      <Image transparent url="/010_mesa.png" position={[0, 0, 0.75]}/>
      <Image transparent url="/011_botes.png" position={[0, 0.05, 0.83]} />
      <Image transparent url="/012_marco.png" position={[0, 0, 0.85]} scale={[0.8, 1, 1]} />
      <OrbitControls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-0.1}
        maxAzimuthAngle={0.1}
        enableZoom={false}
      />
    </Canvas>
  );
}

const App = () => (
  <div style={{ width: "100vw", height: "100vh", background: '#ddf' }}>
    <TestBillBoard />
  </div>
);

export default App;