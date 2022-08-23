// source: ticket.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var anydone_pb = require('./anydone_pb.js');
goog.object.extend(proto, anydone_pb);
var user_pb = require('./user_pb.js');
goog.object.extend(proto, user_pb);
var service_pb = require('./service_pb.js');
goog.object.extend(proto, service_pb);
var treeleaf_pb = require('./treeleaf_pb.js');
goog.object.extend(proto, treeleaf_pb);
var signaling_pb = require('./signaling_pb.js');
goog.object.extend(proto, signaling_pb);
var board_pb = require('./board_pb.js');
goog.object.extend(proto, board_pb);
var project_pb = require('./project_pb.js');
goog.object.extend(proto, project_pb);
var domain_ticket_share_link_pb = require('./domain/ticket_share_link_pb.js');
goog.object.extend(proto, domain_ticket_share_link_pb);
var bot_housekeeping_pb = require('./bot_housekeeping_pb.js');
goog.object.extend(proto, bot_housekeeping_pb);
var domain_share_link_pb = require('./domain/share_link_pb.js');
goog.object.extend(proto, domain_share_link_pb);
goog.exportSymbol('proto.treeleaf.anydone.entities.AutoTicketCreateResponse', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.AutoTicketCreateResponse.ResponseType', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.BurndownReport', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.CreateTicketRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.CustomerType', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.EmployeeAssigned', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.EmployeeTeamAssign', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.EventType', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ExportTicketReportRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ExportTicketReportRequest.RequestType', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ExportTicketReportResponse', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.GetSharableLinkRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.KanbanTicket', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.Label', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ProcessTime', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ScrumTicket', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.SprintProcessTime', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.SubscribedEmployees', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.Team', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TemplateBoard', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TemplateBoardSprint', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TemplateSubProject', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.Ticket', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketActivityLog', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketActivityLog.ActivityType', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketAttachment', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketAttachment.TicketAttachmentType', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketAttachmentRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketCategory', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketColumnTransaction', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketCommentedReq', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketContributor', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketEventPayload', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketFilter', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketFilter.EmployeeFilterEnum', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketFilter.TicketCreator', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketNotification', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketNotification.NotificationType', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketOrderMove', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketPriority', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketSource', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketStatByPriority', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketStatBySource', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketStatByStatus', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketStatResolveTime', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketStatResponseType', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketState', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketStateHistory', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketStateHistory.TicketHistoryType', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketStats', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketStep', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketStepState', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketSuggestion', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketSuggestion.Message', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketSuggestion.TicketSuggestionStatus', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketSuggestionReq', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketTemplate', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketTransactionLog', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketTransactionLog.MoveType', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketType', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TypeAction', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.Team = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.Team.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.Team, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.Team.displayName = 'proto.treeleaf.anydone.entities.Team';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.TicketType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TicketType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TicketType.displayName = 'proto.treeleaf.anydone.entities.TicketType';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.Label = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.Label, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.Label.displayName = 'proto.treeleaf.anydone.entities.Label';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.EmployeeTeamAssign = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.EmployeeTeamAssign, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.EmployeeTeamAssign.displayName = 'proto.treeleaf.anydone.entities.EmployeeTeamAssign';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.EmployeeAssigned = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.EmployeeAssigned, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.EmployeeAssigned.displayName = 'proto.treeleaf.anydone.entities.EmployeeAssigned';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.SubscribedEmployees = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.SubscribedEmployees, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.SubscribedEmployees.displayName = 'proto.treeleaf.anydone.entities.SubscribedEmployees';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.TicketContributor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TicketContributor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TicketContributor.displayName = 'proto.treeleaf.anydone.entities.TicketContributor';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.TicketTemplate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.TicketTemplate.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TicketTemplate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TicketTemplate.displayName = 'proto.treeleaf.anydone.entities.TicketTemplate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.TemplateSubProject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.TemplateSubProject.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TemplateSubProject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TemplateSubProject.displayName = 'proto.treeleaf.anydone.entities.TemplateSubProject';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.TemplateBoard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.TemplateBoard.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TemplateBoard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TemplateBoard.displayName = 'proto.treeleaf.anydone.entities.TemplateBoard';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.TemplateBoardSprint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TemplateBoardSprint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TemplateBoardSprint.displayName = 'proto.treeleaf.anydone.entities.TemplateBoardSprint';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.TicketStateHistory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TicketStateHistory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TicketStateHistory.displayName = 'proto.treeleaf.anydone.entities.TicketStateHistory';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.Ticket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.Ticket.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.Ticket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.Ticket.displayName = 'proto.treeleaf.anydone.entities.Ticket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.TicketStatByStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TicketStatByStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TicketStatByStatus.displayName = 'proto.treeleaf.anydone.entities.TicketStatByStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.TicketStatByPriority = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TicketStatByPriority, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TicketStatByPriority.displayName = 'proto.treeleaf.anydone.entities.TicketStatByPriority';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.TicketStatResolveTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TicketStatResolveTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TicketStatResolveTime.displayName = 'proto.treeleaf.anydone.entities.TicketStatResolveTime';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.TicketStatBySource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TicketStatBySource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TicketStatBySource.displayName = 'proto.treeleaf.anydone.entities.TicketStatBySource';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.GetSharableLinkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.GetSharableLinkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.GetSharableLinkRequest.displayName = 'proto.treeleaf.anydone.entities.GetSharableLinkRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.TicketEventPayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.TicketEventPayload.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TicketEventPayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TicketEventPayload.displayName = 'proto.treeleaf.anydone.entities.TicketEventPayload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.TicketSuggestion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.TicketSuggestion.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TicketSuggestion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TicketSuggestion.displayName = 'proto.treeleaf.anydone.entities.TicketSuggestion';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.TicketSuggestion.Message = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TicketSuggestion.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TicketSuggestion.Message.displayName = 'proto.treeleaf.anydone.entities.TicketSuggestion.Message';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.TicketSuggestionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.TicketSuggestionReq.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TicketSuggestionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TicketSuggestionReq.displayName = 'proto.treeleaf.anydone.entities.TicketSuggestionReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.TicketFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.TicketFilter.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TicketFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TicketFilter.displayName = 'proto.treeleaf.anydone.entities.TicketFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes.displayName = 'proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.TicketCommentedReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TicketCommentedReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TicketCommentedReq.displayName = 'proto.treeleaf.anydone.entities.TicketCommentedReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.TicketAttachment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TicketAttachment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TicketAttachment.displayName = 'proto.treeleaf.anydone.entities.TicketAttachment';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.TicketAttachmentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.TicketAttachmentRequest.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TicketAttachmentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TicketAttachmentRequest.displayName = 'proto.treeleaf.anydone.entities.TicketAttachmentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.CreateTicketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.CreateTicketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.CreateTicketRequest.displayName = 'proto.treeleaf.anydone.entities.CreateTicketRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.ExportTicketReportRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.ExportTicketReportRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.ExportTicketReportRequest.displayName = 'proto.treeleaf.anydone.entities.ExportTicketReportRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.ExportTicketReportResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.ExportTicketReportResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.ExportTicketReportResponse.displayName = 'proto.treeleaf.anydone.entities.ExportTicketReportResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.TicketActivityLog = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TicketActivityLog, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TicketActivityLog.displayName = 'proto.treeleaf.anydone.entities.TicketActivityLog';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.TicketNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TicketNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TicketNotification.displayName = 'proto.treeleaf.anydone.entities.TicketNotification';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.TicketStep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TicketStep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TicketStep.displayName = 'proto.treeleaf.anydone.entities.TicketStep';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.ScrumTicket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.ScrumTicket.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.ScrumTicket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.ScrumTicket.displayName = 'proto.treeleaf.anydone.entities.ScrumTicket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.KanbanTicket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.KanbanTicket.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.KanbanTicket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.KanbanTicket.displayName = 'proto.treeleaf.anydone.entities.KanbanTicket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.TicketStats = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TicketStats, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TicketStats.displayName = 'proto.treeleaf.anydone.entities.TicketStats';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.BurndownReport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.BurndownReport.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.BurndownReport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.BurndownReport.displayName = 'proto.treeleaf.anydone.entities.BurndownReport';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.TicketColumnTransaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TicketColumnTransaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TicketColumnTransaction.displayName = 'proto.treeleaf.anydone.entities.TicketColumnTransaction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.TicketOrderMove = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TicketOrderMove, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TicketOrderMove.displayName = 'proto.treeleaf.anydone.entities.TicketOrderMove';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.TicketTransactionLog = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TicketTransactionLog, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TicketTransactionLog.displayName = 'proto.treeleaf.anydone.entities.TicketTransactionLog';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.SprintProcessTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.SprintProcessTime.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.SprintProcessTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.SprintProcessTime.displayName = 'proto.treeleaf.anydone.entities.SprintProcessTime';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.ProcessTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.ProcessTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.ProcessTime.displayName = 'proto.treeleaf.anydone.entities.ProcessTime';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.AutoTicketCreateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.AutoTicketCreateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.AutoTicketCreateResponse.displayName = 'proto.treeleaf.anydone.entities.AutoTicketCreateResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.Team.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.Team.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.Team.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.Team} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Team.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    label: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    createdby: (f = msg.getCreatedby()) && user_pb.ServiceProviderProfile.toObject(includeInstance, f),
    createdat: jspb.Message.getFieldWithDefault(msg, 5, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 6, 0),
    assignedtoList: jspb.Message.toObjectList(msg.getAssignedtoList(),
    user_pb.EmployeeProfile.toObject, includeInstance),
    assignedtolength: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.Team}
 */
proto.treeleaf.anydone.entities.Team.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.Team;
  return proto.treeleaf.anydone.entities.Team.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.Team} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.Team}
 */
proto.treeleaf.anydone.entities.Team.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabel(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = new user_pb.ServiceProviderProfile;
      reader.readMessage(value,user_pb.ServiceProviderProfile.deserializeBinaryFromReader);
      msg.setCreatedby(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedat(value);
      break;
    case 7:
      var value = new user_pb.EmployeeProfile;
      reader.readMessage(value,user_pb.EmployeeProfile.deserializeBinaryFromReader);
      msg.addAssignedto(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAssignedtolength(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.Team.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.Team.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.Team} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Team.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLabel();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreatedby();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      user_pb.ServiceProviderProfile.serializeBinaryToWriter
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getAssignedtoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      user_pb.EmployeeProfile.serializeBinaryToWriter
    );
  }
  f = message.getAssignedtolength();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
};


/**
 * optional string teamId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Team.prototype.getTeamid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Team} returns this
 */
proto.treeleaf.anydone.entities.Team.prototype.setTeamid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string label = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Team.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Team} returns this
 */
proto.treeleaf.anydone.entities.Team.prototype.setLabel = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Team.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Team} returns this
 */
proto.treeleaf.anydone.entities.Team.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional ServiceProviderProfile createdBy = 4;
 * @return {?proto.treeleaf.anydone.entities.ServiceProviderProfile}
 */
proto.treeleaf.anydone.entities.Team.prototype.getCreatedby = function() {
  return /** @type{?proto.treeleaf.anydone.entities.ServiceProviderProfile} */ (
    jspb.Message.getWrapperField(this, user_pb.ServiceProviderProfile, 4));
};


/**
 * @param {?proto.treeleaf.anydone.entities.ServiceProviderProfile|undefined} value
 * @return {!proto.treeleaf.anydone.entities.Team} returns this
*/
proto.treeleaf.anydone.entities.Team.prototype.setCreatedby = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.Team} returns this
 */
proto.treeleaf.anydone.entities.Team.prototype.clearCreatedby = function() {
  return this.setCreatedby(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Team.prototype.hasCreatedby = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 createdAt = 5;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Team.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Team} returns this
 */
proto.treeleaf.anydone.entities.Team.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 updatedAt = 6;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Team.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Team} returns this
 */
proto.treeleaf.anydone.entities.Team.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * repeated EmployeeProfile assignedTo = 7;
 * @return {!Array<!proto.treeleaf.anydone.entities.EmployeeProfile>}
 */
proto.treeleaf.anydone.entities.Team.prototype.getAssignedtoList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.EmployeeProfile>} */ (
    jspb.Message.getRepeatedWrapperField(this, user_pb.EmployeeProfile, 7));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.EmployeeProfile>} value
 * @return {!proto.treeleaf.anydone.entities.Team} returns this
*/
proto.treeleaf.anydone.entities.Team.prototype.setAssignedtoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.EmployeeProfile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile}
 */
proto.treeleaf.anydone.entities.Team.prototype.addAssignedto = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.treeleaf.anydone.entities.EmployeeProfile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.Team} returns this
 */
proto.treeleaf.anydone.entities.Team.prototype.clearAssignedtoList = function() {
  return this.setAssignedtoList([]);
};


/**
 * optional int32 assignedToLength = 9;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Team.prototype.getAssignedtolength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Team} returns this
 */
proto.treeleaf.anydone.entities.Team.prototype.setAssignedtolength = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.TicketType.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TicketType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TicketType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketType.toObject = function(includeInstance, msg) {
  var f, obj = {
    tickettypeid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    serviceid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    spaccountid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 5, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 6, 0),
    icon: jspb.Message.getFieldWithDefault(msg, 7, ""),
    iconurl: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.TicketType}
 */
proto.treeleaf.anydone.entities.TicketType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TicketType;
  return proto.treeleaf.anydone.entities.TicketType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TicketType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TicketType}
 */
proto.treeleaf.anydone.entities.TicketType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTickettypeid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpaccountid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedat(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setIconurl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.TicketType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TicketType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TicketType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTickettypeid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getServiceid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSpaccountid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getIconurl();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string ticketTypeId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketType.prototype.getTickettypeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketType} returns this
 */
proto.treeleaf.anydone.entities.TicketType.prototype.setTickettypeid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketType.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketType} returns this
 */
proto.treeleaf.anydone.entities.TicketType.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string serviceId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketType.prototype.getServiceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketType} returns this
 */
proto.treeleaf.anydone.entities.TicketType.prototype.setServiceid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string spAccountId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketType.prototype.getSpaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketType} returns this
 */
proto.treeleaf.anydone.entities.TicketType.prototype.setSpaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 createdAt = 5;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketType.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketType} returns this
 */
proto.treeleaf.anydone.entities.TicketType.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 updatedAt = 6;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketType.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketType} returns this
 */
proto.treeleaf.anydone.entities.TicketType.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string icon = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketType.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketType} returns this
 */
proto.treeleaf.anydone.entities.TicketType.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string iconUrl = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketType.prototype.getIconurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketType} returns this
 */
proto.treeleaf.anydone.entities.TicketType.prototype.setIconurl = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.Label.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.Label.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.Label} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Label.toObject = function(includeInstance, msg) {
  var f, obj = {
    labelid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    serviceid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    spaccountid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 5, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.Label}
 */
proto.treeleaf.anydone.entities.Label.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.Label;
  return proto.treeleaf.anydone.entities.Label.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.Label} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.Label}
 */
proto.treeleaf.anydone.entities.Label.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabelid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpaccountid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.Label.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.Label.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.Label} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Label.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLabelid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getServiceid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSpaccountid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional string labelId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Label.prototype.getLabelid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Label} returns this
 */
proto.treeleaf.anydone.entities.Label.prototype.setLabelid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Label.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Label} returns this
 */
proto.treeleaf.anydone.entities.Label.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string serviceId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Label.prototype.getServiceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Label} returns this
 */
proto.treeleaf.anydone.entities.Label.prototype.setServiceid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string spAccountId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Label.prototype.getSpaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Label} returns this
 */
proto.treeleaf.anydone.entities.Label.prototype.setSpaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 createdAt = 5;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Label.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Label} returns this
 */
proto.treeleaf.anydone.entities.Label.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 updatedAt = 6;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Label.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Label} returns this
 */
proto.treeleaf.anydone.entities.Label.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.EmployeeTeamAssign.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.EmployeeTeamAssign.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.EmployeeTeamAssign} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.EmployeeTeamAssign.toObject = function(includeInstance, msg) {
  var f, obj = {
    employeeteamid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    employee: (f = msg.getEmployee()) && user_pb.EmployeeProfile.toObject(includeInstance, f),
    team: (f = msg.getTeam()) && proto.treeleaf.anydone.entities.Team.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.EmployeeTeamAssign}
 */
proto.treeleaf.anydone.entities.EmployeeTeamAssign.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.EmployeeTeamAssign;
  return proto.treeleaf.anydone.entities.EmployeeTeamAssign.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.EmployeeTeamAssign} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.EmployeeTeamAssign}
 */
proto.treeleaf.anydone.entities.EmployeeTeamAssign.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmployeeteamid(value);
      break;
    case 2:
      var value = new user_pb.EmployeeProfile;
      reader.readMessage(value,user_pb.EmployeeProfile.deserializeBinaryFromReader);
      msg.setEmployee(value);
      break;
    case 3:
      var value = new proto.treeleaf.anydone.entities.Team;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Team.deserializeBinaryFromReader);
      msg.setTeam(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.EmployeeTeamAssign.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.EmployeeTeamAssign.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.EmployeeTeamAssign} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.EmployeeTeamAssign.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmployeeteamid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmployee();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      user_pb.EmployeeProfile.serializeBinaryToWriter
    );
  }
  f = message.getTeam();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.treeleaf.anydone.entities.Team.serializeBinaryToWriter
    );
  }
};


/**
 * optional string employeeteamId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.EmployeeTeamAssign.prototype.getEmployeeteamid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeTeamAssign} returns this
 */
proto.treeleaf.anydone.entities.EmployeeTeamAssign.prototype.setEmployeeteamid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional EmployeeProfile employee = 2;
 * @return {?proto.treeleaf.anydone.entities.EmployeeProfile}
 */
proto.treeleaf.anydone.entities.EmployeeTeamAssign.prototype.getEmployee = function() {
  return /** @type{?proto.treeleaf.anydone.entities.EmployeeProfile} */ (
    jspb.Message.getWrapperField(this, user_pb.EmployeeProfile, 2));
};


/**
 * @param {?proto.treeleaf.anydone.entities.EmployeeProfile|undefined} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeTeamAssign} returns this
*/
proto.treeleaf.anydone.entities.EmployeeTeamAssign.prototype.setEmployee = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.EmployeeTeamAssign} returns this
 */
proto.treeleaf.anydone.entities.EmployeeTeamAssign.prototype.clearEmployee = function() {
  return this.setEmployee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.EmployeeTeamAssign.prototype.hasEmployee = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Team team = 3;
 * @return {?proto.treeleaf.anydone.entities.Team}
 */
proto.treeleaf.anydone.entities.EmployeeTeamAssign.prototype.getTeam = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Team} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.Team, 3));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Team|undefined} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeTeamAssign} returns this
*/
proto.treeleaf.anydone.entities.EmployeeTeamAssign.prototype.setTeam = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.EmployeeTeamAssign} returns this
 */
proto.treeleaf.anydone.entities.EmployeeTeamAssign.prototype.clearTeam = function() {
  return this.setTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.EmployeeTeamAssign.prototype.hasTeam = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.EmployeeAssigned.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.EmployeeAssigned.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.EmployeeAssigned} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.EmployeeAssigned.toObject = function(includeInstance, msg) {
  var f, obj = {
    assignedto: (f = msg.getAssignedto()) && user_pb.EmployeeProfile.toObject(includeInstance, f),
    assignedat: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.EmployeeAssigned}
 */
proto.treeleaf.anydone.entities.EmployeeAssigned.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.EmployeeAssigned;
  return proto.treeleaf.anydone.entities.EmployeeAssigned.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.EmployeeAssigned} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.EmployeeAssigned}
 */
proto.treeleaf.anydone.entities.EmployeeAssigned.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new user_pb.EmployeeProfile;
      reader.readMessage(value,user_pb.EmployeeProfile.deserializeBinaryFromReader);
      msg.setAssignedto(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAssignedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.EmployeeAssigned.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.EmployeeAssigned.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.EmployeeAssigned} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.EmployeeAssigned.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssignedto();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      user_pb.EmployeeProfile.serializeBinaryToWriter
    );
  }
  f = message.getAssignedat();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional EmployeeProfile assignedTo = 1;
 * @return {?proto.treeleaf.anydone.entities.EmployeeProfile}
 */
proto.treeleaf.anydone.entities.EmployeeAssigned.prototype.getAssignedto = function() {
  return /** @type{?proto.treeleaf.anydone.entities.EmployeeProfile} */ (
    jspb.Message.getWrapperField(this, user_pb.EmployeeProfile, 1));
};


/**
 * @param {?proto.treeleaf.anydone.entities.EmployeeProfile|undefined} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeAssigned} returns this
*/
proto.treeleaf.anydone.entities.EmployeeAssigned.prototype.setAssignedto = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.EmployeeAssigned} returns this
 */
proto.treeleaf.anydone.entities.EmployeeAssigned.prototype.clearAssignedto = function() {
  return this.setAssignedto(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.EmployeeAssigned.prototype.hasAssignedto = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 assignedAt = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.EmployeeAssigned.prototype.getAssignedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeAssigned} returns this
 */
proto.treeleaf.anydone.entities.EmployeeAssigned.prototype.setAssignedat = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.SubscribedEmployees.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.SubscribedEmployees.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.SubscribedEmployees} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.SubscribedEmployees.toObject = function(includeInstance, msg) {
  var f, obj = {
    subscriber: (f = msg.getSubscriber()) && user_pb.EmployeeProfile.toObject(includeInstance, f),
    subscribedat: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.SubscribedEmployees}
 */
proto.treeleaf.anydone.entities.SubscribedEmployees.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.SubscribedEmployees;
  return proto.treeleaf.anydone.entities.SubscribedEmployees.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.SubscribedEmployees} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.SubscribedEmployees}
 */
proto.treeleaf.anydone.entities.SubscribedEmployees.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new user_pb.EmployeeProfile;
      reader.readMessage(value,user_pb.EmployeeProfile.deserializeBinaryFromReader);
      msg.setSubscriber(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSubscribedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.SubscribedEmployees.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.SubscribedEmployees.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.SubscribedEmployees} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.SubscribedEmployees.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubscriber();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      user_pb.EmployeeProfile.serializeBinaryToWriter
    );
  }
  f = message.getSubscribedat();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional EmployeeProfile subscriber = 1;
 * @return {?proto.treeleaf.anydone.entities.EmployeeProfile}
 */
proto.treeleaf.anydone.entities.SubscribedEmployees.prototype.getSubscriber = function() {
  return /** @type{?proto.treeleaf.anydone.entities.EmployeeProfile} */ (
    jspb.Message.getWrapperField(this, user_pb.EmployeeProfile, 1));
};


/**
 * @param {?proto.treeleaf.anydone.entities.EmployeeProfile|undefined} value
 * @return {!proto.treeleaf.anydone.entities.SubscribedEmployees} returns this
*/
proto.treeleaf.anydone.entities.SubscribedEmployees.prototype.setSubscriber = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.SubscribedEmployees} returns this
 */
proto.treeleaf.anydone.entities.SubscribedEmployees.prototype.clearSubscriber = function() {
  return this.setSubscriber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.SubscribedEmployees.prototype.hasSubscriber = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 subscribedAt = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.SubscribedEmployees.prototype.getSubscribedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.SubscribedEmployees} returns this
 */
proto.treeleaf.anydone.entities.SubscribedEmployees.prototype.setSubscribedat = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.TicketContributor.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TicketContributor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TicketContributor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketContributor.toObject = function(includeInstance, msg) {
  var f, obj = {
    employee: (f = msg.getEmployee()) && user_pb.EmployeeProfile.toObject(includeInstance, f),
    timestamp: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.TicketContributor}
 */
proto.treeleaf.anydone.entities.TicketContributor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TicketContributor;
  return proto.treeleaf.anydone.entities.TicketContributor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TicketContributor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TicketContributor}
 */
proto.treeleaf.anydone.entities.TicketContributor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new user_pb.EmployeeProfile;
      reader.readMessage(value,user_pb.EmployeeProfile.deserializeBinaryFromReader);
      msg.setEmployee(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.TicketContributor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TicketContributor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TicketContributor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketContributor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmployee();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      user_pb.EmployeeProfile.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional EmployeeProfile employee = 1;
 * @return {?proto.treeleaf.anydone.entities.EmployeeProfile}
 */
proto.treeleaf.anydone.entities.TicketContributor.prototype.getEmployee = function() {
  return /** @type{?proto.treeleaf.anydone.entities.EmployeeProfile} */ (
    jspb.Message.getWrapperField(this, user_pb.EmployeeProfile, 1));
};


/**
 * @param {?proto.treeleaf.anydone.entities.EmployeeProfile|undefined} value
 * @return {!proto.treeleaf.anydone.entities.TicketContributor} returns this
*/
proto.treeleaf.anydone.entities.TicketContributor.prototype.setEmployee = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.TicketContributor} returns this
 */
