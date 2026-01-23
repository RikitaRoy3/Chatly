import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


// export const getDateLabel = (dateString: string) => {
//   const messageDate = new Date(dateString);

//   const today = new Date();
//   const yesterday = new Date();
//   yesterday.setDate(today.getDate() - 1);

//   if (messageDate.toDateString() === today.toDateString()) {
//     return "Today";
//   }

//   if (messageDate.toDateString() === yesterday.toDateString()) {
//     return "Yesterday";
//   }

//   return messageDate.toLocaleDateString("en-IN", {
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   });
// };
