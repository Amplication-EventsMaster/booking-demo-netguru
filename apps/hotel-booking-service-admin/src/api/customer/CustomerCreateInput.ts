import { BookingCreateNestedManyWithoutCustomersInput } from "./BookingCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  bookings?: BookingCreateNestedManyWithoutCustomersInput;
  description?: string | null;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
};
