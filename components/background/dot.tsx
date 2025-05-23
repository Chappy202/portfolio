import { FC } from 'react';

interface DotProps {
  /**
   * Color of the dot
   */
  color?: string;

  /**
   * Size of the dot in pixels
   */
  size?: number;

  /**
   * Spacing between dots
   */
  spacing?: number;

  /**
   * Content of the component
   */
  children?: React.ReactNode;

  /**
   * Class name
   */
  className?: string;

  style?: React.CSSProperties;
}

function Placeholder() {
  return (
    <div className="flex h-full min-h-64 w-full min-w-72 items-center justify-center">
      <div className="rounded bg-white px-4 py-2">No Content Provided</div>
    </div>
  );
}

export const Dot: FC<DotProps> = ({
  color = '#27272a',
  size = 2,
  spacing = 5,
  children,
  className,
  style,
}) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        backgroundImage: `radial-gradient(${color} ${size}px, transparent ${size}px)`,
        backgroundSize: `calc(${spacing} * ${size}px) calc(${spacing} * ${size}px)`,
      }}
    >
      {children ?? <Placeholder />}
    </div>
  );
};
