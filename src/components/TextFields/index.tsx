import React from "react";
import TextFields from "./textField";
import ComposedTextField from "./components";
import TextFieldMargins from "./layout";
import InputAdornments from "./inputAdornments";
import FormattedInputs from "./formattedInputs/FormattedInputs";
import Inputs from "./inputs";
import CardBox from "@/components/CardBox";
import ContainerHeader from "@/components/ContainerHeader";
import IntlMessages from "@/utils/IntlMessages";

const TextField = ({ match }: any) => {
  return (
    <div className="animated slideInUpTiny animation-duration-3">
      <ContainerHeader
        title={<IntlMessages id="sidebar.components.textFields" />}
        match={match}
      />

      <div className="row mb-md-3">
        <CardBox
          styleName="col-lg-12"
          heading={<IntlMessages id="component.textFields.textfield" />}
        >
          <TextFields />
        </CardBox>
      </div>

      <div className="row mb-md-3">
        <CardBox
          styleName="col-lg-12"
          heading={<IntlMessages id="component.textFields.components" />}
        >
          <ComposedTextField />
        </CardBox>
      </div>

      <div className="row mb-md-3">
        <CardBox
          styleName="col-lg-12"
          heading={<IntlMessages id="component.textFields.layout" />}
        >
          <TextFieldMargins />
        </CardBox>
      </div>

      <div className="row mb-md-3">
        <CardBox
          styleName="col-lg-12"
          heading={<IntlMessages id="component.textFields.inputAdornments" />}
        >
          <InputAdornments />
        </CardBox>
      </div>

      <div className="row mb-md-3">
        <CardBox
          styleName="col-lg-12"
          heading={<IntlMessages id="component.textFields.formattedInputs" />}
        >
          <FormattedInputs />
        </CardBox>
      </div>

      <div className="row">
        <CardBox
          styleName="col-lg-12"
          heading={<IntlMessages id="component.textFields.inputs" />}
        >
          <Inputs />
        </CardBox>
      </div>
    </div>
  );
};

export default TextField;