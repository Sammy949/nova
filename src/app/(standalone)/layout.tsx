import UserButton from "@/features/auth/components/user-button";
import Image from "next/image";
import Link from "next/link";

interface StandaloneLayoutProps {
  children: React.ReactNode;
}

const StandaloneLayout = ({ children }: StandaloneLayoutProps) => {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex items-center justify-between h-[73px]">
          <Link href={"/"} className="flex items-center gap-2">
            <Image src="/logo.svg" alt="logo" width={40} height={20} />
            <h1 className="font-bold text-2xl">Nova</h1>
          </Link>
          <UserButton />
        </nav>
        <div className="flex flex-col items-center justify-center py-4">
          {children}
        </div>
      </div>
    </main>
  );
};
export default StandaloneLayout;
