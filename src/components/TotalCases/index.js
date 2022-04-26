import React from "react";
import CaseCard from "../CaseCard";
import { Row, Col, Divider } from "antd";
import { getIn } from "timm";
import {numberWithCommas} from "../../utils";
import "./style.css";

function TotalCases({ data }) {
  const totalCured = getIn(data, [0, "cured"]) || 0;
  const totalDeath = getIn(data, [0, "death"]) || 0;
  const totalPositive = getIn(data, [0, "positive"]) || 0;
  const totalActive = getIn(data, [0, "active"]) || 0;
  return (
    <div className="total-cases-wrapper">
      <div className="total-cases-heading"> Corona Tracker</div>
      <Row gutter={10}>
        <Col className="gutter-row" xl={6} xm={6} xs={12}>
          <CaseCard
            title="Total Active"
            description={numberWithCommas(totalActive)}
            img="https://img.icons8.com/external-wanicon-lineal-color-wanicon/512/000000/external-bed-virus-mutation-wanicon-lineal-color-wanicon.png"
          />
        </Col>
        <Col className="gutter-row" xl={6}  xm={6} xs={12}>
          <CaseCard
            title="Total Cured"
            description={numberWithCommas(totalCured)}
            img="https://img.icons8.com/external-wanicon-lineal-color-wanicon/512/000000/external-immunity-virus-mutation-wanicon-lineal-color-wanicon.png"
          />
        </Col>
        <Col className="gutter-row" xl={6}  xm={6} xs={12} >
          <CaseCard
            title="Total Positive"
            description={numberWithCommas(totalPositive)}
            img="https://img.icons8.com/external-wanicon-lineal-color-wanicon/512/000000/external-bed-virus-mutation-wanicon-lineal-color-wanicon.png"
          />
        </Col>
        <Col className="gutter-row" xl={6}  xm={6} xs={12}>
          <CaseCard
            title="Total Death"
            description={numberWithCommas(totalDeath)}
            img="https://img.icons8.com/external-wanicon-lineal-color-wanicon/512/000000/external-death-virus-mutation-wanicon-lineal-color-wanicon.png"
          />
        </Col>
      </Row>
    </div>
  );
}

export default TotalCases;
