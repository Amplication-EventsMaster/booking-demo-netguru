import { BookingUpdateManyWithoutCustomersInput } from "./BookingUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  bookings?: BookingUpdateManyWithoutCustomersInput;
  description?: string | null;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
};
