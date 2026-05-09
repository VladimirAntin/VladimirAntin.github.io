export default {
  fullScreen: {enable: true, zIndex: -1},
  particles: {
    color: {value: ['#ffffff', '#c7d2fe', '#bfdbfe', '#e9d5ff']},
    move: {
      enable: true,
      speed: {min: 0.3, max: 1.0},
      direction: 'none',
      random: true,
      outModes: 'out',
    },
    number: {value: 120, density: {enable: true, area: 800}},
    opacity: {
      value: {min: 0.15, max: 0.8},
      animation: {enable: true, speed: 0.5, sync: false},
    },
    size: {
      value: {min: 0.8, max: 3},
      animation: {enable: true, speed: 1.2, sync: false},
    },
    links: {
      enable: true,
      color: '#c7d2fe',
      opacity: 0.2,
      distance: 180,
      width: 0.8,
    },
    shape: {type: 'circle'},
    twinkle: {
      particles: {enable: true, frequency: 0.08, opacity: 1},
    },
  },
  detectRetina: true,
};
