import { useTranslations } from "next-intl";
import FormCosultant from "./form";

const ConsultantSection = () => {
  const t = useTranslations();
  return (
    <div
      id="request_advise"
      className="w-full h-max snap-y snap-start snap-mandatory mt-30  p-4"
    >
      <h1 className="font-bold text-2xl mb-10 text-center">
        {t("requestAdviseTitle")}
      </h1>
      <FormCosultant />
    </div>
  );
};

export default ConsultantSection;
