import { Booking } from "../booking/Booking";

export type Payment = {
  amount: number | null;
  booking?: Booking | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  paymentDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
