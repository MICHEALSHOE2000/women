import Link from "next/link"; import { business } from "../data/site";
export const metadata={title:"Thank You",description:"Thank you for requesting an estimate from The Greatest Concrete Solutions."};
export default function ThankYou(){return <main id="main" className="thanks section-shell"><h1>Thank you for reaching out.</h1><p>Your estimate request can now be reviewed through Netlify Forms. If you need to add photos or details, call or text {business.phoneDisplay}.</p><Link className="button button-primary" href="/">Back to homepage</Link></main>}
