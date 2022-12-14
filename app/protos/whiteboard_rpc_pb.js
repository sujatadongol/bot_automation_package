// source: whiteboard_rpc.proto
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
var whiteboard_pb = require('./whiteboard_pb.js');
goog.object.extend(proto, whiteboard_pb);
goog.exportSymbol('proto.treeleaf.anydone.rpc.WhiteboardBaseRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.rpc.WhiteboardBaseResponse', null, global);
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
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.rpc.WhiteboardBaseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.displayName = 'proto.treeleaf.anydone.rpc.WhiteboardBaseRequest';
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
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.rpc.WhiteboardBaseResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.displayName = 'proto.treeleaf.anydone.rpc.WhiteboardBaseResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.repeatedFields_ = [3];



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
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.rpc.WhiteboardBaseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    refid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stringvalue: jspb.Message.getFieldWithDefault(msg, 2, ""),
    stringvaluesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    intvalue: jspb.Message.getFieldWithDefault(msg, 4, 0),
    longvalue: jspb.Message.getFieldWithDefault(msg, 5, 0),
    boolvalue: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    doublevalue: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    prevCursor: jspb.Message.getFieldWithDefault(msg, 8, ""),
    nextCursor: jspb.Message.getFieldWithDefault(msg, 9, ""),
    authorization: (f = msg.getAuthorization()) && auth_pb.Authorization.toObject(includeInstance, f),
    debug: (f = msg.getDebug()) && treeleaf_pb.Debug.toObject(includeInstance, f),
    whiteboard: (f = msg.getWhiteboard()) && whiteboard_pb.Whiteboard.toObject(includeInstance, f),
    filter: (f = msg.getFilter()) && whiteboard_pb.WhiteboardFilter.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseRequest}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.rpc.WhiteboardBaseRequest;
  return proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.rpc.WhiteboardBaseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseRequest}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setPrevCursor(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextCursor(value);
      break;
    case 10:
      var value = new auth_pb.Authorization;
      reader.readMessage(value,auth_pb.Authorization.deserializeBinaryFromReader);
      msg.setAuthorization(value);
      break;
    case 11:
      var value = new treeleaf_pb.Debug;
      reader.readMessage(value,treeleaf_pb.Debug.deserializeBinaryFromReader);
      msg.setDebug(value);
      break;
    case 12:
      var value = new whiteboard_pb.Whiteboard;
      reader.readMessage(value,whiteboard_pb.Whiteboard.deserializeBinaryFromReader);
      msg.setWhiteboard(value);
      break;
    case 13:
      var value = new whiteboard_pb.WhiteboardFilter;
      reader.readMessage(value,whiteboard_pb.WhiteboardFilter.deserializeBinaryFromReader);
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
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.rpc.WhiteboardBaseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getPrevCursor();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getNextCursor();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getAuthorization();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      auth_pb.Authorization.serializeBinaryToWriter
    );
  }
  f = message.getDebug();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      treeleaf_pb.Debug.serializeBinaryToWriter
    );
  }
  f = message.getWhiteboard();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      whiteboard_pb.Whiteboard.serializeBinaryToWriter
    );
  }
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      whiteboard_pb.WhiteboardFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string refId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string stringValue = 2;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.getStringvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.setStringvalue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string stringValues = 3;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.getStringvaluesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.setStringvaluesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.addStringvalues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.clearStringvaluesList = function() {
  return this.setStringvaluesList([]);
};


/**
 * optional int32 intValue = 4;
 * @return {number}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.getIntvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.setIntvalue = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 longValue = 5;
 * @return {number}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.getLongvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.setLongvalue = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool boolValue = 6;
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.getBoolvalue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.setBoolvalue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool doubleValue = 7;
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.getDoublevalue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.setDoublevalue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional string prev_cursor = 8;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.getPrevCursor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.setPrevCursor = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string next_cursor = 9;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.getNextCursor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.setNextCursor = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional treeleaf.anydone.entities.Authorization authorization = 10;
 * @return {?proto.treeleaf.anydone.entities.Authorization}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.getAuthorization = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Authorization} */ (
    jspb.Message.getWrapperField(this, auth_pb.Authorization, 10));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Authorization|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseRequest} returns this
