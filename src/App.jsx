import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now, just show success message
    setIsSubmitted(true)
    console.log('Email submitted:', email)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {/* Header */}
      <header className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-sm text-cyan-300">
            Recover88<br />
            <span className="text-xs text-gray-400">Fair cart recovery. Guaranteed ROI.</span><br />
            <span className="text-xs text-cyan-400">Pioneers today. Founders tomorrow.</span>
          </div>
          <div className="text-sm text-gray-400">
            pioneers.recover88.com
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-gray-400 text-lg mb-6 tracking-wider">BUILDING IN PUBLIC</p>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 neon-text">
              Recover88
            </h1>
            <div className="flex items-center justify-center gap-8 mb-8">
              <p className="text-xl md:text-2xl text-gray-300">
                Behavioral Science SaaS for<br />Shopify Merchants
              </p>
              <div className="neon-infinity text-6xl">∞</div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Stop Losing Revenue to Abandoned Carts.
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Recover88 is the first behavioral-science-powered recovery engine with a money-back guarantee. 
            Join the waiting list to be the first to try it.
          </p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
              <div className="flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-cyan-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
                <Button 
                  type="submit"
                  className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg neon-button"
                >
                  👉 Join the Waiting List
                </Button>
              </div>
            </form>
          ) : (
            <div className="max-w-md mx-auto mb-8 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
              <p className="text-green-400 font-semibold">✅ You're on the list!</p>
              <p className="text-gray-300 text-sm mt-2">We'll notify you when we launch the MVP.</p>
            </div>
          )}
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-6 py-12 text-center border-t border-gray-700/50">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400">
            Built in public. Follow the journey on X{' '}
            <a href="https://x.com/Recover88X" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
              @Recover88X
            </a>
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-slate-800/50 rounded-lg border border-cyan-500/20">
              <div className="text-4xl mb-4">💵</div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Guaranteed ROI</h3>
              <p className="text-gray-300">
                If we don't recover $279 in revenue for you in the first month, you get your subscription refunded.
              </p>
            </div>
            
            <div className="text-center p-6 bg-slate-800/50 rounded-lg border border-cyan-500/20">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Beyond Emails</h3>
              <p className="text-gray-300">
                Recover88 uses behavioral science, not just standard reminders, to bring customers back.
              </p>
            </div>
            
            <div className="text-center p-6 bg-slate-800/50 rounded-lg border border-cyan-500/20">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Fair & Transparent</h3>
              <p className="text-gray-300">
                Flat subscription + commission only when we recover real revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500">
                <span className="text-2xl font-bold text-cyan-400">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Customer abandons cart</h3>
              <p className="text-gray-400">Triggered in Recover88</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500">
                <span className="text-2xl font-bold text-cyan-400">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Behavioral engine engages</h3>
              <p className="text-gray-400">Email, SMS, or push designed to convert</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500">
                <span className="text-2xl font-bold text-cyan-400">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">You recover revenue</h3>
              <p className="text-gray-400">Tracked transparently in your dashboard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Be first in line when we launch the MVP.</h2>
          <p className="text-xl text-gray-300 mb-8">
            Only waiting list subscribers will get early access and priority invites to the Founders Club.
          </p>
          
          {!isSubmitted ? (
            <Button 
              onClick={() => document.querySelector('input[type="email"]')?.focus()}
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg text-lg neon-button"
            >
              👉 Join the Waiting List
            </Button>
          ) : (
            <div className="inline-block p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
              <p className="text-green-400 font-semibold">✅ You're already on the list!</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>
            Recover88 © 2025 | Building in public |{' '}
            <a href="https://x.com/Recover88X" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
              Follow us on X
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

