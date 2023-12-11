import { useState, Suspense } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'


import { Model } from '../public/Woman';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';

function App() {
  //const [count, setCount] = useState(0)
  return (
    <>

    <Canvas>
      <ambientLight/>
      <OrbitControls />
      <Suspense fallback={null}>
        <Model></Model>
      </Suspense>
      <Environment preset = 'sunset' />
      </Canvas>

   
    </>
    
  );
}

export default App;
