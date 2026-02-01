
import React, { useState } from 'react';
import Layout from './components/Layout';
import NewsSection from './components/NewsSection';
import SquadSection from './components/SquadSection';
import { CLUB_NAME, FOUNDING_YEAR, FIXTURES, LEAGUE_TABLE } from './constants';
import { Trophy, Calendar, MapPin, Users, Activity, Star, CheckCircle2, XCircle, MinusCircle } from 'lucide-react';

const MatchesTableView: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in pb-20">
      {/* League Table Section */}
      <section className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
        <div className="bg-slate-900 p-8 text-white flex items-center justify-between">
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="p-3 bg-red-600 rounded-2xl shadow-lg">
              <Trophy size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-black tracking-tighter">ترتيب الدوري العام</h2>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">موسم 2023 - 2024</p>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-5 text-slate-400 text-xs font-black uppercase tracking-widest">مركز</th>
                <th className="p-5 text-slate-400 text-xs font-black uppercase tracking-widest text-right">النادي</th>
                <th className="p-5 text-slate-400 text-xs font-black uppercase tracking-widest text-center">لعب</th>
                <th className="p-5 text-slate-400 text-xs font-black uppercase tracking-widest text-center">فوز</th>
                <th className="p-5 text-slate-400 text-xs font-black uppercase tracking-widest text-center">تعادل</th>
                <th className="p-5 text-slate-400 text-xs font-black uppercase tracking-widest text-center">خسارة</th>
                <th className="p-5 text-slate-400 text-xs font-black uppercase tracking-widest text-center">+/-</th>
                <th className="p-5 text-slate-900 text-sm font-black uppercase tracking-widest text-center bg-slate-100">نقاط</th>
              </tr>
            </thead>
            <tbody>
              {LEAGUE_TABLE.map((row) => (
                <tr key={row.position} className={`border-b border-slate-100 transition-colors ${row.isOurClub ? 'bg-red-50 hover:bg-red-100' : 'hover:bg-slate-50'}`}>
                  <td className="p-5 text-center font-black">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${row.position <= 3 ? 'bg-green-600 text-white shadow-md' : 'text-slate-400'}`}>
                      {row.position}
                    </span>
                  </td>
                  <td className="p-5 font-black text-slate-800">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      {row.isOurClub && (
                        <div className="w-2 h-8 bg-red-600 rounded-full ml-1"></div>
                      )}
                      <span>{row.clubName}</span>
                    </div>
                  </td>
                  <td className="p-5 text-center text-slate-600 font-bold">{row.played}</td>
                  <td className="p-5 text-center text-green-600 font-bold">{row.won}</td>
                  <td className="p-5 text-center text-amber-600 font-bold">{row.drawn}</td>
                  <td className="p-5 text-center text-red-600 font-bold">{row.lost}</td>
                  <td className="p-5 text-center text-slate-400 text-xs font-medium">{row.goalsFor}:{row.goalsAgainst}</td>
                  <td className={`p-5 text-center font-black text-lg ${row.isOurClub ? 'text-red-600' : 'text-slate-900'} bg-slate-50/50`}>
                    {row.points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Full Fixtures Section */}
      <section className="space-y-8">
        <div className="flex items-center space-x-3 space-x-reverse mb-6">
          <div className="p-2 bg-green-600 rounded-xl text-white shadow-lg"><Calendar size={24} /></div>
          <h2 className="text-3xl font-black text-slate-800 tracking-tighter">جدول جميع المباريات</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FIXTURES.map((match) => (
            <div key={match.id} className="bg-white rounded-[2rem] p-6 shadow-lg border border-slate-100 flex items-center justify-between hover:-translate-y-1 transition-all">
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className={`p-3 rounded-2xl ${match.result === 'W' ? 'bg-green-50 text-green-600' : match.result === 'L' ? 'bg-red-50 text-red-600' : 'bg-slate-50 text-slate-400'}`}>
                  {match.result === 'W' ? <CheckCircle2 size={32} /> : match.result === 'L' ? <XCircle size={32} /> : <MinusCircle size={32} />}
                </div>
                <div>
                  <h4 className="font-black text-xl text-slate-800">{match.opponent}</h4>
                  <p className="text-slate-400 text-xs font-bold">{match.date} | {match.venue}</p>
                </div>
              </div>
              
              <div className="text-center">
                {match.status === 'انتهت' ? (
                  <div className="bg-slate-900 text-white px-5 py-2 rounded-xl font-black text-xl shadow-lg">
                    {match.score}
                  </div>
                ) : (
                  <div className="bg-red-600 text-white px-5 py-2 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg">
                    قريباً
                  </div>
                )}
                <span className="text-[10px] text-slate-400 font-black mt-2 block tracking-widest uppercase">{match.type}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const HomeView: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero Section - Matching the Logo Aesthetic */}
      <section className="relative rounded-[3rem] overflow-hidden h-[550px] shadow-2xl group border-4 border-white">
        <img 
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1200" 
          alt="MCHBB Fans" 
          className="w-full h-full object-cover brightness-[0.35] transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-transparent to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 h-4 flex">
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`flex-grow h-full ${i % 2 === 0 ? 'bg-red-600' : 'bg-white'}`}></div>
          ))}
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
          <div className="mb-8 p-4 bg-white/10 backdrop-blur-md rounded-full shadow-2xl border border-white/20 animate-bounce-slow">
             <img 
                src="https://i.ibb.co/vzPRY4v/mchbb-logo.png" 
                alt="MCHBB Official Logo" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
                onError={(e) => {
                   (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/initials/svg?seed=MCHBB&backgroundColor=ef4444';
                 }}
             />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-2 tracking-tighter drop-shadow-2xl">
            {CLUB_NAME}
          </h2>
          <div className="bg-green-600 text-white px-8 py-1 rounded-md font-black text-xl mb-6 shadow-lg transform -rotate-1">
            M. C. H. B. B
          </div>
          <p className="text-xl md:text-2xl font-bold max-w-2xl drop-shadow-md text-red-100">
            تأسس في {FOUNDING_YEAR} - القلب النابض لمدينة حاسي بحبح
          </p>
        </div>
      </section>

      {/* Quick Summary Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
            <h3 className="text-2xl font-black text-slate-800 mb-6 flex items-center space-x-3 space-x-reverse">
              <Trophy className="text-red-600" />
              <span>موقفنا الحالي</span>
            </h3>
            <div className="flex items-center justify-between p-6 bg-red-600 text-white rounded-[2rem] shadow-2xl transform hover:scale-[1.02] transition-transform">
               <div>
                  <p className="text-red-100 text-xs font-bold uppercase tracking-widest">المركز الحالي</p>
                  <p className="text-5xl font-black tracking-tighter">02</p>
               </div>
               <div className="text-right">
                  <p className="text-red-100 text-xs font-bold uppercase tracking-widest">إجمالي النقاط</p>
                  <p className="text-5xl font-black tracking-tighter">27</p>
               </div>
            </div>
         </div>
         <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
            <h3 className="text-2xl font-black text-slate-800 mb-6 flex items-center space-x-3 space-x-reverse">
              <Calendar className="text-green-600" />
              <span>المباراة القادمة</span>
            </h3>
            <div className="flex items-center justify-between p-6 bg-slate-900 text-white rounded-[2rem] shadow-2xl transform hover:scale-[1.02] transition-transform">
               <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <img src="https://i.ibb.co/vzPRY4v/mchbb-logo.png" className="w-8 h-8 object-contain" alt="Club" />
                  </div>
                  <span className="font-black text-xl">VS</span>
                  <span className="font-black text-xl">اتحاد الجلفة</span>
               </div>
               <div className="text-right">
                  <p className="text-green-400 font-black">01 جوان</p>
                  <p className="text-xs text-slate-400">حاسي بحبح</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomeView />;
      case 'news': return <NewsSection />;
      case 'table': return <MatchesTableView />;
      case 'squad': return <SquadSection />;
      case 'about': return <HomeView />; // Placeholder or modify about
      default: return <HomeView />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
};

export default App;
