"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Text, OrbitControls } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function FloatingMedicalBits() {
  const group = useRef<THREE.Group>(null!);
  const items = useMemo(() => {
    // Simple shapes to hint medical elements: cross, book, tablet, capsule
    const arr: { position: [number, number, number]; color: string; type: string }[] = [];
    const colors = ["#32d1ff", "#59ffa8", "#8a7dff", "#0ff", "#77ddff"];
    for (let i = 0; i < 18; i++) {
      arr.push({
        position: [
          (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 8,
          -2 - Math.random() * 6,
        ],
        color: colors[i % colors.length],
        type: ["cross", "book", "tablet", "capsule", "ring"][i % 5],
      });
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.children.forEach((child, i) => {
      child.position.y += Math.sin(t + i) * 0.002;
      child.rotation.x += 0.002;
      child.rotation.y += 0.003;
    });
  });

  return (
    <group ref={group}>
      {items.map((it, idx) => {
        if (it.type === "cross") {
          return (
            <group key={idx} position={it.position}>
              <mesh>
                <boxGeometry args={[0.15, 0.6, 0.1]} />
                <meshStandardMaterial emissive={it.color} color="#0b1220" emissiveIntensity={1.2} />
              </mesh>
              <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <boxGeometry args={[0.15, 0.6, 0.1]} />
                <meshStandardMaterial emissive={it.color} color="#0b1220" emissiveIntensity={1.2} />
              </mesh>
            </group>
          );
        }
        if (it.type === "book") {
          return (
            <mesh key={idx} position={it.position}>
              <boxGeometry args={[0.8, 0.5, 0.15]} />
              <meshStandardMaterial emissive={it.color} color="#0b1220" emissiveIntensity={0.9} />
            </mesh>
          );
        }
        if (it.type === "tablet") {
          return (
            <mesh key={idx} position={it.position}>
              <boxGeometry args={[0.9, 0.6, 0.05]} />
              <meshStandardMaterial emissive={it.color} color="#0b1220" emissiveIntensity={0.8} />
            </mesh>
          );
        }
        if (it.type === "capsule") {
          return (
            <mesh key={idx} position={it.position}>
              <capsuleGeometry args={[0.2, 0.5, 4, 12]} />
              <meshStandardMaterial emissive={it.color} color="#0b1220" emissiveIntensity={1.0} />
            </mesh>
          );
        }
        return (
          <mesh key={idx} position={it.position}>
            <torusGeometry args={[0.35, 0.08, 12, 64]} />
            <meshStandardMaterial emissive={it.color} color="#0b1220" emissiveIntensity={0.9} />
          </mesh>
        );
      })}
    </group>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full min-h-[84vh] flex items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(49,204,255,0.35),transparent_35%),radial-gradient(circle_at_80%_0,rgba(138,125,255,0.28),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(16,233,185,0.22),transparent_35%)]" />

      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <color attach="background" args={["#05060a"]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Stars radius={60} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />

        <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.6}>
          <Text
            position={[0, 0.4, 0]}
            fontSize={1.2}
            letterSpacing={0.02}
            anchorX="center"
            anchorY="middle"
          >
            eLogbook
            <meshStandardMaterial color="#b7e9ff" emissive="#37d7ff" emissiveIntensity={3} />
          </Text>
        </Float>

        <FloatingMedicalBits />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>

      <div className="relative z-10 mt-8 text-center max-w-3xl px-6">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-400 to-purple-400 text-lg sm:text-xl">
          Digital Learning & Training for Medical Students
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
          <a href="#get-started" className="btn-glow">Get Started</a>
          <a href="#demo" className="btn-outline">Request Demo</a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-48 pointer-events-none bg-gradient-to-t from-[#05060a] to-transparent" />
    </section>
  );
}
