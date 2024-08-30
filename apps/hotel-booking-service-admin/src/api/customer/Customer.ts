import { Booking } from "../booking/Booking";

export type Customer = {
  bookings?: Array<Booking>;
  createdAt: Date;
  description: string | null;
  email: string | null;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  updatedAt: Date;
};
