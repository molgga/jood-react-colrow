import {
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';
import { JdColrowObserver } from '../core/jd-colrow-observer';
import { JdColrowContext } from '../provider/use-jd-colrow-context';

interface JdColrowProviderProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement> {}

export function JdColrowProvider({
  children,
  ...attrs
}: JdColrowProviderProps) {
  const [colrowObserver] = useState(() => new JdColrowObserver());
  const [isMounted, setIsMounted] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    colrowObserver.init();
    colrowObserver.attachContainer(refContainer.current!);
    return () => {
      colrowObserver.destroy();
    };
  }, [colrowObserver]);

  return (
    <JdColrowContext.Provider value={colrowObserver}>
      <div ref={refContainer} {...attrs}>
        {isMounted && children}
      </div>
    </JdColrowContext.Provider>
  );
}
