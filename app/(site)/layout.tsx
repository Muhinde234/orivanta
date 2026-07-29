import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import ProgressBar from '@/components/ui/ProgressBar';
import Chatbot from '@/components/ui/Chatbot';
import { LangProvider } from '@/lib/LangContext';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <ProgressBar />
      <Navbar />
      <main className="flex-1 pb-16">{children}</main>
      <Footer />
      <Chatbot />
    </LangProvider>
  );
}
