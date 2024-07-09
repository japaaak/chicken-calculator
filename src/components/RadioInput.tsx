import { ComponentProps } from "react";
import { InputControl } from "./Input";
import { Control, Controller } from "react-hook-form";
import { VariantProps, tv } from "tailwind-variants";

type RadioInputRootProps = ComponentProps<"div">;
function RadioInputRoot(props: RadioInputRootProps) {
  return <div className="w-full flex flex-wrap gap-2 mt-0.5" {...props} />;
}

const label = tv({
  base: [
    "flex whitespace-nowrap	shrink-0 rounded-md bg-white py-2 px-3 peer-checked:text-white border before:content-['○'] before:mr-1 peer-checked:border-main peer-checked:before:content-['⚫︎'] peer-checked:before:text-main",
  ],
  variants: {
    variant: {
      red: "border-red-400 text-red-500 peer-checked:ring-red-300 peer-checked:bg-red-300 ",
      blue: "border-blue-400 text-blue-500 peer-checked:ring-blue-300 peer-checked:bg-blue-300 ",
    },
  },
  defaultVariants: {
    variant: "red",
  },
});
type RadioLabelControlProps = ComponentProps<"label"> &
  VariantProps<typeof label>;
function RadioLabelControl({ variant, ...props }: RadioLabelControlProps) {
  return (
    <label className={`${label({ variant })} ${props.className}`} {...props} />
  );
}

interface RadioInputProps {
  options: Array<{ value: string; title: string }>;
  id: string;
  control: Control<any>;
  variant?: any;
}

export function RadioInput({ options, id, control, variant }: RadioInputProps) {
  return (
    <Controller
      control={control}
      name={id}
      render={({ field }) => (
        <RadioInputRoot {...field}>
          {options.map((option) => (
            <div key={option.value}>
              <InputControl
                type="radio"
                name={id}
                value={option.value}
                id={option.value}
                className="hidden peer"
                defaultChecked={field.value === option.value}
              />
              <RadioLabelControl htmlFor={option.value} variant={variant}>
                {option.title}
              </RadioLabelControl>
            </div>
          ))}
        </RadioInputRoot>
      )}
    />
  );
}
