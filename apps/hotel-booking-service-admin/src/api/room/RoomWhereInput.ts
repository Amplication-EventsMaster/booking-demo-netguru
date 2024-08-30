import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type RoomWhereInput = {
  bookings?: BookingListRelationFilter;
  description?: StringNullableFilter;
  hotel?: HotelWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  roomNumber?: StringNullableFilter;
  typeField?: "Option1";
};
