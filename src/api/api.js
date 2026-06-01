import axios from "axios";

export const fetchRegistrations = async (fromDate, toDate) => {
  const response = await axios.get(
    "https://innovation-club-delta.vercel.app/api/seeData/innovationClub",
    { params: { fromDate, toDate } }
  );
  return response.data.data || [];
};
