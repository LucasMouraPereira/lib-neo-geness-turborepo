// import { Theme, themes } from "../../utils/themes";
// import * as S from "./styled";

interface Props {
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button = ({ ...rest }: Props) => {
  return (
    <button onClick={rest.onClick} {...rest}>
      {rest.children}
    </button>
  );
};
