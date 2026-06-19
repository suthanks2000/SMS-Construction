'use client';

import { useEffect, useRef } from 'react';

interface ProjectVisualProps {
  id: number;
}

export default function ProjectVisual({ id }: ProjectVisualProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      canvas.width = rect?.width || 800;
      canvas.height = rect?.height || 600;
    };

    // --- VISUAL 1: Oceanfront Estate (Dynamic Wave Canvas) ---
    const drawOceanWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0E0E0E';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw horizontal grid lines (architectural draft look)
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.03)';
      ctx.lineWidth = 0.5;
      for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      const waveCount = 3;
      const colors = [
        'rgba(212, 175, 55, 0.25)', // Gold
        'rgba(232, 200, 107, 0.18)', // Champagne
        'rgba(245, 217, 142, 0.12)'  // Soft Gold
      ];

      for (let w = 0; w < waveCount; w++) {
        ctx.beginPath();
        ctx.strokeStyle = colors[w];
        ctx.lineWidth = 1.5 - w * 0.3;

        const baseHeight = canvas.height * 0.5 + w * 25;
        const frequency = 0.003 - w * 0.0005;
        const amplitude = 30 + w * 10;
        const speed = 0.015 + w * 0.005;

        for (let x = 0; x < canvas.width; x += 5) {
          const y = baseHeight + Math.sin(x * frequency + time * speed) * amplitude + Math.cos(x * 0.001 + time * 0.008) * 15;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
    };

    // --- VISUAL 2: Royal Pavilion (Architectural Dome Circles & Columns) ---
    const drawRoyalArches = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0E0E0E';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Draw rotating geometric concentric circles & arcs
      ctx.lineWidth = 1;
      const arcCount = 6;
      for (let i = 0; i < arcCount; i++) {
        const radius = 60 + i * 35;
        const speedMultiplier = (i % 2 === 0 ? 1 : -1) * (0.01 - i * 0.001);
        const rotationAngle = time * speedMultiplier;

        ctx.strokeStyle = `rgba(212, 175, 55, ${0.35 - i * 0.05})`;

        ctx.beginPath();
        ctx.arc(
          centerX,
          centerY,
          radius,
          rotationAngle,
          rotationAngle + Math.PI * (1.2 + i * 0.1)
        );
        ctx.stroke();

        // Connect ticks
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.02)';
        ctx.stroke();
      }

      // Draw crosshair structural guide lines
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.05)';
      ctx.beginPath();
      ctx.moveTo(centerX - 240, centerY);
      ctx.lineTo(centerX + 240, centerY);
      ctx.moveTo(centerX, centerY - 240);
      ctx.lineTo(centerX, centerY + 240);
      ctx.stroke();

      // Core pulsing mandala
      ctx.beginPath();
      ctx.arc(centerX, centerY, 8 + Math.sin(time * 0.04) * 3, 0, Math.PI * 2);
      ctx.fillStyle = '#D4AF37';
      ctx.fill();
    };

    // --- VISUAL 3: Summit Penthouses (Ascending Vertex Graph) ---
    interface Node {
      x: number;
      y: number;
      vy: number;
      radius: number;
    }
    const nodes: Node[] = [];
    const nodeCount = 35;

    const drawSummitPenthouses = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0E0E0E';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Initialize nodes if empty
      if (nodes.length === 0) {
        for (let i = 0; i < nodeCount; i++) {
          nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vy: -0.4 - Math.random() * 0.5, // Move upward
            radius: Math.random() * 2 + 1
          });
        }
      }

      // Update and draw nodes
      nodes.forEach((node) => {
        node.y += node.vy;
        if (node.y < 0) {
          node.y = canvas.height;
          node.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(232, 200, 107, 0.4)';
        ctx.fill();
      });

      // Draw connecting lines between close nodes
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.08)';
      ctx.lineWidth = 0.6;
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      // Structural wireframe columns projecting upwards
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.04)';
      ctx.lineWidth = 0.5;
      for (let i = 1; i <= 5; i++) {
        const xPos = (canvas.width / 6) * i;
        ctx.beginPath();
        ctx.moveTo(xPos, canvas.height);
        ctx.lineTo(xPos, canvas.height - 150 - Math.sin(time * 0.01 + i) * 60);
        ctx.stroke();
      }
    };

    // --- VISUAL 4: Teakwood Manor (3D Wireframe Structure) ---
    const drawTeakwoodManor = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0E0E0E';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const size = Math.min(canvas.width, canvas.height) * 0.22;

      // Dynamic rotation angles
      const rotX = time * 0.008;
      const rotY = time * 0.006;
      const rotZ = time * 0.003;

      // 3D Cube vertices
      const vertices = [
        [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
        [-1, -1, 1],  [1, -1, 1],  [1, 1, 1],  [-1, 1, 1]
      ];

      // Project vertices to 2D
      const projected = vertices.map(([x, y, z]) => {
        // Rotate X
        let y1 = y * Math.cos(rotX) - z * Math.sin(rotX);
        let z1 = y * Math.sin(rotX) + z * Math.cos(rotX);
        
        // Rotate Y
        let x2 = x * Math.cos(rotY) + z1 * Math.sin(rotY);
        let z2 = -x * Math.sin(rotY) + z1 * Math.cos(rotY);

        // Rotate Z
        let x3 = x2 * Math.cos(rotZ) - y1 * Math.sin(rotZ);
        let y3 = x2 * Math.sin(rotZ) + y1 * Math.cos(rotZ);

        // Projection coordinates
        const scale = 180 / (180 + z2); // perspective scale factor
        return {
          x: cx + x3 * size * scale,
          y: cy + y3 * size * scale
        };
      });

      // Connections edges
      const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0], // back face
        [4, 5], [5, 6], [6, 7], [7, 4], // front face
        [0, 4], [1, 5], [2, 6], [3, 7]  // pillars
      ];

      // Draw edges
      ctx.strokeStyle = 'rgba(232, 200, 107, 0.28)';
      ctx.lineWidth = 1;
      edges.forEach(([u, v]) => {
        ctx.beginPath();
        ctx.moveTo(projected[u].x, projected[u].y);
        ctx.lineTo(projected[v].x, projected[v].y);
        ctx.stroke();
      });

      // Inner wireframe nested structure
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.12)';
      ctx.lineWidth = 0.5;
      edges.forEach(([u, v]) => {
        ctx.beginPath();
        ctx.moveTo(
          cx + (projected[u].x - cx) * 0.6,
          cy + (projected[u].y - cy) * 0.6
        );
        ctx.lineTo(
          cx + (projected[v].x - cx) * 0.6,
          cy + (projected[v].y - cy) * 0.6
        );
        ctx.stroke();
      });

      // Draw vertex rings
      projected.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = '#D4AF37';
        ctx.fill();
      });
    };

    // --- VISUAL 5: Aura Grand Crest (Pulsing Golden Concentric Waves) ---
    const drawAuraCrest = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0E0E0E';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Draw radial gradient background aura
      const radialGrad = ctx.createRadialGradient(cx, cy, 5, cx, cy, 320);
      radialGrad.addColorStop(0, 'rgba(212, 175, 55, 0.08)');
      radialGrad.addColorStop(0.5, 'rgba(232, 200, 107, 0.02)');
      radialGrad.addColorStop(1, 'rgba(14, 14, 14, 0)');
      ctx.fillStyle = radialGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const circleCount = 5;
      for (let i = 0; i < circleCount; i++) {
        // Pulse offset
        const scale = ((time * 0.18 + i * 50) % 250) / 250;
        const opacity = (1 - scale) * 0.35;
        const radius = scale * 260;

        ctx.strokeStyle = `rgba(212, 175, 55, ${opacity})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.stroke();

        // Tiny marker nodes on the rings
        const nodeAngle = time * 0.005 + i * (Math.PI / 2);
        const nx = cx + Math.cos(nodeAngle) * radius;
        const ny = cy + Math.sin(nodeAngle) * radius;
        
        ctx.beginPath();
        ctx.arc(nx, ny, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 217, 142, ${opacity})`;
        ctx.fill();
      }
    };

    // --- Core Animation Loop ---
    const renderLoop = () => {
      time += 1;
      
      switch (id) {
        case 1:
          drawOceanWaves();
          break;
        case 2:
          drawRoyalArches();
          break;
        case 3:
          drawSummitPenthouses();
          break;
        case 4:
          drawTeakwoodManor();
          break;
        case 5:
          drawAuraCrest();
          break;
        default:
          drawOceanWaves();
      }
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    renderLoop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [id]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full select-none overflow-hidden bg-[#0E0E0E]">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
