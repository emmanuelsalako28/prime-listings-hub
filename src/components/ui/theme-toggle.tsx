import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative"
      aria-label="Toggle theme"
    >
      <Sun className={`h-5 w-5 transition-all ${theme === 'dark' ? 'scale-0 rotate-90' : 'scale-100 rotate-0'}`} />
      <Moon className={`absolute h-5 w-5 transition-all ${theme === 'dark' ? 'scale-100 rotate-0' : 'scale-0 -rotate-90'}`} />
    </Button>
  );
}
