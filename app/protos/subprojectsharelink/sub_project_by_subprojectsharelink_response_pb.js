// source: subprojectsharelink/sub_project_by_subprojectsharelink_response.proto
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

var commons_response_pb = require('../commons/response_pb.js');
goog.object.extend(proto, commons_response_pb);
var service_pb = require('../service_pb.js');
goog.object.extend(proto, service_pb);
var domain_share_link_pb = require('../domain/share_link_pb.js');
goog.object.extend(proto, domain_share_link_pb);
goog.exportSymbol('proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse', null, global);
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
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse.displayName = 'proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse';
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
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && commons_response_pb.Response.toObject(includeInstance, f),
    subproject: (f = msg.getSubproject()) && service_pb.SubProject.toObject(includeInstance, f),
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
 * @return {!proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse}
 */
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse;
  return proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse}
 */
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new commons_response_pb.Response;
      reader.readMessage(value,commons_response_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    case 2:
      var value = new service_pb.SubProject;
      reader.readMessage(value,service_pb.SubProject.deserializeBinaryFromReader);
      msg.setSubproject(value);
      break;
    case 3:
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
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      commons_response_pb.Response.serializeBinaryToWriter
    );
  }
  f = message.getSubproject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      service_pb.SubProject.serializeBinaryToWriter
    );
  }
  f = message.getSharelink();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      domain_share_link_pb.ShareLink.serializeBinaryToWriter
    );
  }
};


/**
 * optional Response response = 1;
 * @return {?proto.treeleaf.anydone.entities.pb.Response}
 */
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse.prototype.getResponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.pb.Response} */ (
    jspb.Message.getWrapperField(this, commons_response_pb.Response, 1));
};


/**
 * @param {?proto.treeleaf.anydone.entities.pb.Response|undefined} value
 * @return {!proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse} returns this
*/
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse} returns this
 */
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional treeleaf.anydone.entities.SubProject subProject = 2;
 * @return {?proto.treeleaf.anydone.entities.SubProject}
 */
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse.prototype.getSubproject = function() {
  return /** @type{?proto.treeleaf.anydone.entities.SubProject} */ (
    jspb.Message.getWrapperField(this, service_pb.SubProject, 2));
};


/**
 * @param {?proto.treeleaf.anydone.entities.SubProject|undefined} value
 * @return {!proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse} returns this
*/
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse.prototype.setSubproject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse} returns this
 */
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse.prototype.clearSubproject = function() {
  return this.setSubproject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse.prototype.hasSubproject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ShareLink shareLink = 3;
 * @return {?proto.treeleaf.anydone.entities.pb.ShareLink}
 */
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse.prototype.getSharelink = function() {
  return /** @type{?proto.treeleaf.anydone.entities.pb.ShareLink} */ (
    jspb.Message.getWrapperField(this, domain_share_link_pb.ShareLink, 3));
};


/**
 * @param {?proto.treeleaf.anydone.entities.pb.ShareLink|undefined} value
 * @return {!proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse} returns this
*/
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse.prototype.setSharelink = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse} returns this
 */
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse.prototype.clearSharelink = function() {
  return this.setSharelink(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.pb.SubProjectByShareLinkResponse.prototype.hasSharelink = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.treeleaf.anydone.entities.pb);