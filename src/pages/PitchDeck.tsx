
import PitchDeck from "@/components/PitchDeck";
import { useEffect } from "react";

const PitchDeckPage = () => {
  useEffect(() => {
    console.log("PitchDeckPage component mounted");
  }, []);

  return <PitchDeck />;
};

export default PitchDeckPage;
