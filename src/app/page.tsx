import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image
        src="/assets/logo-icon-draft.png"
        alt="Logo"
        width={512}
        height={512}
      />
    </div>
  );
}
