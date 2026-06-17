"use client"

import Image from "next/image"

type LoadingOverlayProps = {
  title?: string
}

const progressSteps = [
  "Preparing your manuscript",
  "Extracting literary details",
  "Setting up synthesis",
]

export default function LoadingOverlay({
  title = "Beginning synthesis...",
}: LoadingOverlayProps) {
  return (
    <div
      className="loading-wrapper"
      aria-live="polite"
      aria-busy="true"
      role="status"
    >
      <div className="loading-shadow-wrapper bg-[#f7f1e5]">
        <div className="loading-shadow">
          <Image
            src="/assets/loader.png"
            alt="Loading"
            width={72}
            height={72}
            className="loading-animation"
            priority
          />
          <div className="space-y-4 text-center">
            <h2 className="loading-title">{title}</h2>
            <div className="loading-progress">
              {progressSteps.map((step) => (
                <div key={step} className="loading-progress-item">
                  <span className="loading-progress-status" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
