import { CircleCheck, CircleX, Info, Lightbulb, TriangleAlert } from 'lucide-react';
import type { ComponentProps, ReactNode } from 'react';
import { cn } from '../lib/cn';

export type CalloutType = 'info' | 'warn' | 'error' | 'success' | 'warning' | 'idea';

const iconClass = 'size-5 -me-0.5 fill-(--callout-color) text-fd-card';

export function Callout({
  children,
  title,
  ...props
}: { title?: ReactNode } & Omit<CalloutContainerProps, 'title'>) {
  return (
    <CalloutContainer {...props}>
      {title && <CalloutTitle>{title}</CalloutTitle>}
      <CalloutDescription>{children}</CalloutDescription>
    </CalloutContainer>
  );
}

export interface CalloutContainerProps extends ComponentProps<'div'> {
  /**
   * @defaultValue info
   */
  type?: CalloutType;

  /**
   * Force an icon
   */
  icon?: ReactNode;
}

function resolveAlias(type: CalloutType) {
  if (type === 'warn') return 'warning';
  if ((type as unknown) === 'tip') return 'info';
  return type;
}

export function CalloutContainer({
  type: inputType = 'info',
  icon,
  children,
  className,
  style,
  ...props
}: CalloutContainerProps) {
  const type = resolveAlias(inputType);

  const solidBackgrounds = {
    info: 'bg-blue-50 border-blue-200 text-blue-900',
    warning: 'bg-amber-50 border-amber-200 text-amber-900',
    error: 'bg-red-50 border-red-200 text-red-900',
    success: 'bg-green-50 border-green-200 text-green-900',
    idea: 'bg-purple-50 border-purple-200 text-purple-900',
  };

  return (
    <div
      className={cn(
        'flex gap-4 my-8 rounded-lg border p-6 text-base shadow-md',
        solidBackgrounds[type as keyof typeof solidBackgrounds] || solidBackgrounds.info,
        className,
      )}
      {...props}
    >
      {icon ??
        {
          info: <Info className="size-6 flex-shrink-0" />,
          warning: <TriangleAlert className="size-6 flex-shrink-0" />,
          error: <CircleX className="size-6 flex-shrink-0" />,
          success: <CircleCheck className="size-6 flex-shrink-0" />,
          idea: <Lightbulb className="size-6 flex-shrink-0" />,
        }[type]}
      <div className="flex flex-col gap-2 min-w-0 flex-1">{children}</div>
    </div>
  );
}

export function CalloutTitle({ children, className, ...props }: ComponentProps<'p'>) {
  return (
    <p className={cn('font-medium my-0!', className)} {...props}>
      {children}
    </p>
  );
}

export function CalloutDescription({ children, className, ...props }: ComponentProps<'p'>) {
  return (
    <div
      className={cn('text-fd-muted-foreground prose-no-margin empty:hidden', className)}
      {...props}
    >
      {children}
    </div>
  );
}
