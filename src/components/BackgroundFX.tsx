"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function FloatingBits() {
  const group = useRef<THREE.Group>(null!);
  const items = useMemo(() => {
    const arr: { position: [number, number, number]; color: string; type: string; scale?: number }[] = [];
    const colors = ["#2bdcff", "#59ffa8", "#8a7dff", "#49f0ff", "#77ddff"];
    for (let i = 0; i < 32; i++) {
      arr.push({
        position: [
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 20,
          -5 - Math.random() * 20,
        ],
        color: colors[i % colors.length],
        type: ["ring", "capsule", "box"][i % 3],
        scale: 0.6 + Math.random() * 1.2,
      });
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!group.current) return;
    group.current.children.forEach((child, i) => {
      child.position.y += Math.sin(t * 0.6 + i) * 0.0015;
      child.rotation.x += 0.0015;
      child.rotation.y += 0.002;
    });
  });

  return (
    <group ref={group}>
      {items.map((it, idx) => {
        if (it.type === "capsule") {
          return (
            <mesh key={idx} position={it.position} scale={it.scale}>
              <capsuleGeometry args={[0.2, 0.5, 4, 12]} />
              <meshStandardMaterial emissive={it.color} color="#0b1220" emissiveIntensity={0.7} />
            </mesh>
          );
        }
        if (it.type === "ring") {
          return (
            <mesh key={idx} position={it.position} scale={it.scale}>
              <torusGeometry args={[0.4, 0.08, 12, 48]} />
              <meshStandardMaterial emissive={it.color} color="#0b1220" emissiveIntensity={0.7} />
            </mesh>
          );
        }
        return (
          <mesh key={idx} position={it.position} scale={it.scale}>
            <boxGeometry args={[0.3, 0.3, 0.1]} />
            <meshStandardMaterial emissive={it.color} color="#0b1220" emissiveIntensity={0.7} />
          </mesh>
        );
      })}
    </group>
  );
}

function ParallaxRig({ progress }: { progress: number }) {
  // target camera z between 12 (top) and 10.8 (bottom)
  const targetZ = 12 - progress * 1.2;
  const yShift = (progress - 0.5) * 0.6; // slight vertical drift
  const group = useRef<THREE.Group>(null!);
  useFrame(({ camera }) => {
    // ease camera towards target
    camera.position.z += (targetZ - camera.position.z) * 0.06;
    camera.position.y += (yShift - camera.position.y) * 0.04;
    camera.updateProjectionMatrix();
    if (group.current) {
      group.current.position.y += (yShift - group.current.position.y) * 0.05;
      group.current.rotation.z += ((progress - 0.5) * 0.06 - group.current.rotation.z) * 0.04;
    }
  });
  return (
    <group ref={group}>
      <Stars radius={120} depth={80} count={3500} factor={5} saturation={0} fade speed={0.6} />
      <FloatingBits />
    </group>
  );
}

export default function BackgroundFX() {
  const [progress, setProgress] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const compute = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
      setProgress(pct);
      raf.current = null;
    };
    const onScroll = () => {
      if (raf.current == null) {
        raf.current = window.requestAnimationFrame(compute);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
        <color attach="background" args={["#05060a"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <ParallaxRig progress={progress} />
      </Canvas>
    </div>
  );
}
