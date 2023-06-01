export function internalServerError(err) {
  if (err.response?.data?.errorMessage) {
    return {
      status: false,
      errorMessage: err.response.data.errorMessage,
    };
  }
  return {
    status: false,
    errorMessage: "Internal server error. Please check your server",
  };
}

export function successStatus(res) {
  console.log("response from server", res);
  return {
    status: true,
    data: res.data,
  };
}
