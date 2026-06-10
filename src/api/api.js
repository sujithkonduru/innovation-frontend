import axios from "axios";

const API_URL = "https://boot-camp-red.vercel.app/api/seeData/innovationClub";

export const fetchRegistrations = async (fromDate, toDate) => {
  try {
    // The external API's toDate is exclusive (e.g., toDate=2026-06-10 excludes June 10 records).
    // We increment it by 1 day to make the range inclusive for the user.
    const date = new Date(toDate);
    date.setDate(date.getDate() + 1);
    const inclusiveToDate = date.toISOString().split('T')[0];

    const response = await axios.get(API_URL, {
      params: { fromDate, toDate: inclusiveToDate }
    });
    return response.data.data || [];
  } catch (error) {
    console.error("Error in fetchRegistrations:", error);
    throw error;
  }
};
