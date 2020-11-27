const tooltips = {
  props: {
    MuiTooltip: {
      interactive: true,
      enterDelay: 400,
      enterTouchDelay: 400,
      arrow: true,
      placement: 'top',
    },
  },
  overrides: {
    MuiTooltip: {
      tooltip: { fontSize: '1.1rem' },
    },
  },
};

export default tooltips;
