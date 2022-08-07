/* eslint-disable  no-console */
/* eslint-disable  prettier/prettier */
/* eslint-disable  no-unused-vars */
import axios from '@app/utils/axios';

export const getLink = async ({ queryKey }) => {
  const [_, email] = queryKey
  const {data} = await axios.get(`/link?username=${email}`);
  const response = data;
  return response;
};

export const createLink = async (payload: any) => {
  const {data} = await axios.post(`/link`, payload);
  const response = data;
  return response;
};

export const deleteLink = async (payload: any) => {
  const {id} = payload;
  const {data} = await axios.delete(`/link/${id}`, payload);
  const response = data;
  return response;
};
