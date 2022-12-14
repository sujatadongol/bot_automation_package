// source: ticket_event.proto
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

var board_pb = require('./board_pb.js');
goog.object.extend(proto, board_pb);
var treeleaf_pb = require('./treeleaf_pb.js');
goog.object.extend(proto, treeleaf_pb);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketEvent', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketEvent.EventType', null, global);
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
proto.treeleaf.anydone.entities.TicketEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TicketEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TicketEvent.displayName = 'proto.treeleaf.anydone.entities.TicketEvent';
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
proto.treeleaf.anydone.entities.TicketEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TicketEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TicketEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    debug: (f = msg.getDebug()) && treeleaf_pb.Debug.toObject(includeInstance, f),
    sprint: (f = msg.getSprint()) && board_pb.Sprint.toObject(includeInstance, f),
    column: (f = msg.getColumn()) && board_pb.Column.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.TicketEvent}
 */
proto.treeleaf.anydone.entities.TicketEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TicketEvent;
  return proto.treeleaf.anydone.entities.TicketEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TicketEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TicketEvent}
 */
proto.treeleaf.anydone.entities.TicketEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.treeleaf.anydone.entities.TicketEvent.EventType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new treeleaf_pb.Debug;
      reader.readMessage(value,treeleaf_pb.Debug.deserializeBinaryFromReader);
      msg.setDebug(value);
      break;
    case 3:
      var value = new board_pb.Sprint;
      reader.readMessage(value,board_pb.Sprint.deserializeBinaryFromReader);
      msg.setSprint(value);
      break;
    case 4:
      var value = new board_pb.Column;
      reader.readMessage(value,board_pb.Column.deserializeBinaryFromReader);
      msg.setColumn(value);
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
proto.treeleaf.anydone.entities.TicketEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TicketEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TicketEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDebug();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      treeleaf_pb.Debug.serializeBinaryToWriter
    );
  }
  f = message.getSprint();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      board_pb.Sprint.serializeBinaryToWriter
    );
  }
  f = message.getColumn();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      board_pb.Column.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.TicketEvent.EventType = {
  UNKNOWN_TYPE: 0,
  BOARD_SPRINT_ADDED: 1,
  BOARD_SPRINT_UPDATED: 2,
  BOARD_SPRINT_DELETED: 3,
  BOARD_COLUMN_ADDED: 4,
  BOARD_COLUMN_DELETED: 5,
  BOARD_COLUMN_UPDATED: 6,
  BOARD_SPRINT_COMPLETED: 7
};

/**
 * optional EventType type = 1;
 * @return {!proto.treeleaf.anydone.entities.TicketEvent.EventType}
 */
proto.treeleaf.anydone.entities.TicketEvent.prototype.getType = function() {
  return /** @type {!proto.treeleaf.anydone.entities.TicketEvent.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.TicketEvent.EventType} value
 * @return {!proto.treeleaf.anydone.entities.TicketEvent} returns this
 */
proto.treeleaf.anydone.entities.TicketEvent.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional treeleaf.protos.Debug debug = 2;
 * @return {?proto.treeleaf.protos.Debug}
 */
proto.treeleaf.anydone.entities.TicketEvent.prototype.getDebug = function() {
  return /** @type{?proto.treeleaf.protos.Debug} */ (
    jspb.Message.getWrapperField(this, treeleaf_pb.Debug, 2));
};


/**
 * @param {?proto.treeleaf.protos.Debug|undefined} value
 * @return {!proto.treeleaf.anydone.entities.TicketEvent} returns this
*/
proto.treeleaf.anydone.entities.TicketEvent.prototype.setDebug = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.TicketEvent} returns this
 */
proto.treeleaf.anydone.entities.TicketEvent.prototype.clearDebug = function() {
  return this.setDebug(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TicketEvent.prototype.hasDebug = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Sprint sprint = 3;
 * @return {?proto.treeleaf.anydone.entities.Sprint}
 */
proto.treeleaf.anydone.entities.TicketEvent.prototype.getSprint = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Sprint} */ (
    jspb.Message.getWrapperField(this, board_pb.Sprint, 3));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Sprint|undefined} value
 * @return {!proto.treeleaf.anydone.entities.TicketEvent} returns this
*/
proto.treeleaf.anydone.entities.TicketEvent.prototype.setSprint = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.TicketEvent} returns this
 */
proto.treeleaf.anydone.entities.TicketEvent.prototype.clearSprint = function() {
  return this.setSprint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TicketEvent.prototype.hasSprint = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Column column = 4;
 * @return {?proto.treeleaf.anydone.entities.Column}
 */
proto.treeleaf.anydone.entities.TicketEvent.prototype.getColumn = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Column} */ (
    jspb.Message.getWrapperField(this, board_pb.Column, 4));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Column|undefined} value
 * @return {!proto.treeleaf.anydone.entities.TicketEvent} returns this
*/
proto.treeleaf.anydone.entities.TicketEvent.prototype.setColumn = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.TicketEvent} returns this
 */
proto.treeleaf.anydone.entities.TicketEvent.prototype.clearColumn = function() {
  return this.setColumn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TicketEvent.prototype.hasColumn = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.treeleaf.anydone.entities);
