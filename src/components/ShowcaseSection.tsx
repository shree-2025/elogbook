"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useReveal } from "../hooks/useReveal";
import { useEffect, useState } from "react";

export default function ShowcaseSection() {
  const ref = useReveal<HTMLDivElement>({ y: 28, delay: 0.05 });
  return (
    <section className="section" id="showcase">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold heading-3d text-center">Experience the Interface</h2>
        <p className="text-center mt-2 text-white/70 max-w-2xl mx-auto">
          Floating 3D mockups of the eLogbook dashboard and mobile app.
        </p>

        <div ref={ref} className="mt-10 glass-panel p-4 md:p-6">
          <div className="w-full aspect-[16/9] rounded-xl overflow-hidden">
            <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
              <color attach="background" args={["#0b0d14"]} />
              <ambientLight intensity={0.8} />
              <directionalLight position={[4, 4, 4]} intensity={1.2} />

              <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.7}>
                <ScreenShowcase />
              </Float>

              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScreenShowcase() {
  const [hasLaptop, setHasLaptop] = useState(false);
  const [hasMobile, setHasMobile] = useState(false);
  useEffect(() => {
    async function check() {
      try {
        const r1 = await fetch("/product-laptop.png", { method: "HEAD" });
        setHasLaptop(r1.ok);
      } catch {}
      try {
        const r2 = await fetch("/product-mobile.png", { method: "HEAD" });
        setHasMobile(r2.ok);
      } catch {}
    }
    check();
  }, []);
  return (
    <group>
      {/* Laptop Base */}
      <mesh position={[0, -0.8, 0]} rotation={[Math.PI * -0.04, 0, 0]}>
        <boxGeometry args={[4.2, 0.15, 2.6]} />
        <meshStandardMaterial color="#0e1422" emissive="#16365f" emissiveIntensity={0.25} />
      </mesh>
      {/* Laptop Screen */}
      <mesh position={[0, 0.5, -1.1]} rotation={[Math.PI * 0.06, 0, 0]}>
        <boxGeometry args={[4.2, 2.6, 0.1]} />
        <meshStandardMaterial color="#0e1422" emissive="#16365f" emissiveIntensity={0.25} />
      </mesh>
      {hasLaptop ? (
        <LaptopScreen />
      ) : (
        <mesh position={[0, 0.5, -1.04]} rotation={[Math.PI * 0.06, 0, 0]}>
          <planeGeometry args={[3.9, 2.3]} />
          <meshBasicMaterial color="#0a1a2b" />
        </mesh>
      )}

      {/* Phone */}
      <mesh position={[2.1, -0.1, 0.5]} rotation={[0.02, -0.25, -0.15]}>
        <boxGeometry args={[0.95, 1.9, 0.12]} />
        <meshStandardMaterial color="#0e1422" emissive="#16365f" emissiveIntensity={0.3} />
      </mesh>
      {hasMobile ? (
        <MobileScreen />
      ) : (
        <mesh position={[2.1, -0.1, 0.58]} rotation={[0.02, -0.25, -0.15]}>
          <planeGeometry args={[0.82, 1.7]} />
          <meshBasicMaterial color="#0a1a2b" />
        </mesh>
      )}
    </group>
  );
}

function LaptopScreen() {
  const tex = useTexture("/product-laptop.png") as THREE.Texture;
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return (
    <mesh position={[0, 0.5, -1.04]} rotation={[Math.PI * 0.06, 0, 0]}>
      <planeGeometry args={[3.9, 2.3]} />
      <meshBasicMaterial color="#0a1a2b" map={tex} toneMapped={false} />
    </mesh>
  );
}

function MobileScreen() {
  const tex = useTexture("/product-mobile.png") as THREE.Texture;
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return (
    <mesh position={[2.1, -0.1, 0.58]} rotation={[0.02, -0.25, -0.15]}>
      <planeGeometry args={[0.82, 1.7]} />
      <meshBasicMaterial color="#0a1a2b" map={tex} toneMapped={false} />
    </mesh>
  );
}
