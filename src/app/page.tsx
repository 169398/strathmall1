import Image from "next/image";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import Link from "next/link";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description: " Get your products right away in your email",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description: " Get quality verified products ",
  },
  {
    name: "For the planet",
    Icon: Leaf,
    description:
      " We've pledged 1% of sales to the preservation of the natural environment ",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tranking-tight text-gray-950 sm:text-6xl">
            Your marketplace for high-quality{" "}
            <span className="text-pink-700">products</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to StrathMall.Every product on this platform is verified by
            our team to ensure our highest quality standards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products " className={buttonVariants()}>
              Browse Trending
            </Link>

            <Button variant="ghost">our quality promise &rarr;</Button>
          </div>
        </div>

        {/* TO DO: List products */}
      </MaxWidthWrapper>

      <section className="border-t border-grray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className=" grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg-gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-accent-foreground"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full text-pink-400">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className=" mt-6 md:ml-4  md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
