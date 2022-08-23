import React from 'react';
import { Col, Input, Row, Tag } from 'antd';
import remove from '../../../../../assets/intentRemove.svg';
import styled from 'styled-components';

const BotEntityStyle = styled.span`
  .tagStyle {
    overflow: auto;
  }

  .tagStyle::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  .tagStyle::-webkit-scrollbar-track {
    background: #fff;
    border-radius: 10px;
  }

  /* Handle */
  .tagStyle::-webkit-scrollbar-thumb {
    background: #e6e6e6;
    border-radius: 10px;
    max-height: 10px !important;
  }

  /* Handle on hover */
  .tagStyle::-webkit-scrollbar-thumb:hover {
    background: #e6e6e6;
  }
`

const SynonymComponent = ({
  synonym,
  handleChangeSynonym,
  handleChangeInTagInput,
  removeSynonym,
  handleChangeSynonymTag,
  removeSynonymTag,
}) => {
  const openSynonym = () => {
    const div = [];
    // Outer loop to create parent
    synonym &&
      synonym.map((single, index) => {
        return div.push(
          <BotEntityStyle>
            <Row
            style={
              index === 0
                ? {
                    display: 'flex',
                    alignItems: 'center',
                    border: '0.711111px solid #D2D2D2',
                    padding: '2px',
                  }
                : {
                    display: 'flex',
                    alignItems: 'center',
                    border: '0.711111px solid #D2D2D2',
                    padding: '2px',
                    borderTop: 'none',
                  }
            }
          >
            <Col span={8}>
              <Input
                placeholder={'Enter reference value'}
                value={single.value}
                style={{ height: 34, border: 'none' }}
                onChange={e => {
                  handleChangeSynonym(single.id, e.target.value);
                }}
              />
            </Col>

            <Col span={15} style={{ display: 'flex', alignItems: 'center' }} className='tagStyle'>
              {single.synonyms &&
                single.synonyms.map(key => (
                  <Tag
                    closable={true}
                    onClose={() => {
                      console.log('e', key);
                      removeSynonymTag(single.id, key);
                    }}
                    style={{
                      height: '29px',
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '14px',
                    }}
                  >
                    {key}
                  </Tag>
                ))}
              <Input
                placeholder={'Enter synonym'}
                value={single.inputForTag}
                style={{ height: 34, border: 'none',minWidth:'fit-content' }}
                onPressEnter={e => {
                  handleChangeSynonymTag(single.id, e.target.value);
                }}
                onChange={e => {
                  handleChangeInTagInput(single.id, e.target.value);
                }}
              />
            </Col>
            <Col span={1}>
              <img
                hidden={synonym.length === 1}
                id={single.id}
                src={remove}
                style={{
                  height: 'fit-content',
                  cursor: 'pointer',
                  marginLeft: '5px',
                  marginRight: '5px',
                }}
                onClick={e => {
                  e.preventDefault();
                  removeSynonym(single.id);
                }}
              />
            </Col>
          </Row>
          </BotEntityStyle>,
        );
      });
    return div;
  };
  return <>{openSynonym()}</>;
};
export default SynonymComponent;
