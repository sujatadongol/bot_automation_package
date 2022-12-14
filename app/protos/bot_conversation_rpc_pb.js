// source: bot_conversation_rpc.proto
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

var auth_pb = require('./auth_pb.js');
goog.object.extend(proto, auth_pb);
var bot_conversation_pb = require('./bot_conversation_pb.js');
goog.object.extend(proto, bot_conversation_pb);
var treeleaf_pb = require('./treeleaf_pb.js');
goog.object.extend(proto, treeleaf_pb);
var kgraph_pb = require('./kgraph_pb.js');
goog.object.extend(proto, kgraph_pb);
goog.exportSymbol('proto.treeleaf.anydone.rpc.BotConversationBaseRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.rpc.BotConversationBaseResponse', null, global);
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
proto.treeleaf.anydone.rpc.BotConversationBaseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.rpc.BotConversationBaseRequest.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.rpc.BotConversationBaseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.rpc.BotConversationBaseRequest.displayName = 'proto.treeleaf.anydone.rpc.BotConversationBaseRequest';
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
proto.treeleaf.anydone.rpc.BotConversationBaseResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.rpc.BotConversationBaseResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.rpc.BotConversationBaseResponse.displayName = 'proto.treeleaf.anydone.rpc.BotConversationBaseResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.repeatedFields_ = [3];



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
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.rpc.BotConversationBaseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.rpc.BotConversationBaseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    refid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stringvalue: jspb.Message.getFieldWithDefault(msg, 2, ""),
    stringvaluesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    intvalue: jspb.Message.getFieldWithDefault(msg, 4, 0),
    longvalue: jspb.Message.getFieldWithDefault(msg, 5, 0),
    boolvalue: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    doublevalue: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    authorization: (f = msg.getAuthorization()) && auth_pb.Authorization.toObject(includeInstance, f),
    debug: (f = msg.getDebug()) && treeleaf_pb.Debug.toObject(includeInstance, f),
    conversationrequest: (f = msg.getConversationrequest()) && bot_conversation_pb.ConversationRequest.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseRequest}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.rpc.BotConversationBaseRequest;
  return proto.treeleaf.anydone.rpc.BotConversationBaseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.rpc.BotConversationBaseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseRequest}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setStringvalue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addStringvalues(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIntvalue(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLongvalue(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoolvalue(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDoublevalue(value);
      break;
    case 8:
      var value = new auth_pb.Authorization;
      reader.readMessage(value,auth_pb.Authorization.deserializeBinaryFromReader);
      msg.setAuthorization(value);
      break;
    case 9:
      var value = new treeleaf_pb.Debug;
      reader.readMessage(value,treeleaf_pb.Debug.deserializeBinaryFromReader);
      msg.setDebug(value);
      break;
    case 10:
      var value = new bot_conversation_pb.ConversationRequest;
      reader.readMessage(value,bot_conversation_pb.ConversationRequest.deserializeBinaryFromReader);
      msg.setConversationrequest(value);
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
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.rpc.BotConversationBaseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.rpc.BotConversationBaseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStringvalue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStringvaluesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getIntvalue();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getLongvalue();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getBoolvalue();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getDoublevalue();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getAuthorization();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      auth_pb.Authorization.serializeBinaryToWriter
    );
  }
  f = message.getDebug();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      treeleaf_pb.Debug.serializeBinaryToWriter
    );
  }
  f = message.getConversationrequest();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      bot_conversation_pb.ConversationRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string refId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string stringValue = 2;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.prototype.getStringvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.prototype.setStringvalue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string stringValues = 3;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.prototype.getStringvaluesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.prototype.setStringvaluesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.prototype.addStringvalues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.prototype.clearStringvaluesList = function() {
  return this.setStringvaluesList([]);
};


/**
 * optional int32 intValue = 4;
 * @return {number}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.prototype.getIntvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.prototype.setIntvalue = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 longValue = 5;
 * @return {number}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.prototype.getLongvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.prototype.setLongvalue = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool boolValue = 6;
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.prototype.getBoolvalue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.prototype.setBoolvalue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool doubleValue = 7;
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.prototype.getDoublevalue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.prototype.setDoublevalue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional treeleaf.anydone.entities.Authorization authorization = 8;
 * @return {?proto.treeleaf.anydone.entities.Authorization}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.prototype.getAuthorization = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Authorization} */ (
    jspb.Message.getWrapperField(this, auth_pb.Authorization, 8));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Authorization|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseRequest} returns this
