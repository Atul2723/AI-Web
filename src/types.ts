export type CorporateStatus = 'in_meeting' | 'chai_break' | 'notice_period' | 'overtime' | 'offline';

export interface TrackItem {
  id: string;
  youtubeId: string;
  title: string;
  artist: string;
  duration: string;
  vibe: string;
}

export interface QuoteItem {
  id: string;
  text: string;
  author: string;
  category: 'office_existential' | 'chai_wisdom' | 'appraisal' | 'notice_period' | 'vlookup';
}

export interface SlangItem {
  id: string;
  phrase: string;
  translation: string;
  context: string;
  severity: 'mild' | 'passive_aggressive' | 'code_red';
}

export interface StatusDetail {
  id: CorporateStatus;
  label: string;
  color: string;
  dotColor: string;
  subtext: string;
}
