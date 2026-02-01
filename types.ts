
export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  imageUrl: string;
  category: 'مباريات' | 'انتقالات' | 'عام';
}

export interface Player {
  id: number;
  name: string;
  position?: 'حارس مرمى' | 'دفاع' | 'وسط' | 'هجوم';
  number: string | number;
  isStarting: boolean;
  isCaptain?: boolean;
}

export interface Match {
  id: string;
  opponent: string;
  date: string;
  venue: string;
  type: 'ذهاب' | 'إياب';
  status: 'قادمة' | 'انتهت';
  score?: string;
  result?: 'W' | 'D' | 'L'; // فوز، تعادل، خسارة
}

export interface LeagueEntry {
  position: number;
  clubName: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
  isOurClub?: boolean;
}
