import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  bookings?: BookingListRelationFilter;
  description?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
};
