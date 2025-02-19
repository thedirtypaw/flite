"use server";

import Image from "next/image";
import { FliteProtein } from "../components/fliteProtein/FliteProtein";
import { NavItem } from "../components/fliteProtein/NavItem";
import { HeroText } from "../components/fliteProtein/HeroText";
import { HeroImage } from "../components/fliteProtein/HeroImage";
import { getArticles } from "@/lib/articles";


export default async function Home() {
  const articles = await getArticles();
  return (
    <>
    
      {/* Other page content */}
      <main>
      <div className="min-h-screen">
      {/* Insert the navigation bar at the top */}
      <FliteProtein/>
      </div>
       
      </main>
    
    </>
  );
}
