async function api(url, method, requestBody) {
  try {
    const response = await fetch(`http://localhost:8080/${url}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export default api;
