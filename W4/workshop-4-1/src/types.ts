export type Level = 'Beginner' | 'Intermediate' | 'Advanced'

export interface Skill {
  name: string
  level?: Level
}

export interface UserData {
  id: string | number
  name: string
  email: string
  isOnline: boolean
  skills: Skill[]
}
export interface Skill {
  name: string;
  level?: "Beginner" | "Intermediate" | "Advanced";
}

export interface UserData {
  id: number | string;
  name: string;
  email: string;
  avatarUrl?: string;
  isOnline: boolean;
  skills: Skill[];
}
