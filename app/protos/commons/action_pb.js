// source: commons/action.proto
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

var commons_common_pb = require('../commons/common_pb.js');
goog.object.extend(proto, commons_common_pb);
goog.exportSymbol('proto.treeleaf.anydone.entities.ActionMessage', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ActionMessage.ActionMessageType', null, global);
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
proto.treeleaf.anydone.entities.ActionMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.ActionMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.ActionMessage.displayName = 'proto.treeleaf.anydone.entities.ActionMessage';
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
proto.treeleaf.anydone.entities.ActionMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.ActionMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.ActionMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ActionMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    url: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    method: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.treeleaf.anydone.entities.ActionMessage}
 */
proto.treeleaf.anydone.entities.ActionMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.ActionMessage;
  return proto.treeleaf.anydone.entities.ActionMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.ActionMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.ActionMessage}
 */
proto.treeleaf.anydone.entities.ActionMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 3:
      var value = /** @type {!proto.treeleaf.anydone.entities.ActionMessage.ActionMessageType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {!proto.treeleaf.anydone.entities.pb.Method} */ (reader.readEnum());
      msg.setMethod(value);
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
proto.treeleaf.anydone.entities.ActionMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.ActionMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.ActionMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ActionMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.ActionMessage.ActionMessageType = {
  UNKNOWN_ACTION_MESSAGE: 0,
  BUTTON: 1,
  LINK: 2
};

/**
 * optional string text = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ActionMessage.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ActionMessage} returns this
 */
proto.treeleaf.anydone.entities.ActionMessage.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ActionMessage.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ActionMessage} returns this
 */
proto.treeleaf.anydone.entities.ActionMessage.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ActionMessageType type = 3;
 * @return {!proto.treeleaf.anydone.entities.ActionMessage.ActionMessageType}
 */
proto.treeleaf.anydone.entities.ActionMessage.prototype.getType = function() {
  return /** @type {!proto.treeleaf.anydone.entities.ActionMessage.ActionMessageType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.ActionMessage.ActionMessageType} value
 * @return {!proto.treeleaf.anydone.entities.ActionMessage} returns this
 */
proto.treeleaf.anydone.entities.ActionMessage.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional pb.Method method = 4;
 * @return {!proto.treeleaf.anydone.entities.pb.Method}
 */
proto.treeleaf.anydone.entities.ActionMessage.prototype.getMethod = function() {
  return /** @type {!proto.treeleaf.anydone.entities.pb.Method} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.pb.Method} value
 * @return {!proto.treeleaf.anydone.entities.ActionMessage} returns this
 */
proto.treeleaf.anydone.entities.ActionMessage.prototype.setMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


goog.object.extend(exports, proto.treeleaf.anydone.entities);