*/
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.prototype.setAuthorization = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.prototype.clearAuthorization = function() {
  return this.setAuthorization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.prototype.hasAuthorization = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional treeleaf.protos.Debug debug = 9;
 * @return {?proto.treeleaf.protos.Debug}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.prototype.getDebug = function() {
  return /** @type{?proto.treeleaf.protos.Debug} */ (
    jspb.Message.getWrapperField(this, treeleaf_pb.Debug, 9));
};


/**
 * @param {?proto.treeleaf.protos.Debug|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseRequest} returns this
*/
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.prototype.setDebug = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.prototype.clearDebug = function() {
  return this.setDebug(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.prototype.hasDebug = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional treeleaf.anydone.entities.ConversationRequest conversationRequest = 10;
 * @return {?proto.treeleaf.anydone.entities.ConversationRequest}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.prototype.getConversationrequest = function() {
  return /** @type{?proto.treeleaf.anydone.entities.ConversationRequest} */ (
    jspb.Message.getWrapperField(this, bot_conversation_pb.ConversationRequest, 10));
};


/**
 * @param {?proto.treeleaf.anydone.entities.ConversationRequest|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseRequest} returns this
*/
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.prototype.setConversationrequest = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.prototype.clearConversationrequest = function() {
  return this.setConversationrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseRequest.prototype.hasConversationrequest = function() {
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
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.rpc.BotConversationBaseResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.rpc.BotConversationBaseResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    msg: jspb.Message.getFieldWithDefault(msg, 2, ""),
    errorcode: jspb.Message.getFieldWithDefault(msg, 3, 0),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    timestamp: jspb.Message.getFieldWithDefault(msg, 5, 0),
    debug: (f = msg.getDebug()) && treeleaf_pb.Debug.toObject(includeInstance, f),
    refid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    conversationresponse: (f = msg.getConversationresponse()) && bot_conversation_pb.ConversationResponse.toObject(includeInstance, f),
    link: (f = msg.getLink()) && kgraph_pb.Link.toObject(includeInstance, f),
    kgraphresponse: (f = msg.getKgraphresponse()) && bot_conversation_pb.KGraphResponse.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseResponse}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.rpc.BotConversationBaseResponse;
  return proto.treeleaf.anydone.rpc.BotConversationBaseResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.rpc.BotConversationBaseResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseResponse}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setError(value);
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 6:
      var value = new treeleaf_pb.Debug;
      reader.readMessage(value,treeleaf_pb.Debug.deserializeBinaryFromReader);
      msg.setDebug(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 10:
      var value = new bot_conversation_pb.ConversationResponse;
      reader.readMessage(value,bot_conversation_pb.ConversationResponse.deserializeBinaryFromReader);
      msg.setConversationresponse(value);
      break;
    case 11:
      var value = new kgraph_pb.Link;
      reader.readMessage(value,kgraph_pb.Link.deserializeBinaryFromReader);
      msg.setLink(value);
      break;
    case 12:
      var value = new bot_conversation_pb.KGraphResponse;
      reader.readMessage(value,bot_conversation_pb.KGraphResponse.deserializeBinaryFromReader);
      msg.setKgraphresponse(value);
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
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.rpc.BotConversationBaseResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.rpc.BotConversationBaseResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f) {
    writer.writeBool(
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
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getDebug();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      treeleaf_pb.Debug.serializeBinaryToWriter
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getConversationresponse();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      bot_conversation_pb.ConversationResponse.serializeBinaryToWriter
    );
  }
  f = message.getLink();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      kgraph_pb.Link.serializeBinaryToWriter
    );
  }
  f = message.getKgraphresponse();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      bot_conversation_pb.KGraphResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool error = 1;
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.prototype.getError = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional treeleaf.protos.ErrorCode errorCode = 3;
 * @return {!proto.treeleaf.protos.ErrorCode}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.prototype.getErrorcode = function() {
  return /** @type {!proto.treeleaf.protos.ErrorCode} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.treeleaf.protos.ErrorCode} value
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.prototype.setErrorcode = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool success = 4;
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int64 timestamp = 5;
 * @return {number}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional treeleaf.protos.Debug debug = 6;
 * @return {?proto.treeleaf.protos.Debug}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.prototype.getDebug = function() {
  return /** @type{?proto.treeleaf.protos.Debug} */ (
    jspb.Message.getWrapperField(this, treeleaf_pb.Debug, 6));
};


/**
 * @param {?proto.treeleaf.protos.Debug|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseResponse} returns this
*/
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.prototype.setDebug = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.prototype.clearDebug = function() {
  return this.setDebug(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.prototype.hasDebug = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string refId = 7;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional treeleaf.anydone.entities.ConversationResponse conversationResponse = 10;
 * @return {?proto.treeleaf.anydone.entities.ConversationResponse}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.prototype.getConversationresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.ConversationResponse} */ (
    jspb.Message.getWrapperField(this, bot_conversation_pb.ConversationResponse, 10));
};


/**
 * @param {?proto.treeleaf.anydone.entities.ConversationResponse|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseResponse} returns this
*/
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.prototype.setConversationresponse = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.prototype.clearConversationresponse = function() {
  return this.setConversationresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.prototype.hasConversationresponse = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional treeleaf.anydone.entities.Link link = 11;
 * @return {?proto.treeleaf.anydone.entities.Link}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.prototype.getLink = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Link} */ (
    jspb.Message.getWrapperField(this, kgraph_pb.Link, 11));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Link|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseResponse} returns this
*/
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.prototype.setLink = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.prototype.clearLink = function() {
  return this.setLink(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.prototype.hasLink = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional treeleaf.anydone.entities.KGraphResponse kgraphResponse = 12;
 * @return {?proto.treeleaf.anydone.entities.KGraphResponse}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.prototype.getKgraphresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.KGraphResponse} */ (
    jspb.Message.getWrapperField(this, bot_conversation_pb.KGraphResponse, 12));
};


/**
 * @param {?proto.treeleaf.anydone.entities.KGraphResponse|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseResponse} returns this
*/
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.prototype.setKgraphresponse = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.BotConversationBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.prototype.clearKgraphresponse = function() {
  return this.setKgraphresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.BotConversationBaseResponse.prototype.hasKgraphresponse = function() {
  return jspb.Message.getField(this, 12) != null;
};


goog.object.extend(exports, proto.treeleaf.anydone.rpc);
