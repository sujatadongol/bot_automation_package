// source: rtc.proto
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
var treeleaf_pb = require('./treeleaf_pb.js');
goog.object.extend(proto, treeleaf_pb);
var user_pb = require('./user_pb.js');
goog.object.extend(proto, user_pb);
var signaling_pb = require('./signaling_pb.js');
goog.object.extend(proto, signaling_pb);
var nlu_pb = require('./nlu_pb.js');
goog.object.extend(proto, nlu_pb);
var bot_conversation_pb = require('./bot_conversation_pb.js');
goog.object.extend(proto, bot_conversation_pb);
var rtc_meta_pb = require('./rtc_meta_pb.js');
goog.object.extend(proto, rtc_meta_pb);
var integration_pb = require('./integration_pb.js');
goog.object.extend(proto, integration_pb);
var meet_signaling_pb = require('./meet_signaling_pb.js');
goog.object.extend(proto, meet_signaling_pb);
var reminder_pb = require('./reminder_pb.js');
goog.object.extend(proto, reminder_pb);
var commons_action_pb = require('./commons/action_pb.js');
goog.object.extend(proto, commons_action_pb);
goog.exportSymbol('proto.treeleaf.anydone.entities.AddPostCommentRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.AddPostCommentResponse', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.AttachmentMessage', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.AudioMessage', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.AudioVideoCallMessage', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.AudioVideoCallMessage.CallStatus', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.AutoReplyBot', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.CallRoomDetail', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.CodeMessage', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.DeleteMessageReq', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.DeletePostCommentRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.DeletedMsgResponse', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.GetCallLogRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.GetMessageByIdReq', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.GetMessageDetail', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.GetMessageRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.GetMessageRequest.MediaType', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.Image', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ImageMessage', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.LinkMessage', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.MessageActor', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.MessageDeliveredRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.MessageDeliveredResponse', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.MsgReceiver', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.PinnedMessageResponse', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.Reaction', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.RelayError', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.RelayRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.RelayRequest.RelayRequestType', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.RelayResponse', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.RelayResponse.RelayResponseType', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.RtcMessage', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.RtcMessage.BotProfile', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.RtcMessage.Mention', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.RtcMessage.Mention.MentionType', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.RtcMessage.ThirdPartyType', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.RtcMessageStatus', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.RtcMessageType', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.RtcRelayServerInfo', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.RtcRelayServerInfo.Status', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TextMessage', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TextMessage.TextMessageType', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ThirdPartyDetail', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.VideoMessage', null, global);
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
proto.treeleaf.anydone.entities.LinkMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.LinkMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.LinkMessage.displayName = 'proto.treeleaf.anydone.entities.LinkMessage';
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
proto.treeleaf.anydone.entities.VideoMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.VideoMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.VideoMessage.displayName = 'proto.treeleaf.anydone.entities.VideoMessage';
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
proto.treeleaf.anydone.entities.AudioMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.AudioMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.AudioMessage.displayName = 'proto.treeleaf.anydone.entities.AudioMessage';
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
proto.treeleaf.anydone.entities.Image = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.Image, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.Image.displayName = 'proto.treeleaf.anydone.entities.Image';
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
proto.treeleaf.anydone.entities.ImageMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.ImageMessage.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.ImageMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.ImageMessage.displayName = 'proto.treeleaf.anydone.entities.ImageMessage';
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
proto.treeleaf.anydone.entities.AttachmentMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.AttachmentMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.AttachmentMessage.displayName = 'proto.treeleaf.anydone.entities.AttachmentMessage';
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
proto.treeleaf.anydone.entities.AutoReplyBot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.AutoReplyBot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.AutoReplyBot.displayName = 'proto.treeleaf.anydone.entities.AutoReplyBot';
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
proto.treeleaf.anydone.entities.TextMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TextMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TextMessage.displayName = 'proto.treeleaf.anydone.entities.TextMessage';
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
proto.treeleaf.anydone.entities.AudioVideoCallMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.AudioVideoCallMessage.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.AudioVideoCallMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.AudioVideoCallMessage.displayName = 'proto.treeleaf.anydone.entities.AudioVideoCallMessage';
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
proto.treeleaf.anydone.entities.MsgReceiver = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.MsgReceiver, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.MsgReceiver.displayName = 'proto.treeleaf.anydone.entities.MsgReceiver';
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
proto.treeleaf.anydone.entities.Reaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.Reaction.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.Reaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.Reaction.displayName = 'proto.treeleaf.anydone.entities.Reaction';
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
proto.treeleaf.anydone.entities.CodeMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.CodeMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.CodeMessage.displayName = 'proto.treeleaf.anydone.entities.CodeMessage';
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
proto.treeleaf.anydone.entities.RtcMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.RtcMessage.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.RtcMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.RtcMessage.displayName = 'proto.treeleaf.anydone.entities.RtcMessage';
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
proto.treeleaf.anydone.entities.RtcMessage.BotProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.RtcMessage.BotProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.RtcMessage.BotProfile.displayName = 'proto.treeleaf.anydone.entities.RtcMessage.BotProfile';
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
proto.treeleaf.anydone.entities.RtcMessage.Mention = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.RtcMessage.Mention, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.RtcMessage.Mention.displayName = 'proto.treeleaf.anydone.entities.RtcMessage.Mention';
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
proto.treeleaf.anydone.entities.MessageDeliveredRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.MessageDeliveredRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.MessageDeliveredRequest.displayName = 'proto.treeleaf.anydone.entities.MessageDeliveredRequest';
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
proto.treeleaf.anydone.entities.MessageDeliveredResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.MessageDeliveredResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.MessageDeliveredResponse.displayName = 'proto.treeleaf.anydone.entities.MessageDeliveredResponse';
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
proto.treeleaf.anydone.entities.GetMessageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.GetMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.GetMessageRequest.displayName = 'proto.treeleaf.anydone.entities.GetMessageRequest';
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
proto.treeleaf.anydone.entities.GetCallLogRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.GetCallLogRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.GetCallLogRequest.displayName = 'proto.treeleaf.anydone.entities.GetCallLogRequest';
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
proto.treeleaf.anydone.entities.GetMessageDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.GetMessageDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.GetMessageDetail.displayName = 'proto.treeleaf.anydone.entities.GetMessageDetail';
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
proto.treeleaf.anydone.entities.DeleteMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.DeleteMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.DeleteMessageReq.displayName = 'proto.treeleaf.anydone.entities.DeleteMessageReq';
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
proto.treeleaf.anydone.entities.GetMessageByIdReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.GetMessageByIdReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.GetMessageByIdReq.displayName = 'proto.treeleaf.anydone.entities.GetMessageByIdReq';
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
proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq.displayName = 'proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq';
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
proto.treeleaf.anydone.entities.RelayRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.RelayRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.RelayRequest.displayName = 'proto.treeleaf.anydone.entities.RelayRequest';
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
proto.treeleaf.anydone.entities.ThirdPartyDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.ThirdPartyDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.ThirdPartyDetail.displayName = 'proto.treeleaf.anydone.entities.ThirdPartyDetail';
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
proto.treeleaf.anydone.entities.RelayError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.RelayError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.RelayError.displayName = 'proto.treeleaf.anydone.entities.RelayError';
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
proto.treeleaf.anydone.entities.DeletedMsgResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.DeletedMsgResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.DeletedMsgResponse.displayName = 'proto.treeleaf.anydone.entities.DeletedMsgResponse';
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
proto.treeleaf.anydone.entities.PinnedMessageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.PinnedMessageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.PinnedMessageResponse.displayName = 'proto.treeleaf.anydone.entities.PinnedMessageResponse';
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
proto.treeleaf.anydone.entities.DeletePostCommentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.DeletePostCommentRequest.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.DeletePostCommentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.DeletePostCommentRequest.displayName = 'proto.treeleaf.anydone.entities.DeletePostCommentRequest';
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
proto.treeleaf.anydone.entities.AddPostCommentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.AddPostCommentRequest.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.AddPostCommentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.AddPostCommentRequest.displayName = 'proto.treeleaf.anydone.entities.AddPostCommentRequest';
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
proto.treeleaf.anydone.entities.AddPostCommentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.AddPostCommentResponse.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.AddPostCommentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.AddPostCommentResponse.displayName = 'proto.treeleaf.anydone.entities.AddPostCommentResponse';
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
proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse.displayName = 'proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse';
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
proto.treeleaf.anydone.entities.RelayResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.RelayResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.RelayResponse.displayName = 'proto.treeleaf.anydone.entities.RelayResponse';
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
proto.treeleaf.anydone.entities.CallRoomDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.CallRoomDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.CallRoomDetail.displayName = 'proto.treeleaf.anydone.entities.CallRoomDetail';
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
proto.treeleaf.anydone.entities.RtcRelayServerInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.RtcRelayServerInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.RtcRelayServerInfo.displayName = 'proto.treeleaf.anydone.entities.RtcRelayServerInfo';
}



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
proto.treeleaf.anydone.entities.LinkMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.LinkMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.LinkMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.LinkMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    body: jspb.Message.getFieldWithDefault(msg, 3, ""),
    resolveddate: jspb.Message.getFieldWithDefault(msg, 4, 0),
    attachmentid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    image: jspb.Message.getFieldWithDefault(msg, 6, ""),
    message: jspb.Message.getFieldWithDefault(msg, 7, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.treeleaf.anydone.entities.LinkMessage}
 */
proto.treeleaf.anydone.entities.LinkMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.LinkMessage;
  return proto.treeleaf.anydone.entities.LinkMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.LinkMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.LinkMessage}
 */
proto.treeleaf.anydone.entities.LinkMessage.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBody(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setResolveddate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttachmentid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 8:
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
proto.treeleaf.anydone.entities.LinkMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.LinkMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.LinkMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.LinkMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getBody();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getResolveddate();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getAttachmentid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
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
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.LinkMessage.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.LinkMessage} returns this
 */
proto.treeleaf.anydone.entities.LinkMessage.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.LinkMessage.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.LinkMessage} returns this
 */
proto.treeleaf.anydone.entities.LinkMessage.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string body = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.LinkMessage.prototype.getBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.LinkMessage} returns this
 */
proto.treeleaf.anydone.entities.LinkMessage.prototype.setBody = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 resolvedDate = 4;
 * @return {number}
 */
proto.treeleaf.anydone.entities.LinkMessage.prototype.getResolveddate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.LinkMessage} returns this
 */
proto.treeleaf.anydone.entities.LinkMessage.prototype.setResolveddate = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string attachmentId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.LinkMessage.prototype.getAttachmentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.LinkMessage} returns this
 */
proto.treeleaf.anydone.entities.LinkMessage.prototype.setAttachmentid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string image = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.LinkMessage.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.LinkMessage} returns this
 */
proto.treeleaf.anydone.entities.LinkMessage.prototype.setImage = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string message = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.LinkMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.LinkMessage} returns this
 */
proto.treeleaf.anydone.entities.LinkMessage.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string refId = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.LinkMessage.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.LinkMessage} returns this
 */
proto.treeleaf.anydone.entities.LinkMessage.prototype.setRefid = function(value) {
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
proto.treeleaf.anydone.entities.VideoMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.VideoMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.VideoMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.VideoMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    thumbnailurl: jspb.Message.getFieldWithDefault(msg, 3, ""),
    attachmentid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    caption: jspb.Message.getFieldWithDefault(msg, 5, ""),
    size: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.treeleaf.anydone.entities.VideoMessage}
 */
proto.treeleaf.anydone.entities.VideoMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.VideoMessage;
  return proto.treeleaf.anydone.entities.VideoMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.VideoMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.VideoMessage}
 */
proto.treeleaf.anydone.entities.VideoMessage.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setThumbnailurl(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttachmentid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCaption(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
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
proto.treeleaf.anydone.entities.VideoMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.VideoMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.VideoMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.VideoMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getThumbnailurl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAttachmentid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCaption();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoMessage.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoMessage} returns this
 */
proto.treeleaf.anydone.entities.VideoMessage.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoMessage.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoMessage} returns this
 */
proto.treeleaf.anydone.entities.VideoMessage.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string thumbnailUrl = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoMessage.prototype.getThumbnailurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoMessage} returns this
 */
proto.treeleaf.anydone.entities.VideoMessage.prototype.setThumbnailurl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string attachmentId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoMessage.prototype.getAttachmentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoMessage} returns this
 */
proto.treeleaf.anydone.entities.VideoMessage.prototype.setAttachmentid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string caption = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoMessage.prototype.getCaption = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoMessage} returns this
 */
proto.treeleaf.anydone.entities.VideoMessage.prototype.setCaption = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 size = 6;
 * @return {number}
 */
proto.treeleaf.anydone.entities.VideoMessage.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.VideoMessage} returns this
 */
proto.treeleaf.anydone.entities.VideoMessage.prototype.setSize = function(value) {
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
proto.treeleaf.anydone.entities.AudioMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.AudioMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.AudioMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AudioMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    attachmentid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    caption: jspb.Message.getFieldWithDefault(msg, 4, ""),
    size: jspb.Message.getFieldWithDefault(msg, 5, 0),
    duration: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.treeleaf.anydone.entities.AudioMessage}
 */
proto.treeleaf.anydone.entities.AudioMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.AudioMessage;
  return proto.treeleaf.anydone.entities.AudioMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.AudioMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.AudioMessage}
 */
proto.treeleaf.anydone.entities.AudioMessage.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttachmentid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCaption(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 6:
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
proto.treeleaf.anydone.entities.AudioMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.AudioMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.AudioMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AudioMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getAttachmentid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCaption();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AudioMessage.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AudioMessage} returns this
 */
proto.treeleaf.anydone.entities.AudioMessage.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AudioMessage.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AudioMessage} returns this
 */
proto.treeleaf.anydone.entities.AudioMessage.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string attachmentId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AudioMessage.prototype.getAttachmentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AudioMessage} returns this
 */
proto.treeleaf.anydone.entities.AudioMessage.prototype.setAttachmentid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string caption = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AudioMessage.prototype.getCaption = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AudioMessage} returns this
 */
proto.treeleaf.anydone.entities.AudioMessage.prototype.setCaption = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 size = 5;
 * @return {number}
 */
proto.treeleaf.anydone.entities.AudioMessage.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.AudioMessage} returns this
 */
proto.treeleaf.anydone.entities.AudioMessage.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 duration = 6;
 * @return {number}
 */
proto.treeleaf.anydone.entities.AudioMessage.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.AudioMessage} returns this
 */
proto.treeleaf.anydone.entities.AudioMessage.prototype.setDuration = function(value) {
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
proto.treeleaf.anydone.entities.Image.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.Image.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.Image} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Image.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    thumbnailurl: jspb.Message.getFieldWithDefault(msg, 2, ""),
    attachmentid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    imagedata: msg.getImagedata_asB64()
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
 * @return {!proto.treeleaf.anydone.entities.Image}
 */
proto.treeleaf.anydone.entities.Image.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.Image;
  return proto.treeleaf.anydone.entities.Image.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.Image} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.Image}
 */
proto.treeleaf.anydone.entities.Image.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setThumbnailurl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttachmentid(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setImagedata(value);
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
proto.treeleaf.anydone.entities.Image.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.Image.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.Image} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Image.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getThumbnailurl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAttachmentid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getImagedata_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Image.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Image} returns this
 */
proto.treeleaf.anydone.entities.Image.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string thumbnailUrl = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Image.prototype.getThumbnailurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Image} returns this
 */
proto.treeleaf.anydone.entities.Image.prototype.setThumbnailurl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string attachmentId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Image.prototype.getAttachmentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Image} returns this
 */
proto.treeleaf.anydone.entities.Image.prototype.setAttachmentid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bytes imageData = 4;
 * @return {!(string|Uint8Array)}
 */
proto.treeleaf.anydone.entities.Image.prototype.getImagedata = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes imageData = 4;
 * This is a type-conversion wrapper around `getImagedata()`
 * @return {string}
 */
proto.treeleaf.anydone.entities.Image.prototype.getImagedata_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getImagedata()));
};


/**
 * optional bytes imageData = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getImagedata()`
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.Image.prototype.getImagedata_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getImagedata()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.treeleaf.anydone.entities.Image} returns this
 */
proto.treeleaf.anydone.entities.Image.prototype.setImagedata = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.ImageMessage.repeatedFields_ = [1];



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
proto.treeleaf.anydone.entities.ImageMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.ImageMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.ImageMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ImageMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    imagesList: jspb.Message.toObjectList(msg.getImagesList(),
    proto.treeleaf.anydone.entities.Image.toObject, includeInstance),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    caption: jspb.Message.getFieldWithDefault(msg, 3, ""),
    size: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.treeleaf.anydone.entities.ImageMessage}
 */
proto.treeleaf.anydone.entities.ImageMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.ImageMessage;
  return proto.treeleaf.anydone.entities.ImageMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.ImageMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.ImageMessage}
 */
proto.treeleaf.anydone.entities.ImageMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.Image;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Image.deserializeBinaryFromReader);
      msg.addImages(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCaption(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
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
proto.treeleaf.anydone.entities.ImageMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.ImageMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.ImageMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ImageMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.Image.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCaption();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * repeated Image images = 1;
 * @return {!Array<!proto.treeleaf.anydone.entities.Image>}
 */
proto.treeleaf.anydone.entities.ImageMessage.prototype.getImagesList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.Image>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.Image, 1));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.Image>} value
 * @return {!proto.treeleaf.anydone.entities.ImageMessage} returns this
*/
proto.treeleaf.anydone.entities.ImageMessage.prototype.setImagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.Image=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.Image}
 */
proto.treeleaf.anydone.entities.ImageMessage.prototype.addImages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.treeleaf.anydone.entities.Image, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.ImageMessage} returns this
 */
proto.treeleaf.anydone.entities.ImageMessage.prototype.clearImagesList = function() {
  return this.setImagesList([]);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ImageMessage.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ImageMessage} returns this
 */
proto.treeleaf.anydone.entities.ImageMessage.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string caption = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ImageMessage.prototype.getCaption = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ImageMessage} returns this
 */
proto.treeleaf.anydone.entities.ImageMessage.prototype.setCaption = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 size = 4;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ImageMessage.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ImageMessage} returns this
 */
proto.treeleaf.anydone.entities.ImageMessage.prototype.setSize = function(value) {
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
proto.treeleaf.anydone.entities.AttachmentMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.AttachmentMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.AttachmentMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AttachmentMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    attachmentid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    caption: jspb.Message.getFieldWithDefault(msg, 4, ""),
    size: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.treeleaf.anydone.entities.AttachmentMessage}
 */
proto.treeleaf.anydone.entities.AttachmentMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.AttachmentMessage;
  return proto.treeleaf.anydone.entities.AttachmentMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.AttachmentMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.AttachmentMessage}
 */
proto.treeleaf.anydone.entities.AttachmentMessage.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttachmentid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCaption(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
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
proto.treeleaf.anydone.entities.AttachmentMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.AttachmentMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.AttachmentMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AttachmentMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getAttachmentid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCaption();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AttachmentMessage.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AttachmentMessage} returns this
 */
proto.treeleaf.anydone.entities.AttachmentMessage.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AttachmentMessage.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AttachmentMessage} returns this
 */
proto.treeleaf.anydone.entities.AttachmentMessage.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string attachmentId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AttachmentMessage.prototype.getAttachmentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AttachmentMessage} returns this
 */
proto.treeleaf.anydone.entities.AttachmentMessage.prototype.setAttachmentid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string caption = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AttachmentMessage.prototype.getCaption = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AttachmentMessage} returns this
 */
proto.treeleaf.anydone.entities.AttachmentMessage.prototype.setCaption = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 size = 5;
 * @return {number}
 */
proto.treeleaf.anydone.entities.AttachmentMessage.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.AttachmentMessage} returns this
 */
proto.treeleaf.anydone.entities.AttachmentMessage.prototype.setSize = function(value) {
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
proto.treeleaf.anydone.entities.AutoReplyBot.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.AutoReplyBot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.AutoReplyBot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AutoReplyBot.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.treeleaf.anydone.entities.AutoReplyBot}
 */
proto.treeleaf.anydone.entities.AutoReplyBot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.AutoReplyBot;
  return proto.treeleaf.anydone.entities.AutoReplyBot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.AutoReplyBot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.AutoReplyBot}
 */
proto.treeleaf.anydone.entities.AutoReplyBot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.treeleaf.anydone.entities.AutoReplyBot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.AutoReplyBot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.AutoReplyBot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AutoReplyBot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AutoReplyBot.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AutoReplyBot} returns this
 */
proto.treeleaf.anydone.entities.AutoReplyBot.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.treeleaf.anydone.entities.TextMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TextMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TextMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TextMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, ""),
    textmessagetype: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.treeleaf.anydone.entities.TextMessage}
 */
proto.treeleaf.anydone.entities.TextMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TextMessage;
  return proto.treeleaf.anydone.entities.TextMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TextMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TextMessage}
 */
proto.treeleaf.anydone.entities.TextMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 2:
      var value = /** @type {!proto.treeleaf.anydone.entities.TextMessage.TextMessageType} */ (reader.readEnum());
      msg.setTextmessagetype(value);
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
proto.treeleaf.anydone.entities.TextMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TextMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TextMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TextMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTextmessagetype();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.TextMessage.TextMessageType = {
  TEXT_TYPE: 0,
  JSON_TYPE: 1
};

/**
 * optional string message = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TextMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TextMessage} returns this
 */
proto.treeleaf.anydone.entities.TextMessage.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TextMessageType textMessageType = 2;
 * @return {!proto.treeleaf.anydone.entities.TextMessage.TextMessageType}
 */
proto.treeleaf.anydone.entities.TextMessage.prototype.getTextmessagetype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.TextMessage.TextMessageType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.TextMessage.TextMessageType} value
 * @return {!proto.treeleaf.anydone.entities.TextMessage} returns this
 */
proto.treeleaf.anydone.entities.TextMessage.prototype.setTextmessagetype = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.repeatedFields_ = [9,10];



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
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.AudioVideoCallMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.AudioVideoCallMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sessionid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    duration: jspb.Message.getFieldWithDefault(msg, 3, 0),
    callid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    callrecording: jspb.Message.getFieldWithDefault(msg, 5, ""),
    roomid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    callerparticipantid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    callstatus: jspb.Message.getFieldWithDefault(msg, 8, 0),
    callparticipantsList: jspb.Message.toObjectList(msg.getCallparticipantsList(),
    signaling_pb.CallParticipant.toObject, includeInstance),
    calltransferredlogList: jspb.Message.toObjectList(msg.getCalltransferredlogList(),
    signaling_pb.CallTransferredLog.toObject, includeInstance),
    missed: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    joined: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    avapibaseurl: jspb.Message.getFieldWithDefault(msg, 13, ""),
    avapikey: jspb.Message.getFieldWithDefault(msg, 14, ""),
    callstartedat: jspb.Message.getFieldWithDefault(msg, 15, 0)
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
 * @return {!proto.treeleaf.anydone.entities.AudioVideoCallMessage}
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.AudioVideoCallMessage;
  return proto.treeleaf.anydone.entities.AudioVideoCallMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.AudioVideoCallMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.AudioVideoCallMessage}
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDuration(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallrecording(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallerparticipantid(value);
      break;
    case 8:
      var value = /** @type {!proto.treeleaf.anydone.entities.AudioVideoCallMessage.CallStatus} */ (reader.readEnum());
      msg.setCallstatus(value);
      break;
    case 9:
      var value = new signaling_pb.CallParticipant;
      reader.readMessage(value,signaling_pb.CallParticipant.deserializeBinaryFromReader);
      msg.addCallparticipants(value);
      break;
    case 10:
      var value = new signaling_pb.CallTransferredLog;
      reader.readMessage(value,signaling_pb.CallTransferredLog.deserializeBinaryFromReader);
      msg.addCalltransferredlog(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMissed(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setJoined(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvapibaseurl(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvapikey(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCallstartedat(value);
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
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.AudioVideoCallMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.AudioVideoCallMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getCallid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCallrecording();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCallerparticipantid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCallstatus();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getCallparticipantsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      signaling_pb.CallParticipant.serializeBinaryToWriter
    );
  }
  f = message.getCalltransferredlogList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      signaling_pb.CallTransferredLog.serializeBinaryToWriter
    );
  }
  f = message.getMissed();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getJoined();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getAvapibaseurl();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getAvapikey();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getCallstartedat();
  if (f !== 0) {
    writer.writeInt64(
      15,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.CallStatus = {
  ENDED: 0,
  STARTED: 1,
  DISCONNECTED: 2,
  CREATED: 3
};

/**
 * optional string title = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AudioVideoCallMessage} returns this
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string sessionId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.getSessionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AudioVideoCallMessage} returns this
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.setSessionid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 duration = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.AudioVideoCallMessage} returns this
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string callId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.getCallid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AudioVideoCallMessage} returns this
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.setCallid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string callRecording = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.getCallrecording = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AudioVideoCallMessage} returns this
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.setCallrecording = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string roomId = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AudioVideoCallMessage} returns this
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string callerParticipantId = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.getCallerparticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AudioVideoCallMessage} returns this
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.setCallerparticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional CallStatus callStatus = 8;
 * @return {!proto.treeleaf.anydone.entities.AudioVideoCallMessage.CallStatus}
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.getCallstatus = function() {
  return /** @type {!proto.treeleaf.anydone.entities.AudioVideoCallMessage.CallStatus} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.AudioVideoCallMessage.CallStatus} value
 * @return {!proto.treeleaf.anydone.entities.AudioVideoCallMessage} returns this
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.setCallstatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * repeated CallParticipant callParticipants = 9;
 * @return {!Array<!proto.treeleaf.anydone.entities.CallParticipant>}
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.getCallparticipantsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.CallParticipant>} */ (
    jspb.Message.getRepeatedWrapperField(this, signaling_pb.CallParticipant, 9));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.CallParticipant>} value
 * @return {!proto.treeleaf.anydone.entities.AudioVideoCallMessage} returns this
*/
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.setCallparticipantsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.CallParticipant=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.CallParticipant}
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.addCallparticipants = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.treeleaf.anydone.entities.CallParticipant, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.AudioVideoCallMessage} returns this
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.clearCallparticipantsList = function() {
  return this.setCallparticipantsList([]);
};


/**
 * repeated CallTransferredLog callTransferredLog = 10;
 * @return {!Array<!proto.treeleaf.anydone.entities.CallTransferredLog>}
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.getCalltransferredlogList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.CallTransferredLog>} */ (
    jspb.Message.getRepeatedWrapperField(this, signaling_pb.CallTransferredLog, 10));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.CallTransferredLog>} value
 * @return {!proto.treeleaf.anydone.entities.AudioVideoCallMessage} returns this
*/
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.setCalltransferredlogList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.CallTransferredLog=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.CallTransferredLog}
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.addCalltransferredlog = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.treeleaf.anydone.entities.CallTransferredLog, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.AudioVideoCallMessage} returns this
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.clearCalltransferredlogList = function() {
  return this.setCalltransferredlogList([]);
};


