import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      enabled: true,
      title: appName,
      transparentMode: 'none',
    },
  };
}
