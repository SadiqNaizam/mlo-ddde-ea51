import * as React from "react"
import { Link } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { BrainCircuit, Atom, Dna, CodeXml, Sigma, Rocket } from "lucide-react"

const academicDisciplines: { title: string; href: string; description: string; icon: React.ElementType }[] = [
  {
    title: "AI & Machine Learning",
    href: "/academics -hub",
    description: "Pioneering the future of intelligence, from neural networks to large language models.",
    icon: BrainCircuit,
  },
  {
    title: "Quantum Computing",
    href: "/academics -hub",
    description: "Exploring the fundamental fabric of reality to build the next generation of computers.",
    icon: Atom,
  },
  {
    title: "Bioengineering",
    href: "/academics -hub",
    description: "Engineering biological systems to solve challenges in health, materials, and energy.",
    icon: Dna,
  },
  {
    title: "Software Systems",
    href: "/academics -hub",
    description: "Architecting robust, scalable, and secure software for a connected world.",
    icon: CodeXml,
  },
  {
    title: "Applied Mathematics",
    href: "/academics -hub",
    description: "Developing the theoretical foundations that underpin all modern engineering.",
    icon: Sigma,
  },
  {
    title: "Aerospace Engineering",
    href: "/academics -hub",
    description: "Designing and building the next generation of aircraft and spacecraft.",
    icon: Rocket,
  },
]

const MegaMenu = () => {
  console.log("MegaMenu loaded")

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base bg-transparent hover:bg-accent focus:bg-accent">
            Academics
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-6 md:w-[600px] lg:w-[800px]">
              <div className="mb-4">
                <h3 className="text-xl font-heading text-primary">Explore Our Disciplines</h3>
                <p className="text-muted-foreground">
                  Discover the cutting-edge fields of study that define our institution.
                </p>
              </div>
              <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {academicDisciplines.map((discipline) => (
                  <ListItem
                    key={discipline.title}
                    title={discipline.title}
                    to={discipline.href}
                    icon={discipline.icon}
                  >
                    {discipline.description}
                  </ListItem>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        {/* Other top-level navigation items can be added here */}
        <NavigationMenuItem>
            <Link to="/admissions " className={navigationMenuTriggerStyle()}>
              Admissions
            </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <Link to="/faculty -directory" className={navigationMenuTriggerStyle()}>
              Faculty
            </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <Link to="/research & -innovation -hub" className={navigationMenuTriggerStyle()}>
              Research
            </Link>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

interface ListItemProps extends React.ComponentPropsWithoutRef<'a'> {
  title: string;
  to: string;
  icon: React.ElementType;
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, ListItemProps>(
  ({ className, title, children, to, icon: Icon, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref as any}
            to={to}
            className={cn(
              "flex select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none h-full transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="flex items-center mb-2">
              <Icon className="h-6 w-6 text-primary mr-3" />
              <div className="text-base font-medium font-heading">{title}</div>
            </div>
            <p className="text-sm leading-tight text-muted-foreground line-clamp-3">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = "ListItem"

export default MegaMenu