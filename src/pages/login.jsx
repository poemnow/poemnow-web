import { useState } from "react";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState("");

  return (
    <>
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <input
          {...register("id", {
            required: "Your is wrong",
            minLength: {
              value: 8,
              message: "Your firstName is Too short",
            },
            maxLength: {
              value: 20,
              message: "Your firstName is Too long",
            },
          })}
          placeholder="First name"
        />
        <select {...register("password", { required: true })}>
          <option value="">Select...</option>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
        </select>
        <textarea {...register("aboutYou")} placeholder="About you" />
        <p>{data}</p>
        <input type="submit" />
      </form>
      <div>{errors?.id?.message}jkasldjflksda</div>
      <div>{errors?.password?.message}jkasldjflksda</div>
    </>
  );
}

export default Login;
