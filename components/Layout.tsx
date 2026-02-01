
import React, { useState } from 'react';
import { CLUB_NAME, CLUB_ACRONYM } from '../constants';
import { Home, Users, Newspaper, Info, Menu, X, Trophy } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'الرئيسية', icon: Home },
    { id: 'news', label: 'الأخبار', icon: Newspaper },
    { id: 'table', label: 'الترتيب والمباريات', icon: Trophy },
    { id: 'squad', label: 'التشكيلة', icon: Users },
    { id: 'about', label: 'عن النادي', icon: Info },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header - Red as Primary for M.C.H.B.B */}
      <header className="bg-red-600 text-white shadow-xl sticky top-0 z-50 border-b-4 border-green-600">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="bg-white p-1 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300">
               <img 
                 src="https://i.ibb.co/vzPRY4v/mchbb-logo.png" 
                 alt="MCHBB Logo" 
                 className="w-12 h-12 object-contain"
                 onError={(e) => {
                   (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/initials/svg?seed=MCHBB&backgroundColor=ef4444';
                 }}
               />
            </div>
            <div className="flex flex-col leading-tight">
              <h1 className="text-xl md:text-2xl font-black tracking-tighter">{CLUB_NAME}</h1>
              <span className="text-xs text-red-100 font-bold opacity-80">{CLUB_ACRONYM}</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-2 space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-1 space-x-reverse px-4 py-2 rounded-full transition-all duration-300 ${
                  activeTab === item.id 
                    ? 'bg-white text-red-600 font-bold shadow-md' 
                    : 'hover:bg-red-700 text-red-50'
                }`}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 hover:bg-red-700 rounded-full transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-slate-800 border-b shadow-2xl animate-fade-in overflow-hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMenuOpen(false);
              }}
              className={`w-full flex items-center space-x-4 space-x-reverse px-6 py-4 border-b border-slate-100 ${
                activeTab === item.id ? 'bg-red-50 text-red-600 font-bold' : ''
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t-8 border-red-600">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <img 
                src="https://i.ibb.co/vzPRY4v/mchbb-logo.png" 
                alt="Logo" 
                className="w-10 h-10 object-contain"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <h3 className="text-white font-black text-xl">{CLUB_NAME}</h3>
            </div>
            <p className="text-sm leading-relaxed">التطبيق الرسمي لمشجعي مولودية حاسي بحبح. فخر ولاية الجلفة ورمز الكرة المحلية.</p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-r-4 border-green-600 pr-3">روابط هامة</h3>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => setActiveTab('news')} className="hover:text-red-500 transition-colors">آخر المستجدات</button></li>
              <li><button onClick={() => setActiveTab('table')} className="hover:text-red-500 transition-colors">المباريات والترتيب</button></li>
              <li><button onClick={() => setActiveTab('squad')} className="hover:text-red-500 transition-colors">طاقم الفريق</button></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white font-bold text-lg mb-6 border-r-4 border-red-600 pr-3">ألواننا فخرنا</h3>
            <div className="flex space-x-2 space-x-reverse mb-4">
              <div className="w-8 h-8 bg-red-600 rounded-full border-2 border-white shadow-sm"></div>
              <div className="w-8 h-8 bg-white rounded-full border-2 border-slate-700 shadow-sm"></div>
              <div className="w-8 h-8 bg-green-600 rounded-full border-2 border-white shadow-sm"></div>
            </div>
            <p className="text-xs">تأسس النادي في 1992 بمدينة حاسي بحبح.</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-[10px] uppercase tracking-widest font-bold">
          Mouloudia Chabab Hassi Bahbah - 1992
        </div>
      </footer>
    </div>
  );
};

export default Layout;
