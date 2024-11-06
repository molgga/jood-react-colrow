import {
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Subscription } from 'rxjs';
import { useJdColowContext } from '../provider/use-jd-colrow-context';
import { DatasetKey, GroupState } from '../core/types';
import { JdColrowGroup } from '../core/jd-colrow-group';

interface JdColrowRowProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement> {
  groupKey: string;
  lazyAggregate?: number;
}

export function JdColrowRow({
  children,
  groupKey = '',
  lazyAggregate = 0,
  ...attrs
}: JdColrowRowProps) {
  const colrowObserver = useJdColowContext();
  const [expectHeight, setExpectHeight] = useState<number | null>(null);
  const refSize = useRef<HTMLDivElement>(null);
  const refEntry = useRef<HTMLDivElement>(null);
  const listener = useRef<Subscription>();
  const colrowGroup = useRef<JdColrowGroup>();

  const entryAttrs = {
    [`data-${DatasetKey.group.attrKey}`]: groupKey,
  };

  const sizeStyles = useMemo(() => {
    const height = expectHeight;
    const styles = { ...attrs.style };
    if (height && !isNaN(height)) {
      styles.height = `${height}px`;
    }
    return styles;
  }, [attrs, expectHeight]);

  useEffect(() => {
    const onChangeGroupState = (groupState: GroupState) => {
      setExpectHeight(groupState.expectHeight);
    };

    colrowGroup.current = colrowObserver.joinGroup(
      groupKey,
      refEntry.current!,
      { lazyAggregate }
    );
    const observeState = colrowGroup.current
      ?.observeState()
      .subscribe(onChangeGroupState);
    listener.current = new Subscription();
    listener.current.add(observeState);
  }, [colrowObserver, groupKey, lazyAggregate]);

  return (
    <div
      ref={refSize}
      data-jd-colrow-row=""
      {...attrs}
      style={{ ...attrs.style, ...sizeStyles }}
    >
      <div ref={refEntry} {...entryAttrs}>
        {children}
      </div>
    </div>
  );
}
