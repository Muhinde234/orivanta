import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import ProgressBar from '@/components/ui/ProgressBar';
import Chatbot from '@/components/ui/Chatbot';
import { LangProvider } from '@/lib/LangContext';
import { LOCALES } from '@/lib/locales';

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className="min-h-screen flex flex-col">
        <ProgressBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Chatbot />
      </div>
    </LangProvider>
  );
}
