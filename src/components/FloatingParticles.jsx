import { useMemo } from 'react';

const PARTICLE_CHARS = ['🐱', '🐾', '🐟', '🧶', '😺', '🐈'];
const PARTICLE_COUNT = 12;

export default function FloatingParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
      id: i,
      char: PARTICLE_CHARS[i % PARTICLE_CHARS.length],
      left: `${(i * 8.3) % 100}%`,
      duration: `${15 + (i * 3.7) % 20}s`,
      delay: `${-(i * 2.1) % 15}s`,
      size: `${0.6 + (i * 0.13) % 0.8}rem`,
    }));
  }, []);

  return (
    <div className="particles" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            animationDuration: p.duration,
            animationDelay: p.delay,
            fontSize: p.size,
          }}
          dangerouslySetInnerHTML={{ __html: p.char }}
        />
      ))}
    </div>
  );
}
