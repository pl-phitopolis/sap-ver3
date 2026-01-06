
import React from 'react';
import { Shield, School, Heart, Users, BarChart3, Clock } from 'lucide-react';
import { StatItem, Expert, SuccessStory } from './types';

export const NAV_ITEMS = [
  { label: 'Home', href: '#/' },
  { label: 'About', href: '#/about' },
  { label: 'Services', href: '#/services' },
  { label: 'Contact', href: '#/contact' }
];

export const IMPACT_STATS: StatItem[] = [
  {
    label: 'Communities Served',
    value: '124+',
    description: 'Schools and religious centers protected.',
    icon: 'School'
  },
  {
    label: 'Veterans Recruited',
    value: '2,500+',
    description: 'Elite personnel on active patrol.',
    icon: 'Shield'
  },
  {
    label: 'Safety Score Increase',
    value: '92%',
    description: 'Improvement in perceived safety.',
    icon: 'BarChart3'
  },
  {
    label: 'Total Patrol Hours',
    value: '450k+',
    description: 'Dedicated professional service.',
    icon: 'Clock'
  }
];

export const LEADERSHIP: Expert[] = [
  {
    name: 'Cmdr. James Vance (Ret.)',
    role: 'Executive Director',
    bio: 'Former Navy SEAL Commander with 25 years of tactical leadership experience.',
    imageUrl: 'https://picsum.photos/400/500?random=1',
    credentials: ['US Navy SEAL', 'Masters in Strategic Security', 'Silver Star Recipient']
  },
  {
    name: 'Chief Sarah Miller',
    role: 'Director of Training',
    bio: '20-year veteran of Law Enforcement Special Operations and Crisis Intervention.',
    imageUrl: 'https://picsum.photos/400/500?random=2',
    credentials: ['LEO Special Ops', 'Crisis Negotiation Expert', 'Public Safety Medal']
  },
  {
    name: 'Dr. Robert Chen',
    role: 'Advisory Board Chair',
    bio: 'Renowned expert in educational psychology and institutional security science.',
    imageUrl: 'https://picsum.photos/400/500?random=3',
    credentials: ['PhD Psychology', 'Senior Security Fellow', 'Published Author']
  }
];

export const STORIES: SuccessStory[] = [
  {
    id: '1',
    title: 'A New Sense of Peace',
    content: 'Since SAP arrived, our teachers focus on teaching, not the doors. The presence of professional veterans is calming.',
    author: 'Principal Linda Thompson',
    location: 'St. Jude Elementary',
    imageUrl: 'https://picsum.photos/800/600?random=10'
  },
  {
    id: '2',
    title: 'My Second Mission',
    content: 'I retired from the force feeling like my job was done. SAP gave me a new purpose: protecting the next generation.',
    author: 'Sgt. Mark Rodriguez (Ret.)',
    location: 'Patrol Officer',
    imageUrl: 'https://picsum.photos/800/600?random=11'
  },
  {
    id: '3',
    title: 'Precision in Action',
    content: 'The technical depth and professional conduct of the patrol team exceed all our previous security experiences.',
    author: 'Pastor John Helder',
    location: 'Grace Community Church',
    imageUrl: 'https://picsum.photos/800/600?random=12'
  }
];
