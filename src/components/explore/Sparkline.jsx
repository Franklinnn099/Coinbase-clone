const buildPath = (points, width, height, padding) => {
  if (!points.length) return '';

  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const stepX = (width - padding * 2) / Math.max(points.length - 1, 1);

  return points
    .map((point, index) => {
      const x = padding + stepX * index;
      const y = height - padding - ((point - min) / range) * (height - padding * 2);
      return `${index === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(' ');
};

const Sparkline = ({ color = '#16C784', height = 34, points, strokeWidth = 2, width = 92 }) => (
  <svg
    aria-hidden="true"
    className="block"
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    width={width}
  >
    <path
      d={buildPath(points, width, height, 3)}
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
  </svg>
);

export default Sparkline;
