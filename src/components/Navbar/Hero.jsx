import Background from "./Background";
import Title from "./Title";
import GlassButton from "./ButtonHero";
import Decorations from "./Decorations";

export default function Hero() {
  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-hidden">
      <Background />
      <Decorations />
      <Title />

      {/* Buttons */}
      <div className="absolute top-[20%] right-[10%]">
        <GlassButton
          href="https://dribbble.com/shots/23181733-Blurry-Glassmorphic-Modern-Landing-page"
          label="View Source"
          variant="primary"
        />
      </div>
      <div className="absolute right-[11%] bottom-[13%]">
        <GlassButton
          href="https://youtu.be/1pW_sk-2y40"
          label="Watch Video"
          variant="accent"
        />
      </div>
      <div className="absolute bottom-[25%] left-[1%]">
        <GlassButton
          href="https://x.com/juxtopposed"
          label="Connect"
          variant="secondary"
        />
      </div>
    </div>
  );
}
