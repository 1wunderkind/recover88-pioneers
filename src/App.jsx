import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [pioneerCount, setPioneerCount] = useState(847)
  const [todayJoined, setTodayJoined] = useState(37)
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [gdprConsent, setGdprConsent] = useState(false)
  const [honeypot, setHoneypot] = useState('') // Spam protection
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [utmParams, setUtmParams] = useState({})

  // Capture UTM parameters on load
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const utm = {
      source: urlParams.get('utm_source') || '',
      medium: urlParams.get('utm_medium') || '',
      campaign: urlParams.get('utm_campaign') || '',
      content: urlParams.get('utm_content') || ''
    }
    setUtmParams(utm)
  }, [])

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
    
    // Spam protection - if honeypot is filled, it's a bot
    if (honeypot) {
      return
    }
    
    if (firstName && email && gdprConsent) {
      // Here you would send to Gumloop webhook
      const formData = {
        firstName,
        email,
        gdprConsent,
        utmParams,
        timestamp: new Date().toISOString(),
        pioneerNumber: pioneerCount + 1
      }
      
      // TODO: Send to Gumloop webhook
      console.log('Form data:', formData)
      
      setIsSubmitted(true)
      setPioneerCount(prev => prev + 1)
    }
  }

  // Social sharing functions
  const shareOnTwitter = () => {
    const text = `Just joined the Recover88 Pioneer List! 🚀 AI-powered cart recovery that guarantees $279 back or you pay nothing. ${pioneerCount}+ merchants competing for 100 Founders spots at $99/mo forever.`
    const url = `https://pioneers.recover88.com?utm_source=twitter&utm_medium=social&utm_campaign=pioneer_share&utm_content=${firstName.toLowerCase()}`
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank')
  }

  const shareOnLinkedIn = () => {
    const title = 'Recover88 Pioneer List - AI Cart Recovery'
    const summary = `Just joined ${pioneerCount}+ merchants on the Recover88 Pioneer List. AI-powered behavioral recovery that guarantees $279 back or you pay nothing. First 100 get $99/mo forever!`
    const url = `https://pioneers.recover88.com?utm_source=linkedin&utm_medium=social&utm_campaign=pioneer_share&utm_content=${firstName.toLowerCase()}`
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(summary)}`, '_blank')
  }

  const copyLink = async () => {
    const url = `https://pioneers.recover88.com?utm_source=direct&utm_medium=referral&utm_campaign=pioneer_share&utm_content=${firstName.toLowerCase()}`
    try {
      await navigator.clipboard.writeText(url)
      // You could add a toast notification here
      alert('Link copied to clipboard!')
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = url
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      alert('Link copied to clipboard!')
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-cyan-400">
              Welcome to the Recover88 Pioneer List, {firstName}! 🎉
            </h1>
            <p className="text-xl mb-8">
              You are now Pioneer #{pioneerCount}. Get ready for launch day!
            </p>
            
            <div className="bg-white/5 border border-cyan-400/30 rounded-2xl p-8 backdrop-blur-lg mb-8">
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

            {/* Social Sharing Section */}
            <div className="bg-white/5 border border-cyan-400/30 rounded-2xl p-8 backdrop-blur-lg">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Help us reach 1,000 Pioneers!</h2>
              <p className="text-gray-300 mb-6">
                Share with other merchants who are losing money to abandoned carts. 
                The more Pioneers, the stronger our launch community becomes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={shareOnTwitter}
                  className="flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Share on X
                </button>
                
                <button
                  onClick={shareOnLinkedIn}
                  className="flex items-center justify-center gap-3 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Share on LinkedIn
                </button>
                
                <button
                  onClick={copyLink}
                  className="flex items-center justify-center gap-3 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy Link
                </button>
              </div>
              
              <p className="text-sm text-gray-400 mt-4">
                Your referral link includes tracking so we can see how many merchants you bring to the Pioneer List!
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="font-bold mb-6 text-center">
          <div className="text-6xl md:text-7xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
            Recover88
          </div>
          <div className="text-3xl md:text-4xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            The First Adaptive Persuasion Engine for E-commerce
          </div>
        </h1>
        <p className="text-xl mb-12 text-gray-300 max-w-4xl mx-auto">
          While others spam generic "complete your order" emails, Recover88's behavioral AI reads the psychological signals that actually bring customers back. 47% higher recovery rate. Money-back guarantee.
        </p>
        
        <div className="max-w-2xl mx-auto bg-white/5 border-2 border-cyan-400/30 rounded-2xl p-8 backdrop-blur-lg shadow-2xl">
          <p className="mb-6 text-cyan-400 font-bold">
            <span className="animate-pulse">{pioneerCount}</span> merchants on the Pioneer List • First 100 to claim get $99/mo forever
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
            
            {/* Honeypot field - hidden from users */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ display: 'none' }}
              tabIndex="-1"
              autoComplete="off"
            />
            
            {/* GDPR Consent */}
            <div className="flex items-start gap-3 text-left">
              <input
                type="checkbox"
                id="gdpr-consent"
                checked={gdprConsent}
                onChange={(e) => setGdprConsent(e.target.checked)}
                className="mt-1 w-4 h-4 text-cyan-400 bg-white/10 border-cyan-400 rounded focus:ring-cyan-400 focus:ring-2"
                required
              />
              <label htmlFor="gdpr-consent" className="text-sm text-gray-300">
                I agree to receive launch notifications and updates from Recover88. You can unsubscribe at any time. 
                <a href="#" className="text-cyan-400 hover:underline ml-1">Privacy Policy</a>
              </label>
            </div>
            
            <button
              type="submit"
              disabled={!gdprConsent}
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-xl text-lg font-bold hover:shadow-lg hover:shadow-cyan-400/40 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Join the Pioneer List
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

      {/* FAQ Section */}
      <div className="container mx-auto px-6 py-20 border-t border-cyan-400/10">
        <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white/5 border border-cyan-400/30 rounded-2xl p-8 backdrop-blur-lg hover:scale-105 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-transparent"></div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">
              "What if I already use Klaviyo/Omnisend?"
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Keep them for newsletters. Recover88 only does one thing - recover revenue. Our AI sees patterns your email tool misses.
            </p>
          </div>

          <div className="bg-white/5 border border-blue-400/30 rounded-2xl p-8 backdrop-blur-lg hover:scale-105 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-transparent"></div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">
              "How is this different from abandoned cart apps?"
            </h3>
            <p className="text-gray-300 leading-relaxed">
              They send emails. We read minds. (Well, behavioral signals, but same result - 47% higher recovery.)
            </p>
          </div>

          <div className="bg-white/5 border border-purple-400/30 rounded-2xl p-8 backdrop-blur-lg hover:scale-105 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-transparent"></div>
            <h3 className="text-xl font-bold mb-4 text-purple-400">
              "What happens after 100 Pioneers?"
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Price goes to $297/mo. Pioneers keep $99 forever. You save $2,376/year for being early.
            </p>
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
        
        {/* Footer */}
        <div className="text-center py-12 border-t border-cyan-400/10 mt-20">
          <p className="text-cyan-400 font-bold text-lg">Pioneers today, Founders tomorrow.</p>
          <p className="text-gray-400 text-sm mt-2">Recover88 © 2025 | Building in public | Follow us on X</p>
        </div>
      </div>
    </div>
  )
}

export default App

