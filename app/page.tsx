import type { Metadata } from "next";
import HomeExperience from "@/components/HomeExperience";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
  alternates: { canonical: "/" },
};

export default function Page() {
  return <HomeExperience />;
}
