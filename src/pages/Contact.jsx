import ContactInfoPanel from '../components/contact/ContactInfoPanel'
import ContactFormPanel from '../components/contact/ContactFormPanel'
import ContactMapSection from '../components/contact/ContactMapSection'

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] transition-all dark:bg-[#020617] dark:text-[#f1f5f9]">
      <section className="relative overflow-hidden bg-[#f8f4ee] py-16 text-center border-b border-slate-100 dark:bg-slate-950 dark:border-slate-900">
        <div className="absolute top-1/2 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00969A]/5 blur-[80px]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-widest text-[#00969A] uppercase bg-[#00969A]/10 px-3 py-1 rounded-full dark:bg-[#00969A]/20">Contact Us</span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Inquiry & Consultation</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-500 dark:text-slate-400">Reach out directly for legal issues or digital transformation projects. Our team is ready to help.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 items-start">
          <div className="lg:col-span-2">
            <ContactInfoPanel />
          </div>
          <div className="lg:col-span-3">
            <ContactFormPanel />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <ContactMapSection />
      </section>
    </div>
  )
}
