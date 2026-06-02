import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Callout } from 'fumadocs-ui/components/callout';

// Custom component to show experimental callout based on frontmatter
export function ExperimentalCallout({ frontmatter }: { frontmatter: any }) {
  if (frontmatter?.version === 'experimental') {
    return (
      <Callout type="warn">
        This feature is currently experimental and subject to change, it's not recommended for production. Try it out and share your feedback on GitHub.
      </Callout>
    );
  }
  return null;
}

export function getMDXComponents(components?: MDXComponents, frontmatter?: any) {
  return {
    ...defaultMdxComponents,
    Callout,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
