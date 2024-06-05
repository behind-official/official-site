'use client';

import "./globals.css";
import "./css/reset.css";
import "./css/sec_portfolio.css";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import Header from './section/header.js'
import Footer from './section/footer.js'


export default function RootLayout({ children }) {

  function test() {
    const router = useRouter;
    const pathname = usePathname();
    const element = useRef(null);

    if(pathname == '/') {
      element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      router.push("/")
      element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <html lang="en">
        <body className='sec_project_wrap'>
            {/* 헤더 */}
            <Header/>

            {/* 메인 */}
            {children}

            {/* 풋터 */}
            <Footer data={test}/>
        </body>
    </html>
  );
}
