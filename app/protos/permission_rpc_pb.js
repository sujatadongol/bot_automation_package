// source: permission_rpc.proto
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
var treeleaf_pb = require('./treeleaf_pb.js');
goog.object.extend(proto, treeleaf_pb);
var user_pb = require('./user_pb.js');
goog.object.extend(proto, user_pb);
goog.exportSymbol('proto.treeleaf.anydone.rpc.PermissionBaseRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.rpc.PermissionBaseResponse', null, global);
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
proto.treeleaf.anydone.rpc.PermissionBaseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.rpc.PermissionBaseRequest.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.rpc.PermissionBaseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.rpc.PermissionBaseRequest.displayName = 'proto.treeleaf.anydone.rpc.PermissionBaseRequest';
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
proto.treeleaf.anydone.rpc.PermissionBaseResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.rpc.PermissionBaseResponse.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.rpc.PermissionBaseResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.rpc.PermissionBaseResponse.displayName = 'proto.treeleaf.anydone.rpc.PermissionBaseResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.rpc.PermissionBaseRequest.repeatedFields_ = [3];



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
proto.treeleaf.anydone.rpc.PermissionBaseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.rpc.PermissionBaseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.rpc.PermissionBaseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.rpc.PermissionBaseRequest.toObject = function(includeInstance, msg) {
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
    permissionassignreq: (f = msg.getPermissionassignreq()) && user_pb.PermissionAssignReq.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseRequest}
 */
proto.treeleaf.anydone.rpc.PermissionBaseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.rpc.PermissionBaseRequest;
  return proto.treeleaf.anydone.rpc.PermissionBaseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.rpc.PermissionBaseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseRequest}
 */
proto.treeleaf.anydone.rpc.PermissionBaseRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new user_pb.PermissionAssignReq;
      reader.readMessage(value,user_pb.PermissionAssignReq.deserializeBinaryFromReader);
      msg.setPermissionassignreq(value);
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
proto.treeleaf.anydone.rpc.PermissionBaseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.rpc.PermissionBaseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.rpc.PermissionBaseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.rpc.PermissionBaseRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getPermissionassignreq();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      user_pb.PermissionAssignReq.serializeBinaryToWriter
    );
  }
};


/**
 * optional string refId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.PermissionBaseRequest.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.PermissionBaseRequest.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string stringValue = 2;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.PermissionBaseRequest.prototype.getStringvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.PermissionBaseRequest.prototype.setStringvalue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string stringValues = 3;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.rpc.PermissionBaseRequest.prototype.getStringvaluesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.PermissionBaseRequest.prototype.setStringvaluesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.PermissionBaseRequest.prototype.addStringvalues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.PermissionBaseRequest.prototype.clearStringvaluesList = function() {
  return this.setStringvaluesList([]);
};


/**
 * optional int32 intValue = 4;
 * @return {number}
 */
proto.treeleaf.anydone.rpc.PermissionBaseRequest.prototype.getIntvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.PermissionBaseRequest.prototype.setIntvalue = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 longValue = 5;
 * @return {number}
 */
proto.treeleaf.anydone.rpc.PermissionBaseRequest.prototype.getLongvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.PermissionBaseRequest.prototype.setLongvalue = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool boolValue = 6;
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.PermissionBaseRequest.prototype.getBoolvalue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.PermissionBaseRequest.prototype.setBoolvalue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool doubleValue = 7;
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.PermissionBaseRequest.prototype.getDoublevalue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.PermissionBaseRequest.prototype.setDoublevalue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional treeleaf.anydone.entities.Authorization authorization = 8;
 * @return {?proto.treeleaf.anydone.entities.Authorization}
 */
proto.treeleaf.anydone.rpc.PermissionBaseRequest.prototype.getAuthorization = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Authorization} */ (
    jspb.Message.getWrapperField(this, auth_pb.Authorization, 8));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Authorization|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseRequest} returns this
