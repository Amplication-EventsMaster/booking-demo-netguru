import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { PaymentUpdateManyWithoutBookingsInput } from "./PaymentUpdateManyWithoutBookingsInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type BookingUpdateInput = {
  checkInDate?: Date | null;
  checkOutDate?: Date | null;
  comment?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
  payments?: PaymentUpdateManyWithoutBookingsInput;
  room?: RoomWhereUniqueInput | null;
  totalPrice?: number | null;
};
