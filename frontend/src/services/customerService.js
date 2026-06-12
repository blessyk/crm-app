import api from "./api";

const getAuthConfig = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getCustomers = async () => {
  const res = await api.get("/customers", getAuthConfig());

  return res.data;
};

export const createCustomer = async (data) => {
  const res = await api.post( "/customers", data, getAuthConfig());
  return res.data;
};

export const updateCustomer = async (id,data) => {
  const res = await api.put(`/customers/${id}`,data, getAuthConfig());
  return res.data;
};

export const deleteCustomer = async (id) => {
  const res = await api.delete( `/customers/${id}`, getAuthConfig());
  return res.data;
};