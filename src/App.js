import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import TestWeaponGun from './TestWeaponGun';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Canvas
        camera={{ position: [2, 0, 12.25], fov: 15 }}
        style={{
          backgroundColor: '#111a21',
          width: '100vw',
          height: '100vh',
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <TestWeaponGun position={[0.025, -0.9, 1]} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
