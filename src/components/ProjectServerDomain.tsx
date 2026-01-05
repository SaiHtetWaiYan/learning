import { useState, useEffect, useCallback } from 'react';

interface Particle {
  id: number;
  progress: number;
  pathIndex: number;
  speed: number;
}

interface CardData {
  icon: string;
  title: string;
  subtitle: string;
  color: string;
  colorRgb: string;
  lightColor: string;
  description: string;
  items: { emoji: string; label: string; detail: string }[];
  analogy: { emoji: string; text: string };
}

const cards: CardData[] = [
  {
    icon: '📁',
    title: 'Project',
    subtitle: 'Your Codebase',
    color: '#00FF94',
    colorRgb: '0, 255, 148',
    lightColor: '#00C974',
    description: 'All files, code, and assets that make up your application',
    items: [
      { emoji: '📄', label: 'Source Code', detail: 'JS, Python, etc.' },
      { emoji: '⚙️', label: 'Config Files', detail: 'package.json, .env' },
      { emoji: '🖼️', label: 'Assets', detail: 'Images, fonts, CSS' },
      { emoji: '📦', label: 'Dependencies', detail: 'npm packages' },
    ],
    analogy: { emoji: '🏠', text: 'The house you built' },
  },
  {
    icon: '🖥️',
    title: 'Server',
    subtitle: 'Hosting Machine',
    color: '#FF9500',
    colorRgb: '255, 149, 0',
    lightColor: '#E68600',
    description: 'Computer that runs your project and serves it to users',
    items: [
      { emoji: '🌐', label: 'Web Server', detail: 'Nginx, Apache' },
      { emoji: '⚡', label: 'App Server', detail: 'Node.js, Django' },
      { emoji: '🗄️', label: 'Database', detail: 'PostgreSQL, MongoDB' },
      { emoji: '☁️', label: 'Cloud', detail: 'AWS, Vercel, GCP' },
    ],
    analogy: { emoji: '🏗️', text: 'The land it stands on' },
  },
  {
    icon: '🔗',
    title: 'Domain',
    subtitle: 'Web Address',
    color: '#BF5AF2',
    colorRgb: '191, 90, 242',
    lightColor: '#9B3DD8',
    description: 'Human-readable address that points to your server',
    items: [
      { emoji: '🏷️', label: 'Domain Name', detail: 'myapp.com' },
      { emoji: '🌍', label: 'TLD', detail: '.com, .io, .dev' },
      { emoji: '📍', label: 'DNS', detail: 'Maps to IP' },
      { emoji: '🔒', label: 'SSL', detail: 'https:// secure' },
    ],
    analogy: { emoji: '📬', text: 'The street address' },
  },
];

const connections = [
  { label: 'Deploy', description: 'Upload code to server' },
  { label: 'DNS Routing', description: 'Domain points to server IP' },
];

