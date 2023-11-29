import { BrowserRouter } from 'react-router-dom';
import CodeInline from '../documponents/code-inline';
import * as LayoutComponents from '../documponents/layout';
import * as NavigationComponents from '../documponents/navigation';
import * as PageComponents from '../documponents/page';
import DocumponentsRoot from '../documponents/root';
import './App.css';

function App() {
  return (
    <DocumponentsRoot>
      <BrowserRouter>
        <LayoutComponents.Layout>
          <LayoutComponents.Left.Panel>
            <LayoutComponents.Left.Header>
              <LayoutComponents.Left.Title>
                <CodeInline className="bg-primary-600 dark:bg-primary-600 text-white">pusu</CodeInline> use cases
              </LayoutComponents.Left.Title>
            </LayoutComponents.Left.Header>
            <NavigationComponents.Panel>
              <NavigationComponents.Section>
                <NavigationComponents.Title>Refresh</NavigationComponents.Title>
                <NavigationComponents.Link href="#">Read Me</NavigationComponents.Link>
              </NavigationComponents.Section>
            </NavigationComponents.Panel>
          </LayoutComponents.Left.Panel>
          <LayoutComponents.Content>
            <PageComponents.Page>
              <PageComponents.Header>
                <PageComponents.Title>Use Cases</PageComponents.Title>
              </PageComponents.Header>
              <PageComponents.Content>{''}</PageComponents.Content>
            </PageComponents.Page>
          </LayoutComponents.Content>
        </LayoutComponents.Layout>
      </BrowserRouter>
    </DocumponentsRoot>
  );
}

export default App;