/**
 * optional bool missed = 11;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.getMissed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.AudioVideoCallMessage} returns this
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.setMissed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool joined = 12;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.getJoined = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.AudioVideoCallMessage} returns this
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.setJoined = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional string avApiBaseUrl = 13;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.getAvapibaseurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AudioVideoCallMessage} returns this
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.setAvapibaseurl = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string avApiKey = 14;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.getAvapikey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AudioVideoCallMessage} returns this
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.setAvapikey = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional int64 callStartedAt = 15;
 * @return {number}
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.getCallstartedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.AudioVideoCallMessage} returns this
 */
proto.treeleaf.anydone.entities.AudioVideoCallMessage.prototype.setCallstartedat = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
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
proto.treeleaf.anydone.entities.MsgReceiver.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.MsgReceiver.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.MsgReceiver} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.MsgReceiver.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    receiveractor: jspb.Message.getFieldWithDefault(msg, 2, 0),
    rtcmessagestatus: jspb.Message.getFieldWithDefault(msg, 3, 0),
    seenat: jspb.Message.getFieldWithDefault(msg, 4, 0),
    receiverid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    accountobj: (f = msg.getAccountobj()) && user_pb.Account.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.MsgReceiver}
 */
proto.treeleaf.anydone.entities.MsgReceiver.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.MsgReceiver;
  return proto.treeleaf.anydone.entities.MsgReceiver.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.MsgReceiver} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.MsgReceiver}
 */
proto.treeleaf.anydone.entities.MsgReceiver.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountid(value);
      break;
    case 2:
      var value = /** @type {!proto.treeleaf.anydone.entities.MessageActor} */ (reader.readEnum());
      msg.setReceiveractor(value);
      break;
    case 3:
      var value = /** @type {!proto.treeleaf.anydone.entities.RtcMessageStatus} */ (reader.readEnum());
      msg.setRtcmessagestatus(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSeenat(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReceiverid(value);
      break;
    case 6:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setAccountobj(value);
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
proto.treeleaf.anydone.entities.MsgReceiver.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.MsgReceiver.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.MsgReceiver} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.MsgReceiver.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReceiveractor();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getRtcmessagestatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getSeenat();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getReceiverid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAccountobj();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
};


/**
 * optional string accountId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MsgReceiver.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MsgReceiver} returns this
 */
proto.treeleaf.anydone.entities.MsgReceiver.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional MessageActor receiverActor = 2;
 * @return {!proto.treeleaf.anydone.entities.MessageActor}
 */
proto.treeleaf.anydone.entities.MsgReceiver.prototype.getReceiveractor = function() {
  return /** @type {!proto.treeleaf.anydone.entities.MessageActor} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.MessageActor} value
 * @return {!proto.treeleaf.anydone.entities.MsgReceiver} returns this
 */
proto.treeleaf.anydone.entities.MsgReceiver.prototype.setReceiveractor = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional RtcMessageStatus rtcMessageStatus = 3;
 * @return {!proto.treeleaf.anydone.entities.RtcMessageStatus}
 */
proto.treeleaf.anydone.entities.MsgReceiver.prototype.getRtcmessagestatus = function() {
  return /** @type {!proto.treeleaf.anydone.entities.RtcMessageStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.RtcMessageStatus} value
 * @return {!proto.treeleaf.anydone.entities.MsgReceiver} returns this
 */
proto.treeleaf.anydone.entities.MsgReceiver.prototype.setRtcmessagestatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int64 seenAt = 4;
 * @return {number}
 */
proto.treeleaf.anydone.entities.MsgReceiver.prototype.getSeenat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.MsgReceiver} returns this
 */
proto.treeleaf.anydone.entities.MsgReceiver.prototype.setSeenat = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string receiverId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MsgReceiver.prototype.getReceiverid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MsgReceiver} returns this
 */
proto.treeleaf.anydone.entities.MsgReceiver.prototype.setReceiverid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Account accountObj = 6;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.MsgReceiver.prototype.getAccountobj = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 6));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.MsgReceiver} returns this
*/
proto.treeleaf.anydone.entities.MsgReceiver.prototype.setAccountobj = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.MsgReceiver} returns this
 */
proto.treeleaf.anydone.entities.MsgReceiver.prototype.clearAccountobj = function() {
  return this.setAccountobj(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.MsgReceiver.prototype.hasAccountobj = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.Reaction.repeatedFields_ = [6,8];



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
proto.treeleaf.anydone.entities.Reaction.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.Reaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.Reaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Reaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    reactionid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parentmsgid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    reaction: jspb.Message.getFieldWithDefault(msg, 4, ""),
    account: (f = msg.getAccount()) && user_pb.Account.toObject(includeInstance, f),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    message: (f = msg.getMessage()) && proto.treeleaf.anydone.entities.RtcMessage.toObject(includeInstance, f),
    reactedbyList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    refid: jspb.Message.getFieldWithDefault(msg, 9, ""),
    savedat: jspb.Message.getFieldWithDefault(msg, 10, 0)
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
 * @return {!proto.treeleaf.anydone.entities.Reaction}
 */
proto.treeleaf.anydone.entities.Reaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.Reaction;
  return proto.treeleaf.anydone.entities.Reaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.Reaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.Reaction}
 */
proto.treeleaf.anydone.entities.Reaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReactionid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentmsgid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReaction(value);
      break;
    case 5:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 7:
      var value = new proto.treeleaf.anydone.entities.RtcMessage;
      reader.readMessage(value,proto.treeleaf.anydone.entities.RtcMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addReactedby(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSavedat(value);
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
proto.treeleaf.anydone.entities.Reaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.Reaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.Reaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Reaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReactionid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParentmsgid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getReaction();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.treeleaf.anydone.entities.RtcMessage.serializeBinaryToWriter
    );
  }
  f = message.getReactedbyList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getSavedat();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
};


/**
 * optional string reactionId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Reaction.prototype.getReactionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Reaction} returns this
 */
proto.treeleaf.anydone.entities.Reaction.prototype.setReactionid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string parentMsgId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Reaction.prototype.getParentmsgid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Reaction} returns this
 */
proto.treeleaf.anydone.entities.Reaction.prototype.setParentmsgid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string clientId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Reaction.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Reaction} returns this
 */
proto.treeleaf.anydone.entities.Reaction.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string reaction = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Reaction.prototype.getReaction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Reaction} returns this
 */
proto.treeleaf.anydone.entities.Reaction.prototype.setReaction = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Account account = 5;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.Reaction.prototype.getAccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 5));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.Reaction} returns this
*/
proto.treeleaf.anydone.entities.Reaction.prototype.setAccount = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.Reaction} returns this
 */
proto.treeleaf.anydone.entities.Reaction.prototype.clearAccount = function() {
  return this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Reaction.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated string recipients = 6;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.Reaction.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.Reaction} returns this
 */
proto.treeleaf.anydone.entities.Reaction.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.Reaction} returns this
 */
proto.treeleaf.anydone.entities.Reaction.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.Reaction} returns this
 */
proto.treeleaf.anydone.entities.Reaction.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional RtcMessage message = 7;
 * @return {?proto.treeleaf.anydone.entities.RtcMessage}
 */
proto.treeleaf.anydone.entities.Reaction.prototype.getMessage = function() {
  return /** @type{?proto.treeleaf.anydone.entities.RtcMessage} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.RtcMessage, 7));
};


/**
 * @param {?proto.treeleaf.anydone.entities.RtcMessage|undefined} value
 * @return {!proto.treeleaf.anydone.entities.Reaction} returns this
*/
proto.treeleaf.anydone.entities.Reaction.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.Reaction} returns this
 */
proto.treeleaf.anydone.entities.Reaction.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Reaction.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated string reactedBy = 8;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.Reaction.prototype.getReactedbyList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.Reaction} returns this
 */
proto.treeleaf.anydone.entities.Reaction.prototype.setReactedbyList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.Reaction} returns this
 */
proto.treeleaf.anydone.entities.Reaction.prototype.addReactedby = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.Reaction} returns this
 */
proto.treeleaf.anydone.entities.Reaction.prototype.clearReactedbyList = function() {
  return this.setReactedbyList([]);
};


/**
 * optional string refId = 9;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Reaction.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Reaction} returns this
 */
proto.treeleaf.anydone.entities.Reaction.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int64 savedAt = 10;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Reaction.prototype.getSavedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Reaction} returns this
 */
proto.treeleaf.anydone.entities.Reaction.prototype.setSavedat = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
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
proto.treeleaf.anydone.entities.CodeMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.CodeMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.CodeMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.CodeMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    codecaption: jspb.Message.getFieldWithDefault(msg, 1, ""),
    code: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.treeleaf.anydone.entities.CodeMessage}
 */
proto.treeleaf.anydone.entities.CodeMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.CodeMessage;
  return proto.treeleaf.anydone.entities.CodeMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.CodeMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.CodeMessage}
 */
proto.treeleaf.anydone.entities.CodeMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCodecaption(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
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
proto.treeleaf.anydone.entities.CodeMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.CodeMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.CodeMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.CodeMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCodecaption();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string codeCaption = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CodeMessage.prototype.getCodecaption = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CodeMessage} returns this
 */
proto.treeleaf.anydone.entities.CodeMessage.prototype.setCodecaption = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CodeMessage.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CodeMessage} returns this
 */
proto.treeleaf.anydone.entities.CodeMessage.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.RtcMessage.repeatedFields_ = [14,33,34,39,48,49,50,52];



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
proto.treeleaf.anydone.entities.RtcMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.RtcMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.RtcMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.RtcMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    senderaccountid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    senderactor: jspb.Message.getFieldWithDefault(msg, 3, 0),
    clientid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    text: (f = msg.getText()) && proto.treeleaf.anydone.entities.TextMessage.toObject(includeInstance, f),
    attachment: (f = msg.getAttachment()) && proto.treeleaf.anydone.entities.AttachmentMessage.toObject(includeInstance, f),
    image: (f = msg.getImage()) && proto.treeleaf.anydone.entities.ImageMessage.toObject(includeInstance, f),
    audio: (f = msg.getAudio()) && proto.treeleaf.anydone.entities.AudioMessage.toObject(includeInstance, f),
    video: (f = msg.getVideo()) && proto.treeleaf.anydone.entities.VideoMessage.toObject(includeInstance, f),
    link: (f = msg.getLink()) && proto.treeleaf.anydone.entities.LinkMessage.toObject(includeInstance, f),
    call: (f = msg.getCall()) && proto.treeleaf.anydone.entities.AudioVideoCallMessage.toObject(includeInstance, f),
    sentat: jspb.Message.getFieldWithDefault(msg, 12, 0),
    savedat: jspb.Message.getFieldWithDefault(msg, 13, 0),
    receiversList: jspb.Message.toObjectList(msg.getReceiversList(),
    proto.treeleaf.anydone.entities.MsgReceiver.toObject, includeInstance),
    parentmessageid: jspb.Message.getFieldWithDefault(msg, 15, ""),
    rtcmessagetype: jspb.Message.getFieldWithDefault(msg, 16, 0),
    refid: jspb.Message.getFieldWithDefault(msg, 17, ""),
    senderaccountobj: (f = msg.getSenderaccountobj()) && user_pb.Account.toObject(includeInstance, f),
    kgraphreply: (f = msg.getKgraphreply()) && nlu_pb.KGraphReply.toObject(includeInstance, f),
    timezone: jspb.Message.getFieldWithDefault(msg, 20, ""),
    context: jspb.Message.getFieldWithDefault(msg, 21, 0),
    serviceid: jspb.Message.getFieldWithDefault(msg, 22, ""),
    serviceprovideraccountid: jspb.Message.getFieldWithDefault(msg, 23, ""),
    defaultlabelid: jspb.Message.getFieldWithDefault(msg, 24, ""),
    language: jspb.Message.getFieldWithDefault(msg, 25, ""),
    msgattributeMap: (f = msg.getMsgattributeMap()) ? f.toObject(includeInstance, undefined) : [],
    conversationrequest: (f = msg.getConversationrequest()) && bot_conversation_pb.ConversationRequest.toObject(includeInstance, f),
    botprofile: (f = msg.getBotprofile()) && proto.treeleaf.anydone.entities.RtcMessage.BotProfile.toObject(includeInstance, f),
    kgraphresponse: (f = msg.getKgraphresponse()) && bot_conversation_pb.KGraphResponse.toObject(includeInstance, f),
    numberofreplies: jspb.Message.getFieldWithDefault(msg, 31, 0),
    hasmentions: jspb.Message.getBooleanFieldWithDefault(msg, 32, false),
    mentionList: jspb.Message.toObjectList(msg.getMentionList(),
    proto.treeleaf.anydone.entities.RtcMessage.Mention.toObject, includeInstance),
    repliesList: (f = jspb.Message.getRepeatedField(msg, 34)) == null ? undefined : f,
    source: jspb.Message.getFieldWithDefault(msg, 35, 0),
    scheduledat: jspb.Message.getFieldWithDefault(msg, 36, 0),
    customer: (f = msg.getCustomer()) && user_pb.Customer.toObject(includeInstance, f),
    isprivate: jspb.Message.getBooleanFieldWithDefault(msg, 38, false),
    reactionList: jspb.Message.toObjectList(msg.getReactionList(),
    proto.treeleaf.anydone.entities.Reaction.toObject, includeInstance),
    edited: jspb.Message.getBooleanFieldWithDefault(msg, 40, false),
    pinnedby: jspb.Message.getFieldWithDefault(msg, 41, ""),
    pinned: jspb.Message.getBooleanFieldWithDefault(msg, 42, false),
    refmessageid: jspb.Message.getFieldWithDefault(msg, 43, ""),
    pinnedat: jspb.Message.getFieldWithDefault(msg, 44, 0),
    pinnedbyaccount: (f = msg.getPinnedbyaccount()) && user_pb.Account.toObject(includeInstance, f),
    thirdpartytype: jspb.Message.getFieldWithDefault(msg, 46, 0),
    botid: jspb.Message.getFieldWithDefault(msg, 47, ""),
    guestsList: (f = jspb.Message.getRepeatedField(msg, 48)) == null ? undefined : f,
    codeList: jspb.Message.toObjectList(msg.getCodeList(),
    proto.treeleaf.anydone.entities.CodeMessage.toObject, includeInstance),
    replyreminderList: jspb.Message.toObjectList(msg.getReplyreminderList(),
    reminder_pb.ReplyReminder.toObject, includeInstance),
    updatedat: jspb.Message.getFieldWithDefault(msg, 51, 0),
    actionmessageList: jspb.Message.toObjectList(msg.getActionmessageList(),
    commons_action_pb.ActionMessage.toObject, includeInstance),
    autobotreply: (f = msg.getAutobotreply()) && proto.treeleaf.anydone.entities.AutoReplyBot.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.RtcMessage}
 */
proto.treeleaf.anydone.entities.RtcMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.RtcMessage;
  return proto.treeleaf.anydone.entities.RtcMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.RtcMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.RtcMessage}
 */
proto.treeleaf.anydone.entities.RtcMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderaccountid(value);
      break;
    case 3:
      var value = /** @type {!proto.treeleaf.anydone.entities.MessageActor} */ (reader.readEnum());
      msg.setSenderactor(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 5:
      var value = new proto.treeleaf.anydone.entities.TextMessage;
      reader.readMessage(value,proto.treeleaf.anydone.entities.TextMessage.deserializeBinaryFromReader);
      msg.setText(value);
      break;
    case 6:
      var value = new proto.treeleaf.anydone.entities.AttachmentMessage;
      reader.readMessage(value,proto.treeleaf.anydone.entities.AttachmentMessage.deserializeBinaryFromReader);
      msg.setAttachment(value);
      break;
    case 7:
      var value = new proto.treeleaf.anydone.entities.ImageMessage;
      reader.readMessage(value,proto.treeleaf.anydone.entities.ImageMessage.deserializeBinaryFromReader);
      msg.setImage(value);
      break;
    case 8:
      var value = new proto.treeleaf.anydone.entities.AudioMessage;
      reader.readMessage(value,proto.treeleaf.anydone.entities.AudioMessage.deserializeBinaryFromReader);
      msg.setAudio(value);
      break;
    case 9:
      var value = new proto.treeleaf.anydone.entities.VideoMessage;
      reader.readMessage(value,proto.treeleaf.anydone.entities.VideoMessage.deserializeBinaryFromReader);
      msg.setVideo(value);
      break;
    case 10:
      var value = new proto.treeleaf.anydone.entities.LinkMessage;
      reader.readMessage(value,proto.treeleaf.anydone.entities.LinkMessage.deserializeBinaryFromReader);
      msg.setLink(value);
      break;
    case 11:
      var value = new proto.treeleaf.anydone.entities.AudioVideoCallMessage;
      reader.readMessage(value,proto.treeleaf.anydone.entities.AudioVideoCallMessage.deserializeBinaryFromReader);
      msg.setCall(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSentat(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSavedat(value);
      break;
    case 14:
      var value = new proto.treeleaf.anydone.entities.MsgReceiver;
      reader.readMessage(value,proto.treeleaf.anydone.entities.MsgReceiver.deserializeBinaryFromReader);
      msg.addReceivers(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentmessageid(value);
      break;
    case 16:
      var value = /** @type {!proto.treeleaf.anydone.entities.RtcMessageType} */ (reader.readEnum());
      msg.setRtcmessagetype(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 18:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccountobj(value);
      break;
    case 19:
      var value = new nlu_pb.KGraphReply;
      reader.readMessage(value,nlu_pb.KGraphReply.deserializeBinaryFromReader);
      msg.setKgraphreply(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimezone(value);
      break;
    case 21:
      var value = /** @type {!proto.treeleaf.anydone.entities.ServiceContext} */ (reader.readEnum());
      msg.setContext(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceid(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceprovideraccountid(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultlabelid(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 26:
      var value = msg.getMsgattributeMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 27:
      var value = new bot_conversation_pb.ConversationRequest;
      reader.readMessage(value,bot_conversation_pb.ConversationRequest.deserializeBinaryFromReader);
      msg.setConversationrequest(value);
      break;
    case 29:
      var value = new proto.treeleaf.anydone.entities.RtcMessage.BotProfile;
      reader.readMessage(value,proto.treeleaf.anydone.entities.RtcMessage.BotProfile.deserializeBinaryFromReader);
      msg.setBotprofile(value);
      break;
    case 30:
      var value = new bot_conversation_pb.KGraphResponse;
      reader.readMessage(value,bot_conversation_pb.KGraphResponse.deserializeBinaryFromReader);
      msg.setKgraphresponse(value);
      break;
    case 31:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumberofreplies(value);
      break;
    case 32:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasmentions(value);
      break;
    case 33:
      var value = new proto.treeleaf.anydone.entities.RtcMessage.Mention;
      reader.readMessage(value,proto.treeleaf.anydone.entities.RtcMessage.Mention.deserializeBinaryFromReader);
      msg.addMention(value);
      break;
    case 34:
      var value = /** @type {string} */ (reader.readString());
      msg.addReplies(value);
      break;
    case 35:
      var value = /** @type {!proto.treeleaf.anydone.entities.IntegrationSource} */ (reader.readEnum());
      msg.setSource(value);
      break;
    case 36:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setScheduledat(value);
      break;
    case 37:
      var value = new user_pb.Customer;
      reader.readMessage(value,user_pb.Customer.deserializeBinaryFromReader);
      msg.setCustomer(value);
      break;
    case 38:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsprivate(value);
      break;
    case 39:
      var value = new proto.treeleaf.anydone.entities.Reaction;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Reaction.deserializeBinaryFromReader);
      msg.addReaction(value);
      break;
    case 40:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEdited(value);
      break;
    case 41:
      var value = /** @type {string} */ (reader.readString());
      msg.setPinnedby(value);
      break;
    case 42:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPinned(value);
      break;
    case 43:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefmessageid(value);
      break;
    case 44:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPinnedat(value);
      break;
    case 45:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setPinnedbyaccount(value);
      break;
    case 46:
      var value = /** @type {!proto.treeleaf.anydone.entities.RtcMessage.ThirdPartyType} */ (reader.readEnum());
      msg.setThirdpartytype(value);
      break;
    case 47:
      var value = /** @type {string} */ (reader.readString());
      msg.setBotid(value);
      break;
    case 48:
      var value = /** @type {string} */ (reader.readString());
      msg.addGuests(value);
      break;
    case 49:
      var value = new proto.treeleaf.anydone.entities.CodeMessage;
      reader.readMessage(value,proto.treeleaf.anydone.entities.CodeMessage.deserializeBinaryFromReader);
      msg.addCode(value);
      break;
    case 50:
      var value = new reminder_pb.ReplyReminder;
      reader.readMessage(value,reminder_pb.ReplyReminder.deserializeBinaryFromReader);
      msg.addReplyreminder(value);
      break;
    case 51:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedat(value);
      break;
    case 52:
      var value = new commons_action_pb.ActionMessage;
      reader.readMessage(value,commons_action_pb.ActionMessage.deserializeBinaryFromReader);
      msg.addActionmessage(value);
      break;
    case 53:
      var value = new proto.treeleaf.anydone.entities.AutoReplyBot;
      reader.readMessage(value,proto.treeleaf.anydone.entities.AutoReplyBot.deserializeBinaryFromReader);
      msg.setAutobotreply(value);
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
proto.treeleaf.anydone.entities.RtcMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.RtcMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.RtcMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.RtcMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRtcmessageid();
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
  f = message.getSenderactor();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getText();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.treeleaf.anydone.entities.TextMessage.serializeBinaryToWriter
    );
  }
  f = message.getAttachment();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.treeleaf.anydone.entities.AttachmentMessage.serializeBinaryToWriter
    );
  }
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.treeleaf.anydone.entities.ImageMessage.serializeBinaryToWriter
    );
  }
  f = message.getAudio();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.treeleaf.anydone.entities.AudioMessage.serializeBinaryToWriter
    );
  }
  f = message.getVideo();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.treeleaf.anydone.entities.VideoMessage.serializeBinaryToWriter
    );
  }
  f = message.getLink();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.treeleaf.anydone.entities.LinkMessage.serializeBinaryToWriter
    );
  }
  f = message.getCall();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.treeleaf.anydone.entities.AudioVideoCallMessage.serializeBinaryToWriter
    );
  }
  f = message.getSentat();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getSavedat();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getReceiversList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.treeleaf.anydone.entities.MsgReceiver.serializeBinaryToWriter
    );
  }
  f = message.getParentmessageid();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getRtcmessagetype();
  if (f !== 0.0) {
    writer.writeEnum(
      16,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getSenderaccountobj();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getKgraphreply();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      nlu_pb.KGraphReply.serializeBinaryToWriter
    );
  }
  f = message.getTimezone();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getContext();
  if (f !== 0.0) {
    writer.writeEnum(
      21,
      f
    );
  }
  f = message.getServiceid();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getServiceprovideraccountid();
  if (f.length > 0) {
    writer.writeString(
      23,
      f
    );
  }
  f = message.getDefaultlabelid();
  if (f.length > 0) {
    writer.writeString(
      24,
      f
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getMsgattributeMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(26, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getConversationrequest();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      bot_conversation_pb.ConversationRequest.serializeBinaryToWriter
    );
  }
  f = message.getBotprofile();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto.treeleaf.anydone.entities.RtcMessage.BotProfile.serializeBinaryToWriter
    );
  }
  f = message.getKgraphresponse();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      bot_conversation_pb.KGraphResponse.serializeBinaryToWriter
    );
  }
  f = message.getNumberofreplies();
  if (f !== 0) {
    writer.writeInt64(
      31,
      f
    );
  }
  f = message.getHasmentions();
  if (f) {
    writer.writeBool(
      32,
      f
    );
  }
  f = message.getMentionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      33,
      f,
      proto.treeleaf.anydone.entities.RtcMessage.Mention.serializeBinaryToWriter
    );
  }
  f = message.getRepliesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      34,
      f
    );
  }
  f = message.getSource();
  if (f !== 0.0) {
    writer.writeEnum(
      35,
      f
    );
  }
  f = message.getScheduledat();
  if (f !== 0) {
    writer.writeInt64(
      36,
      f
    );
  }
  f = message.getCustomer();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      user_pb.Customer.serializeBinaryToWriter
    );
  }
  f = message.getIsprivate();
  if (f) {
    writer.writeBool(
      38,
      f
    );
  }
  f = message.getReactionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      39,
      f,
      proto.treeleaf.anydone.entities.Reaction.serializeBinaryToWriter
    );
  }
  f = message.getEdited();
  if (f) {
    writer.writeBool(
      40,
      f
    );
  }
  f = message.getPinnedby();
  if (f.length > 0) {
    writer.writeString(
      41,
      f
    );
  }
  f = message.getPinned();
  if (f) {
    writer.writeBool(
      42,
      f
    );
  }
  f = message.getRefmessageid();
  if (f.length > 0) {
    writer.writeString(
      43,
      f
    );
  }
  f = message.getPinnedat();
  if (f !== 0) {
    writer.writeInt64(
      44,
      f
    );
  }
  f = message.getPinnedbyaccount();
  if (f != null) {
    writer.writeMessage(
      45,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getThirdpartytype();
  if (f !== 0.0) {
    writer.writeEnum(
      46,
      f
    );
  }
  f = message.getBotid();
  if (f.length > 0) {
    writer.writeString(
      47,
      f
    );
  }
  f = message.getGuestsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      48,
      f
    );
  }
  f = message.getCodeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      49,
      f,
      proto.treeleaf.anydone.entities.CodeMessage.serializeBinaryToWriter
    );
  }
  f = message.getReplyreminderList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      50,
      f,
      reminder_pb.ReplyReminder.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      51,
      f
    );
  }
  f = message.getActionmessageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      52,
      f,
      commons_action_pb.ActionMessage.serializeBinaryToWriter
    );
  }
  f = message.getAutobotreply();
  if (f != null) {
    writer.writeMessage(
      53,
      f,
      proto.treeleaf.anydone.entities.AutoReplyBot.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.RtcMessage.ThirdPartyType = {
  UNKNOWN_THIRDPARTY_TYPE: 0,
  THIRDPARTY_MESSAGE_TYPE: 1,
  THIRDPARTY_POST_TYPE: 2
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
proto.treeleaf.anydone.entities.RtcMessage.BotProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.RtcMessage.BotProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.RtcMessage.BotProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.RtcMessage.BotProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    image: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.treeleaf.anydone.entities.RtcMessage.BotProfile}
 */
proto.treeleaf.anydone.entities.RtcMessage.BotProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.RtcMessage.BotProfile;
  return proto.treeleaf.anydone.entities.RtcMessage.BotProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.RtcMessage.BotProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.RtcMessage.BotProfile}
 */
proto.treeleaf.anydone.entities.RtcMessage.BotProfile.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
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
proto.treeleaf.anydone.entities.RtcMessage.BotProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.RtcMessage.BotProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.RtcMessage.BotProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.RtcMessage.BotProfile.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RtcMessage.BotProfile.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage.BotProfile} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.BotProfile.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RtcMessage.BotProfile.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage.BotProfile} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.BotProfile.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string image = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RtcMessage.BotProfile.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage.BotProfile} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.BotProfile.prototype.setImage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.treeleaf.anydone.entities.RtcMessage.Mention.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.RtcMessage.Mention.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.RtcMessage.Mention} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.RtcMessage.Mention.toObject = function(includeInstance, msg) {
  var f, obj = {
    mentionid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accounttype: jspb.Message.getFieldWithDefault(msg, 2, 0),
    userid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    fullname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    profilepicture: jspb.Message.getFieldWithDefault(msg, 5, ""),
    mentiontype: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.treeleaf.anydone.entities.RtcMessage.Mention}
 */
proto.treeleaf.anydone.entities.RtcMessage.Mention.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.RtcMessage.Mention;
  return proto.treeleaf.anydone.entities.RtcMessage.Mention.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.RtcMessage.Mention} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.RtcMessage.Mention}
 */
