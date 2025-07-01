import { ClientsCarousel } from "./ClientsCarousel";

export function ModernTestimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-[var(--gray-100)] to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--teal-primary)]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-[var(--yellow-accent)]/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--blue-accent)]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Clients Section */}
        <ClientsCarousel />
      </div>
    </section>
  );
}