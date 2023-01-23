export interface Login {
  login(): boolean;
}

export interface UserDefinedDatatype extends Address {
  name: string;
  age?: number;
}

export interface Address {
  line1: string;
  line2: string;
  street: string;
  district: string;
  pincode: string;
}