proto.treeleaf.anydone.entities.TicketContributor.prototype.clearEmployee = function() {
  return this.setEmployee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TicketContributor.prototype.hasEmployee = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 timestamp = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketContributor.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketContributor} returns this
 */
proto.treeleaf.anydone.entities.TicketContributor.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.TicketTemplate.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.TicketTemplate.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TicketTemplate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TicketTemplate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketTemplate.toObject = function(includeInstance, msg) {
  var f, obj = {
    tickettemplateid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    categoryid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    spaccountid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createdby: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 6, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 7, 0),
    templatesubprojectList: jspb.Message.toObjectList(msg.getTemplatesubprojectList(),
    proto.treeleaf.anydone.entities.TemplateSubProject.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.TicketTemplate}
 */
proto.treeleaf.anydone.entities.TicketTemplate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TicketTemplate;
  return proto.treeleaf.anydone.entities.TicketTemplate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TicketTemplate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TicketTemplate}
 */
proto.treeleaf.anydone.entities.TicketTemplate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTickettemplateid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategoryid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpaccountid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedby(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedat(value);
      break;
    case 8:
      var value = new proto.treeleaf.anydone.entities.TemplateSubProject;
      reader.readMessage(value,proto.treeleaf.anydone.entities.TemplateSubProject.deserializeBinaryFromReader);
      msg.addTemplatesubproject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.TicketTemplate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TicketTemplate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TicketTemplate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketTemplate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTickettemplateid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCategoryid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSpaccountid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedby();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getTemplatesubprojectList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.treeleaf.anydone.entities.TemplateSubProject.serializeBinaryToWriter
    );
  }
};


/**
 * optional string ticketTemplateId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketTemplate.prototype.getTickettemplateid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketTemplate} returns this
 */
proto.treeleaf.anydone.entities.TicketTemplate.prototype.setTickettemplateid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketTemplate.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketTemplate} returns this
 */
proto.treeleaf.anydone.entities.TicketTemplate.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string categoryId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketTemplate.prototype.getCategoryid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketTemplate} returns this
 */
proto.treeleaf.anydone.entities.TicketTemplate.prototype.setCategoryid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string spAccountID = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketTemplate.prototype.getSpaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketTemplate} returns this
 */
proto.treeleaf.anydone.entities.TicketTemplate.prototype.setSpaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string createdBy = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketTemplate.prototype.getCreatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketTemplate} returns this
 */
proto.treeleaf.anydone.entities.TicketTemplate.prototype.setCreatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 createdAt = 6;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketTemplate.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketTemplate} returns this
 */
proto.treeleaf.anydone.entities.TicketTemplate.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 updatedAt = 7;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketTemplate.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketTemplate} returns this
 */
proto.treeleaf.anydone.entities.TicketTemplate.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * repeated TemplateSubProject templateSubproject = 8;
 * @return {!Array<!proto.treeleaf.anydone.entities.TemplateSubProject>}
 */
proto.treeleaf.anydone.entities.TicketTemplate.prototype.getTemplatesubprojectList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.TemplateSubProject>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.TemplateSubProject, 8));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.TemplateSubProject>} value
 * @return {!proto.treeleaf.anydone.entities.TicketTemplate} returns this
*/
proto.treeleaf.anydone.entities.TicketTemplate.prototype.setTemplatesubprojectList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.TemplateSubProject=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TemplateSubProject}
 */
proto.treeleaf.anydone.entities.TicketTemplate.prototype.addTemplatesubproject = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.treeleaf.anydone.entities.TemplateSubProject, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.TicketTemplate} returns this
 */
proto.treeleaf.anydone.entities.TicketTemplate.prototype.clearTemplatesubprojectList = function() {
  return this.setTemplatesubprojectList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.TemplateSubProject.repeatedFields_ = [9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.TemplateSubProject.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TemplateSubProject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TemplateSubProject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TemplateSubProject.toObject = function(includeInstance, msg) {
  var f, obj = {
    subprojecttemplateid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tickettemplateid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createdby: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 6, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 7, 0),
    templateboardList: jspb.Message.toObjectList(msg.getTemplateboardList(),
    proto.treeleaf.anydone.entities.TemplateBoard.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.TemplateSubProject}
 */
proto.treeleaf.anydone.entities.TemplateSubProject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TemplateSubProject;
  return proto.treeleaf.anydone.entities.TemplateSubProject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TemplateSubProject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TemplateSubProject}
 */
proto.treeleaf.anydone.entities.TemplateSubProject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubprojecttemplateid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTickettemplateid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedby(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedat(value);
      break;
    case 9:
      var value = new proto.treeleaf.anydone.entities.TemplateBoard;
      reader.readMessage(value,proto.treeleaf.anydone.entities.TemplateBoard.deserializeBinaryFromReader);
      msg.addTemplateboard(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.TemplateSubProject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TemplateSubProject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TemplateSubProject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TemplateSubProject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubprojecttemplateid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTickettemplateid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedby();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getTemplateboardList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.treeleaf.anydone.entities.TemplateBoard.serializeBinaryToWriter
    );
  }
};


/**
 * optional string subProjectTemplateId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TemplateSubProject.prototype.getSubprojecttemplateid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TemplateSubProject} returns this
 */
proto.treeleaf.anydone.entities.TemplateSubProject.prototype.setSubprojecttemplateid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TemplateSubProject.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TemplateSubProject} returns this
 */
proto.treeleaf.anydone.entities.TemplateSubProject.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TemplateSubProject.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TemplateSubProject} returns this
 */
proto.treeleaf.anydone.entities.TemplateSubProject.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string ticketTemplateId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TemplateSubProject.prototype.getTickettemplateid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TemplateSubProject} returns this
 */
proto.treeleaf.anydone.entities.TemplateSubProject.prototype.setTickettemplateid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string createdBy = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TemplateSubProject.prototype.getCreatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TemplateSubProject} returns this
 */
proto.treeleaf.anydone.entities.TemplateSubProject.prototype.setCreatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 createdAt = 6;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TemplateSubProject.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TemplateSubProject} returns this
 */
proto.treeleaf.anydone.entities.TemplateSubProject.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 updatedAt = 7;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TemplateSubProject.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TemplateSubProject} returns this
 */
proto.treeleaf.anydone.entities.TemplateSubProject.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * repeated TemplateBoard TemplateBoard = 9;
 * @return {!Array<!proto.treeleaf.anydone.entities.TemplateBoard>}
 */
proto.treeleaf.anydone.entities.TemplateSubProject.prototype.getTemplateboardList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.TemplateBoard>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.TemplateBoard, 9));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.TemplateBoard>} value
 * @return {!proto.treeleaf.anydone.entities.TemplateSubProject} returns this
*/
proto.treeleaf.anydone.entities.TemplateSubProject.prototype.setTemplateboardList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.TemplateBoard=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TemplateBoard}
 */
proto.treeleaf.anydone.entities.TemplateSubProject.prototype.addTemplateboard = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.treeleaf.anydone.entities.TemplateBoard, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.TemplateSubProject} returns this
 */
proto.treeleaf.anydone.entities.TemplateSubProject.prototype.clearTemplateboardList = function() {
  return this.setTemplateboardList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.TemplateBoard.repeatedFields_ = [8,9,10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.TemplateBoard.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TemplateBoard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TemplateBoard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TemplateBoard.toObject = function(includeInstance, msg) {
  var f, obj = {
    templateboardid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    boardtype: jspb.Message.getFieldWithDefault(msg, 3, 0),
    subprojectid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createby: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createat: jspb.Message.getFieldWithDefault(msg, 6, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 7, 0),
    templateboardsprintList: jspb.Message.toObjectList(msg.getTemplateboardsprintList(),
    proto.treeleaf.anydone.entities.TemplateBoardSprint.toObject, includeInstance),
    ticketList: jspb.Message.toObjectList(msg.getTicketList(),
    proto.treeleaf.anydone.entities.Ticket.toObject, includeInstance),
    sprintsList: jspb.Message.toObjectList(msg.getSprintsList(),
    proto.treeleaf.anydone.entities.TemplateBoardSprint.toObject, includeInstance),
    totalsprint: jspb.Message.getFieldWithDefault(msg, 11, 0),
    totalticket: jspb.Message.getFieldWithDefault(msg, 12, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.TemplateBoard}
 */
proto.treeleaf.anydone.entities.TemplateBoard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TemplateBoard;
  return proto.treeleaf.anydone.entities.TemplateBoard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TemplateBoard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TemplateBoard}
 */
proto.treeleaf.anydone.entities.TemplateBoard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTemplateboardid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {!proto.treeleaf.anydone.entities.BoardType} */ (reader.readEnum());
      msg.setBoardtype(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubprojectid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreateby(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreateat(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedat(value);
      break;
    case 8:
      var value = new proto.treeleaf.anydone.entities.TemplateBoardSprint;
      reader.readMessage(value,proto.treeleaf.anydone.entities.TemplateBoardSprint.deserializeBinaryFromReader);
      msg.addTemplateboardsprint(value);
      break;
    case 9:
      var value = new proto.treeleaf.anydone.entities.Ticket;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Ticket.deserializeBinaryFromReader);
      msg.addTicket(value);
      break;
    case 10:
      var value = new proto.treeleaf.anydone.entities.TemplateBoardSprint;
      reader.readMessage(value,proto.treeleaf.anydone.entities.TemplateBoardSprint.deserializeBinaryFromReader);
      msg.addSprints(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalsprint(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalticket(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.TemplateBoard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TemplateBoard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TemplateBoard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TemplateBoard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemplateboardid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBoardtype();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getSubprojectid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreateby();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreateat();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getTemplateboardsprintList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.treeleaf.anydone.entities.TemplateBoardSprint.serializeBinaryToWriter
    );
  }
  f = message.getTicketList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.treeleaf.anydone.entities.Ticket.serializeBinaryToWriter
    );
  }
  f = message.getSprintsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.treeleaf.anydone.entities.TemplateBoardSprint.serializeBinaryToWriter
    );
  }
  f = message.getTotalsprint();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getTotalticket();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
};


/**
 * optional string TemplateBoardId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TemplateBoard.prototype.getTemplateboardid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TemplateBoard} returns this
 */
proto.treeleaf.anydone.entities.TemplateBoard.prototype.setTemplateboardid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TemplateBoard.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TemplateBoard} returns this
 */
proto.treeleaf.anydone.entities.TemplateBoard.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional BoardType boardType = 3;
 * @return {!proto.treeleaf.anydone.entities.BoardType}
 */
proto.treeleaf.anydone.entities.TemplateBoard.prototype.getBoardtype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.BoardType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.BoardType} value
 * @return {!proto.treeleaf.anydone.entities.TemplateBoard} returns this
 */
proto.treeleaf.anydone.entities.TemplateBoard.prototype.setBoardtype = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string subProjectId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TemplateBoard.prototype.getSubprojectid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TemplateBoard} returns this
 */
proto.treeleaf.anydone.entities.TemplateBoard.prototype.setSubprojectid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string createBy = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TemplateBoard.prototype.getCreateby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TemplateBoard} returns this
 */
proto.treeleaf.anydone.entities.TemplateBoard.prototype.setCreateby = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 createAt = 6;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TemplateBoard.prototype.getCreateat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TemplateBoard} returns this
 */
proto.treeleaf.anydone.entities.TemplateBoard.prototype.setCreateat = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 updatedAt = 7;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TemplateBoard.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TemplateBoard} returns this
 */
proto.treeleaf.anydone.entities.TemplateBoard.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * repeated TemplateBoardSprint templateBoardSprint = 8;
 * @return {!Array<!proto.treeleaf.anydone.entities.TemplateBoardSprint>}
 */
proto.treeleaf.anydone.entities.TemplateBoard.prototype.getTemplateboardsprintList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.TemplateBoardSprint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.TemplateBoardSprint, 8));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.TemplateBoardSprint>} value
 * @return {!proto.treeleaf.anydone.entities.TemplateBoard} returns this
*/
proto.treeleaf.anydone.entities.TemplateBoard.prototype.setTemplateboardsprintList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.TemplateBoardSprint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TemplateBoardSprint}
 */
proto.treeleaf.anydone.entities.TemplateBoard.prototype.addTemplateboardsprint = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.treeleaf.anydone.entities.TemplateBoardSprint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.TemplateBoard} returns this
 */
proto.treeleaf.anydone.entities.TemplateBoard.prototype.clearTemplateboardsprintList = function() {
  return this.setTemplateboardsprintList([]);
};


/**
 * repeated Ticket ticket = 9;
 * @return {!Array<!proto.treeleaf.anydone.entities.Ticket>}
 */
proto.treeleaf.anydone.entities.TemplateBoard.prototype.getTicketList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.Ticket>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.Ticket, 9));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.Ticket>} value
 * @return {!proto.treeleaf.anydone.entities.TemplateBoard} returns this
*/
proto.treeleaf.anydone.entities.TemplateBoard.prototype.setTicketList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.Ticket=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.Ticket}
 */
proto.treeleaf.anydone.entities.TemplateBoard.prototype.addTicket = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.treeleaf.anydone.entities.Ticket, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.TemplateBoard} returns this
 */
proto.treeleaf.anydone.entities.TemplateBoard.prototype.clearTicketList = function() {
  return this.setTicketList([]);
};


/**
 * repeated TemplateBoardSprint sprints = 10;
 * @return {!Array<!proto.treeleaf.anydone.entities.TemplateBoardSprint>}
 */
proto.treeleaf.anydone.entities.TemplateBoard.prototype.getSprintsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.TemplateBoardSprint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.TemplateBoardSprint, 10));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.TemplateBoardSprint>} value
 * @return {!proto.treeleaf.anydone.entities.TemplateBoard} returns this
*/
proto.treeleaf.anydone.entities.TemplateBoard.prototype.setSprintsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.TemplateBoardSprint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TemplateBoardSprint}
 */
proto.treeleaf.anydone.entities.TemplateBoard.prototype.addSprints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.treeleaf.anydone.entities.TemplateBoardSprint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.TemplateBoard} returns this
 */
proto.treeleaf.anydone.entities.TemplateBoard.prototype.clearSprintsList = function() {
  return this.setSprintsList([]);
};


/**
 * optional int64 totalSprint = 11;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TemplateBoard.prototype.getTotalsprint = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TemplateBoard} returns this
 */
proto.treeleaf.anydone.entities.TemplateBoard.prototype.setTotalsprint = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 totalTicket = 12;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TemplateBoard.prototype.getTotalticket = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TemplateBoard} returns this
 */
proto.treeleaf.anydone.entities.TemplateBoard.prototype.setTotalticket = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.TemplateBoardSprint.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TemplateBoardSprint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TemplateBoardSprint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TemplateBoardSprint.toObject = function(includeInstance, msg) {
  var f, obj = {
    templateboardsprintid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sprintgoal: jspb.Message.getFieldWithDefault(msg, 3, ""),
    templateboardid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createdby: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 6, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.TemplateBoardSprint}
 */
proto.treeleaf.anydone.entities.TemplateBoardSprint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TemplateBoardSprint;
  return proto.treeleaf.anydone.entities.TemplateBoardSprint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TemplateBoardSprint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TemplateBoardSprint}
 */
proto.treeleaf.anydone.entities.TemplateBoardSprint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTemplateboardsprintid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSprintgoal(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTemplateboardid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedby(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.TemplateBoardSprint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TemplateBoardSprint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TemplateBoardSprint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TemplateBoardSprint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemplateboardsprintid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSprintgoal();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTemplateboardid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedby();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
};


/**
 * optional string templateBoardSprintId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TemplateBoardSprint.prototype.getTemplateboardsprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TemplateBoardSprint} returns this
 */
proto.treeleaf.anydone.entities.TemplateBoardSprint.prototype.setTemplateboardsprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TemplateBoardSprint.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TemplateBoardSprint} returns this
 */
proto.treeleaf.anydone.entities.TemplateBoardSprint.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sprintGoal = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TemplateBoardSprint.prototype.getSprintgoal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TemplateBoardSprint} returns this
 */
proto.treeleaf.anydone.entities.TemplateBoardSprint.prototype.setSprintgoal = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string TemplateBoardId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TemplateBoardSprint.prototype.getTemplateboardid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TemplateBoardSprint} returns this
 */
proto.treeleaf.anydone.entities.TemplateBoardSprint.prototype.setTemplateboardid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string createdBy = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TemplateBoardSprint.prototype.getCreatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TemplateBoardSprint} returns this
 */
proto.treeleaf.anydone.entities.TemplateBoardSprint.prototype.setCreatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 createdAt = 6;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TemplateBoardSprint.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TemplateBoardSprint} returns this
 */
proto.treeleaf.anydone.entities.TemplateBoardSprint.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 updatedAt = 7;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TemplateBoardSprint.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TemplateBoardSprint} returns this
 */
proto.treeleaf.anydone.entities.TemplateBoardSprint.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.TicketStateHistory.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TicketStateHistory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TicketStateHistory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketStateHistory.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    employee: (f = msg.getEmployee()) && user_pb.EmployeeProfile.toObject(includeInstance, f),
    remark: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.TicketStateHistory}
 */
proto.treeleaf.anydone.entities.TicketStateHistory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TicketStateHistory;
  return proto.treeleaf.anydone.entities.TicketStateHistory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TicketStateHistory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TicketStateHistory}
 */
proto.treeleaf.anydone.entities.TicketStateHistory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {!proto.treeleaf.anydone.entities.TicketStateHistory.TicketHistoryType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = new user_pb.EmployeeProfile;
      reader.readMessage(value,user_pb.EmployeeProfile.deserializeBinaryFromReader);
      msg.setEmployee(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemark(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.TicketStateHistory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TicketStateHistory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TicketStateHistory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketStateHistory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getEmployee();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      user_pb.EmployeeProfile.serializeBinaryToWriter
    );
  }
  f = message.getRemark();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.TicketStateHistory.TicketHistoryType = {
  UNKNOWN_TYPE: 0,
  CREATED: 1,
  UPDATED: 2,
  ASSIGNED: 3,
  STARTED: 4,
  RESOLVED: 5,
  CLOSED: 6,
  REOPENED: 7
};

/**
 * optional int64 timestamp = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStateHistory.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStateHistory} returns this
 */
proto.treeleaf.anydone.entities.TicketStateHistory.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional TicketHistoryType type = 2;
 * @return {!proto.treeleaf.anydone.entities.TicketStateHistory.TicketHistoryType}
 */
proto.treeleaf.anydone.entities.TicketStateHistory.prototype.getType = function() {
  return /** @type {!proto.treeleaf.anydone.entities.TicketStateHistory.TicketHistoryType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketStateHistory.TicketHistoryType} value
 * @return {!proto.treeleaf.anydone.entities.TicketStateHistory} returns this
 */
proto.treeleaf.anydone.entities.TicketStateHistory.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional EmployeeProfile employee = 3;
 * @return {?proto.treeleaf.anydone.entities.EmployeeProfile}
 */
proto.treeleaf.anydone.entities.TicketStateHistory.prototype.getEmployee = function() {
  return /** @type{?proto.treeleaf.anydone.entities.EmployeeProfile} */ (
    jspb.Message.getWrapperField(this, user_pb.EmployeeProfile, 3));
};


/**
 * @param {?proto.treeleaf.anydone.entities.EmployeeProfile|undefined} value
 * @return {!proto.treeleaf.anydone.entities.TicketStateHistory} returns this
*/
proto.treeleaf.anydone.entities.TicketStateHistory.prototype.setEmployee = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.TicketStateHistory} returns this
 */
proto.treeleaf.anydone.entities.TicketStateHistory.prototype.clearEmployee = function() {
  return this.setEmployee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TicketStateHistory.prototype.hasEmployee = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string remark = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketStateHistory.prototype.getRemark = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketStateHistory} returns this
 */
proto.treeleaf.anydone.entities.TicketStateHistory.prototype.setRemark = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.Ticket.repeatedFields_ = [8,15,25,29,31,39,41,42,49];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.Ticket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.Ticket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Ticket.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    employeeassigned: (f = msg.getEmployeeassigned()) && proto.treeleaf.anydone.entities.EmployeeAssigned.toObject(includeInstance, f),
    customer: (f = msg.getCustomer()) && user_pb.Customer.toObject(includeInstance, f),
    serviceprovider: (f = msg.getServiceprovider()) && user_pb.ServiceProviderProfile.toObject(includeInstance, f),
    ticketsource: jspb.Message.getFieldWithDefault(msg, 7, 0),
    teamsList: jspb.Message.toObjectList(msg.getTeamsList(),
    proto.treeleaf.anydone.entities.Team.toObject, includeInstance),
    createdat: jspb.Message.getFieldWithDefault(msg, 9, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 10, 0),
    ticketstate: jspb.Message.getFieldWithDefault(msg, 11, 0),
    closedremark: jspb.Message.getFieldWithDefault(msg, 12, ""),
    reopenedremark: jspb.Message.getFieldWithDefault(msg, 13, ""),
    customertype: jspb.Message.getFieldWithDefault(msg, 14, 0),
    subscribersList: jspb.Message.toObjectList(msg.getSubscribersList(),
    proto.treeleaf.anydone.entities.SubscribedEmployees.toObject, includeInstance),
    startedat: jspb.Message.getFieldWithDefault(msg, 16, 0),
    resolvedat: jspb.Message.getFieldWithDefault(msg, 17, 0),
    closedat: jspb.Message.getFieldWithDefault(msg, 18, 0),
    reopenedat: jspb.Message.getFieldWithDefault(msg, 19, 0),
    createdby: (f = msg.getCreatedby()) && user_pb.EmployeeProfile.toObject(includeInstance, f),
    startedby: (f = msg.getStartedby()) && user_pb.EmployeeProfile.toObject(includeInstance, f),
    resolvedby: (f = msg.getResolvedby()) && user_pb.EmployeeProfile.toObject(includeInstance, f),
    closedby: (f = msg.getClosedby()) && user_pb.EmployeeProfile.toObject(includeInstance, f),
    reopenedby: (f = msg.getReopenedby()) && user_pb.EmployeeProfile.toObject(includeInstance, f),
    ticketstatehistoryList: jspb.Message.toObjectList(msg.getTicketstatehistoryList(),
    proto.treeleaf.anydone.entities.TicketStateHistory.toObject, includeInstance),
    isbotenabled: jspb.Message.getBooleanFieldWithDefault(msg, 26, false),
    service: (f = msg.getService()) && service_pb.Service.toObject(includeInstance, f),
    priority: jspb.Message.getFieldWithDefault(msg, 28, 0),
    ticketcontributorList: jspb.Message.toObjectList(msg.getTicketcontributorList(),
    proto.treeleaf.anydone.entities.TicketContributor.toObject, includeInstance),
    refid: jspb.Message.getFieldWithDefault(msg, 30, ""),
    labelList: jspb.Message.toObjectList(msg.getLabelList(),
    proto.treeleaf.anydone.entities.Label.toObject, includeInstance),
    type: (f = msg.getType()) && proto.treeleaf.anydone.entities.TicketType.toObject(includeInstance, f),
    estimatedtime: jspb.Message.getFieldWithDefault(msg, 33, 0),
    estimatedtimedesc: jspb.Message.getFieldWithDefault(msg, 34, ""),
    msgid: jspb.Message.getFieldWithDefault(msg, 35, ""),
    ticketindex: jspb.Message.getFieldWithDefault(msg, 36, 0),
    dependonticket: (f = msg.getDependonticket()) && proto.treeleaf.anydone.entities.Ticket.toObject(includeInstance, f),
    attachmentsList: jspb.Message.toObjectList(msg.getAttachmentsList(),
    proto.treeleaf.anydone.entities.TicketAttachment.toObject, includeInstance),
    duedate: jspb.Message.getFieldWithDefault(msg, 40, 0),
    ticketstepsList: jspb.Message.toObjectList(msg.getTicketstepsList(),
    proto.treeleaf.anydone.entities.TicketStep.toObject, includeInstance),
    subtasksList: jspb.Message.toObjectList(msg.getSubtasksList(),
    proto.treeleaf.anydone.entities.Ticket.toObject, includeInstance),
    category: jspb.Message.getFieldWithDefault(msg, 43, 0),
    boardtype: jspb.Message.getFieldWithDefault(msg, 44, 0),
    sprintid: jspb.Message.getFieldWithDefault(msg, 45, ""),
    columnid: jspb.Message.getFieldWithDefault(msg, 46, ""),
    archive: jspb.Message.getBooleanFieldWithDefault(msg, 47, false),
    boardid: jspb.Message.getFieldWithDefault(msg, 48, ""),
    transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(),
    proto.treeleaf.anydone.entities.TicketColumnTransaction.toObject, includeInstance),
    movedcompleted: jspb.Message.getBooleanFieldWithDefault(msg, 50, false),
    completedpercent: jspb.Message.getFloatingPointFieldWithDefault(msg, 51, 0.0),
    fromcolumnid: jspb.Message.getFieldWithDefault(msg, 52, ""),
    ticketorder: jspb.Message.getFieldWithDefault(msg, 53, 0),
    board: (f = msg.getBoard()) && proto.treeleaf.anydone.entities.TemplateBoard.toObject(includeInstance, f),
    ticketsharelink: (f = msg.getTicketsharelink()) && domain_ticket_share_link_pb.TicketShareLink.toObject(includeInstance, f),
    bot: (f = msg.getBot()) && bot_housekeeping_pb.BotSettings.toObject(includeInstance, f),
    displayname: jspb.Message.getFieldWithDefault(msg, 57, ""),
    todo: (f = msg.getTodo()) && proto.treeleaf.anydone.entities.ProcessTime.toObject(includeInstance, f),
    inprogress: (f = msg.getInprogress()) && proto.treeleaf.anydone.entities.ProcessTime.toObject(includeInstance, f),
    done: (f = msg.getDone()) && proto.treeleaf.anydone.entities.ProcessTime.toObject(includeInstance, f),
    sharelink: (f = msg.getSharelink()) && domain_share_link_pb.ShareLink.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.Ticket}
 */
