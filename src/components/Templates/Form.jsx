import styled from "styled-components";
import { useForm } from "react-hook-form";

const FormStyled = styled.form``;

/*
 * inputs에는 Input 컴포넌트에서 사용할 변수를 받아온다.
 * 최소 길이, 최대 길이
 */

export default function Form({ inputs }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(data);
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <div>This is Form</div>
    </FormStyled>
  );
}
