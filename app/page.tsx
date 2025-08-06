'use client'

import { useState } from 'react'
import { ArrowLeft, Sparkles } from 'lucide-react'

export default function TawajohLanding() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsLoading(false)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-[#F8F8F5] flex items-center justify-center px-6 py-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Beta Badge */}
        <div className="inline-flex items-center gap-2 bg-[#4A6345]/10 text-[#4A6345] px-4 py-2 rounded-full text-sm font-medium">
          <Sparkles className="w-4 h-4" />
          نسخة تجريبية
        </div>

        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1B2A41] leading-tight">
            تَوَجُّه قادمة قريبًا
          </h1>
          <div className="w-24 h-1 bg-[#C5A25A] mx-auto rounded-full"></div>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-[#1B2A41] font-medium">
            منصتك لبناء مشروعك الرقمي الذكي
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[#A3A3A3] max-w-2xl mx-auto leading-relaxed">
          نحن الآن في المرحلة التجريبية ونختبر السوق، اترك بريدك أو رقم الواتساب وسنخبرك عند انطلاق أولى خدماتنا.
        </p>

        {/* Form or Success Message */}
        <div className="max-w-md mx-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="بريدك الإلكتروني أو رقم الواتساب"
                  className="w-full px-6 py-4 text-right bg-white border-2 border-gray-200 rounded-xl focus:border-[#C5A25A] focus:outline-none text-[#1B2A41] placeholder-[#A3A3A3] shadow-sm transition-colors"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#1B2A41] hover:bg-[#C5A25A] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    أعلمني عند الانطلاق
                    <ArrowLeft className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#C5A25A]/20">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#4A6345] rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#1B2A41]">
                  شكرًا لانضمامك!
                </h3>
                <p className="text-[#A3A3A3]">
                  سنخبرك فور توفر خدماتنا.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-[#C5A25A] hover:text-[#1B2A41] font-medium transition-colors"
                >
                  إضافة بريد آخر
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Decorative Elements */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="w-96 h-96 border-4 border-[#C5A25A] rounded-full"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-3">
            <div className="w-64 h-64 border-2 border-[#4A6345] rounded-full"></div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="pt-8 text-sm text-[#A3A3A3]">
          <p>© 2024 تَوَجُّه - جميع الحقوق محفوظة</p>
        </div>
      </div>
    </div>
  )
}
