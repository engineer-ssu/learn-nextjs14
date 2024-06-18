"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from '../styles/navigation.module.css';

export default function Navigation() {
      const path = usePathname();

    return (
        <nav>
            <ul>
                <li className={styles.nav}>
                    <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
                </li>
                <li>
                    <Link href="/about-us">About Us</Link>  {path === "/about-us" ? "🔥" : ""}
                </li>
                <li>
                    <Link href="/account">account</Link>  {path === "/accounts" ? "🔥" : ""}
                </li>
            </ul>
        </nav>
    )
}