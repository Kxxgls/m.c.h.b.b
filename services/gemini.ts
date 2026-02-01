
import { GoogleGenAI, Type } from "@google/genai";

// Ensure AI client is initialized exactly as recommended in each call
export const getNewsAnalysis = async (newsTitle: string, newsContent: string) => {
  // Always use a named parameter for apiKey and use process.env.API_KEY directly.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `بصفتك محلل رياضي خبير في كرة القدم الجزائرية، قم بتقديم تعليق قصير وحماسي (باللغة العربية) على الخبر التالي الخاص بنادي مولودية حاسي بحبح:
      العنوان: ${newsTitle}
      المحتوى: ${newsContent}
      
      اجعل التعليق موجه للمشجعين المحليين في حاسي بحبح.`,
    });
    // Access the .text property directly (not a method).
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "عذراً، لا يمكن الحصول على تحليل حالياً.";
  }
};

export const chatWithFans = async (message: string) => {
  // Always use a named parameter for apiKey and use process.env.API_KEY directly.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: "أنت المساعد الذكي لمشجعي نادي مولودية حاسي بحبح (MCHB). أجب بلطف وحماس عن أسئلة النادي وتاريخه ونتائجه. استخدم اللهجة الجزائرية المحببة للمشجعين إذا كان ذلك مناسباً، وشجع الفريق دائماً (تحيا المولودية!).",
      }
    });
    // Access the .text property directly (not a method).
    return response.text;
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "حدث خطأ في الاتصال بالذكاء الاصطناعي.";
  }
};
