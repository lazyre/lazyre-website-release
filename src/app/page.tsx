import ToggleThemeButton from "@/components/buttons/ToggleThemeButton";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="font-heading">This uses Space Grotesk</h1>
      <p className="font-sans">This uses Inter</p>
      <code className="font-mono">This uses Space Mono</code>
      <ToggleThemeButton />
    </>
  );
}
