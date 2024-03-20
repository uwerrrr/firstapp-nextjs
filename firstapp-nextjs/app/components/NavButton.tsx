"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const NavButton = () => {
  const router = useRouter();

  return (
    <Button variant="outline">
      <button
        onClick={() => {
          router.back();
        }}
      >
        Back
      </button>
    </Button>
  );
};

export default NavButton;
