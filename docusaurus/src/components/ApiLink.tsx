import React from 'react';

interface ApiLinkProps {
  target: string;
  children?: React.ReactNode;
}

/**
 * Renders a link to the AnyChart API reference.
 * Used by the remark api-link-plugin, but can also be used directly in MDX.
 *
 * Usage in MDX:
 *   <ApiLink target="anychart.charts.Cartesian#area">area()</ApiLink>
 */
export default function ApiLink({target, children}: ApiLinkProps) {
  const url = `https://api.anychart.com/${target}`;
  const displayText = children || target;

  return (
    <a
      href={url}
      className="api-link"
      target="_blank"
      rel="noopener noreferrer"
      title={`API: ${target}`}>
      {displayText}
    </a>
  );
}
