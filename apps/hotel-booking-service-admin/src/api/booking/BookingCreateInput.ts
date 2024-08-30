import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { PaymentCreateNestedManyWithoutBookingsInput } from "./PaymentCreateNestedManyWithoutBookingsInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type BookingCreateInput = {
  checkInDate?: Date | null;
  checkOutDate?: Date | null;
  comment?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
  payments?: PaymentCreateNestedManyWithoutBookingsInput;
  room?: RoomWhereUniqueInput | null;
  totalPrice?: number | null;
};
