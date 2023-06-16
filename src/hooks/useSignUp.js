import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { QUERY_KEY } from "../constants/queryKey";

// 회원가입 함수
async function signUp(data) {
  // If you need, you can change fetch to axios.
  const response = await fetch("http://localhost:8080/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    console.log("error occurred");
    throw new Error("Failed on sign up request");
  }

  return;
}

// react-query에서 사용되는 함수
export function useSignUp() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: signUpMutation } = useMutation((data) => signUp(data), {
    onSuccess: (data) => {
      // save user information in this place
      // queryClient.setQueryData([QUERY_KEY.user], data);
      // Finished to save user information, then navigate to home page.
      navigate("/login");
    },
    onError: (error) => {
      // If error happened, then it shows an alert.
      alert(error);
    },
  });

  return signUpMutation;
}
