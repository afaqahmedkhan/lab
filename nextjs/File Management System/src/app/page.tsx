import FileList from './components/FileList';
import { FileProvider } from './contexts/FileContext';

export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">File Management Dashboard</h1>
      <FileProvider>
        <FileList />
      </FileProvider>
    </div>
  );
}
