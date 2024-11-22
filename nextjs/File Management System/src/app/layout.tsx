import { Toaster } from '@/components/ui/toaster';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <main className="p-4 max-w-7xl mx-auto">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
