'use client';
import {memo, useEffect} from 'react';
import particlesPattern from './particles-pattern.js';
import Particles, {initParticlesEngine} from '@tsparticles/react';
import {loadSlim} from '@tsparticles/slim';

const ParticlesCp = () => {
  useEffect(() => {
    (async () =>
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }))();
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        options={particlesPattern}
      />
    </>
  );
};

export default memo(ParticlesCp);
