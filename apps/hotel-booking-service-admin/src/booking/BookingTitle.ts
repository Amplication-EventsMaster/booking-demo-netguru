import { Booking as TBooking } from "../api/booking/Booking";

export const BOOKING_TITLE_FIELD = "name";

export const BookingTitle = (record: TBooking): string => {
  return record.name?.toString() || String(record.id);
};
