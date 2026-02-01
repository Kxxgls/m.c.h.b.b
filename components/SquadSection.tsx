
import React from 'react';
import { SQUAD, COACH_NAME } from '../constants';
// Add missing 'Users' icon to the imports
import { User, Shield, Star, Briefcase, Award, Users } from 'lucide-react';

const SquadSection: React.FC = () => {
  const startingXI = SQUAD.filter(p => p.isStarting);
  const substitutes = SQUAD.filter(p => !p.isStarting);

  return (
    <div className="space-y-12 animate-fade-in pb-20">
      {/* Coach Section */}
      <section className="bg-white rounded-[2.5rem] shadow-xl p-8 border-r-8 border-red-600 flex flex-col md:flex-row items-center gap-8 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-32 h-full bg-slate-50 opacity-50 -skew-x-12 -translate-x-16"></div>
        <div className="bg-red-50 p-6 rounded-3xl relative">
          <Briefcase className="text-red-600" size={48} />
          <div className="absolute -top-2 -right-2 bg-green-600 text-white p-2 rounded-lg shadow-lg">
             <Award size={20} />
          </div>
        </div>
        <div className="text-center md:text-right flex-grow">
          <span className="text-red-600 font-black text-xs uppercase tracking-widest mb-2 block">القيادة الفنية</span>
          <h2 className="text-4xl font-black text-slate-800 tracking-tighter">المدرب: {COACH_NAME}</h2>
          <p className="text-slate-500 font-medium mt-2">يقود الكتيبة الحمراء نحو الأمجاد والانتصارات</p>
        </div>
      </section>

      {/* Starting XI Section */}
      <section className="space-y-8">
        <div className="flex items-center space-x-3 space-x-reverse mb-6">
          <div className="p-2 bg-green-600 rounded-xl text-white shadow-lg"><Star size={24} /></div>
          <h2 className="text-3xl font-black text-slate-800 tracking-tighter">التشكيلة الأساسية (Starting XI)</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {startingXI.map((player) => (
            <div key={player.id} className="group bg-white rounded-3xl shadow-lg border border-slate-100 p-6 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-all relative overflow-hidden">
              {/* Captain Badge */}
              {player.isCaptain && (
                <div className="absolute top-4 left-4 bg-yellow-400 text-slate-900 text-[10px] font-black px-3 py-1 rounded-full shadow-md z-10 animate-pulse">
                  © القائد
                </div>
              )}
              
              <div className="w-24 h-24 bg-slate-50 rounded-[2rem] flex items-center justify-center mb-4 relative shadow-inner group-hover:bg-red-50 transition-colors">
                <User size={48} className="text-slate-300 group-hover:text-red-200 transition-colors" />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-red-600 text-white rounded-xl flex items-center justify-center font-black border-4 border-white shadow-lg text-lg transform group-hover:scale-110 transition-transform">
                  {player.number}
                </div>
              </div>
              
              <h3 className="font-black text-xl text-slate-800 mb-1 tracking-tight">{player.name}</h3>
              {player.position && (
                <div className="flex items-center space-x-1 space-x-reverse text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full mt-2">
                   <Shield size={12} />
                   <span>{player.position}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Substitutes Section */}
      <section className="space-y-8">
        <div className="flex items-center space-x-3 space-x-reverse mb-6">
          {/* Fixed: Use the correctly imported Users icon */}
          <div className="p-2 bg-slate-200 rounded-xl text-slate-600"><Users size={24} /></div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tighter">قائمة الاحتياط</h2>
        </div>
        
        <div className="bg-white rounded-[2.5rem] shadow-lg border border-slate-50 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {substitutes.map((player) => (
            <div key={player.id} className="flex items-center space-x-4 space-x-reverse p-4 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100 group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-slate-400 font-black group-hover:text-red-500 transition-colors">
                <User size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-slate-800 text-lg tracking-tight">{player.name}</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">لاعب بديل</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recruitment Banner */}
      <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-right">
            <h3 className="text-3xl font-black mb-4 tracking-tighter">هل تملك الموهبة لتمثيل حاسي بحبح؟</h3>
            <p className="text-green-50 text-lg font-medium max-w-xl">مدرسة المولودية تفتح أبوابها دائماً للمبدعين. انضم إلينا وكن جزءاً من تاريخ النادي العريق.</p>
          </div>
          <a 
            href="https://www.facebook.com/profile.php?id=100063880023348" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-green-700 font-black py-5 px-12 rounded-2xl hover:bg-red-600 hover:text-white transition-all shadow-2xl transform hover:-translate-y-1 active:scale-95 text-lg"
          >
            قدم طلب انضمامك الآن
          </a>
        </div>
        {/* Decorative pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default SquadSection;
