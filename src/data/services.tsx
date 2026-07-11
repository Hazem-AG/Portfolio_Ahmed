import type{ Service } from "../types/index";

import {
  Menu, X, ArrowRight, Download, ChevronRight, ChevronLeft,
  Target, Search, Users, Smartphone, PenTool,
  TrendingUp, Award, Mail, Phone, MapPin,
  MessageCircle, ArrowUp,
  MonitorPlay, CheckCircle2, Layout, Zap, PieChart, Filter
} from 'lucide-react';

export const SERVICES: Service[] = [
  {
    icon: <Target />,
    title: "Meta Ads",
    desc: "Full-funnel campaigns on Facebook & Instagram.",
  },
  {
    icon: <Search />,
    title: "Google Ads",
    desc: "Search, Display, and Performance Max campaigns.",
  },
  {
    icon: <MonitorPlay />,
    title: "TikTok Ads",
    desc: "High-engaging short-form video ad strategies.",
  },
  {
    icon: <Smartphone />,
    title: "Snapchat Ads",
    desc: "Capturing Gen Z and Millennial audiences.",
  },
  {
    icon: <Users />,
    title: "Social Media Management",
    desc: "Building brand communities and organic growth.",
  },
  {
    icon: <PenTool />,
    title: "Content Strategy",
    desc: "Data-backed content that converts.",
  },
  {
    icon: <Filter />,
    title: "Funnel Building",
    desc: "End-to-end customer journey optimization.",
  },
  {
    icon: <Layout />,
    title: "Landing Pages",
    desc: "High-converting pages optimized for ROAS.",
  },
  {
    icon: <Zap />,
    title: "Retargeting",
    desc: "Bringing back lost traffic with personalized ads.",
  },
  {
    icon: <PieChart />,
    title: "Analytics & Reporting",
    desc: "Deep dive insights using GA4 & Looker Studio.",
  },
];