// source: calendar_notification.proto
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

goog.exportSymbol('proto.treeleaf.anydone.entities.CalendarNotification', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.CalendarNotification.ActionType', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.GoogleChannelHeader', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.MicrosoftChannelHeader', null, global);
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
proto.treeleaf.anydone.entities.CalendarNotification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.CalendarNotification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.CalendarNotification.displayName = 'proto.treeleaf.anydone.entities.CalendarNotification';
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
proto.treeleaf.anydone.entities.GoogleChannelHeader = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.GoogleChannelHeader, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.GoogleChannelHeader.displayName = 'proto.treeleaf.anydone.entities.GoogleChannelHeader';
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
proto.treeleaf.anydone.entities.MicrosoftChannelHeader = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.MicrosoftChannelHeader, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.MicrosoftChannelHeader.displayName = 'proto.treeleaf.anydone.entities.MicrosoftChannelHeader';
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
proto.treeleaf.anydone.entities.CalendarNotification.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.CalendarNotification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.CalendarNotification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.CalendarNotification.toObject = function(includeInstance, msg) {
  var f, obj = {
    actiontype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    meetid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    url: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.treeleaf.anydone.entities.CalendarNotification}
 */
proto.treeleaf.anydone.entities.CalendarNotification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.CalendarNotification;
  return proto.treeleaf.anydone.entities.CalendarNotification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.CalendarNotification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.CalendarNotification}
 */
proto.treeleaf.anydone.entities.CalendarNotification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.treeleaf.anydone.entities.CalendarNotification.ActionType} */ (reader.readEnum());
      msg.setActiontype(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
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
proto.treeleaf.anydone.entities.CalendarNotification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.CalendarNotification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.CalendarNotification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.CalendarNotification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActiontype();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMeetid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.CalendarNotification.ActionType = {
  UNKNOWN_ACTION_TYPE: 0,
  MEET_ADDED: 1,
  MEET_UPDATED: 2,
  MEET_DELETED: 3
};

/**
 * optional ActionType actionType = 1;
 * @return {!proto.treeleaf.anydone.entities.CalendarNotification.ActionType}
 */
proto.treeleaf.anydone.entities.CalendarNotification.prototype.getActiontype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.CalendarNotification.ActionType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.CalendarNotification.ActionType} value
 * @return {!proto.treeleaf.anydone.entities.CalendarNotification} returns this
 */
proto.treeleaf.anydone.entities.CalendarNotification.prototype.setActiontype = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string meetId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CalendarNotification.prototype.getMeetid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CalendarNotification} returns this
 */
proto.treeleaf.anydone.entities.CalendarNotification.prototype.setMeetid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string url = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CalendarNotification.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CalendarNotification} returns this
 */
