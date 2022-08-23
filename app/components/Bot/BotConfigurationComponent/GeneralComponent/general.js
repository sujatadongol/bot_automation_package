import React, { useEffect, useState } from 'react';
import { Avatar, Checkbox, Input, Select } from 'antd';
import GeneralStyle from './Style';
import CustomButton from '../../../Button/Button';
import { timeZone } from './timezone';
import './style.css';

const General = ({
  botName,
  timezone,
  botLanguage,
  threshold,
  botIconUrl,
  botSettingId,
  saveBotSetting,
  updateBotSetting,
  handleChangeBotName,
  handleChangeThreshold,
  handleChangeBotLanguage,
  handleChangeTimezone,
  uploadBotImage,
  botPermission,
  noMatchRuleType,
  inboxVisibility,
  handleChangeInboxVisibility,
  handleChangeNoMatchRuleType,
  replyMessage,
  handleChangeReplyMessage,
  projectDetails,
  teams,
  autoTicketCreateData,
  ticketModal,
}) => {
  const [invalidThreshold, setInvalidThreshold] = useState(false);
  const [botSettingObj, setBotSettingObj] = useState({});

  const [subProjectList, setSubProjectList] = useState([]);
  const [boardList, setBoardList] = useState([]);

  const validateRequiredData =
    botName &&
    botLanguage &&
    botLanguage.length > 0 &&
    noMatchRuleType &&
    threshold;

  const isRequiredDataEmpty = botSettings => {
    if (noMatchRuleType === 'AUTO_TICKET_CREATE') {
      return (
        !botName ||
        !botLanguage ||
        !timezone ||
        botLanguage.length < 1 ||
        !threshold ||
        !noMatchRuleType ||
        !botSettings.modelId ||
        !botSettings.projectId ||
        !botSettings.subprojectId ||
        !botSettings.boardId ||
        !botSettings.teamId
      );
    }
    if (noMatchRuleType === 'MESSAGE_REPLY') {
      return (
        !botName ||
        !botLanguage ||
        !timezone ||
        botLanguage.length < 1 ||
        !threshold ||
        !noMatchRuleType ||
        !replyMessage
      );
    }
    return (
      !botName ||
      !botLanguage ||
      !timezone ||
      botLanguage.length < 1 ||
      !threshold ||
      !noMatchRuleType
    );
  };

  useEffect(() => {
    if (threshold < 0.7) {
      setInvalidThreshold(true);
    }
  }, [threshold]);

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

  useEffect(() => {
    if (autoTicketCreateData && autoTicketCreateData.projectId) {
      setBotSettingObj(autoTicketCreateData);
    }
  }, [autoTicketCreateData]);

  const handleSaveClick = () => {
    if (botPermission && validateRequiredData) {
      if (botSettingId === '') {
        if (noMatchRuleType === 'AUTO_TICKET_CREATE') {
          saveBotSetting(botSettingObj);
        } else {
          saveBotSetting();
        }
      } else {
        if (noMatchRuleType === 'AUTO_TICKET_CREATE') {
          updateBotSetting(botSettingObj);
        } else {
          updateBotSetting();
        }
      }
    }
  };

  return (
    <GeneralStyle>
      <div>
        <div style={{ display: 'flex' }}>
          <div className="social-media-component">
            <div style={{ width: '140px', margin: '0 30px' }}>
              {!botIconUrl ? (
                <>
                  <label htmlFor="file" className="browse-image">
                    Browse Image
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
              ) : (
                <>
                  {' '}
                  <Avatar
                    src={botIconUrl}
                    style={{
                      width: '140px',
                      height: '140px',
                      borderRadius: '5px',
                      border: '0.711111px solid #d2d2d2',
                      background: '#fff',
                      padding: '20px',
                      // position: 'absolute',
                    }}
                  />
                  <label
                    hidden={!botPermission}
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
                    disabled={!botPermission}
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
          </div>

          <div className="ml-5" style={{ width: 300 }}>
            <div className="row-style">
              <label className="general-label">Bot Name</label>

              <Input
                disabled={!botPermission}
                value={botName}
                size="large"
                className="general-input"
                onChange={e => handleChangeBotName(e.target.value)}
              />
            </div>

            <div className="row-style">
              <label className="general-label">Threshold</label>

              <Input
                disabled={!botPermission}
                value={threshold === undefined ? 0 : threshold}
                size="large"
                type="number"
                min={0}
                max={1}
                step={0.01}
                className="general-input"
                style={{ marginBottom: 0 }}
                onChange={e => {
                  invalidThreshold && setInvalidThreshold(false);
                  handleChangeThreshold(e.target.value);
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
                  We recommend the threshold to be at least 0.7.
                </div>
              </div>
            </div>

            <div className="row-style">
              <label className="general-label">Time Zone</label>

              {botPermission ? (
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  value={timezone}
                  placeholder="Select Timezone"
                  showSearch
                  onChange={e => {
                    handleChangeTimezone(e);
                  }}
                  size="large"
                  className="create-bot-select"
                >
                  {timeZone &&
                    timeZone.map(single => (
                      <Select.Option value={single}>{single}</Select.Option>
                    ))}
                </Select>
              ) : (
                <input
                  disabled={!botPermission}
                  value={timezone}
                  className="general-input"
                />
              )}
            </div>

            <div className="row-style">
              <label className="general-label">Supported Language</label>

              {botPermission ? (
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  mode="multiple"
                  value={botLanguage}
                  placeholder="Select Language"
                  showSearch
                  onChange={e => {
                    handleChangeBotLanguage(e);
                  }}
                  size="large"
                  className="create-bot-select"
                >
                  <Select.Option value="English">English</Select.Option>
                  <Select.Option value="Nepali">Nepali</Select.Option>
                </Select>
              ) : (
                <input
                  disabled={!botPermission}
                  value={botLanguage}
                  className="general-input"
                />
              )}
            </div>

            <div className="row-style">
              <Checkbox
                disabled={!botPermission}
                onChange={e => handleChangeInboxVisibility(e.target.checked)}
                checked={inboxVisibility}
              >
                <div className="general-label">Visible To Inbox</div>
              </Checkbox>
            </div>

            <div className="row-style">
              <label className="general-label">Handoff Rule</label>

              {botPermission ? (
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  value={noMatchRuleType}
                  placeholder="Select Rule"
                  showSearch
                  onChange={e => {
                    handleChangeNoMatchRuleType(e);
                    handleHandoffRuleChange(e);
                  }}
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
              ) : (
                <input
                  disabled={!botPermission}
                  value={noMatchRuleType}
                  className="general-input"
                />
              )}
            </div>

            <div
              hidden={noMatchRuleType !== 'MESSAGE_REPLY'}
              className="row-style"
            >
              {botPermission ? (
                <Input.TextArea
                  className="general-input"
                  value={replyMessage}
                  rows={3}
                  placeholder="Your reply message"
                  onChange={e => {
                    handleChangeReplyMessage(e.target.value);
                  }}
                  style={{ height: 'auto' }}
                />
              ) : (
                <input
                  disabled={!botPermission}
                  value={replyMessage}
                  className="general-input"
                />
              )}
            </div>

            <div hidden={noMatchRuleType !== 'AUTO_TICKET_CREATE'}>
              <div className="row-style">
                <label className="general-label">Model</label>

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
              </div>

              <div className="row-style">
                <label className="general-label">Project</label>

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
              </div>

              <div className="row-style">
                <label className="general-label">Sub Project</label>

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
              </div>

              <div className="row-style">
                <label className="general-label">Board</label>

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
              </div>

              <div className="row-style">
                <label className="general-label">Team</label>

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
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '30px',
              }}
            >
              <CustomButton
                disabled={!botPermission || isRequiredDataEmpty(botSettingObj)}
                type="submit"
                primary
                size="large"
                className="mt-3"
                clicked={handleSaveClick}
                style={
                  !botPermission ||
                  !validateRequiredData ||
                  isRequiredDataEmpty(botSettingObj)
                    ? buttonStyle1
                    : buttonStyle2
                }
              >
                Save
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </GeneralStyle>
  );
};
export default General;

const buttonStyle1 = {
  width: '105px',
  borderRadius: '5px',
  cursor: 'auto',
  background: 'rgb(132, 148, 247)',
  border: '1px solid rgb(132, 148, 247)',
  color: '#fff',
};

const buttonStyle2 = {
  borderRadius: '5px',
  width: '105px',
};
