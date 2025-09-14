import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// Components array
const services = [
  {
    title: "Web Design & Development",
    href: "/services/web-design",
    description: "Modern, responsive websites tailored to your business needs.",
  },
  {
    title: "Chatbot Integration",
    href: "/services/chatbots",
    description: "Website & WhatsApp bots that automate lead generation.",
  },
  {
    title: "Business Process Automation",
    href: "/services/automation",
    description: "Automate payments, bookings, and workflows for efficiency.",
  },
  {
    title: "Ongoing Maintenance & Support",
    href: "/services/support",
    description: "Keep your site secure, updated, and running smoothly.",
  },
];

function Navigation() {
  return (
    <div className="bg-background">
      <NavigationMenu>
        <NavigationMenuList className="text-white p-3">
          {/* Home Dropdown*/}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mt-4 mb-2 text-lg font-medium">
                        Turtle Design
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        Creative digital agency building modern websites,
                        brands, and online experiences.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="About Us">
                  Learn more about who we are and our mission to help businesses
                  grow online.
                </ListItem>
                <ListItem href="/docs/installation" title="Our Services">
                  Explore our design, development, branding, and digital
                  marketing solutions.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Portfolio">
                  View some of the projects we’ve delivered for clients
                  worldwide.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Services Dropdown*/}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {services.map((service) => (
                  <ListItem
                    key={service.title}
                    title={service.title}
                    href={service.href}
                  >
                    {service.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Portfolio Dropdown*/}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Portfolio</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-4">
                {/* <h3 className="mb-2 text-lg font-semibold">Our Work</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Explore some of the projects we’ve delivered for clients.
                </p> */}
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem href="/portfolio/web" title="Web Development">
                    Showcasing responsive, modern websites we’ve built for
                    startups and businesses.
                  </ListItem>
                  <ListItem href="/portfolio/chatbots" title="Chatbot Projects">
                    See how our chatbot solutions improved customer engagement
                    and lead generation.
                  </ListItem>
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Contact Dropdown*/}
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/docs">Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

// ListItem component
function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export { services, ListItem };

export default Navigation;
