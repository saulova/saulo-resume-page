import type { Site, Page, Links, Socials } from "@/types";

// Global
export const SITE: Site = {
  TITLE: "Saulo Alvarenga",
  DESCRIPTION: "Saulo's resume page.",
  AUTHOR: "Saulo Alvarenga",
};

export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Blog posts.",
};

export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/saulo-resume-page/",
  },
  {
    TEXT: "Blog",
    HREF: "/saulo-resume-page/blog",
  },
];

export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "saulo.va@protonmail.com",
    HREF: "mailto:saulo.va@protonmail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "saulova",
    HREF: "https://github.com/saulova",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "saulo-va",
    HREF: "https://www.linkedin.com/in/saulo-va",
  },
];
