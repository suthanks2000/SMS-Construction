'use client';

import { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

// Rotating pavilion structural components
function PavilionModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle rotation around the vertical axis
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.12;
    }
  });

  return (
    <group ref={groupRef} scale={1.2}>
      {/* Base platform */}
      <mesh position={[0, -0.8, 0]}>
        <boxGeometry args={[3.4, 0.06, 3.4]} />
        <meshPhysicalMaterial 
          color="#161616" 
          roughness={0.3} 
          metalness={0.8}
          clearcoat={1.0}
        />
      </mesh>

      {/* Main Floor plate */}
      <mesh position={[0.2, -0.4, 0]}>
        <boxGeometry args={[3.0, 0.06, 2.4]} />
        <meshPhysicalMaterial 
          color="#0E0E0E" 
          roughness={0.1} 
          metalness={0.95}
          clearcoat={0.8}
        />
      </mesh>

      {/* Roof cantilever plate */}
      <mesh position={[-0.2, 0.8, 0.1]}>
        <boxGeometry args={[2.8, 0.06, 2.6]} />
        <meshPhysicalMaterial 
          color="#161616" 
          roughness={0.4} 
          metalness={0.9}
        />
      </mesh>

      {/* Structural solid stone wall backplate */}
      <mesh position={[-1.2, 0.2, -0.6]}>
        <boxGeometry args={[0.1, 1.2, 1.2]} />
        <meshPhysicalMaterial 
          color="#161616" 
          roughness={0.9} 
          metalness={0.1}
        />
      </mesh>

      {/* Glass architectural facade */}
      <mesh position={[0.9, 0.2, 0.4]}>
        <boxGeometry args={[0.02, 1.2, 1.6]} />
        <meshPhysicalMaterial
          color="#E8C86B"
          transmission={0.95}
          opacity={0.4}
          transparent
          roughness={0.1}
          metalness={0.05}
          ior={1.5}
        />
      </mesh>

      {/* Structural Gold Pillars */}
      {/* Pillar A */}
      <mesh position={[1.2, 0.2, 0.9]}>
        <cylinderGeometry args={[0.025, 0.025, 1.2, 12]} />
        <meshPhysicalMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Pillar B */}
      <mesh position={[-1.2, 0.2, 0.9]}>
        <cylinderGeometry args={[0.025, 0.025, 1.2, 12]} />
        <meshPhysicalMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Pillar C */}
      <mesh position={[1.2, 0.2, -0.9]}>
        <cylinderGeometry args={[0.025, 0.025, 1.2, 12]} />
        <meshPhysicalMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Pillar D */}
      <mesh position={[-1.2, 0.2, -0.9]}>
        <cylinderGeometry args={[0.025, 0.025, 1.2, 12]} />
        <meshPhysicalMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Inner illuminated gold core element */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[1, 1.2, 0.8]} />
        <meshPhysicalMaterial 
          color="#D4AF37" 
          roughness={0.4} 
          metalness={0.95}
          emissive="#D4AF37"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Golden structural outline cage */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.8, 1.8, 3.8]} />
        <meshBasicMaterial 
          color="#D4AF37" 
          wireframe 
          transparent 
          opacity={0.15} 
        />
      </mesh>

      {/* Inner champagne wireframe accent */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[3.2, 1.3, 2.6]} />
        <meshBasicMaterial 
          color="#E8C86B" 
          wireframe 
          transparent 
          opacity={0.2} 
        />
      </mesh>
    </group>
  );
}

export default function ArchitecturalCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <FallbackSchematic />;
  }

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />
      
      <Canvas
        camera={{ position: [4.5, 2.5, 4.5], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        
        {/* Golden Warm Key Light */}
        <directionalLight 
          position={[5, 8, 3]} 
          intensity={1.8} 
          color="#F5D98E" 
        />
        
        {/* Soft Rim Light */}
        <directionalLight 
          position={[-5, -2, -3]} 
          intensity={0.6} 
          color="#E8C86B" 
        />

        {/* Floating motion effect */}
        <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4}>
          <PavilionModel />
        </Float>

        <OrbitControls 
          enableZoom={false} 
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}

// Elegant luxury Blueprint vector fallback in case WebGL is disabled or loading
function FallbackSchematic() {
  return (
    <div className="w-full h-full flex items-center justify-center p-8 bg-[#0E0E0E]/40 border border-luxury-border-gold rounded-2xl relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04)_0%,transparent_85%)] pointer-events-none" />
      
      {/* Blueprint Grid Lines */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(212,175,55,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(212,175,55,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }}
      />

      <svg className="w-4/5 h-4/5 max-w-sm text-luxury-gold/40 animate-pulse" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
        {/* Ground Line */}
        <line x1="10" y1="80" x2="90" y2="80" strokeDasharray="2,2" />
        
        {/* Architectural Slab outlines */}
        <rect x="25" y="70" width="50" height="2" strokeWidth="1" stroke="currentColor" />
        <rect x="20" y="45" width="60" height="3" strokeWidth="1" stroke="currentColor" />
        <rect x="30" y="25" width="40" height="2" strokeWidth="0.75" />
        
        {/* Pillars */}
        <line x1="30" y1="45" x2="30" y2="70" strokeWidth="1.5" />
        <line x1="70" y1="45" x2="70" y2="70" strokeWidth="1.5" />
        <line x1="40" y1="25" x2="40" y2="45" strokeWidth="1" />
        <line x1="60" y1="25" x2="60" y2="45" strokeWidth="1" />

        {/* Dimension markings */}
        <path d="M 15 45 L 15 70 M 15 57 L 20 57" strokeWidth="0.5" />
        <text x="5" y="60" fill="currentColor" fontSize="3" className="font-mono opacity-80">1.2m</text>

        {/* Diagonal architectural schematic markings */}
        <line x1="15" y1="20" x2="85" y2="90" strokeWidth="0.25" strokeDasharray="1,4" />
        <line x1="85" y1="20" x2="15" y2="90" strokeWidth="0.25" strokeDasharray="1,4" />

        {/* Center circles */}
        <circle cx="50" cy="48" r="28" strokeDasharray="2,3" />
        <circle cx="50" cy="48" r="2" fill="currentColor" />
      </svg>
    </div>
  );
}