proto.treeleaf.anydone.entities.CalendarNotification.prototype.setUrl = function(value) {
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
proto.treeleaf.anydone.entities.GoogleChannelHeader.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.GoogleChannelHeader.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.GoogleChannelHeader} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tokenvalue: jspb.Message.getFieldWithDefault(msg, 2, ""),
    expirationdate: jspb.Message.getFieldWithDefault(msg, 3, ""),
    resourceid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    resourceuri: jspb.Message.getFieldWithDefault(msg, 5, ""),
    resourcestate: jspb.Message.getFieldWithDefault(msg, 6, ""),
    messagenumber: jspb.Message.getFieldWithDefault(msg, 7, ""),
    contenttype: jspb.Message.getFieldWithDefault(msg, 8, 0),
    contentlength: jspb.Message.getFieldWithDefault(msg, 9, 0),
    synctoken: jspb.Message.getFieldWithDefault(msg, 10, ""),
    authcode: jspb.Message.getFieldWithDefault(msg, 11, ""),
    refreshtoken: jspb.Message.getFieldWithDefault(msg, 12, ""),
    email: jspb.Message.getFieldWithDefault(msg, 13, ""),
    accountid: jspb.Message.getFieldWithDefault(msg, 14, "")
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
 * @return {!proto.treeleaf.anydone.entities.GoogleChannelHeader}
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.GoogleChannelHeader;
  return proto.treeleaf.anydone.entities.GoogleChannelHeader.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.GoogleChannelHeader} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.GoogleChannelHeader}
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTokenvalue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setExpirationdate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceuri(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourcestate(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagenumber(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setContenttype(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setContentlength(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setSynctoken(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthcode(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefreshtoken(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 14:
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
proto.treeleaf.anydone.entities.GoogleChannelHeader.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.GoogleChannelHeader.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.GoogleChannelHeader} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTokenvalue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExpirationdate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getResourceid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getResourceuri();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getResourcestate();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getMessagenumber();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getContenttype();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getContentlength();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getSynctoken();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getAuthcode();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getRefreshtoken();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getAccountid();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
};


/**
 * optional string Id = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.GoogleChannelHeader} returns this
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string tokenValue = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.prototype.getTokenvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.GoogleChannelHeader} returns this
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.prototype.setTokenvalue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string expirationDate = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.prototype.getExpirationdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.GoogleChannelHeader} returns this
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.prototype.setExpirationdate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string resourceId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.prototype.getResourceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.GoogleChannelHeader} returns this
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.prototype.setResourceid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string resourceUri = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.prototype.getResourceuri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.GoogleChannelHeader} returns this
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.prototype.setResourceuri = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string resourceState = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.prototype.getResourcestate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.GoogleChannelHeader} returns this
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.prototype.setResourcestate = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string messageNumber = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.prototype.getMessagenumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.GoogleChannelHeader} returns this
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.prototype.setMessagenumber = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int32 contentType = 8;
 * @return {number}
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.prototype.getContenttype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.GoogleChannelHeader} returns this
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.prototype.setContenttype = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 contentLength = 9;
 * @return {number}
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.prototype.getContentlength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.GoogleChannelHeader} returns this
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.prototype.setContentlength = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string syncToken = 10;
 * @return {string}
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.prototype.getSynctoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.GoogleChannelHeader} returns this
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.prototype.setSynctoken = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string authCode = 11;
 * @return {string}
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.prototype.getAuthcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.GoogleChannelHeader} returns this
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.prototype.setAuthcode = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string refreshToken = 12;
 * @return {string}
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.prototype.getRefreshtoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.GoogleChannelHeader} returns this
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.prototype.setRefreshtoken = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string email = 13;
 * @return {string}
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.GoogleChannelHeader} returns this
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string accountId = 14;
 * @return {string}
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.GoogleChannelHeader} returns this
 */
proto.treeleaf.anydone.entities.GoogleChannelHeader.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
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
proto.treeleaf.anydone.entities.MicrosoftChannelHeader.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.MicrosoftChannelHeader.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.MicrosoftChannelHeader} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.MicrosoftChannelHeader.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    synctoken: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ownerid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    email: jspb.Message.getFieldWithDefault(msg, 4, ""),
    authkey: jspb.Message.getFieldWithDefault(msg, 5, ""),
    resourceuri: jspb.Message.getFieldWithDefault(msg, 6, ""),
    spaccountid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    accountid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    refreshtoken: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.treeleaf.anydone.entities.MicrosoftChannelHeader}
 */
proto.treeleaf.anydone.entities.MicrosoftChannelHeader.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.MicrosoftChannelHeader;
  return proto.treeleaf.anydone.entities.MicrosoftChannelHeader.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.MicrosoftChannelHeader} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.MicrosoftChannelHeader}
 */
proto.treeleaf.anydone.entities.MicrosoftChannelHeader.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSynctoken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwnerid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthkey(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceuri(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpaccountid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefreshtoken(value);
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
proto.treeleaf.anydone.entities.MicrosoftChannelHeader.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.MicrosoftChannelHeader.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.MicrosoftChannelHeader} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.MicrosoftChannelHeader.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSynctoken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOwnerid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAuthkey();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getResourceuri();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSpaccountid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getAccountid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getRefreshtoken();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string Id = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MicrosoftChannelHeader.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MicrosoftChannelHeader} returns this
 */
proto.treeleaf.anydone.entities.MicrosoftChannelHeader.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string syncToken = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MicrosoftChannelHeader.prototype.getSynctoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MicrosoftChannelHeader} returns this
 */
proto.treeleaf.anydone.entities.MicrosoftChannelHeader.prototype.setSynctoken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string ownerId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MicrosoftChannelHeader.prototype.getOwnerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MicrosoftChannelHeader} returns this
 */
proto.treeleaf.anydone.entities.MicrosoftChannelHeader.prototype.setOwnerid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string email = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MicrosoftChannelHeader.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MicrosoftChannelHeader} returns this
 */
proto.treeleaf.anydone.entities.MicrosoftChannelHeader.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string authKey = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MicrosoftChannelHeader.prototype.getAuthkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MicrosoftChannelHeader} returns this
 */
proto.treeleaf.anydone.entities.MicrosoftChannelHeader.prototype.setAuthkey = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string resourceUri = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MicrosoftChannelHeader.prototype.getResourceuri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MicrosoftChannelHeader} returns this
 */
proto.treeleaf.anydone.entities.MicrosoftChannelHeader.prototype.setResourceuri = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string spAccountId = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MicrosoftChannelHeader.prototype.getSpaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MicrosoftChannelHeader} returns this
 */
proto.treeleaf.anydone.entities.MicrosoftChannelHeader.prototype.setSpaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string accountId = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MicrosoftChannelHeader.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MicrosoftChannelHeader} returns this
 */
proto.treeleaf.anydone.entities.MicrosoftChannelHeader.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string refreshToken = 9;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MicrosoftChannelHeader.prototype.getRefreshtoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MicrosoftChannelHeader} returns this
 */
proto.treeleaf.anydone.entities.MicrosoftChannelHeader.prototype.setRefreshtoken = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


goog.object.extend(exports, proto.treeleaf.anydone.entities);
