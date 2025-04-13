export const dynamic = "force-static";

import Image from "next/image";
import { FliteProtein } from "../components/fliteProtein/FliteProtein";
import { HeaderItems } from "../components/fliteProtein/Header";
import { HeroText } from "../components/fliteProtein/HeroText";
import { HeroImage } from "../components/fliteProtein/HeroImage";
import { getLimitedArticles } from "@/lib/articles";

export default async function Home() {
  const articles = await getLimitedArticles(4);
  return (
    <main>
      <div className="min-h-screen">
        <FliteProtein />
      </div>
    </main>
  );
}
