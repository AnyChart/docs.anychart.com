import React, { type ReactNode } from 'react';
import type { ColorMode } from '@docusaurus/theme-common';
import useIsBrowser from '@docusaurus/useIsBrowser';
import styles from './styles.module.css';

interface Props {
  readonly className?: string;
  readonly buttonClassName?: string;
  readonly respectPrefersColorScheme: boolean;
  readonly value: ColorMode | null;
  readonly onChange: (colorMode: ColorMode | null) => void;
}

const MODES: Array<{ mode: ColorMode | null; title: string; icon: ReactNode }> = [
  {
    mode: 'light',
    title: 'Light mode',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
      </svg>
    ),
  },
  {
    mode: null, // system
    title: 'System preference',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z" />
      </svg>
    ),
  },
  {
    mode: 'dark',
    title: 'Dark mode',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
      </svg>
    ),
  },
];

function ColorModeToggle({ className, value, onChange }: Props): ReactNode {
  const isBrowser = useIsBrowser();

  return (
    <div className={`${styles.toggle}${className ? ` ${className}` : ''}`}>
      {MODES.map(({ mode, title, icon }) => (
        <button
          key={title}
          type="button"
          className={`${styles.toggleButton} ${value === mode ? styles.active : ''}`}
          title={title}
          aria-label={title}
          disabled={!isBrowser}
          onClick={() => onChange(mode)}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}

export default React.memo(ColorModeToggle);
