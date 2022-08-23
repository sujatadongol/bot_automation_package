// source: subprojectsharelink/sub_project_by_subprojectsharelink_request.proto
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

var treeleaf_pb = require('../treeleaf_pb.js');
goog.object.extend(proto, treeleaf_pb);
goog.exportSymbol('proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkRequest', null, global);
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
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkRequest.displayName = 'proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkRequest';
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
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    debug: (f = msg.getDebug()) && treeleaf_pb.Debug.toObject(includeInstance, f),
    linkcode: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkRequest}
 */
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkRequest;
  return proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkRequest}
 */
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new treeleaf_pb.Debug;
      reader.readMessage(value,treeleaf_pb.Debug.deserializeBinaryFromReader);
      msg.setDebug(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLinkcode(value);
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
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDebug();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      treeleaf_pb.Debug.serializeBinaryToWriter
    );
  }
  f = message.getLinkcode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional treeleaf.protos.Debug debug = 1;
 * @return {?proto.treeleaf.protos.Debug}
 */
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkRequest.prototype.getDebug = function() {
  return /** @type{?proto.treeleaf.protos.Debug} */ (
    jspb.Message.getWrapperField(this, treeleaf_pb.Debug, 1));
};


/**
 * @param {?proto.treeleaf.protos.Debug|undefined} value
 * @return {!proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkRequest} returns this
*/
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkRequest.prototype.setDebug = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkRequest} returns this
 */
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkRequest.prototype.clearDebug = function() {
  return this.setDebug(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkRequest.prototype.hasDebug = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string linkCode = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkRequest.prototype.getLinkcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkRequest} returns this
 */
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkRequest.prototype.setLinkcode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.treeleaf.anydone.entities.pb);
