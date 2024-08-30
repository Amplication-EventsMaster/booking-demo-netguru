import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  booking?: BookingWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
  paymentDate?: Date | null;
  status?: "Option1" | null;
};