*/
proto.treeleaf.anydone.rpc.PermissionBaseRequest.prototype.setAuthorization = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.PermissionBaseRequest.prototype.clearAuthorization = function() {
  return this.setAuthorization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.PermissionBaseRequest.prototype.hasAuthorization = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional treeleaf.protos.Debug debug = 9;
 * @return {?proto.treeleaf.protos.Debug}
 */
proto.treeleaf.anydone.rpc.PermissionBaseRequest.prototype.getDebug = function() {
  return /** @type{?proto.treeleaf.protos.Debug} */ (
    jspb.Message.getWrapperField(this, treeleaf_pb.Debug, 9));
};


/**
 * @param {?proto.treeleaf.protos.Debug|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseRequest} returns this
*/
proto.treeleaf.anydone.rpc.PermissionBaseRequest.prototype.setDebug = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.PermissionBaseRequest.prototype.clearDebug = function() {
  return this.setDebug(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.PermissionBaseRequest.prototype.hasDebug = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional treeleaf.anydone.entities.PermissionAssignReq permissionAssignReq = 10;
 * @return {?proto.treeleaf.anydone.entities.PermissionAssignReq}
 */
proto.treeleaf.anydone.rpc.PermissionBaseRequest.prototype.getPermissionassignreq = function() {
  return /** @type{?proto.treeleaf.anydone.entities.PermissionAssignReq} */ (
    jspb.Message.getWrapperField(this, user_pb.PermissionAssignReq, 10));
};


/**
 * @param {?proto.treeleaf.anydone.entities.PermissionAssignReq|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseRequest} returns this
*/
proto.treeleaf.anydone.rpc.PermissionBaseRequest.prototype.setPermissionassignreq = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.PermissionBaseRequest.prototype.clearPermissionassignreq = function() {
  return this.setPermissionassignreq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.PermissionBaseRequest.prototype.hasPermissionassignreq = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.rpc.PermissionBaseResponse.repeatedFields_ = [9,10];



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
proto.treeleaf.anydone.rpc.PermissionBaseResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.rpc.PermissionBaseResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.rpc.PermissionBaseResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.rpc.PermissionBaseResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    msg: jspb.Message.getFieldWithDefault(msg, 2, ""),
    errorcode: jspb.Message.getFieldWithDefault(msg, 3, 0),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    timestamp: jspb.Message.getFieldWithDefault(msg, 5, 0),
    debug: (f = msg.getDebug()) && treeleaf_pb.Debug.toObject(includeInstance, f),
    refid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    stringvalue: jspb.Message.getFieldWithDefault(msg, 8, ""),
    permissionsList: jspb.Message.toObjectList(msg.getPermissionsList(),
    user_pb.Permission.toObject, includeInstance),
    permissionassignsList: jspb.Message.toObjectList(msg.getPermissionassignsList(),
    user_pb.PermissionAssign.toObject, includeInstance)
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
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseResponse}
 */
proto.treeleaf.anydone.rpc.PermissionBaseResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.rpc.PermissionBaseResponse;
  return proto.treeleaf.anydone.rpc.PermissionBaseResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.rpc.PermissionBaseResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseResponse}
 */
proto.treeleaf.anydone.rpc.PermissionBaseResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringvalue(value);
      break;
    case 9:
      var value = new user_pb.Permission;
      reader.readMessage(value,user_pb.Permission.deserializeBinaryFromReader);
      msg.addPermissions(value);
      break;
    case 10:
      var value = new user_pb.PermissionAssign;
      reader.readMessage(value,user_pb.PermissionAssign.deserializeBinaryFromReader);
      msg.addPermissionassigns(value);
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
proto.treeleaf.anydone.rpc.PermissionBaseResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.rpc.PermissionBaseResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.rpc.PermissionBaseResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.rpc.PermissionBaseResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getStringvalue();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      user_pb.Permission.serializeBinaryToWriter
    );
  }
  f = message.getPermissionassignsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      user_pb.PermissionAssign.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool error = 1;
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.PermissionBaseResponse.prototype.getError = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.PermissionBaseResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.PermissionBaseResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.PermissionBaseResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional treeleaf.protos.ErrorCode errorCode = 3;
 * @return {!proto.treeleaf.protos.ErrorCode}
 */
proto.treeleaf.anydone.rpc.PermissionBaseResponse.prototype.getErrorcode = function() {
  return /** @type {!proto.treeleaf.protos.ErrorCode} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.treeleaf.protos.ErrorCode} value
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.PermissionBaseResponse.prototype.setErrorcode = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool success = 4;
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.PermissionBaseResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.PermissionBaseResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int64 timestamp = 5;
 * @return {number}
 */
proto.treeleaf.anydone.rpc.PermissionBaseResponse.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.PermissionBaseResponse.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional treeleaf.protos.Debug debug = 6;
 * @return {?proto.treeleaf.protos.Debug}
 */
proto.treeleaf.anydone.rpc.PermissionBaseResponse.prototype.getDebug = function() {
  return /** @type{?proto.treeleaf.protos.Debug} */ (
    jspb.Message.getWrapperField(this, treeleaf_pb.Debug, 6));
};


/**
 * @param {?proto.treeleaf.protos.Debug|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseResponse} returns this
*/
proto.treeleaf.anydone.rpc.PermissionBaseResponse.prototype.setDebug = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.PermissionBaseResponse.prototype.clearDebug = function() {
  return this.setDebug(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.PermissionBaseResponse.prototype.hasDebug = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string refId = 7;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.PermissionBaseResponse.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.PermissionBaseResponse.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string stringValue = 8;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.PermissionBaseResponse.prototype.getStringvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.PermissionBaseResponse.prototype.setStringvalue = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * repeated treeleaf.anydone.entities.Permission permissions = 9;
 * @return {!Array<!proto.treeleaf.anydone.entities.Permission>}
 */
proto.treeleaf.anydone.rpc.PermissionBaseResponse.prototype.getPermissionsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.Permission>} */ (
    jspb.Message.getRepeatedWrapperField(this, user_pb.Permission, 9));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.Permission>} value
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseResponse} returns this
*/
proto.treeleaf.anydone.rpc.PermissionBaseResponse.prototype.setPermissionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.Permission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.Permission}
 */
proto.treeleaf.anydone.rpc.PermissionBaseResponse.prototype.addPermissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.treeleaf.anydone.entities.Permission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.PermissionBaseResponse.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
};


/**
 * repeated treeleaf.anydone.entities.PermissionAssign permissionAssigns = 10;
 * @return {!Array<!proto.treeleaf.anydone.entities.PermissionAssign>}
 */
proto.treeleaf.anydone.rpc.PermissionBaseResponse.prototype.getPermissionassignsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.PermissionAssign>} */ (
    jspb.Message.getRepeatedWrapperField(this, user_pb.PermissionAssign, 10));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.PermissionAssign>} value
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseResponse} returns this
*/
proto.treeleaf.anydone.rpc.PermissionBaseResponse.prototype.setPermissionassignsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.PermissionAssign=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.PermissionAssign}
 */
proto.treeleaf.anydone.rpc.PermissionBaseResponse.prototype.addPermissionassigns = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.treeleaf.anydone.entities.PermissionAssign, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.rpc.PermissionBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.PermissionBaseResponse.prototype.clearPermissionassignsList = function() {
  return this.setPermissionassignsList([]);
};


goog.object.extend(exports, proto.treeleaf.anydone.rpc);
