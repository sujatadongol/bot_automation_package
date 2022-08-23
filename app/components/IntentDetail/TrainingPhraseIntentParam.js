import React from 'react';
import { Col, Row } from 'antd';
import CreateIntentComponentStyle from '../CreateIntent/Style';
import remove from '../../assets/intentRemove.svg';
import {
  ExtractWordContainingParam,
  ExtractWordInsideBracket,
  ExtractWordInsideSquareBracket,
} from '../../containers/CreateIntentPage/helperFile';

const TrainingPhraseIntentParam = ({
  phraseText,
  mentionData,
  intentParamIdForTrainingPhrase,
  intentParameterList,
  trainingPhraseId,
  removeIntentParamFromParticularTrainingPhrase,
}) => {
  let paramId = [];
  let resolvedValueId = [];
  let resolvedValueList = [];
  console.log({ resolvedValueList });
  ExtractWordContainingParam(phraseText).map(single => {
    if (ExtractWordInsideSquareBracket(single).charAt([0]) === '@') {
      paramId.push(ExtractWordInsideBracket(single));
    } else if (ExtractWordInsideSquareBracket(single).charAt([0]) === '$') {
      resolvedValueList.push(ExtractWordInsideSquareBracket(single));
      mentionData &&
        mentionData.map(singleIntent => {
          if (single.includes(singleIntent.id)) {
            resolvedValueId.push(singleIntent.id);
          }
        });
    } else {
    }
  });
  // filter resolved mentions and param mentions
  let resolvedValueMentions = [];
  let paramValueMentions = [];
  mentionData &&
    mentionData.map(singleMentionObj => {
      if (singleMentionObj.display[0] === '@') {
        paramValueMentions.push(singleMentionObj);
      } else if (singleMentionObj.display[0] === '$') {
        resolvedValueMentions.push(singleMentionObj);
      } else {
      }
    });

  // remove duplicates in both mentions, based on ids
  let removeDuplicateInParam =
    paramId.length > 0 ? [...new Set(paramId)] : undefined;
  let removeDuplicateInResolved =
    resolvedValueId.length > 0 ? [...new Set(resolvedValueId)] : undefined;

  let intentParamWithParamName = [];
  let intentParamWithResolvedValue = [];
  return (
    <CreateIntentComponentStyle>
      <div className="intent-row-wrapper">
        <Row
          gutter={20}
          hidden={
            mentionData === undefined ||
            (intentParamWithResolvedValue === [] &&
              intentParamWithParamName === []) ||
            (paramValueMentions === [] && resolvedValueMentions === []) ||
            (removeDuplicateInParam === undefined &&
              removeDuplicateInResolved === undefined)
          }
        >
          <Col className="intent-list-title" span={1} />
          <Col className="intent-list-title" span={8}>
            Parameter Name
          </Col>
          <Col className="intent-list-title" span={7}>
            Entity
          </Col>
          <Col className="intent-list-title" span={7}>
            Resolved Value
          </Col>
          <Col className="intent-list-title" span={1} />
        </Row>

        {/* to display intent param containing param name */}
        {removeDuplicateInParam &&
          removeDuplicateInParam.map(single => {
            const res =
              intentParameterList &&
              intentParameterList.filter(
                singleIntentParam => singleIntentParam.id.toString() === single,
              );
            intentParamWithParamName.push(res[0]);
          })}
        {intentParamWithParamName.length > 0 &&
          intentParamWithParamName.map(singleRow => (
            <Row gutter={20} style={{ background: '#fafafa' }}>
              <Col className="intent-list-data" span={1} />
              <Col className="intent-list-data" span={8}>
                {singleRow && singleRow.value.paramName}
              </Col>
              <Col className="intent-list-data" span={7}>
                <span
                  style={{
                    border: 'none !important',
                    fontSize: '15px',
                    color: '#333',
                    height: 18,
                    background: '#FFF1C7',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {' '}
                  @{singleRow && singleRow.value.botEntity.entityName}
                </span>
              </Col>
              <Col className="intent-list-data" span={7}>
                ${singleRow && singleRow.value.paramName}
              </Col>
              <div className="intent-list-data">
                <img
                  src={remove}
                  style={{
                    height: 'fit-content',
                    cursor: 'pointer',
                    margin: '10px 12px 0 12px',
                  }}
                  onClick={e => {
                    e.preventDefault();
                    removeIntentParamFromParticularTrainingPhrase(
                      trainingPhraseId,
                      singleRow.id,
                      singleRow && singleRow.value.paramName,
                    );
                  }}
                />
              </div>
            </Row>
          ))}

        {/* to display intent param containing resolved value */}
        {removeDuplicateInResolved &&
          removeDuplicateInResolved.map(single => {
            const res =
              intentParameterList &&
              intentParameterList.filter(
                singleIntentParam => singleIntentParam.id.toString() === single,
              );
            intentParamWithResolvedValue.push(res[0]);
          })}

        {/* check if only resolved value present in given training phrases is shown,validate from phraseText */}
        {intentParamWithResolvedValue.length > 0 &&
          intentParamWithResolvedValue.map(
            singleRow =>
              singleRow &&
              singleRow.value.resolvedValue.length > 0 &&
              singleRow.value.resolvedValue.map(singleResolvedValue => {
                if (
                  resolvedValueList.includes(`$${singleResolvedValue.value}`)
                ) {
                  if (
                    phraseText.includes(singleResolvedValue.value) &&
                    phraseText.includes(singleRow && singleRow.id)
                  ) {
                    return (
                      <Row gutter={20}>
                        <Col className="intent-list-data" span={1} />
                        <Col className="intent-list-data" span={8}>
                          {singleRow && singleRow.value.paramName}
                        </Col>
                        <Col className="intent-list-data" span={7}>
                          <span
                            style={{
                              border: 'none !important',
                              fontSize: '15px',
                              color: '#333',
                              height: 18,
                              background: '#FFF1C7',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            {' '}
                            @{singleRow && singleRow.value.botEntity.entityName}
                          </span>
                        </Col>
                        <Col className="intent-list-data" span={7}>
                          {singleRow && singleResolvedValue.value}
                        </Col>
                        <Col span={1} className="intent-list-data">
                          <img
                            src={remove}
                            style={{
                              height: 'fit-content',
                              cursor: 'pointer',
                            }}
                            onClick={e => {
                              e.preventDefault();
                              removeIntentParamFromParticularTrainingPhrase(
                                trainingPhraseId,
                                singleRow.id,
                                undefined,
                                singleResolvedValue.value,
                              );
                            }}
                          />
                        </Col>
                      </Row>
                    );
                  }
                }
              }),
          )}
      </div>
    </CreateIntentComponentStyle>
  );
};

export default TrainingPhraseIntentParam;
