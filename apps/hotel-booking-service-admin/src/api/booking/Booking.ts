import { Customer } from "../customer/Customer";
import { Payment } from "../payment/Payment";
import { Room } from "../room/Room";

export type Booking = {
  checkInDate: Date | null;
  checkOutDate: Date | null;
  comment: string | null;
  createdAt: Date;
  customer?: Customer | null;
  description: string | null;
  id: string;
  name: string | null;
  payments?: Array<Payment>;
  room?: Room | null;
  totalPrice: number | null;
  updatedAt: Date;
};
