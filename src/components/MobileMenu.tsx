import { Menu } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="sm:hidden">
        <Button variant="ghost" size="icon">
          <Menu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader hidden>
          <SheetTitle hidden></SheetTitle>
          <SheetDescription hidden></SheetDescription>
        </SheetHeader>
        <Link to="/">
          <Button>
            Sign Up Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
