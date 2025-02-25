import { title } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <header className="relative w-full h-64 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-sky bg-repeat-x animate-scroll-sky"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-grass bg-repeat-x animate-scroll-grass"></div>
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>You&apos;re a Good Man</span>
          <br />
          <span className={title()}>Charlie Brown</span>
        </div>
      </header>
    </section>
  );
}
