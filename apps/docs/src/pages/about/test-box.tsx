import { JdColrowRow } from '@jood/react-colrow';
import { PropsWithChildren, useEffect, useState } from 'react';

interface TestBoxProps extends PropsWithChildren {
  groupKey: string;
}

export function TestBox({ children, groupKey }: TestBoxProps) {
  const lazyAggregate = 0;
  const [length, setLength] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setLength(Math.ceil(Math.random() * 5));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <JdColrowRow
      groupKey={groupKey}
      lazyAggregate={lazyAggregate}
      className="m-2 border border-slate-600"
      style={{ transition: 'height 330ms', overflow: 'hidden' }}
    >
      <div className="p-2">
        <div>{groupKey}</div>
        {Array(length)
          .fill(1)
          .map((v, i) => {
            return <div key={i}>groupKey height 맞춤 {v + i}</div>;
          })}
        {children}
      </div>
    </JdColrowRow>
  );
}
