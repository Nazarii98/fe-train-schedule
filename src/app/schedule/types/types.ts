export interface FormInputs {
  departureDate: string;
  arrivalDate: string;
  trainId: SelectValues;
  departureStation: SelectValues;
  arrivalStation: SelectValues;
}

export interface SelectValues {
  value: string;
  label: string;
}
