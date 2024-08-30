import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type BookingWhereInput = {
  checkInDate?: DateTimeNullableFilter;
  checkOutDate?: DateTimeNullableFilter;
  comment?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  payments?: PaymentListRelationFilter;
  room?: RoomWhereUniqueInput;
  totalPrice?: FloatNullableFilter;
};
