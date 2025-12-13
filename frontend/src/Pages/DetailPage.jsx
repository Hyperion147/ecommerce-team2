// detail page - Aman jangra 
import { useParams } from "react-router-dom";
import { AboutHero } from "../Components/AboutHero";

export default function DetailPage() {
  const { id } = useParams();
  
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center px-4 py-10">
      <AboutHero productId={id} />
    </div>
  );
}
