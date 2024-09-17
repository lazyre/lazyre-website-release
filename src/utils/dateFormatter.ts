import { format } from "date-fns";

export const formatDate = (dateString: string | null): string => {
  if (!dateString) return "";
  return format(new Date(dateString), "dd MMMM yyyy");
};
