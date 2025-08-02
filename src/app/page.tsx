"use client";

import { Button } from "@/components/ui/button";
import { useCurrent } from "@/features/auth/api/use-current";
import { useLogout } from "@/features/auth/api/use-logout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const { data, isLoading } = useCurrent();
  const router = useRouter();

  const { mutate } = useLogout();

  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/sign-in");
    }
  }, [data]);

  return (
    <div>
      Only visible to authenticated users. Welcome, {data?.name || "Guest"}!
      <Button onClick={() => mutate()}>Logout</Button>
    </div>
  );
};
export default Home;
