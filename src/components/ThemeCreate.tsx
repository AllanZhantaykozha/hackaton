import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function ThemeCreate() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="bg-blue-700 w-screen h-screen flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
        <div className="text-3xl font-black">Создание теории</div>
        <div className="grid gap-2">
          <input
            {...register("exampleRequired", { required: true })}
            placeholder="Название"
            className="text-white bg-transparent border-2 border-white px-5 py-2 outline-none rounded-3xl"
          />
        </div>
        <div className="grid gap-2">
          <textarea
            placeholder="Описание"
            {...register("exampleRequired", { required: true })}
            className="text-white bg-transparent border-2 border-white px-5 py-2 outline-none rounded-3xl"
          />
        </div>
        <div className="grid gap-2">
          <input
            placeholder="Сложность"
            type="number"
            min={1}
            max={10}
            {...register("exampleRequired", { required: true })}
            className="text-white bg-transparent border-2 border-white px-5 py-2 outline-none rounded-3xl"
          />
        </div>
        <div className="grid gap-2">
          <select
            name=""
            id=""
            className="text-white bg-transparent border-2 border-white px-5 py-2 outline-none rounded-3xl"
          >
            <option value="" className="text-black ">
              1
            </option>
            <option value="" className="text-black ">
              2
            </option>
            <option value="" className="text-black ">
              3
            </option>
          </select>
        </div>

        <input
          type="submit"
          className="bg-black py-3 rounded-full"
          value={"Создать"}
        />
      </form>
    </div>
  );
}