proto.treeleaf.anydone.entities.RtcMessage.Mention.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMentionid(value);
      break;
    case 2:
      var value = /** @type {!proto.treeleaf.anydone.entities.AccountType} */ (reader.readEnum());
      msg.setAccounttype(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFullname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfilepicture(value);
      break;
    case 6:
      var value = /** @type {!proto.treeleaf.anydone.entities.RtcMessage.Mention.MentionType} */ (reader.readEnum());
      msg.setMentiontype(value);
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
proto.treeleaf.anydone.entities.RtcMessage.Mention.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.RtcMessage.Mention.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.RtcMessage.Mention} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.RtcMessage.Mention.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMentionid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccounttype();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFullname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getProfilepicture();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMentiontype();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.RtcMessage.Mention.MentionType = {
  UNKNOWN_MENTION: 0,
  USER_MENTION: 1,
  TICKET_MENTION: 2,
  MEETING_MENTION: 3,
  GROUP_METNION: 4,
  FILE_MENTION: 5,
  HERE_MENTION: 6,
  ALL_MENTION: 7
};

/**
 * optional string mentionId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RtcMessage.Mention.prototype.getMentionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage.Mention} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.Mention.prototype.setMentionid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AccountType accountType = 2;
 * @return {!proto.treeleaf.anydone.entities.AccountType}
 */
proto.treeleaf.anydone.entities.RtcMessage.Mention.prototype.getAccounttype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.AccountType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.AccountType} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage.Mention} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.Mention.prototype.setAccounttype = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string userId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RtcMessage.Mention.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage.Mention} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.Mention.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string fullName = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RtcMessage.Mention.prototype.getFullname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage.Mention} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.Mention.prototype.setFullname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string profilePicture = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RtcMessage.Mention.prototype.getProfilepicture = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage.Mention} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.Mention.prototype.setProfilepicture = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional MentionType mentionType = 6;
 * @return {!proto.treeleaf.anydone.entities.RtcMessage.Mention.MentionType}
 */
proto.treeleaf.anydone.entities.RtcMessage.Mention.prototype.getMentiontype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.RtcMessage.Mention.MentionType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.RtcMessage.Mention.MentionType} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage.Mention} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.Mention.prototype.setMentiontype = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string rtcMessageId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string senderAccountId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getSenderaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.setSenderaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional MessageActor senderActor = 3;
 * @return {!proto.treeleaf.anydone.entities.MessageActor}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getSenderactor = function() {
  return /** @type {!proto.treeleaf.anydone.entities.MessageActor} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.MessageActor} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.setSenderactor = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string clientId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional TextMessage text = 5;
 * @return {?proto.treeleaf.anydone.entities.TextMessage}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getText = function() {
  return /** @type{?proto.treeleaf.anydone.entities.TextMessage} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.TextMessage, 5));
};


/**
 * @param {?proto.treeleaf.anydone.entities.TextMessage|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
*/
proto.treeleaf.anydone.entities.RtcMessage.prototype.setText = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.clearText = function() {
  return this.setText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.hasText = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional AttachmentMessage attachment = 6;
 * @return {?proto.treeleaf.anydone.entities.AttachmentMessage}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getAttachment = function() {
  return /** @type{?proto.treeleaf.anydone.entities.AttachmentMessage} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.AttachmentMessage, 6));
};


/**
 * @param {?proto.treeleaf.anydone.entities.AttachmentMessage|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
*/
proto.treeleaf.anydone.entities.RtcMessage.prototype.setAttachment = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.clearAttachment = function() {
  return this.setAttachment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.hasAttachment = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ImageMessage image = 7;
 * @return {?proto.treeleaf.anydone.entities.ImageMessage}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getImage = function() {
  return /** @type{?proto.treeleaf.anydone.entities.ImageMessage} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.ImageMessage, 7));
};


/**
 * @param {?proto.treeleaf.anydone.entities.ImageMessage|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
*/
proto.treeleaf.anydone.entities.RtcMessage.prototype.setImage = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.clearImage = function() {
  return this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.hasImage = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional AudioMessage audio = 8;
 * @return {?proto.treeleaf.anydone.entities.AudioMessage}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getAudio = function() {
  return /** @type{?proto.treeleaf.anydone.entities.AudioMessage} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.AudioMessage, 8));
};


/**
 * @param {?proto.treeleaf.anydone.entities.AudioMessage|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
*/
proto.treeleaf.anydone.entities.RtcMessage.prototype.setAudio = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.clearAudio = function() {
  return this.setAudio(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.hasAudio = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional VideoMessage video = 9;
 * @return {?proto.treeleaf.anydone.entities.VideoMessage}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getVideo = function() {
  return /** @type{?proto.treeleaf.anydone.entities.VideoMessage} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.VideoMessage, 9));
};


/**
 * @param {?proto.treeleaf.anydone.entities.VideoMessage|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
*/
proto.treeleaf.anydone.entities.RtcMessage.prototype.setVideo = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.clearVideo = function() {
  return this.setVideo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.hasVideo = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional LinkMessage link = 10;
 * @return {?proto.treeleaf.anydone.entities.LinkMessage}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getLink = function() {
  return /** @type{?proto.treeleaf.anydone.entities.LinkMessage} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.LinkMessage, 10));
};


/**
 * @param {?proto.treeleaf.anydone.entities.LinkMessage|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
*/
proto.treeleaf.anydone.entities.RtcMessage.prototype.setLink = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.clearLink = function() {
  return this.setLink(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.hasLink = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional AudioVideoCallMessage call = 11;
 * @return {?proto.treeleaf.anydone.entities.AudioVideoCallMessage}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getCall = function() {
  return /** @type{?proto.treeleaf.anydone.entities.AudioVideoCallMessage} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.AudioVideoCallMessage, 11));
};


/**
 * @param {?proto.treeleaf.anydone.entities.AudioVideoCallMessage|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
*/
proto.treeleaf.anydone.entities.RtcMessage.prototype.setCall = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.clearCall = function() {
  return this.setCall(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.hasCall = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int64 sentAt = 12;
 * @return {number}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getSentat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.setSentat = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int64 savedAt = 13;
 * @return {number}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getSavedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.setSavedat = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * repeated MsgReceiver receivers = 14;
 * @return {!Array<!proto.treeleaf.anydone.entities.MsgReceiver>}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getReceiversList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.MsgReceiver>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.MsgReceiver, 14));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.MsgReceiver>} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
*/
proto.treeleaf.anydone.entities.RtcMessage.prototype.setReceiversList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.MsgReceiver=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.MsgReceiver}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.addReceivers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.treeleaf.anydone.entities.MsgReceiver, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.clearReceiversList = function() {
  return this.setReceiversList([]);
};


/**
 * optional string parentMessageId = 15;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getParentmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.setParentmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional RtcMessageType rtcMessageType = 16;
 * @return {!proto.treeleaf.anydone.entities.RtcMessageType}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getRtcmessagetype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.RtcMessageType} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.RtcMessageType} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.setRtcmessagetype = function(value) {
  return jspb.Message.setProto3EnumField(this, 16, value);
};


/**
 * optional string refId = 17;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional Account senderAccountObj = 18;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getSenderaccountobj = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 18));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
*/
proto.treeleaf.anydone.entities.RtcMessage.prototype.setSenderaccountobj = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.clearSenderaccountobj = function() {
  return this.setSenderaccountobj(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.hasSenderaccountobj = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional KGraphReply kGraphReply = 19;
 * @return {?proto.treeleaf.anydone.entities.KGraphReply}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getKgraphreply = function() {
  return /** @type{?proto.treeleaf.anydone.entities.KGraphReply} */ (
    jspb.Message.getWrapperField(this, nlu_pb.KGraphReply, 19));
};


/**
 * @param {?proto.treeleaf.anydone.entities.KGraphReply|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
*/
proto.treeleaf.anydone.entities.RtcMessage.prototype.setKgraphreply = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.clearKgraphreply = function() {
  return this.setKgraphreply(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.hasKgraphreply = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional string timezone = 20;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getTimezone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.setTimezone = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional ServiceContext context = 21;
 * @return {!proto.treeleaf.anydone.entities.ServiceContext}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getContext = function() {
  return /** @type {!proto.treeleaf.anydone.entities.ServiceContext} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.ServiceContext} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.setContext = function(value) {
  return jspb.Message.setProto3EnumField(this, 21, value);
};


/**
 * optional string serviceId = 22;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getServiceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.setServiceid = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional string serviceProviderAccountId = 23;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getServiceprovideraccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.setServiceprovideraccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 23, value);
};


/**
 * optional string defaultLabelId = 24;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getDefaultlabelid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.setDefaultlabelid = function(value) {
  return jspb.Message.setProto3StringField(this, 24, value);
};


/**
 * optional string language = 25;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * map<string, string> msgAttribute = 26;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getMsgattributeMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 26, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.clearMsgattributeMap = function() {
  this.getMsgattributeMap().clear();
  return this;};


/**
 * optional ConversationRequest conversationRequest = 27;
 * @return {?proto.treeleaf.anydone.entities.ConversationRequest}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getConversationrequest = function() {
  return /** @type{?proto.treeleaf.anydone.entities.ConversationRequest} */ (
    jspb.Message.getWrapperField(this, bot_conversation_pb.ConversationRequest, 27));
};


/**
 * @param {?proto.treeleaf.anydone.entities.ConversationRequest|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
*/
proto.treeleaf.anydone.entities.RtcMessage.prototype.setConversationrequest = function(value) {
  return jspb.Message.setWrapperField(this, 27, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.clearConversationrequest = function() {
  return this.setConversationrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.hasConversationrequest = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional BotProfile botProfile = 29;
 * @return {?proto.treeleaf.anydone.entities.RtcMessage.BotProfile}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getBotprofile = function() {
  return /** @type{?proto.treeleaf.anydone.entities.RtcMessage.BotProfile} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.RtcMessage.BotProfile, 29));
};


/**
 * @param {?proto.treeleaf.anydone.entities.RtcMessage.BotProfile|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
*/
proto.treeleaf.anydone.entities.RtcMessage.prototype.setBotprofile = function(value) {
  return jspb.Message.setWrapperField(this, 29, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.clearBotprofile = function() {
  return this.setBotprofile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.hasBotprofile = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional KGraphResponse kGraphResponse = 30;
 * @return {?proto.treeleaf.anydone.entities.KGraphResponse}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getKgraphresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.KGraphResponse} */ (
    jspb.Message.getWrapperField(this, bot_conversation_pb.KGraphResponse, 30));
};


/**
 * @param {?proto.treeleaf.anydone.entities.KGraphResponse|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
*/
proto.treeleaf.anydone.entities.RtcMessage.prototype.setKgraphresponse = function(value) {
  return jspb.Message.setWrapperField(this, 30, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.clearKgraphresponse = function() {
  return this.setKgraphresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.hasKgraphresponse = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional int64 numberOfReplies = 31;
 * @return {number}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getNumberofreplies = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 31, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.setNumberofreplies = function(value) {
  return jspb.Message.setProto3IntField(this, 31, value);
};


/**
 * optional bool hasMentions = 32;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getHasmentions = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 32, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.setHasmentions = function(value) {
  return jspb.Message.setProto3BooleanField(this, 32, value);
};


/**
 * repeated Mention mention = 33;
 * @return {!Array<!proto.treeleaf.anydone.entities.RtcMessage.Mention>}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getMentionList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.RtcMessage.Mention>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.RtcMessage.Mention, 33));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.RtcMessage.Mention>} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
*/
proto.treeleaf.anydone.entities.RtcMessage.prototype.setMentionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 33, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.RtcMessage.Mention=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.RtcMessage.Mention}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.addMention = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 33, opt_value, proto.treeleaf.anydone.entities.RtcMessage.Mention, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.clearMentionList = function() {
  return this.setMentionList([]);
};


/**
 * repeated string replies = 34;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getRepliesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 34));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.setRepliesList = function(value) {
  return jspb.Message.setField(this, 34, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.addReplies = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 34, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.clearRepliesList = function() {
  return this.setRepliesList([]);
};


/**
 * optional IntegrationSource source = 35;
 * @return {!proto.treeleaf.anydone.entities.IntegrationSource}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getSource = function() {
  return /** @type {!proto.treeleaf.anydone.entities.IntegrationSource} */ (jspb.Message.getFieldWithDefault(this, 35, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.IntegrationSource} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.setSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 35, value);
};


/**
 * optional int64 scheduledAt = 36;
 * @return {number}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getScheduledat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 36, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.setScheduledat = function(value) {
  return jspb.Message.setProto3IntField(this, 36, value);
};


/**
 * optional Customer customer = 37;
 * @return {?proto.treeleaf.anydone.entities.Customer}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getCustomer = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Customer} */ (
    jspb.Message.getWrapperField(this, user_pb.Customer, 37));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Customer|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
*/
proto.treeleaf.anydone.entities.RtcMessage.prototype.setCustomer = function(value) {
  return jspb.Message.setWrapperField(this, 37, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.clearCustomer = function() {
  return this.setCustomer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.hasCustomer = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * optional bool isPrivate = 38;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getIsprivate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 38, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.setIsprivate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 38, value);
};


/**
 * repeated Reaction reaction = 39;
 * @return {!Array<!proto.treeleaf.anydone.entities.Reaction>}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getReactionList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.Reaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.Reaction, 39));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.Reaction>} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
*/
proto.treeleaf.anydone.entities.RtcMessage.prototype.setReactionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 39, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.Reaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.Reaction}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.addReaction = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 39, opt_value, proto.treeleaf.anydone.entities.Reaction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.clearReactionList = function() {
  return this.setReactionList([]);
};


/**
 * optional bool edited = 40;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getEdited = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 40, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.setEdited = function(value) {
  return jspb.Message.setProto3BooleanField(this, 40, value);
};


/**
 * optional string pinnedBy = 41;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getPinnedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 41, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.setPinnedby = function(value) {
  return jspb.Message.setProto3StringField(this, 41, value);
};


/**
 * optional bool pinned = 42;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getPinned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 42, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.setPinned = function(value) {
  return jspb.Message.setProto3BooleanField(this, 42, value);
};


/**
 * optional string refMessageId = 43;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getRefmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 43, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.setRefmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 43, value);
};


/**
 * optional int64 pinnedAt = 44;
 * @return {number}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getPinnedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 44, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.setPinnedat = function(value) {
  return jspb.Message.setProto3IntField(this, 44, value);
};


/**
 * optional Account pinnedByAccount = 45;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getPinnedbyaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 45));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
*/
proto.treeleaf.anydone.entities.RtcMessage.prototype.setPinnedbyaccount = function(value) {
  return jspb.Message.setWrapperField(this, 45, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.clearPinnedbyaccount = function() {
  return this.setPinnedbyaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.hasPinnedbyaccount = function() {
  return jspb.Message.getField(this, 45) != null;
};


/**
 * optional ThirdPartyType thirdPartyType = 46;
 * @return {!proto.treeleaf.anydone.entities.RtcMessage.ThirdPartyType}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getThirdpartytype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.RtcMessage.ThirdPartyType} */ (jspb.Message.getFieldWithDefault(this, 46, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.RtcMessage.ThirdPartyType} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.setThirdpartytype = function(value) {
  return jspb.Message.setProto3EnumField(this, 46, value);
};


/**
 * optional string botId = 47;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getBotid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 47, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.setBotid = function(value) {
  return jspb.Message.setProto3StringField(this, 47, value);
};


/**
 * repeated string guests = 48;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getGuestsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 48));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.setGuestsList = function(value) {
  return jspb.Message.setField(this, 48, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.addGuests = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 48, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.clearGuestsList = function() {
  return this.setGuestsList([]);
};


/**
 * repeated CodeMessage code = 49;
 * @return {!Array<!proto.treeleaf.anydone.entities.CodeMessage>}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getCodeList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.CodeMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.CodeMessage, 49));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.CodeMessage>} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
*/
proto.treeleaf.anydone.entities.RtcMessage.prototype.setCodeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 49, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.CodeMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.CodeMessage}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.addCode = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 49, opt_value, proto.treeleaf.anydone.entities.CodeMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.clearCodeList = function() {
  return this.setCodeList([]);
};


/**
 * repeated ReplyReminder replyReminder = 50;
 * @return {!Array<!proto.treeleaf.anydone.entities.ReplyReminder>}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getReplyreminderList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.ReplyReminder>} */ (
    jspb.Message.getRepeatedWrapperField(this, reminder_pb.ReplyReminder, 50));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.ReplyReminder>} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
*/
proto.treeleaf.anydone.entities.RtcMessage.prototype.setReplyreminderList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 50, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.ReplyReminder=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.ReplyReminder}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.addReplyreminder = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 50, opt_value, proto.treeleaf.anydone.entities.ReplyReminder, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.clearReplyreminderList = function() {
  return this.setReplyreminderList([]);
};


/**
 * optional int64 updatedAt = 51;
 * @return {number}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 51, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 51, value);
};


/**
 * repeated ActionMessage actionMessage = 52;
 * @return {!Array<!proto.treeleaf.anydone.entities.ActionMessage>}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getActionmessageList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.ActionMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, commons_action_pb.ActionMessage, 52));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.ActionMessage>} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
*/
proto.treeleaf.anydone.entities.RtcMessage.prototype.setActionmessageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 52, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.ActionMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.ActionMessage}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.addActionmessage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 52, opt_value, proto.treeleaf.anydone.entities.ActionMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.clearActionmessageList = function() {
  return this.setActionmessageList([]);
};


/**
 * optional AutoReplyBot autoBotReply = 53;
 * @return {?proto.treeleaf.anydone.entities.AutoReplyBot}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.getAutobotreply = function() {
  return /** @type{?proto.treeleaf.anydone.entities.AutoReplyBot} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.AutoReplyBot, 53));
};


/**
 * @param {?proto.treeleaf.anydone.entities.AutoReplyBot|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
*/
proto.treeleaf.anydone.entities.RtcMessage.prototype.setAutobotreply = function(value) {
  return jspb.Message.setWrapperField(this, 53, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RtcMessage} returns this
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.clearAutobotreply = function() {
  return this.setAutobotreply(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RtcMessage.prototype.hasAutobotreply = function() {
  return jspb.Message.getField(this, 53) != null;
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
proto.treeleaf.anydone.entities.MessageDeliveredRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.MessageDeliveredRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.MessageDeliveredRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.MessageDeliveredRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    senderaccountid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 4, 0),
    refid: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.treeleaf.anydone.entities.MessageDeliveredRequest}
 */
proto.treeleaf.anydone.entities.MessageDeliveredRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.MessageDeliveredRequest;
  return proto.treeleaf.anydone.entities.MessageDeliveredRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.MessageDeliveredRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.MessageDeliveredRequest}
 */
proto.treeleaf.anydone.entities.MessageDeliveredRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderaccountid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 5:
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
proto.treeleaf.anydone.entities.MessageDeliveredRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.MessageDeliveredRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.MessageDeliveredRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.MessageDeliveredRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRtcmessageid();
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
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string rtcMessageId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MessageDeliveredRequest.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MessageDeliveredRequest} returns this
 */
proto.treeleaf.anydone.entities.MessageDeliveredRequest.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string senderAccountId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MessageDeliveredRequest.prototype.getSenderaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MessageDeliveredRequest} returns this
 */
proto.treeleaf.anydone.entities.MessageDeliveredRequest.prototype.setSenderaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string clientId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MessageDeliveredRequest.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MessageDeliveredRequest} returns this
 */
proto.treeleaf.anydone.entities.MessageDeliveredRequest.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 timestamp = 4;
 * @return {number}
 */
proto.treeleaf.anydone.entities.MessageDeliveredRequest.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.MessageDeliveredRequest} returns this
 */
proto.treeleaf.anydone.entities.MessageDeliveredRequest.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string refId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MessageDeliveredRequest.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MessageDeliveredRequest} returns this
 */
proto.treeleaf.anydone.entities.MessageDeliveredRequest.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.treeleaf.anydone.entities.MessageDeliveredResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.MessageDeliveredResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.MessageDeliveredResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.MessageDeliveredResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    senderaccountid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 4, 0),
    rtcmessage: (f = msg.getRtcmessage()) && proto.treeleaf.anydone.entities.RtcMessage.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.MessageDeliveredResponse}
 */
proto.treeleaf.anydone.entities.MessageDeliveredResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.MessageDeliveredResponse;
  return proto.treeleaf.anydone.entities.MessageDeliveredResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.MessageDeliveredResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.MessageDeliveredResponse}
 */
proto.treeleaf.anydone.entities.MessageDeliveredResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderaccountid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 5:
      var value = new proto.treeleaf.anydone.entities.RtcMessage;
      reader.readMessage(value,proto.treeleaf.anydone.entities.RtcMessage.deserializeBinaryFromReader);
      msg.setRtcmessage(value);
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
proto.treeleaf.anydone.entities.MessageDeliveredResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.MessageDeliveredResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.MessageDeliveredResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.MessageDeliveredResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRtcmessageid();
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
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getRtcmessage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.treeleaf.anydone.entities.RtcMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional string rtcMessageId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MessageDeliveredResponse.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MessageDeliveredResponse} returns this
 */
proto.treeleaf.anydone.entities.MessageDeliveredResponse.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string senderAccountId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MessageDeliveredResponse.prototype.getSenderaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MessageDeliveredResponse} returns this
 */
proto.treeleaf.anydone.entities.MessageDeliveredResponse.prototype.setSenderaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string clientId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MessageDeliveredResponse.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MessageDeliveredResponse} returns this
 */
proto.treeleaf.anydone.entities.MessageDeliveredResponse.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 timestamp = 4;
 * @return {number}
 */
proto.treeleaf.anydone.entities.MessageDeliveredResponse.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.MessageDeliveredResponse} returns this
 */
proto.treeleaf.anydone.entities.MessageDeliveredResponse.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional RtcMessage rtcMessage = 5;
 * @return {?proto.treeleaf.anydone.entities.RtcMessage}
 */
proto.treeleaf.anydone.entities.MessageDeliveredResponse.prototype.getRtcmessage = function() {
  return /** @type{?proto.treeleaf.anydone.entities.RtcMessage} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.RtcMessage, 5));
};


/**
 * @param {?proto.treeleaf.anydone.entities.RtcMessage|undefined} value
 * @return {!proto.treeleaf.anydone.entities.MessageDeliveredResponse} returns this
*/
proto.treeleaf.anydone.entities.MessageDeliveredResponse.prototype.setRtcmessage = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.MessageDeliveredResponse} returns this
 */
proto.treeleaf.anydone.entities.MessageDeliveredResponse.prototype.clearRtcmessage = function() {
  return this.setRtcmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.MessageDeliveredResponse.prototype.hasRtcmessage = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.treeleaf.anydone.entities.GetMessageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.GetMessageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.GetMessageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.GetMessageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    from: jspb.Message.getFieldWithDefault(msg, 1, 0),
    to: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pagesize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    refid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    context: jspb.Message.getFieldWithDefault(msg, 5, 0),
    sort: jspb.Message.getFieldWithDefault(msg, 6, 0),
    query: jspb.Message.getFieldWithDefault(msg, 7, ""),
    mediatype: jspb.Message.getFieldWithDefault(msg, 8, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 9, 0),
    clientid: jspb.Message.getFieldWithDefault(msg, 10, ""),
    senderaccountid: jspb.Message.getFieldWithDefault(msg, 11, "")
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
 * @return {!proto.treeleaf.anydone.entities.GetMessageRequest}
 */
proto.treeleaf.anydone.entities.GetMessageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.GetMessageRequest;
  return proto.treeleaf.anydone.entities.GetMessageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.GetMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.GetMessageRequest}
 */
proto.treeleaf.anydone.entities.GetMessageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFrom(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPagesize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 5:
      var value = /** @type {!proto.treeleaf.anydone.entities.ServiceContext} */ (reader.readEnum());
      msg.setContext(value);
      break;
    case 6:
      var value = /** @type {!proto.treeleaf.protos.Sort} */ (reader.readEnum());
      msg.setSort(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    case 8:
      var value = /** @type {!proto.treeleaf.anydone.entities.GetMessageRequest.MediaType} */ (reader.readEnum());
      msg.setMediatype(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOffset(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderaccountid(value);
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
proto.treeleaf.anydone.entities.GetMessageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.GetMessageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.GetMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.GetMessageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrom();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTo();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPagesize();
  if (f !== 0) {
    writer.writeInt64(
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
  f = message.getContext();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getSort();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMediatype();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getSenderaccountid();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.GetMessageRequest.MediaType = {
  UNKNOWN: 0,
  MEDIA: 1,
  FILES: 2,
  LINKS: 3
};

/**
 * optional int64 from = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.GetMessageRequest.prototype.getFrom = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.GetMessageRequest} returns this
 */
proto.treeleaf.anydone.entities.GetMessageRequest.prototype.setFrom = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 to = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.GetMessageRequest.prototype.getTo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.GetMessageRequest} returns this
 */
proto.treeleaf.anydone.entities.GetMessageRequest.prototype.setTo = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 pageSize = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.GetMessageRequest.prototype.getPagesize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.GetMessageRequest} returns this
 */
proto.treeleaf.anydone.entities.GetMessageRequest.prototype.setPagesize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string refId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.GetMessageRequest.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.GetMessageRequest} returns this
 */
proto.treeleaf.anydone.entities.GetMessageRequest.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional ServiceContext context = 5;
 * @return {!proto.treeleaf.anydone.entities.ServiceContext}
 */
proto.treeleaf.anydone.entities.GetMessageRequest.prototype.getContext = function() {
  return /** @type {!proto.treeleaf.anydone.entities.ServiceContext} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.ServiceContext} value
 * @return {!proto.treeleaf.anydone.entities.GetMessageRequest} returns this
 */
proto.treeleaf.anydone.entities.GetMessageRequest.prototype.setContext = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional treeleaf.protos.Sort sort = 6;
 * @return {!proto.treeleaf.protos.Sort}
 */
proto.treeleaf.anydone.entities.GetMessageRequest.prototype.getSort = function() {
  return /** @type {!proto.treeleaf.protos.Sort} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.treeleaf.protos.Sort} value
 * @return {!proto.treeleaf.anydone.entities.GetMessageRequest} returns this
 */
proto.treeleaf.anydone.entities.GetMessageRequest.prototype.setSort = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string query = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.GetMessageRequest.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.GetMessageRequest} returns this
 */
proto.treeleaf.anydone.entities.GetMessageRequest.prototype.setQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional MediaType mediaType = 8;
 * @return {!proto.treeleaf.anydone.entities.GetMessageRequest.MediaType}
 */
proto.treeleaf.anydone.entities.GetMessageRequest.prototype.getMediatype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.GetMessageRequest.MediaType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.GetMessageRequest.MediaType} value
 * @return {!proto.treeleaf.anydone.entities.GetMessageRequest} returns this
 */
proto.treeleaf.anydone.entities.GetMessageRequest.prototype.setMediatype = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional int64 offset = 9;
 * @return {number}
 */
proto.treeleaf.anydone.entities.GetMessageRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.GetMessageRequest} returns this
 */
proto.treeleaf.anydone.entities.GetMessageRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string clientId = 10;
 * @return {string}
 */
proto.treeleaf.anydone.entities.GetMessageRequest.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.GetMessageRequest} returns this
 */
proto.treeleaf.anydone.entities.GetMessageRequest.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string senderAccountId = 11;
 * @return {string}
 */
proto.treeleaf.anydone.entities.GetMessageRequest.prototype.getSenderaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.GetMessageRequest} returns this
 */
proto.treeleaf.anydone.entities.GetMessageRequest.prototype.setSenderaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
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
proto.treeleaf.anydone.entities.GetCallLogRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.GetCallLogRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.GetCallLogRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.GetCallLogRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    getmessagerequest: (f = msg.getGetmessagerequest()) && proto.treeleaf.anydone.entities.GetMessageRequest.toObject(includeInstance, f),
    serviceid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    context: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.treeleaf.anydone.entities.GetCallLogRequest}
 */
proto.treeleaf.anydone.entities.GetCallLogRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.GetCallLogRequest;
  return proto.treeleaf.anydone.entities.GetCallLogRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.GetCallLogRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.GetCallLogRequest}
 */
proto.treeleaf.anydone.entities.GetCallLogRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.GetMessageRequest;
      reader.readMessage(value,proto.treeleaf.anydone.entities.GetMessageRequest.deserializeBinaryFromReader);
      msg.setGetmessagerequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceid(value);
      break;
    case 3:
      var value = /** @type {!proto.treeleaf.anydone.entities.ServiceContext} */ (reader.readEnum());
      msg.setContext(value);
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
proto.treeleaf.anydone.entities.GetCallLogRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.GetCallLogRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.GetCallLogRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.GetCallLogRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGetmessagerequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.GetMessageRequest.serializeBinaryToWriter
    );
  }
  f = message.getServiceid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContext();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional GetMessageRequest getMessageRequest = 1;
 * @return {?proto.treeleaf.anydone.entities.GetMessageRequest}
 */
proto.treeleaf.anydone.entities.GetCallLogRequest.prototype.getGetmessagerequest = function() {
  return /** @type{?proto.treeleaf.anydone.entities.GetMessageRequest} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.GetMessageRequest, 1));
};


/**
 * @param {?proto.treeleaf.anydone.entities.GetMessageRequest|undefined} value
 * @return {!proto.treeleaf.anydone.entities.GetCallLogRequest} returns this
*/
proto.treeleaf.anydone.entities.GetCallLogRequest.prototype.setGetmessagerequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.GetCallLogRequest} returns this
 */
proto.treeleaf.anydone.entities.GetCallLogRequest.prototype.clearGetmessagerequest = function() {
  return this.setGetmessagerequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.GetCallLogRequest.prototype.hasGetmessagerequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string serviceId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.GetCallLogRequest.prototype.getServiceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.GetCallLogRequest} returns this
 */
proto.treeleaf.anydone.entities.GetCallLogRequest.prototype.setServiceid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ServiceContext context = 3;
 * @return {!proto.treeleaf.anydone.entities.ServiceContext}
 */
proto.treeleaf.anydone.entities.GetCallLogRequest.prototype.getContext = function() {
  return /** @type {!proto.treeleaf.anydone.entities.ServiceContext} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.ServiceContext} value
 * @return {!proto.treeleaf.anydone.entities.GetCallLogRequest} returns this
 */
proto.treeleaf.anydone.entities.GetCallLogRequest.prototype.setContext = function(value) {
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
proto.treeleaf.anydone.entities.GetMessageDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.GetMessageDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.GetMessageDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.GetMessageDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    refid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    messageid: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.treeleaf.anydone.entities.GetMessageDetail}
 */
proto.treeleaf.anydone.entities.GetMessageDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.GetMessageDetail;
  return proto.treeleaf.anydone.entities.GetMessageDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.GetMessageDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.GetMessageDetail}
 */
proto.treeleaf.anydone.entities.GetMessageDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageid(value);
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
proto.treeleaf.anydone.entities.GetMessageDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.GetMessageDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.GetMessageDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.GetMessageDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessageid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string refId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.GetMessageDetail.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.GetMessageDetail} returns this
 */
proto.treeleaf.anydone.entities.GetMessageDetail.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string messageId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.GetMessageDetail.prototype.getMessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.GetMessageDetail} returns this
 */
proto.treeleaf.anydone.entities.GetMessageDetail.prototype.setMessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.treeleaf.anydone.entities.DeleteMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.DeleteMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.DeleteMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DeleteMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    refid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    messageid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    senderaccountid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.treeleaf.anydone.entities.DeleteMessageReq}
 */
proto.treeleaf.anydone.entities.DeleteMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.DeleteMessageReq;
  return proto.treeleaf.anydone.entities.DeleteMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.DeleteMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.DeleteMessageReq}
 */
proto.treeleaf.anydone.entities.DeleteMessageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderaccountid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
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
proto.treeleaf.anydone.entities.DeleteMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.DeleteMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.DeleteMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DeleteMessageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessageid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSenderaccountid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string refId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DeleteMessageReq.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DeleteMessageReq} returns this
 */
proto.treeleaf.anydone.entities.DeleteMessageReq.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string messageId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DeleteMessageReq.prototype.getMessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DeleteMessageReq} returns this
 */
proto.treeleaf.anydone.entities.DeleteMessageReq.prototype.setMessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string senderAccountId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DeleteMessageReq.prototype.getSenderaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DeleteMessageReq} returns this
 */
proto.treeleaf.anydone.entities.DeleteMessageReq.prototype.setSenderaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string clientId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DeleteMessageReq.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DeleteMessageReq} returns this
 */
