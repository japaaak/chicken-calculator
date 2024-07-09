"use client";

import { InputControl, InputLabel, InputRoot } from "@/components/Input";
import { RadioInput } from "@/components/RadioInput";
import { SimpleForm } from "@/components/SimpleForm";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface Props {
  age: number;
  height: number;
  hairlength: string;
  eyecolor: string;
  boobsize: string;
}

export default function Woman() {
  const { push } = useRouter();
  const { register, handleSubmit, control } = useForm<Props>();
  function onSubmit(data: Props) {
    push(
      `/results?age=${data.age}&height=${data.height}&hairlength=${data.hairlength}&eyecolor=${data.eyecolor}&boobsize=${data.boobsize}`
    );
  }

  const hairlengthOption = [
    { value: "short", title: "ショート" },
    { value: "medium", title: "普通" },
    { value: "long", title: "ロング" },
  ];

  const eyecolorOption = [
    { value: "brown", title: "茶色" },
    { value: "black", title: "黒色" },
    { value: "other", title: "その他" },
  ];

  const boobsizeOption = [
    { value: "small", title: "小さい" },
    { value: "normal", title: "普通" },
    { value: "big", title: "大きい" },
    { value: "huge", title: "すごく大きい" },
  ];

  return (
    <div className="py-16 h-full flex flex-col items-center">
      <Image
        src="/chikenchicken.png"
        width={180}
        height={180}
        alt="ローストチキン"
      />
      <h1 className="my-8">女性の価値を調べる</h1>
      <p>
        下の内容を入力してね！！
        <br />
        <small>
          ※
          入力された情報は価値計算のみに使用いたします。その他の用途では使用いたしません。
        </small>
      </p>

      <p className="text-left w-full mt-4">
        ↓ まずは調べる方の性別を選択しよう！
      </p>

      <SimpleForm
        onSubmit={handleSubmit(onSubmit)}
        className="w-full my-4 p-4 rounded-md bg-red-50 gap-3 flex flex-col items-center"
      >
        <InputRoot>
          <InputLabel htmlFor="age">年齢</InputLabel>
          <InputControl
            id="age"
            type="number"
            {...register("age")}
            placeholder="20歳"
            min={0}
            max={200}
          />
        </InputRoot>

        <InputRoot>
          <InputLabel htmlFor="height">身長</InputLabel>
          <InputControl
            id="height"
            type="number"
            {...register("height")}
            placeholder="110cm"
            min={0}
            max={300}
          />
        </InputRoot>

        <InputRoot>
          <InputLabel htmlFor="heightlength">髪の長さ</InputLabel>
          <RadioInput
            options={hairlengthOption}
            id="heightlength"
            control={control}
          />
        </InputRoot>

        <InputRoot>
          <InputLabel htmlFor="eyecolor">目の色</InputLabel>
          <RadioInput
            options={eyecolorOption}
            id="eyecolor"
            control={control}
          />
        </InputRoot>

        <InputRoot>
          <InputLabel htmlFor="boobsize">おっぱいの大きさ</InputLabel>
          <RadioInput
            options={boobsizeOption}
            id="boobsize"
            control={control}
          />
        </InputRoot>

        <button className="mt-8 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 rounded-lg px-5 py-2.5 text-center">
          <p>価値を調べる!!!</p>
        </button>
      </SimpleForm>
    </div>
  );
}
