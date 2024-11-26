import { cn } from "../../lib/utils";

interface ICardProps {
  title: string;
  className?: string;
}

const Card = ({ title, className }: ICardProps) => {
  return (
    <div
      className={cn(
        "block h-full min-w-[300px] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center cursor-pointer",
        className
      )}
    >
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
    </div>
  );
};

export default Card;
