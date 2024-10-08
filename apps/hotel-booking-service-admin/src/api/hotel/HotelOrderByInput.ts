import { SortOrder } from "../../util/SortOrder";

export type HotelOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
};
