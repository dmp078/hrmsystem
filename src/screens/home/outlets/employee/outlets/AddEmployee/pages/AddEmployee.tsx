import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { ROUTES } from "../../../../../../../configs/routes/ROUTES";
import { Button, Spinner } from "react-bootstrap";
import { Link, Outlet, useNavigate, useOutletContext } from "react-router-dom";
import {
  IcontractInformationParams,
  IemployeeInformationParams,
  IemploymentDetailsParams,
  IothersParams,
  IsalaryWagesParams,
} from "../../../../../../../models/home/employeeAddParams";
import { getDepartment } from "../../../../../../../services/home/employee/EmploymentDetailts/getDepartment";
import { getPosition } from "../../../../../../../services/home/employee/EmploymentDetailts/getPosition";
import { getBenefits } from "../../../../../../../services/home/employee/Others/getBenefits";
import { getGrade } from "../../../../../../../services/home/employee/Others/getGrade";
import { addEmployee } from "../../../../../../../services/home/employee/addEmployee/addEmployee";
import { getMarriageStatus } from "../../../../../../../services/home/employee/employeeInformation/getMarriageStatus";
import { listRequirer } from "../../../../../../../assets/constants/listRequirer";
import { getContract } from "../../../../../../../services/home/employee/contract/getContract";
import { addContract } from "../../../../../../../services/home/employee/contract/addContract";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const AddEmployee = () => {
  const [props]: Array<any> = useOutletContext();
  const [path, setPath] = useState<string>(window.location.pathname);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const [employeeInformation, setEmployeeInformation] = useState<IemployeeInformationParams>({
    bank_account_no: -1,
    bank_name: "",
    dob: "",
    family_card_number: -1,
    gender: 0,
    health_insurance_no: -1,
    home_address_1: "",
    home_address_2: "",
    ktp_no: -1,
    marriage_id: -1,
    mobile_no: -1,
    name: "",
    nc_id: -1,
    nik: "",
    pob: "",
    safety_insurance_no: -1,
    tel_no: -1,
    mother_name: "",
  });

  const [contractInformation, setContractInformation] = useState<IcontractInformationParams>({
    contract_start_date: "",
    type: 0,
  });
  const [employmentDetails, setEmploymentDetails] = useState<IemploymentDetailsParams>({
    attendance_allowance_paid: -1,
    department_id: -1,
    entitle_ot: -1,
    meal_allowance_paid: -1,
    operational_allowance_paid: -1,
    position_id: -1,
  });

  const [salaryWages, setSalaryWages] = useState<IsalaryWagesParams>({
    audit_salary: 220000,
    basic_salary: 220000,
    health_insurance: 220000,
    meal_allowance: 220000,
    safety_insurance: 220000,
  });

  const [others, setOthers] = useState<IothersParams>({
    account_user_id: -1,
    benefits: [],
    grade_id: -1,
    remark: "",
  });

  const [marriages, setMarriages] = useState<Array<any>>([]);
  const [listDepartment, setListDepartment] = useState<Array<any>>([]);
  const [listPosition, setListPosition] = useState<Array<any>>([]);
  const [listGrade, setListGrade] = useState<Array<any>>([]);
  const [listBenefits, setListBenefits] = useState<Array<any>>([]);
  const [listContract, setListContract] = useState<Array<any>>([]);
  const [errorContract, setErrorContract] = useState<any>("");

  useEffect(() => {
    getDepartment().then((res) => setListDepartment(res));
    getPosition().then((res) => setListPosition(res));
    getGrade().then((res) => setListGrade(res));
    getMarriageStatus().then((res) => setMarriages(res));
    getContract().then((res) => setListContract(res));
  }, []);

  useEffect(() => {
    getBenefits(others.grade_id).then((res) => setListBenefits(res));
  }, [others.grade_id]);

  const updateEmployeeInformation = (property: any, value: any) => {
    setEmployeeInformation((pre: any) => ({ ...pre, [property]: value }));
  };

  const updateContractInformation = (property: any, value: any) => {
    setContractInformation((pre) => ({ ...pre, [property]: value }));
  };

  const updateEmploymentDetails = (property: any, value: any) => {
    setEmploymentDetails((pre) => ({ ...pre, [property]: value }));
  };

  const updateSalaryWages = (property: any, value: any) => {
    setSalaryWages((pre) => ({ ...pre, [property]: value }));
  };

  const updateOthers = (property: any, value: any) => {
    if (property === "benefits") {
      setOthers((pre) => {
        if (pre.benefits.includes(value)) return { ...pre, benefits: pre.benefits.filter((id) => id != value) };
        return { ...pre, benefits: [...pre.benefits, value] };
      });

      return;
    }

    setOthers((pre) => ({ ...pre, [property]: value }));
  };

  const handleAddContract = async (file: any, date: string, contract_name: string) => {
    try {
      await addContract(file, date, contract_name);
      getContract().then((res) => setListContract(res));
    } catch (er: any) {
      setErrorContract(er);
    }
  };

  const handleAddEmployee = async () => {
    setLoading(true);
    await props.callAddEmployee(employeeInformation, contractInformation, employmentDetails, salaryWages, others);
    setLoading(false);

    navigate(ROUTES.home + "/" + ROUTES.employee);
  };

  const removeErrorContract = () => {
    setErrorContract(false);
  };

  return (
    <div className="relative w-[45vw] lg:w-[65vw] h-screen ">
      <div className="flex gap-2 text-sm ">
        <Link to={ROUTES.home} className="no-underline text-black">
          <FormattedMessage id="home.general" />
        </Link>
        <p>{">"}</p>
        <Link to={"../../" + ROUTES.employee} className="no-underline text-black">
          <FormattedMessage id="home.employee" />
        </Link>
        <p>{">"}</p>
        <div className="font-semibold">
          <FormattedMessage id="home.employee.add" />
        </div>
      </div>

      <div className="text-3xl font-semibold flex w-full justify-between">
        <div className="w-full">
          <FormattedMessage id="home.employee" />
        </div>
        <Button
          onClick={handleAddEmployee}
          disabled={
            listRequirer.eInfor.filter(
              (field) =>
                employeeInformation[field as keyof IemployeeInformationParams] === -1 ||
                employeeInformation[field as keyof IemployeeInformationParams] === ""
            ).length ||
            listRequirer.contractInfor.filter(
              (field) =>
                contractInformation[field as keyof IcontractInformationParams] === -1 ||
                contractInformation[field as keyof IcontractInformationParams] === ""
            ).length ||
            listRequirer.salaryWages.filter(
              (field) =>
                salaryWages[field as keyof IsalaryWagesParams] === -1 ||
                salaryWages[field as keyof IsalaryWagesParams] === ""
            ).length ||
            loading
              ? true
              : false
          }
          variant="primary"
          style={{
            backgroundColor: `${
              !listRequirer.eInfor.filter(
                (field) =>
                  employeeInformation[field as keyof IemployeeInformationParams] === -1 ||
                  employeeInformation[field as keyof IemployeeInformationParams] === ""
              ).length &&
              !listRequirer.contractInfor.filter(
                (field) =>
                  contractInformation[field as keyof IcontractInformationParams] === -1 ||
                  contractInformation[field as keyof IcontractInformationParams] === ""
              ).length &&
              !listRequirer.salaryWages.filter((field) => salaryWages[field as keyof IsalaryWagesParams] === -1).length
                ? ""
                : "gray"
            }`,
            color: "white",
            display: "flex",
          }}
        >
          <Spinner hidden={loading ? false : true} style={{ width: "20px", height: "20px", marginRight: "10px" }} />
          <FormattedMessage id="add" />
        </Button>
      </div>

      <div className="mt-10 flex flex-col lg:flex-row gap-2">
        <Link
          to={ROUTES.employeeInfor}
          onClick={() => setPath(ROUTES.employeeInfor)}
          className={`${
            path.includes(ROUTES.employeeInfor)
              ? `${
                  listRequirer.eInfor.filter(
                    (field) =>
                      employeeInformation[field as keyof IemployeeInformationParams] === -1 ||
                      employeeInformation[field as keyof IemployeeInformationParams] === ""
                  ).length
                    ? "text-[#FFEFEF] bg-[#EF6165]"
                    : "text-white bg-[#0091FF]"
                }`
              : `${
                  listRequirer.eInfor.filter(
                    (field) =>
                      employeeInformation[field as keyof IemployeeInformationParams] === -1 ||
                      employeeInformation[field as keyof IemployeeInformationParams] === ""
                  ).length
                    ? "text-[#EF6165] bg-[#FFEFEF]"
                    : "text-[#0091FF] bg-[#E1F0FF]"
                }`
          } py-2 px-4 rounded-lg no-underline`}
        >
          <FormattedMessage id="add.employee.information" />
          <FontAwesomeIcon className="pl-2" icon={faCircleInfo} />
        </Link>

        <Link
          to={ROUTES.contractInfor}
          onClick={() => setPath(ROUTES.contractInfor)}
          className={`${
            path.includes(ROUTES.contractInfor)
              ? `${
                  listRequirer.contractInfor.filter(
                    (field) =>
                      contractInformation[field as keyof IcontractInformationParams] === -1 ||
                      contractInformation[field as keyof IcontractInformationParams] === ""
                  ).length
                    ? "text-[#FFEFEF] bg-[#EF6165]"
                    : "text-white bg-[#0091FF]"
                }`
              : `${
                  listRequirer.contractInfor.filter(
                    (field) =>
                      contractInformation[field as keyof IcontractInformationParams] === -1 ||
                      contractInformation[field as keyof IcontractInformationParams] === ""
                  ).length
                    ? "text-[#EF6165] bg-[#FFEFEF]"
                    : "text-[#0091FF] bg-[#E1F0FF]"
                }`
          } py-2 px-4 rounded-lg no-underline`}
        >
          <FormattedMessage id="add.contract.information" />
          <FontAwesomeIcon className="pl-2" icon={faCircleInfo} />
        </Link>

        <Link
          to={ROUTES.employmentDetails}
          onClick={() => setPath(ROUTES.employmentDetails)}
          className={`${
            path.includes(ROUTES.employmentDetails) ? "text-white bg-[#0091FF]" : "text-[#0091FF] bg-[#E1F0FF]"
          } py-2 px-4 rounded-lg no-underline`}
        >
          <FormattedMessage id="add.employment.details" />
        </Link>

        <Link
          to={ROUTES.salaryWages}
          onClick={() => setPath(ROUTES.salaryWages)}
          className={`${
            path.includes(ROUTES.salaryWages)
              ? `${
                  listRequirer.salaryWages.filter(
                    (field) =>
                      salaryWages[field as keyof IsalaryWagesParams] === -1 ||
                      salaryWages[field as keyof IsalaryWagesParams] === ""
                  ).length
                    ? "text-[#FFEFEF] bg-[#EF6165]"
                    : "text-white bg-[#0091FF]"
                }`
              : `${
                  listRequirer.salaryWages.filter(
                    (field) =>
                      salaryWages[field as keyof IsalaryWagesParams] === -1 ||
                      salaryWages[field as keyof IsalaryWagesParams] === ""
                  ).length
                    ? "text-[#EF6165] bg-[#FFEFEF]"
                    : "text-[#0091FF] bg-[#E1F0FF]"
                }`
          } py-2 px-4 rounded-lg no-underline`}
        >
          <FormattedMessage id="add.salary.wages" />
          <FontAwesomeIcon className="pl-2" icon={faCircleInfo} />
        </Link>

        <Link
          to={ROUTES.others}
          onClick={() => setPath(ROUTES.others)}
          className={`${
            path.includes(ROUTES.others) ? "text-white bg-[#0091FF]" : "text-[#0091FF] bg-[#E1F0FF]"
          } py-2 px-4 rounded-lg no-underline`}
        >
          <FormattedMessage id="add.others" />
        </Link>
      </div>
      <div className="w-full">
        <Outlet
          context={[
            {
              employeeInformation,
              updateEmployeeInformation,
              contractInformation,
              updateContractInformation,
              listDepartment,
              listPosition,
              employmentDetails,
              updateEmploymentDetails,
              updateSalaryWages,
              others,
              listGrade,
              listBenefits,
              updateOthers,
              salaryWages,
              marriages,
              listContract,
              handleAddContract,
              errorContract,
              removeErrorContract,
            },
          ]}
        />
      </div>

      <div className="text-sm pb-6 mx-auto text-center">Copyright © 2022. All Rights Reserved</div>
    </div>
  );
};

export default AddEmployee;
