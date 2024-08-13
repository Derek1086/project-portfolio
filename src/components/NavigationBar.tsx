import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const tabs = [
  { name: "Home" },
  { name: "About" },
  { name: "Projects" },
  { name: "Skills" },
  { name: "Contact" },
];

export function NavigationBar() {
  const autoScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black p-2 flex items-center justify-center w-full fixed top-0 left-1/2 transform -translate-x-1/2">
      <NavigationMenu>
        <NavigationMenuList className="flex justify-center">
          {tabs.map((tab) => (
            <NavigationMenuItem key={tab.name}>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                onClick={() => autoScroll(tab.name)}
              >
                {tab.name}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
