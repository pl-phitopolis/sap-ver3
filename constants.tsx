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
    label: 'Data-Verified Zones',
    value: '124+',
    description: 'Secured educational and religious infrastructure.',
    icon: 'School'
  },
  {
    label: 'Active Personnel',
    value: '2,500+',
    description: 'Elite Tier-1 veteran guardians.',
    icon: 'Shield'
  },
  {
    label: 'Operational Uptime',
    value: '100%',
    description: 'Uninterrupted institutional security monitoring.',
    icon: 'BarChart3'
  },
  {
    label: 'Tactical Patrol Hours',
    value: '450k+',
    description: 'Precision-logged mission duration.',
    icon: 'Clock'
  }
];

export const LEADERSHIP: Expert[] = [
  {
    name: 'Baron Davis',
    role: 'Founder & Executive Director',
    bio: 'CEO of Code Willing. With over 20 years of experience building mission-critical data infrastructure for global financial institutions, Baron founded SAP to apply institutional-grade engineering standards to community safety.',
    imageUrl: 'https://picsum.photos/400/500?random=1',
    credentials: ['Quantitative Risk Management', 'Enterprise Infrastructure', 'Strategic Security Command']
  },
  {
    name: 'Chief Sarah Miller',
    role: 'Director of Tactical Ops',
    bio: '20-year veteran of Law Enforcement Special Operations, specializing in the deployment of low-latency crisis intervention and stealth stewardship protocols.',
    imageUrl: 'https://picsum.photos/400/500?random=2',
    credentials: ['LEO Special Ops', 'Crisis Negotiation Expert', 'Operational Excellence Medal']
  },
  {
    name: 'Dr. Robert Chen',
    role: 'Advisory Board Chair',
    bio: 'Renowned expert in educational psychology and the data science of institutional security, focusing on the psychological impact of professional guardianship.',
    imageUrl: 'https://picsum.photos/400/500?random=3',
    credentials: ['PhD Psychology', 'Senior Security Fellow', 'Infrastructure Policy Analyst']
  }
];

export const STORIES: SuccessStory[] = [
  {
    id: '1',
    title: 'Operational Success Report 01',
    content: 'SAP implemented an infrastructure of safety that we previously thought was only possible for federal buildings. Their precision allows our educators to focus entirely on pedagogy.',
    author: 'Principal Linda Thompson',
    location: 'St. Jude Elementary',
    imageUrl: 'https://picsum.photos/800/600?random=10'
  },
  {
    id: '2',
    title: 'Operational Success Report 02',
    content: 'The transition from active unit to SAP felt natural. We apply the same high-throughput vetting and tactical rigor here that we used in high-stakes environments.',
    author: 'Sgt. Mark Rodriguez (Ret.)',
    location: 'Patrol Commander',
    imageUrl: 'https://picsum.photos/800/600?random=11'
  },
  {
    id: '3',
    title: 'Operational Success Report 03',
    content: 'Low-latency response and elite professionalism. SAP has transformed our sense of institutional security from a concern into a verified asset.',
    author: 'Pastor John Helder',
    location: 'Grace Community Church',
    imageUrl: 'https://picsum.photos/800/600?random=12'
  }
];