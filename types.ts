export interface navLinksType {
  id: number;
  path: string;
  label: string;
}
export interface partnersType {
  id: number;
  name: string;
  imgURL: string;
  width: number;
  height: number;
}
export interface featuresType {
  id: number;
  icon: string;
  title: string;
  context: string;
}
export interface testimonialType {
  id?: number;
  imgURL: string;
  quote: string;
  author: string;
  position: string;
}
export interface metricsType {
  id: number;
  icon: string;
  stats: string;
  description: string;
}
