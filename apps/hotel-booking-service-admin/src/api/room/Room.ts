import { Booking } from "../booking/Booking";
import { Hotel } from "../hotel/Hotel";

export type Room = {
  bookings?: Array<Booking>;
  createdAt: Date;
  description: string | null;
  hotel?: Hotel | null;
  id: string;
  name: string | null;
  price: number | null;
  roomNumber: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
