/* eslint-disable  no-console */
/* eslint-disable  prettier/prettier */
/* eslint-disable  no-unused-vars */
import axios from '@app/utils/axios';

export const getChartData = async ({ queryKey }) => {
  const [_, groupBy, email, short] = queryKey
  let url = `/visit?group=${groupBy}&username=${email}`;
  if(short) url+=`&short=${short}`;

  const {data} = await axios.get(url);
  const response = data;
  return response;
};
