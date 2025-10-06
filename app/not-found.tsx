"use client";

import { useRouter } from "next/navigation";
import css from "./Home.module.css";
import { useEffect } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Non-existent page",
  description: "This page does not exist",
  openGraph: {
    title: "Non-existent page",
    description: "This page does not exist",
    url: `/app/not-found.tsx`,
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Non-existent page`,
    description: "This page does not exist",
    images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"],
  },
};

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push("/"), 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
        <br />
        <br />
        You will be redirected to the homepage in a while
      </p>
    </>
  );
};

export default NotFound;
