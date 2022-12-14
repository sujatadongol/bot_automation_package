// source: domain/schedule_log.proto
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

goog.exportSymbol('proto.treeleaf.anydone.entities.pb.ScheduleLog', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.pb.ScheduleLog.ScheduleType', null, global);
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
proto.treeleaf.anydone.entities.pb.ScheduleLog = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.pb.ScheduleLog, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.pb.ScheduleLog.displayName = 'proto.treeleaf.anydone.entities.pb.ScheduleLog';
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
proto.treeleaf.anydone.entities.pb.ScheduleLog.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.pb.ScheduleLog.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.pb.ScheduleLog} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.pb.ScheduleLog.toObject = function(includeInstance, msg) {
  var f, obj = {
    schedulelogid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    jobid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    scheduletype: jspb.Message.getFieldWithDefault(msg, 4, 0),
    accountid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    duedate: jspb.Message.getFieldWithDefault(msg, 6, 0),
    createdat: jspb.Message.getFieldWithDefault(msg, 7, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.treeleaf.anydone.entities.pb.ScheduleLog}
 */
proto.treeleaf.anydone.entities.pb.ScheduleLog.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.pb.ScheduleLog;
  return proto.treeleaf.anydone.entities.pb.ScheduleLog.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.pb.ScheduleLog} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.pb.ScheduleLog}
 */
proto.treeleaf.anydone.entities.pb.ScheduleLog.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchedulelogid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 4:
      var value = /** @type {!proto.treeleaf.anydone.entities.pb.ScheduleLog.ScheduleType} */ (reader.readEnum());
      msg.setScheduletype(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountid(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDuedate(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 8:
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
proto.treeleaf.anydone.entities.pb.ScheduleLog.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.pb.ScheduleLog.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.pb.ScheduleLog} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.pb.ScheduleLog.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchedulelogid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getJobid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getScheduletype();
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
  f = message.getDuedate();
  if (f !== 0) {
    writer.writeInt64(
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
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.pb.ScheduleLog.ScheduleType = {
  UNKNOWN_JOB_TYPE: 0,
  TICKET_DUE_DATE_EMAIL: 1
};

/**
 * optional string scheduleLogId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.pb.ScheduleLog.prototype.getSchedulelogid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.pb.ScheduleLog} returns this
 */
proto.treeleaf.anydone.entities.pb.ScheduleLog.prototype.setSchedulelogid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string jobId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.pb.ScheduleLog.prototype.getJobid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.pb.ScheduleLog} returns this
 */
proto.treeleaf.anydone.entities.pb.ScheduleLog.prototype.setJobid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string refId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.pb.ScheduleLog.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.pb.ScheduleLog} returns this
 */
proto.treeleaf.anydone.entities.pb.ScheduleLog.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional ScheduleType scheduleType = 4;
 * @return {!proto.treeleaf.anydone.entities.pb.ScheduleLog.ScheduleType}
 */
proto.treeleaf.anydone.entities.pb.ScheduleLog.prototype.getScheduletype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.pb.ScheduleLog.ScheduleType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.pb.ScheduleLog.ScheduleType} value
 * @return {!proto.treeleaf.anydone.entities.pb.ScheduleLog} returns this
 */
proto.treeleaf.anydone.entities.pb.ScheduleLog.prototype.setScheduletype = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string accountId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.pb.ScheduleLog.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.pb.ScheduleLog} returns this
 */
proto.treeleaf.anydone.entities.pb.ScheduleLog.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 dueDate = 6;
 * @return {number}
 */
proto.treeleaf.anydone.entities.pb.ScheduleLog.prototype.getDuedate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.pb.ScheduleLog} returns this
 */
proto.treeleaf.anydone.entities.pb.ScheduleLog.prototype.setDuedate = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 createdAt = 7;
 * @return {number}
 */
proto.treeleaf.anydone.entities.pb.ScheduleLog.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.pb.ScheduleLog} returns this
 */
proto.treeleaf.anydone.entities.pb.ScheduleLog.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 updatedAt = 8;
 * @return {number}
 */
proto.treeleaf.anydone.entities.pb.ScheduleLog.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.pb.ScheduleLog} returns this
 */
proto.treeleaf.anydone.entities.pb.ScheduleLog.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


goog.object.extend(exports, proto.treeleaf.anydone.entities.pb);
