export interface NavLink { name: string; href: string; }
export interface Stat { value: number; suffix: string; label: string; }
export interface Service { icon: React.ReactNode; title: string; desc: string; }
export interface SkillsData { platforms: string[]; technical: string[]; creative: string[]; }
export interface ResultItem { id: number; category: string; img: string; title: string; }
export interface CaseStudyResults {
  adSpend: string;
  orders: string;
  revenue: string;
}export interface CaseStudy { client: string; industry: string; objective: string; results: CaseStudyResults; img: string; }
export interface Testimonial { name: string; role: string; text: string; }