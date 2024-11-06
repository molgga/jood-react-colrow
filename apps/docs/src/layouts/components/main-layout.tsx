import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import { DefaultHeader } from './header/default-header';
import { DefaultFooter } from './footer/default-footer';

interface MainLayoutProps extends PropsWithChildren {}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <DefaultHeader />
      <div>{children || <Outlet />}</div>
      <DefaultFooter />
    </div>
  );
}
