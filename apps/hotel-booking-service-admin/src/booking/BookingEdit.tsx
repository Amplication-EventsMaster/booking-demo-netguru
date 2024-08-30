import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { PaymentTitle } from "../payment/PaymentTitle";
import { RoomTitle } from "../room/RoomTitle";

export const BookingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="checkInDate" source="checkInDate" />
        <DateTimeInput label="checkOutDate" source="checkOutDate" />
        <TextInput label="comment" source="comment" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="payments"
          reference="Payment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="room.id" reference="Room" label="room">
          <SelectInput optionText={RoomTitle} />
        </ReferenceInput>
        <NumberInput label="totalPrice" source="totalPrice" />
      </SimpleForm>
    </Edit>
  );
};
