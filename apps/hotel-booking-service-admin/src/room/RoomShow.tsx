import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { ROOM_TITLE_FIELD } from "./RoomTitle";
import { HOTEL_TITLE_FIELD } from "../hotel/HotelTitle";

export const RoomShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <ReferenceField label="hotel" source="hotel.id" reference="Hotel">
          <TextField source={HOTEL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="price" source="price" />
        <TextField label="roomNumber" source="roomNumber" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Booking"
          target="roomId"
          label="Bookings"
        >
          <Datagrid rowClick="show">
            <TextField label="checkInDate" source="checkInDate" />
            <TextField label="checkOutDate" source="checkOutDate" />
            <TextField label="comment" source="comment" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <ReferenceField label="room" source="room.id" reference="Room">
              <TextField source={ROOM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="totalPrice" source="totalPrice" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