proto.treeleaf.anydone.entities.Ticket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.Ticket;
  return proto.treeleaf.anydone.entities.Ticket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.Ticket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.Ticket}
 */
proto.treeleaf.anydone.entities.Ticket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTicketid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = new proto.treeleaf.anydone.entities.EmployeeAssigned;
      reader.readMessage(value,proto.treeleaf.anydone.entities.EmployeeAssigned.deserializeBinaryFromReader);
      msg.setEmployeeassigned(value);
      break;
    case 5:
      var value = new user_pb.Customer;
      reader.readMessage(value,user_pb.Customer.deserializeBinaryFromReader);
      msg.setCustomer(value);
      break;
    case 6:
      var value = new user_pb.ServiceProviderProfile;
      reader.readMessage(value,user_pb.ServiceProviderProfile.deserializeBinaryFromReader);
      msg.setServiceprovider(value);
      break;
    case 7:
      var value = /** @type {!proto.treeleaf.anydone.entities.TicketSource} */ (reader.readEnum());
      msg.setTicketsource(value);
      break;
    case 8:
      var value = new proto.treeleaf.anydone.entities.Team;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Team.deserializeBinaryFromReader);
      msg.addTeams(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedat(value);
      break;
    case 11:
      var value = /** @type {!proto.treeleaf.anydone.entities.TicketState} */ (reader.readEnum());
      msg.setTicketstate(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setClosedremark(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setReopenedremark(value);
      break;
    case 14:
      var value = /** @type {!proto.treeleaf.anydone.entities.CustomerType} */ (reader.readEnum());
      msg.setCustomertype(value);
      break;
    case 15:
      var value = new proto.treeleaf.anydone.entities.SubscribedEmployees;
      reader.readMessage(value,proto.treeleaf.anydone.entities.SubscribedEmployees.deserializeBinaryFromReader);
      msg.addSubscribers(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartedat(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setResolvedat(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setClosedat(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReopenedat(value);
      break;
    case 20:
      var value = new user_pb.EmployeeProfile;
      reader.readMessage(value,user_pb.EmployeeProfile.deserializeBinaryFromReader);
      msg.setCreatedby(value);
      break;
    case 21:
      var value = new user_pb.EmployeeProfile;
      reader.readMessage(value,user_pb.EmployeeProfile.deserializeBinaryFromReader);
      msg.setStartedby(value);
      break;
    case 22:
      var value = new user_pb.EmployeeProfile;
      reader.readMessage(value,user_pb.EmployeeProfile.deserializeBinaryFromReader);
      msg.setResolvedby(value);
      break;
    case 23:
      var value = new user_pb.EmployeeProfile;
      reader.readMessage(value,user_pb.EmployeeProfile.deserializeBinaryFromReader);
      msg.setClosedby(value);
      break;
    case 24:
      var value = new user_pb.EmployeeProfile;
      reader.readMessage(value,user_pb.EmployeeProfile.deserializeBinaryFromReader);
      msg.setReopenedby(value);
      break;
    case 25:
      var value = new proto.treeleaf.anydone.entities.TicketStateHistory;
      reader.readMessage(value,proto.treeleaf.anydone.entities.TicketStateHistory.deserializeBinaryFromReader);
      msg.addTicketstatehistory(value);
      break;
    case 26:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsbotenabled(value);
      break;
    case 27:
      var value = new service_pb.Service;
      reader.readMessage(value,service_pb.Service.deserializeBinaryFromReader);
      msg.setService(value);
      break;
    case 28:
      var value = /** @type {!proto.treeleaf.anydone.entities.TicketPriority} */ (reader.readEnum());
      msg.setPriority(value);
      break;
    case 29:
      var value = new proto.treeleaf.anydone.entities.TicketContributor;
      reader.readMessage(value,proto.treeleaf.anydone.entities.TicketContributor.deserializeBinaryFromReader);
      msg.addTicketcontributor(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 31:
      var value = new proto.treeleaf.anydone.entities.Label;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Label.deserializeBinaryFromReader);
      msg.addLabel(value);
      break;
    case 32:
      var value = new proto.treeleaf.anydone.entities.TicketType;
      reader.readMessage(value,proto.treeleaf.anydone.entities.TicketType.deserializeBinaryFromReader);
      msg.setType(value);
      break;
    case 33:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEstimatedtime(value);
      break;
    case 34:
      var value = /** @type {string} */ (reader.readString());
      msg.setEstimatedtimedesc(value);
      break;
    case 35:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgid(value);
      break;
    case 36:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTicketindex(value);
      break;
    case 37:
      var value = new proto.treeleaf.anydone.entities.Ticket;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Ticket.deserializeBinaryFromReader);
      msg.setDependonticket(value);
      break;
    case 39:
      var value = new proto.treeleaf.anydone.entities.TicketAttachment;
      reader.readMessage(value,proto.treeleaf.anydone.entities.TicketAttachment.deserializeBinaryFromReader);
      msg.addAttachments(value);
      break;
    case 40:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDuedate(value);
      break;
    case 41:
      var value = new proto.treeleaf.anydone.entities.TicketStep;
      reader.readMessage(value,proto.treeleaf.anydone.entities.TicketStep.deserializeBinaryFromReader);
      msg.addTicketsteps(value);
      break;
    case 42:
      var value = new proto.treeleaf.anydone.entities.Ticket;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Ticket.deserializeBinaryFromReader);
      msg.addSubtasks(value);
      break;
    case 43:
      var value = /** @type {!proto.treeleaf.anydone.entities.TicketCategory} */ (reader.readEnum());
      msg.setCategory(value);
      break;
    case 44:
      var value = /** @type {!proto.treeleaf.anydone.entities.BoardType} */ (reader.readEnum());
      msg.setBoardtype(value);
      break;
    case 45:
      var value = /** @type {string} */ (reader.readString());
      msg.setSprintid(value);
      break;
    case 46:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnid(value);
      break;
    case 47:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setArchive(value);
      break;
    case 48:
      var value = /** @type {string} */ (reader.readString());
      msg.setBoardid(value);
      break;
    case 49:
      var value = new proto.treeleaf.anydone.entities.TicketColumnTransaction;
      reader.readMessage(value,proto.treeleaf.anydone.entities.TicketColumnTransaction.deserializeBinaryFromReader);
      msg.addTransactions(value);
      break;
    case 50:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMovedcompleted(value);
      break;
    case 51:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCompletedpercent(value);
      break;
    case 52:
      var value = /** @type {string} */ (reader.readString());
      msg.setFromcolumnid(value);
      break;
    case 53:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTicketorder(value);
      break;
    case 54:
      var value = new proto.treeleaf.anydone.entities.TemplateBoard;
      reader.readMessage(value,proto.treeleaf.anydone.entities.TemplateBoard.deserializeBinaryFromReader);
      msg.setBoard(value);
      break;
    case 55:
      var value = new domain_ticket_share_link_pb.TicketShareLink;
      reader.readMessage(value,domain_ticket_share_link_pb.TicketShareLink.deserializeBinaryFromReader);
      msg.setTicketsharelink(value);
      break;
    case 56:
      var value = new bot_housekeeping_pb.BotSettings;
      reader.readMessage(value,bot_housekeeping_pb.BotSettings.deserializeBinaryFromReader);
      msg.setBot(value);
      break;
    case 57:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayname(value);
      break;
    case 58:
      var value = new proto.treeleaf.anydone.entities.ProcessTime;
      reader.readMessage(value,proto.treeleaf.anydone.entities.ProcessTime.deserializeBinaryFromReader);
      msg.setTodo(value);
      break;
    case 59:
      var value = new proto.treeleaf.anydone.entities.ProcessTime;
      reader.readMessage(value,proto.treeleaf.anydone.entities.ProcessTime.deserializeBinaryFromReader);
      msg.setInprogress(value);
      break;
    case 60:
      var value = new proto.treeleaf.anydone.entities.ProcessTime;
      reader.readMessage(value,proto.treeleaf.anydone.entities.ProcessTime.deserializeBinaryFromReader);
      msg.setDone(value);
      break;
    case 61:
      var value = new domain_share_link_pb.ShareLink;
      reader.readMessage(value,domain_share_link_pb.ShareLink.deserializeBinaryFromReader);
      msg.setSharelink(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.Ticket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.Ticket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Ticket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEmployeeassigned();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.treeleaf.anydone.entities.EmployeeAssigned.serializeBinaryToWriter
    );
  }
  f = message.getCustomer();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      user_pb.Customer.serializeBinaryToWriter
    );
  }
  f = message.getServiceprovider();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      user_pb.ServiceProviderProfile.serializeBinaryToWriter
    );
  }
  f = message.getTicketsource();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getTeamsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.treeleaf.anydone.entities.Team.serializeBinaryToWriter
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getTicketstate();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getClosedremark();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getReopenedremark();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getCustomertype();
  if (f !== 0.0) {
    writer.writeEnum(
      14,
      f
    );
  }
  f = message.getSubscribersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto.treeleaf.anydone.entities.SubscribedEmployees.serializeBinaryToWriter
    );
  }
  f = message.getStartedat();
  if (f !== 0) {
    writer.writeInt64(
      16,
      f
    );
  }
  f = message.getResolvedat();
  if (f !== 0) {
    writer.writeInt64(
      17,
      f
    );
  }
  f = message.getClosedat();
  if (f !== 0) {
    writer.writeInt64(
      18,
      f
    );
  }
  f = message.getReopenedat();
  if (f !== 0) {
    writer.writeInt64(
      19,
      f
    );
  }
  f = message.getCreatedby();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      user_pb.EmployeeProfile.serializeBinaryToWriter
    );
  }
  f = message.getStartedby();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      user_pb.EmployeeProfile.serializeBinaryToWriter
    );
  }
  f = message.getResolvedby();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      user_pb.EmployeeProfile.serializeBinaryToWriter
    );
  }
  f = message.getClosedby();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      user_pb.EmployeeProfile.serializeBinaryToWriter
    );
  }
  f = message.getReopenedby();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      user_pb.EmployeeProfile.serializeBinaryToWriter
    );
  }
  f = message.getTicketstatehistoryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      25,
      f,
      proto.treeleaf.anydone.entities.TicketStateHistory.serializeBinaryToWriter
    );
  }
  f = message.getIsbotenabled();
  if (f) {
    writer.writeBool(
      26,
      f
    );
  }
  f = message.getService();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      service_pb.Service.serializeBinaryToWriter
    );
  }
  f = message.getPriority();
  if (f !== 0.0) {
    writer.writeEnum(
      28,
      f
    );
  }
  f = message.getTicketcontributorList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      29,
      f,
      proto.treeleaf.anydone.entities.TicketContributor.serializeBinaryToWriter
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      30,
      f
    );
  }
  f = message.getLabelList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      31,
      f,
      proto.treeleaf.anydone.entities.Label.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto.treeleaf.anydone.entities.TicketType.serializeBinaryToWriter
    );
  }
  f = message.getEstimatedtime();
  if (f !== 0) {
    writer.writeInt64(
      33,
      f
    );
  }
  f = message.getEstimatedtimedesc();
  if (f.length > 0) {
    writer.writeString(
      34,
      f
    );
  }
  f = message.getMsgid();
  if (f.length > 0) {
    writer.writeString(
      35,
      f
    );
  }
  f = message.getTicketindex();
  if (f !== 0) {
    writer.writeInt64(
      36,
      f
    );
  }
  f = message.getDependonticket();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      proto.treeleaf.anydone.entities.Ticket.serializeBinaryToWriter
    );
  }
  f = message.getAttachmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      39,
      f,
      proto.treeleaf.anydone.entities.TicketAttachment.serializeBinaryToWriter
    );
  }
  f = message.getDuedate();
  if (f !== 0) {
    writer.writeInt64(
      40,
      f
    );
  }
  f = message.getTicketstepsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      41,
      f,
      proto.treeleaf.anydone.entities.TicketStep.serializeBinaryToWriter
    );
  }
  f = message.getSubtasksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      42,
      f,
      proto.treeleaf.anydone.entities.Ticket.serializeBinaryToWriter
    );
  }
  f = message.getCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      43,
      f
    );
  }
  f = message.getBoardtype();
  if (f !== 0.0) {
    writer.writeEnum(
      44,
      f
    );
  }
  f = message.getSprintid();
  if (f.length > 0) {
    writer.writeString(
      45,
      f
    );
  }
  f = message.getColumnid();
  if (f.length > 0) {
    writer.writeString(
      46,
      f
    );
  }
  f = message.getArchive();
  if (f) {
    writer.writeBool(
      47,
      f
    );
  }
  f = message.getBoardid();
  if (f.length > 0) {
    writer.writeString(
      48,
      f
    );
  }
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      49,
      f,
      proto.treeleaf.anydone.entities.TicketColumnTransaction.serializeBinaryToWriter
    );
  }
  f = message.getMovedcompleted();
  if (f) {
    writer.writeBool(
      50,
      f
    );
  }
  f = message.getCompletedpercent();
  if (f !== 0.0) {
    writer.writeFloat(
      51,
      f
    );
  }
  f = message.getFromcolumnid();
  if (f.length > 0) {
    writer.writeString(
      52,
      f
    );
  }
  f = message.getTicketorder();
  if (f !== 0) {
    writer.writeInt64(
      53,
      f
    );
  }
  f = message.getBoard();
  if (f != null) {
    writer.writeMessage(
      54,
      f,
      proto.treeleaf.anydone.entities.TemplateBoard.serializeBinaryToWriter
    );
  }
  f = message.getTicketsharelink();
  if (f != null) {
    writer.writeMessage(
      55,
      f,
      domain_ticket_share_link_pb.TicketShareLink.serializeBinaryToWriter
    );
  }
  f = message.getBot();
  if (f != null) {
    writer.writeMessage(
      56,
      f,
      bot_housekeeping_pb.BotSettings.serializeBinaryToWriter
    );
  }
  f = message.getDisplayname();
  if (f.length > 0) {
    writer.writeString(
      57,
      f
    );
  }
  f = message.getTodo();
  if (f != null) {
    writer.writeMessage(
      58,
      f,
      proto.treeleaf.anydone.entities.ProcessTime.serializeBinaryToWriter
    );
  }
  f = message.getInprogress();
  if (f != null) {
    writer.writeMessage(
      59,
      f,
      proto.treeleaf.anydone.entities.ProcessTime.serializeBinaryToWriter
    );
  }
  f = message.getDone();
  if (f != null) {
    writer.writeMessage(
      60,
      f,
      proto.treeleaf.anydone.entities.ProcessTime.serializeBinaryToWriter
    );
  }
  f = message.getSharelink();
  if (f != null) {
    writer.writeMessage(
      61,
      f,
      domain_share_link_pb.ShareLink.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 ticketId = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getTicketid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setTicketid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional EmployeeAssigned employeeAssigned = 4;
 * @return {?proto.treeleaf.anydone.entities.EmployeeAssigned}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getEmployeeassigned = function() {
  return /** @type{?proto.treeleaf.anydone.entities.EmployeeAssigned} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.EmployeeAssigned, 4));
};


/**
 * @param {?proto.treeleaf.anydone.entities.EmployeeAssigned|undefined} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
*/
proto.treeleaf.anydone.entities.Ticket.prototype.setEmployeeassigned = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.clearEmployeeassigned = function() {
  return this.setEmployeeassigned(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.hasEmployeeassigned = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Customer customer = 5;
 * @return {?proto.treeleaf.anydone.entities.Customer}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getCustomer = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Customer} */ (
    jspb.Message.getWrapperField(this, user_pb.Customer, 5));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Customer|undefined} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
*/
proto.treeleaf.anydone.entities.Ticket.prototype.setCustomer = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.clearCustomer = function() {
  return this.setCustomer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.hasCustomer = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ServiceProviderProfile serviceProvider = 6;
 * @return {?proto.treeleaf.anydone.entities.ServiceProviderProfile}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getServiceprovider = function() {
  return /** @type{?proto.treeleaf.anydone.entities.ServiceProviderProfile} */ (
    jspb.Message.getWrapperField(this, user_pb.ServiceProviderProfile, 6));
};


/**
 * @param {?proto.treeleaf.anydone.entities.ServiceProviderProfile|undefined} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
*/
proto.treeleaf.anydone.entities.Ticket.prototype.setServiceprovider = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.clearServiceprovider = function() {
  return this.setServiceprovider(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.hasServiceprovider = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional TicketSource ticketSource = 7;
 * @return {!proto.treeleaf.anydone.entities.TicketSource}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getTicketsource = function() {
  return /** @type {!proto.treeleaf.anydone.entities.TicketSource} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketSource} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setTicketsource = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * repeated Team teams = 8;
 * @return {!Array<!proto.treeleaf.anydone.entities.Team>}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getTeamsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.Team>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.Team, 8));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.Team>} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
*/
proto.treeleaf.anydone.entities.Ticket.prototype.setTeamsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.Team=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.Team}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.addTeams = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.treeleaf.anydone.entities.Team, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.clearTeamsList = function() {
  return this.setTeamsList([]);
};


/**
 * optional int64 createdAt = 9;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 updatedAt = 10;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional TicketState ticketState = 11;
 * @return {!proto.treeleaf.anydone.entities.TicketState}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getTicketstate = function() {
  return /** @type {!proto.treeleaf.anydone.entities.TicketState} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketState} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setTicketstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional string closedRemark = 12;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getClosedremark = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setClosedremark = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string reopenedRemark = 13;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getReopenedremark = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setReopenedremark = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional CustomerType customerType = 14;
 * @return {!proto.treeleaf.anydone.entities.CustomerType}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getCustomertype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.CustomerType} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.CustomerType} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setCustomertype = function(value) {
  return jspb.Message.setProto3EnumField(this, 14, value);
};


/**
 * repeated SubscribedEmployees subscribers = 15;
 * @return {!Array<!proto.treeleaf.anydone.entities.SubscribedEmployees>}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getSubscribersList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.SubscribedEmployees>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.SubscribedEmployees, 15));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.SubscribedEmployees>} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
*/
proto.treeleaf.anydone.entities.Ticket.prototype.setSubscribersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.SubscribedEmployees=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.SubscribedEmployees}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.addSubscribers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.treeleaf.anydone.entities.SubscribedEmployees, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.clearSubscribersList = function() {
  return this.setSubscribersList([]);
};


/**
 * optional int64 startedAt = 16;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getStartedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setStartedat = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional int64 resolvedAt = 17;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getResolvedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setResolvedat = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional int64 closedAt = 18;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getClosedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setClosedat = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional int64 reopenedAt = 19;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getReopenedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setReopenedat = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional EmployeeProfile createdBy = 20;
 * @return {?proto.treeleaf.anydone.entities.EmployeeProfile}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getCreatedby = function() {
  return /** @type{?proto.treeleaf.anydone.entities.EmployeeProfile} */ (
    jspb.Message.getWrapperField(this, user_pb.EmployeeProfile, 20));
};


/**
 * @param {?proto.treeleaf.anydone.entities.EmployeeProfile|undefined} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
*/
proto.treeleaf.anydone.entities.Ticket.prototype.setCreatedby = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.clearCreatedby = function() {
  return this.setCreatedby(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.hasCreatedby = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional EmployeeProfile startedBy = 21;
 * @return {?proto.treeleaf.anydone.entities.EmployeeProfile}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getStartedby = function() {
  return /** @type{?proto.treeleaf.anydone.entities.EmployeeProfile} */ (
    jspb.Message.getWrapperField(this, user_pb.EmployeeProfile, 21));
};


/**
 * @param {?proto.treeleaf.anydone.entities.EmployeeProfile|undefined} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
*/
proto.treeleaf.anydone.entities.Ticket.prototype.setStartedby = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.clearStartedby = function() {
  return this.setStartedby(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.hasStartedby = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional EmployeeProfile resolvedBy = 22;
 * @return {?proto.treeleaf.anydone.entities.EmployeeProfile}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getResolvedby = function() {
  return /** @type{?proto.treeleaf.anydone.entities.EmployeeProfile} */ (
    jspb.Message.getWrapperField(this, user_pb.EmployeeProfile, 22));
};


/**
 * @param {?proto.treeleaf.anydone.entities.EmployeeProfile|undefined} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
*/
proto.treeleaf.anydone.entities.Ticket.prototype.setResolvedby = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.clearResolvedby = function() {
  return this.setResolvedby(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.hasResolvedby = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional EmployeeProfile closedBy = 23;
 * @return {?proto.treeleaf.anydone.entities.EmployeeProfile}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getClosedby = function() {
  return /** @type{?proto.treeleaf.anydone.entities.EmployeeProfile} */ (
    jspb.Message.getWrapperField(this, user_pb.EmployeeProfile, 23));
};


/**
 * @param {?proto.treeleaf.anydone.entities.EmployeeProfile|undefined} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
*/
proto.treeleaf.anydone.entities.Ticket.prototype.setClosedby = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.clearClosedby = function() {
  return this.setClosedby(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.hasClosedby = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional EmployeeProfile reopenedBy = 24;
 * @return {?proto.treeleaf.anydone.entities.EmployeeProfile}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getReopenedby = function() {
  return /** @type{?proto.treeleaf.anydone.entities.EmployeeProfile} */ (
    jspb.Message.getWrapperField(this, user_pb.EmployeeProfile, 24));
};


/**
 * @param {?proto.treeleaf.anydone.entities.EmployeeProfile|undefined} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
*/
proto.treeleaf.anydone.entities.Ticket.prototype.setReopenedby = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.clearReopenedby = function() {
  return this.setReopenedby(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.hasReopenedby = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * repeated TicketStateHistory ticketStateHistory = 25;
 * @return {!Array<!proto.treeleaf.anydone.entities.TicketStateHistory>}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getTicketstatehistoryList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.TicketStateHistory>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.TicketStateHistory, 25));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.TicketStateHistory>} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
*/
proto.treeleaf.anydone.entities.Ticket.prototype.setTicketstatehistoryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 25, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketStateHistory=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TicketStateHistory}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.addTicketstatehistory = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 25, opt_value, proto.treeleaf.anydone.entities.TicketStateHistory, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.clearTicketstatehistoryList = function() {
  return this.setTicketstatehistoryList([]);
};


/**
 * optional bool isBotEnabled = 26;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getIsbotenabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 26, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setIsbotenabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 26, value);
};


/**
 * optional Service service = 27;
 * @return {?proto.treeleaf.anydone.entities.Service}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getService = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Service} */ (
    jspb.Message.getWrapperField(this, service_pb.Service, 27));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Service|undefined} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
*/
proto.treeleaf.anydone.entities.Ticket.prototype.setService = function(value) {
  return jspb.Message.setWrapperField(this, 27, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.clearService = function() {
  return this.setService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.hasService = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional TicketPriority priority = 28;
 * @return {!proto.treeleaf.anydone.entities.TicketPriority}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getPriority = function() {
  return /** @type {!proto.treeleaf.anydone.entities.TicketPriority} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketPriority} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setPriority = function(value) {
  return jspb.Message.setProto3EnumField(this, 28, value);
};


/**
 * repeated TicketContributor ticketContributor = 29;
 * @return {!Array<!proto.treeleaf.anydone.entities.TicketContributor>}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getTicketcontributorList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.TicketContributor>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.TicketContributor, 29));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.TicketContributor>} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
*/
proto.treeleaf.anydone.entities.Ticket.prototype.setTicketcontributorList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 29, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketContributor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TicketContributor}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.addTicketcontributor = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 29, opt_value, proto.treeleaf.anydone.entities.TicketContributor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.clearTicketcontributorList = function() {
  return this.setTicketcontributorList([]);
};


/**
 * optional string refId = 30;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 30, value);
};


/**
 * repeated Label label = 31;
 * @return {!Array<!proto.treeleaf.anydone.entities.Label>}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getLabelList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.Label>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.Label, 31));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.Label>} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
*/
proto.treeleaf.anydone.entities.Ticket.prototype.setLabelList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 31, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.Label=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.Label}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.addLabel = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 31, opt_value, proto.treeleaf.anydone.entities.Label, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.clearLabelList = function() {
  return this.setLabelList([]);
};


/**
 * optional TicketType type = 32;
 * @return {?proto.treeleaf.anydone.entities.TicketType}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getType = function() {
  return /** @type{?proto.treeleaf.anydone.entities.TicketType} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.TicketType, 32));
};


/**
 * @param {?proto.treeleaf.anydone.entities.TicketType|undefined} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
*/
proto.treeleaf.anydone.entities.Ticket.prototype.setType = function(value) {
  return jspb.Message.setWrapperField(this, 32, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.clearType = function() {
  return this.setType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.hasType = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional int64 estimatedTime = 33;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getEstimatedtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 33, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setEstimatedtime = function(value) {
  return jspb.Message.setProto3IntField(this, 33, value);
};


/**
 * optional string estimatedTimeDesc = 34;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getEstimatedtimedesc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 34, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setEstimatedtimedesc = function(value) {
  return jspb.Message.setProto3StringField(this, 34, value);
};


/**
 * optional string msgId = 35;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getMsgid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 35, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setMsgid = function(value) {
  return jspb.Message.setProto3StringField(this, 35, value);
};


/**
 * optional int64 ticketIndex = 36;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getTicketindex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 36, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setTicketindex = function(value) {
  return jspb.Message.setProto3IntField(this, 36, value);
};


/**
 * optional Ticket dependOnTicket = 37;
 * @return {?proto.treeleaf.anydone.entities.Ticket}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getDependonticket = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Ticket} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.Ticket, 37));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Ticket|undefined} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
*/
proto.treeleaf.anydone.entities.Ticket.prototype.setDependonticket = function(value) {
  return jspb.Message.setWrapperField(this, 37, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.clearDependonticket = function() {
  return this.setDependonticket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.hasDependonticket = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * repeated TicketAttachment attachments = 39;
 * @return {!Array<!proto.treeleaf.anydone.entities.TicketAttachment>}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getAttachmentsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.TicketAttachment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.TicketAttachment, 39));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.TicketAttachment>} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
*/
proto.treeleaf.anydone.entities.Ticket.prototype.setAttachmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 39, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketAttachment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TicketAttachment}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.addAttachments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 39, opt_value, proto.treeleaf.anydone.entities.TicketAttachment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.clearAttachmentsList = function() {
  return this.setAttachmentsList([]);
};


/**
 * optional int64 dueDate = 40;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getDuedate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 40, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setDuedate = function(value) {
  return jspb.Message.setProto3IntField(this, 40, value);
};


/**
 * repeated TicketStep ticketSteps = 41;
 * @return {!Array<!proto.treeleaf.anydone.entities.TicketStep>}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getTicketstepsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.TicketStep>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.TicketStep, 41));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.TicketStep>} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
*/
proto.treeleaf.anydone.entities.Ticket.prototype.setTicketstepsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 41, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketStep=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TicketStep}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.addTicketsteps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 41, opt_value, proto.treeleaf.anydone.entities.TicketStep, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.clearTicketstepsList = function() {
  return this.setTicketstepsList([]);
};


/**
 * repeated Ticket subtasks = 42;
 * @return {!Array<!proto.treeleaf.anydone.entities.Ticket>}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getSubtasksList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.Ticket>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.Ticket, 42));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.Ticket>} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
*/
proto.treeleaf.anydone.entities.Ticket.prototype.setSubtasksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 42, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.Ticket=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.Ticket}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.addSubtasks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 42, opt_value, proto.treeleaf.anydone.entities.Ticket, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.clearSubtasksList = function() {
  return this.setSubtasksList([]);
};


/**
 * optional TicketCategory category = 43;
 * @return {!proto.treeleaf.anydone.entities.TicketCategory}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getCategory = function() {
  return /** @type {!proto.treeleaf.anydone.entities.TicketCategory} */ (jspb.Message.getFieldWithDefault(this, 43, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketCategory} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 43, value);
};


/**
 * optional BoardType boardType = 44;
 * @return {!proto.treeleaf.anydone.entities.BoardType}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getBoardtype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.BoardType} */ (jspb.Message.getFieldWithDefault(this, 44, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.BoardType} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setBoardtype = function(value) {
  return jspb.Message.setProto3EnumField(this, 44, value);
};


/**
 * optional string sprintId = 45;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getSprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 45, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setSprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 45, value);
};


/**
 * optional string columnId = 46;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getColumnid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 46, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setColumnid = function(value) {
  return jspb.Message.setProto3StringField(this, 46, value);
};


/**
 * optional bool archive = 47;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getArchive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 47, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setArchive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 47, value);
};


/**
 * optional string boardId = 48;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getBoardid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 48, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setBoardid = function(value) {
  return jspb.Message.setProto3StringField(this, 48, value);
};


/**
 * repeated TicketColumnTransaction transactions = 49;
 * @return {!Array<!proto.treeleaf.anydone.entities.TicketColumnTransaction>}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getTransactionsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.TicketColumnTransaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.TicketColumnTransaction, 49));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.TicketColumnTransaction>} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
*/
proto.treeleaf.anydone.entities.Ticket.prototype.setTransactionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 49, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketColumnTransaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TicketColumnTransaction}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.addTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 49, opt_value, proto.treeleaf.anydone.entities.TicketColumnTransaction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.clearTransactionsList = function() {
  return this.setTransactionsList([]);
};


/**
 * optional bool movedCompleted = 50;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getMovedcompleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 50, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setMovedcompleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 50, value);
};


/**
 * optional float completedPercent = 51;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getCompletedpercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 51, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setCompletedpercent = function(value) {
  return jspb.Message.setProto3FloatField(this, 51, value);
};


/**
 * optional string fromColumnId = 52;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getFromcolumnid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 52, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setFromcolumnid = function(value) {
  return jspb.Message.setProto3StringField(this, 52, value);
};


/**
 * optional int64 ticketOrder = 53;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getTicketorder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 53, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setTicketorder = function(value) {
  return jspb.Message.setProto3IntField(this, 53, value);
};


/**
 * optional TemplateBoard board = 54;
 * @return {?proto.treeleaf.anydone.entities.TemplateBoard}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getBoard = function() {
  return /** @type{?proto.treeleaf.anydone.entities.TemplateBoard} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.TemplateBoard, 54));
};


/**
 * @param {?proto.treeleaf.anydone.entities.TemplateBoard|undefined} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
*/
proto.treeleaf.anydone.entities.Ticket.prototype.setBoard = function(value) {
  return jspb.Message.setWrapperField(this, 54, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.clearBoard = function() {
  return this.setBoard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.hasBoard = function() {
  return jspb.Message.getField(this, 54) != null;
};


/**
 * optional ticket.domain.TicketShareLink ticketShareLink = 55;
 * @return {?proto.treeleaf.anydone.entities.ticket.domain.TicketShareLink}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getTicketsharelink = function() {
  return /** @type{?proto.treeleaf.anydone.entities.ticket.domain.TicketShareLink} */ (
    jspb.Message.getWrapperField(this, domain_ticket_share_link_pb.TicketShareLink, 55));
};


/**
 * @param {?proto.treeleaf.anydone.entities.ticket.domain.TicketShareLink|undefined} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
*/
proto.treeleaf.anydone.entities.Ticket.prototype.setTicketsharelink = function(value) {
  return jspb.Message.setWrapperField(this, 55, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.clearTicketsharelink = function() {
  return this.setTicketsharelink(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.hasTicketsharelink = function() {
  return jspb.Message.getField(this, 55) != null;
};


/**
 * optional BotSettings bot = 56;
 * @return {?proto.treeleaf.anydone.entities.BotSettings}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getBot = function() {
  return /** @type{?proto.treeleaf.anydone.entities.BotSettings} */ (
    jspb.Message.getWrapperField(this, bot_housekeeping_pb.BotSettings, 56));
};


/**
 * @param {?proto.treeleaf.anydone.entities.BotSettings|undefined} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
*/
proto.treeleaf.anydone.entities.Ticket.prototype.setBot = function(value) {
  return jspb.Message.setWrapperField(this, 56, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.clearBot = function() {
  return this.setBot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.hasBot = function() {
  return jspb.Message.getField(this, 56) != null;
};


/**
 * optional string displayName = 57;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getDisplayname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 57, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.setDisplayname = function(value) {
  return jspb.Message.setProto3StringField(this, 57, value);
};


/**
 * optional ProcessTime todo = 58;
 * @return {?proto.treeleaf.anydone.entities.ProcessTime}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getTodo = function() {
  return /** @type{?proto.treeleaf.anydone.entities.ProcessTime} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.ProcessTime, 58));
};


/**
 * @param {?proto.treeleaf.anydone.entities.ProcessTime|undefined} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
*/
proto.treeleaf.anydone.entities.Ticket.prototype.setTodo = function(value) {
  return jspb.Message.setWrapperField(this, 58, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.clearTodo = function() {
  return this.setTodo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.hasTodo = function() {
  return jspb.Message.getField(this, 58) != null;
};


/**
 * optional ProcessTime inProgress = 59;
 * @return {?proto.treeleaf.anydone.entities.ProcessTime}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getInprogress = function() {
  return /** @type{?proto.treeleaf.anydone.entities.ProcessTime} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.ProcessTime, 59));
};


/**
 * @param {?proto.treeleaf.anydone.entities.ProcessTime|undefined} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
*/
proto.treeleaf.anydone.entities.Ticket.prototype.setInprogress = function(value) {
  return jspb.Message.setWrapperField(this, 59, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.clearInprogress = function() {
  return this.setInprogress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.hasInprogress = function() {
  return jspb.Message.getField(this, 59) != null;
};


/**
 * optional ProcessTime done = 60;
 * @return {?proto.treeleaf.anydone.entities.ProcessTime}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getDone = function() {
  return /** @type{?proto.treeleaf.anydone.entities.ProcessTime} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.ProcessTime, 60));
};


/**
 * @param {?proto.treeleaf.anydone.entities.ProcessTime|undefined} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
*/
proto.treeleaf.anydone.entities.Ticket.prototype.setDone = function(value) {
  return jspb.Message.setWrapperField(this, 60, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.clearDone = function() {
  return this.setDone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.hasDone = function() {
  return jspb.Message.getField(this, 60) != null;
};


/**
 * optional pb.ShareLink shareLink = 61;
 * @return {?proto.treeleaf.anydone.entities.pb.ShareLink}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.getSharelink = function() {
  return /** @type{?proto.treeleaf.anydone.entities.pb.ShareLink} */ (
    jspb.Message.getWrapperField(this, domain_share_link_pb.ShareLink, 61));
};


/**
 * @param {?proto.treeleaf.anydone.entities.pb.ShareLink|undefined} value
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
*/
proto.treeleaf.anydone.entities.Ticket.prototype.setSharelink = function(value) {
  return jspb.Message.setWrapperField(this, 61, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.Ticket} returns this
 */
proto.treeleaf.anydone.entities.Ticket.prototype.clearSharelink = function() {
  return this.setSharelink(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Ticket.prototype.hasSharelink = function() {
  return jspb.Message.getField(this, 61) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.TicketStatByStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TicketStatByStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TicketStatByStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketStatByStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    newtickets: jspb.Message.getFieldWithDefault(msg, 1, 0),
    resolvedtickets: jspb.Message.getFieldWithDefault(msg, 2, 0),
    unresolvedtickets: jspb.Message.getFieldWithDefault(msg, 3, 0),
    closedtickets: jspb.Message.getFieldWithDefault(msg, 4, 0),
    reopenedtickets: jspb.Message.getFieldWithDefault(msg, 5, 0),
    totaltickets: jspb.Message.getFieldWithDefault(msg, 6, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 7, 0),
    ticketstatresponsetype: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.TicketStatByStatus}
 */
proto.treeleaf.anydone.entities.TicketStatByStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TicketStatByStatus;
  return proto.treeleaf.anydone.entities.TicketStatByStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TicketStatByStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TicketStatByStatus}
 */
proto.treeleaf.anydone.entities.TicketStatByStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNewtickets(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setResolvedtickets(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUnresolvedtickets(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setClosedtickets(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReopenedtickets(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotaltickets(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 8:
      var value = /** @type {!proto.treeleaf.anydone.entities.TicketStatResponseType} */ (reader.readEnum());
      msg.setTicketstatresponsetype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.TicketStatByStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TicketStatByStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TicketStatByStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketStatByStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewtickets();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getResolvedtickets();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUnresolvedtickets();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getClosedtickets();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getReopenedtickets();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getTotaltickets();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getTicketstatresponsetype();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * optional int32 newTickets = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStatByStatus.prototype.getNewtickets = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStatByStatus} returns this
 */
proto.treeleaf.anydone.entities.TicketStatByStatus.prototype.setNewtickets = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 resolvedTickets = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStatByStatus.prototype.getResolvedtickets = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStatByStatus} returns this
 */
proto.treeleaf.anydone.entities.TicketStatByStatus.prototype.setResolvedtickets = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 unresolvedTickets = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStatByStatus.prototype.getUnresolvedtickets = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStatByStatus} returns this
 */
proto.treeleaf.anydone.entities.TicketStatByStatus.prototype.setUnresolvedtickets = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 closedTickets = 4;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStatByStatus.prototype.getClosedtickets = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStatByStatus} returns this
 */
proto.treeleaf.anydone.entities.TicketStatByStatus.prototype.setClosedtickets = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 reopenedTickets = 5;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStatByStatus.prototype.getReopenedtickets = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStatByStatus} returns this
 */
proto.treeleaf.anydone.entities.TicketStatByStatus.prototype.setReopenedtickets = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 totalTickets = 6;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStatByStatus.prototype.getTotaltickets = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStatByStatus} returns this
 */
proto.treeleaf.anydone.entities.TicketStatByStatus.prototype.setTotaltickets = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 timestamp = 7;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStatByStatus.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStatByStatus} returns this
 */
proto.treeleaf.anydone.entities.TicketStatByStatus.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional TicketStatResponseType ticketStatResponseType = 8;
 * @return {!proto.treeleaf.anydone.entities.TicketStatResponseType}
 */
proto.treeleaf.anydone.entities.TicketStatByStatus.prototype.getTicketstatresponsetype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.TicketStatResponseType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketStatResponseType} value
 * @return {!proto.treeleaf.anydone.entities.TicketStatByStatus} returns this
 */
proto.treeleaf.anydone.entities.TicketStatByStatus.prototype.setTicketstatresponsetype = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.TicketStatByPriority.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TicketStatByPriority.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TicketStatByPriority} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketStatByPriority.toObject = function(includeInstance, msg) {
  var f, obj = {
    highestprioritytickets: jspb.Message.getFieldWithDefault(msg, 1, 0),
    highprioritytickets: jspb.Message.getFieldWithDefault(msg, 2, 0),
    mediumprioritytickets: jspb.Message.getFieldWithDefault(msg, 3, 0),
    lowprioritytickets: jspb.Message.getFieldWithDefault(msg, 4, 0),
    lowestprioritytickets: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.TicketStatByPriority}
 */
proto.treeleaf.anydone.entities.TicketStatByPriority.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TicketStatByPriority;
  return proto.treeleaf.anydone.entities.TicketStatByPriority.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TicketStatByPriority} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TicketStatByPriority}
 */
proto.treeleaf.anydone.entities.TicketStatByPriority.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHighestprioritytickets(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHighprioritytickets(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMediumprioritytickets(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLowprioritytickets(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLowestprioritytickets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.TicketStatByPriority.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TicketStatByPriority.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TicketStatByPriority} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketStatByPriority.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHighestprioritytickets();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getHighprioritytickets();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getMediumprioritytickets();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getLowprioritytickets();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getLowestprioritytickets();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional int32 highestPriorityTickets = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStatByPriority.prototype.getHighestprioritytickets = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStatByPriority} returns this
 */
proto.treeleaf.anydone.entities.TicketStatByPriority.prototype.setHighestprioritytickets = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 highPriorityTickets = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStatByPriority.prototype.getHighprioritytickets = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStatByPriority} returns this
 */
proto.treeleaf.anydone.entities.TicketStatByPriority.prototype.setHighprioritytickets = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 mediumPriorityTickets = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStatByPriority.prototype.getMediumprioritytickets = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStatByPriority} returns this
 */
proto.treeleaf.anydone.entities.TicketStatByPriority.prototype.setMediumprioritytickets = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 lowPriorityTickets = 4;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStatByPriority.prototype.getLowprioritytickets = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStatByPriority} returns this
 */
proto.treeleaf.anydone.entities.TicketStatByPriority.prototype.setLowprioritytickets = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 lowestPriorityTickets = 5;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStatByPriority.prototype.getLowestprioritytickets = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStatByPriority} returns this
 */
proto.treeleaf.anydone.entities.TicketStatByPriority.prototype.setLowestprioritytickets = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.TicketStatResolveTime.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TicketStatResolveTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TicketStatResolveTime} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketStatResolveTime.toObject = function(includeInstance, msg) {
  var f, obj = {
    maximumresolvetime: jspb.Message.getFieldWithDefault(msg, 1, 0),
    averageresolvetime: jspb.Message.getFieldWithDefault(msg, 2, 0),
    minimumresolvetime: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.TicketStatResolveTime}
 */
proto.treeleaf.anydone.entities.TicketStatResolveTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TicketStatResolveTime;
  return proto.treeleaf.anydone.entities.TicketStatResolveTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TicketStatResolveTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TicketStatResolveTime}
 */
proto.treeleaf.anydone.entities.TicketStatResolveTime.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaximumresolvetime(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAverageresolvetime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMinimumresolvetime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.TicketStatResolveTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TicketStatResolveTime.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TicketStatResolveTime} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketStatResolveTime.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaximumresolvetime();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getAverageresolvetime();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getMinimumresolvetime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional int64 maximumResolveTime = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStatResolveTime.prototype.getMaximumresolvetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStatResolveTime} returns this
 */
proto.treeleaf.anydone.entities.TicketStatResolveTime.prototype.setMaximumresolvetime = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 averageResolveTime = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStatResolveTime.prototype.getAverageresolvetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStatResolveTime} returns this
 */
proto.treeleaf.anydone.entities.TicketStatResolveTime.prototype.setAverageresolvetime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 minimumResolveTime = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStatResolveTime.prototype.getMinimumresolvetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStatResolveTime} returns this
 */
proto.treeleaf.anydone.entities.TicketStatResolveTime.prototype.setMinimumresolvetime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.TicketStatBySource.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TicketStatBySource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TicketStatBySource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketStatBySource.toObject = function(includeInstance, msg) {
  var f, obj = {
    manualtickets: jspb.Message.getFieldWithDefault(msg, 1, 0),
    calltickets: jspb.Message.getFieldWithDefault(msg, 2, 0),
    bottickets: jspb.Message.getFieldWithDefault(msg, 3, 0),
    conversationtickets: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.TicketStatBySource}
 */
proto.treeleaf.anydone.entities.TicketStatBySource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TicketStatBySource;
  return proto.treeleaf.anydone.entities.TicketStatBySource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TicketStatBySource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TicketStatBySource}
 */
proto.treeleaf.anydone.entities.TicketStatBySource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setManualtickets(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCalltickets(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBottickets(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setConversationtickets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.TicketStatBySource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TicketStatBySource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TicketStatBySource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketStatBySource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getManualtickets();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCalltickets();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getBottickets();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getConversationtickets();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 manualTickets = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStatBySource.prototype.getManualtickets = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStatBySource} returns this
 */
proto.treeleaf.anydone.entities.TicketStatBySource.prototype.setManualtickets = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 callTickets = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStatBySource.prototype.getCalltickets = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStatBySource} returns this
 */
proto.treeleaf.anydone.entities.TicketStatBySource.prototype.setCalltickets = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 botTickets = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStatBySource.prototype.getBottickets = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStatBySource} returns this
 */
proto.treeleaf.anydone.entities.TicketStatBySource.prototype.setBottickets = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 conversationTickets = 4;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStatBySource.prototype.getConversationtickets = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStatBySource} returns this
 */
proto.treeleaf.anydone.entities.TicketStatBySource.prototype.setConversationtickets = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.GetSharableLinkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.GetSharableLinkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.GetSharableLinkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.GetSharableLinkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    emailorphone: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.GetSharableLinkRequest}
 */
proto.treeleaf.anydone.entities.GetSharableLinkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.GetSharableLinkRequest;
  return proto.treeleaf.anydone.entities.GetSharableLinkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.GetSharableLinkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.GetSharableLinkRequest}
 */
proto.treeleaf.anydone.entities.GetSharableLinkRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicketid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmailorphone(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.GetSharableLinkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.GetSharableLinkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.GetSharableLinkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.GetSharableLinkRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmailorphone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string ticketId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.GetSharableLinkRequest.prototype.getTicketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.GetSharableLinkRequest} returns this
 */
proto.treeleaf.anydone.entities.GetSharableLinkRequest.prototype.setTicketid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string emailOrPhone = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.GetSharableLinkRequest.prototype.getEmailorphone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.GetSharableLinkRequest} returns this
 */
proto.treeleaf.anydone.entities.GetSharableLinkRequest.prototype.setEmailorphone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.TicketEventPayload.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TicketEventPayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TicketEventPayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketEventPayload.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    state: jspb.Message.getFieldWithDefault(msg, 2, 0),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    refid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    ticketindex: jspb.Message.getFieldWithDefault(msg, 5, 0),
    serviceid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    senderaccountid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    ticket: (f = msg.getTicket()) && proto.treeleaf.anydone.entities.Ticket.toObject(includeInstance, f),
    project: (f = msg.getProject()) && project_pb.Project.toObject(includeInstance, f),
    subproject: (f = msg.getSubproject()) && service_pb.SubProject.toObject(includeInstance, f),
    board: (f = msg.getBoard()) && board_pb.Board.toObject(includeInstance, f),
    updateMap: (f = msg.getUpdateMap()) ? f.toObject(includeInstance, undefined) : [],
    sprint: (f = msg.getSprint()) && board_pb.Sprint.toObject(includeInstance, f),
    spaccountid: jspb.Message.getFieldWithDefault(msg, 14, ""),
    servicecontext: jspb.Message.getFieldWithDefault(msg, 15, 0),
    msgid: jspb.Message.getFieldWithDefault(msg, 16, ""),
    displayname: jspb.Message.getFieldWithDefault(msg, 17, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.TicketEventPayload}
 */
proto.treeleaf.anydone.entities.TicketEventPayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TicketEventPayload;
  return proto.treeleaf.anydone.entities.TicketEventPayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TicketEventPayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TicketEventPayload}
 */
proto.treeleaf.anydone.entities.TicketEventPayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTicketid(value);
      break;
    case 2:
      var value = /** @type {!proto.treeleaf.anydone.entities.TicketState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTicketindex(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderaccountid(value);
      break;
    case 8:
      var value = new proto.treeleaf.anydone.entities.Ticket;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Ticket.deserializeBinaryFromReader);
      msg.setTicket(value);
      break;
    case 9:
      var value = new project_pb.Project;
      reader.readMessage(value,project_pb.Project.deserializeBinaryFromReader);
      msg.setProject(value);
      break;
    case 10:
      var value = new service_pb.SubProject;
      reader.readMessage(value,service_pb.SubProject.deserializeBinaryFromReader);
      msg.setSubproject(value);
      break;
    case 11:
      var value = new board_pb.Board;
      reader.readMessage(value,board_pb.Board.deserializeBinaryFromReader);
      msg.setBoard(value);
      break;
    case 12:
      var value = msg.getUpdateMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 13:
      var value = new board_pb.Sprint;
      reader.readMessage(value,board_pb.Sprint.deserializeBinaryFromReader);
      msg.setSprint(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpaccountid(value);
      break;
    case 15:
      var value = /** @type {!proto.treeleaf.anydone.entities.ServiceContext} */ (reader.readEnum());
      msg.setServicecontext(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgid(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TicketEventPayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TicketEventPayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketEventPayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTicketindex();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getServiceid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSenderaccountid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTicket();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.treeleaf.anydone.entities.Ticket.serializeBinaryToWriter
    );
  }
  f = message.getProject();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      project_pb.Project.serializeBinaryToWriter
    );
  }
  f = message.getSubproject();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      service_pb.SubProject.serializeBinaryToWriter
    );
  }
  f = message.getBoard();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      board_pb.Board.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(12, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getSprint();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      board_pb.Sprint.serializeBinaryToWriter
    );
  }
  f = message.getSpaccountid();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getServicecontext();
  if (f !== 0.0) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = message.getMsgid();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getDisplayname();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
};


/**
 * optional int64 ticketId = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.getTicketid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketEventPayload} returns this
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.setTicketid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional TicketState state = 2;
 * @return {!proto.treeleaf.anydone.entities.TicketState}
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.getState = function() {
  return /** @type {!proto.treeleaf.anydone.entities.TicketState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketState} value
 * @return {!proto.treeleaf.anydone.entities.TicketEventPayload} returns this
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated string recipients = 3;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.TicketEventPayload} returns this
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TicketEventPayload} returns this
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.TicketEventPayload} returns this
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional string refId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketEventPayload} returns this
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 ticketIndex = 5;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.getTicketindex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketEventPayload} returns this
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.setTicketindex = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string serviceId = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.getServiceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketEventPayload} returns this
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.setServiceid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string senderAccountId = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.getSenderaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketEventPayload} returns this
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.setSenderaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional Ticket ticket = 8;
 * @return {?proto.treeleaf.anydone.entities.Ticket}
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.getTicket = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Ticket} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.Ticket, 8));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Ticket|undefined} value
 * @return {!proto.treeleaf.anydone.entities.TicketEventPayload} returns this
*/
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.setTicket = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.TicketEventPayload} returns this
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.clearTicket = function() {
  return this.setTicket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.hasTicket = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Project project = 9;
 * @return {?proto.treeleaf.anydone.entities.Project}
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.getProject = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Project} */ (
    jspb.Message.getWrapperField(this, project_pb.Project, 9));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Project|undefined} value
 * @return {!proto.treeleaf.anydone.entities.TicketEventPayload} returns this
*/
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.setProject = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.TicketEventPayload} returns this
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.clearProject = function() {
  return this.setProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.hasProject = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional SubProject subproject = 10;
 * @return {?proto.treeleaf.anydone.entities.SubProject}
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.getSubproject = function() {
  return /** @type{?proto.treeleaf.anydone.entities.SubProject} */ (
    jspb.Message.getWrapperField(this, service_pb.SubProject, 10));
};


/**
 * @param {?proto.treeleaf.anydone.entities.SubProject|undefined} value
 * @return {!proto.treeleaf.anydone.entities.TicketEventPayload} returns this
*/
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.setSubproject = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.TicketEventPayload} returns this
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.clearSubproject = function() {
  return this.setSubproject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.hasSubproject = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Board board = 11;
 * @return {?proto.treeleaf.anydone.entities.Board}
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.getBoard = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Board} */ (
    jspb.Message.getWrapperField(this, board_pb.Board, 11));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Board|undefined} value
 * @return {!proto.treeleaf.anydone.entities.TicketEventPayload} returns this
*/
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.setBoard = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.TicketEventPayload} returns this
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.clearBoard = function() {
  return this.setBoard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.hasBoard = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * map<string, string> update = 12;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.getUpdateMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 12, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.treeleaf.anydone.entities.TicketEventPayload} returns this
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.clearUpdateMap = function() {
  this.getUpdateMap().clear();
  return this;};


/**
 * optional Sprint sprint = 13;
 * @return {?proto.treeleaf.anydone.entities.Sprint}
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.getSprint = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Sprint} */ (
    jspb.Message.getWrapperField(this, board_pb.Sprint, 13));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Sprint|undefined} value
 * @return {!proto.treeleaf.anydone.entities.TicketEventPayload} returns this
*/
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.setSprint = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.TicketEventPayload} returns this
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.clearSprint = function() {
  return this.setSprint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.hasSprint = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string spAccountId = 14;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.getSpaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketEventPayload} returns this
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.setSpaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional ServiceContext serviceContext = 15;
 * @return {!proto.treeleaf.anydone.entities.ServiceContext}
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.getServicecontext = function() {
  return /** @type {!proto.treeleaf.anydone.entities.ServiceContext} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.ServiceContext} value
 * @return {!proto.treeleaf.anydone.entities.TicketEventPayload} returns this
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.setServicecontext = function(value) {
  return jspb.Message.setProto3EnumField(this, 15, value);
};


/**
 * optional string msgId = 16;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.getMsgid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketEventPayload} returns this
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.setMsgid = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string displayName = 17;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.getDisplayname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketEventPayload} returns this
 */
proto.treeleaf.anydone.entities.TicketEventPayload.prototype.setDisplayname = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.TicketSuggestion.repeatedFields_ = [10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TicketSuggestion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TicketSuggestion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketSuggestion.toObject = function(includeInstance, msg) {
  var f, obj = {
    suggestionid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    conversationid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    serviceid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    status: jspb.Message.getFieldWithDefault(msg, 4, 0),
    source: jspb.Message.getFieldWithDefault(msg, 5, 0),
    customer: (f = msg.getCustomer()) && user_pb.Customer.toObject(includeInstance, f),
    msg: (f = msg.getMsg()) && proto.treeleaf.anydone.entities.TicketSuggestion.Message.toObject(includeInstance, f),
    createdat: jspb.Message.getFieldWithDefault(msg, 8, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 9, 0),
    msgsList: jspb.Message.toObjectList(msg.getMsgsList(),
    proto.treeleaf.anydone.entities.TicketSuggestion.Message.toObject, includeInstance),
    spaccountid: jspb.Message.getFieldWithDefault(msg, 11, ""),
    boardid: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.TicketSuggestion}
 */
proto.treeleaf.anydone.entities.TicketSuggestion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TicketSuggestion;
  return proto.treeleaf.anydone.entities.TicketSuggestion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TicketSuggestion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TicketSuggestion}
 */
proto.treeleaf.anydone.entities.TicketSuggestion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSuggestionid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceid(value);
      break;
    case 4:
      var value = /** @type {!proto.treeleaf.anydone.entities.TicketSuggestion.TicketSuggestionStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 5:
      var value = /** @type {!proto.treeleaf.anydone.entities.ThirdPartySource} */ (reader.readEnum());
      msg.setSource(value);
      break;
    case 6:
      var value = new user_pb.Customer;
      reader.readMessage(value,user_pb.Customer.deserializeBinaryFromReader);
      msg.setCustomer(value);
      break;
    case 7:
      var value = new proto.treeleaf.anydone.entities.TicketSuggestion.Message;
      reader.readMessage(value,proto.treeleaf.anydone.entities.TicketSuggestion.Message.deserializeBinaryFromReader);
      msg.setMsg(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedat(value);
      break;
    case 10:
      var value = new proto.treeleaf.anydone.entities.TicketSuggestion.Message;
      reader.readMessage(value,proto.treeleaf.anydone.entities.TicketSuggestion.Message.deserializeBinaryFromReader);
      msg.addMsgs(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpaccountid(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setBoardid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TicketSuggestion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TicketSuggestion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketSuggestion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuggestionid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConversationid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getServiceid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getSource();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getCustomer();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      user_pb.Customer.serializeBinaryToWriter
    );
  }
  f = message.getMsg();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.treeleaf.anydone.entities.TicketSuggestion.Message.serializeBinaryToWriter
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getMsgsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.treeleaf.anydone.entities.TicketSuggestion.Message.serializeBinaryToWriter
    );
  }
  f = message.getSpaccountid();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getBoardid();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.TicketSuggestion.TicketSuggestionStatus = {
  UNKNOWN_STATUS: 0,
  PENDING: 1,
  APPROVED: 2,
  REJECTED: 3
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.TicketSuggestion.Message.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TicketSuggestion.Message.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TicketSuggestion.Message} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketSuggestion.Message.toObject = function(includeInstance, msg) {
  var f, obj = {
    msgid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    text: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.TicketSuggestion.Message}
 */
proto.treeleaf.anydone.entities.TicketSuggestion.Message.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TicketSuggestion.Message;
  return proto.treeleaf.anydone.entities.TicketSuggestion.Message.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TicketSuggestion.Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TicketSuggestion.Message}
 */
proto.treeleaf.anydone.entities.TicketSuggestion.Message.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.TicketSuggestion.Message.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TicketSuggestion.Message.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TicketSuggestion.Message} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketSuggestion.Message.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsgid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string msgId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketSuggestion.Message.prototype.getMsgid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketSuggestion.Message} returns this
 */
