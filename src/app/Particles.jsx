'use client';
import {useEffect} from 'react';
import particlesPattern from './particles-pattern';
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

export default ParticlesCp;
