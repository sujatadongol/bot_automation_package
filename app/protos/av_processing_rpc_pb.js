// source: av_processing_rpc.proto
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

var treeleaf_pb = require('./treeleaf_pb.js');
goog.object.extend(proto, treeleaf_pb);
var av_processing_pb = require('./av_processing_pb.js');
goog.object.extend(proto, av_processing_pb);
goog.exportSymbol('proto.treeleaf.anydone.rpc.AvProcessingBaseRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.rpc.AvProcessingBaseResponse', null, global);
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
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.rpc.AvProcessingBaseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.displayName = 'proto.treeleaf.anydone.rpc.AvProcessingBaseRequest';
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
proto.treeleaf.anydone.rpc.AvProcessingBaseResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.rpc.AvProcessingBaseResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.rpc.AvProcessingBaseResponse.displayName = 'proto.treeleaf.anydone.rpc.AvProcessingBaseResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.repeatedFields_ = [3,14];



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
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.rpc.AvProcessingBaseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    refid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stringvalue: jspb.Message.getFieldWithDefault(msg, 2, ""),
    stringvaluesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    intvalue: jspb.Message.getFieldWithDefault(msg, 4, 0),
    longvalue: jspb.Message.getFieldWithDefault(msg, 5, 0),
    boolvalue: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    doublevalue: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    debug: (f = msg.getDebug()) && treeleaf_pb.Debug.toObject(includeInstance, f),
    audiourl: jspb.Message.getFieldWithDefault(msg, 9, ""),
    audiotype: jspb.Message.getFieldWithDefault(msg, 10, ""),
    videourl: jspb.Message.getFieldWithDefault(msg, 11, ""),
    videotype: jspb.Message.getFieldWithDefault(msg, 12, ""),
    mediatrackid: jspb.Message.getFieldWithDefault(msg, 13, 0),
    delayList: jspb.Message.toObjectList(msg.getDelayList(),
    av_processing_pb.Delay.toObject, includeInstance)
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
 * @return {!proto.treeleaf.anydone.rpc.AvProcessingBaseRequest}
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.rpc.AvProcessingBaseRequest;
  return proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.rpc.AvProcessingBaseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.rpc.AvProcessingBaseRequest}
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new treeleaf_pb.Debug;
      reader.readMessage(value,treeleaf_pb.Debug.deserializeBinaryFromReader);
      msg.setDebug(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setAudiourl(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setAudiotype(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setVideourl(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setVideotype(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMediatrackid(value);
      break;
    case 14:
      var value = new av_processing_pb.Delay;
      reader.readMessage(value,av_processing_pb.Delay.deserializeBinaryFromReader);
      msg.addDelay(value);
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
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.rpc.AvProcessingBaseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDebug();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      treeleaf_pb.Debug.serializeBinaryToWriter
    );
  }
  f = message.getAudiourl();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getAudiotype();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getVideourl();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getVideotype();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getMediatrackid();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = message.getDelayList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      av_processing_pb.Delay.serializeBinaryToWriter
    );
  }
};


/**
 * optional string refId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.AvProcessingBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string stringValue = 2;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.getStringvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.AvProcessingBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.setStringvalue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string stringValues = 3;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.getStringvaluesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.rpc.AvProcessingBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.setStringvaluesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.rpc.AvProcessingBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.addStringvalues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.rpc.AvProcessingBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.clearStringvaluesList = function() {
  return this.setStringvaluesList([]);
};


/**
 * optional int32 intValue = 4;
 * @return {number}
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.getIntvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.rpc.AvProcessingBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.setIntvalue = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 longValue = 5;
 * @return {number}
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.getLongvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.rpc.AvProcessingBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.setLongvalue = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool boolValue = 6;
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.getBoolvalue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.rpc.AvProcessingBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.setBoolvalue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool doubleValue = 7;
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.getDoublevalue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.rpc.AvProcessingBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.setDoublevalue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional treeleaf.protos.Debug debug = 8;
 * @return {?proto.treeleaf.protos.Debug}
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.getDebug = function() {
  return /** @type{?proto.treeleaf.protos.Debug} */ (
    jspb.Message.getWrapperField(this, treeleaf_pb.Debug, 8));
};


/**
 * @param {?proto.treeleaf.protos.Debug|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.AvProcessingBaseRequest} returns this
*/
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.setDebug = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.AvProcessingBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.clearDebug = function() {
  return this.setDebug(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.hasDebug = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string audioUrl = 9;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.getAudiourl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.AvProcessingBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.setAudiourl = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string audioType = 10;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.getAudiotype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.AvProcessingBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.setAudiotype = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string videoUrl = 11;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.getVideourl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.AvProcessingBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.setVideourl = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string videoType = 12;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.getVideotype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.AvProcessingBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.setVideotype = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional int32 mediaTrackId = 13;
 * @return {number}
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.getMediatrackid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.rpc.AvProcessingBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.setMediatrackid = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * repeated treeleaf.anydone.entities.Delay delay = 14;
 * @return {!Array<!proto.treeleaf.anydone.entities.Delay>}
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.getDelayList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.Delay>} */ (
    jspb.Message.getRepeatedWrapperField(this, av_processing_pb.Delay, 14));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.Delay>} value
 * @return {!proto.treeleaf.anydone.rpc.AvProcessingBaseRequest} returns this
*/
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.setDelayList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.Delay=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.Delay}
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.addDelay = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.treeleaf.anydone.entities.Delay, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.rpc.AvProcessingBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseRequest.prototype.clearDelayList = function() {
  return this.setDelayList([]);
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
proto.treeleaf.anydone.rpc.AvProcessingBaseResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.rpc.AvProcessingBaseResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.rpc.AvProcessingBaseResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    msg: jspb.Message.getFieldWithDefault(msg, 2, ""),
    errorcode: jspb.Message.getFieldWithDefault(msg, 3, 0),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    mediatrackid: jspb.Message.getFieldWithDefault(msg, 5, 0),
    mediaurl: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.treeleaf.anydone.rpc.AvProcessingBaseResponse}
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.rpc.AvProcessingBaseResponse;
  return proto.treeleaf.anydone.rpc.AvProcessingBaseResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.rpc.AvProcessingBaseResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.rpc.AvProcessingBaseResponse}
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMediatrackid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMediaurl(value);
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
proto.treeleaf.anydone.rpc.AvProcessingBaseResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.rpc.AvProcessingBaseResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.rpc.AvProcessingBaseResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getMediatrackid();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getMediaurl();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional bool error = 1;
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseResponse.prototype.getError = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.rpc.AvProcessingBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.AvProcessingBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional treeleaf.protos.ErrorCode errorCode = 3;
 * @return {!proto.treeleaf.protos.ErrorCode}
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseResponse.prototype.getErrorcode = function() {
  return /** @type {!proto.treeleaf.protos.ErrorCode} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.treeleaf.protos.ErrorCode} value
 * @return {!proto.treeleaf.anydone.rpc.AvProcessingBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseResponse.prototype.setErrorcode = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool success = 4;
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.rpc.AvProcessingBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int32 mediaTrackId = 5;
 * @return {number}
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseResponse.prototype.getMediatrackid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.rpc.AvProcessingBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseResponse.prototype.setMediatrackid = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string mediaUrl = 6;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseResponse.prototype.getMediaurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.AvProcessingBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.AvProcessingBaseResponse.prototype.setMediaurl = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


goog.object.extend(exports, proto.treeleaf.anydone.rpc);
