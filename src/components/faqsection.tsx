import { useTranslations } from "next-intl";
import Accordeon from "./accordeon";

const FAQSection = () => {
  const t = useTranslations();

  return (
    <div
      id="faq"
      className="w-full min-h-screen snap-y snap-start snap-mandatory md:pt-32 pt-16 p-4 pb-32 md:pb-0"
    >
      <h1 className="font-bold text-2xl mb-10 text-center">
        {t("Header.faq")}{" "}
      </h1>
      <div className="flex flex-col gap-5">
        {t
          .raw("FAQ")
          .slice(0, 5)
          .map((faq: { title: string; reply: string }, index: number) => (
            <Accordeon
              key={index}
              title={faq.title}
              id={`faq-${index}`}
              index={index}
            >
              <p className="p-4">{faq.reply}</p>
            </Accordeon>
          ))}
      </div>
    </div>
  );
};

export default FAQSection;
