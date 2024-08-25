'use client';

import clsx from 'clsx';
import { FC } from 'react';

interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {
  firstBlobColor: string;
  secondBlobColor: string;
}

export const BlurryBlob: FC<BlobProps> = ({ className, firstBlobColor, secondBlobColor }) => {
  return (
    <div className="min-h-52 min-w-52 items-center justify-center z-0">
      <div className="relative w-full max-w-lg">
        <div
          className={clsx(
            'absolute -right-28 -top-28 h-72 w-72 animate-pop-blob rounded-sm bg-blue-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter',
            className,
            firstBlobColor
          )}
        />
        <div
          className={clsx(
            'absolute -left-38 -top-64 h-72 w-72 animate-pop-blob rounded-sm bg-purple-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter',
            className,
            secondBlobColor
          )}
        />
      </div>
    </div>
  );
};
