import { Link } from 'react-router-dom';

import LogoIcon from '@/assets/icons/logo.svg?react';

const Logo = () => {
  return (
    <Link to="/" className="flex cursor-pointer items-center gap-4">
      <LogoIcon className="h-10 w-10" />
      <h1 className="font-baloo text-3xl font-bold">Spark Space</h1>
    </Link>
  );
};

export default Logo;
