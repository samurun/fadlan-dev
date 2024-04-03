export interface IBlog {
  createdAt: string;
  name: string;
  image: string;
  views: string;
  updatedAt: string;
  content: string;
  id: string;
}

export interface IProject {
  name: string;
  image: string;
  description: string;
  stacks: string[];
  git_url?: string;
  url: string;
}
