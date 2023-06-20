import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { QUERY_KEY } from "../constants/queryKey";

async function signIn(data) {
  const response = await fetch("http://localhost:8080/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed on sign in request");
  }

  return response.json();
}

export function useSignIn() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: signInMutation } = useMutation((data) => signIn(data), {
    onSuccess: (data) => {
      // save the user in this state
      queryClient.setQueryData([QUERY_KEY.user], data);
      navigate("/");
    },
    onError: (error) => {
      alert("Check your id and password");
    },
  });

  return signInMutation;
}
