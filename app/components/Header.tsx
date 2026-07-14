"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { business, navLinks } from "../data/site";
import AnalyticsLink from "./AnalyticsLink";
export default function Header() {
  const [open,setOpen]=useState(false); const panel=useRef<HTMLDivElement>(null); const btn=useRef<HTMLButtonElement>(null);
  useEffect(()=>{ if(!open) return; const first=panel.current?.querySelector<HTMLElement>('a,button'); first?.focus(); const key=(e:KeyboardEvent)=>{ if(e.key==='Escape'){setOpen(false); btn.current?.focus();}}; document.addEventListener('keydown',key); return()=>document.removeEventListener('keydown',key);},[open]);
  return <>
    <a className="skip-link" href="#main">Skip to content</a><div className="topbar">Woman-owned concrete contractor · Columbus, GA · Serving nearby GA + AL</div>
    <header className="site-header"><Link className="wordmark" href="/" aria-label={`${business.shortName} home`}><span>The Greatest</span><small>Concrete Solutions</small></Link><nav className="desktop-nav" aria-label="Primary">{navLinks.map(l=><a key={l.href} href={l.href}>{l.label}</a>)}</nav><div className="header-actions"><AnalyticsLink className="header-call" href={business.phoneHref} eventName="phone_click">Call</AnalyticsLink><Link className="header-estimate" href="/#estimate">Request Estimate</Link><button ref={btn} className="menu-button" aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(!open)}>Menu</button></div></header>
    <div id="mobile-menu" ref={panel} className="mobile-panel" hidden={!open}><nav aria-label="Mobile"><button className="menu-close" onClick={()=>{setOpen(false); btn.current?.focus();}}>Close</button>{navLinks.map(l=><a key={l.href} href={l.href} onClick={()=>setOpen(false)}>{l.label}</a>)}<AnalyticsLink href={business.phoneHref} eventName="phone_click">Call {business.phoneDisplay}</AnalyticsLink><Link href="/#estimate" onClick={()=>setOpen(false)}>Request Estimate</Link></nav></div>
  </>;
}