proto.treeleaf.anydone.entities.DeleteMessageReq.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.treeleaf.anydone.entities.GetMessageByIdReq.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.GetMessageByIdReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.GetMessageByIdReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.GetMessageByIdReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageid: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.treeleaf.anydone.entities.GetMessageByIdReq}
 */
proto.treeleaf.anydone.entities.GetMessageByIdReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.GetMessageByIdReq;
  return proto.treeleaf.anydone.entities.GetMessageByIdReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.GetMessageByIdReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.GetMessageByIdReq}
 */
proto.treeleaf.anydone.entities.GetMessageByIdReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageid(value);
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
proto.treeleaf.anydone.entities.GetMessageByIdReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.GetMessageByIdReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.GetMessageByIdReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.GetMessageByIdReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string messageId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.GetMessageByIdReq.prototype.getMessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.GetMessageByIdReq} returns this
 */
proto.treeleaf.anydone.entities.GetMessageByIdReq.prototype.setMessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    postid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    accountid: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq}
 */
proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq;
  return proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq}
 */
proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountid(value);
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
proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPostid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAccountid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string postId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq.prototype.getPostid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq} returns this
 */
proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq.prototype.setPostid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq} returns this
 */
proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string accountId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq} returns this
 */
proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.treeleaf.anydone.entities.RelayRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.RelayRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.RelayRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.RelayRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    relaytype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rtcmessage: (f = msg.getRtcmessage()) && proto.treeleaf.anydone.entities.RtcMessage.toObject(includeInstance, f),
    messagedeliveredrequest: (f = msg.getMessagedeliveredrequest()) && proto.treeleaf.anydone.entities.MessageDeliveredRequest.toObject(includeInstance, f),
    deletemessagereq: (f = msg.getDeletemessagereq()) && proto.treeleaf.anydone.entities.DeleteMessageReq.toObject(includeInstance, f),
    broadcastvideocall: (f = msg.getBroadcastvideocall()) && signaling_pb.BroadcastVideoCall.toObject(includeInstance, f),
    videocalljoinrequest: (f = msg.getVideocalljoinrequest()) && signaling_pb.VideoCallJoinRequest.toObject(includeInstance, f),
    videoroomhostleftrequest: (f = msg.getVideoroomhostleftrequest()) && signaling_pb.VideoRoomHostLeft.toObject(includeInstance, f),
    participantleftrequest: (f = msg.getParticipantleftrequest()) && signaling_pb.ParticipantLeft.toObject(includeInstance, f),
    startdrawrequest: (f = msg.getStartdrawrequest()) && signaling_pb.StartDraw.toObject(includeInstance, f),
    startdrawackrequest: (f = msg.getStartdrawackrequest()) && signaling_pb.StartDrawAcknowledgement.toObject(includeInstance, f),
    canceldrawrequest: (f = msg.getCanceldrawrequest()) && signaling_pb.CancelDrawing.toObject(includeInstance, f),
    context: jspb.Message.getFieldWithDefault(msg, 13, 0),
    receivenewtextfieldrequest: (f = msg.getReceivenewtextfieldrequest()) && signaling_pb.ReceiveNewTextField.toObject(includeInstance, f),
    textfieldchangerequest: (f = msg.getTextfieldchangerequest()) && signaling_pb.TextFieldChange.toObject(includeInstance, f),
    textfieldremoverequest: (f = msg.getTextfieldremoverequest()) && signaling_pb.TextFieldRemove.toObject(includeInstance, f),
    drawtouchdownrequest: (f = msg.getDrawtouchdownrequest()) && signaling_pb.DrawTouchDown.toObject(includeInstance, f),
    drawtouchmoverequest: (f = msg.getDrawtouchmoverequest()) && signaling_pb.DrawTouchMove.toObject(includeInstance, f),
    drawtouchuprequest: (f = msg.getDrawtouchuprequest()) && signaling_pb.DrawTouchUp.toObject(includeInstance, f),
    drawcanvasclearrequest: (f = msg.getDrawcanvasclearrequest()) && signaling_pb.DrawCanvasClear.toObject(includeInstance, f),
    drawmetadatachangerequest: (f = msg.getDrawmetadatachangerequest()) && signaling_pb.DrawMetaDataChange.toObject(includeInstance, f),
    drawminimizerequest: (f = msg.getDrawminimizerequest()) && signaling_pb.DrawMinize.toObject(includeInstance, f),
    drawmaximizereq: (f = msg.getDrawmaximizereq()) && signaling_pb.DrawMaximize.toObject(includeInstance, f),
    drawclosereq: (f = msg.getDrawclosereq()) && signaling_pb.DrawClose.toObject(includeInstance, f),
    drawcollabreq: (f = msg.getDrawcollabreq()) && signaling_pb.DrawCollab.toObject(includeInstance, f),
    drawcollabacknowledgement: (f = msg.getDrawcollabacknowledgement()) && signaling_pb.DrawCollabAcknowledgement.toObject(includeInstance, f),
    drawstartrequest: (f = msg.getDrawstartrequest()) && signaling_pb.DrawStart.toObject(includeInstance, f),
    drawendrequest: (f = msg.getDrawendrequest()) && signaling_pb.DrawEnd.toObject(includeInstance, f),
    mappingid: jspb.Message.getFieldWithDefault(msg, 29, ""),
    token: jspb.Message.getFieldWithDefault(msg, 30, ""),
    source: jspb.Message.getFieldWithDefault(msg, 31, 0),
    customer: (f = msg.getCustomer()) && user_pb.Customer.toObject(includeInstance, f),
    receivercalldeclinedrequest: (f = msg.getReceivercalldeclinedrequest()) && signaling_pb.ReceiverCallDeclined.toObject(includeInstance, f),
    pointer: (f = msg.getPointer()) && signaling_pb.PointerStart.toObject(includeInstance, f),
    maxdrawingexceed: (f = msg.getMaxdrawingexceed()) && signaling_pb.MaxDrawingExceed.toObject(includeInstance, f),
    thirdpartydetail: (f = msg.getThirdpartydetail()) && proto.treeleaf.anydone.entities.ThirdPartyDetail.toObject(includeInstance, f),
    addcallparticipant: (f = msg.getAddcallparticipant()) && signaling_pb.AddCallParticipant.toObject(includeInstance, f),
    calltransfer: (f = msg.getCalltransfer()) && signaling_pb.TransferCall.toObject(includeInstance, f),
    muteparticipant: (f = msg.getMuteparticipant()) && signaling_pb.MuteParticipant.toObject(includeInstance, f),
    callend: (f = msg.getCallend()) && signaling_pb.CallEnd.toObject(includeInstance, f),
    reaction: (f = msg.getReaction()) && proto.treeleaf.anydone.entities.Reaction.toObject(includeInstance, f),
    callaccepted: (f = msg.getCallaccepted()) && signaling_pb.CallAccepted.toObject(includeInstance, f),
    videotoggle: (f = msg.getVideotoggle()) && signaling_pb.VideoToggle.toObject(includeInstance, f),
    typingevent: (f = msg.getTypingevent()) && rtc_meta_pb.TypingEvent.toObject(includeInstance, f),
    deletepostcomment: (f = msg.getDeletepostcomment()) && proto.treeleaf.anydone.entities.DeletePostCommentRequest.toObject(includeInstance, f),
    addpostcomment: (f = msg.getAddpostcomment()) && proto.treeleaf.anydone.entities.AddPostCommentRequest.toObject(includeInstance, f),
    deletepost: (f = msg.getDeletepost()) && proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq.toObject(includeInstance, f),
    meetingjoinrequest: (f = msg.getMeetingjoinrequest()) && meet_signaling_pb.MeetingJoinRequest.toObject(includeInstance, f),
    meetingapprovalresponse: (f = msg.getMeetingapprovalresponse()) && meet_signaling_pb.MeetingApproveResponse.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.RelayRequest}
 */
proto.treeleaf.anydone.entities.RelayRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.RelayRequest;
  return proto.treeleaf.anydone.entities.RelayRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.RelayRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest}
 */
