import "@/app/(public)/public.css";

import PublicHeader from "@/components/header/PublicHeader";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PublicHeader />
      <main>
        {children}
      </main>
    </>
  );
}

