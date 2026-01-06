
export enum Role {
  GUARD = 'GUARD',
  SCHOOL = 'SCHOOL',
  DONOR = 'DONOR'
}

export interface StatItem {
  label: string;
  value: string;
  description: string;
  icon: string;
}

export interface Expert {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  credentials: string[];
}

export interface SuccessStory {
  id: string;
  title: string;
  content: string;
  author: string;
  location: string;
  imageUrl: string;
}
