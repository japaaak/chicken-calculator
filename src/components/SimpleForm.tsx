import { ComponentProps } from "react";

export type SimpleFormProps = ComponentProps<"form">;

export function SimpleForm(props: SimpleFormProps) {
  return <form className="grid gap-3 w-full max-w-sm" {...props} />;
}
