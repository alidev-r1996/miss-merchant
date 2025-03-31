import { useTranslations } from "next-intl";
import Port, { PortProps } from "./ports";




const PortSection = () => {
  const t = useTranslations();
  const ports = t.raw("ports"); // Fetch ports array from JSON

  return (
    <div
      id="ports"
      className="w-full min-h-screen  snap-y snap-start snap-mandatory pt-32 p-4"
    >
      <h1 className="font-bold text-2xl mb-10 text-center"> {t('portsTitle')}</h1>
      <div className="flex flex-col md:flex-row justify-center items-center mx-auto w-full  md:w-2/3 gap-4 p-4">
        {ports.map((i:PortProps, index: number) => {
          return <Port key={index} {...i} />;
        })}
      </div>
    </div>
  );
};

export default PortSection;
