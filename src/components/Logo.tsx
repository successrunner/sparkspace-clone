import LogoIcon from '@/assets/icons/logo.svg?react';

const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      <LogoIcon className="h-10 w-10" />
      <h1 className="font-baloo text-3xl font-bold">Spark Space</h1>
    </div>
  );
};

export default Logo;
