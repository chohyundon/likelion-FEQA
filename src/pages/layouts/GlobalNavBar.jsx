import { memo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import S from './GlobalNavBar.module.css';
import { A11yHidden } from '@/components';
import navigationItems from '@/routes/navigation';

const assignActiveClassNames = ({ isActive }) => {
  const activeClassName = isActive ? S.active : '';
  return `${S.link} ${activeClassName} text-nowrap -outline-offset-2`.trim();
};

function GlobalNavBar() {
  const { pathname } = useLocation();

  return (
    <nav className="bg-white text-slate-800 w-full shadow-md">
      <A11yHidden as="h2">학습 주제</A11yHidden>
      <ul className="text-xs flex overflow-x-auto snap-x">
        {navigationItems
          .filter((route) => {
            return !route.path || !route.path.includes(':');
          })
          .map((item) => {
            const isActive = pathname === item.path;

            return (
              <li key={item.id} className="snap-center">
                <NavLink
                  to={item.path}
                  tabIndex={isActive ? -1 : null}
                  className={assignActiveClassNames}
                >
                  {item.text}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}

export default memo(GlobalNavBar);
