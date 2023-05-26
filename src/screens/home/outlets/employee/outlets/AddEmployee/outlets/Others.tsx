import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useOutletContext } from "react-router-dom";
import TitleInputForm from "../../../../../../../commons/components/TitleInputForm";
import { Button, Dropdown, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Others = () => {
  const [props]: Array<any> = useOutletContext();

  const [hiddenBenefits, setHiddenBenefits] = useState<boolean>(true);

  return (
    <div className="p-4 bg-[#FBFCFD] rounded-lg my-6">
      <div className=" flex justify-between text-xl font-semibold">
        <FormattedMessage id="add.others" />
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
            <TitleInputForm required={false} title="add.grade" />

            <td className="w-80">
              <Dropdown>
                <Dropdown.Toggle
                  className="w-full drop-down-factory py-2 inline-block"
                  style={{ backgroundColor: "#F1F3F5", outline: "none" }}
                  variant=""
                >
                  <div className="mx-auto text-center my-auto inline-block">
                    {props.listGrade?.filter((grade: any) => grade.id == props.others.grade_id).length
                      ? props.listGrade?.filter((grade: any) => grade.id == props.others.grade_id)[0]?.name
                      : "Select grade"}
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu variant="" className="w-full">
                  {props.listGrade?.map((grade: any, idx: any) => (
                    <Dropdown.Item onClick={() => props.updateOthers("grade_id", grade.id)} key={idx}>
                      <div className="bg-green-300/[.2] text-center text-green-600 p-1 rounded-lg">{grade.name}</div>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
          <tr>
            <TitleInputForm required={false} title="add.benefit" />
            <td>
              <Button
                onClick={() => setHiddenBenefits((pre) => !pre)}
                style={{ backgroundColor: "#F1F3F5" }}
                className="w-80 py-2"
                variant=""
              >
                Choose benefits
              </Button>
            </td>
          </tr>
        </tbody>
      </table>

      <div
        hidden={hiddenBenefits}
        className="modal show w-60 bg-gray-100 rounded-xl mb-2"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Header className="flex">
          <Modal.Title>Benefits</Modal.Title>
          <FontAwesomeIcon
            onClick={() => setHiddenBenefits(true)}
            className="h-6 cursor-pointer bg-gray-300 p-2 rounded-lg"
            icon={faClose}
          />
        </Modal.Header>

        <Modal.Body>
          <div className="flex gap-2 flex-wrap h-40">
            {props.listBenefits?.map((benefit: any, idx: any) => (
              <button
                onClick={() => props.updateOthers("benefits", benefit.id)}
                key={idx}
                className={`${
                  props.others.benefits.includes(benefit.id)
                    ? "bg-green-600 text-white"
                    : "bg-green-300/[.2] text-green-600"
                } text-center  py-1 px-2 rounded-lg`}
              >
                {benefit.name}
              </button>
            ))}
          </div>
        </Modal.Body>
      </div>

      <table>
        <tbody>
          <tr>
            <td className="pl-4 pr-4">
              <FormattedMessage id="add.remark" />
            </td>
            <td>
              <textarea className="p-2 h-32 bg-[#F1F3F5] w-80 rounded-lg outline-none"></textarea>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Others;
