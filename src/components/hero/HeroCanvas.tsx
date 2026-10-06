"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  label: string;
  radius: number;
  opacity: number;
}

const NODE_LABELS = ["IDEA", "DESIGN", "BUILD", "AI", "SHIP", "DISTRIBUTE", "GROW"];

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    canvas.width = width;
    canvas.height = height;

    // Create nodes
    const nodes: Node[] = NODE_LABELS.map((label, i) => {
      const angle = (i / NODE_LABELS.length) * Math.PI * 2 - Math.PI / 2;
      const r = Math.min(width, height) * 0.32;
      return {
        x: width / 2 + Math.cos(angle) * r,
        y: height / 2 + Math.sin(angle) * r,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        label,
        radius: 4,
        opacity: 0.6 + Math.random() * 0.4,
      };
    });

    // Extra ambient nodes
    const ambientNodes: Node[] = Array.from({ length: 20 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      label: "",
      radius: 2,
      opacity: 0.15 + Math.random() * 0.2,
    }));

    const allNodes = [...nodes, ...ambientNodes];

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.005;

      const { x: mx, y: my } = mouseRef.current;
      const mouseInfluence = mx === 0 && my === 0 ? false : true;

      // Update & draw
      allNodes.forEach((node, i) => {
        // Gentle drift
        node.x += node.vx;
        node.y += node.vy;

        // Mouse repulsion for named nodes
        if (mouseInfluence && i < NODE_LABELS.length) {
          const dx = node.x - mx;
          const dy = node.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const force = (120 - dist) / 120;
            node.vx += (dx / dist) * force * 0.08;
            node.vy += (dy / dist) * force * 0.08;
          }
        }

        // Dampen and boundary
        node.vx *= 0.98;
        node.vy *= 0.98;
        if (node.x < 20 || node.x > width - 20) node.vx *= -1;
        if (node.y < 20 || node.y > height - 20) node.vy *= -1;
        node.x = Math.max(20, Math.min(width - 20, node.x));
        node.y = Math.max(20, Math.min(height - 20, node.y));

        // Pulse opacity
        const pulse = Math.sin(time * 2 + i * 0.8) * 0.1;
        const alpha = node.opacity + pulse;

        // Draw connections
        allNodes.forEach((other, j) => {
          if (j <= i) return;
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = i < NODE_LABELS.length && j < NODE_LABELS.length ? 180 : 100;
          if (dist < maxDist) {
            const lineOpacity = (1 - dist / maxDist) * 0.25 * alpha;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            // Accent connections between labeled nodes
            if (i < NODE_LABELS.length && j < NODE_LABELS.length) {
              ctx.strokeStyle = `rgba(200, 255, 0, ${lineOpacity})`;
            } else {
              ctx.strokeStyle = `rgba(245, 245, 245, ${lineOpacity * 0.4})`;
            }
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });

      // Draw nodes on top
      allNodes.forEach((node, i) => {
        const pulse = Math.sin(time * 2 + i * 0.8) * 0.1;
        const alpha = node.opacity + pulse;

        if (i < NODE_LABELS.length) {
          // Glow
          const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 20);
          gradient.addColorStop(0, `rgba(200, 255, 0, ${alpha * 0.3})`);
          gradient.addColorStop(1, "rgba(200, 255, 0, 0)");
          ctx.beginPath();
          ctx.arc(node.x, node.y, 20, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          // Node dot
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 255, 0, ${alpha})`;
          ctx.fill();

          // Label
          ctx.font = "600 9px 'Geist Mono', monospace";
          ctx.letterSpacing = "0.1em";
          ctx.fillStyle = `rgba(200, 255, 0, ${alpha * 0.9})`;
          ctx.textAlign = "center";
          ctx.fillText(node.label, node.x, node.y - 12);
          ctx.letterSpacing = "0";
        } else {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(245, 245, 245, ${alpha * 0.3})`;
          ctx.fill();
        }
      });

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="hero-canvas"
      className="absolute inset-0 w-full h-full opacity-60"
      aria-hidden="true"
    />
  );
}
