import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BackgroundAnimation from '../../components/BackgroundAnimation';

export default function NotFound() {
  return (
    <>
      <BackgroundAnimation />
      <Header />
      <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 relative z-10">
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-black neon-text mb-4">Item Not Found</h1>
          <p className="text-gray-300 mb-6">找不到该物品，可能尚未收录或已改名。</p>
          <Link href="/items" className="text-cyan-400 hover:underline">返回 Items 列表</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