proto.treeleaf.anydone.entities.TicketSuggestion.Message.prototype.setMsgid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketSuggestion.Message.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketSuggestion.Message} returns this
 */
proto.treeleaf.anydone.entities.TicketSuggestion.Message.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketSuggestion.Message.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketSuggestion.Message} returns this
 */
proto.treeleaf.anydone.entities.TicketSuggestion.Message.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string suggestionId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.getSuggestionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketSuggestion} returns this
 */
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.setSuggestionid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string conversationId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketSuggestion} returns this
 */
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string serviceId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.getServiceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketSuggestion} returns this
 */
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.setServiceid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional TicketSuggestionStatus status = 4;
 * @return {!proto.treeleaf.anydone.entities.TicketSuggestion.TicketSuggestionStatus}
 */
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.getStatus = function() {
  return /** @type {!proto.treeleaf.anydone.entities.TicketSuggestion.TicketSuggestionStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketSuggestion.TicketSuggestionStatus} value
 * @return {!proto.treeleaf.anydone.entities.TicketSuggestion} returns this
 */
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional ThirdPartySource source = 5;
 * @return {!proto.treeleaf.anydone.entities.ThirdPartySource}
 */
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.getSource = function() {
  return /** @type {!proto.treeleaf.anydone.entities.ThirdPartySource} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.ThirdPartySource} value
 * @return {!proto.treeleaf.anydone.entities.TicketSuggestion} returns this
 */
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.setSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional Customer customer = 6;
 * @return {?proto.treeleaf.anydone.entities.Customer}
 */
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.getCustomer = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Customer} */ (
    jspb.Message.getWrapperField(this, user_pb.Customer, 6));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Customer|undefined} value
 * @return {!proto.treeleaf.anydone.entities.TicketSuggestion} returns this
