import { useState, useEffect } from 'react';
import { X, Phone, MessageCircle } from 'lucide-react';

const SESSION_KEY = 'trekroots_popup_dismissed';

const PHONE_NUMBER = '+919876543210';   // ← replace with real number
const WHATSAPP_NUMBER = '919876543210';    // ← replace with real number (no +)
const WHATSAPP_MSG = encodeURIComponent('Hello! I want to plan my Himalayan Yatra/Trek. Please help me.');

export default function MobileContactPopup() {
    const [visible, setVisible] = useState(false);
    const [animateIn, setAnimateIn] = useState(false);

    useEffect(() => {
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        if (!isMobile) return;
        if (sessionStorage.getItem(SESSION_KEY)) return;

        const timer = setTimeout(() => {
            setVisible(true);
            requestAnimationFrame(() => requestAnimationFrame(() => setAnimateIn(true)));
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setAnimateIn(false);
        sessionStorage.setItem(SESSION_KEY, 'true');
        setTimeout(() => setVisible(false), 350);
    };

    if (!visible) return null;

    return (
        /* ── Backdrop: plain dark overlay, flex-centered ── */
        <div
            className="fixed inset-0 z-[9998] flex items-center justify-center"
            style={{
                backgroundColor: 'rgba(0,0,0,0.65)',
                opacity: animateIn ? 1 : 0,
                transition: 'opacity 0.35s ease',
            }}
            onClick={handleClose}
            aria-hidden="true"
        >
            {/* ── Popup Card ── */}
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="popup-heading"
                className="w-[88vw] max-w-sm rounded-2xl shadow-2xl overflow-hidden"
                style={{
                    opacity: animateIn ? 1 : 0,
                    transform: animateIn ? 'scale(1)' : 'scale(0.94)',
                    transition: 'opacity 0.35s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1)',
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Top blue header */}
                <div
                    className="px-5 pt-5 pb-4 text-white relative"
                    style={{ background: 'linear-gradient(135deg, #0B3D91 0%, #1565c0 100%)' }}
                >
                    {/* Close button */}
                    <button
                        onClick={handleClose}
                        aria-label="Close popup"
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 hover:bg-white/35 flex items-center justify-center transition-colors"
                    >
                        <X size={16} className="text-white" />
                    </button>

                    <div className="text-3xl mb-2">🏔️</div>

                    <h2 id="popup-heading" className="text-lg font-extrabold leading-snug pr-8">
                        Plan Your Yatra &amp; Trip Today
                    </h2>
                    <p className="text-blue-100 text-sm mt-1 leading-relaxed">
                        Talk to our travel experts and customize your Himalayan journey.
                    </p>
                </div>

                {/* White button area */}
                <div className="bg-white px-5 py-5 flex flex-col gap-3">
                    {/* Call Now */}
                    <a
                        href={`tel:${PHONE_NUMBER}`}
                        onClick={handleClose}
                        className="flex items-center justify-center gap-2 rounded-xl py-3 px-4 font-semibold text-white text-sm shadow-md active:scale-95 transition-transform"
                        style={{ background: 'linear-gradient(135deg, #0B3D91 0%, #1565c0 100%)' }}
                    >
                        <Phone size={18} />
                        Call Now
                    </a>

                    {/* WhatsApp */}
                    <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleClose}
                        className="flex items-center justify-center gap-2 rounded-xl py-3 px-4 font-semibold text-sm border-2 active:scale-95 transition-transform"
                        style={{ borderColor: '#25D366', color: '#25D366' }}
                    >
                        <MessageCircle size={18} />
                        Chat on WhatsApp
                    </a>

                    <p className="text-center text-[11px] text-gray-400 mt-1">
                        Free consultation · No spam · Cancel anytime
                    </p>
                </div>
            </div>
        </div>
    );
}
