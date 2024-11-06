import { JdColrowProvider, JdColrowRow } from '@jood/react-colrow';

export function Component() {
  return (
    <div>
      HOME
      <div className="wrap">
        <JdColrowProvider>
          <div className="flex">
            <div className="m-1 p-1 border border-slate-200">
              <div className="m-2 p-2 border border-slate-200">
                <JdColrowRow groupKey="row-a">1</JdColrowRow>
              </div>
              <div className="m-2 p-2 border border-slate-200">
                <JdColrowRow groupKey="row-b">2</JdColrowRow>
              </div>
              <div className="m-2 p-2 border border-slate-200">
                <JdColrowRow groupKey="row-c">
                  3<br />3<br />3<br />3<br />3<br />3
                </JdColrowRow>
              </div>
            </div>
            <div className="m-1 p-1 border border-slate-200">
              <div className="m-2 p-2 border border-slate-200">
                <JdColrowRow groupKey="row-a">1</JdColrowRow>
              </div>
              <div className="m-2 p-2 border border-slate-200">
                <JdColrowRow groupKey="row-b">
                  2<br />2<br />2<br />2<br />2<br />2
                </JdColrowRow>
              </div>
              <div className="m-2 p-2 border border-slate-200">
                <JdColrowRow groupKey="row-c">
                  3<br />3
                </JdColrowRow>
              </div>
            </div>
          </div>
        </JdColrowProvider>
      </div>
    </div>
  );
}

Component.displayName = 'PageHomeIndex';
