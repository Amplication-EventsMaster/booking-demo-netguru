import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  booking?: BookingWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  paymentDate?: DateTimeNullableFilter;
  status?: "Option1";
};
