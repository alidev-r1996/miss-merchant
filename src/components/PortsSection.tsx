import { useTranslations } from "next-intl";
import Port, { PortProps } from "./ports";

const PortSection = () => {
  const t = useTranslations();
  const ports = t.raw("ports"); // Fetch ports array from JSON

  return (
    <div
      id="ports"
      className="w-full min-h-screen  snap-y snap-start snap-mandatory md:pt-32 pt-16 p-4 pb-32 md:pb-0"
    >
      <h1 className="font-bold text-2xl mb-10 text-center">
        {t("portsTitle")}
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center mx-auto w-full  md:w-2/3 gap-4 p-4">
        {ports.map((i: PortProps, index: number) => {
          return <Port key={index} {...i} index={index} />;
        })}
      </div>
    </div>
  );
};

export default PortSection;
