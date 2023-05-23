export interface IemployeeInformationParams {
  nik: string;
  name: string;
  gender: number;
  dob: string; // yyyy-mm-dd
  pob: string;
  ktp_no: number;
  nc_id: number;
  home_address_1: string;
  home_address_2: string;
  mobile_no: number;
  tel_no: number;
  marriage_id: number;
  bank_account_no: number;
  bank_name: number;
  family_card_number: number;
  safety_insurance_no: number;
  health_insurance_no: number;
}

export interface IcontractInformationParams {
  contract_start_date: number; // yyyy-mm-dd
  type: number; // (0: Permanent, 1: Part-time worker, 2: Contract worker)
}

export interface IemploymentDetailsParams {
  department_id: number;
  position_id: number;
  entitle_ot: number;
  meal_allowance_paid: number;
  operational_allowance_paid: number;
  attendance_allowance_paid: number;
}

export interface IsalaryWagesParams {
  basic_salary: number;
  audit_salary: number;
  safety_insurance: number;
  health_insurance: number;
  meal_allowance: number;
}

export interface IothersParams {
  grade_id: number;
  remark: string;
  benefits: Array<number>;
  account_user_id: number;
}
