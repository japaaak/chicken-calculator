import { ComponentProps, forwardRef } from "react";

type InputRootProps = ComponentProps<"div">;
export function InputRoot(props: InputRootProps) {
  return <div className="w-full flex flex-col gap-0.5" {...props} />;
}

type InputLabelProps = ComponentProps<"label">;
export function InputLabel(props: InputLabelProps) {
  return (
    <label
      className="flex items-center font-zenmarugothic font-normal text-base text-brown-500"
      {...props}
    />
  );
}

type InputLabelRequiredProps = ComponentProps<"span">;
export function InputLabelRequired(props: InputLabelRequiredProps) {
  return (
    <span
      className="inline-block ml-2 font-zenmarugothic font-normal text-xs text-brown-500 bg-main py-0.5 px-2 rounded-md"
      {...props}
    >
      必須
    </span>
  );
}

type InputControlProps = ComponentProps<"input">;
// export const InputControl = forwardRef<HTMLInputElement, InputControlProps>(
//   (props: InputControlProps, ref) => {
//     return (
//       <input
//         ref={ref}
//         className="flex-1 rounded-md border border-brown-500 bg-white-0 py-2 px-3 text-brown-500 placeholder-brown-300"
//         {...props}
//       />
//     );
//   }
// );
export const InputControl = forwardRef<HTMLInputElement, InputControlProps>(
  (props, ref) => {
    return (
      <input
        ref={ref}
        className="flex-1 rounded-md border border-brown-500 bg-white-0 py-2 px-3 text-brown-500 placeholder-brown-300"
        {...props}
      />
    );
  }
);
InputControl.displayName = "InputControl";

type InputDescriptionProps = ComponentProps<"small">;
export function InputDescription(props: InputDescriptionProps) {
  return <small className="text-brown-400" {...props} />;
}

type InputErrorProps = ComponentProps<"p">;
export function InputError(props: InputErrorProps) {
  return <p className="text-red-100" {...props} />;
}
/*
  <div>
    <label>label <span>必須</span></label>
    <input />
    <small />
  </div>

  <InputRoot>
    <InputLabel>label <InputLabelRequired /></InputLabel>
    <InputControl />
    <InputDescriptionProps />
  </InputRoot>
*/
