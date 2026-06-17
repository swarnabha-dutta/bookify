import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Plus } from 'lucide-react'

const steps = [
  {
    number: "1",
    title: "Upload PDF",
    description: "Add your book file",
  },
  {
    number: "2",
    title: "AI Processing",
    description: "We analyze the content",
  },
  {
    number: "3",
    title: "Voice Chat",
    description: "Discuss with AI",
  },
];
const HeroSection = () => {
  return (
    <section className="library-hero-card wrapper pt-28 mb-10 md:mb-16">
        <div className="library-hero-content lg:items-center lg:gap-10">
          {/* Left - Hero Text */}
          <div className="library-hero-text max-w-[320px]">
            <h1 className="library-hero-title text-[48px] leading-[1.05] md:text-[54px]">
              Your Library
            </h1>
            <p className="library-hero-description max-w-[320px] text-[17px] leading-7 text-[#5a5964]">
              Convert your books into interactive AI conversations. Listen,
              learn, and discuss your favorite reads.
            </p>

            <Link
              href="/books/new"
              className="library-cta-primary mt-1 h-14 min-w-[175px] justify-center gap-2 rounded-[10px] px-5 py-3 text-[18px] font-semibold shadow-soft-sm"
            >
              <Plus className="size-5" strokeWidth={2.2} />
              <span>Add new book</span>
            </Link>
          </div>
          {/*Center - Desktop Illustration */}
          <div className="library-hero-illustration-desktop max-w-[360px] flex-[0.95]">
            <Image
              src="/assets/hero-illustration.png"
              alt="Vintage books, a globe, and a reading lamp"
              width={503}
              height={370}
              priority
              className="h-auto w-full max-w-[360px] object-contain"
            />
          </div>
          {/*Center - Mobile Illustration */}
          <div className="library-hero-illustration w-full lg:hidden">
            <Image
              src="/assets/hero-illustration.png"
              alt="Vintage books, a globe, and a reading lamp"
              width={503}
              height={370}
              priority
              className="h-auto w-full max-w-[310px] object-contain"
            />
          </div>
          {/* Right - Steps Card */}
          <div className="w-full max-w-[240px] shrink-0 lg:pr-4">
            <div className="library-steps-card w-full rounded-[12px] px-5 py-5 shadow-soft-sm lg:ml-auto">
              <ol className="space-y-6">
                {steps.map((step) => (
                  <li key={step.number} className="library-step-item gap-3">
                    <span className="library-step-number size-7 min-h-7 min-w-7 bg-transparent text-[13px]">
                      {step.number}
                    </span>
                    <div className="min-w-0 flex-1 space-y-0.5">
                      <h2 className="library-step-title text-[14px] leading-5">
                        {step.title}
                      </h2>
                      <p className="library-step-description text-[13px] leading-5 text-[#66636c]">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        
      </section>
  )
}

export default HeroSection