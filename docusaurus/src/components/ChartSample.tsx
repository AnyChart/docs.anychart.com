import React from 'react';

interface ChartSampleProps {
  name: string;
  width?: number;
  height?: number;
}

/**
 * Renders an AnyChart sample as an iframe.
 * Samples are served from /samples/ (copied from repo root by prepare-samples.sh).
 */
export default function ChartSample({name, width, height = 400}: ChartSampleProps) {
  // Local samples served from static/samples/ directory
  const src = `/samples/${name}.html`;

  return (
    <div className="chart-sample-container">
      <iframe
        src={src}
        width={width || '100%'}
        height={height}
        loading="lazy"
        title={`AnyChart Sample: ${name}`}
      />
      <div className="chart-sample-actions">
        <a href={src} target="_blank" rel="noopener noreferrer">
          Open Sample &#x2197;
        </a>
      </div>
    </div>
  );
}
