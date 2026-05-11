'use client'

import React from 'react'

export default function LoyaltyCalculator() {
  const levels = [
    {
      name: 'Silver',
      min: 20000,
      roi: 8.5,
      bonus: 40000,
      apy: 35,
      color: 'from-zinc-700 to-zinc-900',
      border: 'border-zinc-500',
    },
    {
      name: 'Gold',
      min: 30000,
      roi: 12.8,
      bonus: 60000,
      apy: 55,
      color: 'from-yellow-700 to-yellow-900',
      border: 'border-yellow-500',
    },
    {
      name: 'Obsidian',
      min: 50000,
      roi: 18.2,
      bonus: 100000,
      apy: 80,
      color: 'from-amber-600 to-yellow-900',
      border: 'border-amber-400',
    },
  ]

  const [investment, setInvestment] = React.useState(20000)

  const currentLevel =
    investment >= 50000
      ? levels[2]
      : investment >= 30000
      ? levels[1]
      : levels[0]

  const baseAmount = investment * currentLevel.roi
  const loyaltyBonus = currentLevel.bonus
  const apyEarnings = baseAmount * (currentLevel.apy / 100)
  const balance = baseAmount + loyaltyBonus + apyEarnings

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
            Loyalty Level Calculator
          </h1>

          <p className="text-zinc-400 text-xl">
            Invest from $20,000 and unlock premium rewards.
          </p>
        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-10">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-4xl font-bold mb-2">
                {currentLevel.name} Level
              </h2>

              <p className="text-zinc-500 mb-8">
                Your Current Tier
              </p>

              <div className="bg-black border border-zinc-800 rounded-2xl p-6 mb-6">
                <div className="text-zinc-500 mb-2">
                  Your Investment
                </div>

                <input
                  type="number"
                  min={20000}
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="bg-transparent outline-none text-4xl font-bold w-full"
                />
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {[20000, 30000, 50000].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setInvestment(amount)}
                    className="bg-zinc-900 border border-zinc-700 rounded-2xl py-4 text-xl font-bold hover:border-yellow-400 transition-all"
                  >
                    ${amount.toLocaleString()}
                  </button>
                ))}
              </div>

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=cryptoex585@gmail.com&su=${encodeURIComponent(
                  `Loyalty Program: ${currentLevel.name}`
                )}&body=${encodeURIComponent(
                  `Hello, I want to activate the ${currentLevel.name} Level.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full bg-white text-black font-bold text-2xl rounded-2xl py-5 hover:bg-yellow-400 transition-all"
              >
                Join Loyalty Program →
              </a>
            </div>

            <div
              className={`rounded-[32px] border ${currentLevel.border} bg-gradient-to-br ${currentLevel.color} p-8`}
            >
              <div className="text-center mb-8">
                <div className="text-6xl font-black text-yellow-300 mb-2">
                  {currentLevel.roi}x
                </div>

                <div className="text-zinc-200 text-lg">
                  ROI after 1 year
                </div>
              </div>

              <div className="space-y-5 text-xl">
                <div className="flex justify-between">
                  <span>Base Amount</span>
                  <span>${Math.round(baseAmount).toLocaleString()}</span>
                </div>

                <div className="flex justify-between">
                  <span>Loyalty Bonus</span>
                  <span>+${Math.round(loyaltyBonus).toLocaleString()}</span>
                </div>

                <div className="flex justify-between">
                  <span>APY Earnings</span>
                  <span>${Math.round(apyEarnings).toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-10 border-t border-white/10 pt-6">
                <div className="text-zinc-300 mb-2">
                  Estimated Balance
                </div>

                <div className="text-5xl font-black text-yellow-300">
                  ${Math.round(balance).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