proto.treeleaf.anydone.entities.RelayRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.treeleaf.anydone.entities.RelayRequest.RelayRequestType} */ (reader.readEnum());
      msg.setRelaytype(value);
      break;
    case 2:
      var value = new proto.treeleaf.anydone.entities.RtcMessage;
      reader.readMessage(value,proto.treeleaf.anydone.entities.RtcMessage.deserializeBinaryFromReader);
      msg.setRtcmessage(value);
      break;
    case 3:
      var value = new proto.treeleaf.anydone.entities.MessageDeliveredRequest;
      reader.readMessage(value,proto.treeleaf.anydone.entities.MessageDeliveredRequest.deserializeBinaryFromReader);
      msg.setMessagedeliveredrequest(value);
      break;
    case 4:
      var value = new proto.treeleaf.anydone.entities.DeleteMessageReq;
      reader.readMessage(value,proto.treeleaf.anydone.entities.DeleteMessageReq.deserializeBinaryFromReader);
      msg.setDeletemessagereq(value);
      break;
    case 5:
      var value = new signaling_pb.BroadcastVideoCall;
      reader.readMessage(value,signaling_pb.BroadcastVideoCall.deserializeBinaryFromReader);
      msg.setBroadcastvideocall(value);
      break;
    case 7:
      var value = new signaling_pb.VideoCallJoinRequest;
      reader.readMessage(value,signaling_pb.VideoCallJoinRequest.deserializeBinaryFromReader);
      msg.setVideocalljoinrequest(value);
      break;
    case 8:
      var value = new signaling_pb.VideoRoomHostLeft;
      reader.readMessage(value,signaling_pb.VideoRoomHostLeft.deserializeBinaryFromReader);
      msg.setVideoroomhostleftrequest(value);
      break;
    case 9:
      var value = new signaling_pb.ParticipantLeft;
      reader.readMessage(value,signaling_pb.ParticipantLeft.deserializeBinaryFromReader);
      msg.setParticipantleftrequest(value);
      break;
    case 10:
      var value = new signaling_pb.StartDraw;
      reader.readMessage(value,signaling_pb.StartDraw.deserializeBinaryFromReader);
      msg.setStartdrawrequest(value);
      break;
    case 11:
      var value = new signaling_pb.StartDrawAcknowledgement;
      reader.readMessage(value,signaling_pb.StartDrawAcknowledgement.deserializeBinaryFromReader);
      msg.setStartdrawackrequest(value);
      break;
    case 12:
      var value = new signaling_pb.CancelDrawing;
      reader.readMessage(value,signaling_pb.CancelDrawing.deserializeBinaryFromReader);
      msg.setCanceldrawrequest(value);
      break;
    case 13:
      var value = /** @type {!proto.treeleaf.anydone.entities.ServiceContext} */ (reader.readEnum());
      msg.setContext(value);
      break;
    case 14:
      var value = new signaling_pb.ReceiveNewTextField;
      reader.readMessage(value,signaling_pb.ReceiveNewTextField.deserializeBinaryFromReader);
      msg.setReceivenewtextfieldrequest(value);
      break;
    case 15:
      var value = new signaling_pb.TextFieldChange;
      reader.readMessage(value,signaling_pb.TextFieldChange.deserializeBinaryFromReader);
      msg.setTextfieldchangerequest(value);
      break;
    case 16:
      var value = new signaling_pb.TextFieldRemove;
      reader.readMessage(value,signaling_pb.TextFieldRemove.deserializeBinaryFromReader);
      msg.setTextfieldremoverequest(value);
      break;
    case 17:
      var value = new signaling_pb.DrawTouchDown;
      reader.readMessage(value,signaling_pb.DrawTouchDown.deserializeBinaryFromReader);
      msg.setDrawtouchdownrequest(value);
      break;
    case 18:
      var value = new signaling_pb.DrawTouchMove;
      reader.readMessage(value,signaling_pb.DrawTouchMove.deserializeBinaryFromReader);
      msg.setDrawtouchmoverequest(value);
      break;
    case 19:
      var value = new signaling_pb.DrawTouchUp;
      reader.readMessage(value,signaling_pb.DrawTouchUp.deserializeBinaryFromReader);
      msg.setDrawtouchuprequest(value);
      break;
    case 20:
      var value = new signaling_pb.DrawCanvasClear;
      reader.readMessage(value,signaling_pb.DrawCanvasClear.deserializeBinaryFromReader);
      msg.setDrawcanvasclearrequest(value);
      break;
    case 21:
      var value = new signaling_pb.DrawMetaDataChange;
      reader.readMessage(value,signaling_pb.DrawMetaDataChange.deserializeBinaryFromReader);
      msg.setDrawmetadatachangerequest(value);
      break;
    case 22:
      var value = new signaling_pb.DrawMinize;
      reader.readMessage(value,signaling_pb.DrawMinize.deserializeBinaryFromReader);
      msg.setDrawminimizerequest(value);
      break;
    case 23:
      var value = new signaling_pb.DrawMaximize;
      reader.readMessage(value,signaling_pb.DrawMaximize.deserializeBinaryFromReader);
      msg.setDrawmaximizereq(value);
      break;
    case 24:
      var value = new signaling_pb.DrawClose;
      reader.readMessage(value,signaling_pb.DrawClose.deserializeBinaryFromReader);
      msg.setDrawclosereq(value);
      break;
    case 25:
      var value = new signaling_pb.DrawCollab;
      reader.readMessage(value,signaling_pb.DrawCollab.deserializeBinaryFromReader);
      msg.setDrawcollabreq(value);
      break;
    case 26:
      var value = new signaling_pb.DrawCollabAcknowledgement;
      reader.readMessage(value,signaling_pb.DrawCollabAcknowledgement.deserializeBinaryFromReader);
      msg.setDrawcollabacknowledgement(value);
      break;
    case 27:
      var value = new signaling_pb.DrawStart;
      reader.readMessage(value,signaling_pb.DrawStart.deserializeBinaryFromReader);
      msg.setDrawstartrequest(value);
      break;
    case 28:
      var value = new signaling_pb.DrawEnd;
      reader.readMessage(value,signaling_pb.DrawEnd.deserializeBinaryFromReader);
      msg.setDrawendrequest(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readString());
      msg.setMappingid(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 31:
      var value = /** @type {!proto.treeleaf.anydone.entities.ThirdPartySource} */ (reader.readEnum());
      msg.setSource(value);
      break;
    case 32:
      var value = new user_pb.Customer;
      reader.readMessage(value,user_pb.Customer.deserializeBinaryFromReader);
      msg.setCustomer(value);
      break;
    case 33:
      var value = new signaling_pb.ReceiverCallDeclined;
      reader.readMessage(value,signaling_pb.ReceiverCallDeclined.deserializeBinaryFromReader);
      msg.setReceivercalldeclinedrequest(value);
      break;
    case 34:
      var value = new signaling_pb.PointerStart;
      reader.readMessage(value,signaling_pb.PointerStart.deserializeBinaryFromReader);
      msg.setPointer(value);
      break;
    case 35:
      var value = new signaling_pb.MaxDrawingExceed;
      reader.readMessage(value,signaling_pb.MaxDrawingExceed.deserializeBinaryFromReader);
      msg.setMaxdrawingexceed(value);
      break;
    case 36:
      var value = new proto.treeleaf.anydone.entities.ThirdPartyDetail;
      reader.readMessage(value,proto.treeleaf.anydone.entities.ThirdPartyDetail.deserializeBinaryFromReader);
      msg.setThirdpartydetail(value);
      break;
    case 37:
      var value = new signaling_pb.AddCallParticipant;
      reader.readMessage(value,signaling_pb.AddCallParticipant.deserializeBinaryFromReader);
      msg.setAddcallparticipant(value);
      break;
    case 38:
      var value = new signaling_pb.TransferCall;
      reader.readMessage(value,signaling_pb.TransferCall.deserializeBinaryFromReader);
      msg.setCalltransfer(value);
      break;
    case 39:
      var value = new signaling_pb.MuteParticipant;
      reader.readMessage(value,signaling_pb.MuteParticipant.deserializeBinaryFromReader);
      msg.setMuteparticipant(value);
      break;
    case 40:
      var value = new signaling_pb.CallEnd;
      reader.readMessage(value,signaling_pb.CallEnd.deserializeBinaryFromReader);
      msg.setCallend(value);
      break;
    case 41:
      var value = new proto.treeleaf.anydone.entities.Reaction;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Reaction.deserializeBinaryFromReader);
      msg.setReaction(value);
      break;
    case 42:
      var value = new signaling_pb.CallAccepted;
      reader.readMessage(value,signaling_pb.CallAccepted.deserializeBinaryFromReader);
      msg.setCallaccepted(value);
      break;
    case 43:
      var value = new signaling_pb.VideoToggle;
      reader.readMessage(value,signaling_pb.VideoToggle.deserializeBinaryFromReader);
      msg.setVideotoggle(value);
      break;
    case 44:
      var value = new rtc_meta_pb.TypingEvent;
      reader.readMessage(value,rtc_meta_pb.TypingEvent.deserializeBinaryFromReader);
      msg.setTypingevent(value);
      break;
    case 45:
      var value = new proto.treeleaf.anydone.entities.DeletePostCommentRequest;
      reader.readMessage(value,proto.treeleaf.anydone.entities.DeletePostCommentRequest.deserializeBinaryFromReader);
      msg.setDeletepostcomment(value);
      break;
    case 48:
      var value = new proto.treeleaf.anydone.entities.AddPostCommentRequest;
      reader.readMessage(value,proto.treeleaf.anydone.entities.AddPostCommentRequest.deserializeBinaryFromReader);
      msg.setAddpostcomment(value);
      break;
    case 49:
      var value = new proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq;
      reader.readMessage(value,proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq.deserializeBinaryFromReader);
      msg.setDeletepost(value);
      break;
    case 50:
      var value = new meet_signaling_pb.MeetingJoinRequest;
      reader.readMessage(value,meet_signaling_pb.MeetingJoinRequest.deserializeBinaryFromReader);
      msg.setMeetingjoinrequest(value);
      break;
    case 51:
      var value = new meet_signaling_pb.MeetingApproveResponse;
      reader.readMessage(value,meet_signaling_pb.MeetingApproveResponse.deserializeBinaryFromReader);
      msg.setMeetingapprovalresponse(value);
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
proto.treeleaf.anydone.entities.RelayRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.RelayRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.RelayRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.RelayRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRelaytype();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getRtcmessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.treeleaf.anydone.entities.RtcMessage.serializeBinaryToWriter
    );
  }
  f = message.getMessagedeliveredrequest();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.treeleaf.anydone.entities.MessageDeliveredRequest.serializeBinaryToWriter
    );
  }
  f = message.getDeletemessagereq();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.treeleaf.anydone.entities.DeleteMessageReq.serializeBinaryToWriter
    );
  }
  f = message.getBroadcastvideocall();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      signaling_pb.BroadcastVideoCall.serializeBinaryToWriter
    );
  }
  f = message.getVideocalljoinrequest();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      signaling_pb.VideoCallJoinRequest.serializeBinaryToWriter
    );
  }
  f = message.getVideoroomhostleftrequest();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      signaling_pb.VideoRoomHostLeft.serializeBinaryToWriter
    );
  }
  f = message.getParticipantleftrequest();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      signaling_pb.ParticipantLeft.serializeBinaryToWriter
    );
  }
  f = message.getStartdrawrequest();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      signaling_pb.StartDraw.serializeBinaryToWriter
    );
  }
  f = message.getStartdrawackrequest();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      signaling_pb.StartDrawAcknowledgement.serializeBinaryToWriter
    );
  }
  f = message.getCanceldrawrequest();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      signaling_pb.CancelDrawing.serializeBinaryToWriter
    );
  }
  f = message.getContext();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = message.getReceivenewtextfieldrequest();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      signaling_pb.ReceiveNewTextField.serializeBinaryToWriter
    );
  }
  f = message.getTextfieldchangerequest();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      signaling_pb.TextFieldChange.serializeBinaryToWriter
    );
  }
  f = message.getTextfieldremoverequest();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      signaling_pb.TextFieldRemove.serializeBinaryToWriter
    );
  }
  f = message.getDrawtouchdownrequest();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      signaling_pb.DrawTouchDown.serializeBinaryToWriter
    );
  }
  f = message.getDrawtouchmoverequest();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      signaling_pb.DrawTouchMove.serializeBinaryToWriter
    );
  }
  f = message.getDrawtouchuprequest();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      signaling_pb.DrawTouchUp.serializeBinaryToWriter
    );
  }
  f = message.getDrawcanvasclearrequest();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      signaling_pb.DrawCanvasClear.serializeBinaryToWriter
    );
  }
  f = message.getDrawmetadatachangerequest();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      signaling_pb.DrawMetaDataChange.serializeBinaryToWriter
    );
  }
  f = message.getDrawminimizerequest();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      signaling_pb.DrawMinize.serializeBinaryToWriter
    );
  }
  f = message.getDrawmaximizereq();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      signaling_pb.DrawMaximize.serializeBinaryToWriter
    );
  }
  f = message.getDrawclosereq();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      signaling_pb.DrawClose.serializeBinaryToWriter
    );
  }
  f = message.getDrawcollabreq();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      signaling_pb.DrawCollab.serializeBinaryToWriter
    );
  }
  f = message.getDrawcollabacknowledgement();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      signaling_pb.DrawCollabAcknowledgement.serializeBinaryToWriter
    );
  }
  f = message.getDrawstartrequest();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      signaling_pb.DrawStart.serializeBinaryToWriter
    );
  }
  f = message.getDrawendrequest();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      signaling_pb.DrawEnd.serializeBinaryToWriter
    );
  }
  f = message.getMappingid();
  if (f.length > 0) {
    writer.writeString(
      29,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      30,
      f
    );
  }
  f = message.getSource();
  if (f !== 0.0) {
    writer.writeEnum(
      31,
      f
    );
  }
  f = message.getCustomer();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      user_pb.Customer.serializeBinaryToWriter
    );
  }
  f = message.getReceivercalldeclinedrequest();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      signaling_pb.ReceiverCallDeclined.serializeBinaryToWriter
    );
  }
  f = message.getPointer();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      signaling_pb.PointerStart.serializeBinaryToWriter
    );
  }
  f = message.getMaxdrawingexceed();
  if (f != null) {
    writer.writeMessage(
      35,
      f,
      signaling_pb.MaxDrawingExceed.serializeBinaryToWriter
    );
  }
  f = message.getThirdpartydetail();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      proto.treeleaf.anydone.entities.ThirdPartyDetail.serializeBinaryToWriter
    );
  }
  f = message.getAddcallparticipant();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      signaling_pb.AddCallParticipant.serializeBinaryToWriter
    );
  }
  f = message.getCalltransfer();
  if (f != null) {
    writer.writeMessage(
      38,
      f,
      signaling_pb.TransferCall.serializeBinaryToWriter
    );
  }
  f = message.getMuteparticipant();
  if (f != null) {
    writer.writeMessage(
      39,
      f,
      signaling_pb.MuteParticipant.serializeBinaryToWriter
    );
  }
  f = message.getCallend();
  if (f != null) {
    writer.writeMessage(
      40,
      f,
      signaling_pb.CallEnd.serializeBinaryToWriter
    );
  }
  f = message.getReaction();
  if (f != null) {
    writer.writeMessage(
      41,
      f,
      proto.treeleaf.anydone.entities.Reaction.serializeBinaryToWriter
    );
  }
  f = message.getCallaccepted();
  if (f != null) {
    writer.writeMessage(
      42,
      f,
      signaling_pb.CallAccepted.serializeBinaryToWriter
    );
  }
  f = message.getVideotoggle();
  if (f != null) {
    writer.writeMessage(
      43,
      f,
      signaling_pb.VideoToggle.serializeBinaryToWriter
    );
  }
  f = message.getTypingevent();
  if (f != null) {
    writer.writeMessage(
      44,
      f,
      rtc_meta_pb.TypingEvent.serializeBinaryToWriter
    );
  }
  f = message.getDeletepostcomment();
  if (f != null) {
    writer.writeMessage(
      45,
      f,
      proto.treeleaf.anydone.entities.DeletePostCommentRequest.serializeBinaryToWriter
    );
  }
  f = message.getAddpostcomment();
  if (f != null) {
    writer.writeMessage(
      48,
      f,
      proto.treeleaf.anydone.entities.AddPostCommentRequest.serializeBinaryToWriter
    );
  }
  f = message.getDeletepost();
  if (f != null) {
    writer.writeMessage(
      49,
      f,
      proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq.serializeBinaryToWriter
    );
  }
  f = message.getMeetingjoinrequest();
  if (f != null) {
    writer.writeMessage(
      50,
      f,
      meet_signaling_pb.MeetingJoinRequest.serializeBinaryToWriter
    );
  }
  f = message.getMeetingapprovalresponse();
  if (f != null) {
    writer.writeMessage(
      51,
      f,
      meet_signaling_pb.MeetingApproveResponse.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.RelayRequest.RelayRequestType = {
  NO_RELAY: 0,
  RTC_MESSAGE_RELAY: 1,
  DELIVERED_MSG_RELAY: 2,
  RTC_MESSAGE_DELETE: 4,
  VIDEO_CALL_BROADCAST: 5,
  VIDEO_CALL_JOIN_REQUEST: 7,
  VIDEO_ROOM_HOST_LEFT_REQUEST: 8,
  PARTICIPANT_LEFT_REQUEST: 9,
  IMAGE_CAPTURE_MESSAGE_REQUEST: 10,
  CAPTURE_IMAGE_RECEIVED_RESPONSE_REQUEST: 11,
  CANCEL_DRAWING_MESSAGE_REQUEST: 12,
  RECEIVE_NEW_TEXT_FIELD_REQUEST: 13,
  TEXT_FIELD_CHANGE_REQUEST: 14,
  TEXT_FIELD_REMOVE_REQUEST: 15,
  DRAW_TOUCH_DOWN_REQUEST: 16,
  DRAW_TOUCH_MOVE_REQUEST: 17,
  DRAW_TOUCH_UP_REQUEST: 18,
  DRAW_CANVAS_CLEAR_REQUEST: 19,
  DRAW_META_DATA_CHANGE_REQUEST: 20,
  DRAW_MINIMIZE_REQUEST: 21,
  DRAW_MAXIMIZE_REQUEST: 22,
  DRAW_CLOSE_REQUEST: 23,
  DRAW_COLLAB_REQUEST: 24,
  DRAW_COLLAB_ACKNOWLEDGEMENT_REQUEST: 25,
  DRAW_START_REQUEST: 26,
  DRAW_END_REQUEST: 27,
  RECEIVER_CALL_DECLINED_REQUEST: 28,
  POINTER_START_REQUEST: 29,
  MAX_DRAWING_EXCEED: 30,
  ADD_CALL_PARTICIPANT: 31,
  TRANSFER_CALL: 32,
  MUTE_PARTICIPANT: 33,
  CALL_END: 34,
  REACTION_MESSAGE: 35,
  CALL_ACCEPTED: 36,
  VIDEO_TOGGLE: 37,
  REACTION_DELETED_REQUEST: 38,
  TYPING_EVENT: 39,
  POST_COMMENT_DELETE: 40,
  POST_COMMENT_ADD: 41,
  POST_DELETE: 42,
  POST_COMMENT_RELAY: 43,
  MEET_JOIN_REQUEST: 44,
  MEET_APPROVAL_RESPONSE: 45
};

/**
 * optional RelayRequestType relayType = 1;
 * @return {!proto.treeleaf.anydone.entities.RelayRequest.RelayRequestType}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getRelaytype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.RelayRequest.RelayRequestType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.RelayRequest.RelayRequestType} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.setRelaytype = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional RtcMessage rtcMessage = 2;
 * @return {?proto.treeleaf.anydone.entities.RtcMessage}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getRtcmessage = function() {
  return /** @type{?proto.treeleaf.anydone.entities.RtcMessage} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.RtcMessage, 2));
};


/**
 * @param {?proto.treeleaf.anydone.entities.RtcMessage|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setRtcmessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearRtcmessage = function() {
  return this.setRtcmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasRtcmessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MessageDeliveredRequest messageDeliveredRequest = 3;
 * @return {?proto.treeleaf.anydone.entities.MessageDeliveredRequest}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getMessagedeliveredrequest = function() {
  return /** @type{?proto.treeleaf.anydone.entities.MessageDeliveredRequest} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.MessageDeliveredRequest, 3));
};


/**
 * @param {?proto.treeleaf.anydone.entities.MessageDeliveredRequest|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setMessagedeliveredrequest = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearMessagedeliveredrequest = function() {
  return this.setMessagedeliveredrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasMessagedeliveredrequest = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DeleteMessageReq deleteMessageReq = 4;
 * @return {?proto.treeleaf.anydone.entities.DeleteMessageReq}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getDeletemessagereq = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DeleteMessageReq} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.DeleteMessageReq, 4));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DeleteMessageReq|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setDeletemessagereq = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearDeletemessagereq = function() {
  return this.setDeletemessagereq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasDeletemessagereq = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional BroadcastVideoCall broadcastVideoCall = 5;
 * @return {?proto.treeleaf.anydone.entities.BroadcastVideoCall}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getBroadcastvideocall = function() {
  return /** @type{?proto.treeleaf.anydone.entities.BroadcastVideoCall} */ (
    jspb.Message.getWrapperField(this, signaling_pb.BroadcastVideoCall, 5));
};


/**
 * @param {?proto.treeleaf.anydone.entities.BroadcastVideoCall|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setBroadcastvideocall = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearBroadcastvideocall = function() {
  return this.setBroadcastvideocall(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasBroadcastvideocall = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional VideoCallJoinRequest videoCallJoinRequest = 7;
 * @return {?proto.treeleaf.anydone.entities.VideoCallJoinRequest}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getVideocalljoinrequest = function() {
  return /** @type{?proto.treeleaf.anydone.entities.VideoCallJoinRequest} */ (
    jspb.Message.getWrapperField(this, signaling_pb.VideoCallJoinRequest, 7));
};


/**
 * @param {?proto.treeleaf.anydone.entities.VideoCallJoinRequest|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setVideocalljoinrequest = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearVideocalljoinrequest = function() {
  return this.setVideocalljoinrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasVideocalljoinrequest = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional VideoRoomHostLeft videoRoomHostLeftRequest = 8;
 * @return {?proto.treeleaf.anydone.entities.VideoRoomHostLeft}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getVideoroomhostleftrequest = function() {
  return /** @type{?proto.treeleaf.anydone.entities.VideoRoomHostLeft} */ (
    jspb.Message.getWrapperField(this, signaling_pb.VideoRoomHostLeft, 8));
};


/**
 * @param {?proto.treeleaf.anydone.entities.VideoRoomHostLeft|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setVideoroomhostleftrequest = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearVideoroomhostleftrequest = function() {
  return this.setVideoroomhostleftrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasVideoroomhostleftrequest = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ParticipantLeft participantLeftRequest = 9;
 * @return {?proto.treeleaf.anydone.entities.ParticipantLeft}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getParticipantleftrequest = function() {
  return /** @type{?proto.treeleaf.anydone.entities.ParticipantLeft} */ (
    jspb.Message.getWrapperField(this, signaling_pb.ParticipantLeft, 9));
};


/**
 * @param {?proto.treeleaf.anydone.entities.ParticipantLeft|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setParticipantleftrequest = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearParticipantleftrequest = function() {
  return this.setParticipantleftrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasParticipantleftrequest = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional StartDraw startDrawRequest = 10;
 * @return {?proto.treeleaf.anydone.entities.StartDraw}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getStartdrawrequest = function() {
  return /** @type{?proto.treeleaf.anydone.entities.StartDraw} */ (
    jspb.Message.getWrapperField(this, signaling_pb.StartDraw, 10));
};


/**
 * @param {?proto.treeleaf.anydone.entities.StartDraw|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setStartdrawrequest = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearStartdrawrequest = function() {
  return this.setStartdrawrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasStartdrawrequest = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional StartDrawAcknowledgement startDrawAckRequest = 11;
 * @return {?proto.treeleaf.anydone.entities.StartDrawAcknowledgement}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getStartdrawackrequest = function() {
  return /** @type{?proto.treeleaf.anydone.entities.StartDrawAcknowledgement} */ (
    jspb.Message.getWrapperField(this, signaling_pb.StartDrawAcknowledgement, 11));
};


/**
 * @param {?proto.treeleaf.anydone.entities.StartDrawAcknowledgement|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setStartdrawackrequest = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearStartdrawackrequest = function() {
  return this.setStartdrawackrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasStartdrawackrequest = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional CancelDrawing cancelDrawRequest = 12;
 * @return {?proto.treeleaf.anydone.entities.CancelDrawing}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getCanceldrawrequest = function() {
  return /** @type{?proto.treeleaf.anydone.entities.CancelDrawing} */ (
    jspb.Message.getWrapperField(this, signaling_pb.CancelDrawing, 12));
};


/**
 * @param {?proto.treeleaf.anydone.entities.CancelDrawing|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setCanceldrawrequest = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearCanceldrawrequest = function() {
  return this.setCanceldrawrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasCanceldrawrequest = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional ServiceContext context = 13;
 * @return {!proto.treeleaf.anydone.entities.ServiceContext}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getContext = function() {
  return /** @type {!proto.treeleaf.anydone.entities.ServiceContext} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.ServiceContext} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.setContext = function(value) {
  return jspb.Message.setProto3EnumField(this, 13, value);
};


/**
 * optional ReceiveNewTextField receiveNewTextFieldRequest = 14;
 * @return {?proto.treeleaf.anydone.entities.ReceiveNewTextField}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getReceivenewtextfieldrequest = function() {
  return /** @type{?proto.treeleaf.anydone.entities.ReceiveNewTextField} */ (
    jspb.Message.getWrapperField(this, signaling_pb.ReceiveNewTextField, 14));
};


/**
 * @param {?proto.treeleaf.anydone.entities.ReceiveNewTextField|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setReceivenewtextfieldrequest = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearReceivenewtextfieldrequest = function() {
  return this.setReceivenewtextfieldrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasReceivenewtextfieldrequest = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional TextFieldChange textFieldChangeRequest = 15;
 * @return {?proto.treeleaf.anydone.entities.TextFieldChange}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getTextfieldchangerequest = function() {
  return /** @type{?proto.treeleaf.anydone.entities.TextFieldChange} */ (
    jspb.Message.getWrapperField(this, signaling_pb.TextFieldChange, 15));
};


/**
 * @param {?proto.treeleaf.anydone.entities.TextFieldChange|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setTextfieldchangerequest = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearTextfieldchangerequest = function() {
  return this.setTextfieldchangerequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasTextfieldchangerequest = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional TextFieldRemove textFieldRemoveRequest = 16;
 * @return {?proto.treeleaf.anydone.entities.TextFieldRemove}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getTextfieldremoverequest = function() {
  return /** @type{?proto.treeleaf.anydone.entities.TextFieldRemove} */ (
    jspb.Message.getWrapperField(this, signaling_pb.TextFieldRemove, 16));
};


/**
 * @param {?proto.treeleaf.anydone.entities.TextFieldRemove|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setTextfieldremoverequest = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearTextfieldremoverequest = function() {
  return this.setTextfieldremoverequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasTextfieldremoverequest = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional DrawTouchDown drawTouchDownRequest = 17;
 * @return {?proto.treeleaf.anydone.entities.DrawTouchDown}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getDrawtouchdownrequest = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DrawTouchDown} */ (
    jspb.Message.getWrapperField(this, signaling_pb.DrawTouchDown, 17));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DrawTouchDown|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setDrawtouchdownrequest = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearDrawtouchdownrequest = function() {
  return this.setDrawtouchdownrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasDrawtouchdownrequest = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional DrawTouchMove drawTouchMoveRequest = 18;
 * @return {?proto.treeleaf.anydone.entities.DrawTouchMove}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getDrawtouchmoverequest = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DrawTouchMove} */ (
    jspb.Message.getWrapperField(this, signaling_pb.DrawTouchMove, 18));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DrawTouchMove|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setDrawtouchmoverequest = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearDrawtouchmoverequest = function() {
  return this.setDrawtouchmoverequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasDrawtouchmoverequest = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional DrawTouchUp drawTouchUpRequest = 19;
 * @return {?proto.treeleaf.anydone.entities.DrawTouchUp}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getDrawtouchuprequest = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DrawTouchUp} */ (
    jspb.Message.getWrapperField(this, signaling_pb.DrawTouchUp, 19));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DrawTouchUp|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setDrawtouchuprequest = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearDrawtouchuprequest = function() {
  return this.setDrawtouchuprequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasDrawtouchuprequest = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional DrawCanvasClear drawCanvasClearRequest = 20;
 * @return {?proto.treeleaf.anydone.entities.DrawCanvasClear}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getDrawcanvasclearrequest = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DrawCanvasClear} */ (
    jspb.Message.getWrapperField(this, signaling_pb.DrawCanvasClear, 20));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DrawCanvasClear|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setDrawcanvasclearrequest = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearDrawcanvasclearrequest = function() {
  return this.setDrawcanvasclearrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasDrawcanvasclearrequest = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional DrawMetaDataChange drawMetaDataChangeRequest = 21;
 * @return {?proto.treeleaf.anydone.entities.DrawMetaDataChange}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getDrawmetadatachangerequest = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DrawMetaDataChange} */ (
    jspb.Message.getWrapperField(this, signaling_pb.DrawMetaDataChange, 21));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DrawMetaDataChange|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setDrawmetadatachangerequest = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearDrawmetadatachangerequest = function() {
  return this.setDrawmetadatachangerequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasDrawmetadatachangerequest = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional DrawMinize drawMinimizeRequest = 22;
 * @return {?proto.treeleaf.anydone.entities.DrawMinize}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getDrawminimizerequest = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DrawMinize} */ (
    jspb.Message.getWrapperField(this, signaling_pb.DrawMinize, 22));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DrawMinize|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setDrawminimizerequest = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearDrawminimizerequest = function() {
  return this.setDrawminimizerequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasDrawminimizerequest = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional DrawMaximize drawMaximizeReq = 23;
 * @return {?proto.treeleaf.anydone.entities.DrawMaximize}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getDrawmaximizereq = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DrawMaximize} */ (
    jspb.Message.getWrapperField(this, signaling_pb.DrawMaximize, 23));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DrawMaximize|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setDrawmaximizereq = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearDrawmaximizereq = function() {
  return this.setDrawmaximizereq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasDrawmaximizereq = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional DrawClose drawCloseReq = 24;
 * @return {?proto.treeleaf.anydone.entities.DrawClose}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getDrawclosereq = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DrawClose} */ (
    jspb.Message.getWrapperField(this, signaling_pb.DrawClose, 24));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DrawClose|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setDrawclosereq = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearDrawclosereq = function() {
  return this.setDrawclosereq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasDrawclosereq = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional DrawCollab drawCollabReq = 25;
 * @return {?proto.treeleaf.anydone.entities.DrawCollab}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getDrawcollabreq = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DrawCollab} */ (
    jspb.Message.getWrapperField(this, signaling_pb.DrawCollab, 25));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DrawCollab|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setDrawcollabreq = function(value) {
  return jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearDrawcollabreq = function() {
  return this.setDrawcollabreq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasDrawcollabreq = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional DrawCollabAcknowledgement drawCollabAcknowledgement = 26;
 * @return {?proto.treeleaf.anydone.entities.DrawCollabAcknowledgement}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getDrawcollabacknowledgement = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DrawCollabAcknowledgement} */ (
    jspb.Message.getWrapperField(this, signaling_pb.DrawCollabAcknowledgement, 26));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DrawCollabAcknowledgement|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setDrawcollabacknowledgement = function(value) {
  return jspb.Message.setWrapperField(this, 26, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearDrawcollabacknowledgement = function() {
  return this.setDrawcollabacknowledgement(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasDrawcollabacknowledgement = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional DrawStart drawStartRequest = 27;
 * @return {?proto.treeleaf.anydone.entities.DrawStart}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getDrawstartrequest = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DrawStart} */ (
    jspb.Message.getWrapperField(this, signaling_pb.DrawStart, 27));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DrawStart|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setDrawstartrequest = function(value) {
  return jspb.Message.setWrapperField(this, 27, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearDrawstartrequest = function() {
  return this.setDrawstartrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasDrawstartrequest = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional DrawEnd drawEndRequest = 28;
 * @return {?proto.treeleaf.anydone.entities.DrawEnd}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getDrawendrequest = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DrawEnd} */ (
    jspb.Message.getWrapperField(this, signaling_pb.DrawEnd, 28));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DrawEnd|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setDrawendrequest = function(value) {
  return jspb.Message.setWrapperField(this, 28, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearDrawendrequest = function() {
  return this.setDrawendrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasDrawendrequest = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional string mappingId = 29;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getMappingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 29, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.setMappingid = function(value) {
  return jspb.Message.setProto3StringField(this, 29, value);
};


/**
 * optional string token = 30;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 30, value);
};


/**
 * optional ThirdPartySource source = 31;
 * @return {!proto.treeleaf.anydone.entities.ThirdPartySource}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getSource = function() {
  return /** @type {!proto.treeleaf.anydone.entities.ThirdPartySource} */ (jspb.Message.getFieldWithDefault(this, 31, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.ThirdPartySource} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.setSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 31, value);
};


/**
 * optional Customer customer = 32;
 * @return {?proto.treeleaf.anydone.entities.Customer}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getCustomer = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Customer} */ (
    jspb.Message.getWrapperField(this, user_pb.Customer, 32));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Customer|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setCustomer = function(value) {
  return jspb.Message.setWrapperField(this, 32, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearCustomer = function() {
  return this.setCustomer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasCustomer = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional ReceiverCallDeclined receiverCallDeclinedRequest = 33;
 * @return {?proto.treeleaf.anydone.entities.ReceiverCallDeclined}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getReceivercalldeclinedrequest = function() {
  return /** @type{?proto.treeleaf.anydone.entities.ReceiverCallDeclined} */ (
    jspb.Message.getWrapperField(this, signaling_pb.ReceiverCallDeclined, 33));
};


/**
 * @param {?proto.treeleaf.anydone.entities.ReceiverCallDeclined|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setReceivercalldeclinedrequest = function(value) {
  return jspb.Message.setWrapperField(this, 33, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearReceivercalldeclinedrequest = function() {
  return this.setReceivercalldeclinedrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasReceivercalldeclinedrequest = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional PointerStart pointer = 34;
 * @return {?proto.treeleaf.anydone.entities.PointerStart}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getPointer = function() {
  return /** @type{?proto.treeleaf.anydone.entities.PointerStart} */ (
    jspb.Message.getWrapperField(this, signaling_pb.PointerStart, 34));
};


/**
 * @param {?proto.treeleaf.anydone.entities.PointerStart|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setPointer = function(value) {
  return jspb.Message.setWrapperField(this, 34, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearPointer = function() {
  return this.setPointer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasPointer = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional MaxDrawingExceed maxDrawingExceed = 35;
 * @return {?proto.treeleaf.anydone.entities.MaxDrawingExceed}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getMaxdrawingexceed = function() {
  return /** @type{?proto.treeleaf.anydone.entities.MaxDrawingExceed} */ (
    jspb.Message.getWrapperField(this, signaling_pb.MaxDrawingExceed, 35));
};


/**
 * @param {?proto.treeleaf.anydone.entities.MaxDrawingExceed|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setMaxdrawingexceed = function(value) {
  return jspb.Message.setWrapperField(this, 35, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearMaxdrawingexceed = function() {
  return this.setMaxdrawingexceed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasMaxdrawingexceed = function() {
  return jspb.Message.getField(this, 35) != null;
};


/**
 * optional ThirdPartyDetail thirdPartyDetail = 36;
 * @return {?proto.treeleaf.anydone.entities.ThirdPartyDetail}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getThirdpartydetail = function() {
  return /** @type{?proto.treeleaf.anydone.entities.ThirdPartyDetail} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.ThirdPartyDetail, 36));
};


/**
 * @param {?proto.treeleaf.anydone.entities.ThirdPartyDetail|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setThirdpartydetail = function(value) {
  return jspb.Message.setWrapperField(this, 36, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearThirdpartydetail = function() {
  return this.setThirdpartydetail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasThirdpartydetail = function() {
  return jspb.Message.getField(this, 36) != null;
};


/**
 * optional AddCallParticipant addCallParticipant = 37;
 * @return {?proto.treeleaf.anydone.entities.AddCallParticipant}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getAddcallparticipant = function() {
  return /** @type{?proto.treeleaf.anydone.entities.AddCallParticipant} */ (
    jspb.Message.getWrapperField(this, signaling_pb.AddCallParticipant, 37));
};


/**
 * @param {?proto.treeleaf.anydone.entities.AddCallParticipant|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setAddcallparticipant = function(value) {
  return jspb.Message.setWrapperField(this, 37, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearAddcallparticipant = function() {
  return this.setAddcallparticipant(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasAddcallparticipant = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * optional TransferCall callTransfer = 38;
 * @return {?proto.treeleaf.anydone.entities.TransferCall}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getCalltransfer = function() {
  return /** @type{?proto.treeleaf.anydone.entities.TransferCall} */ (
    jspb.Message.getWrapperField(this, signaling_pb.TransferCall, 38));
};


/**
 * @param {?proto.treeleaf.anydone.entities.TransferCall|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setCalltransfer = function(value) {
  return jspb.Message.setWrapperField(this, 38, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearCalltransfer = function() {
  return this.setCalltransfer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasCalltransfer = function() {
  return jspb.Message.getField(this, 38) != null;
};


/**
 * optional MuteParticipant muteParticipant = 39;
 * @return {?proto.treeleaf.anydone.entities.MuteParticipant}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getMuteparticipant = function() {
  return /** @type{?proto.treeleaf.anydone.entities.MuteParticipant} */ (
    jspb.Message.getWrapperField(this, signaling_pb.MuteParticipant, 39));
};


/**
 * @param {?proto.treeleaf.anydone.entities.MuteParticipant|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setMuteparticipant = function(value) {
  return jspb.Message.setWrapperField(this, 39, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearMuteparticipant = function() {
  return this.setMuteparticipant(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasMuteparticipant = function() {
  return jspb.Message.getField(this, 39) != null;
};


/**
 * optional CallEnd callEnd = 40;
 * @return {?proto.treeleaf.anydone.entities.CallEnd}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getCallend = function() {
  return /** @type{?proto.treeleaf.anydone.entities.CallEnd} */ (
    jspb.Message.getWrapperField(this, signaling_pb.CallEnd, 40));
};


/**
 * @param {?proto.treeleaf.anydone.entities.CallEnd|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setCallend = function(value) {
  return jspb.Message.setWrapperField(this, 40, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearCallend = function() {
  return this.setCallend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasCallend = function() {
  return jspb.Message.getField(this, 40) != null;
};


/**
 * optional Reaction reaction = 41;
 * @return {?proto.treeleaf.anydone.entities.Reaction}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getReaction = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Reaction} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.Reaction, 41));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Reaction|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setReaction = function(value) {
  return jspb.Message.setWrapperField(this, 41, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearReaction = function() {
  return this.setReaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasReaction = function() {
  return jspb.Message.getField(this, 41) != null;
};


/**
 * optional CallAccepted callAccepted = 42;
 * @return {?proto.treeleaf.anydone.entities.CallAccepted}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getCallaccepted = function() {
  return /** @type{?proto.treeleaf.anydone.entities.CallAccepted} */ (
    jspb.Message.getWrapperField(this, signaling_pb.CallAccepted, 42));
};


/**
 * @param {?proto.treeleaf.anydone.entities.CallAccepted|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setCallaccepted = function(value) {
  return jspb.Message.setWrapperField(this, 42, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearCallaccepted = function() {
  return this.setCallaccepted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasCallaccepted = function() {
  return jspb.Message.getField(this, 42) != null;
};


/**
 * optional VideoToggle videoToggle = 43;
 * @return {?proto.treeleaf.anydone.entities.VideoToggle}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getVideotoggle = function() {
  return /** @type{?proto.treeleaf.anydone.entities.VideoToggle} */ (
    jspb.Message.getWrapperField(this, signaling_pb.VideoToggle, 43));
};


/**
 * @param {?proto.treeleaf.anydone.entities.VideoToggle|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setVideotoggle = function(value) {
  return jspb.Message.setWrapperField(this, 43, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearVideotoggle = function() {
  return this.setVideotoggle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasVideotoggle = function() {
  return jspb.Message.getField(this, 43) != null;
};


/**
 * optional TypingEvent typingEvent = 44;
 * @return {?proto.treeleaf.anydone.entities.TypingEvent}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getTypingevent = function() {
  return /** @type{?proto.treeleaf.anydone.entities.TypingEvent} */ (
    jspb.Message.getWrapperField(this, rtc_meta_pb.TypingEvent, 44));
};


/**
 * @param {?proto.treeleaf.anydone.entities.TypingEvent|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setTypingevent = function(value) {
  return jspb.Message.setWrapperField(this, 44, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearTypingevent = function() {
  return this.setTypingevent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasTypingevent = function() {
  return jspb.Message.getField(this, 44) != null;
};


/**
 * optional DeletePostCommentRequest deletePostComment = 45;
 * @return {?proto.treeleaf.anydone.entities.DeletePostCommentRequest}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getDeletepostcomment = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DeletePostCommentRequest} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.DeletePostCommentRequest, 45));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DeletePostCommentRequest|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setDeletepostcomment = function(value) {
  return jspb.Message.setWrapperField(this, 45, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearDeletepostcomment = function() {
  return this.setDeletepostcomment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasDeletepostcomment = function() {
  return jspb.Message.getField(this, 45) != null;
};


/**
 * optional AddPostCommentRequest addPostComment = 48;
 * @return {?proto.treeleaf.anydone.entities.AddPostCommentRequest}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getAddpostcomment = function() {
  return /** @type{?proto.treeleaf.anydone.entities.AddPostCommentRequest} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.AddPostCommentRequest, 48));
};


/**
 * @param {?proto.treeleaf.anydone.entities.AddPostCommentRequest|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setAddpostcomment = function(value) {
  return jspb.Message.setWrapperField(this, 48, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearAddpostcomment = function() {
  return this.setAddpostcomment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasAddpostcomment = function() {
  return jspb.Message.getField(this, 48) != null;
};


/**
 * optional DeleteThirdPartyPostReq deletePost = 49;
 * @return {?proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getDeletepost = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq, 49));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DeleteThirdPartyPostReq|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setDeletepost = function(value) {
  return jspb.Message.setWrapperField(this, 49, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearDeletepost = function() {
  return this.setDeletepost(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasDeletepost = function() {
  return jspb.Message.getField(this, 49) != null;
};


/**
 * optional MeetingJoinRequest meetingJoinRequest = 50;
 * @return {?proto.treeleaf.anydone.entities.MeetingJoinRequest}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getMeetingjoinrequest = function() {
  return /** @type{?proto.treeleaf.anydone.entities.MeetingJoinRequest} */ (
    jspb.Message.getWrapperField(this, meet_signaling_pb.MeetingJoinRequest, 50));
};


/**
 * @param {?proto.treeleaf.anydone.entities.MeetingJoinRequest|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setMeetingjoinrequest = function(value) {
  return jspb.Message.setWrapperField(this, 50, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearMeetingjoinrequest = function() {
  return this.setMeetingjoinrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasMeetingjoinrequest = function() {
  return jspb.Message.getField(this, 50) != null;
};


/**
 * optional MeetingApproveResponse meetingApprovalResponse = 51;
 * @return {?proto.treeleaf.anydone.entities.MeetingApproveResponse}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.getMeetingapprovalresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.MeetingApproveResponse} */ (
    jspb.Message.getWrapperField(this, meet_signaling_pb.MeetingApproveResponse, 51));
};


