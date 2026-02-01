
import React, { useState, useRef, useEffect } from 'react';
import { chatWithFans } from '../services/gemini';
import { Send, Bot, User, Loader2, Star } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'أهلاً بك يا مشجع المولودية الوفي! أنا رفيقك الذكي في حاسي بحبح. هل تريد معرفة تاريخ النادي منذ 1992 أو الاستفسار عن التشكيلة؟' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await chatWithFans(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: response || 'عذراً يا بطل، يبدو أن الشبكة ضعيفة حالياً. تحيا المولودية!' }]);
    setIsLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto h-[650px] flex flex-col bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden animate-fade-in">
      {/* Header Branded with Logo Colors */}
      <div className="bg-red-600 p-6 text-white flex items-center justify-between border-b-4 border-green-600">
        <div className="flex items-center space-x-4 space-x-reverse">
          <div className="p-2 bg-white rounded-xl shadow-lg transform -rotate-3">
            <Bot className="text-red-600" size={32} />
          </div>
          <div>
            <h3 className="font-black text-xl tracking-tighter">مساعد M.C.H.B.B الذكي</h3>
            <div className="flex items-center text-[10px] font-bold text-red-100 uppercase tracking-widest">
              <span className="w-2 h-2 bg-green-400 rounded-full ml-2 animate-pulse"></span>
              متصل الآن - تحيا المولودية
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
           <Star className="text-yellow-400 fill-yellow-400" size={24} />
        </div>
      </div>

      <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-6 bg-slate-50 shadow-inner">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'} animate-slide-up`}>
            <div className={`max-w-[85%] p-5 rounded-[1.5rem] shadow-sm relative ${
              msg.role === 'user' 
                ? 'bg-red-600 text-white rounded-tr-none border-b-4 border-red-800' 
                : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none border-b-4 border-slate-300'
            }`}>
              <div className="flex items-center space-x-2 space-x-reverse mb-2 opacity-70">
                {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                <span className="text-[10px] font-black uppercase tracking-wider">
                  {msg.role === 'user' ? 'المشجع الوفي' : 'ذكاء المولودية'}
                </span>
              </div>
              <p className="text-base leading-relaxed font-medium">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-end">
            <div className="bg-white p-4 rounded-2xl shadow-md border border-slate-100 flex items-center space-x-2 space-x-reverse">
              <Loader2 className="animate-spin text-red-600" size={20} />
              <span className="text-xs font-bold text-slate-400">جاري التفكير...</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-white border-t border-slate-100">
        <div className="flex items-center space-x-3 space-x-reverse">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="اسأل عن تاريخ 1992 أو أي خبر عن الفريق..."
            className="flex-grow p-4 bg-slate-100 border-2 border-transparent rounded-[1.25rem] focus:outline-none focus:border-red-600 focus:bg-white transition-all text-lg font-medium"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="p-4 bg-red-600 text-white rounded-[1.25rem] hover:bg-green-600 disabled:opacity-50 transition-all shadow-xl hover:-translate-y-1 active:scale-95"
          >
            <Send size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
