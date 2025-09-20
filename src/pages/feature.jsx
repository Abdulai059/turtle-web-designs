import {
  MonitorSmartphone,
  MessageSquare,
  Rocket,
  Workflow,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Header } from "../components/header";

// Create feature data arrays for left and right columns
const leftFeatures = [
  {
    icon: MonitorSmartphone,
    title: "Responsive & Modern Design",
    description:
      "Websites that look stunning and perform seamlessly across mobile, tablet, and desktop.",
    position: "left",
    cornerStyle: "sm:translate-x-4 sm:rounded-br-[2px]",
  },
  {
    icon: MessageSquare,
    title: "AI-Powered Chatbots",
    description:
      "Engage customers 24/7 with smart bots on your website or WhatsApp for sales and support.",
    position: "left",
    cornerStyle: "sm:-translate-x-4 sm:rounded-br-[2px]",
  },
  {
    icon: Rocket,
    title: "Performance Driven",
    description:
      "Optimized for speed, SEO, and conversions—your site won’t just look good, it will deliver results.",
    position: "left",
    cornerStyle: "sm:translate-x-4 sm:rounded-tr-[2px]",
  },
];

const rightFeatures = [
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "Streamline workflows with integrated payments, bookings, and CRM systems.",
    position: "right",
    cornerStyle: "sm:-translate-x-4 sm:rounded-bl-[2px]",
  },
  {
    icon: Layers,
    title: "Scalable Solutions",
    description:
      "From startups to enterprises, our solutions grow with your business needs.",
    position: "right",
    cornerStyle: "sm:translate-x-4 sm:rounded-bl-[2px]",
  },
  {
    icon: ShieldCheck,
    title: "Ongoing Support",
    description:
      "We keep your website secure, updated, and ready for the future.",
    position: "right",
    cornerStyle: "sm:-translate-x-4 sm:rounded-tl-[2px]",
  },
];

// Feature card component
const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;
  return (
    <div>
      <div
        className={cn(
          "relative rounded-2xl px-4 pt-4 pb-4 text-sm",
          "bg-secondary/50 ring-border ring",
          feature.cornerStyle,
        )}
      >
        <div className="text-primary mb-3 text-[2rem]">
          <Icon />
        </div>
        <h2 className="text-foreground mb-2.5 text-2xl">{feature.title}</h2>
        <p className="text-muted-foreground text-base text-pretty">
          {feature.description}
        </p>
        {/* Decorative elements */}
        <span className="from-primary/0 via-primary to-primary/0 absolute -bottom-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r opacity-60"></span>
        <span className="absolute inset-0 bg-[radial-gradient(30%_5%_at_50%_100%,hsl(var(--primary)/0.15)_0%,transparent_100%)] opacity-60"></span>
      </div>
    </div>
  );
};

export default function Feature() {
  return (
    <section className="min-h-screen w-full pt-20 pb-8 sm:pt-35" id="features">
      <Header />

      <div className="mx-6 max-w-[1120px] pt-2 pb-16 max-[300px]:mx-4 min-[1150px]:mx-auto">
        <div className="flex flex-col-reverse gap-6 md:grid md:grid-cols-3 md:items-center">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {leftFeatures.map((feature, index) => (
              <FeatureCard key={`left-feature-${index}`} feature={feature} />
            ))}
          </div>

          {/* Center column */}
          <div className="order-[1] mb-6 flex flex-col items-center text-center sm:order-[0] md:mb-0">
            <div className="bg-secondary text-foreground ring-border relative mb-4.5 w-fit rounded-full rounded-bl-[2px] px-4 py-2 text-sm ring">
              <span className="relative z-1 flex items-center gap-2">
                Features
              </span>
              <span className="from-primary/0 via-primary to-primary/0 absolute -bottom-px left-1/2 h-px w-2/5 -translate-x-1/2 bg-gradient-to-r"></span>
              <span className="absolute inset-0 bg-[radial-gradient(30%_40%_at_50%_100%,hsl(var(--primary)/0.25)_0%,transparent_100%)]"></span>
            </div>
            <h2 className="text-foreground mb-2 text-2xl sm:mb-2.5 md:text-[2rem]">
              Key Benefits of Working With Us
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[18rem] text-pretty">
              We don’t just build websites—we create smart, scalable, and
              automated solutions designed to grow your business.
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {rightFeatures.map((feature, index) => (
              <FeatureCard key={`right-feature-${index}`} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
