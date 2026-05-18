import "@/app/(public)/public.css";

import PublicHeader from "@/components/header/PublicHeader";
import PublicFooter from "@/components/footer/PublicFooter";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        {/* <PublicHeader /> */}
      </header>
      
      <main>
        {children}
      </main>

      <footer>
        {/* <PublicFooter /> */}
      </footer>
    </>
  );
}