/**
 * @param {?proto.treeleaf.anydone.entities.MeetingApproveResponse|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
*/
proto.treeleaf.anydone.entities.RelayRequest.prototype.setMeetingapprovalresponse = function(value) {
  return jspb.Message.setWrapperField(this, 51, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayRequest} returns this
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.clearMeetingapprovalresponse = function() {
  return this.setMeetingapprovalresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayRequest.prototype.hasMeetingapprovalresponse = function() {
  return jspb.Message.getField(this, 51) != null;
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
proto.treeleaf.anydone.entities.ThirdPartyDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.ThirdPartyDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.ThirdPartyDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ThirdPartyDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    domainname: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.treeleaf.anydone.entities.ThirdPartyDetail}
 */
proto.treeleaf.anydone.entities.ThirdPartyDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.ThirdPartyDetail;
  return proto.treeleaf.anydone.entities.ThirdPartyDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.ThirdPartyDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.ThirdPartyDetail}
 */
proto.treeleaf.anydone.entities.ThirdPartyDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomainname(value);
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
proto.treeleaf.anydone.entities.ThirdPartyDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.ThirdPartyDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.ThirdPartyDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ThirdPartyDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomainname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string domainName = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ThirdPartyDetail.prototype.getDomainname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ThirdPartyDetail} returns this
 */
proto.treeleaf.anydone.entities.ThirdPartyDetail.prototype.setDomainname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.treeleaf.anydone.entities.RelayError.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.RelayError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.RelayError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.RelayError.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    msg: jspb.Message.getFieldWithDefault(msg, 2, ""),
    errorcode: jspb.Message.getFieldWithDefault(msg, 3, 0),
    senderaccountid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    reaction: jspb.Message.getFieldWithDefault(msg, 5, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.treeleaf.anydone.entities.RelayError}
 */
proto.treeleaf.anydone.entities.RelayError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.RelayError;
  return proto.treeleaf.anydone.entities.RelayError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.RelayError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.RelayError}
 */
proto.treeleaf.anydone.entities.RelayError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 3:
      var value = /** @type {!proto.treeleaf.protos.ErrorCode} */ (reader.readEnum());
      msg.setErrorcode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderaccountid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReaction(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
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
proto.treeleaf.anydone.entities.RelayError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.RelayError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.RelayError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.RelayError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getErrorcode();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getSenderaccountid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getReaction();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string clientId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RelayError.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RelayError} returns this
 */
proto.treeleaf.anydone.entities.RelayError.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RelayError.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RelayError} returns this
 */
proto.treeleaf.anydone.entities.RelayError.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional treeleaf.protos.ErrorCode errorCode = 3;
 * @return {!proto.treeleaf.protos.ErrorCode}
 */
proto.treeleaf.anydone.entities.RelayError.prototype.getErrorcode = function() {
  return /** @type {!proto.treeleaf.protos.ErrorCode} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.treeleaf.protos.ErrorCode} value
 * @return {!proto.treeleaf.anydone.entities.RelayError} returns this
 */
proto.treeleaf.anydone.entities.RelayError.prototype.setErrorcode = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string senderAccountId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RelayError.prototype.getSenderaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RelayError} returns this
 */
proto.treeleaf.anydone.entities.RelayError.prototype.setSenderaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string reaction = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RelayError.prototype.getReaction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RelayError} returns this
 */
proto.treeleaf.anydone.entities.RelayError.prototype.setReaction = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string refId = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RelayError.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RelayError} returns this
 */
proto.treeleaf.anydone.entities.RelayError.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string rtcMessageId = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RelayError.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RelayError} returns this
 */
proto.treeleaf.anydone.entities.RelayError.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
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
proto.treeleaf.anydone.entities.DeletedMsgResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.DeletedMsgResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.DeletedMsgResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DeletedMsgResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    senderaccountid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.treeleaf.anydone.entities.DeletedMsgResponse}
 */
proto.treeleaf.anydone.entities.DeletedMsgResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.DeletedMsgResponse;
  return proto.treeleaf.anydone.entities.DeletedMsgResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.DeletedMsgResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.DeletedMsgResponse}
 */
proto.treeleaf.anydone.entities.DeletedMsgResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderaccountid(value);
      break;
    case 4:
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
proto.treeleaf.anydone.entities.DeletedMsgResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.DeletedMsgResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.DeletedMsgResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DeletedMsgResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSenderaccountid();
  if (f.length > 0) {
    writer.writeString(
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
};


/**
 * optional string rtcMessageId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DeletedMsgResponse.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DeletedMsgResponse} returns this
 */
proto.treeleaf.anydone.entities.DeletedMsgResponse.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string clientId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DeletedMsgResponse.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DeletedMsgResponse} returns this
 */
proto.treeleaf.anydone.entities.DeletedMsgResponse.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string senderAccountId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DeletedMsgResponse.prototype.getSenderaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DeletedMsgResponse} returns this
 */
proto.treeleaf.anydone.entities.DeletedMsgResponse.prototype.setSenderaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string refId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DeletedMsgResponse.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DeletedMsgResponse} returns this
 */
proto.treeleaf.anydone.entities.DeletedMsgResponse.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.treeleaf.anydone.entities.PinnedMessageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.PinnedMessageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.PinnedMessageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.PinnedMessageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rtcmessage: (f = msg.getRtcmessage()) && proto.treeleaf.anydone.entities.RtcMessage.toObject(includeInstance, f),
    pinnedmessagecount: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.treeleaf.anydone.entities.PinnedMessageResponse}
 */
proto.treeleaf.anydone.entities.PinnedMessageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.PinnedMessageResponse;
  return proto.treeleaf.anydone.entities.PinnedMessageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.PinnedMessageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.PinnedMessageResponse}
 */
proto.treeleaf.anydone.entities.PinnedMessageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.RtcMessage;
      reader.readMessage(value,proto.treeleaf.anydone.entities.RtcMessage.deserializeBinaryFromReader);
      msg.setRtcmessage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPinnedmessagecount(value);
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
proto.treeleaf.anydone.entities.PinnedMessageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.PinnedMessageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.PinnedMessageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.PinnedMessageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRtcmessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.RtcMessage.serializeBinaryToWriter
    );
  }
  f = message.getPinnedmessagecount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional RtcMessage rtcMessage = 1;
 * @return {?proto.treeleaf.anydone.entities.RtcMessage}
 */
proto.treeleaf.anydone.entities.PinnedMessageResponse.prototype.getRtcmessage = function() {
  return /** @type{?proto.treeleaf.anydone.entities.RtcMessage} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.RtcMessage, 1));
};


/**
 * @param {?proto.treeleaf.anydone.entities.RtcMessage|undefined} value
 * @return {!proto.treeleaf.anydone.entities.PinnedMessageResponse} returns this
*/
proto.treeleaf.anydone.entities.PinnedMessageResponse.prototype.setRtcmessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.PinnedMessageResponse} returns this
 */
proto.treeleaf.anydone.entities.PinnedMessageResponse.prototype.clearRtcmessage = function() {
  return this.setRtcmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.PinnedMessageResponse.prototype.hasRtcmessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 pinnedMessageCount = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.PinnedMessageResponse.prototype.getPinnedmessagecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.PinnedMessageResponse} returns this
 */
proto.treeleaf.anydone.entities.PinnedMessageResponse.prototype.setPinnedmessagecount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.DeletePostCommentRequest.repeatedFields_ = [5];



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
proto.treeleaf.anydone.entities.DeletePostCommentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.DeletePostCommentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.DeletePostCommentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DeletePostCommentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    commentid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    postid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    serviceid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    accountid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    accountidsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    token: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.treeleaf.anydone.entities.DeletePostCommentRequest}
 */
proto.treeleaf.anydone.entities.DeletePostCommentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.DeletePostCommentRequest;
  return proto.treeleaf.anydone.entities.DeletePostCommentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.DeletePostCommentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.DeletePostCommentRequest}
 */
proto.treeleaf.anydone.entities.DeletePostCommentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommentid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addAccountids(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
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
proto.treeleaf.anydone.entities.DeletePostCommentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.DeletePostCommentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.DeletePostCommentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DeletePostCommentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommentid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPostid();
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
  f = message.getAccountid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAccountidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string commentId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DeletePostCommentRequest.prototype.getCommentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DeletePostCommentRequest} returns this
 */
proto.treeleaf.anydone.entities.DeletePostCommentRequest.prototype.setCommentid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string postId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DeletePostCommentRequest.prototype.getPostid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DeletePostCommentRequest} returns this
 */
proto.treeleaf.anydone.entities.DeletePostCommentRequest.prototype.setPostid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string serviceId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DeletePostCommentRequest.prototype.getServiceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DeletePostCommentRequest} returns this
 */
proto.treeleaf.anydone.entities.DeletePostCommentRequest.prototype.setServiceid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string accountId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DeletePostCommentRequest.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DeletePostCommentRequest} returns this
 */
proto.treeleaf.anydone.entities.DeletePostCommentRequest.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string accountIds = 5;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.DeletePostCommentRequest.prototype.getAccountidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.DeletePostCommentRequest} returns this
 */
proto.treeleaf.anydone.entities.DeletePostCommentRequest.prototype.setAccountidsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.DeletePostCommentRequest} returns this
 */
proto.treeleaf.anydone.entities.DeletePostCommentRequest.prototype.addAccountids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.DeletePostCommentRequest} returns this
 */
proto.treeleaf.anydone.entities.DeletePostCommentRequest.prototype.clearAccountidsList = function() {
  return this.setAccountidsList([]);
};


/**
 * optional string token = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DeletePostCommentRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DeletePostCommentRequest} returns this
 */
proto.treeleaf.anydone.entities.DeletePostCommentRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.AddPostCommentRequest.repeatedFields_ = [7];



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
proto.treeleaf.anydone.entities.AddPostCommentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.AddPostCommentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.AddPostCommentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AddPostCommentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    postid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    serviceid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    text: jspb.Message.getFieldWithDefault(msg, 4, ""),
    commentid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    accountid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    accountidsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f
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
 * @return {!proto.treeleaf.anydone.entities.AddPostCommentRequest}
 */
proto.treeleaf.anydone.entities.AddPostCommentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.AddPostCommentRequest;
  return proto.treeleaf.anydone.entities.AddPostCommentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.AddPostCommentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.AddPostCommentRequest}
 */
proto.treeleaf.anydone.entities.AddPostCommentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommentid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addAccountids(value);
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
proto.treeleaf.anydone.entities.AddPostCommentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.AddPostCommentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.AddPostCommentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AddPostCommentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPostid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getToken();
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
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCommentid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAccountid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAccountidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
};


/**
 * optional string postId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AddPostCommentRequest.prototype.getPostid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AddPostCommentRequest} returns this
 */
proto.treeleaf.anydone.entities.AddPostCommentRequest.prototype.setPostid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AddPostCommentRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AddPostCommentRequest} returns this
 */
proto.treeleaf.anydone.entities.AddPostCommentRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string serviceId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AddPostCommentRequest.prototype.getServiceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AddPostCommentRequest} returns this
 */
proto.treeleaf.anydone.entities.AddPostCommentRequest.prototype.setServiceid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string text = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AddPostCommentRequest.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AddPostCommentRequest} returns this
 */
proto.treeleaf.anydone.entities.AddPostCommentRequest.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string commentId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AddPostCommentRequest.prototype.getCommentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AddPostCommentRequest} returns this
 */
proto.treeleaf.anydone.entities.AddPostCommentRequest.prototype.setCommentid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string accountId = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AddPostCommentRequest.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AddPostCommentRequest} returns this
 */
proto.treeleaf.anydone.entities.AddPostCommentRequest.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated string accountIds = 7;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.AddPostCommentRequest.prototype.getAccountidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.AddPostCommentRequest} returns this
 */
proto.treeleaf.anydone.entities.AddPostCommentRequest.prototype.setAccountidsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.AddPostCommentRequest} returns this
 */
proto.treeleaf.anydone.entities.AddPostCommentRequest.prototype.addAccountids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.AddPostCommentRequest} returns this
 */
proto.treeleaf.anydone.entities.AddPostCommentRequest.prototype.clearAccountidsList = function() {
  return this.setAccountidsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.AddPostCommentResponse.repeatedFields_ = [2];



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
proto.treeleaf.anydone.entities.AddPostCommentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.AddPostCommentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.AddPostCommentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AddPostCommentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    comment: (f = msg.getComment()) && integration_pb.ThirdpartyPostComment.toObject(includeInstance, f),
    accountidsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.treeleaf.anydone.entities.AddPostCommentResponse}
 */
proto.treeleaf.anydone.entities.AddPostCommentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.AddPostCommentResponse;
  return proto.treeleaf.anydone.entities.AddPostCommentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.AddPostCommentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.AddPostCommentResponse}
 */
proto.treeleaf.anydone.entities.AddPostCommentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new integration_pb.ThirdpartyPostComment;
      reader.readMessage(value,integration_pb.ThirdpartyPostComment.deserializeBinaryFromReader);
      msg.setComment(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addAccountids(value);
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
proto.treeleaf.anydone.entities.AddPostCommentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.AddPostCommentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.AddPostCommentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AddPostCommentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getComment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      integration_pb.ThirdpartyPostComment.serializeBinaryToWriter
    );
  }
  f = message.getAccountidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional ThirdpartyPostComment comment = 1;
 * @return {?proto.treeleaf.anydone.entities.ThirdpartyPostComment}
 */
proto.treeleaf.anydone.entities.AddPostCommentResponse.prototype.getComment = function() {
  return /** @type{?proto.treeleaf.anydone.entities.ThirdpartyPostComment} */ (
    jspb.Message.getWrapperField(this, integration_pb.ThirdpartyPostComment, 1));
};


/**
 * @param {?proto.treeleaf.anydone.entities.ThirdpartyPostComment|undefined} value
 * @return {!proto.treeleaf.anydone.entities.AddPostCommentResponse} returns this
*/
proto.treeleaf.anydone.entities.AddPostCommentResponse.prototype.setComment = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.AddPostCommentResponse} returns this
 */
proto.treeleaf.anydone.entities.AddPostCommentResponse.prototype.clearComment = function() {
  return this.setComment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.AddPostCommentResponse.prototype.hasComment = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string accountIds = 2;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.AddPostCommentResponse.prototype.getAccountidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.AddPostCommentResponse} returns this
 */
proto.treeleaf.anydone.entities.AddPostCommentResponse.prototype.setAccountidsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.AddPostCommentResponse} returns this
 */
proto.treeleaf.anydone.entities.AddPostCommentResponse.prototype.addAccountids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.AddPostCommentResponse} returns this
 */
proto.treeleaf.anydone.entities.AddPostCommentResponse.prototype.clearAccountidsList = function() {
  return this.setAccountidsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse.repeatedFields_ = [2];



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
proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    postid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accountidsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse}
 */
proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse;
  return proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse}
 */
proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addAccountids(value);
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
proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPostid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccountidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string postId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse.prototype.getPostid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse} returns this
 */
proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse.prototype.setPostid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string accountIds = 2;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse.prototype.getAccountidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse} returns this
 */
proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse.prototype.setAccountidsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse} returns this
 */
proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse.prototype.addAccountids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse} returns this
 */
proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse.prototype.clearAccountidsList = function() {
  return this.setAccountidsList([]);
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
proto.treeleaf.anydone.entities.RelayResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.RelayResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.RelayResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.RelayResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    responsetype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rtcmessage: (f = msg.getRtcmessage()) && proto.treeleaf.anydone.entities.RtcMessage.toObject(includeInstance, f),
    messagedeliveredresponse: (f = msg.getMessagedeliveredresponse()) && proto.treeleaf.anydone.entities.MessageDeliveredResponse.toObject(includeInstance, f),
    relayerror: (f = msg.getRelayerror()) && proto.treeleaf.anydone.entities.RelayError.toObject(includeInstance, f),
    deletedmsgresponse: (f = msg.getDeletedmsgresponse()) && proto.treeleaf.anydone.entities.DeletedMsgResponse.toObject(includeInstance, f),
    videocalljoinresponse: (f = msg.getVideocalljoinresponse()) && signaling_pb.VideoCallJoinResponse.toObject(includeInstance, f),
    botreply: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    owneraccountid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    broadcastvideocall: (f = msg.getBroadcastvideocall()) && signaling_pb.BroadcastVideoCall.toObject(includeInstance, f),
    videoroomhostleftresponse: (f = msg.getVideoroomhostleftresponse()) && signaling_pb.VideoRoomHostLeft.toObject(includeInstance, f),
    participantleftresponse: (f = msg.getParticipantleftresponse()) && signaling_pb.ParticipantLeft.toObject(includeInstance, f),
    startdrawresponse: (f = msg.getStartdrawresponse()) && signaling_pb.StartDraw.toObject(includeInstance, f),
    startdrawackresponse: (f = msg.getStartdrawackresponse()) && signaling_pb.StartDrawAcknowledgement.toObject(includeInstance, f),
    canceldrawresponse: (f = msg.getCanceldrawresponse()) && signaling_pb.CancelDrawing.toObject(includeInstance, f),
    context: jspb.Message.getFieldWithDefault(msg, 16, 0),
    receivenewtextfieldresponse: (f = msg.getReceivenewtextfieldresponse()) && signaling_pb.ReceiveNewTextField.toObject(includeInstance, f),
    textfieldchangeresponse: (f = msg.getTextfieldchangeresponse()) && signaling_pb.TextFieldChange.toObject(includeInstance, f),
    textfieldremoveresponse: (f = msg.getTextfieldremoveresponse()) && signaling_pb.TextFieldRemove.toObject(includeInstance, f),
    drawtouchdownresponse: (f = msg.getDrawtouchdownresponse()) && signaling_pb.DrawTouchDown.toObject(includeInstance, f),
    drawtouchmoveresponse: (f = msg.getDrawtouchmoveresponse()) && signaling_pb.DrawTouchMove.toObject(includeInstance, f),
    drawtouchupresponse: (f = msg.getDrawtouchupresponse()) && signaling_pb.DrawTouchUp.toObject(includeInstance, f),
    drawcanvasclearresponse: (f = msg.getDrawcanvasclearresponse()) && signaling_pb.DrawCanvasClear.toObject(includeInstance, f),
    drawmetadatachangeresponse: (f = msg.getDrawmetadatachangeresponse()) && signaling_pb.DrawMetaDataChange.toObject(includeInstance, f),
    drawminimizeresponse: (f = msg.getDrawminimizeresponse()) && signaling_pb.DrawMinize.toObject(includeInstance, f),
    drawmaximizeresponse: (f = msg.getDrawmaximizeresponse()) && signaling_pb.DrawMaximize.toObject(includeInstance, f),
    drawcloseresponse: (f = msg.getDrawcloseresponse()) && signaling_pb.DrawClose.toObject(includeInstance, f),
    drawcollabresponse: (f = msg.getDrawcollabresponse()) && signaling_pb.DrawCollab.toObject(includeInstance, f),
    drawcollabacknowledgement: (f = msg.getDrawcollabacknowledgement()) && signaling_pb.DrawCollabAcknowledgement.toObject(includeInstance, f),
    drawstartresponse: (f = msg.getDrawstartresponse()) && signaling_pb.DrawStart.toObject(includeInstance, f),
    drawendresponse: (f = msg.getDrawendresponse()) && signaling_pb.DrawEnd.toObject(includeInstance, f),
    refid: jspb.Message.getFieldWithDefault(msg, 32, ""),
    receivercalldeclinedresponse: (f = msg.getReceivercalldeclinedresponse()) && signaling_pb.ReceiverCallDeclined.toObject(includeInstance, f),
    pointer: (f = msg.getPointer()) && signaling_pb.PointerStart.toObject(includeInstance, f),
    maxdrawingexceed: (f = msg.getMaxdrawingexceed()) && signaling_pb.MaxDrawingExceed.toObject(includeInstance, f),
    addcallparticipant: (f = msg.getAddcallparticipant()) && signaling_pb.AddCallParticipant.toObject(includeInstance, f),
    source: jspb.Message.getFieldWithDefault(msg, 37, 0),
    calltransfer: (f = msg.getCalltransfer()) && signaling_pb.TransferCall.toObject(includeInstance, f),
    muteparticipants: (f = msg.getMuteparticipants()) && signaling_pb.MuteParticipant.toObject(includeInstance, f),
    callend: (f = msg.getCallend()) && signaling_pb.CallEnd.toObject(includeInstance, f),
    callaccepted: (f = msg.getCallaccepted()) && signaling_pb.CallAccepted.toObject(includeInstance, f),
    videotoggle: (f = msg.getVideotoggle()) && signaling_pb.VideoToggle.toObject(includeInstance, f),
    pinnedmessageresponse: (f = msg.getPinnedmessageresponse()) && proto.treeleaf.anydone.entities.PinnedMessageResponse.toObject(includeInstance, f),
    typingevent: (f = msg.getTypingevent()) && rtc_meta_pb.TypingEvent.toObject(includeInstance, f),
    botevent: (f = msg.getBotevent()) && rtc_meta_pb.BotEvent.toObject(includeInstance, f),
    duplicatereaction: jspb.Message.getBooleanFieldWithDefault(msg, 46, false),
    deletepostcomment: (f = msg.getDeletepostcomment()) && proto.treeleaf.anydone.entities.DeletePostCommentRequest.toObject(includeInstance, f),
    postcommentresponse: (f = msg.getPostcommentresponse()) && proto.treeleaf.anydone.entities.AddPostCommentResponse.toObject(includeInstance, f),
    postdeletedresponse: (f = msg.getPostdeletedresponse()) && proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse.toObject(includeInstance, f),
    addedreaction: (f = msg.getAddedreaction()) && proto.treeleaf.anydone.entities.Reaction.toObject(includeInstance, f),
    meetingjoinrequest: (f = msg.getMeetingjoinrequest()) && meet_signaling_pb.MeetingJoinRequest.toObject(includeInstance, f),
    meetingapprovalresponse: (f = msg.getMeetingapprovalresponse()) && meet_signaling_pb.MeetingApproveResponse.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.RelayResponse}
 */
