import { NavLink } from 'react-router';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { twMerge } from 'tailwind-merge';

type MenuLinkProps = {
  className?: string;
  to: string;
  label: string;
  onClick?: () => void;
};

export const MenuLink = ({ className, to, label, onClick }: MenuLinkProps) => {
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    twMerge(
      'sm:px-2 lg:px-4 py-6 px-0 py-1 sm:py-2 uppercase font-bold flex',
      className,
      isActive && 'border-bottom border-bottom-color-green-400 border-bottom-2',
    );
  return (
    <NavLink
      to={to}
      className={linkClasses}
      onClick={onClick}
      style={({ isActive }) =>
        isActive ? { color: '#22c55e', borderBottom: '1px solid #22c55e' } : { color: '' }
      }
    >
      <ArrowRightIcon className="w-4 h-4 mr-2 sm:hidden fill-green-300" />
      {label}
    </NavLink>
  );
};
