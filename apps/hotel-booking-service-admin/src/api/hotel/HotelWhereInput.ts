import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RoomListRelationFilter } from "../room/RoomListRelationFilter";

export type HotelWhereInput = {
  address?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  rating?: FloatNullableFilter;
  rooms?: RoomListRelationFilter;
};
