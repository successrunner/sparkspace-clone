import StatCard from '@/components/StatCard';
import { STATS } from '@/lib/constants';

const StatSection = () => {
  return (
    <section className="mx-auto flex max-w-screen-xl flex-col gap-2 px-4 py-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-10 lg:py-16">
      {STATS.map((stat) => (
        <StatCard key={stat.label} count={stat.count} label={stat.label} />
      ))}
    </section>
  );
};

export default StatSection;
