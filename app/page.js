import Image from "next/image";
import { FliteProtein } from "../components/fliteProtein/FliteProtein";
import { NavItem } from "../components/fliteProtein/NavItem";
import { HeroText } from "../components/fliteProtein/HeroText";
import { HeroImage } from "../components/fliteProtein/HeroImage";




export default function Home() {
  return (
    <>
    <div style={{ fontFamily: '"Basic", sans-serif' }}>
  Test Title
</div>


    <div className="min-h-screen">
      {/* Insert the navigation bar at the top */}
      <FliteProtein/>

      {/* Other page content */}
      <main>
        <h1 className="text-2xl font-bold p-4">Welcome to the Landing Page</h1>
        {/* More content goes here */}
      </main>
    </div>
    </>
  );
}
