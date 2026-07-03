import { Terminal, LifeBuoy } from "lucide-react";
import {
  SiHtml5,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiPhp,
  SiPython,
  SiReact,
  SiGithub,
  SiDocker,
  SiLinux,
} from "react-icons/si";

export const SKILL_CATEGORIES = [
  {
    label: "Développement web",
    skills: [
      { name: "HTML / CSS", level: 70, icon: SiHtml5 },
      { name: "JavaScript", level: 68, icon: SiJavascript },
      { name: "TailwindCSS", level: 80, icon: SiTailwindcss },
      { name: "Bootstrap", level: 90, icon: SiBootstrap },
      { name: "PHP", level: 40, icon: SiPhp },
    ],
  },
  {
    label: "Langages & Frameworks",
    skills: [
      { name: "Python", level: 80, icon: SiPython },
      { name: "React Native", level: 30, icon: SiReact },
    ],
  },
  {
    label: "Outils & Systèmes",
    skills: [
      { name: "Git / GitHub", level: 70, icon: SiGithub },
      { name: "Docker", level: 70, icon: SiDocker },
      { name: "Linux", level: 80, icon: SiLinux },
      { name: "PowerShell", level: 60, icon: Terminal },
      { name: "GLPI", level: 90, icon: LifeBuoy },
    ],
  },
];
