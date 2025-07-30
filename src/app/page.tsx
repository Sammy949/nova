import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div>
      <Button>Primary</Button>
      <Button variant={"secondary"}>Secondary</Button>
      <Button variant={"destructive"}>Destructive</Button>
      <Button variant={"ghost"}>Ghost</Button>
      <Button variant={"muted"}>Muted</Button>
      <Button variant={"outline"}>Outline</Button>
      <Button variant={"teritrary"}>Teritrary</Button>
    </div>
  );
};
export default Home;
