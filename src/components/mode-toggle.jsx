// src/components/mode-toggle.jsx
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setTheme("light")}
        className="rounded-md border px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <Sun className="h-5 w-5" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className="rounded-md border px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <Moon className="h-5 w-5" />
      </button>
      <button
        onClick={() => setTheme("system")}
        className="rounded-md border px-2 py-1 text-sm"
      >
        System
      </button>
    </div>
  );
}
