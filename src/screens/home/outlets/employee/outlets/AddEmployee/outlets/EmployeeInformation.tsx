import React from "react";
import { Dropdown, FormText } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import TitleInputForm from "../../../../../../../commons/components/TitleInputForm";
import InputForm from "../../../../../../../commons/components/InputForm";
import { useOutletContext } from "react-router-dom";

const EmployeeInformation = () => {
  const [props]: Array<any> = useOutletContext();

  return (
    <div className="p-4 bg-[#FBFCFD] rounded-lg my-6">
      <div className=" flex justify-between text-xl font-semibold">
        <FormattedMessage id="add.personal.information" />
        <div className="flex text-sm required">
          <FormattedMessage id="required" />
        </div>
      </div>

      <div className=" h-[1px] w-full bg-slate-300 mt-2"></div>

      <div className="flex flex-col lg:flex-row">
        <table
          style={{
            borderCollapse: "separate",
            borderSpacing: "6px",
          }}
          className="mt-3"
        >
          <tbody>
            <tr>
              <TitleInputForm title="add.nik" required={false} />
              <InputForm
                tab={props.employeeInformation}
                field="nik"
                updateEmployeeInformation={props.updateEmployeeInformation}
                type="text"
              />
            </tr>

            <tr>
              <TitleInputForm title="add.name" required={true} />
              <InputForm
                tab={props.employeeInformation}
                field="name"
                updateEmployeeInformation={props.updateEmployeeInformation}
                type="text"
              />
            </tr>

            <tr>
              <TitleInputForm title="add.gender" required={true} />

              <td className="w-60">
                <Dropdown>
                  <Dropdown.Toggle
                    className="w-full drop-down-factory py-2 inline-block"
                    style={{ backgroundColor: "#F1F3F5", outline: "none" }}
                    variant=""
                  >
                    {!props.employeeInformation.gender ? (
                      <FormattedMessage id="male" />
                    ) : (
                      <FormattedMessage id="female" />
                    )}
                  </Dropdown.Toggle>

                  <Dropdown.Menu variant="" className="w-full">
                    <Dropdown.Item onClick={() => props.updateEmployeeInformation("gender", 0)}>
                      <FormattedMessage id="male" />
                    </Dropdown.Item>

                    <Dropdown.Item onClick={() => props.updateEmployeeInformation("gender", 1)}>
                      <FormattedMessage id="female" />
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>

            <tr>
              <TitleInputForm title="add.mother.name" required={false} />
              <InputForm
                tab={props.employeeInformation}
                field="mother_name"
                updateEmployeeInformation={props.updateEmployeeInformation}
                type="text"
              />
            </tr>
            <tr>
              <TitleInputForm title="add.date.of.birth" required={true} />
              <InputForm
                tab={props.employeeInformation}
                field="dob"
                updateEmployeeInformation={props.updateEmployeeInformation}
                type="date"
              />
            </tr>

            <tr>
              <TitleInputForm title="add.place.of.birth" required={false} />
              <InputForm
                tab={props.employeeInformation}
                field="pob"
                updateEmployeeInformation={props.updateEmployeeInformation}
                type="text"
              />
            </tr>

            <tr>
              <TitleInputForm title="add.ktp.no" required={true} />
              <InputForm
                tab={props.employeeInformation}
                field="ktp_no"
                updateEmployeeInformation={props.updateEmployeeInformation}
                type="number"
              />
            </tr>

            <tr>
              <TitleInputForm title="add.national.id.card" required={true} />
              <InputForm
                tab={props.employeeInformation}
                field="nc_id"
                updateEmployeeInformation={props.updateEmployeeInformation}
                type="number"
              />
            </tr>

            <tr>
              <TitleInputForm title="add.home.address.1" required={false} />
              <InputForm
                tab={props.employeeInformation}
                field="home_address_1"
                updateEmployeeInformation={props.updateEmployeeInformation}
                type="text"
              />
            </tr>

            <tr>
              <TitleInputForm title="add.home.address.2" required={false} />
              <InputForm
                tab={props.employeeInformation}
                field="home_address_2"
                updateEmployeeInformation={props.updateEmployeeInformation}
                type="text"
              />
            </tr>
          </tbody>
        </table>

        <table
          style={{
            borderCollapse: "separate",
            borderSpacing: "6px",
          }}
          className="mt-3"
        >
          <tbody>
            <tr>
              <TitleInputForm title="add.mobile.no" required={false} />
              <InputForm
                tab={props.employeeInformation}
                field="mobile_no"
                updateEmployeeInformation={props.updateEmployeeInformation}
                type="number"
              />
            </tr>

            <tr>
              <TitleInputForm title="add.tel.no" required={false} />
              <InputForm
                tab={props.employeeInformation}
                field="tel_no"
                updateEmployeeInformation={props.updateEmployeeInformation}
                type="number"
              />
            </tr>

            <tr>
              <TitleInputForm title="add.marriage.status" required={true} />

              <td className="w-60">
                <Dropdown>
                  <Dropdown.Toggle
                    className="w-full drop-down-factory py-2 inline-block"
                    style={{ backgroundColor: "#F1F3F5", outline: "none" }}
                    variant=""
                  >
                    {props.marriages.filter((item: any) => item.id == props.employeeInformation.marriage_id).length
                      ? props.marriages.filter((item: any) => item.id == props.employeeInformation.marriage_id)[0]?.name
                      : "Select Marriage"}
                  </Dropdown.Toggle>

                  <Dropdown.Menu variant="" className="w-full">
                    {props.marriages?.map((item: any, id: any) => (
                      <Dropdown.Item key={id} onClick={() => props.updateEmployeeInformation("marriage_id", item.id)}>
                        {item.name}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>

            <tr>
              <TitleInputForm title="add.bank.account.no" required={false} />
              <InputForm
                tab={props.employeeInformation}
                field="bank_account_no"
                updateEmployeeInformation={props.updateEmployeeInformation}
                type="number"
              />
            </tr>

            <tr>
              <TitleInputForm title="add.bank.name" required={false} />
              <InputForm
                tab={props.employeeInformation}
                field="bank_name"
                updateEmployeeInformation={props.updateEmployeeInformation}
                type="text"
              />
            </tr>

            <tr>
              <TitleInputForm title="add.family.card.number" required={false} />
              <InputForm
                tab={props.employeeInformation}
                field="family_card_number"
                updateEmployeeInformation={props.updateEmployeeInformation}
                type="number"
              />
            </tr>

            <tr>
              <TitleInputForm title="add.safety.insurance.no" required={false} />
              <InputForm
                tab={props.employeeInformation}
                field="safety_insurance_no"
                updateEmployeeInformation={props.updateEmployeeInformation}
                type="number"
              />
            </tr>

            <tr>
              <TitleInputForm title="add.health.insurance.no" required={false} />
              <InputForm
                tab={props.employeeInformation}
                field="health_insurance_no"
                updateEmployeeInformation={props.updateEmployeeInformation}
                type="number"
              />
            </tr>
            <tr>
              <td>
                <div className="bg-[#FBFCFD] h-10"></div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="bg-[#FBFCFD] h-10"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeInformation;