*/
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.setCustomer = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.TicketSuggestion} returns this
 */
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.clearCustomer = function() {
  return this.setCustomer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.hasCustomer = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Message msg = 7;
 * @return {?proto.treeleaf.anydone.entities.TicketSuggestion.Message}
 */
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.getMsg = function() {
  return /** @type{?proto.treeleaf.anydone.entities.TicketSuggestion.Message} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.TicketSuggestion.Message, 7));
};


/**
 * @param {?proto.treeleaf.anydone.entities.TicketSuggestion.Message|undefined} value
 * @return {!proto.treeleaf.anydone.entities.TicketSuggestion} returns this
*/
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.setMsg = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.TicketSuggestion} returns this
 */
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.clearMsg = function() {
  return this.setMsg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.hasMsg = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int64 createdAt = 8;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketSuggestion} returns this
 */
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 updatedAt = 9;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketSuggestion} returns this
 */
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * repeated Message msgs = 10;
 * @return {!Array<!proto.treeleaf.anydone.entities.TicketSuggestion.Message>}
 */
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.getMsgsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.TicketSuggestion.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.TicketSuggestion.Message, 10));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.TicketSuggestion.Message>} value
 * @return {!proto.treeleaf.anydone.entities.TicketSuggestion} returns this
*/
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.setMsgsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketSuggestion.Message=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TicketSuggestion.Message}
 */
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.addMsgs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.treeleaf.anydone.entities.TicketSuggestion.Message, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.TicketSuggestion} returns this
 */
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.clearMsgsList = function() {
  return this.setMsgsList([]);
};


/**
 * optional string spAccountId = 11;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.getSpaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketSuggestion} returns this
 */
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.setSpaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string boardId = 12;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.getBoardid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketSuggestion} returns this
 */
proto.treeleaf.anydone.entities.TicketSuggestion.prototype.setBoardid = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.TicketSuggestionReq.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.TicketSuggestionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TicketSuggestionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TicketSuggestionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketSuggestionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    suggestionsList: jspb.Message.toObjectList(msg.getSuggestionsList(),
    proto.treeleaf.anydone.entities.TicketSuggestion.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.TicketSuggestionReq}
 */
proto.treeleaf.anydone.entities.TicketSuggestionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TicketSuggestionReq;
  return proto.treeleaf.anydone.entities.TicketSuggestionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TicketSuggestionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TicketSuggestionReq}
 */
proto.treeleaf.anydone.entities.TicketSuggestionReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.TicketSuggestion;
      reader.readMessage(value,proto.treeleaf.anydone.entities.TicketSuggestion.deserializeBinaryFromReader);
      msg.addSuggestions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.TicketSuggestionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TicketSuggestionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TicketSuggestionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketSuggestionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuggestionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.TicketSuggestion.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TicketSuggestion suggestions = 1;
 * @return {!Array<!proto.treeleaf.anydone.entities.TicketSuggestion>}
 */
proto.treeleaf.anydone.entities.TicketSuggestionReq.prototype.getSuggestionsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.TicketSuggestion>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.TicketSuggestion, 1));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.TicketSuggestion>} value
 * @return {!proto.treeleaf.anydone.entities.TicketSuggestionReq} returns this
*/
proto.treeleaf.anydone.entities.TicketSuggestionReq.prototype.setSuggestionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketSuggestion=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TicketSuggestion}
 */
proto.treeleaf.anydone.entities.TicketSuggestionReq.prototype.addSuggestions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.treeleaf.anydone.entities.TicketSuggestion, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.TicketSuggestionReq} returns this
 */
proto.treeleaf.anydone.entities.TicketSuggestionReq.prototype.clearSuggestionsList = function() {
  return this.setSuggestionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.TicketFilter.repeatedFields_ = [10,17,18,20,22,23,27,28,29,30,31];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TicketFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TicketFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dataquery: (f = msg.getDataquery()) && treeleaf_pb.DataQuery.toObject(includeInstance, f),
    query: jspb.Message.getFieldWithDefault(msg, 3, ""),
    ticketpriority: jspb.Message.getFieldWithDefault(msg, 4, 0),
    ticketstate: jspb.Message.getFieldWithDefault(msg, 5, 0),
    conversationid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    ticketid: jspb.Message.getFieldWithDefault(msg, 7, 0),
    customerid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    employeeid: jspb.Message.getFieldWithDefault(msg, 9, ""),
    teamsList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f,
    typeid: jspb.Message.getFieldWithDefault(msg, 11, ""),
    employeefilterenum: jspb.Message.getFieldWithDefault(msg, 12, 0),
    requesterid: jspb.Message.getFieldWithDefault(msg, 13, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 14, ""),
    product: jspb.Message.getFieldWithDefault(msg, 15, 0),
    status: jspb.Message.getFieldWithDefault(msg, 16, 0),
    tickettypesList: (f = jspb.Message.getRepeatedField(msg, 17)) == null ? undefined : f,
    statusidsList: (f = jspb.Message.getRepeatedField(msg, 18)) == null ? undefined : f,
    employeeidsList: (f = jspb.Message.getRepeatedField(msg, 20)) == null ? undefined : f,
    ticketcreator: jspb.Message.getFieldWithDefault(msg, 21, 0),
    creatoridsList: (f = jspb.Message.getRepeatedField(msg, 22)) == null ? undefined : f,
    prioritiesList: (f = jspb.Message.getRepeatedField(msg, 23)) == null ? undefined : f,
    columnid: jspb.Message.getFieldWithDefault(msg, 24, ""),
    boardid: jspb.Message.getFieldWithDefault(msg, 25, ""),
    spaccountid: jspb.Message.getFieldWithDefault(msg, 26, ""),
    reporteridsList: (f = jspb.Message.getRepeatedField(msg, 27)) == null ? undefined : f,
    sprintidsList: (f = jspb.Message.getRepeatedField(msg, 28)) == null ? undefined : f,
    subprojectidsList: (f = jspb.Message.getRepeatedField(msg, 29)) == null ? undefined : f,
    boardidsList: (f = jspb.Message.getRepeatedField(msg, 30)) == null ? undefined : f,
    projectidsList: (f = jspb.Message.getRepeatedField(msg, 31)) == null ? undefined : f,
    fetchtodayticket: jspb.Message.getBooleanFieldWithDefault(msg, 55, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.TicketFilter}
 */
proto.treeleaf.anydone.entities.TicketFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TicketFilter;
  return proto.treeleaf.anydone.entities.TicketFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TicketFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TicketFilter}
 */
proto.treeleaf.anydone.entities.TicketFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceid(value);
      break;
    case 2:
      var value = new treeleaf_pb.DataQuery;
      reader.readMessage(value,treeleaf_pb.DataQuery.deserializeBinaryFromReader);
      msg.setDataquery(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    case 4:
      var value = /** @type {!proto.treeleaf.anydone.entities.TicketPriority} */ (reader.readEnum());
      msg.setTicketpriority(value);
      break;
    case 5:
      var value = /** @type {!proto.treeleaf.anydone.entities.TicketState} */ (reader.readEnum());
      msg.setTicketstate(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationid(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTicketid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmployeeid(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addTeams(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypeid(value);
      break;
    case 12:
      var value = /** @type {!proto.treeleaf.anydone.entities.TicketFilter.EmployeeFilterEnum} */ (reader.readEnum());
      msg.setEmployeefilterenum(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequesterid(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 15:
      var value = /** @type {!proto.treeleaf.anydone.entities.AnydoneProductEnum} */ (reader.readEnum());
      msg.setProduct(value);
      break;
    case 16:
      var value = /** @type {!proto.treeleaf.anydone.entities.StatusCategory} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.addTickettypes(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.addStatusids(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.addEmployeeids(value);
      break;
    case 21:
      var value = /** @type {!proto.treeleaf.anydone.entities.TicketFilter.TicketCreator} */ (reader.readEnum());
      msg.setTicketcreator(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.addCreatorids(value);
      break;
    case 23:
      var values = /** @type {!Array<!proto.treeleaf.anydone.entities.TicketPriority>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPriorities(values[i]);
      }
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnid(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setBoardid(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpaccountid(value);
      break;
    case 27:
      var value = /** @type {string} */ (reader.readString());
      msg.addReporterids(value);
      break;
    case 28:
      var value = /** @type {string} */ (reader.readString());
      msg.addSprintids(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readString());
      msg.addSubprojectids(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readString());
      msg.addBoardids(value);
      break;
    case 31:
      var value = /** @type {string} */ (reader.readString());
      msg.addProjectids(value);
      break;
    case 55:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFetchtodayticket(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TicketFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TicketFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDataquery();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      treeleaf_pb.DataQuery.serializeBinaryToWriter
    );
  }
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTicketpriority();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getTicketstate();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getConversationid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTicketid();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getCustomerid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getEmployeeid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTeamsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
  f = message.getTypeid();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getEmployeefilterenum();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getRequesterid();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getProduct();
  if (f !== 0.0) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      16,
      f
    );
  }
  f = message.getTickettypesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      17,
      f
    );
  }
  f = message.getStatusidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      18,
      f
    );
  }
  f = message.getEmployeeidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      20,
      f
    );
  }
  f = message.getTicketcreator();
  if (f !== 0.0) {
    writer.writeEnum(
      21,
      f
    );
  }
  f = message.getCreatoridsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      22,
      f
    );
  }
  f = message.getPrioritiesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      23,
      f
    );
  }
  f = message.getColumnid();
  if (f.length > 0) {
    writer.writeString(
      24,
      f
    );
  }
  f = message.getBoardid();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getSpaccountid();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
  f = message.getReporteridsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      27,
      f
    );
  }
  f = message.getSprintidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      28,
      f
    );
  }
  f = message.getSubprojectidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      29,
      f
    );
  }
  f = message.getBoardidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      30,
      f
    );
  }
  f = message.getProjectidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      31,
      f
    );
  }
  f = message.getFetchtodayticket();
  if (f) {
    writer.writeBool(
      55,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.TicketFilter.EmployeeFilterEnum = {
  SPECIFIC: 0,
  ALL: 1,
  UNASSIGNED: 2,
  ASSIGNED_TO_ME: 3
};

/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.TicketFilter.TicketCreator = {
  NONE: 0,
  ALL_CREATOR: 1,
  ME_CREATOR: 2
};

/**
 * optional string serviceId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getServiceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.setServiceid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional treeleaf.protos.DataQuery dataQuery = 2;
 * @return {?proto.treeleaf.protos.DataQuery}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getDataquery = function() {
  return /** @type{?proto.treeleaf.protos.DataQuery} */ (
    jspb.Message.getWrapperField(this, treeleaf_pb.DataQuery, 2));
};


/**
 * @param {?proto.treeleaf.protos.DataQuery|undefined} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
*/
proto.treeleaf.anydone.entities.TicketFilter.prototype.setDataquery = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.clearDataquery = function() {
  return this.setDataquery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.hasDataquery = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string query = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.setQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional TicketPriority TicketPriority = 4;
 * @return {!proto.treeleaf.anydone.entities.TicketPriority}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getTicketpriority = function() {
  return /** @type {!proto.treeleaf.anydone.entities.TicketPriority} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketPriority} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.setTicketpriority = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional TicketState ticketState = 5;
 * @return {!proto.treeleaf.anydone.entities.TicketState}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getTicketstate = function() {
  return /** @type {!proto.treeleaf.anydone.entities.TicketState} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketState} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.setTicketstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional string conversationId = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 ticketId = 7;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getTicketid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.setTicketid = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string customerId = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getCustomerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.setCustomerid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string employeeId = 9;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getEmployeeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.setEmployeeid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * repeated string teams = 10;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getTeamsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.setTeamsList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.addTeams = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.clearTeamsList = function() {
  return this.setTeamsList([]);
};


/**
 * optional string typeId = 11;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getTypeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.setTypeid = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional EmployeeFilterEnum employeeFilterEnum = 12;
 * @return {!proto.treeleaf.anydone.entities.TicketFilter.EmployeeFilterEnum}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getEmployeefilterenum = function() {
  return /** @type {!proto.treeleaf.anydone.entities.TicketFilter.EmployeeFilterEnum} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketFilter.EmployeeFilterEnum} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.setEmployeefilterenum = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional string requesterId = 13;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getRequesterid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.setRequesterid = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string refId = 14;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional AnydoneProductEnum product = 15;
 * @return {!proto.treeleaf.anydone.entities.AnydoneProductEnum}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getProduct = function() {
  return /** @type {!proto.treeleaf.anydone.entities.AnydoneProductEnum} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.AnydoneProductEnum} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.setProduct = function(value) {
  return jspb.Message.setProto3EnumField(this, 15, value);
};


/**
 * optional StatusCategory status = 16;
 * @return {!proto.treeleaf.anydone.entities.StatusCategory}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getStatus = function() {
  return /** @type {!proto.treeleaf.anydone.entities.StatusCategory} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.StatusCategory} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 16, value);
};


/**
 * repeated string ticketTypes = 17;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getTickettypesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 17));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.setTickettypesList = function(value) {
  return jspb.Message.setField(this, 17, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.addTickettypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 17, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.clearTickettypesList = function() {
  return this.setTickettypesList([]);
};


/**
 * repeated string statusIds = 18;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getStatusidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 18));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.setStatusidsList = function(value) {
  return jspb.Message.setField(this, 18, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.addStatusids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 18, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.clearStatusidsList = function() {
  return this.setStatusidsList([]);
};


/**
 * repeated string employeeIds = 20;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getEmployeeidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 20));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.setEmployeeidsList = function(value) {
  return jspb.Message.setField(this, 20, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.addEmployeeids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 20, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.clearEmployeeidsList = function() {
  return this.setEmployeeidsList([]);
};


/**
 * optional TicketCreator ticketCreator = 21;
 * @return {!proto.treeleaf.anydone.entities.TicketFilter.TicketCreator}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getTicketcreator = function() {
  return /** @type {!proto.treeleaf.anydone.entities.TicketFilter.TicketCreator} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketFilter.TicketCreator} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.setTicketcreator = function(value) {
  return jspb.Message.setProto3EnumField(this, 21, value);
};


/**
 * repeated string creatorIds = 22;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getCreatoridsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 22));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.setCreatoridsList = function(value) {
  return jspb.Message.setField(this, 22, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.addCreatorids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 22, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.clearCreatoridsList = function() {
  return this.setCreatoridsList([]);
};


/**
 * repeated TicketPriority priorities = 23;
 * @return {!Array<!proto.treeleaf.anydone.entities.TicketPriority>}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getPrioritiesList = function() {
  return /** @type {!Array<!proto.treeleaf.anydone.entities.TicketPriority>} */ (jspb.Message.getRepeatedField(this, 23));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.TicketPriority>} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.setPrioritiesList = function(value) {
  return jspb.Message.setField(this, 23, value || []);
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketPriority} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.addPriorities = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 23, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.clearPrioritiesList = function() {
  return this.setPrioritiesList([]);
};


/**
 * optional string columnId = 24;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getColumnid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.setColumnid = function(value) {
  return jspb.Message.setProto3StringField(this, 24, value);
};


/**
 * optional string boardId = 25;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getBoardid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.setBoardid = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * optional string spAccountId = 26;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getSpaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.setSpaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 26, value);
};


/**
 * repeated string reporterIds = 27;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getReporteridsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 27));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.setReporteridsList = function(value) {
  return jspb.Message.setField(this, 27, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.addReporterids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 27, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.clearReporteridsList = function() {
  return this.setReporteridsList([]);
};


/**
 * repeated string sprintIds = 28;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getSprintidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 28));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.setSprintidsList = function(value) {
  return jspb.Message.setField(this, 28, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.addSprintids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 28, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.clearSprintidsList = function() {
  return this.setSprintidsList([]);
};


/**
 * repeated string subprojectIds = 29;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getSubprojectidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 29));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.setSubprojectidsList = function(value) {
  return jspb.Message.setField(this, 29, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.addSubprojectids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 29, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.clearSubprojectidsList = function() {
  return this.setSubprojectidsList([]);
};


/**
 * repeated string boardIds = 30;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getBoardidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 30));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.setBoardidsList = function(value) {
  return jspb.Message.setField(this, 30, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.addBoardids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 30, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.clearBoardidsList = function() {
  return this.setBoardidsList([]);
};


/**
 * repeated string projectIds = 31;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getProjectidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 31));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.setProjectidsList = function(value) {
  return jspb.Message.setField(this, 31, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.addProjectids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 31, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.clearProjectidsList = function() {
  return this.setProjectidsList([]);
};


/**
 * optional bool fetchTodayTicket = 55;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.getFetchtodayticket = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 55, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.TicketFilter} returns this
 */
proto.treeleaf.anydone.entities.TicketFilter.prototype.setFetchtodayticket = function(value) {
  return jspb.Message.setProto3BooleanField(this, 55, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    team: (f = msg.getTeam()) && proto.treeleaf.anydone.entities.Team.toObject(includeInstance, f),
    label: (f = msg.getLabel()) && proto.treeleaf.anydone.entities.Label.toObject(includeInstance, f),
    employee: (f = msg.getEmployee()) && user_pb.EmployeeProfile.toObject(includeInstance, f),
    estimatedtime: jspb.Message.getFieldWithDefault(msg, 4, ""),
    priority: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes}
 */
proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes;
  return proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes}
 */
proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.Team;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Team.deserializeBinaryFromReader);
      msg.setTeam(value);
      break;
    case 2:
      var value = new proto.treeleaf.anydone.entities.Label;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Label.deserializeBinaryFromReader);
      msg.setLabel(value);
      break;
    case 3:
      var value = new user_pb.EmployeeProfile;
      reader.readMessage(value,user_pb.EmployeeProfile.deserializeBinaryFromReader);
      msg.setEmployee(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEstimatedtime(value);
      break;
    case 5:
      var value = /** @type {!proto.treeleaf.anydone.entities.TicketPriority} */ (reader.readEnum());
      msg.setPriority(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeam();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.Team.serializeBinaryToWriter
    );
  }
  f = message.getLabel();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.treeleaf.anydone.entities.Label.serializeBinaryToWriter
    );
  }
  f = message.getEmployee();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      user_pb.EmployeeProfile.serializeBinaryToWriter
    );
  }
  f = message.getEstimatedtime();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional Team team = 1;
 * @return {?proto.treeleaf.anydone.entities.Team}
 */
proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes.prototype.getTeam = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Team} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.Team, 1));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Team|undefined} value
 * @return {!proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes} returns this
*/
proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes.prototype.setTeam = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes} returns this
 */
proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes.prototype.clearTeam = function() {
  return this.setTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes.prototype.hasTeam = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Label label = 2;
 * @return {?proto.treeleaf.anydone.entities.Label}
 */
proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes.prototype.getLabel = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Label} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.Label, 2));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Label|undefined} value
 * @return {!proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes} returns this
*/
proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes.prototype.setLabel = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes} returns this
 */
proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes.prototype.clearLabel = function() {
  return this.setLabel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes.prototype.hasLabel = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional EmployeeProfile employee = 3;
 * @return {?proto.treeleaf.anydone.entities.EmployeeProfile}
 */
proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes.prototype.getEmployee = function() {
  return /** @type{?proto.treeleaf.anydone.entities.EmployeeProfile} */ (
    jspb.Message.getWrapperField(this, user_pb.EmployeeProfile, 3));
};


/**
 * @param {?proto.treeleaf.anydone.entities.EmployeeProfile|undefined} value
 * @return {!proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes} returns this
*/
proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes.prototype.setEmployee = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes} returns this
 */
proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes.prototype.clearEmployee = function() {
  return this.setEmployee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes.prototype.hasEmployee = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string estimatedTime = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes.prototype.getEstimatedtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes} returns this
 */
proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes.prototype.setEstimatedtime = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional TicketPriority priority = 5;
 * @return {!proto.treeleaf.anydone.entities.TicketPriority}
 */
proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes.prototype.getPriority = function() {
  return /** @type {!proto.treeleaf.anydone.entities.TicketPriority} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketPriority} value
 * @return {!proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes} returns this
 */
proto.treeleaf.anydone.entities.TicketAutofillSuggestionRes.prototype.setPriority = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.TicketCommentedReq.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TicketCommentedReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TicketCommentedReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketCommentedReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    senderaccountid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    comment: jspb.Message.getFieldWithDefault(msg, 3, ""),
    commentedat: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.TicketCommentedReq}
 */
proto.treeleaf.anydone.entities.TicketCommentedReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TicketCommentedReq;
  return proto.treeleaf.anydone.entities.TicketCommentedReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TicketCommentedReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TicketCommentedReq}
 */
proto.treeleaf.anydone.entities.TicketCommentedReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicketid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderaccountid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCommentedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.TicketCommentedReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TicketCommentedReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TicketCommentedReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketCommentedReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSenderaccountid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCommentedat();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string ticketId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketCommentedReq.prototype.getTicketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketCommentedReq} returns this
 */
proto.treeleaf.anydone.entities.TicketCommentedReq.prototype.setTicketid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string senderAccountId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketCommentedReq.prototype.getSenderaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketCommentedReq} returns this
 */
proto.treeleaf.anydone.entities.TicketCommentedReq.prototype.setSenderaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string comment = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketCommentedReq.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketCommentedReq} returns this
 */
proto.treeleaf.anydone.entities.TicketCommentedReq.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 commentedAt = 4;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketCommentedReq.prototype.getCommentedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketCommentedReq} returns this
 */
proto.treeleaf.anydone.entities.TicketCommentedReq.prototype.setCommentedat = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.TicketAttachment.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TicketAttachment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TicketAttachment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketAttachment.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    title: jspb.Message.getFieldWithDefault(msg, 3, ""),
    url: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 5, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.TicketAttachment}
 */
proto.treeleaf.anydone.entities.TicketAttachment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TicketAttachment;
  return proto.treeleaf.anydone.entities.TicketAttachment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TicketAttachment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TicketAttachment}
 */
proto.treeleaf.anydone.entities.TicketAttachment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.treeleaf.anydone.entities.TicketAttachment.TicketAttachmentType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.TicketAttachment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TicketAttachment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TicketAttachment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketAttachment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.TicketAttachment.TicketAttachmentType = {
  UNKNOWN_TYPE: 0,
  IMAGE_TYPE: 1,
  DOC_TYPE: 2
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketAttachment.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketAttachment} returns this
 */
proto.treeleaf.anydone.entities.TicketAttachment.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TicketAttachmentType type = 2;
 * @return {!proto.treeleaf.anydone.entities.TicketAttachment.TicketAttachmentType}
 */
proto.treeleaf.anydone.entities.TicketAttachment.prototype.getType = function() {
  return /** @type {!proto.treeleaf.anydone.entities.TicketAttachment.TicketAttachmentType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketAttachment.TicketAttachmentType} value
 * @return {!proto.treeleaf.anydone.entities.TicketAttachment} returns this
 */
proto.treeleaf.anydone.entities.TicketAttachment.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketAttachment.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketAttachment} returns this
 */
proto.treeleaf.anydone.entities.TicketAttachment.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string url = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketAttachment.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketAttachment} returns this
 */
proto.treeleaf.anydone.entities.TicketAttachment.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 createdAt = 5;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketAttachment.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketAttachment} returns this
 */
proto.treeleaf.anydone.entities.TicketAttachment.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 updatedAt = 7;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketAttachment.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketAttachment} returns this
 */
proto.treeleaf.anydone.entities.TicketAttachment.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.TicketAttachmentRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.TicketAttachmentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TicketAttachmentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TicketAttachmentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketAttachmentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ticketattachmentsList: jspb.Message.toObjectList(msg.getTicketattachmentsList(),
    proto.treeleaf.anydone.entities.TicketAttachment.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.TicketAttachmentRequest}
 */
proto.treeleaf.anydone.entities.TicketAttachmentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TicketAttachmentRequest;
  return proto.treeleaf.anydone.entities.TicketAttachmentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TicketAttachmentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TicketAttachmentRequest}
 */
proto.treeleaf.anydone.entities.TicketAttachmentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTicketid(value);
      break;
    case 2:
      var value = new proto.treeleaf.anydone.entities.TicketAttachment;
      reader.readMessage(value,proto.treeleaf.anydone.entities.TicketAttachment.deserializeBinaryFromReader);
      msg.addTicketattachments(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.TicketAttachmentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TicketAttachmentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TicketAttachmentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketAttachmentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTicketattachmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.treeleaf.anydone.entities.TicketAttachment.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 ticketId = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketAttachmentRequest.prototype.getTicketid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketAttachmentRequest} returns this
 */
proto.treeleaf.anydone.entities.TicketAttachmentRequest.prototype.setTicketid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated TicketAttachment ticketAttachments = 2;
 * @return {!Array<!proto.treeleaf.anydone.entities.TicketAttachment>}
 */
proto.treeleaf.anydone.entities.TicketAttachmentRequest.prototype.getTicketattachmentsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.TicketAttachment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.TicketAttachment, 2));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.TicketAttachment>} value
 * @return {!proto.treeleaf.anydone.entities.TicketAttachmentRequest} returns this
*/
proto.treeleaf.anydone.entities.TicketAttachmentRequest.prototype.setTicketattachmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketAttachment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TicketAttachment}
 */
proto.treeleaf.anydone.entities.TicketAttachmentRequest.prototype.addTicketattachments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.treeleaf.anydone.entities.TicketAttachment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.TicketAttachmentRequest} returns this
 */
proto.treeleaf.anydone.entities.TicketAttachmentRequest.prototype.clearTicketattachmentsList = function() {
  return this.setTicketattachmentsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.CreateTicketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.CreateTicketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.CreateTicketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.CreateTicketRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    source: jspb.Message.getFieldWithDefault(msg, 2, 0),
    priority: jspb.Message.getFieldWithDefault(msg, 3, 0),
    refid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    msgid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createdby: jspb.Message.getFieldWithDefault(msg, 6, ""),
    bot: (f = msg.getBot()) && bot_housekeeping_pb.BotSettings.toObject(includeInstance, f),
    displayname: jspb.Message.getFieldWithDefault(msg, 8, ""),
    title: jspb.Message.getFieldWithDefault(msg, 9, ""),
    type: (f = msg.getType()) && proto.treeleaf.anydone.entities.TicketType.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.CreateTicketRequest}
 */
proto.treeleaf.anydone.entities.CreateTicketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.CreateTicketRequest;
  return proto.treeleaf.anydone.entities.CreateTicketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.CreateTicketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.CreateTicketRequest}
 */
proto.treeleaf.anydone.entities.CreateTicketRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceid(value);
      break;
    case 2:
      var value = /** @type {!proto.treeleaf.anydone.entities.TicketSource} */ (reader.readEnum());
      msg.setSource(value);
      break;
    case 3:
      var value = /** @type {!proto.treeleaf.anydone.entities.TicketPriority} */ (reader.readEnum());
      msg.setPriority(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedby(value);
      break;
    case 7:
      var value = new bot_housekeeping_pb.BotSettings;
      reader.readMessage(value,bot_housekeeping_pb.BotSettings.deserializeBinaryFromReader);
      msg.setBot(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayname(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 10:
      var value = new proto.treeleaf.anydone.entities.TicketType;
      reader.readMessage(value,proto.treeleaf.anydone.entities.TicketType.deserializeBinaryFromReader);
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.CreateTicketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.CreateTicketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.CreateTicketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.CreateTicketRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSource();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMsgid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatedby();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getBot();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      bot_housekeeping_pb.BotSettings.serializeBinaryToWriter
    );
  }
  f = message.getDisplayname();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getType();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.treeleaf.anydone.entities.TicketType.serializeBinaryToWriter
    );
  }
};


/**
 * optional string serviceId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CreateTicketRequest.prototype.getServiceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CreateTicketRequest} returns this
 */
proto.treeleaf.anydone.entities.CreateTicketRequest.prototype.setServiceid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TicketSource source = 2;
 * @return {!proto.treeleaf.anydone.entities.TicketSource}
 */
proto.treeleaf.anydone.entities.CreateTicketRequest.prototype.getSource = function() {
  return /** @type {!proto.treeleaf.anydone.entities.TicketSource} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketSource} value
 * @return {!proto.treeleaf.anydone.entities.CreateTicketRequest} returns this
 */
proto.treeleaf.anydone.entities.CreateTicketRequest.prototype.setSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional TicketPriority priority = 3;
 * @return {!proto.treeleaf.anydone.entities.TicketPriority}
 */
proto.treeleaf.anydone.entities.CreateTicketRequest.prototype.getPriority = function() {
  return /** @type {!proto.treeleaf.anydone.entities.TicketPriority} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketPriority} value
 * @return {!proto.treeleaf.anydone.entities.CreateTicketRequest} returns this
 */
proto.treeleaf.anydone.entities.CreateTicketRequest.prototype.setPriority = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string refId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CreateTicketRequest.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CreateTicketRequest} returns this
 */
proto.treeleaf.anydone.entities.CreateTicketRequest.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string msgId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CreateTicketRequest.prototype.getMsgid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CreateTicketRequest} returns this
 */
proto.treeleaf.anydone.entities.CreateTicketRequest.prototype.setMsgid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string createdBy = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CreateTicketRequest.prototype.getCreatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CreateTicketRequest} returns this
 */
proto.treeleaf.anydone.entities.CreateTicketRequest.prototype.setCreatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional BotSettings bot = 7;
 * @return {?proto.treeleaf.anydone.entities.BotSettings}
 */
proto.treeleaf.anydone.entities.CreateTicketRequest.prototype.getBot = function() {
  return /** @type{?proto.treeleaf.anydone.entities.BotSettings} */ (
    jspb.Message.getWrapperField(this, bot_housekeeping_pb.BotSettings, 7));
};


/**
 * @param {?proto.treeleaf.anydone.entities.BotSettings|undefined} value
 * @return {!proto.treeleaf.anydone.entities.CreateTicketRequest} returns this
*/
proto.treeleaf.anydone.entities.CreateTicketRequest.prototype.setBot = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.CreateTicketRequest} returns this
 */
proto.treeleaf.anydone.entities.CreateTicketRequest.prototype.clearBot = function() {
  return this.setBot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.CreateTicketRequest.prototype.hasBot = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string displayName = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CreateTicketRequest.prototype.getDisplayname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CreateTicketRequest} returns this
 */
proto.treeleaf.anydone.entities.CreateTicketRequest.prototype.setDisplayname = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string title = 9;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CreateTicketRequest.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CreateTicketRequest} returns this
 */
proto.treeleaf.anydone.entities.CreateTicketRequest.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional TicketType type = 10;
 * @return {?proto.treeleaf.anydone.entities.TicketType}
 */
proto.treeleaf.anydone.entities.CreateTicketRequest.prototype.getType = function() {
  return /** @type{?proto.treeleaf.anydone.entities.TicketType} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.TicketType, 10));
};


/**
 * @param {?proto.treeleaf.anydone.entities.TicketType|undefined} value
 * @return {!proto.treeleaf.anydone.entities.CreateTicketRequest} returns this
*/
proto.treeleaf.anydone.entities.CreateTicketRequest.prototype.setType = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.CreateTicketRequest} returns this
 */
proto.treeleaf.anydone.entities.CreateTicketRequest.prototype.clearType = function() {
  return this.setType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.CreateTicketRequest.prototype.hasType = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.ExportTicketReportRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.ExportTicketReportRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.ExportTicketReportRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ExportTicketReportRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requesttype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    reporttype: jspb.Message.getFieldWithDefault(msg, 2, 0),
    serviceid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    filter: (f = msg.getFilter()) && proto.treeleaf.anydone.entities.TicketFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.ExportTicketReportRequest}
 */
proto.treeleaf.anydone.entities.ExportTicketReportRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.ExportTicketReportRequest;
  return proto.treeleaf.anydone.entities.ExportTicketReportRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.ExportTicketReportRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.ExportTicketReportRequest}
 */
proto.treeleaf.anydone.entities.ExportTicketReportRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.treeleaf.anydone.entities.ExportTicketReportRequest.RequestType} */ (reader.readEnum());
      msg.setRequesttype(value);
      break;
    case 2:
      var value = /** @type {!proto.treeleaf.anydone.entities.ReportType} */ (reader.readEnum());
      msg.setReporttype(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceid(value);
      break;
    case 4:
      var value = new proto.treeleaf.anydone.entities.TicketFilter;
      reader.readMessage(value,proto.treeleaf.anydone.entities.TicketFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.ExportTicketReportRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.ExportTicketReportRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.ExportTicketReportRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ExportTicketReportRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequesttype();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getReporttype();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getServiceid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.treeleaf.anydone.entities.TicketFilter.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.ExportTicketReportRequest.RequestType = {
  UNKNOWN: 0,
  ALL: 1,
  PENDING: 2,
  IN_PROGRESS: 3,
  RESOLVED_CLOSED: 4,
  CREATED_BY_ME: 5,
  REQUESTED_BY_ME: 6,
  CONTRIBUTED: 7,
  SUBSCRIBED: 8,
  UNASSIGNED: 9
};

/**
 * optional RequestType requestType = 1;
 * @return {!proto.treeleaf.anydone.entities.ExportTicketReportRequest.RequestType}
 */
proto.treeleaf.anydone.entities.ExportTicketReportRequest.prototype.getRequesttype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.ExportTicketReportRequest.RequestType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.ExportTicketReportRequest.RequestType} value
 * @return {!proto.treeleaf.anydone.entities.ExportTicketReportRequest} returns this
 */
proto.treeleaf.anydone.entities.ExportTicketReportRequest.prototype.setRequesttype = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional ReportType reportType = 2;
 * @return {!proto.treeleaf.anydone.entities.ReportType}
 */
proto.treeleaf.anydone.entities.ExportTicketReportRequest.prototype.getReporttype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.ReportType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.ReportType} value
 * @return {!proto.treeleaf.anydone.entities.ExportTicketReportRequest} returns this
 */
proto.treeleaf.anydone.entities.ExportTicketReportRequest.prototype.setReporttype = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string serviceId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ExportTicketReportRequest.prototype.getServiceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ExportTicketReportRequest} returns this
 */
proto.treeleaf.anydone.entities.ExportTicketReportRequest.prototype.setServiceid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional TicketFilter filter = 4;
 * @return {?proto.treeleaf.anydone.entities.TicketFilter}
 */
proto.treeleaf.anydone.entities.ExportTicketReportRequest.prototype.getFilter = function() {
  return /** @type{?proto.treeleaf.anydone.entities.TicketFilter} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.TicketFilter, 4));
};


/**
 * @param {?proto.treeleaf.anydone.entities.TicketFilter|undefined} value
 * @return {!proto.treeleaf.anydone.entities.ExportTicketReportRequest} returns this
*/
proto.treeleaf.anydone.entities.ExportTicketReportRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.ExportTicketReportRequest} returns this
 */
proto.treeleaf.anydone.entities.ExportTicketReportRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.ExportTicketReportRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.ExportTicketReportResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.ExportTicketReportResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.ExportTicketReportResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ExportTicketReportResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    reporttype: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.ExportTicketReportResponse}
 */
proto.treeleaf.anydone.entities.ExportTicketReportResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.ExportTicketReportResponse;
  return proto.treeleaf.anydone.entities.ExportTicketReportResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.ExportTicketReportResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.ExportTicketReportResponse}
 */
proto.treeleaf.anydone.entities.ExportTicketReportResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {!proto.treeleaf.anydone.entities.ReportType} */ (reader.readEnum());
      msg.setReporttype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.ExportTicketReportResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.ExportTicketReportResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.ExportTicketReportResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ExportTicketReportResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReporttype();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ExportTicketReportResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ExportTicketReportResponse} returns this
 */
proto.treeleaf.anydone.entities.ExportTicketReportResponse.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ReportType reportType = 2;
 * @return {!proto.treeleaf.anydone.entities.ReportType}
 */
proto.treeleaf.anydone.entities.ExportTicketReportResponse.prototype.getReporttype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.ReportType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.ReportType} value
 * @return {!proto.treeleaf.anydone.entities.ExportTicketReportResponse} returns this
 */
proto.treeleaf.anydone.entities.ExportTicketReportResponse.prototype.setReporttype = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.TicketActivityLog.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TicketActivityLog.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TicketActivityLog} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketActivityLog.toObject = function(includeInstance, msg) {
  var f, obj = {
    logid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    account: (f = msg.getAccount()) && user_pb.Account.toObject(includeInstance, f),
    fieldname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    value: jspb.Message.getFieldWithDefault(msg, 4, ""),
    ticketid: jspb.Message.getFieldWithDefault(msg, 5, 0),
    activitytype: jspb.Message.getFieldWithDefault(msg, 6, 0),
    createdat: jspb.Message.getFieldWithDefault(msg, 7, 0),
    oldvalue: jspb.Message.getFieldWithDefault(msg, 8, ""),
    newvalue: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.TicketActivityLog}
 */
proto.treeleaf.anydone.entities.TicketActivityLog.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TicketActivityLog;
  return proto.treeleaf.anydone.entities.TicketActivityLog.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TicketActivityLog} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TicketActivityLog}
 */
