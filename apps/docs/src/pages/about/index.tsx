import { JdColrowProvider } from '@jood/react-colrow';
import { TestBox } from './test-box';
import { TestBox2 } from './test-box2';

export function Component() {
  return (
    <div>
      About
      <div className="wrap">
        <JdColrowProvider>
          <div className="flex">
            <div className="m-1 p-1 border border-slate-200">
              <TestBox groupKey="row-a">
                <TestBox2 />
              </TestBox>
              <TestBox groupKey="row-b">
                <TestBox2 />
              </TestBox>
              <TestBox groupKey="row-c">
                <TestBox2 />
              </TestBox>
            </div>
            <div className="m-1 p-1 border border-slate-200">
              <TestBox groupKey="row-a">
                <TestBox2 />
              </TestBox>
              <TestBox groupKey="row-b">
                <TestBox2 />
              </TestBox>
              <TestBox groupKey="row-c">
                <TestBox2 />
              </TestBox>
            </div>
          </div>
        </JdColrowProvider>
      </div>
    </div>
  );
}

Component.displayName = 'PageAboutIndex';
