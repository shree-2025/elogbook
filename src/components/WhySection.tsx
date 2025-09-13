"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Html, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useState } from "react";
import { useReveal } from "../hooks/useReveal";

export default function WhySection() {
  const ref = useReveal<HTMLDivElement>({ y: 26, delay: 0.1 });
  return (
    <section className="section" id="why">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold heading-3d text-center">Why eLogbook?</h2>
        <p className="text-center mt-2 text-white/70 max-w-2xl mx-auto">
          Track learning, standardize training and go paperless with a modern digital logbook for medical education.
        </p>

        <div ref={ref} className="mt-10 grid md:grid-cols-2 gap-8 items-center">
          <div className="glass-panel p-4 md:p-6">
            <div className="w-full aspect-video rounded-xl overflow-hidden">
              <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <color attach="background" args={["#0b0d14"]} />
                <ambientLight intensity={0.8} />
                <directionalLight position={[3, 3, 3]} intensity={1.2} />
                <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.6}>
                  <ScreenContent />
                </Float>
                <Html position={[0, 0, 0.06]} transform distanceFactor={6}>
                    <div className="hidden md:block w-[480px] h-[280px] bg-gradient-to-br from-sky-500/20 to-purple-500/20 rounded-lg border border-white/10"></div>
                  </Html>
                <OrbitControls enableZoom={false} enablePan={false} />
              </Canvas>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Track Learning",
                desc: "Log cases, skills and competencies with ease.",
              },
              {
                title: "Monitor Progress",
                desc: "Dashboards for students and mentors.",
              },
              {
                title: "Standardized Training",
                desc: "Align with curriculum outcomes.",
              },
              {
                title: "Paperless Records",
                desc: "Secure, searchable and shareable.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="glass-panel p-5 hover:shadow-[0_0_60px_rgba(55,215,255,0.15)] transition hover:-translate-y-0.5"
              >
                <h3 className="font-semibold text-lg">{c.title}</h3>
                <p className="mt-1 text-sm text-white/70">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ScreenContent() {
  // Check if texture files exist; only then render textured planes to avoid runtime errors
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
      {/* Laptop body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.4, 2.1, 0.08]} />
        <meshStandardMaterial color="#0f1421" emissive="#1b3555" emissiveIntensity={0.25} />
      </mesh>
      {/* Laptop screen (textured if image exists) */}
      {hasLaptop ? (
        <LaptopScreen />
      ) : (
        <mesh position={[0, 0, 0.05]}>
          <planeGeometry args={[3.2, 1.9]} />
          <meshBasicMaterial color="#0b1a2b" />
        </mesh>
      )}
      {/* Phone */}
      <mesh position={[1.9, -0.3, 0.2]} rotation={[0, 0, -0.2]}>
        <boxGeometry args={[0.9, 1.7, 0.1]} />
        <meshStandardMaterial color="#0f1421" emissive="#1b3555" emissiveIntensity={0.3} />
      </mesh>
      {hasMobile ? (
        <MobileScreen />
      ) : (
        <mesh position={[1.9, -0.3, 0.26]} rotation={[0, 0, -0.2]}>
          <planeGeometry args={[0.78, 1.5]} />
          <meshBasicMaterial color="#0b1a2b" />
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
    <mesh position={[0, 0, 0.05]}>
      <planeGeometry args={[3.2, 1.9]} />
      <meshBasicMaterial color="#0b1a2b" map={tex} toneMapped={false} />
    </mesh>
  );
}

function MobileScreen() {
  const tex = useTexture("/product-mobile.png") as THREE.Texture;
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return (
    <mesh position={[1.9, -0.3, 0.26]} rotation={[0, 0, -0.2]}>
      <planeGeometry args={[0.78, 1.5]} />
      <meshBasicMaterial color="#0b1a2b" map={tex} toneMapped={false} />
    </mesh>
  );
}
