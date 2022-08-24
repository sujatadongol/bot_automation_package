import React, { useEffect, useState } from 'react';
import { Avatar, Checkbox, Modal, Select, Row, Col, Input } from 'antd';
import '../../containers/Bot/BotList/Style.css';
import { timeZone } from './BotConfigurationComponent/GeneralComponent/timezone';
import CustomButton from '../ReusableComponents/Button/Button';
import Loader from '../Loader';
import { HeaderWrapper, Title, CloseButton } from './Style';
import CommonIcon from '../../assets/images/common/CommonIcon';

const CreateBotModal = ({
  visibility,
  closeModal,
  botIconUrl,
  createBot,
  modalLoader,
  uploadBotImage,
  botImageLoader,
  projectDetails,
  teams,
  ticketModal,
}) => {
  const [invalidThreshold, setInvalidThreshold] = useState(false);
  const [botSettingObj, setBotSettingObj] = useState({
    serviceId: localStorage.getItem('serviceId'),
    name: '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    language: ['en'],
    image: '',
    threshold: 0.7,
    inboxVisibility: false,
    noMatchRuleType: 'DO_NOTHING',
  });

  const [subProjectList, setSubProjectList] = useState([]);
  const [boardList, setBoardList] = useState([]);

  // console.log({ botSettingObj });

  useEffect(() => {
    setBotSettingObj({ ...botSettingObj, image: botIconUrl });
  }, [botIconUrl]);

  useEffect(() => {
    if (botSettingObj.threshold < 0.7) {
      setInvalidThreshold(true);
    }
  }, [botSettingObj.threshold]);

  useEffect(() => {
    if (!visibility) {
      setBotSettingObj({
        serviceId: localStorage.getItem('serviceId'),
        name: '',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        language: ['en'],
        image: '',
        threshold: 0.7,
        inboxVisibility: false,
        noMatchRuleType: 'DO_NOTHING',
        replyMessage: '',
      });
    }
  }, [visibility]);

  const isRequiredDataEmpty = botSettings => {
    if (botSettings && botSettings.noMatchRuleType) {
      if (botSettings.noMatchRuleType === 'AUTO_TICKET_CREATE') {
        return (
          !botSettings.name ||
          !botSettings.timezone ||
          !botSettings.language ||
          botSettings.language.length < 1 ||
          !botSettings.threshold ||
          !botSettings.noMatchRuleType ||
          !botSettings.modelId ||
          !botSettings.projectId ||
          !botSettings.subprojectId ||
          !botSettings.boardId ||
          !botSettings.teamId
        );
      }
      if (botSettings.noMatchRuleType === 'MESSAGE_REPLY') {
        return (
          !botSettings.name ||
          !botSettings.timezone ||
          !botSettings.language ||
          botSettings.language.length < 1 ||
          !botSettings.threshold ||
          !botSettings.noMatchRuleType ||
          !botSettings.replyMessage
        );
      }
      return (
        !botSettings.name ||
        !botSettings.timezone ||
        !botSettings.language ||
        botSettings.language.length < 1 ||
        !botSettings.threshold ||
        !botSettings.noMatchRuleType
      );
    }
    return false;
  };

  const handleHandoffRuleChange = e => {
    if (e === 'AUTO_TICKET_CREATE') {
      setBotSettingObj({
        ...botSettingObj,
        noMatchRuleType: e,
        modelId: ticketModal && ticketModal[0].id,
        teamId: teams && teams.length > 0 && teams[0].teamId,
        projectId:
          projectDetails &&
          projectDetails.length > 0 &&
          projectDetails[0].projectId,
        subprojectId:
          projectDetails &&
          projectDetails.length > 0 &&
          projectDetails[0].subProject &&
          projectDetails[0].subProject.length > 0 &&
          projectDetails[0].subProject[0] &&
          projectDetails[0].subProject[0].subProjectId,
        boardId:
          projectDetails &&
          projectDetails.length > 0 &&
          projectDetails[0].subProject &&
          projectDetails[0].subProject.length > 0 &&
          projectDetails[0].subProject[0].board &&
          projectDetails[0].subProject[0].board.length > 0 &&
          projectDetails[0].subProject[0].board[0].boardId,
      });
    } else if (e !== 'MESSAGE_REPLY') {
      setBotSettingObj({
        ...botSettingObj,
        noMatchRuleType: e,
        replyMessage: '',
        model: '',
        projectId: '',
        subprojectId: '',
        boardId: '',
        teamId: '',
      });
    } else {
      setBotSettingObj({
        ...botSettingObj,
        noMatchRuleType: e,
      });
    }
  };

  useEffect(() => {
    if (botSettingObj.projectId) {
      if (projectDetails && projectDetails.length > 0) {
        const selectedProjectDetail = projectDetails.find(
          project => project.projectId === botSettingObj.projectId,
        );

        console.log('SELECTED PROJECT', selectedProjectDetail);

        if (selectedProjectDetail) {
          setBotSettingObj({
            ...botSettingObj,
            subprojectId:
              selectedProjectDetail.subProject &&
              selectedProjectDetail.subProject.length > 0 &&
              selectedProjectDetail.subProject[0].subProjectId,
            boardId:
              selectedProjectDetail.subProject &&
              selectedProjectDetail.subProject.length > 0 &&
              selectedProjectDetail.subProject[0].board &&
              selectedProjectDetail.subProject[0].board.length > 0 &&
              selectedProjectDetail.subProject[0].board[0] &&
              selectedProjectDetail.subProject[0].board[0].boardId,
          });

          setSubProjectList(selectedProjectDetail.subProject || []);

          const selectedBoardList =
            selectedProjectDetail.subProject &&
            selectedProjectDetail.subProject.length > 0 &&
            selectedProjectDetail.subProject[0].board &&
            selectedProjectDetail.subProject[0].board.length > 0 &&
            selectedProjectDetail.subProject[0].board;

          setBoardList(selectedBoardList || []);
        }
      }
    }
  }, [botSettingObj.projectId]);

  useEffect(() => {
    if (botSettingObj.subprojectId) {
      if (subProjectList && subProjectList.length > 0) {
        const selectedSubProject = subProjectList.find(
          subProject => subProject.subProjectId === botSettingObj.subprojectId,
        );

        if (selectedSubProject) {
          setBotSettingObj({
            ...botSettingObj,
            boardId:
              selectedSubProject.board &&
              selectedSubProject.board.length > 0 &&
              selectedSubProject.board[0].boardId,
          });

          setBoardList(selectedSubProject.board || []);
        }
      }
    }
  }, [botSettingObj.subprojectId]);

  // console.log('VALIDATE', isRequiredDataEmpty(botSettingObj));

  return (
    <Modal
      icon
      destroyOnClose
      centered
      visible={visibility}
      footer={null}
      onCancel={closeModal}
      closable={false}
      width={700}
      maskClosable={false}
      bodyStyle={{ paddingTop: 0 }}
    >
      <HeaderWrapper>
        <Title>Create Bot</Title>

        <CloseButton onClick={closeModal}>
          <CommonIcon.CrossIcon color="#000000" />
        </CloseButton>
      </HeaderWrapper>

      <div
        className="create-bot-wrapper"
        id="create-bot-wrapper-id"
        style={
          botSettingObj.noMatchRuleType === 'MESSAGE_REPLY' ||
          botSettingObj.noMatchRuleType === 'AUTO_TICKET_CREATE'
            ? { scrollbarWidth: 'none' }
            : null
        }
      >
        {modalLoader && <Loader height={28} width={28} position="absolute" />}

        <Row className="row-style">
          <Col span={6}>
            <div className="create-bot-label">Bot Name</div>
          </Col>

          <Col span={18}>
            <Input
              type="text"
              size="large"
              className="create-bot-input"
              value={botSettingObj.name}
              onChange={e => {
                setBotSettingObj({
                  ...botSettingObj,
                  name: e.target.value,
                });
              }}
            />
          </Col>
        </Row>

        <Row className="row-style">
          <Col span={6}>
            <div className="create-bot-label">Avatar</div>
          </Col>

          <Col span={18}>
            <div
              style={{ position: 'relative', height: '140px', width: '140px' }}
            >
              {botImageLoader && (
                <Loader position="absolute" width="22px" height="22px" />
              )}
              {!botSettingObj.image ? (
                <>
                  <label htmlFor="file" className="browse-image">
                    Browse Image
                  </label>
                  <input
                    value=""
                    className="file-upload"
                    type="file"
                    id="file"
                    onChange={e => {
                      e.preventDefault();
                      uploadBotImage(e.target.files[0]);
                    }}
                    style={{ display: 'none' }}
                  />
                </>
              ) : (
                <>
                  {' '}
                  <Avatar
                    src={botSettingObj.image}
                    style={{
                      width: '140px',
                      height: '140px',
                      borderRadius: '5px',
                      border: '0.711111px solid #d2d2d2',
                      background: '#fff',
                      padding: '20px',
                    }}
                  />
                  <label
                    htmlFor="file"
                    style={{
                      background: 'rgba(0, 0, 0, 0.25)',
                      borderRadius: ' 0px 0px 5px 5px',
                      fontSize: '13px',
                      color: 'white',
                      width: '140px',
                      height: '34px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      position: 'absolute',
                      marginTop: '-35px',
                      cursor: 'pointer',
                      fontWeight: 600,
                      fontFamily: 'Roboto',
                    }}
                  >
                    Change Image
                  </label>
                  <input
                    className="file-upload"
                    type="file"
                    id="file"
                    onChange={e => {
                      e.preventDefault();
                      uploadBotImage(e.target.files[0]);
                    }}
                    style={{ display: 'none' }}
                  />
                </>
              )}
            </div>
          </Col>
        </Row>

        <Row className="row-style">
          <Col span={6}>
            <div className="create-bot-label">Threshold</div>
          </Col>

          <Col span={18}>
            <Input
              type="number"
              size="large"
              min={0}
              max={1}
              step={0.01}
              className="create-bot-input"
              value={botSettingObj.threshold}
              onChange={e => {
                invalidThreshold && setInvalidThreshold(false);
                setBotSettingObj({
                  ...botSettingObj,
                  threshold: e.target.value,
                });
              }}
            />
            <div
              hidden={!invalidThreshold}
              style={{ display: 'flex', alignItems: 'flex-end' }}
            >
              <div>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7091 10.0951L8.76359 1.00393C7.96901 -0.333754 6.03206 -0.335532 5.23641 1.00393L0.291126 10.0951C-0.521148 11.462 0.46227 13.1929 2.05431 13.1929H11.9455C13.5362 13.1929 14.5214 11.4634 13.7091 10.0951ZM7 11.5522C6.54779 11.5522 6.17969 11.1841 6.17969 10.7319C6.17969 10.2797 6.54779 9.91162 7 9.91162C7.45221 9.91162 7.82031 10.2797 7.82031 10.7319C7.82031 11.1841 7.45221 11.5522 7 11.5522ZM7.82031 8.271C7.82031 8.72321 7.45221 9.09131 7 9.09131C6.54779 9.09131 6.17969 8.72321 6.17969 8.271V4.16944C6.17969 3.71722 6.54779 3.34912 7 3.34912C7.45221 3.34912 7.82031 3.71722 7.82031 4.16944V8.271Z"
                    fill="#FFBB24"
                  />
                </svg>
              </div>

              <div
                style={{
                  fontWeight: 400,
                  fontSize: '12px',
                  color: '#979797',
                  marginLeft: '6px',
                }}
              >
                We recommend the threshold to be atleast 0.7.
              </div>
            </div>
          </Col>
        </Row>

        <Row className="row-style">
          <Col span={6}>
            <div className="create-bot-label">Timezone</div>
          </Col>

          <Col span={18}>
            <Select
              value={botSettingObj.timezone}
              placeholder="Select Timezone"
              showSearch
              onChange={e => {
                setBotSettingObj({ ...botSettingObj, timezone: e });
              }}
              size="large"
              className="create-bot-select"
            >
              {timeZone &&
                timeZone.map(single => (
                  <Select.Option value={single}>{single}</Select.Option>
                ))}
            </Select>
          </Col>
        </Row>

        <Row className="row-style">
          <Col span={6}>
            <div className="create-bot-label">Supported Language</div>
          </Col>

          <Col span={18}>
            <Select
              mode="multiple"
              value={botSettingObj.language}
              placeholder="Select Language"
              optionLabelProp="label"
              showSearch
              onChange={e => {
                setBotSettingObj({ ...botSettingObj, language: e });
              }}
              size="large"
              className="create-bot-select"
            >
              <Select.Option value="en" label="English">
                English
              </Select.Option>

              <Select.Option value="ne" label="Nepali">
                Nepali
              </Select.Option>
            </Select>
          </Col>
        </Row>

        <Row className="row-style">
          <Col span={6}>
            <div className="create-bot-label">Visible To Inbox</div>
          </Col>

          <Col span={18}>
            <Checkbox
              onChange={e =>
                setBotSettingObj({
                  ...botSettingObj,
                  inboxVisibility: e.target.checked,
                })
              }
              checked={botSettingObj.inboxVisibility}
            />
          </Col>
        </Row>

        <Row className="row-style">
          <Col span={6}>
            <div className="create-bot-label">Handoff Rule</div>
          </Col>

          <Col span={18}>
            <Select
              placeholder="Select Handoff Rule"
              value={botSettingObj.noMatchRuleType}
              onChange={e => handleHandoffRuleChange(e)}
              size="large"
              className="create-bot-select"
            >
              <Select.Option value="DO_NOTHING">Do Nothing</Select.Option>

              <Select.Option value="MESSAGE_REPLY">
                Reply with Message
              </Select.Option>

              {/* <Select.Option value="AUTOMATED_KGRAPH_REPLY">
                Forward to Automation Pipeline
              </Select.Option> */}

              <Select.Option value="AUTO_TICKET_CREATE">
                Auto Ticket Create
              </Select.Option>
            </Select>
          </Col>
        </Row>

        <div
          className="row pt-3"
          hidden={botSettingObj.noMatchRuleType !== 'MESSAGE_REPLY'}
        >
          <div className="col-3" />

          <div className="col-9">
            <Input.TextArea
              className="create-bot-input"
              value={botSettingObj.replyMessage}
              rows={3}
              placeholder="Your reply message"
              onChange={e => {
                setBotSettingObj({
                  ...botSettingObj,
                  replyMessage: e.target.value,
                });
              }}
              style={{ height: 'auto' }}
            />
          </div>
        </div>

        <div hidden={botSettingObj.noMatchRuleType !== 'AUTO_TICKET_CREATE'}>
          <Row className="row-style">
            <Col span={6}>
              <div className="create-bot-label">Model</div>
            </Col>

            <Col span={18}>
              <Select
                value={botSettingObj.modelId}
                placeholder="Select Model"
                optionLabelProp="label"
                showSearch
                onChange={e => {
                  setBotSettingObj({
                    ...botSettingObj,
                    modelId: e,
                  });
                }}
                size="large"
                className="create-bot-select"
              >
                {ticketModal &&
                  ticketModal.map(single => (
                    <Select.Option value={single.id} label={single.name}>
                      {single.name}
                    </Select.Option>
                  ))}
                {/* <Select.Option value="TM1" label="Training Model 1">
                  Training Model
                </Select.Option>

                <Select.Option value="TM2" label="Training Model 2">
                  Training Model 2
                </Select.Option>

                <Select.Option value="TM3" label="Training Model 3">
                  Training Model 3
                </Select.Option> */}
              </Select>
            </Col>
          </Row>

          <Row className="row-style">
            <Col span={6}>
              <div className="create-bot-label">Project</div>
            </Col>

            <Col span={18}>
              <Select
                value={botSettingObj.projectId}
                placeholder="Select Project"
                optionLabelProp="label"
                showSearch
                onChange={e => {
                  setBotSettingObj({
                    ...botSettingObj,
                    projectId: e,
                  });
                }}
                size="large"
                className="create-bot-select"
              >
                {projectDetails &&
                  projectDetails.length > 0 &&
                  projectDetails.map(project => (
                    <Select.Option
                      value={project.projectId}
                      label={project.name}
                    >
                      {project.name}
                    </Select.Option>
                  ))}
              </Select>
            </Col>
          </Row>

          <Row className="row-style">
            <Col span={6}>
              <div className="create-bot-label">Sub Project</div>
            </Col>

            <Col span={18}>
              <Select
                value={botSettingObj.subprojectId}
                placeholder="Select Sub Project"
                optionLabelProp="label"
                showSearch
                onChange={e => {
                  setBotSettingObj({
                    ...botSettingObj,
                    subprojectId: e,
                  });
                }}
                size="large"
                className="create-bot-select"
              >
                {subProjectList &&
                  subProjectList.length > 0 &&
                  subProjectList.map(subProject => (
                    <Select.Option
                      value={subProject.subProjectId}
                      label={subProject.name}
                    >
                      {subProject.name}
                    </Select.Option>
                  ))}
              </Select>
            </Col>
          </Row>

          <Row className="row-style">
            <Col span={6}>
              <div className="create-bot-label">Board</div>
            </Col>

            <Col span={18}>
              <Select
                value={botSettingObj.boardId}
                placeholder="Select Board"
                optionLabelProp="label"
                showSearch
                onChange={e => {
                  setBotSettingObj({
                    ...botSettingObj,
                    boardId: e,
                  });
                }}
                size="large"
                className="create-bot-select"
              >
                {boardList &&
                  boardList.length > 0 &&
                  boardList.map(board => (
                    <Select.Option value={board.boardId} label={board.name}>
                      {board.name}
                    </Select.Option>
                  ))}
              </Select>
            </Col>
          </Row>

          <Row className="row-style">
            <Col span={6}>
              <div className="create-bot-label">Team</div>
            </Col>

            <Col span={18}>
              <Select
                value={botSettingObj.teamId}
                placeholder="Select Team"
                optionLabelProp="label"
                showSearch
                onChange={e => {
                  setBotSettingObj({
                    ...botSettingObj,
                    teamId: e,
                  });
                }}
                size="large"
                className="create-bot-select"
              >
                {teams &&
                  teams.length > 0 &&
                  teams.map(team => (
                    <Select.Option value={team.teamId} label={team.label}>
                      {team.label}
                    </Select.Option>
                  ))}
              </Select>
            </Col>
          </Row>
        </div>
      </div>

      <div
        className="row m-0"
        style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}
      >
        <CustomButton
          disabled={isRequiredDataEmpty(botSettingObj) === true}
          type="submit"
          primary
          size="large"
          className="mt-4 mb-1"
          clicked={() => {
            createBot(botSettingObj);
          }}
          style={
            isRequiredDataEmpty(botSettingObj) === true
              ? buttonStyle1
              : buttonStyle2
          }
        >
          Create
        </CustomButton>
      </div>
    </Modal>
  );
};

export default CreateBotModal;

const buttonStyle1 = {
  width: '85px',
  borderRadius: '5px',
  cursor: 'auto',
  background: 'rgb(132, 148, 247)',
  border: '1px solid rgb(132, 148, 247)',
  color: '#fff',
};

const buttonStyle2 = {
  borderRadius: '5px',
  width: '85px',
};
