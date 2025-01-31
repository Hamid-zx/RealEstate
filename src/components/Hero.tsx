import { HERO } from "@/constants";
import SearchForm from "./SearchForm";

const Hero = () => {
  return (
    <section className="hero flex min-h-screen items-center justify-center">
        <div className="flex max-w-4xl flex-col items-center gap-6 pb-10 px-4">
            <div className="space-y-4 mt-20">
                <h1 className="m-4 text-center text-3xl text-white md:text-5xl lg:text-6xl">
                    {HERO.title}
                </h1>
                <p className="p-4 text-center text-slate-300">
                    {HERO.description}
                </p>
            </div>
            <SearchForm />
        </div>
    </section>
  )
}

export default Hero;