proto.treeleaf.anydone.entities.RelayResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.RelayResponse;
  return proto.treeleaf.anydone.entities.RelayResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.RelayResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse}
 */
proto.treeleaf.anydone.entities.RelayResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.treeleaf.anydone.entities.RelayResponse.RelayResponseType} */ (reader.readEnum());
      msg.setResponsetype(value);
      break;
    case 2:
      var value = new proto.treeleaf.anydone.entities.RtcMessage;
      reader.readMessage(value,proto.treeleaf.anydone.entities.RtcMessage.deserializeBinaryFromReader);
      msg.setRtcmessage(value);
      break;
    case 3:
      var value = new proto.treeleaf.anydone.entities.MessageDeliveredResponse;
      reader.readMessage(value,proto.treeleaf.anydone.entities.MessageDeliveredResponse.deserializeBinaryFromReader);
      msg.setMessagedeliveredresponse(value);
      break;
    case 4:
      var value = new proto.treeleaf.anydone.entities.RelayError;
      reader.readMessage(value,proto.treeleaf.anydone.entities.RelayError.deserializeBinaryFromReader);
      msg.setRelayerror(value);
      break;
    case 5:
      var value = new proto.treeleaf.anydone.entities.DeletedMsgResponse;
      reader.readMessage(value,proto.treeleaf.anydone.entities.DeletedMsgResponse.deserializeBinaryFromReader);
      msg.setDeletedmsgresponse(value);
      break;
    case 6:
      var value = new signaling_pb.VideoCallJoinResponse;
      reader.readMessage(value,signaling_pb.VideoCallJoinResponse.deserializeBinaryFromReader);
      msg.setVideocalljoinresponse(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBotreply(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwneraccountid(value);
      break;
    case 9:
      var value = new signaling_pb.BroadcastVideoCall;
      reader.readMessage(value,signaling_pb.BroadcastVideoCall.deserializeBinaryFromReader);
      msg.setBroadcastvideocall(value);
      break;
    case 10:
      var value = new signaling_pb.VideoRoomHostLeft;
      reader.readMessage(value,signaling_pb.VideoRoomHostLeft.deserializeBinaryFromReader);
      msg.setVideoroomhostleftresponse(value);
      break;
    case 11:
      var value = new signaling_pb.ParticipantLeft;
      reader.readMessage(value,signaling_pb.ParticipantLeft.deserializeBinaryFromReader);
      msg.setParticipantleftresponse(value);
      break;
    case 13:
      var value = new signaling_pb.StartDraw;
      reader.readMessage(value,signaling_pb.StartDraw.deserializeBinaryFromReader);
      msg.setStartdrawresponse(value);
      break;
    case 14:
      var value = new signaling_pb.StartDrawAcknowledgement;
      reader.readMessage(value,signaling_pb.StartDrawAcknowledgement.deserializeBinaryFromReader);
      msg.setStartdrawackresponse(value);
      break;
    case 15:
      var value = new signaling_pb.CancelDrawing;
      reader.readMessage(value,signaling_pb.CancelDrawing.deserializeBinaryFromReader);
      msg.setCanceldrawresponse(value);
      break;
    case 16:
      var value = /** @type {!proto.treeleaf.anydone.entities.ServiceContext} */ (reader.readEnum());
      msg.setContext(value);
      break;
    case 17:
      var value = new signaling_pb.ReceiveNewTextField;
      reader.readMessage(value,signaling_pb.ReceiveNewTextField.deserializeBinaryFromReader);
      msg.setReceivenewtextfieldresponse(value);
      break;
    case 18:
      var value = new signaling_pb.TextFieldChange;
      reader.readMessage(value,signaling_pb.TextFieldChange.deserializeBinaryFromReader);
      msg.setTextfieldchangeresponse(value);
      break;
    case 19:
      var value = new signaling_pb.TextFieldRemove;
      reader.readMessage(value,signaling_pb.TextFieldRemove.deserializeBinaryFromReader);
      msg.setTextfieldremoveresponse(value);
      break;
    case 20:
      var value = new signaling_pb.DrawTouchDown;
      reader.readMessage(value,signaling_pb.DrawTouchDown.deserializeBinaryFromReader);
      msg.setDrawtouchdownresponse(value);
      break;
    case 21:
      var value = new signaling_pb.DrawTouchMove;
      reader.readMessage(value,signaling_pb.DrawTouchMove.deserializeBinaryFromReader);
      msg.setDrawtouchmoveresponse(value);
      break;
    case 22:
      var value = new signaling_pb.DrawTouchUp;
      reader.readMessage(value,signaling_pb.DrawTouchUp.deserializeBinaryFromReader);
      msg.setDrawtouchupresponse(value);
      break;
    case 23:
      var value = new signaling_pb.DrawCanvasClear;
      reader.readMessage(value,signaling_pb.DrawCanvasClear.deserializeBinaryFromReader);
      msg.setDrawcanvasclearresponse(value);
      break;
    case 24:
      var value = new signaling_pb.DrawMetaDataChange;
      reader.readMessage(value,signaling_pb.DrawMetaDataChange.deserializeBinaryFromReader);
      msg.setDrawmetadatachangeresponse(value);
      break;
    case 25:
      var value = new signaling_pb.DrawMinize;
      reader.readMessage(value,signaling_pb.DrawMinize.deserializeBinaryFromReader);
      msg.setDrawminimizeresponse(value);
      break;
    case 26:
      var value = new signaling_pb.DrawMaximize;
      reader.readMessage(value,signaling_pb.DrawMaximize.deserializeBinaryFromReader);
      msg.setDrawmaximizeresponse(value);
      break;
    case 27:
      var value = new signaling_pb.DrawClose;
      reader.readMessage(value,signaling_pb.DrawClose.deserializeBinaryFromReader);
      msg.setDrawcloseresponse(value);
      break;
    case 28:
      var value = new signaling_pb.DrawCollab;
      reader.readMessage(value,signaling_pb.DrawCollab.deserializeBinaryFromReader);
      msg.setDrawcollabresponse(value);
      break;
    case 29:
      var value = new signaling_pb.DrawCollabAcknowledgement;
      reader.readMessage(value,signaling_pb.DrawCollabAcknowledgement.deserializeBinaryFromReader);
      msg.setDrawcollabacknowledgement(value);
      break;
    case 30:
      var value = new signaling_pb.DrawStart;
      reader.readMessage(value,signaling_pb.DrawStart.deserializeBinaryFromReader);
      msg.setDrawstartresponse(value);
      break;
    case 31:
      var value = new signaling_pb.DrawEnd;
      reader.readMessage(value,signaling_pb.DrawEnd.deserializeBinaryFromReader);
      msg.setDrawendresponse(value);
      break;
    case 32:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 33:
      var value = new signaling_pb.ReceiverCallDeclined;
      reader.readMessage(value,signaling_pb.ReceiverCallDeclined.deserializeBinaryFromReader);
      msg.setReceivercalldeclinedresponse(value);
      break;
    case 34:
      var value = new signaling_pb.PointerStart;
      reader.readMessage(value,signaling_pb.PointerStart.deserializeBinaryFromReader);
      msg.setPointer(value);
      break;
    case 35:
      var value = new signaling_pb.MaxDrawingExceed;
      reader.readMessage(value,signaling_pb.MaxDrawingExceed.deserializeBinaryFromReader);
      msg.setMaxdrawingexceed(value);
      break;
    case 36:
      var value = new signaling_pb.AddCallParticipant;
      reader.readMessage(value,signaling_pb.AddCallParticipant.deserializeBinaryFromReader);
      msg.setAddcallparticipant(value);
      break;
    case 37:
      var value = /** @type {!proto.treeleaf.anydone.entities.ThirdPartySource} */ (reader.readEnum());
      msg.setSource(value);
      break;
    case 38:
      var value = new signaling_pb.TransferCall;
      reader.readMessage(value,signaling_pb.TransferCall.deserializeBinaryFromReader);
      msg.setCalltransfer(value);
      break;
    case 39:
      var value = new signaling_pb.MuteParticipant;
      reader.readMessage(value,signaling_pb.MuteParticipant.deserializeBinaryFromReader);
      msg.setMuteparticipants(value);
      break;
    case 40:
      var value = new signaling_pb.CallEnd;
      reader.readMessage(value,signaling_pb.CallEnd.deserializeBinaryFromReader);
      msg.setCallend(value);
      break;
    case 41:
      var value = new signaling_pb.CallAccepted;
      reader.readMessage(value,signaling_pb.CallAccepted.deserializeBinaryFromReader);
      msg.setCallaccepted(value);
      break;
    case 42:
      var value = new signaling_pb.VideoToggle;
      reader.readMessage(value,signaling_pb.VideoToggle.deserializeBinaryFromReader);
      msg.setVideotoggle(value);
      break;
    case 43:
      var value = new proto.treeleaf.anydone.entities.PinnedMessageResponse;
      reader.readMessage(value,proto.treeleaf.anydone.entities.PinnedMessageResponse.deserializeBinaryFromReader);
      msg.setPinnedmessageresponse(value);
      break;
    case 44:
      var value = new rtc_meta_pb.TypingEvent;
      reader.readMessage(value,rtc_meta_pb.TypingEvent.deserializeBinaryFromReader);
      msg.setTypingevent(value);
      break;
    case 45:
      var value = new rtc_meta_pb.BotEvent;
      reader.readMessage(value,rtc_meta_pb.BotEvent.deserializeBinaryFromReader);
      msg.setBotevent(value);
      break;
    case 46:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDuplicatereaction(value);
      break;
    case 47:
      var value = new proto.treeleaf.anydone.entities.DeletePostCommentRequest;
      reader.readMessage(value,proto.treeleaf.anydone.entities.DeletePostCommentRequest.deserializeBinaryFromReader);
      msg.setDeletepostcomment(value);
      break;
    case 48:
      var value = new proto.treeleaf.anydone.entities.AddPostCommentResponse;
      reader.readMessage(value,proto.treeleaf.anydone.entities.AddPostCommentResponse.deserializeBinaryFromReader);
      msg.setPostcommentresponse(value);
      break;
    case 49:
      var value = new proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse;
      reader.readMessage(value,proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse.deserializeBinaryFromReader);
      msg.setPostdeletedresponse(value);
      break;
    case 50:
      var value = new proto.treeleaf.anydone.entities.Reaction;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Reaction.deserializeBinaryFromReader);
      msg.setAddedreaction(value);
      break;
    case 51:
      var value = new meet_signaling_pb.MeetingJoinRequest;
      reader.readMessage(value,meet_signaling_pb.MeetingJoinRequest.deserializeBinaryFromReader);
      msg.setMeetingjoinrequest(value);
      break;
    case 52:
      var value = new meet_signaling_pb.MeetingApproveResponse;
      reader.readMessage(value,meet_signaling_pb.MeetingApproveResponse.deserializeBinaryFromReader);
      msg.setMeetingapprovalresponse(value);
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
proto.treeleaf.anydone.entities.RelayResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.RelayResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.RelayResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.RelayResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponsetype();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getRtcmessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.treeleaf.anydone.entities.RtcMessage.serializeBinaryToWriter
    );
  }
  f = message.getMessagedeliveredresponse();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.treeleaf.anydone.entities.MessageDeliveredResponse.serializeBinaryToWriter
    );
  }
  f = message.getRelayerror();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.treeleaf.anydone.entities.RelayError.serializeBinaryToWriter
    );
  }
  f = message.getDeletedmsgresponse();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.treeleaf.anydone.entities.DeletedMsgResponse.serializeBinaryToWriter
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
  f = message.getBotreply();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getOwneraccountid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getBroadcastvideocall();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      signaling_pb.BroadcastVideoCall.serializeBinaryToWriter
    );
  }
  f = message.getVideoroomhostleftresponse();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      signaling_pb.VideoRoomHostLeft.serializeBinaryToWriter
    );
  }
  f = message.getParticipantleftresponse();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      signaling_pb.ParticipantLeft.serializeBinaryToWriter
    );
  }
  f = message.getStartdrawresponse();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      signaling_pb.StartDraw.serializeBinaryToWriter
    );
  }
  f = message.getStartdrawackresponse();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      signaling_pb.StartDrawAcknowledgement.serializeBinaryToWriter
    );
  }
  f = message.getCanceldrawresponse();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      signaling_pb.CancelDrawing.serializeBinaryToWriter
    );
  }
  f = message.getContext();
  if (f !== 0.0) {
    writer.writeEnum(
      16,
      f
    );
  }
  f = message.getReceivenewtextfieldresponse();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      signaling_pb.ReceiveNewTextField.serializeBinaryToWriter
    );
  }
  f = message.getTextfieldchangeresponse();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      signaling_pb.TextFieldChange.serializeBinaryToWriter
    );
  }
  f = message.getTextfieldremoveresponse();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      signaling_pb.TextFieldRemove.serializeBinaryToWriter
    );
  }
  f = message.getDrawtouchdownresponse();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      signaling_pb.DrawTouchDown.serializeBinaryToWriter
    );
  }
  f = message.getDrawtouchmoveresponse();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      signaling_pb.DrawTouchMove.serializeBinaryToWriter
    );
  }
  f = message.getDrawtouchupresponse();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      signaling_pb.DrawTouchUp.serializeBinaryToWriter
    );
  }
  f = message.getDrawcanvasclearresponse();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      signaling_pb.DrawCanvasClear.serializeBinaryToWriter
    );
  }
  f = message.getDrawmetadatachangeresponse();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      signaling_pb.DrawMetaDataChange.serializeBinaryToWriter
    );
  }
  f = message.getDrawminimizeresponse();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      signaling_pb.DrawMinize.serializeBinaryToWriter
    );
  }
  f = message.getDrawmaximizeresponse();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      signaling_pb.DrawMaximize.serializeBinaryToWriter
    );
  }
  f = message.getDrawcloseresponse();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      signaling_pb.DrawClose.serializeBinaryToWriter
    );
  }
  f = message.getDrawcollabresponse();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      signaling_pb.DrawCollab.serializeBinaryToWriter
    );
  }
  f = message.getDrawcollabacknowledgement();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      signaling_pb.DrawCollabAcknowledgement.serializeBinaryToWriter
    );
  }
  f = message.getDrawstartresponse();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      signaling_pb.DrawStart.serializeBinaryToWriter
    );
  }
  f = message.getDrawendresponse();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      signaling_pb.DrawEnd.serializeBinaryToWriter
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      32,
      f
    );
  }
  f = message.getReceivercalldeclinedresponse();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      signaling_pb.ReceiverCallDeclined.serializeBinaryToWriter
    );
  }
  f = message.getPointer();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      signaling_pb.PointerStart.serializeBinaryToWriter
    );
  }
  f = message.getMaxdrawingexceed();
  if (f != null) {
    writer.writeMessage(
      35,
      f,
      signaling_pb.MaxDrawingExceed.serializeBinaryToWriter
    );
  }
  f = message.getAddcallparticipant();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      signaling_pb.AddCallParticipant.serializeBinaryToWriter
    );
  }
  f = message.getSource();
  if (f !== 0.0) {
    writer.writeEnum(
      37,
      f
    );
  }
  f = message.getCalltransfer();
  if (f != null) {
    writer.writeMessage(
      38,
      f,
      signaling_pb.TransferCall.serializeBinaryToWriter
    );
  }
  f = message.getMuteparticipants();
  if (f != null) {
    writer.writeMessage(
      39,
      f,
      signaling_pb.MuteParticipant.serializeBinaryToWriter
    );
  }
  f = message.getCallend();
  if (f != null) {
    writer.writeMessage(
      40,
      f,
      signaling_pb.CallEnd.serializeBinaryToWriter
    );
  }
  f = message.getCallaccepted();
  if (f != null) {
    writer.writeMessage(
      41,
      f,
      signaling_pb.CallAccepted.serializeBinaryToWriter
    );
  }
  f = message.getVideotoggle();
  if (f != null) {
    writer.writeMessage(
      42,
      f,
      signaling_pb.VideoToggle.serializeBinaryToWriter
    );
  }
  f = message.getPinnedmessageresponse();
  if (f != null) {
    writer.writeMessage(
      43,
      f,
      proto.treeleaf.anydone.entities.PinnedMessageResponse.serializeBinaryToWriter
    );
  }
  f = message.getTypingevent();
  if (f != null) {
    writer.writeMessage(
      44,
      f,
      rtc_meta_pb.TypingEvent.serializeBinaryToWriter
    );
  }
  f = message.getBotevent();
  if (f != null) {
    writer.writeMessage(
      45,
      f,
      rtc_meta_pb.BotEvent.serializeBinaryToWriter
    );
  }
  f = message.getDuplicatereaction();
  if (f) {
    writer.writeBool(
      46,
      f
    );
  }
  f = message.getDeletepostcomment();
  if (f != null) {
    writer.writeMessage(
      47,
      f,
      proto.treeleaf.anydone.entities.DeletePostCommentRequest.serializeBinaryToWriter
    );
  }
  f = message.getPostcommentresponse();
  if (f != null) {
    writer.writeMessage(
      48,
      f,
      proto.treeleaf.anydone.entities.AddPostCommentResponse.serializeBinaryToWriter
    );
  }
  f = message.getPostdeletedresponse();
  if (f != null) {
    writer.writeMessage(
      49,
      f,
      proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse.serializeBinaryToWriter
    );
  }
  f = message.getAddedreaction();
  if (f != null) {
    writer.writeMessage(
      50,
      f,
      proto.treeleaf.anydone.entities.Reaction.serializeBinaryToWriter
    );
  }
  f = message.getMeetingjoinrequest();
  if (f != null) {
    writer.writeMessage(
      51,
      f,
      meet_signaling_pb.MeetingJoinRequest.serializeBinaryToWriter
    );
  }
  f = message.getMeetingapprovalresponse();
  if (f != null) {
    writer.writeMessage(
      52,
      f,
      meet_signaling_pb.MeetingApproveResponse.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.RelayResponse.RelayResponseType = {
  UNKNOWN_RELAY_RESPONSE: 0,
  RTC_MESSAGE_RESPONSE: 1,
  DELIVERED_MSG_RESPONSE: 2,
  RELAY_ERROR_RESPONSE: 3,
  RTC_MESSAGE_DELETE: 4,
  VIDEO_CALL_BROADCAST_RESPONSE: 5,
  VIDEO_CALL_JOIN_RESPONSE: 7,
  VIDEO_ROOM_HOST_LEFT_RESPONSE: 8,
  PARTICIPANT_LEFT_RESPONSE: 9,
  IMAGE_CAPTURE_MESSAGE_RESPONSE: 10,
  CAPTURE_IMAGE_RECEIVED_RESPONSE_RESPONSE: 11,
  CANCEL_DRAWING_MESSAGE_RESPONSE: 12,
  RECEIVE_NEW_TEXT_FIELD_RESPONSE: 13,
  TEXT_FIELD_CHANGE_RESPONSE: 14,
  TEXT_FIELD_REMOVE_RESPONSE: 15,
  DRAW_TOUCH_DOWN_RESPONSE: 16,
  DRAW_TOUCH_MOVE_RESPONSE: 17,
  DRAW_TOUCH_UP_RESPONSE: 18,
  DRAW_CANVAS_CLEAR_RESPONSE: 19,
  DRAW_META_DATA_CHANGE_RESPONSE: 20,
  DRAW_MINIMIZE_RESPONSE: 21,
  DRAW_MAXIMIZE_RESPONSE: 22,
  DRAW_CLOSE_RESPONSE: 23,
  DRAW_COLLAB_RESPONSE: 24,
  DRAW_COLLAB_ACKNOWLEDGEMENT_RESPONSE: 25,
  DRAW_START_RESPONSE: 26,
  DRAW_END_RESPONSE: 27,
  DRAW_ERROR_RESPONSE: 28,
  VIDEO_CALL_ERROR_RESPONSE: 29,
  RECEIVER_CALL_DECLINED_RESPONSE: 30,
  POINTER_START_RESPONSE: 31,
  MAX_DRAWING_EXCEED: 32,
  ADD_CALL_PARTICIPANT: 33,
  TRANSFER_CALL: 34,
  MUTE_PARTICIPANT: 35,
  CALL_END: 36,
  REACTION_MESSAGE: 37,
  CALL_ACCEPTED: 38,
  MESSAGE_UPDATED: 39,
  MESSAGE_PINNED: 40,
  VIDEO_TOGGLE: 41,
  REACTION_DELETED_RESPONSE: 42,
  TYPING_EVENT: 43,
  BOT_EVENT: 44,
  REACTION_ERROR_RESPONSE: 45,
  POST_COMMENT_DELETED: 46,
  POST_COMMENT_ADDED: 47,
  POST_DELETED: 48,
  POST_COMMENT_RESPONSE: 49,
  MEET_JOIN_REQUEST: 50,
  MEET_APPROVAL_RESPONSE: 51
};

/**
 * optional RelayResponseType responseType = 1;
 * @return {!proto.treeleaf.anydone.entities.RelayResponse.RelayResponseType}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getResponsetype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.RelayResponse.RelayResponseType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.RelayResponse.RelayResponseType} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.setResponsetype = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional RtcMessage rtcMessage = 2;
 * @return {?proto.treeleaf.anydone.entities.RtcMessage}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getRtcmessage = function() {
  return /** @type{?proto.treeleaf.anydone.entities.RtcMessage} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.RtcMessage, 2));
};


/**
 * @param {?proto.treeleaf.anydone.entities.RtcMessage|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setRtcmessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearRtcmessage = function() {
  return this.setRtcmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasRtcmessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MessageDeliveredResponse messageDeliveredResponse = 3;
 * @return {?proto.treeleaf.anydone.entities.MessageDeliveredResponse}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getMessagedeliveredresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.MessageDeliveredResponse} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.MessageDeliveredResponse, 3));
};


/**
 * @param {?proto.treeleaf.anydone.entities.MessageDeliveredResponse|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setMessagedeliveredresponse = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearMessagedeliveredresponse = function() {
  return this.setMessagedeliveredresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasMessagedeliveredresponse = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional RelayError relayError = 4;
 * @return {?proto.treeleaf.anydone.entities.RelayError}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getRelayerror = function() {
  return /** @type{?proto.treeleaf.anydone.entities.RelayError} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.RelayError, 4));
};


/**
 * @param {?proto.treeleaf.anydone.entities.RelayError|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setRelayerror = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearRelayerror = function() {
  return this.setRelayerror(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasRelayerror = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional DeletedMsgResponse deletedMsgResponse = 5;
 * @return {?proto.treeleaf.anydone.entities.DeletedMsgResponse}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getDeletedmsgresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DeletedMsgResponse} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.DeletedMsgResponse, 5));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DeletedMsgResponse|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setDeletedmsgresponse = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearDeletedmsgresponse = function() {
  return this.setDeletedmsgresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasDeletedmsgresponse = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional VideoCallJoinResponse videoCallJoinResponse = 6;
 * @return {?proto.treeleaf.anydone.entities.VideoCallJoinResponse}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getVideocalljoinresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.VideoCallJoinResponse} */ (
    jspb.Message.getWrapperField(this, signaling_pb.VideoCallJoinResponse, 6));
};


/**
 * @param {?proto.treeleaf.anydone.entities.VideoCallJoinResponse|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setVideocalljoinresponse = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearVideocalljoinresponse = function() {
  return this.setVideocalljoinresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasVideocalljoinresponse = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool botReply = 7;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getBotreply = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.setBotreply = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional string ownerAccountId = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getOwneraccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.setOwneraccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional BroadcastVideoCall broadcastVideoCall = 9;
 * @return {?proto.treeleaf.anydone.entities.BroadcastVideoCall}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getBroadcastvideocall = function() {
  return /** @type{?proto.treeleaf.anydone.entities.BroadcastVideoCall} */ (
    jspb.Message.getWrapperField(this, signaling_pb.BroadcastVideoCall, 9));
};


/**
 * @param {?proto.treeleaf.anydone.entities.BroadcastVideoCall|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setBroadcastvideocall = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearBroadcastvideocall = function() {
  return this.setBroadcastvideocall(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasBroadcastvideocall = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional VideoRoomHostLeft videoRoomHostLeftResponse = 10;
 * @return {?proto.treeleaf.anydone.entities.VideoRoomHostLeft}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getVideoroomhostleftresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.VideoRoomHostLeft} */ (
    jspb.Message.getWrapperField(this, signaling_pb.VideoRoomHostLeft, 10));
};


