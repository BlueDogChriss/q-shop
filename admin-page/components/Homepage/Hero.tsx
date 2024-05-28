import Link from "next/link"
import { Button } from "../ui/button";
import { buttonVariants } from "../ui/button";
import { HeroCards } from "./HeroCards";


export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#b859d0]  to-[#f257f2] text-transparent bg-clip-text">
              Q-Shop!
            </span>{" "}
            Turn Your Vision
          </h1>{" "}
          into a{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            Marketplace Reality
            </span>{" "}
            Effortlessly
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Build, manage, and scale your dream marketplace with our all-in-one SaaS platform.  No coding required.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3 bg-violet-600">
            <Link href="/login">Get Started</Link>
            </Button>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};