proto.treeleaf.anydone.entities.TicketActivityLog.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogid(value);
      break;
    case 2:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTicketid(value);
      break;
    case 6:
      var value = /** @type {!proto.treeleaf.anydone.entities.TicketActivityLog.ActivityType} */ (reader.readEnum());
      msg.setActivitytype(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOldvalue(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewvalue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.TicketActivityLog.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TicketActivityLog.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TicketActivityLog} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketActivityLog.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLogid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getFieldname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTicketid();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getActivitytype();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getOldvalue();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getNewvalue();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.TicketActivityLog.ActivityType = {
  UNKNOWN_ACTIVITY_TYPE: 0,
  DESCRIPTION_CHANGED: 1,
  STATUS_CHANGED: 2,
  TITLE_CHANGED: 3,
  EMPLOYEE_CHANGED: 4,
  CONTRIBUTER_ADDED: 5,
  CONTRIBUTER_REMOVED: 6,
  ESTIMATED_TIME_CHANGED: 7,
  PRIORITY_CHANGED: 8,
  LABEL_CHANGED: 9,
  ARCHIVED: 10,
  RESTORED: 11,
  SPRINT_CHANGED: 12,
  DUE_DATE_CHANGED: 13,
  MOVE_TO_BACKLOG: 14
};

/**
 * optional string logId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketActivityLog.prototype.getLogid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketActivityLog} returns this
 */
proto.treeleaf.anydone.entities.TicketActivityLog.prototype.setLogid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Account account = 2;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.TicketActivityLog.prototype.getAccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 2));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.TicketActivityLog} returns this
*/
proto.treeleaf.anydone.entities.TicketActivityLog.prototype.setAccount = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.TicketActivityLog} returns this
 */
proto.treeleaf.anydone.entities.TicketActivityLog.prototype.clearAccount = function() {
  return this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TicketActivityLog.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string fieldName = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketActivityLog.prototype.getFieldname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketActivityLog} returns this
 */
proto.treeleaf.anydone.entities.TicketActivityLog.prototype.setFieldname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string value = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketActivityLog.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketActivityLog} returns this
 */
proto.treeleaf.anydone.entities.TicketActivityLog.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 ticketId = 5;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketActivityLog.prototype.getTicketid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketActivityLog} returns this
 */
proto.treeleaf.anydone.entities.TicketActivityLog.prototype.setTicketid = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional ActivityType activityType = 6;
 * @return {!proto.treeleaf.anydone.entities.TicketActivityLog.ActivityType}
 */
proto.treeleaf.anydone.entities.TicketActivityLog.prototype.getActivitytype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.TicketActivityLog.ActivityType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketActivityLog.ActivityType} value
 * @return {!proto.treeleaf.anydone.entities.TicketActivityLog} returns this
 */
proto.treeleaf.anydone.entities.TicketActivityLog.prototype.setActivitytype = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional int64 createdAt = 7;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketActivityLog.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketActivityLog} returns this
 */
proto.treeleaf.anydone.entities.TicketActivityLog.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string oldValue = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketActivityLog.prototype.getOldvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketActivityLog} returns this
 */
proto.treeleaf.anydone.entities.TicketActivityLog.prototype.setOldvalue = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string newValue = 9;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketActivityLog.prototype.getNewvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketActivityLog} returns this
 */
proto.treeleaf.anydone.entities.TicketActivityLog.prototype.setNewvalue = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.TicketNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TicketNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TicketNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
    notificationtype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ticket: (f = msg.getTicket()) && proto.treeleaf.anydone.entities.Ticket.toObject(includeInstance, f),
    ticketid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    broadcastvideocall: (f = msg.getBroadcastvideocall()) && signaling_pb.BroadcastVideoCall.toObject(includeInstance, f),
    videoroomhostleft: (f = msg.getVideoroomhostleft()) && signaling_pb.VideoRoomHostLeft.toObject(includeInstance, f),
    videocalljoinresponse: (f = msg.getVideocalljoinresponse()) && signaling_pb.VideoCallJoinResponse.toObject(includeInstance, f),
    receivercalldeclined: (f = msg.getReceivercalldeclined()) && signaling_pb.ReceiverCallDeclined.toObject(includeInstance, f),
    addcallparticipant: (f = msg.getAddcallparticipant()) && signaling_pb.AddCallParticipant.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.TicketNotification}
 */
proto.treeleaf.anydone.entities.TicketNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TicketNotification;
  return proto.treeleaf.anydone.entities.TicketNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TicketNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TicketNotification}
 */
proto.treeleaf.anydone.entities.TicketNotification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.treeleaf.anydone.entities.TicketNotification.NotificationType} */ (reader.readEnum());
      msg.setNotificationtype(value);
      break;
    case 2:
      var value = new proto.treeleaf.anydone.entities.Ticket;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Ticket.deserializeBinaryFromReader);
      msg.setTicket(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicketid(value);
      break;
    case 4:
      var value = new signaling_pb.BroadcastVideoCall;
      reader.readMessage(value,signaling_pb.BroadcastVideoCall.deserializeBinaryFromReader);
      msg.setBroadcastvideocall(value);
      break;
    case 5:
      var value = new signaling_pb.VideoRoomHostLeft;
      reader.readMessage(value,signaling_pb.VideoRoomHostLeft.deserializeBinaryFromReader);
      msg.setVideoroomhostleft(value);
      break;
    case 6:
      var value = new signaling_pb.VideoCallJoinResponse;
      reader.readMessage(value,signaling_pb.VideoCallJoinResponse.deserializeBinaryFromReader);
      msg.setVideocalljoinresponse(value);
      break;
    case 7:
      var value = new signaling_pb.ReceiverCallDeclined;
      reader.readMessage(value,signaling_pb.ReceiverCallDeclined.deserializeBinaryFromReader);
      msg.setReceivercalldeclined(value);
      break;
    case 8:
      var value = new signaling_pb.AddCallParticipant;
      reader.readMessage(value,signaling_pb.AddCallParticipant.deserializeBinaryFromReader);
      msg.setAddcallparticipant(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.TicketNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TicketNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TicketNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNotificationtype();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTicket();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.treeleaf.anydone.entities.Ticket.serializeBinaryToWriter
    );
  }
  f = message.getTicketid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBroadcastvideocall();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      signaling_pb.BroadcastVideoCall.serializeBinaryToWriter
    );
  }
  f = message.getVideoroomhostleft();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      signaling_pb.VideoRoomHostLeft.serializeBinaryToWriter
    );
  }
  f = message.getVideocalljoinresponse();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      signaling_pb.VideoCallJoinResponse.serializeBinaryToWriter
    );
  }
  f = message.getReceivercalldeclined();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      signaling_pb.ReceiverCallDeclined.serializeBinaryToWriter
    );
  }
  f = message.getAddcallparticipant();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      signaling_pb.AddCallParticipant.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.TicketNotification.NotificationType = {
  UNKNOWN_NOTIFCATION_TYPE: 0,
  BROADCAST_VIDEO_CALL: 1,
  VIDEO_ROOM_HOST_LEFT: 2,
  VIDEO_CALL_JOIN_RESPONSE: 3,
  RECEIVER_CALL_DECLINED: 4,
  ADD_CALL_PARTICIPANT: 5
};

/**
 * optional NotificationType notificationType = 1;
 * @return {!proto.treeleaf.anydone.entities.TicketNotification.NotificationType}
 */
proto.treeleaf.anydone.entities.TicketNotification.prototype.getNotificationtype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.TicketNotification.NotificationType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketNotification.NotificationType} value
 * @return {!proto.treeleaf.anydone.entities.TicketNotification} returns this
 */
proto.treeleaf.anydone.entities.TicketNotification.prototype.setNotificationtype = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Ticket ticket = 2;
 * @return {?proto.treeleaf.anydone.entities.Ticket}
 */
proto.treeleaf.anydone.entities.TicketNotification.prototype.getTicket = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Ticket} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.Ticket, 2));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Ticket|undefined} value
 * @return {!proto.treeleaf.anydone.entities.TicketNotification} returns this
*/
proto.treeleaf.anydone.entities.TicketNotification.prototype.setTicket = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.TicketNotification} returns this
 */
proto.treeleaf.anydone.entities.TicketNotification.prototype.clearTicket = function() {
  return this.setTicket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TicketNotification.prototype.hasTicket = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string ticketId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketNotification.prototype.getTicketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketNotification} returns this
 */
proto.treeleaf.anydone.entities.TicketNotification.prototype.setTicketid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional BroadcastVideoCall broadcastVideoCall = 4;
 * @return {?proto.treeleaf.anydone.entities.BroadcastVideoCall}
 */
proto.treeleaf.anydone.entities.TicketNotification.prototype.getBroadcastvideocall = function() {
  return /** @type{?proto.treeleaf.anydone.entities.BroadcastVideoCall} */ (
    jspb.Message.getWrapperField(this, signaling_pb.BroadcastVideoCall, 4));
};


/**
 * @param {?proto.treeleaf.anydone.entities.BroadcastVideoCall|undefined} value
 * @return {!proto.treeleaf.anydone.entities.TicketNotification} returns this
*/
proto.treeleaf.anydone.entities.TicketNotification.prototype.setBroadcastvideocall = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.TicketNotification} returns this
 */
proto.treeleaf.anydone.entities.TicketNotification.prototype.clearBroadcastvideocall = function() {
  return this.setBroadcastvideocall(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TicketNotification.prototype.hasBroadcastvideocall = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional VideoRoomHostLeft videoRoomHostLeft = 5;
 * @return {?proto.treeleaf.anydone.entities.VideoRoomHostLeft}
 */
proto.treeleaf.anydone.entities.TicketNotification.prototype.getVideoroomhostleft = function() {
  return /** @type{?proto.treeleaf.anydone.entities.VideoRoomHostLeft} */ (
    jspb.Message.getWrapperField(this, signaling_pb.VideoRoomHostLeft, 5));
};


/**
 * @param {?proto.treeleaf.anydone.entities.VideoRoomHostLeft|undefined} value
 * @return {!proto.treeleaf.anydone.entities.TicketNotification} returns this
*/
proto.treeleaf.anydone.entities.TicketNotification.prototype.setVideoroomhostleft = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.TicketNotification} returns this
 */
proto.treeleaf.anydone.entities.TicketNotification.prototype.clearVideoroomhostleft = function() {
  return this.setVideoroomhostleft(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TicketNotification.prototype.hasVideoroomhostleft = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional VideoCallJoinResponse videoCallJoinResponse = 6;
 * @return {?proto.treeleaf.anydone.entities.VideoCallJoinResponse}
 */
proto.treeleaf.anydone.entities.TicketNotification.prototype.getVideocalljoinresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.VideoCallJoinResponse} */ (
    jspb.Message.getWrapperField(this, signaling_pb.VideoCallJoinResponse, 6));
};


/**
 * @param {?proto.treeleaf.anydone.entities.VideoCallJoinResponse|undefined} value
 * @return {!proto.treeleaf.anydone.entities.TicketNotification} returns this
*/
proto.treeleaf.anydone.entities.TicketNotification.prototype.setVideocalljoinresponse = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.TicketNotification} returns this
 */
proto.treeleaf.anydone.entities.TicketNotification.prototype.clearVideocalljoinresponse = function() {
  return this.setVideocalljoinresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TicketNotification.prototype.hasVideocalljoinresponse = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ReceiverCallDeclined receiverCallDeclined = 7;
 * @return {?proto.treeleaf.anydone.entities.ReceiverCallDeclined}
 */
proto.treeleaf.anydone.entities.TicketNotification.prototype.getReceivercalldeclined = function() {
  return /** @type{?proto.treeleaf.anydone.entities.ReceiverCallDeclined} */ (
    jspb.Message.getWrapperField(this, signaling_pb.ReceiverCallDeclined, 7));
};


/**
 * @param {?proto.treeleaf.anydone.entities.ReceiverCallDeclined|undefined} value
 * @return {!proto.treeleaf.anydone.entities.TicketNotification} returns this
*/
proto.treeleaf.anydone.entities.TicketNotification.prototype.setReceivercalldeclined = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.TicketNotification} returns this
 */
proto.treeleaf.anydone.entities.TicketNotification.prototype.clearReceivercalldeclined = function() {
  return this.setReceivercalldeclined(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TicketNotification.prototype.hasReceivercalldeclined = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional AddCallParticipant addCallParticipant = 8;
 * @return {?proto.treeleaf.anydone.entities.AddCallParticipant}
 */
proto.treeleaf.anydone.entities.TicketNotification.prototype.getAddcallparticipant = function() {
  return /** @type{?proto.treeleaf.anydone.entities.AddCallParticipant} */ (
    jspb.Message.getWrapperField(this, signaling_pb.AddCallParticipant, 8));
};


/**
 * @param {?proto.treeleaf.anydone.entities.AddCallParticipant|undefined} value
 * @return {!proto.treeleaf.anydone.entities.TicketNotification} returns this
*/
proto.treeleaf.anydone.entities.TicketNotification.prototype.setAddcallparticipant = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.TicketNotification} returns this
 */
proto.treeleaf.anydone.entities.TicketNotification.prototype.clearAddcallparticipant = function() {
  return this.setAddcallparticipant(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TicketNotification.prototype.hasAddcallparticipant = function() {
  return jspb.Message.getField(this, 8) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.TicketStep.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TicketStep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TicketStep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketStep.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ticketid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    ticketstep: jspb.Message.getFieldWithDefault(msg, 3, ""),
    ticketstepstate: jspb.Message.getFieldWithDefault(msg, 4, 0),
    createdat: jspb.Message.getFieldWithDefault(msg, 5, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 6, 0),
    completedstep: jspb.Message.getFieldWithDefault(msg, 7, 0),
    totalstep: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.TicketStep}
 */
proto.treeleaf.anydone.entities.TicketStep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TicketStep;
  return proto.treeleaf.anydone.entities.TicketStep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TicketStep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TicketStep}
 */
proto.treeleaf.anydone.entities.TicketStep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTicketid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicketstep(value);
      break;
    case 4:
      var value = /** @type {!proto.treeleaf.anydone.entities.TicketStepState} */ (reader.readEnum());
      msg.setTicketstepstate(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedat(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCompletedstep(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalstep(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.TicketStep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TicketStep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TicketStep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketStep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTicketid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTicketstep();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTicketstepstate();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getCompletedstep();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getTotalstep();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketStep.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketStep} returns this
 */
proto.treeleaf.anydone.entities.TicketStep.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 ticketId = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStep.prototype.getTicketid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStep} returns this
 */
proto.treeleaf.anydone.entities.TicketStep.prototype.setTicketid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string ticketStep = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketStep.prototype.getTicketstep = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketStep} returns this
 */
proto.treeleaf.anydone.entities.TicketStep.prototype.setTicketstep = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional TicketStepState ticketStepState = 4;
 * @return {!proto.treeleaf.anydone.entities.TicketStepState}
 */
proto.treeleaf.anydone.entities.TicketStep.prototype.getTicketstepstate = function() {
  return /** @type {!proto.treeleaf.anydone.entities.TicketStepState} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketStepState} value
 * @return {!proto.treeleaf.anydone.entities.TicketStep} returns this
 */
proto.treeleaf.anydone.entities.TicketStep.prototype.setTicketstepstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional int64 createdAt = 5;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStep.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStep} returns this
 */
proto.treeleaf.anydone.entities.TicketStep.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 updatedAt = 6;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStep.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStep} returns this
 */
proto.treeleaf.anydone.entities.TicketStep.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 completedStep = 7;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStep.prototype.getCompletedstep = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStep} returns this
 */
proto.treeleaf.anydone.entities.TicketStep.prototype.setCompletedstep = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 totalStep = 8;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStep.prototype.getTotalstep = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStep} returns this
 */
proto.treeleaf.anydone.entities.TicketStep.prototype.setTotalstep = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.ScrumTicket.repeatedFields_ = [7,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.ScrumTicket.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.ScrumTicket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.ScrumTicket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ScrumTicket.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sprintid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    columnid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tickettype: (f = msg.getTickettype()) && proto.treeleaf.anydone.entities.TicketType.toObject(includeInstance, f),
    summary: jspb.Message.getFieldWithDefault(msg, 5, ""),
    description: jspb.Message.getFieldWithDefault(msg, 6, ""),
    stepsList: jspb.Message.toObjectList(msg.getStepsList(),
    proto.treeleaf.anydone.entities.TicketStep.toObject, includeInstance),
    subtasksList: jspb.Message.toObjectList(msg.getSubtasksList(),
    proto.treeleaf.anydone.entities.Ticket.toObject, includeInstance),
    createdat: jspb.Message.getFieldWithDefault(msg, 9, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.ScrumTicket}
 */
proto.treeleaf.anydone.entities.ScrumTicket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.ScrumTicket;
  return proto.treeleaf.anydone.entities.ScrumTicket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.ScrumTicket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.ScrumTicket}
 */
proto.treeleaf.anydone.entities.ScrumTicket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicketid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSprintid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnid(value);
      break;
    case 4:
      var value = new proto.treeleaf.anydone.entities.TicketType;
      reader.readMessage(value,proto.treeleaf.anydone.entities.TicketType.deserializeBinaryFromReader);
      msg.setTickettype(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSummary(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 7:
      var value = new proto.treeleaf.anydone.entities.TicketStep;
      reader.readMessage(value,proto.treeleaf.anydone.entities.TicketStep.deserializeBinaryFromReader);
      msg.addSteps(value);
      break;
    case 8:
      var value = new proto.treeleaf.anydone.entities.Ticket;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Ticket.deserializeBinaryFromReader);
      msg.addSubtasks(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.ScrumTicket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.ScrumTicket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.ScrumTicket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ScrumTicket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getColumnid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTickettype();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.treeleaf.anydone.entities.TicketType.serializeBinaryToWriter
    );
  }
  f = message.getSummary();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getStepsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.treeleaf.anydone.entities.TicketStep.serializeBinaryToWriter
    );
  }
  f = message.getSubtasksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.treeleaf.anydone.entities.Ticket.serializeBinaryToWriter
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
};


/**
 * optional string ticketId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ScrumTicket.prototype.getTicketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ScrumTicket} returns this
 */
proto.treeleaf.anydone.entities.ScrumTicket.prototype.setTicketid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string sprintId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ScrumTicket.prototype.getSprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ScrumTicket} returns this
 */
proto.treeleaf.anydone.entities.ScrumTicket.prototype.setSprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string columnId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ScrumTicket.prototype.getColumnid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ScrumTicket} returns this
 */
proto.treeleaf.anydone.entities.ScrumTicket.prototype.setColumnid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional TicketType ticketType = 4;
 * @return {?proto.treeleaf.anydone.entities.TicketType}
 */
proto.treeleaf.anydone.entities.ScrumTicket.prototype.getTickettype = function() {
  return /** @type{?proto.treeleaf.anydone.entities.TicketType} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.TicketType, 4));
};


/**
 * @param {?proto.treeleaf.anydone.entities.TicketType|undefined} value
 * @return {!proto.treeleaf.anydone.entities.ScrumTicket} returns this
*/
proto.treeleaf.anydone.entities.ScrumTicket.prototype.setTickettype = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.ScrumTicket} returns this
 */
proto.treeleaf.anydone.entities.ScrumTicket.prototype.clearTickettype = function() {
  return this.setTickettype(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.ScrumTicket.prototype.hasTickettype = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string summary = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ScrumTicket.prototype.getSummary = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ScrumTicket} returns this
 */
proto.treeleaf.anydone.entities.ScrumTicket.prototype.setSummary = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ScrumTicket.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ScrumTicket} returns this
 */
proto.treeleaf.anydone.entities.ScrumTicket.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated TicketStep steps = 7;
 * @return {!Array<!proto.treeleaf.anydone.entities.TicketStep>}
 */
proto.treeleaf.anydone.entities.ScrumTicket.prototype.getStepsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.TicketStep>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.TicketStep, 7));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.TicketStep>} value
 * @return {!proto.treeleaf.anydone.entities.ScrumTicket} returns this
*/
proto.treeleaf.anydone.entities.ScrumTicket.prototype.setStepsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketStep=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TicketStep}
 */
proto.treeleaf.anydone.entities.ScrumTicket.prototype.addSteps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.treeleaf.anydone.entities.TicketStep, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.ScrumTicket} returns this
 */
proto.treeleaf.anydone.entities.ScrumTicket.prototype.clearStepsList = function() {
  return this.setStepsList([]);
};


/**
 * repeated Ticket subTasks = 8;
 * @return {!Array<!proto.treeleaf.anydone.entities.Ticket>}
 */
proto.treeleaf.anydone.entities.ScrumTicket.prototype.getSubtasksList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.Ticket>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.Ticket, 8));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.Ticket>} value
 * @return {!proto.treeleaf.anydone.entities.ScrumTicket} returns this
*/
proto.treeleaf.anydone.entities.ScrumTicket.prototype.setSubtasksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.Ticket=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.Ticket}
 */
proto.treeleaf.anydone.entities.ScrumTicket.prototype.addSubtasks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.treeleaf.anydone.entities.Ticket, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.ScrumTicket} returns this
 */
proto.treeleaf.anydone.entities.ScrumTicket.prototype.clearSubtasksList = function() {
  return this.setSubtasksList([]);
};


/**
 * optional int64 createdAt = 9;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ScrumTicket.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ScrumTicket} returns this
 */
proto.treeleaf.anydone.entities.ScrumTicket.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 updatedAt = 10;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ScrumTicket.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ScrumTicket} returns this
 */
proto.treeleaf.anydone.entities.ScrumTicket.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.KanbanTicket.repeatedFields_ = [6,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.KanbanTicket.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.KanbanTicket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.KanbanTicket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.KanbanTicket.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    columnid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tickettype: (f = msg.getTickettype()) && proto.treeleaf.anydone.entities.TicketType.toObject(includeInstance, f),
    summary: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    stepsList: jspb.Message.toObjectList(msg.getStepsList(),
    proto.treeleaf.anydone.entities.TicketStep.toObject, includeInstance),
    subtasksList: jspb.Message.toObjectList(msg.getSubtasksList(),
    proto.treeleaf.anydone.entities.Ticket.toObject, includeInstance),
    createdat: jspb.Message.getFieldWithDefault(msg, 8, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.KanbanTicket}
 */
proto.treeleaf.anydone.entities.KanbanTicket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.KanbanTicket;
  return proto.treeleaf.anydone.entities.KanbanTicket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.KanbanTicket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.KanbanTicket}
 */
proto.treeleaf.anydone.entities.KanbanTicket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicketid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnid(value);
      break;
    case 3:
      var value = new proto.treeleaf.anydone.entities.TicketType;
      reader.readMessage(value,proto.treeleaf.anydone.entities.TicketType.deserializeBinaryFromReader);
      msg.setTickettype(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSummary(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = new proto.treeleaf.anydone.entities.TicketStep;
      reader.readMessage(value,proto.treeleaf.anydone.entities.TicketStep.deserializeBinaryFromReader);
      msg.addSteps(value);
      break;
    case 7:
      var value = new proto.treeleaf.anydone.entities.Ticket;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Ticket.deserializeBinaryFromReader);
      msg.addSubtasks(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.KanbanTicket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.KanbanTicket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.KanbanTicket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.KanbanTicket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getColumnid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTickettype();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.treeleaf.anydone.entities.TicketType.serializeBinaryToWriter
    );
  }
  f = message.getSummary();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getStepsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.treeleaf.anydone.entities.TicketStep.serializeBinaryToWriter
    );
  }
  f = message.getSubtasksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.treeleaf.anydone.entities.Ticket.serializeBinaryToWriter
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
};


/**
 * optional string ticketId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.KanbanTicket.prototype.getTicketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.KanbanTicket} returns this
 */
proto.treeleaf.anydone.entities.KanbanTicket.prototype.setTicketid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string columnId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.KanbanTicket.prototype.getColumnid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.KanbanTicket} returns this
 */
proto.treeleaf.anydone.entities.KanbanTicket.prototype.setColumnid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional TicketType ticketType = 3;
 * @return {?proto.treeleaf.anydone.entities.TicketType}
 */
proto.treeleaf.anydone.entities.KanbanTicket.prototype.getTickettype = function() {
  return /** @type{?proto.treeleaf.anydone.entities.TicketType} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.TicketType, 3));
};


/**
 * @param {?proto.treeleaf.anydone.entities.TicketType|undefined} value
 * @return {!proto.treeleaf.anydone.entities.KanbanTicket} returns this
*/
proto.treeleaf.anydone.entities.KanbanTicket.prototype.setTickettype = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.KanbanTicket} returns this
 */
proto.treeleaf.anydone.entities.KanbanTicket.prototype.clearTickettype = function() {
  return this.setTickettype(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.KanbanTicket.prototype.hasTickettype = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string summary = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.KanbanTicket.prototype.getSummary = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.KanbanTicket} returns this
 */
proto.treeleaf.anydone.entities.KanbanTicket.prototype.setSummary = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.KanbanTicket.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.KanbanTicket} returns this
 */
