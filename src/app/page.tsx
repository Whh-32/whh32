import Hero from "@/components/header/hero";
import Cat from "@/components/header/Cat";

export default function Home() {
  return (
    <div>
      <main className="w-full md:mt-56">
        <Hero />
        <div className="flex justify-center items-center relative w-full">
          <Cat />
        </div>
      </main>
    </div>
  );
}