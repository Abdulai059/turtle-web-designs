import { ExternalLink } from "lucide-react";
import { Spotlight } from "../ui/spotlight";

function aboutUs() {
  return (
    <section className="relative flex w-full justify-center overflow-hidden py-16 pt-20">
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(336, 100%, 50%, 0.08) 0, hsla(341, 100%, 55%, 0.04) 50%, hsla(336, 100%, 45%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(333, 100%, 85%, 0.08) 0, hsla(335, 100%, 55%, 0.04) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(332, 100%, 85%, 0.06) 0, hsla(327, 100%, 85%, 0.06) 80%, transparent 100%)"
      />

      <div className="max-w-xl space-y-12 px-5 text-center">
        <span className="rounded-full border px-4 py-2 text-xs tracking-wide">
          INSPIRATIONS ABOUT US
        </span>

        <div className="mt-9 flex items-center justify-center gap-2">
          <span className="h-8 w-8 rounded-full bg-red-500"></span>
          <h2 className="text-3xl font-bold">Building the Future</h2>
        </div>
        <p className="text-muted-foreground mb-16 text-base leading-relaxed sm:text-lg">
          We’re shaping the future of businesses through modern web design and
          intelligent automation blending creativity, performance, and
          innovation to drive sustainable growth and lasting impact.
        </p>

        <div className="space-y-3 text-lg">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2"
          >
            <span className="text-lg">Devouring Details</span>

            <span className="mx-2 flex-1 border-b border-dotted border-neutral-600"></span>

            {/* Icon */}
            <ExternalLink
              size={16}
              className="opacity-70 transition group-hover:opacity-100"
            />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2"
          >
            <span className="text-lg">Rauno.me</span>

            <span className="mx-2 flex-1 border-b border-dotted border-neutral-600"></span>

            <ExternalLink
              size={16}
              className="opacity-70 transition group-hover:opacity-100"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default aboutUs;
