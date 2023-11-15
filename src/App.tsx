import MainLayout from './components/layout/MainLayout';
import Tool from './components/Tool';

function App(): JSX.Element {
  return (
    <MainLayout>
      <div className=" flex flex-col gap-10 w-full">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold bg-gradient-to-b from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-transparent">
            Text Converter Tool
          </h1>
          <div className="text-neutral-700 max-w-3xl">
            Format your Text: Convert it to Camelcase, Lowercase, Uppercase and More
          </div>
        </div>
        <div className="min-h-96 h-fit">
          <Tool></Tool>
        </div>
      </div>
    </MainLayout>
  );
}

export default App;
