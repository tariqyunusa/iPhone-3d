import { useState, Suspense, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import IPhone from "../public/IPhone"

function App() {
  const [count, setCount] = useState(0)
  const colors = [ {color : "#5e5566",
id: 0, name: "purple"}, {color: "#e2e4e1",id: 1, name: "white" }, {color: "#4b4845", id: 2, name: "green" }, {color: "#d4c9b1", id: 3, name: "gold"}]
  const sectionRef = useRef(null)
  const changeColor = (color) => {
    sectionRef.current.style.backgroundColor = `${color.color}`

    console.log(color.name);
  }

  return (
    <section ref={sectionRef} style={{backgroundColor: "#808080", width: "100vw", height: "100vh", position: "relative"}}>
      <Canvas >
        <ambientLight intensity={3}/>
        <OrbitControls enableZoom={false}/>
        <Suspense fallback={null}>
          <IPhone />
        </Suspense>
      </Canvas>
      <div className='selector-section'>
      <div className='selector'>
        {colors.map((color) => (
               <div key={color.id} onClick={() =>changeColor(color)}   style={{width: "25px", height: "25px", borderRadius: "50%", backgroundColor: `${color.color}` , border: "1px solid #000", cursor: "pointer"}} ></div>
        ))}
          </div>
      </div>
    </section>
  )
}

export default App
