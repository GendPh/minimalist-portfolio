export interface ProjectModel {
  id: number;
  title: string;
  description: string;
  img: {
    name: string;
    hero: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  tags: string[];
  link: string;
  codeLink: string;
}