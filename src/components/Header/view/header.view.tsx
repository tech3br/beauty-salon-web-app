import Image from 'next/image';
import Link from 'next/link';

import { menuLinks } from '@/mocks/menuLinks';

import {
  headerContainerStyles,
  headerLogoStyles,
  headerNavigationStyles,
  headerNavigationUlStyles,
  headerStyles,
  menuLinkItemStyles,
} from '../styles/header.styles';

export function HeaderView() {
  return (
    <header className={headerStyles}>
      <div className={headerContainerStyles}>
        <div className={headerLogoStyles}>
          <Image
            src="assets/images/logo.svg"
            width={164}
            height={24}
            alt="Logo"
          />
        </div>

        <nav className={headerNavigationStyles}>
          <ul className={headerNavigationUlStyles}>
            {menuLinks.map((menuLinkItem) => (
              <li key={menuLinkItem.title}>
                <Link className={menuLinkItemStyles} href={menuLinkItem.href}>
                  {menuLinkItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
