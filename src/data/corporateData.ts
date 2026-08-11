import { TrackItem, QuoteItem, SlangItem, StatusDetail } from '../types';

export const YOUTUBE_PLAYLIST_ID = 'PLPnBcmTWv6hDYTb7B8J3h5tnPka2LHEfG';

export const PLAYLIST_TRACKS: TrackItem[] = [
  {
    id: 'track-1',
    youtubeId: 'lTRiuFIWV54',
    title: 'Late Night Overtime Chill & Lo-Fi Beats',
    artist: 'Corporate Majdoor Soundtrack',
    duration: '3:45',
    vibe: 'Late Night Desk'
  },
  {
    id: 'track-2',
    youtubeId: '5qap5aO4i9A',
    title: 'Chai Tapri Break & Office Gossip',
    artist: 'Nostalgic Corporate Beats',
    duration: '4:12',
    vibe: 'Chai Time'
  },
  {
    id: 'track-3',
    youtubeId: 'DWcjA5k5uA4',
    title: 'Notice Period - 89 Days Left Freedom Anthem',
    artist: 'Resignation Acoustic',
    duration: '3:58',
    vibe: 'Freedom Dreams'
  },
  {
    id: 'track-4',
    youtubeId: 'fJ9rUzIMcZQ',
    title: 'Appraisal Season Blues & 3.2% Increment',
    artist: 'Desk Slave Ensemble',
    duration: '4:30',
    vibe: 'Appraisal Nostalgia'
  },
  {
    id: 'track-5',
    youtubeId: '2Vv-BfVoq4g',
    title: '=VLOOKUP & Excel Spreadsheet Melodies',
    artist: 'Corporate Majdoor Instrumental',
    duration: '3:20',
    vibe: 'Deep Work'
  }
];

export const STATUS_LIST: StatusDetail[] = [
  {
    id: 'in_meeting',
    label: 'In a Meeting',
    color: 'border-red-500/50 bg-red-950/40 text-red-300',
    dotColor: 'bg-red-500 animate-pulse',
    subtext: 'Camera off, muted, watching reels secretly'
  },
  {
    id: 'chai_break',
    label: 'Chai Tapri Break',
    color: 'border-amber-500/50 bg-amber-950/40 text-amber-300',
    dotColor: 'bg-amber-400 animate-bounce',
    subtext: 'Discussing notice period with office bestie'
  },
  {
    id: 'notice_period',
    label: 'Notice Period (89 Days)',
    color: 'border-purple-500/50 bg-purple-950/40 text-purple-300',
    dotColor: 'bg-purple-400',
    subtext: 'Zero work, maximum coffee, applying on LinkedIn'
  },
  {
    id: 'overtime',
    label: 'Late Night Overtime',
    color: 'border-blue-500/50 bg-blue-950/40 text-blue-300',
    dotColor: 'bg-blue-400 animate-ping',
    subtext: 'Staring at red console errors & dark mode Excel'
  },
  {
    id: 'offline',
    label: 'Out of Office',
    color: 'border-emerald-500/50 bg-emerald-950/40 text-emerald-300',
    dotColor: 'bg-emerald-400',
    subtext: 'Drafting resignation email in notes app'
  }
];

export const NOSTALGIC_QUOTES: QuoteItem[] = [
  {
    id: 'q1',
    text: 'Sunday evening 7:00 PM is when Monday morning corporate anxiety officially begins.',
    author: 'Majdoor No. 404',
    category: 'office_existential'
  },
  {
    id: 'q2',
    text: 'A 15-minute cutting chai break at the office tapri has saved more careers than therapy.',
    author: 'Chai Tapri Philosopher',
    category: 'chai_wisdom'
  },
  {
    id: 'q3',
    text: '"Per my previous email" is corporate speak for "Can you read or should I make a slide deck?"',
    author: 'Corporate Translator',
    category: 'office_existential'
  },
  {
    id: 'q4',
    text: 'Appraisal Season: Expectation - 25% Hike | HR Reality - 3.2% & Pizza Party.',
    author: 'Annual Review Victim',
    category: 'appraisal'
  },
  {
    id: 'q5',
    text: 'The most beautiful sight on Earth is "Resignation Email Sent" and 89 days of Notice Period.',
    author: 'Former Senior Associate',
    category: 'notice_period'
  },
  {
    id: 'q6',
    text: 'My brain contains 10% childhood memories and 90% nested =IF(AND(VLOOKUP())) formulas.',
    author: 'Excel Architect',
    category: 'vlookup'
  },
  {
    id: 'q7',
    text: '"Hope this email finds you well!" — Spoiler: The email found me crying in the cafeteria.',
    author: 'Cubicle Survivor',
    category: 'office_existential'
  },
  {
    id: 'q8',
    text: 'Pressing Alt+Tab when your manager walks past is an Olympic reflex sport.',
    author: 'Pro Desk Athlete',
    category: 'vlookup'
  }
];

export const CORPORATE_SLANG: SlangItem[] = [
  {
    id: 's1',
    phrase: 'Per my previous email...',
    translation: 'I already explained this, but you clearly did not read it.',
    context: 'Used when someone asks a question answered 3 minutes ago in the email thread.',
    severity: 'passive_aggressive'
  },
  {
    id: 's2',
    phrase: "Let's take this offline.",
    translation: 'Stop arguing in front of the client / boss before we both get fired.',
    context: 'Said during heated Teams calls when a bug is exposed live.',
    severity: 'code_red'
  },
  {
    id: 's3',
    phrase: 'Hope this email finds you well!',
    translation: 'I need you to complete this tedious task immediately.',
    context: 'Standard opener before assigning weekend emergency work.',
    severity: 'mild'
  },
  {
    id: 's4',
    phrase: 'Quick sync / 5 mins call?',
    translation: 'Prepare for a 45-minute unstructured rant about a minor ticket.',
    context: 'Triggered by managers at 4:55 PM on a Friday.',
    severity: 'code_red'
  },
  {
    id: 's5',
    phrase: 'Kindly revert at the earliest.',
    translation: 'Reply right now or I am CCing your manager and grand-manager.',
    context: 'High-urgency email signature stamp.',
    severity: 'passive_aggressive'
  },
  {
    id: 's6',
    phrase: 'We are like a family here!',
    translation: 'You will be expected to work 14 hours without overtime pay.',
    context: 'Said during final HR interview round.',
    severity: 'code_red'
  }
];
