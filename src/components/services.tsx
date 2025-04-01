import FlipCard, { FlipCardProps } from "./flipcard";
import { useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations();

  const services = t.raw("services"); // Fetch services from JSON

  return (
    <div
      id="services"
      className="w-full min-h-screen snap-y snap-start snap-mandatory md:pt-32 pt-16 pb-32 md:pb-0 p-4"
    >
      <h1 className="font-bold text-2xl md:mb-16 mb-8 text-center">
        {t("servicesTitle")}
      </h1>
      <div className="md:grid flex flex-col grid-cols-4 grid-rows-2 p-4  w-full gap-4 md:p-8">
        {services.map((i: FlipCardProps, index: number) => {
          return <FlipCard key={index} {...i} />;
        })}
      </div>
    </div>
  );
};

export default Services;
