'use client';
import {memo, useEffect, useState} from 'react';
import particlesPattern from './particles-pattern.js';
import Particles, {initParticlesEngine} from '@tsparticles/react';
import {loadSlim} from '@tsparticles/slim';

const ParticlesCp = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async () =>
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }))().then(() => setIsReady(true));
  }, []);

  return (!isReady ? null:
    <>
      <Particles
        id="tsparticles"
        options={particlesPattern}
      />
    </>
  );
};

export default memo(ParticlesCp);
