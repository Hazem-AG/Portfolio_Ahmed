import type { CaseStudy } from "../types";

import caseStudy1 from "../assets/CaseStudies/1.png";
import caseStudy2 from "../assets/CaseStudies/2.png";
import caseStudy3 from "../assets/CaseStudies/3.png";

export const CASE_STUDIES: CaseStudy[] = [
  {
    client: "Men's Sports Shoes",
    industry: "E-commerce",
    objective: "Scale Sales & Maximize Revenue",
    results: {
      adSpend: "150K+ EGP",
      orders: "5,000+",
      revenue: "2.5M+ EGP",
    },
    img: caseStudy2,
  },
  {
    client: "Cosmetics & Beauty Products",
    industry: "Beauty & Skincare",
    objective: "Increase Online Sales",
    results: {
      adSpend: "85K+ EGP",
      orders: "2,000+",
      revenue: "1.7M+ EGP",
    },
    img: caseStudy3,
  },
  {
    client: "Men's Polo Collection",
    industry: "Fashion",
    objective: "Drive Sales & Scale Growth",
    results: {
      adSpend: "120K+ EGP",
      orders: "4,500+",
      revenue: "3M+ EGP",
    },
    img: caseStudy1,
  },
];