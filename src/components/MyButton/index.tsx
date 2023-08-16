import { ButtonHTMLAttributes } from "react";
interface MyButton
  extends React.DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string;
}

export const MyButton = (props: MyButton) => {
  return <button {...props}>{props.label}</button>;
};