function ProjectServerDomain() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const updateParticles = useCallback(() => {
    setParticles((prev) => {
      const updated = prev
        .map((p) => ({ ...p, progress: p.progress + p.speed }))
        .filter((p) => p.progress < 100);

      while (updated.length < 6) {
        updated.push({
          id: Date.now() + Math.random(),
          progress: 0,
          pathIndex: Math.floor(Math.random() * 2),
          speed: 1 + Math.random() * 0.5,
        });
      }

      return updated;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(updateParticles, 40);
    return () => clearInterval(interval);
  }, [updateParticles]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black relative overflow-hidden font-['Inter',sans-serif]">
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />

      {/* Grid Background with Pulse */}
      <div
        className="absolute inset-0 opacity-100 dark:opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      <div
        className="absolute inset-0 opacity-0 dark:opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridPulse 4s ease-in-out infinite',
        }}
      />

      {/* Floating Orbs */}
      <div
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-20 dark:opacity-30"
        style={{
          background: 'radial-gradient(circle, #00FF94 0%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <div
        className="absolute top-1/3 left-2/5 w-80 h-80 rounded-full blur-3xl opacity-15 dark:opacity-25"
        style={{
          background: 'radial-gradient(circle, #FF9500 0%, transparent 70%)',
          animation: 'float 10s ease-in-out infinite reverse',
        }}
      />
      <div
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-20 dark:opacity-30"
        style={{
          background: 'radial-gradient(circle, #BF5AF2 0%, transparent 70%)',
          animation: 'float 12s ease-in-out infinite',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-12 md:py-16">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-gray-100 dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.08] text-[11px] font-['JetBrains_Mono',monospace] tracking-[4px] uppercase text-gray-500 dark:text-gray-400 mb-6">
            Web Development Fundamentals
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white tracking-[-3px] mb-4 leading-tight">
            Project <span className="text-gray-300 dark:text-gray-600">→</span> Server{' '}
            <span className="text-gray-300 dark:text-gray-600">→</span> Domain
          </h1>

          <p className="text-base text-gray-500 dark:text-gray-500 max-w-md mx-auto">
            Understanding the three pillars of web deployment
          </p>
        </div>

        {/* Cards Row */}
        <div className="flex justify-center items-stretch gap-0 flex-wrap">
          {cards.map((card, index) => (
            <div key={card.title} className="flex items-center flex-wrap justify-center">
              {/* Card */}
              <div
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="w-[320px] rounded-2xl backdrop-blur-xl relative overflow-hidden cursor-pointer transition-all duration-400"
                style={{
                  background:
                    hoveredCard === index
                      ? `linear-gradient(180deg, rgba(${card.colorRgb}, 0.12) 0%, rgba(${card.colorRgb}, 0.04) 100%)`
                      : undefined,
                  border: `1px solid ${hoveredCard === index ? `rgba(${card.colorRgb}, 0.4)` : ''}`,
                  transform:
                    hoveredCard === index
                      ? 'translateY(-8px) scale(1.02)'
                      : 'translateY(0) scale(1)',
                  boxShadow:
                    hoveredCard === index
                      ? `0 0 60px rgba(${card.colorRgb}, 0.2)`
                      : 'none',
                }}
              >
                <div
                  className={`absolute inset-0 rounded-2xl transition-colors ${
                    hoveredCard !== index
                      ? 'bg-white/80 dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.06]'
                      : ''
                  }`}
                  style={{ zIndex: -1 }}
                />

                {/* Shine Effect */}
                {hoveredCard === index && (
                  <div
                    className="absolute top-0 left-[-100%] w-1/2 h-full pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                      animation: 'shine 1s ease-out',
                    }}
                  />
                )}

                {/* Top Accent Line */}
                <div
                  className="h-[3px] rounded-t-2xl"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${card.color}, transparent)`,
                  }}
                />

                <div className="p-7">
                  {/* Icon */}
                  <div
                    className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center text-4xl mb-5 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(135deg, rgba(${card.colorRgb}, 0.2), rgba(${card.colorRgb}, 0.05))`,
                      border: `1px solid rgba(${card.colorRgb}, 0.3)`,
                      transform:
                        hoveredCard === index
                          ? 'rotate(-5deg) scale(1.1)'
                          : 'rotate(0) scale(1)',
                    }}
                  >
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-[-1px] mb-1.5">
                    {card.title}
                  </h2>

                  {/* Subtitle */}
                  <p
                    className="text-[13px] font-['JetBrains_Mono',monospace] mb-3"
                    style={{ color: card.color }}
                  >
                    {card.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Items Grid */}
                  <div className="grid grid-cols-2 gap-2.5 mb-5">
                    {card.items.map((item, itemIndex) => (
                      <div
                        key={item.label}
                        className="p-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/[0.06] transition-transform duration-200"
                        style={{
                          transitionDelay: `${itemIndex * 50}ms`,
                          transform:
                            hoveredCard === index
                              ? 'translateX(4px)'
                              : 'translateX(0)',
                        }}
                      >
                        <div className="text-base mb-1">{item.emoji}</div>
                        <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-0.5">
                          {item.label}
                        </div>
                        <div className="text-[10px] font-['JetBrains_Mono',monospace] text-gray-400 dark:text-gray-500">
                          {item.detail}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Analogy Box */}
                  <div className="p-3.5 rounded-xl border border-dashed border-gray-200 dark:border-white/[0.15] bg-gray-50/50 dark:bg-white/[0.02] text-center">
                    <span className="text-lg mr-2">{card.analogy.emoji}</span>
                    <span className="text-[13px] text-gray-500 dark:text-gray-400 italic">
                      {card.analogy.text}
                    </span>
                  </div>
                </div>
              </div>

              {/* Connection Arrow (except after last card) */}
              {index < cards.length - 1 && (
                <div className="w-[100px] h-[60px] relative flex-col items-center justify-center hidden lg:flex">
                  {/* SVG Arrow */}
                  <svg
                    width="100"
                    height="40"
                    viewBox="0 0 100 40"
                    style={{ overflow: 'visible' }}
                  >
                    <defs>
                      <linearGradient
                        id={`connGrad-${index}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor={cards[index].color} />
                        <stop offset="100%" stopColor={cards[index + 1].color} />
                      </linearGradient>
                      <marker
                        id={`arrow-${index}`}
                        markerWidth="8"
                        markerHeight="8"
                        refX="6"
                        refY="4"
                        orient="auto"
                      >
                        <path
                          d="M0,0 L8,4 L0,8 Z"
                          fill={cards[index + 1].color}
                        />
                      </marker>
                      <filter id={`glow-${index}`}>
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Dashed Line */}
                    <path
                      d="M 0 20 L 85 20"
                      fill="none"
                      stroke={`url(#connGrad-${index})`}
                      strokeWidth="2"
                      strokeDasharray="6 4"
                      markerEnd={`url(#arrow-${index})`}
                      filter={`url(#glow-${index})`}
                      style={{
                        animation: 'flowRight 0.6s linear infinite',
                      }}
                    />

                    {/* Animated Particles */}
                    {particles
                      .filter((p) => p.pathIndex === index)
                      .map((particle) => {
                        const x = (particle.progress / 100) * 85;
                        const opacity = Math.min(
                          particle.progress / 20,
                          (100 - particle.progress) / 20,
                          1
                        );
                        const colorProgress = particle.progress / 100;
                        const r = Math.round(
                          parseInt(cards[index].color.slice(1, 3), 16) *
                            (1 - colorProgress) +
                            parseInt(cards[index + 1].color.slice(1, 3), 16) *
                              colorProgress
                        );
                        const g = Math.round(
                          parseInt(cards[index].color.slice(3, 5), 16) *
                            (1 - colorProgress) +
                            parseInt(cards[index + 1].color.slice(3, 5), 16) *
                              colorProgress
                        );
                        const b = Math.round(
                          parseInt(cards[index].color.slice(5, 7), 16) *
                            (1 - colorProgress) +
                            parseInt(cards[index + 1].color.slice(5, 7), 16) *
                              colorProgress
                        );
                        return (
                          <circle
                            key={particle.id}
                            cx={x}
                            cy={20}
                            r={4}
                            fill={`rgb(${r},${g},${b})`}
                            opacity={opacity}
                            filter={`url(#glow-${index})`}
                          />
                        );
                      })}
                  </svg>

                  {/* Label Box */}
                  <div className="bg-white/90 dark:bg-black/80 backdrop-blur-lg px-3 py-2 rounded-lg border border-gray-200 dark:border-white/10 text-center">
                    <div className="text-xs font-semibold text-gray-700 dark:text-white mb-0.5">
                      {connections[index].label}
                    </div>
                    <div className="text-[10px] font-['JetBrains_Mono',monospace] text-gray-400 dark:text-gray-500">
                      {connections[index].description}
                    </div>
                  </div>
                </div>
              )}

              {/* Mobile Connection Arrow */}
              {index < cards.length - 1 && (
                <div className="flex lg:hidden w-full justify-center py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-lg"
                      style={{ background: cards[index].color }}
                    >
                      ↓
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-700 dark:text-white">
                        {connections[index].label}
                      </div>
                      <div className="text-xs text-gray-400 dark:text-gray-500 font-['JetBrains_Mono',monospace]">
                        {connections[index].description}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Flow Summary Box */}
        <div className="mt-16 md:mt-20 p-6 md:p-8 rounded-2xl bg-white/80 dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.06] backdrop-blur-xl">
          <h3 className="text-xs font-['JetBrains_Mono',monospace] tracking-[4px] uppercase text-gray-400 dark:text-gray-500 mb-6 text-center">
            How It All Connects
          </h3>

          <div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap">
            {/* Step 1 */}
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                style={{
                  background: 'rgba(0, 255, 148, 0.2)',
                  border: '2px solid #00FF94',
                  color: '#00FF94',
                }}
              >
                1
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Build your project locally
              </span>
            </div>

            <span className="text-gray-300 dark:text-gray-600 text-xl">→</span>

            {/* Step 2 */}
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                style={{
                  background: 'rgba(255, 149, 0, 0.2)',
                  border: '2px solid #FF9500',
                  color: '#FF9500',
                }}
              >
                2
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Deploy to a server
              </span>
            </div>

            <span className="text-gray-300 dark:text-gray-600 text-xl">→</span>

            {/* Step 3 */}
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                style={{
                  background: 'rgba(191, 90, 242, 0.2)',
                  border: '2px solid #BF5AF2',
                  color: '#BF5AF2',
                }}
              >
                3
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Connect a domain
              </span>
            </div>

            <span className="text-gray-300 dark:text-gray-600 text-xl">→</span>

            {/* Final */}
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-base"
                style={{ background: '#00FF94' }}
              >
                ✓
              </div>
              <span className="text-sm font-semibold" style={{ color: '#00C974' }}>
                Live on the web!
              </span>
            </div>
          </div>
        </div>

        {/* User Journey Box */}
        <div className="mt-6 md:mt-8 p-6 md:p-8 rounded-2xl bg-white/80 dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.06] backdrop-blur-xl">
          <h3 className="text-xs font-['JetBrains_Mono',monospace] tracking-[4px] uppercase text-gray-400 dark:text-gray-500 mb-6 text-center">
            The Request Journey
          </h3>

          <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap">
            <span className="text-2xl">👤</span>
            <span className="text-gray-500 dark:text-gray-500 text-sm">User types</span>
            <span className="text-gray-300 dark:text-gray-600">→</span>

            <code
              className="px-4 py-2 rounded-lg font-['JetBrains_Mono',monospace] text-sm"
              style={{
                background: 'rgba(191, 90, 242, 0.15)',
                border: '1px solid rgba(191, 90, 242, 0.3)',
                color: '#BF5AF2',
              }}
            >
              myapp.com
            </code>

            <span className="text-gray-300 dark:text-gray-600">→</span>
            <span className="text-gray-500 dark:text-gray-500 text-sm">DNS resolves to</span>
            <span className="text-gray-300 dark:text-gray-600">→</span>

            <code
              className="px-4 py-2 rounded-lg font-['JetBrains_Mono',monospace] text-sm"
              style={{
                background: 'rgba(255, 149, 0, 0.15)',
                border: '1px solid rgba(255, 149, 0, 0.3)',
                color: '#FF9500',
              }}
            >
              192.168.1.1
            </code>

            <span className="text-gray-300 dark:text-gray-600">→</span>
            <span className="text-gray-500 dark:text-gray-500 text-sm">Server returns</span>
            <span className="text-gray-300 dark:text-gray-600">→</span>

            <code
              className="px-4 py-2 rounded-lg font-['JetBrains_Mono',monospace] text-sm"
              style={{
                background: 'rgba(0, 255, 148, 0.15)',
                border: '1px solid rgba(0, 255, 148, 0.3)',
                color: '#00C974',
              }}
            >
              index.html
            </code>

            <span className="text-gray-300 dark:text-gray-600">→</span>
            <span className="text-2xl">🎉</span>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style>{`
        @keyframes gridPulse {
          0%, 100% { opacity: 0.03; }
          50% { opacity: 0.06; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes flowRight {
          0% { stroke-dashoffset: 24; }
          100% { stroke-dashoffset: 0; }
        }

        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
      `}</style>
    </div>
  );
}

export default ProjectServerDomain;