proto.treeleaf.anydone.entities.KanbanTicket.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated TicketStep steps = 6;
 * @return {!Array<!proto.treeleaf.anydone.entities.TicketStep>}
 */
proto.treeleaf.anydone.entities.KanbanTicket.prototype.getStepsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.TicketStep>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.TicketStep, 6));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.TicketStep>} value
 * @return {!proto.treeleaf.anydone.entities.KanbanTicket} returns this
*/
proto.treeleaf.anydone.entities.KanbanTicket.prototype.setStepsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketStep=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TicketStep}
 */
proto.treeleaf.anydone.entities.KanbanTicket.prototype.addSteps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.treeleaf.anydone.entities.TicketStep, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.KanbanTicket} returns this
 */
proto.treeleaf.anydone.entities.KanbanTicket.prototype.clearStepsList = function() {
  return this.setStepsList([]);
};


/**
 * repeated Ticket subTasks = 7;
 * @return {!Array<!proto.treeleaf.anydone.entities.Ticket>}
 */
proto.treeleaf.anydone.entities.KanbanTicket.prototype.getSubtasksList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.Ticket>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.Ticket, 7));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.Ticket>} value
 * @return {!proto.treeleaf.anydone.entities.KanbanTicket} returns this
*/
proto.treeleaf.anydone.entities.KanbanTicket.prototype.setSubtasksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.Ticket=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.Ticket}
 */
proto.treeleaf.anydone.entities.KanbanTicket.prototype.addSubtasks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.treeleaf.anydone.entities.Ticket, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.KanbanTicket} returns this
 */
proto.treeleaf.anydone.entities.KanbanTicket.prototype.clearSubtasksList = function() {
  return this.setSubtasksList([]);
};


/**
 * optional int64 createdAt = 8;
 * @return {number}
 */
proto.treeleaf.anydone.entities.KanbanTicket.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.KanbanTicket} returns this
 */
proto.treeleaf.anydone.entities.KanbanTicket.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 updatedAt = 9;
 * @return {number}
 */
proto.treeleaf.anydone.entities.KanbanTicket.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.KanbanTicket} returns this
 */
proto.treeleaf.anydone.entities.KanbanTicket.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.TicketStats.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TicketStats.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TicketStats} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketStats.toObject = function(includeInstance, msg) {
  var f, obj = {
    todocount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    inprogresscount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    donecount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 4, 0),
    status: jspb.Message.getFieldWithDefault(msg, 5, 0),
    day: jspb.Message.getFieldWithDefault(msg, 6, ""),
    incompletedtaskcount: jspb.Message.getFieldWithDefault(msg, 7, 0),
    totalticket: jspb.Message.getFieldWithDefault(msg, 9, 0),
    totalday: jspb.Message.getFieldWithDefault(msg, 10, 0),
    idealcount: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.TicketStats}
 */
proto.treeleaf.anydone.entities.TicketStats.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TicketStats;
  return proto.treeleaf.anydone.entities.TicketStats.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TicketStats} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TicketStats}
 */
proto.treeleaf.anydone.entities.TicketStats.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTodocount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInprogresscount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDonecount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 5:
      var value = /** @type {!proto.treeleaf.anydone.entities.StatusCategory} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDay(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIncompletedtaskcount(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalticket(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalday(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIdealcount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.TicketStats.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TicketStats.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TicketStats} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketStats.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTodocount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getInprogresscount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getDonecount();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getDay();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getIncompletedtaskcount();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getTotalticket();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getTotalday();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getIdealcount();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
};


/**
 * optional int64 todoCount = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStats.prototype.getTodocount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStats} returns this
 */
proto.treeleaf.anydone.entities.TicketStats.prototype.setTodocount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 inprogressCount = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStats.prototype.getInprogresscount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStats} returns this
 */
proto.treeleaf.anydone.entities.TicketStats.prototype.setInprogresscount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 doneCount = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStats.prototype.getDonecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStats} returns this
 */
proto.treeleaf.anydone.entities.TicketStats.prototype.setDonecount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 timestamp = 4;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStats.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStats} returns this
 */
proto.treeleaf.anydone.entities.TicketStats.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional StatusCategory status = 5;
 * @return {!proto.treeleaf.anydone.entities.StatusCategory}
 */
proto.treeleaf.anydone.entities.TicketStats.prototype.getStatus = function() {
  return /** @type {!proto.treeleaf.anydone.entities.StatusCategory} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.StatusCategory} value
 * @return {!proto.treeleaf.anydone.entities.TicketStats} returns this
 */
proto.treeleaf.anydone.entities.TicketStats.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional string day = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketStats.prototype.getDay = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketStats} returns this
 */
proto.treeleaf.anydone.entities.TicketStats.prototype.setDay = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 incompletedTaskCount = 7;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStats.prototype.getIncompletedtaskcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStats} returns this
 */
proto.treeleaf.anydone.entities.TicketStats.prototype.setIncompletedtaskcount = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 totalTicket = 9;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStats.prototype.getTotalticket = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStats} returns this
 */
proto.treeleaf.anydone.entities.TicketStats.prototype.setTotalticket = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 totalDay = 10;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStats.prototype.getTotalday = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStats} returns this
 */
proto.treeleaf.anydone.entities.TicketStats.prototype.setTotalday = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 idealCount = 11;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketStats.prototype.getIdealcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketStats} returns this
 */
proto.treeleaf.anydone.entities.TicketStats.prototype.setIdealcount = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.BurndownReport.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.BurndownReport.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.BurndownReport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.BurndownReport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.BurndownReport.toObject = function(includeInstance, msg) {
  var f, obj = {
    sprintid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sprintname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    statsList: jspb.Message.toObjectList(msg.getStatsList(),
    proto.treeleaf.anydone.entities.TicketStats.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.BurndownReport}
 */
proto.treeleaf.anydone.entities.BurndownReport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.BurndownReport;
  return proto.treeleaf.anydone.entities.BurndownReport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.BurndownReport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.BurndownReport}
 */
proto.treeleaf.anydone.entities.BurndownReport.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSprintid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSprintname(value);
      break;
    case 3:
      var value = new proto.treeleaf.anydone.entities.TicketStats;
      reader.readMessage(value,proto.treeleaf.anydone.entities.TicketStats.deserializeBinaryFromReader);
      msg.addStats(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.BurndownReport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.BurndownReport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.BurndownReport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.BurndownReport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSprintid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSprintname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.treeleaf.anydone.entities.TicketStats.serializeBinaryToWriter
    );
  }
};


/**
 * optional string sprintId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.BurndownReport.prototype.getSprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.BurndownReport} returns this
 */
proto.treeleaf.anydone.entities.BurndownReport.prototype.setSprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string sprintName = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.BurndownReport.prototype.getSprintname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.BurndownReport} returns this
 */
proto.treeleaf.anydone.entities.BurndownReport.prototype.setSprintname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated TicketStats stats = 3;
 * @return {!Array<!proto.treeleaf.anydone.entities.TicketStats>}
 */
proto.treeleaf.anydone.entities.BurndownReport.prototype.getStatsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.TicketStats>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.TicketStats, 3));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.TicketStats>} value
 * @return {!proto.treeleaf.anydone.entities.BurndownReport} returns this
*/
proto.treeleaf.anydone.entities.BurndownReport.prototype.setStatsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketStats=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TicketStats}
 */
proto.treeleaf.anydone.entities.BurndownReport.prototype.addStats = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.treeleaf.anydone.entities.TicketStats, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.BurndownReport} returns this
 */
proto.treeleaf.anydone.entities.BurndownReport.prototype.clearStatsList = function() {
  return this.setStatsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.TicketColumnTransaction.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TicketColumnTransaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TicketColumnTransaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketColumnTransaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fromboardcolumn: jspb.Message.getFieldWithDefault(msg, 2, ""),
    toboardcolumn: jspb.Message.getFieldWithDefault(msg, 3, ""),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0),
    accountid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    state: jspb.Message.getFieldWithDefault(msg, 6, 0),
    ticket: (f = msg.getTicket()) && proto.treeleaf.anydone.entities.Ticket.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.TicketColumnTransaction}
 */
proto.treeleaf.anydone.entities.TicketColumnTransaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TicketColumnTransaction;
  return proto.treeleaf.anydone.entities.TicketColumnTransaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TicketColumnTransaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TicketColumnTransaction}
 */
proto.treeleaf.anydone.entities.TicketColumnTransaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFromboardcolumn(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setToboardcolumn(value);
      break;
    case 4:
      var value = /** @type {!proto.treeleaf.anydone.entities.TransactionType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountid(value);
      break;
    case 6:
      var value = /** @type {!proto.treeleaf.anydone.entities.RequestState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 7:
      var value = new proto.treeleaf.anydone.entities.Ticket;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Ticket.deserializeBinaryFromReader);
      msg.setTicket(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.TicketColumnTransaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TicketColumnTransaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TicketColumnTransaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketColumnTransaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFromboardcolumn();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getToboardcolumn();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getAccountid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getTicket();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.treeleaf.anydone.entities.Ticket.serializeBinaryToWriter
    );
  }
};


/**
 * optional string transactionId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketColumnTransaction.prototype.getTransactionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketColumnTransaction} returns this
 */
proto.treeleaf.anydone.entities.TicketColumnTransaction.prototype.setTransactionid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string fromBoardColumn = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketColumnTransaction.prototype.getFromboardcolumn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketColumnTransaction} returns this
 */
proto.treeleaf.anydone.entities.TicketColumnTransaction.prototype.setFromboardcolumn = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string toBoardColumn = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketColumnTransaction.prototype.getToboardcolumn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketColumnTransaction} returns this
 */
proto.treeleaf.anydone.entities.TicketColumnTransaction.prototype.setToboardcolumn = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional TransactionType type = 4;
 * @return {!proto.treeleaf.anydone.entities.TransactionType}
 */
proto.treeleaf.anydone.entities.TicketColumnTransaction.prototype.getType = function() {
  return /** @type {!proto.treeleaf.anydone.entities.TransactionType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.TransactionType} value
 * @return {!proto.treeleaf.anydone.entities.TicketColumnTransaction} returns this
 */
proto.treeleaf.anydone.entities.TicketColumnTransaction.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string accountId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketColumnTransaction.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketColumnTransaction} returns this
 */
proto.treeleaf.anydone.entities.TicketColumnTransaction.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional RequestState state = 6;
 * @return {!proto.treeleaf.anydone.entities.RequestState}
 */
proto.treeleaf.anydone.entities.TicketColumnTransaction.prototype.getState = function() {
  return /** @type {!proto.treeleaf.anydone.entities.RequestState} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.RequestState} value
 * @return {!proto.treeleaf.anydone.entities.TicketColumnTransaction} returns this
 */
proto.treeleaf.anydone.entities.TicketColumnTransaction.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional Ticket ticket = 7;
 * @return {?proto.treeleaf.anydone.entities.Ticket}
 */
proto.treeleaf.anydone.entities.TicketColumnTransaction.prototype.getTicket = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Ticket} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.Ticket, 7));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Ticket|undefined} value
 * @return {!proto.treeleaf.anydone.entities.TicketColumnTransaction} returns this
*/
proto.treeleaf.anydone.entities.TicketColumnTransaction.prototype.setTicket = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.TicketColumnTransaction} returns this
 */
proto.treeleaf.anydone.entities.TicketColumnTransaction.prototype.clearTicket = function() {
  return this.setTicket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TicketColumnTransaction.prototype.hasTicket = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.TicketOrderMove.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TicketOrderMove.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TicketOrderMove} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketOrderMove.toObject = function(includeInstance, msg) {
  var f, obj = {
    before: jspb.Message.getFieldWithDefault(msg, 1, 0),
    after: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.TicketOrderMove}
 */
proto.treeleaf.anydone.entities.TicketOrderMove.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TicketOrderMove;
  return proto.treeleaf.anydone.entities.TicketOrderMove.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TicketOrderMove} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TicketOrderMove}
 */
proto.treeleaf.anydone.entities.TicketOrderMove.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBefore(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAfter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.TicketOrderMove.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TicketOrderMove.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TicketOrderMove} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketOrderMove.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBefore();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getAfter();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 before = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketOrderMove.prototype.getBefore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketOrderMove} returns this
 */
proto.treeleaf.anydone.entities.TicketOrderMove.prototype.setBefore = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 after = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketOrderMove.prototype.getAfter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketOrderMove} returns this
 */
proto.treeleaf.anydone.entities.TicketOrderMove.prototype.setAfter = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.TicketTransactionLog.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TicketTransactionLog.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TicketTransactionLog} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketTransactionLog.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fromrefid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    torefid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    movedby: jspb.Message.getFieldWithDefault(msg, 4, ""),
    movedat: jspb.Message.getFieldWithDefault(msg, 5, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 6, 0),
    movetype: jspb.Message.getFieldWithDefault(msg, 7, 0),
    refid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    duration: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.TicketTransactionLog}
 */
proto.treeleaf.anydone.entities.TicketTransactionLog.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TicketTransactionLog;
  return proto.treeleaf.anydone.entities.TicketTransactionLog.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TicketTransactionLog} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TicketTransactionLog}
 */
proto.treeleaf.anydone.entities.TicketTransactionLog.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFromrefid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTorefid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMovedby(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMovedat(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedat(value);
      break;
    case 7:
      var value = /** @type {!proto.treeleaf.anydone.entities.TicketTransactionLog.MoveType} */ (reader.readEnum());
      msg.setMovetype(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDuration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.TicketTransactionLog.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TicketTransactionLog.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TicketTransactionLog} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketTransactionLog.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFromrefid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTorefid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMovedby();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMovedat();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getMovetype();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.TicketTransactionLog.MoveType = {
  UNKNOWN_MOVE_TYPE: 0,
  SPRINT_MOVE_TYPE: 1,
  COLUMN_MOVE_TYPE: 2
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketTransactionLog.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketTransactionLog} returns this
 */
proto.treeleaf.anydone.entities.TicketTransactionLog.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string fromRefId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketTransactionLog.prototype.getFromrefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketTransactionLog} returns this
 */
proto.treeleaf.anydone.entities.TicketTransactionLog.prototype.setFromrefid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string toRefId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketTransactionLog.prototype.getTorefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketTransactionLog} returns this
 */
proto.treeleaf.anydone.entities.TicketTransactionLog.prototype.setTorefid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string movedBy = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketTransactionLog.prototype.getMovedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketTransactionLog} returns this
 */
proto.treeleaf.anydone.entities.TicketTransactionLog.prototype.setMovedby = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 movedAt = 5;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketTransactionLog.prototype.getMovedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketTransactionLog} returns this
 */
proto.treeleaf.anydone.entities.TicketTransactionLog.prototype.setMovedat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 updatedAt = 6;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketTransactionLog.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketTransactionLog} returns this
 */
proto.treeleaf.anydone.entities.TicketTransactionLog.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional MoveType moveType = 7;
 * @return {!proto.treeleaf.anydone.entities.TicketTransactionLog.MoveType}
 */
proto.treeleaf.anydone.entities.TicketTransactionLog.prototype.getMovetype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.TicketTransactionLog.MoveType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketTransactionLog.MoveType} value
 * @return {!proto.treeleaf.anydone.entities.TicketTransactionLog} returns this
 */
proto.treeleaf.anydone.entities.TicketTransactionLog.prototype.setMovetype = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional string refId = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketTransactionLog.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketTransactionLog} returns this
 */
proto.treeleaf.anydone.entities.TicketTransactionLog.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 duration = 9;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketTransactionLog.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketTransactionLog} returns this
 */
proto.treeleaf.anydone.entities.TicketTransactionLog.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.SprintProcessTime.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.SprintProcessTime.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.SprintProcessTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.SprintProcessTime} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.SprintProcessTime.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.treeleaf.anydone.entities.ProcessTime.toObject, includeInstance),
    duration: jspb.Message.getFieldWithDefault(msg, 2, 0),
    category: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.SprintProcessTime}
 */
proto.treeleaf.anydone.entities.SprintProcessTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.SprintProcessTime;
  return proto.treeleaf.anydone.entities.SprintProcessTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.SprintProcessTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.SprintProcessTime}
 */
proto.treeleaf.anydone.entities.SprintProcessTime.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.ProcessTime;
      reader.readMessage(value,proto.treeleaf.anydone.entities.ProcessTime.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDuration(value);
      break;
    case 3:
      var value = /** @type {!proto.treeleaf.anydone.entities.StatusCategory} */ (reader.readEnum());
      msg.setCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.SprintProcessTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.SprintProcessTime.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.SprintProcessTime} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.SprintProcessTime.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.ProcessTime.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * repeated ProcessTime data = 1;
 * @return {!Array<!proto.treeleaf.anydone.entities.ProcessTime>}
 */
proto.treeleaf.anydone.entities.SprintProcessTime.prototype.getDataList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.ProcessTime>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.ProcessTime, 1));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.ProcessTime>} value
 * @return {!proto.treeleaf.anydone.entities.SprintProcessTime} returns this
*/
proto.treeleaf.anydone.entities.SprintProcessTime.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.ProcessTime=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.ProcessTime}
 */
proto.treeleaf.anydone.entities.SprintProcessTime.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.treeleaf.anydone.entities.ProcessTime, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.SprintProcessTime} returns this
 */
proto.treeleaf.anydone.entities.SprintProcessTime.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional int64 duration = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.SprintProcessTime.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.SprintProcessTime} returns this
 */
proto.treeleaf.anydone.entities.SprintProcessTime.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional StatusCategory category = 3;
 * @return {!proto.treeleaf.anydone.entities.StatusCategory}
 */
proto.treeleaf.anydone.entities.SprintProcessTime.prototype.getCategory = function() {
  return /** @type {!proto.treeleaf.anydone.entities.StatusCategory} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.StatusCategory} value
 * @return {!proto.treeleaf.anydone.entities.SprintProcessTime} returns this
 */
proto.treeleaf.anydone.entities.SprintProcessTime.prototype.setCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.ProcessTime.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.ProcessTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.ProcessTime} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ProcessTime.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    duration: jspb.Message.getFieldWithDefault(msg, 3, 0),
    humanreadableduration: jspb.Message.getFieldWithDefault(msg, 4, ""),
    totalticket: jspb.Message.getFieldWithDefault(msg, 5, 0),
    avgduration: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    humanreadbleavgduration: jspb.Message.getFieldWithDefault(msg, 7, ""),
    durationspent: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.ProcessTime}
 */
proto.treeleaf.anydone.entities.ProcessTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.ProcessTime;
  return proto.treeleaf.anydone.entities.ProcessTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.ProcessTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.ProcessTime}
 */
proto.treeleaf.anydone.entities.ProcessTime.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDuration(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHumanreadableduration(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalticket(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAvgduration(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setHumanreadbleavgduration(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDurationspent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.ProcessTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.ProcessTime.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.ProcessTime} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ProcessTime.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getHumanreadableduration();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTotalticket();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getAvgduration();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getHumanreadbleavgduration();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDurationspent();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ProcessTime.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ProcessTime} returns this
 */
proto.treeleaf.anydone.entities.ProcessTime.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ProcessTime.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ProcessTime} returns this
 */
proto.treeleaf.anydone.entities.ProcessTime.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 duration = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ProcessTime.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ProcessTime} returns this
 */
proto.treeleaf.anydone.entities.ProcessTime.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string humanReadableDuration = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ProcessTime.prototype.getHumanreadableduration = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ProcessTime} returns this
 */
proto.treeleaf.anydone.entities.ProcessTime.prototype.setHumanreadableduration = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 totalTicket = 5;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ProcessTime.prototype.getTotalticket = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ProcessTime} returns this
 */
proto.treeleaf.anydone.entities.ProcessTime.prototype.setTotalticket = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional double avgDuration = 6;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ProcessTime.prototype.getAvgduration = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ProcessTime} returns this
 */
proto.treeleaf.anydone.entities.ProcessTime.prototype.setAvgduration = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional string humanReadbleAvgDuration = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ProcessTime.prototype.getHumanreadbleavgduration = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ProcessTime} returns this
 */
proto.treeleaf.anydone.entities.ProcessTime.prototype.setHumanreadbleavgduration = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional double durationSpent = 8;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ProcessTime.prototype.getDurationspent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ProcessTime} returns this
 */
proto.treeleaf.anydone.entities.ProcessTime.prototype.setDurationspent = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.AutoTicketCreateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.AutoTicketCreateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.AutoTicketCreateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AutoTicketCreateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    responsetype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    refid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.AutoTicketCreateResponse}
 */
proto.treeleaf.anydone.entities.AutoTicketCreateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.AutoTicketCreateResponse;
  return proto.treeleaf.anydone.entities.AutoTicketCreateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.AutoTicketCreateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.AutoTicketCreateResponse}
 */
proto.treeleaf.anydone.entities.AutoTicketCreateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.treeleaf.anydone.entities.AutoTicketCreateResponse.ResponseType} */ (reader.readEnum());
      msg.setResponsetype(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.AutoTicketCreateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.AutoTicketCreateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.AutoTicketCreateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AutoTicketCreateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponsetype();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.AutoTicketCreateResponse.ResponseType = {
  UNKNOWN_RESPONSE_TYPE: 0,
  TICKET_CREATED: 1,
  SUGGESTION_CREATED: 2
};

/**
 * optional ResponseType responseType = 1;
 * @return {!proto.treeleaf.anydone.entities.AutoTicketCreateResponse.ResponseType}
 */
proto.treeleaf.anydone.entities.AutoTicketCreateResponse.prototype.getResponsetype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.AutoTicketCreateResponse.ResponseType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.AutoTicketCreateResponse.ResponseType} value
 * @return {!proto.treeleaf.anydone.entities.AutoTicketCreateResponse} returns this
 */
proto.treeleaf.anydone.entities.AutoTicketCreateResponse.prototype.setResponsetype = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string refId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AutoTicketCreateResponse.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AutoTicketCreateResponse} returns this
 */
proto.treeleaf.anydone.entities.AutoTicketCreateResponse.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.TicketSource = {
  UNKNOWN_TICKET_SOURCE: 0,
  MANUAL_TICKET_SOURCE: 1,
  CALL_TICKET_SOURCE: 2,
  BOT_TICKET_SOURCE: 3,
  CONVERSATION_TICKET_SOURCE: 4
};

/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.TicketState = {
  UNKNOWN_TICKET_STATE: 0,
  TICKET_CREATED: 1,
  TICKET_STARTED: 2,
  TICKET_RESOLVED: 3,
  TICKET_CLOSED: 4,
  TICKET_REOPENED: 5,
  TICKET_PENDING: 6
};

/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.CustomerType = {
  UNKNOWN_CUSTOMER_TYPE: 0,
  ANYDONE_CONSUMER: 1,
  EXTERNAL_CUSTOMER: 2,
  ANYDONE_EMPLOYEE: 3,
  ANYDONE_SERVICE_PROVIDER: 4
};

/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.TicketPriority = {
  UNKNOWN_TICKET_PRIORITY: 0,
  LOWEST_TICKET_PRIORITY: 1,
  LOW_TICKET_PRIORITY: 2,
  MEDIUM_TICKET_PRIORITY: 3,
  HIGH_TICKET_PRIORITY: 4,
  HIGHEST_TICKET_PRIORITY: 5
};

/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.TicketCategory = {
  UNKNOWN_TICKET_CATEGORY: 0,
  THIRDPARTY_POST_TICKET_CATEGORY: 1,
  CONVERSATION_TICKET_CATEGORY: 2
};

/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.TicketStatResponseType = {
  UNKNOWN_RESPONSE_TYPE: 0,
  HOURLY_TICKET_STAT: 1,
  DAILY_TICKET_STAT: 2,
  MONTHLY_TICKET_STAT: 3
};

/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.TicketStepState = {
  UNKNOWN_TICKETSTEP_STATE: 0,
  TICKETSTEP_CREATED: 1,
  TICKETSTEP_RESOLVED: 2
};

/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.EventType = {
  UNKNOWN_TICKET_TYPE: 0,
  TICKET_TYPE: 1,
  SPRINT_TYPE: 2,
  BOARD_TYPE: 3,
  COLUMN_TYPE: 4
};

/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.TypeAction = {
  UNKNOWN_TYPEACTION: 0,
  CREATE_ACTION: 1,
  UPDATE_ACTION: 2,
  DELETE_ACTION: 3,
  COMPLETED_ACTION: 4,
  STARTED_ACTION: 5
};

goog.object.extend(exports, proto.treeleaf.anydone.entities);
