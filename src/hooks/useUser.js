import { useQuery } from "@tanstack/react-query";
import * as userLocalStorage from "./userLocalStorage";
import { useEffect } from "react";
import { QUERY_KEY } from "../constants/queryKey";

async function getUser(user) {
  if (!user) return null;

  const response = await fetch(`http://localhost:8080/user/${user.id}`, {
    headers: {
      Authorization: user.accessToken,
    },
  });

  if (!response.ok) {
    throw new Error("Failed on get user request");
  }

  return await response.json();
}

export function useUser() {
  const { data: user } = useQuery([QUERY_KEY.user], async () => getUser(user), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    initialData: userLocalStorage.getUser,
    onError: () => {
      userLocalStorage.removeUser();
    },
  });

  useEffect(() => {
    if (!user) userLocalStorage.removeUser();
    else userLocalStorage.saveUser(user);
  }, [user]);

  return {
    user: user ?? null,
  };
}
