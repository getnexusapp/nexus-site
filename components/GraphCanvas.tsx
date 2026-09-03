'use client';

import { useEffect, useRef } from 'react';

// A quiet, hand-rolled stand-in for the force-directed graph inside
// Nexus itself (see GraphView.tsx in the product: notes as nodes,
// [[wiki-links]] as edges, node size driven by link count). This isn't
// meant to be a literal recreation — just an honest gesture at the
// same idea, at rest more than in motion, running on a plain canvas
// so the hero has no dependency weight.

type Node = {
  label: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: 'amber' | 'slate' | 'ink';
};

const LABELS = [
  'Reading List',
  'Project Brief',
  'Sources',
  'Meeting Notes',
  'Ideas',
  'Research',
  'Drafts',
  'Journal',
  'Glossary',
  'Contacts',
  'Roadmap',
  'Archive',
];

const EDGES: [number, number][] = [
  [0, 2],
  [0, 4],
  [1, 4],
  [1, 5],
  [2, 5],
  [2, 6],
  [3, 4],
  [3, 9],
  [4, 6],
  [4, 7],
  [5, 6],
  [6, 8],
  [7, 8],
  [9, 10],
  [10, 11],
  [4, 11],
];

const COLORS: Record<Node['color'], string> = {
  amber: '#e2a75e',
  slate: '#7fb4d9',
  ink: '#6b6152',
};

function buildNodes(width: number, height: number): Node[] {
  const degree = new Array(LABELS.length).fill(0);
  for (const [a, b] of EDGES) {
    degree[a] += 1;
    degree[b] += 1;
  }

  return LABELS.map((label, i) => {
    const angle = (i / LABELS.length) * Math.PI * 2;
    const radius = Math.min(width, height) * (0.22 + (i % 3) * 0.09);
    return {
      label,
      x: width / 2 + Math.cos(angle) * radius + (Math.random() - 0.5) * 30,
      y: height / 2 + Math.sin(angle) * radius + (Math.random() - 0.5) * 30,
      vx: 0,
      vy: 0,
      r: 4 + Math.sqrt(degree[i]) * 3.1,
      color: i % 5 === 0 ? 'amber' : i % 3 === 0 ? 'slate' : 'ink',
    };
  });
}

export default function GraphCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    let width = wrap.clientWidth;
    let height = wrap.clientHeight;
    let nodes = buildNodes(width, height);
    let frame = 0;
    let raf = 0;
    let mouseX = width / 2;
    let mouseY = height / 2;
    let hasMouse = false;

    function resize() {
      if (!canvas || !wrap) return;
      width = wrap.clientWidth;
      height = wrap.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes = buildNodes(width, height);
    }

    function step() {
      // Mild center gravity + edge springs + gentle mutual repulsion —
      // just enough to feel alive without needing a physics library.
      for (const [a, b] of EDGES) {
        const na = nodes[a];
        const nb = nodes[b];
        const dx = nb.x - na.x;
        const dy = nb.y - na.y;
        const dist = Math.hypot(dx, dy) || 1;
        const target = 130;
        const force = (dist - target) * 0.0018;
        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;
        na.vx += fx;
        na.vy += fy;
        nb.vx -= fx;
        nb.vy -= fy;
      }

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.vx += (width / 2 - n.x) * 0.00025;
        n.vy += (height / 2 - n.y) * 0.00025;

        if (hasMouse) {
          const dx = n.x - mouseX;
          const dy = n.y - mouseY;
          const d2 = dx * dx + dy * dy;
          if (d2 < 26000) {
            const d = Math.sqrt(d2) || 1;
            n.vx += (dx / d) * 0.35;
            n.vy += (dy / d) * 0.35;
          }
        }

        n.vx *= 0.94;
        n.vy *= 0.94;
        n.x += n.vx;
        n.y += n.vy;
      }
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      ctx.lineWidth = 1;
      for (const [a, b] of EDGES) {
        const na = nodes[a];
        const nb = nodes[b];
        ctx.strokeStyle = 'rgba(243, 237, 227, 0.14)';
        ctx.beginPath();
        ctx.moveTo(na.x, na.y);
        ctx.lineTo(nb.x, nb.y);
        ctx.stroke();
      }

      ctx.font = "11px 'JetBrains Mono', monospace";
      ctx.textAlign = 'center';

      for (const n of nodes) {
        ctx.beginPath();
        ctx.fillStyle = COLORS[n.color];
        ctx.globalAlpha = n.color === 'ink' ? 0.55 : 0.9;
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;

        ctx.fillStyle = 'rgba(243, 237, 227, 0.65)';
        ctx.fillText(n.label, n.x, n.y - n.r - 8);
      }
    }

    function loop() {
      frame += 1;
      step();
      draw();
      raf = requestAnimationFrame(loop);
    }

    function handlePointerMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      hasMouse = true;
    }

    function handlePointerLeave() {
      hasMouse = false;
    }

    resize();
    draw();

    const observer = new ResizeObserver(resize);
    observer.observe(wrap);

    if (!reduceMotion) {
      raf = requestAnimationFrame(loop);
      wrap.addEventListener('pointermove', handlePointerMove);
      wrap.addEventListener('pointerleave', handlePointerLeave);
    }

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      wrap.removeEventListener('pointermove', handlePointerMove);
      wrap.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative h-[340px] w-full overflow-hidden rounded-2xl border border-border bg-surface/60 sm:h-[420px] lg:h-full lg:min-h-[460px]"
      role="img"
      aria-label="An animated diagram of notes connected by links, representing Nexus's knowledge graph"
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="pointer-events-none absolute bottom-4 left-4 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
        GraphView — Live
      </div>
    </div>
  );
}
