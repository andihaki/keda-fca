import { PRICING_DATA } from "./pricingData";
import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Tingkatkan kerja tim Anda. Mulai gratis.
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Pilih langganan yang paling sesuai dengan kebutuhan bisnis dan
            proyek Anda.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {PRICING_DATA.map((pricing) => (
            <PricingCard key={pricing.title} {...pricing} />
          ))}
        </div>
      </div>
    </section>
  );
}
