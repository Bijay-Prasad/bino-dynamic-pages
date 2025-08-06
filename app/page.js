import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { TextAnimate } from "@/components/magicui/text-animate";
import { AuroraText } from "@/components/magicui/aurora-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { SparklesText } from "@/components/magicui/sparkles-text";


export default async function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100 flex flex-col items-center justify-center py-20 px-4">
      <AnimatedSection className="w-full max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-black-200 via-zinc-200 to-zinc-100 bg-clip-text text-transparent mb-4 drop-shadow-lg">
          <SparklesText className={"font-bold text-4xl sm:text-6xl text-black"}>Dynamic Page Builder</SparklesText><AuroraText className={"text-2xl sm:text-4xl"}>for bino.bot</AuroraText>
        </h1>
        <div className="text-lg text-black/80 mb-6 font-medium">
          <TypingAnimation className={"font-medium text-lg"}>
            Instantly create brand-new pages via API.
          </TypingAnimation>
          <span className="block mt-2 text-base text-black/60">
            <TextAnimate delay={4}>Powered by Next.js, with 5 reusable components and live demo pages.</TextAnimate>
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
          <Link href="/example-1" className="transition-all duration-300 px-6 py-3 rounded-xl bg-white/80 shadow-lg hover:scale-105 hover:bg-blue-200 font-semibold text-blue-700 border border-blue-300">
            🚀 Demo: Example Page 1
          </Link>
          <Link href="/example-2" className="transition-all duration-300 px-6 py-3 rounded-xl bg-white/80 shadow-lg hover:scale-105 hover:bg-pink-200 font-semibold text-pink-700 border border-pink-300">
            🎨 Demo: Example Page 2
          </Link>
        </div>
        <Link
          href="/create"
          className="inline-block mt-4 rounded-full border border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold shadow-xl hover:scale-105 transition-all text-lg"
        >
        <InteractiveHoverButton className={"text-black/40"}>Create a New Page</InteractiveHoverButton>
          {/* ➕ Create a New Page */}
        </Link>
      </AnimatedSection>

      <AnimatedSection className="w-full max-w-xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 mt-8">
        <h2 className="text-2xl font-bold text-center mb-4 text-purple-700">How It Works</h2>
        <ul className="text-left text-gray-700 text-base space-y-2">
          <li>• POST <span className="font-mono bg-gray-100 px-2 py-1 rounded">/api/pages</span> with a JSON body:</li>
          <li className="ml-4">
            <span className="font-mono text-xs bg-gray-50 px-2 py-1 rounded">
              {"{ slug, components: [{ type, props }, ...] }"}
            </span>
          </li>
          <li>• On success, visit <span className="font-mono bg-gray-100 px-2 py-1 rounded">/{`{slug}`}</span> to see your new page instantly.</li>
          <li>• Demo pages above show live examples.</li>
        </ul>
        <div className="mt-6 text-center">
          <span className="text-sm text-gray-500">See README for API usage and sample <span className="font-mono">curl</span> command.</span>
        </div>
      </AnimatedSection>
    </div>
  );
}