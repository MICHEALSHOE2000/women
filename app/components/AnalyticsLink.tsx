"use client";
import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; eventName?: string; children: ReactNode };
export function trackEvent(eventName: string, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  const w = window as typeof window & { gtag?: (...args: unknown[]) => void; dataLayer?: unknown[] };
  w.dataLayer?.push({ event: eventName, ...params });
  w.gtag?.("event", eventName, params);
}
export default function AnalyticsLink({ href, eventName, children, onClick, ...props }: Props) {
  const click = (e: React.MouseEvent<HTMLAnchorElement>) => { if (eventName) trackEvent(eventName, { href }); onClick?.(e); };
  if (href.startsWith("/")) return <Link href={href} onClick={click} {...props}>{children}</Link>;
  return <a href={href} onClick={click} {...props}>{children}</a>;
}
