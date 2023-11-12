import axios from "axios";

export const getAuthToken = async () => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/login`,
      {
        email: "admin@admin.com",
        password: "Admin@123",
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error(error);
  }
};

export const submitMessage = async (data) => {
  try {
    const token = await getAuthToken();

    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}spreadsheet`,
      {
        spreadsheetId: "1qGIkz917iXhjoaS65LbkU8r7UUVak_BI_2vXMw7qldY",
        range: "A:G",
        values: [[data.name, data.phone, data.email, data.message]],
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
