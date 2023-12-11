/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 woman.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/woman.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.04}>
          <primitive object={nodes.mixamorigHips} />
          <mesh name="Ch03" geometry={nodes.Ch03.geometry} material={materials.Ch03_Body} scale = {1} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/woman.gltf')