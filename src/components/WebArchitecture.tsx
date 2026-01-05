import { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

interface Particle {
  id: number;
  progress: number;
  pathIndex: number;
  speed: number;
}

interface LayerData {
  icon: string;
  title: string;
  subtitle: string;
  color: string;
  colorRgb: string;
  layer: number;
  components: string[];
}

const layers: LayerData[] = [
  {
    icon: '◈',
    title: 'Front-end',
    subtitle: 'User Interface Layer',
    color: '#00D4FF',
    colorRgb: '0, 212, 255',
    layer: 1,
    components: ['Web Browser', 'UI Framework', 'State Management', 'API Client'],
  },
  {
    icon: '⬡',
    title: 'Middleware',
    subtitle: 'Processing Layer',
    color: '#FF6B35',
    colorRgb: '255, 107, 53',
    layer: 2,
    components: ['Load Balancer', 'API Gateway', 'Authentication', 'Cache Layer'],
  },
  {
    icon: '◆',
    title: 'Back-end',
    subtitle: 'Data & Logic Layer',
    color: '#7B2FF7',
    colorRgb: '123, 47, 247',
    layer: 3,
    components: ['App Server', 'Business Logic', 'Database', 'File Storage'],
  },
];

const externalServices = [
  { emoji: '🌐', name: 'CDN' },
  { emoji: '🔌', name: 'Third-party APIs' },
  { emoji: '📧', name: 'Email Service' },
  { emoji: '💳', name: 'Payment Gateway' },
  { emoji: '📊', name: 'Analytics' },
];

function WebArchitecture() {
  const { t } = useLanguage();
  const [particles, setParticles] = useState<Particle[]>([]);
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) => {
        const updated = prev
          .map((p) => ({ ...p, progress: p.progress + p.speed }))
          .filter((p) => p.progress < 100);

        if (updated.length < 8) {
          updated.push({
            id: Date.now() + Math.random(),
            progress: 0,
            pathIndex: Math.floor(Math.random() * 4),
            speed: 0.5 + Math.random() * 1.5,
          });
        }

        return updated;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0A0A0F] relative overflow-hidden font-['Space_Grotesk',sans-serif]">
      {/* Background Effects - Dark Mode Only */}
      <div
        className="absolute inset-0 opacity-0 dark:opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite',
        }}
      />

      {/* Floating Orbs */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20 dark:opacity-30"
        style={{
          background: 'radial-gradient(circle, #00D4FF 0%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 dark:opacity-30"
        style={{
          background: 'radial-gradient(circle, #7B2FF7 0%, transparent 70%)',
          animation: 'float 10s ease-in-out infinite reverse',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 font-['JetBrains_Mono',monospace]">
            {t('systemArchitecture') || 'System Architecture'}
          </span>
          <h1 className="text-5xl font-bold mt-2 bg-gradient-to-b from-gray-800 to-gray-500 dark:from-white dark:to-gray-500 bg-clip-text text-transparent">
            {t('webApplication') || 'Web Application'}
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 mt-2 font-light">
            {t('threeLayerArch') || 'Three-Tier Architecture'}
          </p>
        </div>

        {/* Layers */}
        <div className="space-y-0">
          {layers.map((layer, index) => (
            <div key={layer.title}>
              {/* Layer Card */}
              <div
                className={`relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer bg-white/80 dark:bg-white/[0.02] backdrop-blur-lg ${hoveredLayer !== index ? 'border-gray-200 dark:border-white/10' : ''
                  }`}
                style={{
                  borderColor:
                    hoveredLayer === index ? layer.color : undefined,
                  boxShadow:
                    hoveredLayer === index
                      ? `0 0 40px rgba(${layer.colorRgb}, 0.3)`
                      : 'none',
                  transform: hoveredLayer === index ? 'scale(1.02)' : 'scale(1)',
                }}
                onMouseEnter={() => setHoveredLayer(index)}
                onMouseLeave={() => setHoveredLayer(null)}
              >
                {/* Shimmer Effect */}
                {hoveredLayer === index && (
                  <div
                    className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
                    style={{
                      background: `linear-gradient(90deg, transparent, rgba(${layer.colorRgb}, 0.1), transparent)`,
                      animation: 'shimmer 2s infinite',
                    }}
                  />
                )}

                <div className="flex items-start gap-6">
                  {/* Icon Badge */}
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl transition-transform duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${layer.color}33, ${layer.color}11)`,
                      border: `1px solid ${layer.color}44`,
                      transform: hoveredLayer === index ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    <span
                      style={{
                        color: layer.color,
                        transform: hoveredLayer === index ? 'rotate(-45deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s',
                      }}
                    >
                      {layer.icon}
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{layer.title}</h2>
                      {/* Layer Badge */}
                      <span
                        className="px-3 py-1 rounded-full text-xs font-['JetBrains_Mono',monospace] flex items-center gap-2"
                        style={{
                          background: `${layer.color}22`,
                          color: layer.color,
                          border: `1px solid ${layer.color}44`,
                        }}
                      >
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{
                            background: layer.color,
                            animation: 'pulse 2s infinite',
                          }}
                        />
                        LAYER {layer.layer}
                      </span>
                    </div>
                    <p
                      className="text-sm font-['JetBrains_Mono',monospace] mb-4"
                      style={{ color: layer.color }}
                    >
                      {layer.subtitle}
                    </p>

                    {/* Component Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {layer.components.map((comp, compIndex) => (
                        <div
                          key={comp}
                          className="px-4 py-3 rounded-lg text-center text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] transition-all duration-200"
                          style={{
                            transform:
                              hoveredLayer === index
                                ? `translateY(-${4 + compIndex * 2}px)`
                                : 'translateY(0)',
                            transitionDelay: `${compIndex * 50}ms`,
                          }}
                        >
                          {comp}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Connection Section */}
              {index < layers.length - 1 && (
                <div className="relative h-24 flex items-center justify-center">
                  {/* SVG Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 100">
                    <defs>
                      <linearGradient
                        id={`gradient-${index}`}
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor={layers[index].color} />
                        <stop offset="100%" stopColor={layers[index + 1].color} />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Request Path (Left) */}
                    <path
                      d="M 250 10 L 250 90"
                      fill="none"
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="2"
                      strokeDasharray="8 4"
                      filter="url(#glow)"
                      style={{
                        animation: 'dataFlow 1.5s linear infinite',
                      }}
                    />
                    <polygon
                      points="250,95 245,85 255,85"
                      fill={layers[index + 1].color}
                    />

                    {/* Response Path (Right) */}
                    <path
                      d="M 550 90 L 550 10"
                      fill="none"
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="2"
                      strokeDasharray="8 4"
                      opacity="0.6"
                      filter="url(#glow)"
                      style={{
                        animation: 'dataFlow 1.5s linear infinite reverse',
                      }}
                    />
                    <polygon
                      points="550,5 545,15 555,15"
                      fill={layers[index].color}
                      opacity="0.6"
                    />

                    {/* Animated Particles */}
                    {particles
                      .filter((p) => Math.floor(p.pathIndex / 2) === index)
                      .map((particle) => {
                        const isLeft = particle.pathIndex % 2 === 0;
                        const x = isLeft ? 250 : 550;
                        const y = isLeft
                          ? 10 + (particle.progress / 100) * 80
                          : 90 - (particle.progress / 100) * 80;
                        const opacity = Math.min(
                          particle.progress / 20,
                          (100 - particle.progress) / 20,
                          1
                        );
                        return (
                          <circle
                            key={particle.id}
                            cx={x}
                            cy={y}
                            r="4"
                            fill={isLeft ? layers[index].color : layers[index + 1].color}
                            opacity={opacity}
                            filter="url(#glow)"
                          />
                        );
                      })}
                  </svg>

                  {/* Direction Labels */}
                  <div
                    className="absolute left-20 top-2 text-xs font-['JetBrains_Mono',monospace]"
                    style={{ color: layers[index].color }}
                  >
                    Request ↓
                  </div>
                  <div
                    className="absolute right-20 bottom-2 text-xs font-['JetBrains_Mono',monospace]"
                    style={{ color: layers[index + 1].color }}
                  >
                    Response ↑
                  </div>

                  {/* Center Label */}
                  <div className="relative z-10 px-6 py-2 rounded-full bg-white/90 dark:bg-[#0A0A0F]/80 border border-gray-200 dark:border-white/10 backdrop-blur-sm">
                    <div className="text-center">
                      <span className="text-gray-800 dark:text-white text-sm">
                        {index === 0 ? 'HTTP/HTTPS' : 'Internal Protocol'}
                      </span>
                      <span className="mx-2 text-gray-500">⇅</span>
                      <span className="text-gray-500 dark:text-gray-400 text-xs font-['JetBrains_Mono',monospace]">
                        {index === 0 ? 'REST API / GraphQL' : 'gRPC / Message Queue'}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Data Flow Legend */}
        <div className="mt-12 flex justify-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-[#00D4FF]">↓</span>
            <span className="text-gray-600 dark:text-gray-400 text-sm">{t('requestFlow') || 'Request Flow'}</span>
            <span className="text-gray-500 text-xs">Client to Server</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#7B2FF7]">↑</span>
            <span className="text-gray-600 dark:text-gray-400 text-sm">{t('responseFlow') || 'Response Flow'}</span>
            <span className="text-gray-500 text-xs">Server to Client</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#FF6B35]">⇅</span>
            <span className="text-gray-600 dark:text-gray-400 text-sm">{t('bidirectional') || 'Bidirectional'}</span>
            <span className="text-gray-500 text-xs">Real-time Sync</span>
          </div>
        </div>

        {/* External Services */}
        <div className="mt-12 p-6 rounded-2xl border border-dashed border-gray-300 dark:border-white/20 relative">
          <span className="absolute -top-3 left-6 px-3 bg-gray-50 dark:bg-[#0A0A0F] text-gray-500 text-xs font-['JetBrains_Mono',monospace]">
            {t('externalServices') || 'External Services'}
          </span>
          <div className="flex flex-wrap justify-center gap-4">
            {externalServices.map((service) => (
              <div
                key={service.name}
                className="px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 cursor-pointer bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10"
              >
                <span className="text-lg">{service.emoji}</span>
                <span className="text-gray-600 dark:text-gray-400 text-sm">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes dataFlow {
          0% { stroke-dashoffset: 24; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}

export default WebArchitecture;
