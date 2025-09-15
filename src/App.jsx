import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [pioneerCount, setPioneerCount] = useState(847)
  const [todayJoined, setTodayJoined] = useState(37)
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Live counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setPioneerCount(prev => prev + 1)
        setTodayJoined(prev => prev + 1)
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (firstName && email) {
      setIsSubmitted(true)
      setPioneerCount(prev => prev + 1)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-cyan-400">
              Welcome to the Pioneer Club, {firstName}! 🎉
            </h1>
            <p className="text-xl mb-8">
              You are now Pioneer #{pioneerCount}. Get ready for launch day!
            </p>
            <div className="bg-white/5 border border-cyan-400/30 rounded-2xl p-8 backdrop-blur-lg">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">What happens next?</h2>
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <span className="text-cyan-400">✓</span>
                  <span>You'll get the launch email when we go live</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-cyan-400">✓</span>
                  <span>First 100 to click get $99/mo forever</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-cyan-400">✓</span>
                  <span>Add noreply@recover88.com to priority inbox now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-blue-900 text-white">
      {/* Counter Bar */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-b border-cyan-400/20 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-3 text-center text-sm">
          <span className="text-cyan-400 font-bold animate-pulse">{pioneerCount}+</span> Pioneers competing for 100 Founders spots
          <span className="mx-4">•</span>
          <span className="text-cyan-400 font-bold">{todayJoined}</span> joined today
          <span className="mx-4">•</span>
          Building in public • Follow @Recover88X
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Your AI Recovery Pilot That Guarantees $279 Back
          <br />
          Or Pay Nothing
        </h1>
        <p className="text-xl mb-12 text-gray-300 max-w-4xl mx-auto">
          While others spam generic "complete your order" emails, Recover88's behavioral AI reads the psychological signals that actually bring customers back. 47% higher recovery rate. Money-back guarantee.
        </p>
        
        <div className="max-w-2xl mx-auto bg-white/5 border-2 border-cyan-400/30 rounded-2xl p-8 backdrop-blur-lg shadow-2xl">
          <p className="mb-6 text-cyan-400 font-bold">
            <span className="animate-pulse">{pioneerCount}</span> merchants waiting • First 100 to claim get $99/mo forever
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="flex-1 bg-white/10 border-2 border-cyan-400 text-white px-5 py-4 rounded-xl text-lg backdrop-blur-lg focus:outline-none focus:border-cyan-300 focus:shadow-lg focus:shadow-cyan-400/25 placeholder-white/70"
                required
              />
              <input
                type="email"
                placeholder="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-2 border-cyan-400 text-white px-5 py-4 rounded-xl text-lg backdrop-blur-lg focus:outline-none focus:border-cyan-300 focus:shadow-lg focus:shadow-cyan-400/25 placeholder-white/70"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-xl text-lg font-bold hover:shadow-lg hover:shadow-cyan-400/40 transition-all duration-300 hover:scale-105"
            >
              Join {pioneerCount} Pioneers Waiting
            </button>
          </form>
          
          <p className="mt-4 text-sm text-gray-400">
            Free to join. First 100 to claim Founders spots get $99/mo forever (vs $297 public).
          </p>
        </div>
      </div>

      {/* Problem Section */}
      <div className="container mx-auto px-6 py-20 border-t border-cyan-400/10">
        <h2 className="text-4xl font-bold text-center mb-12">Every month, you're losing $4,000+ to abandoned carts</h2>
        <p className="text-xl text-center text-gray-300 max-w-4xl mx-auto mb-8">
          Standard recovery tools treat every customer the same. But a price-sensitive shopper needs different messaging than an impulse buyer. A skeptical customer needs trust signals, not discount codes.
        </p>
        <p className="text-2xl text-center text-red-400 font-bold">
          That's $48,000/year left on the table because your recovery emails are dumb.
        </p>
      </div>

      {/* Behavioral Psychology Engine */}
      <div className="container mx-auto px-6 py-20 border-t border-cyan-400/10">
        <h2 className="text-4xl font-bold text-center mb-16">The Behavioral Psychology Engine</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/5 border border-cyan-400/30 rounded-2xl p-6 backdrop-blur-lg hover:scale-105 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-transparent"></div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-3">
              <span className="text-2xl">💰</span> Price Sensitive
            </h3>
            <ul className="space-y-2 mb-4 text-gray-300">
              <li className="flex items-center gap-2"><span className="text-cyan-400">✓</span> Checked shipping 3x</li>
              <li className="flex items-center gap-2"><span className="text-cyan-400">✓</span> Tried coupon codes</li>
              <li className="flex items-center gap-2"><span className="text-cyan-400">✓</span> Price hover: 47 sec</li>
            </ul>
            <div className="text-cyan-400 font-bold">→ Value-focused message</div>
          </div>

          <div className="bg-white/5 border border-blue-400/30 rounded-2xl p-6 backdrop-blur-lg hover:scale-105 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-transparent"></div>
            <h3 className="text-xl font-bold mb-4 text-blue-400 flex items-center gap-3">
              <span className="text-2xl">🛡️</span> Trust Issues
            </h3>
            <ul className="space-y-2 mb-4 text-gray-300">
              <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Read reviews 2x</li>
              <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Checked return policy</li>
              <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Hesitated at checkout</li>
            </ul>
            <div className="text-blue-400 font-bold">→ Trust-building message</div>
          </div>

          <div className="bg-white/5 border border-purple-400/30 rounded-2xl p-6 backdrop-blur-lg hover:scale-105 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-transparent"></div>
            <h3 className="text-xl font-bold mb-4 text-purple-400 flex items-center gap-3">
              <span className="text-2xl">⚡</span> Impulse Buyer
            </h3>
            <ul className="space-y-2 mb-4 text-gray-300">
              <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> Quick add to cart</li>
              <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> Social media referral</li>
              <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> Mobile session</li>
            </ul>
            <div className="text-purple-400 font-bold">→ Urgency-driven message</div>
          </div>

          <div className="bg-white/5 border border-green-400/30 rounded-2xl p-6 backdrop-blur-lg hover:scale-105 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-transparent"></div>
            <h3 className="text-xl font-bold mb-4 text-green-400 flex items-center gap-3">
              <span className="text-2xl">📊</span> Comparison Shopper
            </h3>
            <ul className="space-y-2 mb-4 text-gray-300">
              <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Multiple tabs open</li>
              <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Spec comparison</li>
              <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Long session time</li>
            </ul>
            <div className="text-green-400 font-bold">→ Competitive advantage message</div>
          </div>
        </div>
        
        <p className="text-xl text-center mb-6">
          Each customer gets a personalized recovery sequence based on their behavioral profile.
        </p>
        
        <p className="text-2xl text-center text-cyan-400 font-bold">
          47% higher recovery rate vs generic emails
        </p>
      </div>

      {/* Pioneer Competition */}
      <div className="container mx-auto px-6 py-20 border-t border-cyan-400/10">
        <h2 className="text-4xl font-bold text-center mb-8">The Pioneer Competition</h2>
        <p className="text-xl text-center mb-12">
          {pioneerCount} merchants are competing for 100 Founders spots. When we launch, the first 100 to claim get $99/mo forever.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
          <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-8 backdrop-blur-lg">
            <div className="text-5xl font-bold text-cyan-400 mb-2">{pioneerCount}</div>
            <div className="text-gray-300">Pioneers Waiting</div>
          </div>
          <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-8 backdrop-blur-lg">
            <div className="text-5xl font-bold text-cyan-400 mb-2">100</div>
            <div className="text-gray-300">Founders Spots Available</div>
          </div>
          <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-8 backdrop-blur-lg">
            <div className="text-5xl font-bold text-cyan-400 mb-2">8x</div>
            <div className="text-gray-300">Competition Ratio</div>
          </div>
        </div>
      </div>

      {/* Building Progress */}
      <div className="container mx-auto px-6 py-20 border-t border-cyan-400/10">
        <h2 className="text-4xl font-bold text-center mb-16">What We're Building This Week</h2>
        
        <div className="max-w-2xl mx-auto space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span>SMS recovery sequences</span>
              <span className="text-green-400 font-bold">Completed</span>
            </div>
            <div className="bg-white/10 h-3 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-green-400 to-green-500 h-full w-full rounded-full"></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <span>Real-time behavioral tracking</span>
              <span className="text-yellow-400 font-bold">70% done</span>
            </div>
            <div className="bg-white/10 h-3 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full w-[70%] rounded-full"></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <span>AI confidence scoring</span>
              <span className="text-red-400 font-bold">Starting tomorrow</span>
            </div>
            <div className="bg-white/10 h-3 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full w-[5%] rounded-full"></div>
            </div>
          </div>
        </div>
        
        <p className="text-xl text-center mt-12 text-cyan-400">
          {pioneerCount} merchants ready to compete for 100 spots
        </p>
      </div>

      {/* Final CTA */}
      <div className="container mx-auto px-6 py-20 border-t border-cyan-400/10">
        <h2 className="text-4xl font-bold text-center mb-8">Join {pioneerCount} Merchants Preparing for The Founders Launch</h2>
        <p className="text-xl text-center mb-12">
          Every day you wait = More competition for Founders spots.<br />
          First 100 save $2,376/year. Everyone else pays full price.
        </p>
        
        <div className="text-center mb-16">
          <button
            onClick={() => document.querySelector('form').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-12 py-4 rounded-xl text-xl font-bold hover:shadow-lg hover:shadow-cyan-400/40 transition-all duration-300 hover:scale-105"
          >
            Join Waitlist
          </button>
        </div>
        
        <div className="max-w-2xl mx-auto bg-cyan-400/5 border-2 border-cyan-400/20 rounded-2xl p-8 text-center backdrop-blur-lg">
          <h3 className="text-2xl font-bold mb-4 text-cyan-400">The Recover88 Guarantee</h3>
          <p className="mb-4">If we don't recover $279 in your first 30 days, you pay nothing. If we do, you've already profited. Either way, you can't lose.</p>
          <p className="text-sm text-gray-400">* Guarantee applies to all customers, not just Founders</p>
        </div>
      </div>
    </div>
  )
}

export default App

