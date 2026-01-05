import React, { useState } from 'react';
import { Mail, Phone, CheckCircle2, Dumbbell, ExternalLink, Smartphone, QrCode, ChevronDown, ChevronUp, AlertCircle, ArrowRight, ShieldCheck, Key, UserCheck, Send, HelpCircle } from 'lucide-react';
import { GROWTH_LAB_LOGO } from '../constants';

interface PaymentSectionProps {
  isDark: boolean;
}

const PaymentSection: React.FC<PaymentSectionProps> = ({ isDark }) => {
  const [imgError, setImgError] = useState(false);
  const [showQr, setShowQr] = useState(false);
  const [showEnrollmentSteps, setShowEnrollmentSteps] = useState(false);
  const upiLink = "upi://pay?pa=8825061493-3@ybl&pn=The%20Growth%20Lab&am=269&cu=INR";
  const qrCodeImageUrl = "https://lh3.googleusercontent.com/d/17mkfo4oU-lWUiqaG_Zv7u66XzFLDHBbX";

  const handlePayment = () => {
    window.location.href = upiLink;
  };

  const benefits = [
    "Easy to understand language",
    "Practical step-by-step use cases",
    "Detailed study materials with visuals",
    "Free access to all future content"
  ];

  const steps = [
    {
      id: 1,
      icon: Smartphone,
      title: "Secure Payment",
      text: "Pay using the payment options provided below (Direct UPI or QR Code)."
    },
    {
      id: 2,
      icon: Send,
      title: "Verification",
      text: "Provide payment details screenshot along with your Full Name, Age, Email and Phone Number to our WhatsApp number mentioned below in 'Contact Us'."
    },
    {
      id: 3,
      icon: UserCheck,
      title: "Access Granted",
      text: "The team will verify your details and payment to generate a special key and grant you full access to the course."
    },
    {
      id: 4,
      icon: Key,
      title: "Final Step",
      text: "After verification, the team will reply with the course link and key. Enter your email and key in the provided website on WhatsApp to access the course."
    }
  ];

  return (
    <div className={`max-w-4xl mx-auto p-8 md:p-12 rounded-[2.5rem] border transition-all duration-500 ${isDark ? 'bg-black/40 border-white/10' : 'bg-white/80 border-black/10 shadow-2xl'} backdrop-blur-xl`}>
      <div className="text-center mb-10">
        <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/20 transform -rotate-2">
          {!imgError ? (
            <img 
              src={GROWTH_LAB_LOGO} 
              alt="Growth Lab" 
              onError={() => setImgError(true)}
              className="w-12 h-12 object-contain" 
            />
          ) : (
            <Dumbbell className="w-8 h-8 text-white" />
          )}
        </div>
        <h2 className={`text-3xl md:text-4xl font-heading mb-3 leading-tight uppercase tracking-tight ${isDark ? 'text-white mix-blend-difference' : 'text-black'}`}>Claim Your Physique</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
        <ul className="space-y-4">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-center space-x-3 pop-on-scroll" style={{ transitionDelay: `${idx * 50}ms` }}>
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className={`text-sm font-bold ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>{benefit}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col justify-center items-center p-8 rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-500/20 relative overflow-hidden transition-transform hover:scale-105 duration-500">
          <p className="text-blue-100 font-bold uppercase tracking-widest text-[10px] mb-1">Total Value: <span className="line-through">₹1,500</span></p>
          <p className="text-5xl font-heading mb-1">₹269</p>
          <p className="text-blue-100 text-xs font-medium italic">Limited Time Access</p>
        </div>
      </div>

      {/* HOW TO ENROLL - DROPDOWN SECTION */}
      <div className={`mb-8 border rounded-[2rem] overflow-hidden transition-all duration-500 ${isDark ? 'bg-white/[0.02] border-blue-500/20' : 'bg-blue-50/50 border-blue-200'}`}>
        <button 
          onClick={() => setShowEnrollmentSteps(!showEnrollmentSteps)}
          className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
        >
          <div className="flex items-center space-x-4">
            <div className={`p-2 rounded-xl ${isDark ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-600/10 text-blue-600'}`}>
              <HelpCircle className="w-6 h-6" />
            </div>
            <h3 className={`text-xl md:text-2xl font-black uppercase tracking-tight ${isDark ? 'text-white' : 'text-slate-950'}`}>How to Enroll</h3>
          </div>
          <div className={`p-2 rounded-full transition-all duration-300 ${showEnrollmentSteps ? 'rotate-180 bg-blue-600 text-white' : 'bg-blue-600/10 text-blue-600'}`}>
            <ChevronDown className="w-6 h-6" />
          </div>
        </button>

        {showEnrollmentSteps && (
          <div className="p-6 md:p-8 pt-0 dropdown-animate relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              {steps.map((step) => (
                <div key={step.id} className="flex space-x-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm bg-blue-600 text-white`}>
                    {step.id}
                  </div>
                  <div>
                    <h4 className={`text-xs font-black uppercase tracking-widest mb-1.5 flex items-center ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>
                      <step.icon className="w-3.5 h-3.5 mr-2" />
                      {step.title}
                    </h4>
                    <p className={`text-[12px] font-bold leading-relaxed ${isDark ? 'text-gray-400' : 'text-slate-700'}`}>
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className={`p-5 rounded-2xl border-l-4 border-red-500 ${isDark ? 'bg-red-500/10' : 'bg-red-50'}`}>
              <p className={`text-[12px] md:text-sm font-black uppercase tracking-wider leading-relaxed ${isDark ? 'text-red-400' : 'text-red-700'}`}>
                <AlertCircle className="w-5 h-5 inline-block mr-2 -mt-1" />
                IMPORTANT: YOU MUST <span className="underline decoration-2">STORE YOUR ACCESS KEY SAFELY</span>. IT IS YOUR ONLY LIFETIME LOGIN CREDENTIAL.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-6">
        <div className="relative group pop-on-scroll">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
          <button 
            onClick={handlePayment}
            className={`relative w-full py-6 px-8 rounded-2xl font-black text-xl flex items-center justify-center transition-all shadow-xl transform active:scale-[0.98] glow-hover ${isDark ? 'bg-white text-black hover:bg-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          >
            GET THE COURSE NOW
            <ExternalLink className={`ml-3 w-5 h-5 ${isDark ? 'text-blue-600' : 'text-white'}`} />
          </button>
        </div>

        <div className="pop-on-scroll" style={{ transitionDelay: '100ms' }}>
          <button 
            onClick={() => setShowQr(!showQr)}
            className={`w-full py-4 rounded-2xl border flex items-center justify-center font-bold text-sm tracking-widest transition-all duration-300 ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white' : 'bg-gray-100 border-black/10 hover:bg-gray-200 text-black'}`}
          >
            <QrCode className="mr-2 w-4 h-4" />
            {showQr ? 'HIDE QR CODE' : 'PAY WITH QR'}
            {showQr ? <ChevronUp className="ml-2 w-4 h-4" /> : <ChevronDown className="ml-2 w-4 h-4" />}
          </button>
        </div>

        {showQr && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-500 flex flex-col items-center pb-8">
            <p className="text-center text-xs font-black mb-4 uppercase tracking-[0.2em] text-blue-600">SCAN WITH ANY UPI APP</p>
            <div className={`w-72 h-72 p-4 rounded-3xl shadow-2xl overflow-hidden transition-all duration-700 hover:scale-105 flex items-center justify-center ${isDark ? 'bg-white' : 'bg-white border-2 border-black/5'}`}>
              <img 
                src={qrCodeImageUrl} 
                alt="Payment QR Code" 
                className="w-full h-full object-contain"
                style={{ transform: 'scale(1.2)' }}
                loading="eager"
              />
            </div>
          </div>
        )}

        {/* Support Section */}
        <div className="text-center pt-8 border-t border-white/5 pop-on-scroll" style={{ transitionDelay: '200ms' }}>
          <h3 className={`text-xl md:text-2xl font-black uppercase tracking-tighter mb-8 ${isDark ? 'text-blue-500' : 'text-blue-600'}`}>Any Doubts? Contact Us</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <a href="mailto:aarush56kk@gmail.com" className="group flex flex-col items-center space-y-2">
              <div className={`p-4 rounded-2xl transition-all ${isDark ? 'bg-white/5 group-hover:bg-blue-600/20' : 'bg-blue-50 group-hover:bg-blue-100'}`}>
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-blue-600 font-bold text-sm md:text-base tracking-wide border-b border-transparent group-hover:border-blue-600/50 transition-all">aarush56kk@gmail.com</p>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500">Email Support</p>
            </a>
            
            <div className="group flex flex-col items-center space-y-2">
              <div className={`p-4 rounded-2xl transition-all ${isDark ? 'bg-white/5' : 'bg-green-50'}`}>
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <p className={`font-black text-2xl md:text-3xl tracking-tighter transition-all hover:text-blue-600 ${isDark ? 'text-white' : 'text-black'}`}>+91 8825061493</p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Official WhatsApp & Call</p>
            </div>
          </div>
        </div>
        
        <div className={`flex items-center justify-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] animate-pulse pt-8 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
          <Smartphone className="w-3.5 h-3.5" />
          <span>Best experienced on mobile with UPI apps</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;