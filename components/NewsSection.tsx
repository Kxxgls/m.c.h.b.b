
import React, { useState } from 'react';
import { MOCK_NEWS } from '../constants';
import { getNewsAnalysis } from '../services/gemini';
import { Sparkles, Calendar, ArrowRight, TrendingUp } from 'lucide-react';
import { NewsItem } from '../types';

const NewsSection: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [aiAnalysis, setAiAnalysis] = useState<string>('');
  const [loadingAnalysis, setLoadingAnalysis] = useState(false);

  const handleReadMore = async (news: NewsItem) => {
    setSelectedNews(news);
    setLoadingAnalysis(true);
    setAiAnalysis('');
    const analysis = await getNewsAnalysis(news.title, news.content);
    setAiAnalysis(analysis || '');
    setLoadingAnalysis(false);
  };

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between border-b pb-6">
        <div className="flex items-center space-x-3 space-x-reverse">
          <div className="p-2 bg-red-600 rounded-lg text-white"><TrendingUp size={24} /></div>
          <h2 className="text-4xl font-black text-slate-800 tracking-tighter">أخبار المعقل الأحمر</h2>
        </div>
      </div>

      {!selectedNews ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_NEWS.map((item) => (
            <div key={item.id} className="group bg-white rounded-[2rem] shadow-lg overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              <div className="relative overflow-hidden h-52">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 px-4 py-1 bg-green-600 text-white rounded-full text-xs font-black shadow-lg">
                  {item.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-slate-400 mb-3 font-bold uppercase tracking-wider">
                  <Calendar size={14} className="ml-1" />
                  {item.date}
                </div>
                <h3 className="text-xl font-black text-slate-800 mb-3 leading-tight group-hover:text-red-600 transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed">{item.summary}</p>
                <button
                  onClick={() => handleReadMore(item)}
                  className="mt-auto w-full py-3 px-6 bg-slate-900 hover:bg-red-600 text-white rounded-xl font-black transition-all flex items-center justify-center space-x-2 space-x-reverse shadow-lg"
                >
                  <span>التفاصيل الكاملة</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden animate-fade-in border border-slate-50">
          <button 
            onClick={() => setSelectedNews(null)}
            className="m-8 flex items-center space-x-2 space-x-reverse text-red-600 hover:text-red-800 font-black transition-colors"
          >
            <ArrowRight className="rotate-180" size={20} />
            <span>عودة لقائمة الأخبار</span>
          </button>
          
          <div className="px-8 md:px-16">
            <img src={selectedNews.imageUrl} alt={selectedNews.title} className="w-full h-80 md:h-[450px] object-cover rounded-[2.5rem] shadow-2xl mb-12" />
            
            <div className="max-w-4xl mx-auto pb-16">
              <div className="flex items-center space-x-4 space-x-reverse mb-8">
                 <span className="px-6 py-2 bg-green-100 text-green-700 rounded-full text-sm font-black shadow-sm">
                  {selectedNews.category}
                </span>
                <span className="text-slate-400 font-bold">{selectedNews.date}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 tracking-tighter leading-tight">{selectedNews.title}</h1>
              
              <div className="prose prose-xl prose-red max-w-none text-slate-700 leading-loose mb-16">
                {selectedNews.content}
              </div>

              {/* AI Insight Box - Custom branded */}
              <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-[2.5rem] p-10 text-white relative shadow-2xl overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md ml-4 shadow-lg">
                      <Sparkles className="text-white animate-pulse" />
                    </div>
                    <h4 className="font-black text-2xl tracking-tighter">تحليل الذكاء الاصطناعي للمشجعين</h4>
                  </div>
                  
                  {loadingAnalysis ? (
                    <div className="flex items-center justify-center p-8">
                      <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  ) : (
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                      <p className="text-xl italic leading-relaxed font-medium">
                        "{aiAnalysis}"
                      </p>
                    </div>
                  )}
                </div>
                {/* Decoration stripes bottom of box */}
                <div className="absolute bottom-0 left-0 right-0 h-2 flex opacity-20">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`flex-grow h-full ${i % 2 === 0 ? 'bg-white' : 'bg-transparent'}`}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsSection;
