import { formConsultantItems } from "@/constants/contstant";
import { action } from "@/lib/action";
import ButtonUi from "@/ui/button";
import TextField from "@/ui/textField";


const FormCosultant = () => {
  return (
    <form
      action={action}
      className="mt-8 rounded-3xl h-max mx-auto bg-slate-900 md:w-3/4 w-full flex flex-col gap-4 p-4 md:flex-row relative"
    >
      <div className=" w-full h-full grid grid-cols-2 p-2 gap-3 gap-y-7">
        {formConsultantItems.map((i) => (
          <TextField
            key={i.id}
            {...i}
            className={`${
              i.name == "youtube"
                ? "col-span-2"
                : "col-span-2 md:col-span-1 text-white"
            }`}
          />
        ))}
        <ButtonUi size="max" color="primary" className="col-span-2 px-10 mx-auto">درخواست مشاوره</ButtonUi>
      </div>

    </form>
  );
};

export default FormCosultant;
