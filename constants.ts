
import { NewsItem, Player, Match, LeagueEntry } from './types';

export const CLUB_NAME = 'مولودية حاسي بحبح';
export const CLUB_ACRONYM = 'M.C.H.B.B';
export const FOUNDING_YEAR = '1992';
export const COACH_NAME = 'بقة المسعود';

export const MOCK_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'تحضيرات مكثفة للمواجهة القادمة',
    summary: 'يواصل رفقاء القائد تدريباتهم بملعب حاسي بحبح وسط أجواء تفاؤلية كبيرة.',
    content: 'دخل الفريق في تربص مغلق تحضيراً للمباراة المصيرية القادمة، حيث ركز الطاقم الفني على الجانب البدني والتقني لتصحيح الأخطاء السابقة...',
    date: '2024-05-18',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800',
    category: 'مباريات'
  },
  {
    id: '2',
    title: 'تكريم قدماء لاعبي المولودية',
    summary: 'نظمت إدارة النادي حفلاً تكريمياً على شرف اللاعبين الذين صنعوا أمجاد النادي في التسعينات.',
    content: 'في التفاتة طيبة، تم تكريم جيل 1992 والسنوات التي تلتها، بحضور السلطات المحلية وجمهور غفير من محبي اللونين الأحمر والأخضر...',
    date: '2024-05-12',
    imageUrl: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=800',
    category: 'عام'
  }
];

export const SQUAD: Player[] = [
  { id: 1, name: 'عمرون ساعد', number: '16', isStarting: true, position: 'حارس مرمى' },
  { id: 2, name: 'جاب الله اسماعيل', number: '13', isStarting: true },
  { id: 3, name: 'قوماري محمد', number: '04', isStarting: true },
  { id: 4, name: 'بن تركية محمد', number: '05', isStarting: true, isCaptain: true },
  { id: 5, name: 'شارف يونس', number: '03', isStarting: true },
  { id: 6, name: 'زكار صلاح', number: '06', isStarting: true },
  { id: 7, name: 'ايت محمد الياس', number: '20', isStarting: true },
  { id: 8, name: 'دنيدينة مصطفى', number: '14', isStarting: true },
  { id: 9, name: 'سالت اسلام', number: '05', isStarting: true },
  { id: 10, name: 'خذير محمد', number: '11', isStarting: true },
  { id: 11, name: 'عبدوني سليم', number: '07', isStarting: true },
  { id: 12, name: 'رفيق ابراهيم', number: '-', isStarting: false },
  { id: 13, name: 'شنافي توفيق', number: '-', isStarting: false },
  { id: 14, name: 'سبع خيرالدين', number: '-', isStarting: false },
  { id: 15, name: 'عيدة عبدالحفيظ', number: '-', isStarting: false },
  { id: 16, name: 'عسلي زكرياء', number: '-', isStarting: false },
  { id: 17, name: 'سعدات ناجي', number: '-', isStarting: false },
];

export const FIXTURES: Match[] = [
  { id: 'm1', opponent: 'اتحاد الجلفة', date: '2024-06-01', venue: 'ملعب حاسي بحبح', type: 'إياب', status: 'قادمة' },
  { id: 'm2', opponent: 'نجم مسعد', date: '2024-05-20', venue: 'ملعب مسعد البلدي', type: 'ذهاب', status: 'انتهت', score: '2 - 1', result: 'W' },
  { id: 'm3', opponent: 'أمل عين وسارة', date: '2024-05-10', venue: 'ملعب حاسي بحبح', type: 'إياب', status: 'انتهت', score: '1 - 1', result: 'D' },
  { id: 'm4', opponent: 'شباب حد الصحاري', date: '2024-04-25', venue: 'ملعب حد الصحاري', type: 'ذهاب', status: 'انتهت', score: '0 - 1', result: 'L' },
];

export const LEAGUE_TABLE: LeagueEntry[] = [
  { position: 1, clubName: 'اتحاد الجلفة', played: 12, won: 9, drawn: 2, lost: 1, goalsFor: 22, goalsAgainst: 8, points: 29 },
  { position: 2, clubName: 'مولودية حاسي بحبح', played: 12, won: 8, drawn: 3, lost: 1, goalsFor: 20, goalsAgainst: 10, points: 27, isOurClub: true },
  { position: 3, clubName: 'أمل عين وسارة', played: 12, won: 7, drawn: 4, lost: 1, goalsFor: 18, goalsAgainst: 12, points: 25 },
  { position: 4, clubName: 'نجم مسعد', played: 12, won: 6, drawn: 2, lost: 4, goalsFor: 15, goalsAgainst: 14, points: 20 },
  { position: 5, clubName: 'شباب حد الصحاري', played: 12, won: 4, drawn: 3, lost: 5, goalsFor: 12, goalsAgainst: 16, points: 15 },
  { position: 6, clubName: 'وفاق الإدريسية', played: 12, won: 3, drawn: 2, lost: 7, goalsFor: 10, goalsAgainst: 20, points: 11 },
  { position: 7, clubName: 'ترجي الشارف', played: 12, won: 2, drawn: 1, lost: 9, goalsFor: 8, goalsAgainst: 24, points: 7 },
];