*/
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.setAuthorization = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.clearAuthorization = function() {
  return this.setAuthorization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.hasAuthorization = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional treeleaf.protos.Debug debug = 11;
 * @return {?proto.treeleaf.protos.Debug}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.getDebug = function() {
  return /** @type{?proto.treeleaf.protos.Debug} */ (
    jspb.Message.getWrapperField(this, treeleaf_pb.Debug, 11));
};


/**
 * @param {?proto.treeleaf.protos.Debug|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseRequest} returns this
*/
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.setDebug = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.clearDebug = function() {
  return this.setDebug(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.hasDebug = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional treeleaf.anydone.entities.Whiteboard whiteboard = 12;
 * @return {?proto.treeleaf.anydone.entities.Whiteboard}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.getWhiteboard = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Whiteboard} */ (
    jspb.Message.getWrapperField(this, whiteboard_pb.Whiteboard, 12));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Whiteboard|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseRequest} returns this
*/
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.setWhiteboard = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.clearWhiteboard = function() {
  return this.setWhiteboard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.hasWhiteboard = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional treeleaf.anydone.entities.WhiteboardFilter filter = 13;
 * @return {?proto.treeleaf.anydone.entities.WhiteboardFilter}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.getFilter = function() {
  return /** @type{?proto.treeleaf.anydone.entities.WhiteboardFilter} */ (
    jspb.Message.getWrapperField(this, whiteboard_pb.WhiteboardFilter, 13));
};


/**
 * @param {?proto.treeleaf.anydone.entities.WhiteboardFilter|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseRequest} returns this
*/
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 13) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.repeatedFields_ = [10];



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
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.rpc.WhiteboardBaseResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    msg: jspb.Message.getFieldWithDefault(msg, 2, ""),
    errorcode: jspb.Message.getFieldWithDefault(msg, 3, 0),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    timestamp: jspb.Message.getFieldWithDefault(msg, 5, 0),
    debug: (f = msg.getDebug()) && treeleaf_pb.Debug.toObject(includeInstance, f),
    refid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    cursor: (f = msg.getCursor()) && treeleaf_pb.Cursor.toObject(includeInstance, f),
    whiteboard: (f = msg.getWhiteboard()) && whiteboard_pb.Whiteboard.toObject(includeInstance, f),
    whiteboardsList: jspb.Message.toObjectList(msg.getWhiteboardsList(),
    whiteboard_pb.Whiteboard.toObject, includeInstance)
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
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseResponse}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.rpc.WhiteboardBaseResponse;
  return proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.rpc.WhiteboardBaseResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseResponse}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new treeleaf_pb.Cursor;
      reader.readMessage(value,treeleaf_pb.Cursor.deserializeBinaryFromReader);
      msg.setCursor(value);
      break;
    case 9:
      var value = new whiteboard_pb.Whiteboard;
      reader.readMessage(value,whiteboard_pb.Whiteboard.deserializeBinaryFromReader);
      msg.setWhiteboard(value);
      break;
    case 10:
      var value = new whiteboard_pb.Whiteboard;
      reader.readMessage(value,whiteboard_pb.Whiteboard.deserializeBinaryFromReader);
      msg.addWhiteboards(value);
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
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.rpc.WhiteboardBaseResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getCursor();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      treeleaf_pb.Cursor.serializeBinaryToWriter
    );
  }
  f = message.getWhiteboard();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      whiteboard_pb.Whiteboard.serializeBinaryToWriter
    );
  }
  f = message.getWhiteboardsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      whiteboard_pb.Whiteboard.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool error = 1;
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.prototype.getError = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional treeleaf.protos.ErrorCode errorCode = 3;
 * @return {!proto.treeleaf.protos.ErrorCode}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.prototype.getErrorcode = function() {
  return /** @type {!proto.treeleaf.protos.ErrorCode} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.treeleaf.protos.ErrorCode} value
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.prototype.setErrorcode = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool success = 4;
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int64 timestamp = 5;
 * @return {number}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional treeleaf.protos.Debug debug = 6;
 * @return {?proto.treeleaf.protos.Debug}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.prototype.getDebug = function() {
  return /** @type{?proto.treeleaf.protos.Debug} */ (
    jspb.Message.getWrapperField(this, treeleaf_pb.Debug, 6));
};


/**
 * @param {?proto.treeleaf.protos.Debug|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseResponse} returns this
*/
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.prototype.setDebug = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.prototype.clearDebug = function() {
  return this.setDebug(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.prototype.hasDebug = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string refId = 7;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional treeleaf.protos.Cursor cursor = 8;
 * @return {?proto.treeleaf.protos.Cursor}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.prototype.getCursor = function() {
  return /** @type{?proto.treeleaf.protos.Cursor} */ (
    jspb.Message.getWrapperField(this, treeleaf_pb.Cursor, 8));
};


/**
 * @param {?proto.treeleaf.protos.Cursor|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseResponse} returns this
*/
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.prototype.setCursor = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.prototype.clearCursor = function() {
  return this.setCursor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.prototype.hasCursor = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional treeleaf.anydone.entities.Whiteboard whiteboard = 9;
 * @return {?proto.treeleaf.anydone.entities.Whiteboard}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.prototype.getWhiteboard = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Whiteboard} */ (
    jspb.Message.getWrapperField(this, whiteboard_pb.Whiteboard, 9));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Whiteboard|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseResponse} returns this
*/
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.prototype.setWhiteboard = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.prototype.clearWhiteboard = function() {
  return this.setWhiteboard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.prototype.hasWhiteboard = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated treeleaf.anydone.entities.Whiteboard whiteboards = 10;
 * @return {!Array<!proto.treeleaf.anydone.entities.Whiteboard>}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.prototype.getWhiteboardsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.Whiteboard>} */ (
    jspb.Message.getRepeatedWrapperField(this, whiteboard_pb.Whiteboard, 10));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.Whiteboard>} value
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseResponse} returns this
*/
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.prototype.setWhiteboardsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.Whiteboard=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.Whiteboard}
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.prototype.addWhiteboards = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.treeleaf.anydone.entities.Whiteboard, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.rpc.WhiteboardBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.WhiteboardBaseResponse.prototype.clearWhiteboardsList = function() {
  return this.setWhiteboardsList([]);
};


goog.object.extend(exports, proto.treeleaf.anydone.rpc);
