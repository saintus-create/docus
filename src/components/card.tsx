import Link from 'fumadocs-core/link';
import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../lib/cn';

export function Cards(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={cn('grid grid-cols-1 md:grid-cols-3 gap-8 @container', props.className)}>
      {props.children}
    </div>
  );
}

export type CardProps = Omit<HTMLAttributes<HTMLElement>, 'title'> & {
  icon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;

  href?: string;
  external?: boolean;
};

export function Card({ icon, title, description, ...props }: CardProps) {
  const E = props.href ? Link : 'div';

  return (
    <E
      {...props}
      data-card
      className={cn(
        'block rounded-xl border bg-fd-card p-8 text-fd-card-foreground transition-colors h-full flex flex-col',
        props.href && 'hover:bg-fd-accent/80 hover:shadow-lg',
        props.className,
      )}
    >
      {icon ? (
        <div className="not-prose mb-4 w-fit shadow-md rounded-lg border bg-fd-muted p-2 text-fd-muted-foreground [&_svg]:size-5">
          {icon}
        </div>
      ) : null}
      <h3 className="not-prose mb-3 text-lg font-semibold">{title}</h3>
      {description ? <p className="my-0! text-base text-fd-muted-foreground flex-grow leading-relaxed">{description}</p> : null}
      <div className="text-sm text-fd-muted-foreground prose-no-margin empty:hidden mt-4">
        {props.children}
      </div>
    </E>
  );
}
