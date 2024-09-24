import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { FOOTER_MENUS } from '@/lib/constants';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className="sticky top-0 z-50 mx-auto flex max-w-screen-2xl items-center justify-between bg-transparent px-4 py-3 backdrop-blur-[8px]">
        <Logo />
        <Button>
          <Link to="/login">Sign Up Free</Link>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </nav>
      <main className="py-10">{children}</main>
      <footer className="mx-auto max-w-screen-2xl p-4 sm:px-4 sm:py-6">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Logo />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6">
            {FOOTER_MENUS.map((menu) => (
              <div key={menu.title}>
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">
                  {menu.title}
                </h2>
                <ul className="text-gray-600">
                  {menu.links.map((link) => (
                    <li key={link.name} className="mb-4">
                      <a href={link.url} className="hover:underline">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="text-sm text-gray-500 sm:text-center">
          © 2024{' '}
          <a href="https://flowbite.com" className="hover:underline">
            Spark Space™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
};

export default MainLayout;
