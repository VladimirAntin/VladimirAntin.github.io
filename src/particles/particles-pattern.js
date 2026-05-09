export default {
  fullScreen: {enable: true, zIndex: -1},
  particles: {
    color: {value: ['#ffffff', '#c7d2fe', '#bfdbfe', '#e9d5ff']},
    move: {
      enable: true,
      speed: {min: 0.2, max: 0.7},
      direction: 'none',
      random: true,
      outModes: 'out',
    },
    number: {value: 80, density: {enable: true, area: 900}},
    opacity: {
      value: {min: 0.05, max: 0.6},
      animation: {enable: true, speed: 0.4, sync: false},
    },
    size: {
      value: {min: 0.5, max: 2.5},
      animation: {enable: true, speed: 1, sync: false},
    },
    links: {
      enable: true,
      color: '#ffffff',
      opacity: 0.06,
      distance: 140,
      width: 0.5,
    },
    shape: {type: 'circle'},
    twinkle: {
      particles: {enable: true, frequency: 0.05, opacity: 1},
    },
  },
  detectRetina: true,
};
