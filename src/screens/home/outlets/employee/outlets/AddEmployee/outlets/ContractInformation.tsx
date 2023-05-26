import React, { useContext, useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import TitleInputForm from "../../../../../../../commons/components/TitleInputForm";
import InputForm from "../../../../../../../commons/components/InputForm";
import { useOutletContext } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from "uuid";

const ContractInformation = () => {
  const [props]: Array<any> = useOutletContext();
  const refUpload = useRef<any>(null);
  const [fileChoose, setFileChoose] = useState<any>(null);
  const [contractName, setContractName] = useState(null);
  const [date, setDate] = useState(null);
  const [listContract, setListContract] = useState<any>([]);

  const handleClickUpload = (e: any) => {
    refUpload.current.click();
  };

  const handleChoose = (e: any) => {
    setFileChoose(e.target.files ? e.target.files[0] : null);
    e.target.value = null;
  };

  const handleAdd = () => {
    setListContract((pre: any) => [...pre, { contractName, date, file: fileChoose, id: uuid() }]);
    setContractName(null);
    setFileChoose(null);
    setDate(null);
  };

  const handleDelete = (id: any) => {
    setListContract((pre: any) => pre.filter((contract: any) => contract.id != id));
  };

  return (
    <div className="p-4 bg-[#FBFCFD] rounded-lg my-6">
      <div className=" flex justify-between text-xl font-semibold">
        <FormattedMessage id="add.contract.information" />
        <div className="flex text-sm required">
          <FormattedMessage id="required" />
        </div>
      </div>

      <div className=" h-[1px] w-full bg-slate-300 mt-2"></div>

      <table
        style={{
          borderCollapse: "separate",
          borderSpacing: "6px",
        }}
        className="mt-3"
      >
        <tbody>
          <tr>
            <TitleInputForm required title="add.date.start" />
            <InputForm
              tab={props.contractInformation}
              field="contract_start_date"
              updateEmployeeInformation={props.updateContractInformation}
              type="date"
            />
          </tr>
          <tr>
            <TitleInputForm required title="add.employee.type" />

            <td>
              <Dropdown>
                <Dropdown.Toggle
                  className="w-full drop-down-factory py-2 inline-block"
                  style={{ backgroundColor: "#F1F3F5", outline: "none" }}
                  variant=""
                >
                  {!props.contractInformation.type ? (
                    <FormattedMessage id="part.time" />
                  ) : (
                    <FormattedMessage id="full.time" />
                  )}
                </Dropdown.Toggle>

                <Dropdown.Menu variant="" className="w-full">
                  <Dropdown.Item onClick={() => props.updateContractInformation("type", 0)}>
                    <FormattedMessage id="part.time" />
                  </Dropdown.Item>

                  <Dropdown.Item onClick={() => props.updateContractInformation("type", 1)}>
                    <FormattedMessage id="full.time" />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="w-full rounded-xl mt-6 border-2 border-gray-200">
        <div className="text-[#687076] px-4 font-semibold bg-[#F1F3F5] py-1 rounded-t-xl">Contract:</div>

        <div className="bg-[#FBFCFD] px-4 py-2">Please upload pdf, png, xlsx, docx file format!</div>
        <div className=" h-[1px] w-full bg-slate-300"></div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div>
            <table
              style={{
                borderCollapse: "separate",
                borderSpacing: "6px",
              }}
              className="mt-3 pl-6"
            >
              <tbody>
                <tr>
                  <TitleInputForm required={false} title="add.contract.date" />
                  <td className="w-72">
                    <input
                      onChange={(e) => setDate(e.target.value as any)}
                      type="date"
                      value={date ? date : ""}
                      className="bg-[#F1F3F5] rounded-lg py-[10px] px-2 w-full outline-none"
                    />
                  </td>
                </tr>

                <tr>
                  <TitleInputForm required={false} title="add.contract.name" />
                  <td className="w-72 ">
                    <input
                      onChange={(e) => setContractName(e.target.value as any)}
                      type="text"
                      value={contractName ? contractName : ""}
                      className="bg-[#F1F3F5] rounded-lg py-[10px] px-2 w-full outline-none"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mb-6 w-full">
              <label className="px-6 mt-2 flex gap-3 w-full">
                <input onChange={handleChoose} hidden ref={refUpload} id="upload" name="upload" type="file" />
                <button
                  onClick={handleClickUpload}
                  className="bg-[#EDF6FF] text-[#0091FF] text-xl py-2 w-full border-2 border-dashed border-[#0091FF] rounded-xl"
                >
                  Upload
                </button>
                <button
                  disabled={!fileChoose || !contractName || !date}
                  onClick={handleAdd}
                  className={`${
                    !fileChoose || !contractName || !date ? "bg-gray-400" : "bg-[#69D9C1]"
                  } text-white text-xl py-2 w-full  rounded-xl`}
                >
                  Add
                </button>
              </label>

              <div className="px-8 mt-2">{fileChoose ? fileChoose.name : ""}</div>
            </div>
          </div>
          <div className="h-[1px] w-full lg:w-[1px] lg:h-40 my-auto bg-slate-300"></div>
          <div className="mt-3 w-full px-4 rounded-xl">
            <table
              style={{
                borderCollapse: "separate",
              }}
              className="w-full rounded-xl"
            >
              <tbody className="w-full">
                <tr className="w-full relative text-center bg-[#F8F9FA] brightness-90">
                  <td>
                    <div>Contract name</div>
                  </td>
                  <td>
                    <div>Sign Date</div>
                  </td>
                  <td>
                    <div>Action</div>
                  </td>
                </tr>
                {listContract.map((contract: any, id: any) => (
                  <tr className="bg-[#F8F9FA] text-center" key={id}>
                    <td>{contract.contractName}</td>
                    <td>{contract.date}</td>
                    <td className="text-center">
                      <div className="text-center flex gap-2">
                        <div className="mx-auto flex gap-2">
                          <div>{contract.file.name}</div>
                          <FontAwesomeIcon
                            className="text-red-500 my-auto cursor-pointer"
                            onClick={() => handleDelete(contract.id)}
                            icon={faDeleteLeft}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractInformation;
