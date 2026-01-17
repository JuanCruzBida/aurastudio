import { HeroSection } from "@/features/hero/HeroSection";
import { TalentRoster } from "@/features/talents/TalentRoster"; 
import { ServiceLevels } from "@/features/services/ServiceLevels";
import { Lookbook } from "@/features/work/Lookbook";
import { ProcessSection } from "@/features/process/ProcessSection"; // Importamos Proceso

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white">
      
      {/* 1. Portada */}
      <HeroSection />

      {/* 2. Roster (Talentos) */}
      <TalentRoster />

      {/* 3. Servicios (Tiers) */}
      <ServiceLevels />

      {/* 4. Portfolio (Lookbook) */}
      <Lookbook />

      {/* 5. Proceso y Manifiesto */}
      <ProcessSection />

    </main>
  );
}