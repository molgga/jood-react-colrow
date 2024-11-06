import { createContext, useContext } from 'react';
import { JdColrowObserver } from '../core/jd-colrow-observer';

export const JdColrowContext = createContext<JdColrowObserver | null>(null);

export const useJdColowContext = () => {
  return useContext(JdColrowContext) as JdColrowObserver;
};