/**
 * @param {?proto.treeleaf.anydone.entities.VideoRoomHostLeft|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setVideoroomhostleftresponse = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearVideoroomhostleftresponse = function() {
  return this.setVideoroomhostleftresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasVideoroomhostleftresponse = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional ParticipantLeft participantLeftResponse = 11;
 * @return {?proto.treeleaf.anydone.entities.ParticipantLeft}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getParticipantleftresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.ParticipantLeft} */ (
    jspb.Message.getWrapperField(this, signaling_pb.ParticipantLeft, 11));
};


/**
 * @param {?proto.treeleaf.anydone.entities.ParticipantLeft|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setParticipantleftresponse = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearParticipantleftresponse = function() {
  return this.setParticipantleftresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasParticipantleftresponse = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional StartDraw startDrawResponse = 13;
 * @return {?proto.treeleaf.anydone.entities.StartDraw}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getStartdrawresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.StartDraw} */ (
    jspb.Message.getWrapperField(this, signaling_pb.StartDraw, 13));
};


/**
 * @param {?proto.treeleaf.anydone.entities.StartDraw|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setStartdrawresponse = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearStartdrawresponse = function() {
  return this.setStartdrawresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasStartdrawresponse = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional StartDrawAcknowledgement startDrawAckResponse = 14;
 * @return {?proto.treeleaf.anydone.entities.StartDrawAcknowledgement}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getStartdrawackresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.StartDrawAcknowledgement} */ (
    jspb.Message.getWrapperField(this, signaling_pb.StartDrawAcknowledgement, 14));
};


/**
 * @param {?proto.treeleaf.anydone.entities.StartDrawAcknowledgement|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setStartdrawackresponse = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearStartdrawackresponse = function() {
  return this.setStartdrawackresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasStartdrawackresponse = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional CancelDrawing cancelDrawResponse = 15;
 * @return {?proto.treeleaf.anydone.entities.CancelDrawing}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getCanceldrawresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.CancelDrawing} */ (
    jspb.Message.getWrapperField(this, signaling_pb.CancelDrawing, 15));
};


/**
 * @param {?proto.treeleaf.anydone.entities.CancelDrawing|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setCanceldrawresponse = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearCanceldrawresponse = function() {
  return this.setCanceldrawresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasCanceldrawresponse = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional ServiceContext context = 16;
 * @return {!proto.treeleaf.anydone.entities.ServiceContext}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getContext = function() {
  return /** @type {!proto.treeleaf.anydone.entities.ServiceContext} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.ServiceContext} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.setContext = function(value) {
  return jspb.Message.setProto3EnumField(this, 16, value);
};


/**
 * optional ReceiveNewTextField receiveNewTextFieldResponse = 17;
 * @return {?proto.treeleaf.anydone.entities.ReceiveNewTextField}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getReceivenewtextfieldresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.ReceiveNewTextField} */ (
    jspb.Message.getWrapperField(this, signaling_pb.ReceiveNewTextField, 17));
};


/**
 * @param {?proto.treeleaf.anydone.entities.ReceiveNewTextField|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setReceivenewtextfieldresponse = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearReceivenewtextfieldresponse = function() {
  return this.setReceivenewtextfieldresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasReceivenewtextfieldresponse = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional TextFieldChange textFieldChangeResponse = 18;
 * @return {?proto.treeleaf.anydone.entities.TextFieldChange}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getTextfieldchangeresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.TextFieldChange} */ (
    jspb.Message.getWrapperField(this, signaling_pb.TextFieldChange, 18));
};


/**
 * @param {?proto.treeleaf.anydone.entities.TextFieldChange|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setTextfieldchangeresponse = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearTextfieldchangeresponse = function() {
  return this.setTextfieldchangeresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasTextfieldchangeresponse = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional TextFieldRemove textFieldRemoveResponse = 19;
 * @return {?proto.treeleaf.anydone.entities.TextFieldRemove}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getTextfieldremoveresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.TextFieldRemove} */ (
    jspb.Message.getWrapperField(this, signaling_pb.TextFieldRemove, 19));
};


/**
 * @param {?proto.treeleaf.anydone.entities.TextFieldRemove|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setTextfieldremoveresponse = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearTextfieldremoveresponse = function() {
  return this.setTextfieldremoveresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasTextfieldremoveresponse = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional DrawTouchDown drawTouchDownResponse = 20;
 * @return {?proto.treeleaf.anydone.entities.DrawTouchDown}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getDrawtouchdownresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DrawTouchDown} */ (
    jspb.Message.getWrapperField(this, signaling_pb.DrawTouchDown, 20));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DrawTouchDown|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setDrawtouchdownresponse = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearDrawtouchdownresponse = function() {
  return this.setDrawtouchdownresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasDrawtouchdownresponse = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional DrawTouchMove drawTouchMoveResponse = 21;
 * @return {?proto.treeleaf.anydone.entities.DrawTouchMove}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getDrawtouchmoveresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DrawTouchMove} */ (
    jspb.Message.getWrapperField(this, signaling_pb.DrawTouchMove, 21));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DrawTouchMove|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setDrawtouchmoveresponse = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearDrawtouchmoveresponse = function() {
  return this.setDrawtouchmoveresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasDrawtouchmoveresponse = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional DrawTouchUp drawTouchUpResponse = 22;
 * @return {?proto.treeleaf.anydone.entities.DrawTouchUp}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getDrawtouchupresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DrawTouchUp} */ (
    jspb.Message.getWrapperField(this, signaling_pb.DrawTouchUp, 22));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DrawTouchUp|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setDrawtouchupresponse = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearDrawtouchupresponse = function() {
  return this.setDrawtouchupresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasDrawtouchupresponse = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional DrawCanvasClear drawCanvasClearResponse = 23;
 * @return {?proto.treeleaf.anydone.entities.DrawCanvasClear}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getDrawcanvasclearresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DrawCanvasClear} */ (
    jspb.Message.getWrapperField(this, signaling_pb.DrawCanvasClear, 23));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DrawCanvasClear|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setDrawcanvasclearresponse = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearDrawcanvasclearresponse = function() {
  return this.setDrawcanvasclearresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasDrawcanvasclearresponse = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional DrawMetaDataChange drawMetaDataChangeResponse = 24;
 * @return {?proto.treeleaf.anydone.entities.DrawMetaDataChange}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getDrawmetadatachangeresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DrawMetaDataChange} */ (
    jspb.Message.getWrapperField(this, signaling_pb.DrawMetaDataChange, 24));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DrawMetaDataChange|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setDrawmetadatachangeresponse = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearDrawmetadatachangeresponse = function() {
  return this.setDrawmetadatachangeresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasDrawmetadatachangeresponse = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional DrawMinize drawMinimizeResponse = 25;
 * @return {?proto.treeleaf.anydone.entities.DrawMinize}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getDrawminimizeresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DrawMinize} */ (
    jspb.Message.getWrapperField(this, signaling_pb.DrawMinize, 25));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DrawMinize|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setDrawminimizeresponse = function(value) {
  return jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearDrawminimizeresponse = function() {
  return this.setDrawminimizeresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasDrawminimizeresponse = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional DrawMaximize drawMaximizeResponse = 26;
 * @return {?proto.treeleaf.anydone.entities.DrawMaximize}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getDrawmaximizeresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DrawMaximize} */ (
    jspb.Message.getWrapperField(this, signaling_pb.DrawMaximize, 26));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DrawMaximize|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setDrawmaximizeresponse = function(value) {
  return jspb.Message.setWrapperField(this, 26, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearDrawmaximizeresponse = function() {
  return this.setDrawmaximizeresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasDrawmaximizeresponse = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional DrawClose drawCloseResponse = 27;
 * @return {?proto.treeleaf.anydone.entities.DrawClose}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getDrawcloseresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DrawClose} */ (
    jspb.Message.getWrapperField(this, signaling_pb.DrawClose, 27));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DrawClose|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setDrawcloseresponse = function(value) {
  return jspb.Message.setWrapperField(this, 27, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearDrawcloseresponse = function() {
  return this.setDrawcloseresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasDrawcloseresponse = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional DrawCollab drawCollabResponse = 28;
 * @return {?proto.treeleaf.anydone.entities.DrawCollab}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getDrawcollabresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DrawCollab} */ (
    jspb.Message.getWrapperField(this, signaling_pb.DrawCollab, 28));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DrawCollab|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setDrawcollabresponse = function(value) {
  return jspb.Message.setWrapperField(this, 28, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearDrawcollabresponse = function() {
  return this.setDrawcollabresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasDrawcollabresponse = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional DrawCollabAcknowledgement drawCollabAcknowledgement = 29;
 * @return {?proto.treeleaf.anydone.entities.DrawCollabAcknowledgement}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getDrawcollabacknowledgement = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DrawCollabAcknowledgement} */ (
    jspb.Message.getWrapperField(this, signaling_pb.DrawCollabAcknowledgement, 29));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DrawCollabAcknowledgement|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setDrawcollabacknowledgement = function(value) {
  return jspb.Message.setWrapperField(this, 29, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearDrawcollabacknowledgement = function() {
  return this.setDrawcollabacknowledgement(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasDrawcollabacknowledgement = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional DrawStart drawStartResponse = 30;
 * @return {?proto.treeleaf.anydone.entities.DrawStart}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getDrawstartresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DrawStart} */ (
    jspb.Message.getWrapperField(this, signaling_pb.DrawStart, 30));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DrawStart|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setDrawstartresponse = function(value) {
  return jspb.Message.setWrapperField(this, 30, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearDrawstartresponse = function() {
  return this.setDrawstartresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasDrawstartresponse = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional DrawEnd drawEndResponse = 31;
 * @return {?proto.treeleaf.anydone.entities.DrawEnd}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getDrawendresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DrawEnd} */ (
    jspb.Message.getWrapperField(this, signaling_pb.DrawEnd, 31));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DrawEnd|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setDrawendresponse = function(value) {
  return jspb.Message.setWrapperField(this, 31, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearDrawendresponse = function() {
  return this.setDrawendresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasDrawendresponse = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional string refId = 32;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 32, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 32, value);
};


/**
 * optional ReceiverCallDeclined receiverCallDeclinedResponse = 33;
 * @return {?proto.treeleaf.anydone.entities.ReceiverCallDeclined}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getReceivercalldeclinedresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.ReceiverCallDeclined} */ (
    jspb.Message.getWrapperField(this, signaling_pb.ReceiverCallDeclined, 33));
};


/**
 * @param {?proto.treeleaf.anydone.entities.ReceiverCallDeclined|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setReceivercalldeclinedresponse = function(value) {
  return jspb.Message.setWrapperField(this, 33, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearReceivercalldeclinedresponse = function() {
  return this.setReceivercalldeclinedresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasReceivercalldeclinedresponse = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional PointerStart pointer = 34;
 * @return {?proto.treeleaf.anydone.entities.PointerStart}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getPointer = function() {
  return /** @type{?proto.treeleaf.anydone.entities.PointerStart} */ (
    jspb.Message.getWrapperField(this, signaling_pb.PointerStart, 34));
};


/**
 * @param {?proto.treeleaf.anydone.entities.PointerStart|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setPointer = function(value) {
  return jspb.Message.setWrapperField(this, 34, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearPointer = function() {
  return this.setPointer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasPointer = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional MaxDrawingExceed maxDrawingExceed = 35;
 * @return {?proto.treeleaf.anydone.entities.MaxDrawingExceed}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getMaxdrawingexceed = function() {
  return /** @type{?proto.treeleaf.anydone.entities.MaxDrawingExceed} */ (
    jspb.Message.getWrapperField(this, signaling_pb.MaxDrawingExceed, 35));
};


/**
 * @param {?proto.treeleaf.anydone.entities.MaxDrawingExceed|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setMaxdrawingexceed = function(value) {
  return jspb.Message.setWrapperField(this, 35, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearMaxdrawingexceed = function() {
  return this.setMaxdrawingexceed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasMaxdrawingexceed = function() {
  return jspb.Message.getField(this, 35) != null;
};


/**
 * optional AddCallParticipant addCallParticipant = 36;
 * @return {?proto.treeleaf.anydone.entities.AddCallParticipant}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getAddcallparticipant = function() {
  return /** @type{?proto.treeleaf.anydone.entities.AddCallParticipant} */ (
    jspb.Message.getWrapperField(this, signaling_pb.AddCallParticipant, 36));
};


/**
 * @param {?proto.treeleaf.anydone.entities.AddCallParticipant|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setAddcallparticipant = function(value) {
  return jspb.Message.setWrapperField(this, 36, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearAddcallparticipant = function() {
  return this.setAddcallparticipant(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasAddcallparticipant = function() {
  return jspb.Message.getField(this, 36) != null;
};


/**
 * optional ThirdPartySource source = 37;
 * @return {!proto.treeleaf.anydone.entities.ThirdPartySource}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getSource = function() {
  return /** @type {!proto.treeleaf.anydone.entities.ThirdPartySource} */ (jspb.Message.getFieldWithDefault(this, 37, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.ThirdPartySource} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.setSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 37, value);
};


/**
 * optional TransferCall callTransfer = 38;
 * @return {?proto.treeleaf.anydone.entities.TransferCall}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getCalltransfer = function() {
  return /** @type{?proto.treeleaf.anydone.entities.TransferCall} */ (
    jspb.Message.getWrapperField(this, signaling_pb.TransferCall, 38));
};


/**
 * @param {?proto.treeleaf.anydone.entities.TransferCall|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setCalltransfer = function(value) {
  return jspb.Message.setWrapperField(this, 38, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearCalltransfer = function() {
  return this.setCalltransfer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasCalltransfer = function() {
  return jspb.Message.getField(this, 38) != null;
};


/**
 * optional MuteParticipant muteParticipants = 39;
 * @return {?proto.treeleaf.anydone.entities.MuteParticipant}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getMuteparticipants = function() {
  return /** @type{?proto.treeleaf.anydone.entities.MuteParticipant} */ (
    jspb.Message.getWrapperField(this, signaling_pb.MuteParticipant, 39));
};


/**
 * @param {?proto.treeleaf.anydone.entities.MuteParticipant|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setMuteparticipants = function(value) {
  return jspb.Message.setWrapperField(this, 39, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearMuteparticipants = function() {
  return this.setMuteparticipants(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasMuteparticipants = function() {
  return jspb.Message.getField(this, 39) != null;
};


/**
 * optional CallEnd callEnd = 40;
 * @return {?proto.treeleaf.anydone.entities.CallEnd}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getCallend = function() {
  return /** @type{?proto.treeleaf.anydone.entities.CallEnd} */ (
    jspb.Message.getWrapperField(this, signaling_pb.CallEnd, 40));
};


/**
 * @param {?proto.treeleaf.anydone.entities.CallEnd|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setCallend = function(value) {
  return jspb.Message.setWrapperField(this, 40, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearCallend = function() {
  return this.setCallend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasCallend = function() {
  return jspb.Message.getField(this, 40) != null;
};


/**
 * optional CallAccepted callAccepted = 41;
 * @return {?proto.treeleaf.anydone.entities.CallAccepted}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getCallaccepted = function() {
  return /** @type{?proto.treeleaf.anydone.entities.CallAccepted} */ (
    jspb.Message.getWrapperField(this, signaling_pb.CallAccepted, 41));
};


/**
 * @param {?proto.treeleaf.anydone.entities.CallAccepted|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setCallaccepted = function(value) {
  return jspb.Message.setWrapperField(this, 41, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearCallaccepted = function() {
  return this.setCallaccepted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasCallaccepted = function() {
  return jspb.Message.getField(this, 41) != null;
};


/**
 * optional VideoToggle videoToggle = 42;
 * @return {?proto.treeleaf.anydone.entities.VideoToggle}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getVideotoggle = function() {
  return /** @type{?proto.treeleaf.anydone.entities.VideoToggle} */ (
    jspb.Message.getWrapperField(this, signaling_pb.VideoToggle, 42));
};


/**
 * @param {?proto.treeleaf.anydone.entities.VideoToggle|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setVideotoggle = function(value) {
  return jspb.Message.setWrapperField(this, 42, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearVideotoggle = function() {
  return this.setVideotoggle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasVideotoggle = function() {
  return jspb.Message.getField(this, 42) != null;
};


/**
 * optional PinnedMessageResponse pinnedMessageResponse = 43;
 * @return {?proto.treeleaf.anydone.entities.PinnedMessageResponse}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getPinnedmessageresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.PinnedMessageResponse} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.PinnedMessageResponse, 43));
};


/**
 * @param {?proto.treeleaf.anydone.entities.PinnedMessageResponse|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setPinnedmessageresponse = function(value) {
  return jspb.Message.setWrapperField(this, 43, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearPinnedmessageresponse = function() {
  return this.setPinnedmessageresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasPinnedmessageresponse = function() {
  return jspb.Message.getField(this, 43) != null;
};


/**
 * optional TypingEvent typingEvent = 44;
 * @return {?proto.treeleaf.anydone.entities.TypingEvent}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getTypingevent = function() {
  return /** @type{?proto.treeleaf.anydone.entities.TypingEvent} */ (
    jspb.Message.getWrapperField(this, rtc_meta_pb.TypingEvent, 44));
};


/**
 * @param {?proto.treeleaf.anydone.entities.TypingEvent|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setTypingevent = function(value) {
  return jspb.Message.setWrapperField(this, 44, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearTypingevent = function() {
  return this.setTypingevent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasTypingevent = function() {
  return jspb.Message.getField(this, 44) != null;
};


/**
 * optional BotEvent botEvent = 45;
 * @return {?proto.treeleaf.anydone.entities.BotEvent}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getBotevent = function() {
  return /** @type{?proto.treeleaf.anydone.entities.BotEvent} */ (
    jspb.Message.getWrapperField(this, rtc_meta_pb.BotEvent, 45));
};


/**
 * @param {?proto.treeleaf.anydone.entities.BotEvent|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setBotevent = function(value) {
  return jspb.Message.setWrapperField(this, 45, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearBotevent = function() {
  return this.setBotevent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasBotevent = function() {
  return jspb.Message.getField(this, 45) != null;
};


/**
 * optional bool duplicateReaction = 46;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getDuplicatereaction = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 46, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.setDuplicatereaction = function(value) {
  return jspb.Message.setProto3BooleanField(this, 46, value);
};


/**
 * optional DeletePostCommentRequest deletePostComment = 47;
 * @return {?proto.treeleaf.anydone.entities.DeletePostCommentRequest}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getDeletepostcomment = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DeletePostCommentRequest} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.DeletePostCommentRequest, 47));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DeletePostCommentRequest|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setDeletepostcomment = function(value) {
  return jspb.Message.setWrapperField(this, 47, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearDeletepostcomment = function() {
  return this.setDeletepostcomment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasDeletepostcomment = function() {
  return jspb.Message.getField(this, 47) != null;
};


/**
 * optional AddPostCommentResponse postCommentResponse = 48;
 * @return {?proto.treeleaf.anydone.entities.AddPostCommentResponse}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getPostcommentresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.AddPostCommentResponse} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.AddPostCommentResponse, 48));
};


/**
 * @param {?proto.treeleaf.anydone.entities.AddPostCommentResponse|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setPostcommentresponse = function(value) {
  return jspb.Message.setWrapperField(this, 48, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearPostcommentresponse = function() {
  return this.setPostcommentresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasPostcommentresponse = function() {
  return jspb.Message.getField(this, 48) != null;
};


/**
 * optional DeletedThirdPartyPostResponse postDeletedResponse = 49;
 * @return {?proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getPostdeletedresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse, 49));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DeletedThirdPartyPostResponse|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setPostdeletedresponse = function(value) {
  return jspb.Message.setWrapperField(this, 49, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearPostdeletedresponse = function() {
  return this.setPostdeletedresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasPostdeletedresponse = function() {
  return jspb.Message.getField(this, 49) != null;
};


/**
 * optional Reaction addedReaction = 50;
 * @return {?proto.treeleaf.anydone.entities.Reaction}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getAddedreaction = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Reaction} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.Reaction, 50));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Reaction|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setAddedreaction = function(value) {
  return jspb.Message.setWrapperField(this, 50, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearAddedreaction = function() {
  return this.setAddedreaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasAddedreaction = function() {
  return jspb.Message.getField(this, 50) != null;
};


/**
 * optional MeetingJoinRequest meetingJoinRequest = 51;
 * @return {?proto.treeleaf.anydone.entities.MeetingJoinRequest}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getMeetingjoinrequest = function() {
  return /** @type{?proto.treeleaf.anydone.entities.MeetingJoinRequest} */ (
    jspb.Message.getWrapperField(this, meet_signaling_pb.MeetingJoinRequest, 51));
};


/**
 * @param {?proto.treeleaf.anydone.entities.MeetingJoinRequest|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setMeetingjoinrequest = function(value) {
  return jspb.Message.setWrapperField(this, 51, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearMeetingjoinrequest = function() {
  return this.setMeetingjoinrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasMeetingjoinrequest = function() {
  return jspb.Message.getField(this, 51) != null;
};


/**
 * optional MeetingApproveResponse meetingApprovalResponse = 52;
 * @return {?proto.treeleaf.anydone.entities.MeetingApproveResponse}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.getMeetingapprovalresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.MeetingApproveResponse} */ (
    jspb.Message.getWrapperField(this, meet_signaling_pb.MeetingApproveResponse, 52));
};


/**
 * @param {?proto.treeleaf.anydone.entities.MeetingApproveResponse|undefined} value
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
*/
proto.treeleaf.anydone.entities.RelayResponse.prototype.setMeetingapprovalresponse = function(value) {
  return jspb.Message.setWrapperField(this, 52, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.RelayResponse} returns this
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.clearMeetingapprovalresponse = function() {
  return this.setMeetingapprovalresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.RelayResponse.prototype.hasMeetingapprovalresponse = function() {
  return jspb.Message.getField(this, 52) != null;
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
proto.treeleaf.anydone.entities.CallRoomDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.CallRoomDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.CallRoomDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.CallRoomDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pluginid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    roomid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    avbaseurl: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.treeleaf.anydone.entities.CallRoomDetail}
 */
proto.treeleaf.anydone.entities.CallRoomDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.CallRoomDetail;
  return proto.treeleaf.anydone.entities.CallRoomDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.CallRoomDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.CallRoomDetail}
 */
proto.treeleaf.anydone.entities.CallRoomDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPluginid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvbaseurl(value);
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
proto.treeleaf.anydone.entities.CallRoomDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.CallRoomDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.CallRoomDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.CallRoomDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPluginid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAvbaseurl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string sessionId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CallRoomDetail.prototype.getSessionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CallRoomDetail} returns this
 */
proto.treeleaf.anydone.entities.CallRoomDetail.prototype.setSessionid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string pluginId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CallRoomDetail.prototype.getPluginid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CallRoomDetail} returns this
 */
proto.treeleaf.anydone.entities.CallRoomDetail.prototype.setPluginid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string roomId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CallRoomDetail.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CallRoomDetail} returns this
 */
proto.treeleaf.anydone.entities.CallRoomDetail.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string avBaseUrl = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CallRoomDetail.prototype.getAvbaseurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CallRoomDetail} returns this
 */
proto.treeleaf.anydone.entities.CallRoomDetail.prototype.setAvbaseurl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.treeleaf.anydone.entities.RtcRelayServerInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.RtcRelayServerInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.RtcRelayServerInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.RtcRelayServerInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    serverid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 2, 0),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.treeleaf.anydone.entities.RtcRelayServerInfo}
 */
proto.treeleaf.anydone.entities.RtcRelayServerInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.RtcRelayServerInfo;
  return proto.treeleaf.anydone.entities.RtcRelayServerInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.RtcRelayServerInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.RtcRelayServerInfo}
 */
proto.treeleaf.anydone.entities.RtcRelayServerInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServerid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 3:
      var value = /** @type {!proto.treeleaf.anydone.entities.RtcRelayServerInfo.Status} */ (reader.readEnum());
      msg.setStatus(value);
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
proto.treeleaf.anydone.entities.RtcRelayServerInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.RtcRelayServerInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.RtcRelayServerInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.RtcRelayServerInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServerid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.RtcRelayServerInfo.Status = {
  UNKNOWN_STATUS: 0,
  DISCONNECTED: 1,
  CONNECTED: 2
};

/**
 * optional string serverId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RtcRelayServerInfo.prototype.getServerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RtcRelayServerInfo} returns this
 */
proto.treeleaf.anydone.entities.RtcRelayServerInfo.prototype.setServerid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 timestamp = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.RtcRelayServerInfo.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.RtcRelayServerInfo} returns this
 */
proto.treeleaf.anydone.entities.RtcRelayServerInfo.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Status status = 3;
 * @return {!proto.treeleaf.anydone.entities.RtcRelayServerInfo.Status}
 */
proto.treeleaf.anydone.entities.RtcRelayServerInfo.prototype.getStatus = function() {
  return /** @type {!proto.treeleaf.anydone.entities.RtcRelayServerInfo.Status} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.RtcRelayServerInfo.Status} value
 * @return {!proto.treeleaf.anydone.entities.RtcRelayServerInfo} returns this
 */
proto.treeleaf.anydone.entities.RtcRelayServerInfo.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.RtcMessageType = {
  UNKNOWN_RTC_MESSAGE_TYPE: 0,
  TEXT_RTC_MESSAGE: 1,
  IMAGE_RTC_MESSAGE: 2,
  DOC_RTC_MESSAGE: 3,
  AUDIO_RTC_MESSAGE: 4,
  VIDEO_RTC_MESSAGE: 5,
  LINK_RTC_MESSAGE: 6,
  VIDEO_CALL_RTC_MESSAGE: 7,
  AUDIO_CALL_RTC_MESSAGE: 8,
  K_GRAPH_MESSAGE: 9,
  BOT_CONVERSATION_REQUEST: 13,
  K_GRAPH_RESPONSE: 14,
  CALL_LINK_MESSAGE: 15,
  CODE_BLOCK_MESSAGE: 16,
  QUICK_CALL: 17,
  REMINDER_RTC_MESSAGE: 18,
  ACTION_MESSAGE: 19,
  AUTO_REPLY_BOT: 20
};

/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.MessageActor = {
  UNKNOWN_MESSAGE_ACTOR: 0,
  ANYDONE_BOT_MESSAGE: 1,
  ANYDONE_USER_MESSAGE: 2,
  EXTERNAL_USER_MESSAGE: 3,
  ANYDONE_APP_MESSAGE: 4
};

/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.RtcMessageStatus = {
  UNKNOWN_RTC_MSG_STATUS: 0,
  SEEN_RTC_MSG: 1,
  MSG_DELIVERED: 2,
  MSG_NOT_DELIVERED: 3
};

goog.object.extend(exports, proto.treeleaf.anydone.entities);
