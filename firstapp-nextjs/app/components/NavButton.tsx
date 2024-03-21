import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavButton = () => {
  const router = useRouter();

  return (
    <Button variant="outline">
      <Link href="..">Back</Link>
    </Button>
  );
};

export default NavButton;
