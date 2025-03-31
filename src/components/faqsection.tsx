import { useTranslations } from "next-intl";
import Accordeon from "./accordeon";

const FAQSection = () => {
  const t = useTranslations();

  return (
    <div
      id="faq"
      className="w-full min-h-screen snap-y snap-start snap-mandatory pt-32 p-4"
    >
      <h1 className="font-bold text-2xl mb-10 text-center">{t('Header.faq')} </h1>
      <div className="flex flex-col gap-5">
        {t
          .raw("FAQ")
          .map((faq: { title: string; reply: string }, index: number) => (
            <Accordeon key={index} title={faq.title} id={`faq-${index}`}>
              <p className="p-4">{faq.reply}</p>
            </Accordeon>
          ))}
      </div>
    </div>
  );
};

export default FAQSection;
