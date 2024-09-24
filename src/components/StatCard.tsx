interface StatCardProps {
  count: number;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ count, label }) => {
  return (
    <div className="flex-1 space-y-4 rounded-lg bg-gray-50 p-10 sm:min-w-[280px] sm:max-w-[420px]">
      <p className="text-primaryText text-[40px] font-semibold leading-[48px]">
        {count.toLocaleString()}
      </p>
      <h3 className="text-primaryText text-base font-bold">{label}</h3>
    </div>
  );
};

export default StatCard;
