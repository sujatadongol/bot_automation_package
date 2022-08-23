// source: settings_rpc.proto
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

var settings_pb = require('./settings_pb.js');
goog.object.extend(proto, settings_pb);
var treeleaf_pb = require('./treeleaf_pb.js');
goog.object.extend(proto, treeleaf_pb);
var auth_pb = require('./auth_pb.js');
goog.object.extend(proto, auth_pb);
goog.exportSymbol('proto.treeleaf.anydone.rpc.SettingsBaseRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.rpc.SettingsBaseResponse', null, global);
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
proto.treeleaf.anydone.rpc.SettingsBaseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.rpc.SettingsBaseRequest.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.rpc.SettingsBaseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.rpc.SettingsBaseRequest.displayName = 'proto.treeleaf.anydone.rpc.SettingsBaseRequest';
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
proto.treeleaf.anydone.rpc.SettingsBaseResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.rpc.SettingsBaseResponse.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.rpc.SettingsBaseResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.rpc.SettingsBaseResponse.displayName = 'proto.treeleaf.anydone.rpc.SettingsBaseResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.rpc.SettingsBaseRequest.repeatedFields_ = [3];



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
proto.treeleaf.anydone.rpc.SettingsBaseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.rpc.SettingsBaseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.rpc.SettingsBaseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.rpc.SettingsBaseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    refid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stringvalue: jspb.Message.getFieldWithDefault(msg, 2, ""),
    stringvaluesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    debug: (f = msg.getDebug()) && treeleaf_pb.Debug.toObject(includeInstance, f),
    authorization: (f = msg.getAuthorization()) && auth_pb.Authorization.toObject(includeInstance, f),
    settings: (f = msg.getSettings()) && settings_pb.SettingsRequest.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 7, 0),
    setting: (f = msg.getSetting()) && settings_pb.Settings.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseRequest}
 */
proto.treeleaf.anydone.rpc.SettingsBaseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.rpc.SettingsBaseRequest;
  return proto.treeleaf.anydone.rpc.SettingsBaseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.rpc.SettingsBaseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseRequest}
 */
proto.treeleaf.anydone.rpc.SettingsBaseRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new treeleaf_pb.Debug;
      reader.readMessage(value,treeleaf_pb.Debug.deserializeBinaryFromReader);
      msg.setDebug(value);
      break;
    case 5:
      var value = new auth_pb.Authorization;
      reader.readMessage(value,auth_pb.Authorization.deserializeBinaryFromReader);
      msg.setAuthorization(value);
      break;
    case 6:
      var value = new settings_pb.SettingsRequest;
      reader.readMessage(value,settings_pb.SettingsRequest.deserializeBinaryFromReader);
      msg.setSettings(value);
      break;
    case 7:
      var value = /** @type {!proto.treeleaf.anydone.entities.SettingsType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 8:
      var value = new settings_pb.Settings;
      reader.readMessage(value,settings_pb.Settings.deserializeBinaryFromReader);
      msg.setSetting(value);
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
proto.treeleaf.anydone.rpc.SettingsBaseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.rpc.SettingsBaseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.rpc.SettingsBaseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.rpc.SettingsBaseRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDebug();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      treeleaf_pb.Debug.serializeBinaryToWriter
    );
  }
  f = message.getAuthorization();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      auth_pb.Authorization.serializeBinaryToWriter
    );
  }
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      settings_pb.SettingsRequest.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getSetting();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      settings_pb.Settings.serializeBinaryToWriter
    );
  }
};


/**
 * optional string refId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.SettingsBaseRequest.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.SettingsBaseRequest.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string stringValue = 2;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.SettingsBaseRequest.prototype.getStringvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.SettingsBaseRequest.prototype.setStringvalue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string stringValues = 3;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.rpc.SettingsBaseRequest.prototype.getStringvaluesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.SettingsBaseRequest.prototype.setStringvaluesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.SettingsBaseRequest.prototype.addStringvalues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.SettingsBaseRequest.prototype.clearStringvaluesList = function() {
  return this.setStringvaluesList([]);
};


/**
 * optional treeleaf.protos.Debug debug = 4;
 * @return {?proto.treeleaf.protos.Debug}
 */
proto.treeleaf.anydone.rpc.SettingsBaseRequest.prototype.getDebug = function() {
  return /** @type{?proto.treeleaf.protos.Debug} */ (
    jspb.Message.getWrapperField(this, treeleaf_pb.Debug, 4));
};


/**
 * @param {?proto.treeleaf.protos.Debug|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseRequest} returns this
*/
proto.treeleaf.anydone.rpc.SettingsBaseRequest.prototype.setDebug = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.SettingsBaseRequest.prototype.clearDebug = function() {
  return this.setDebug(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.SettingsBaseRequest.prototype.hasDebug = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional treeleaf.anydone.entities.Authorization authorization = 5;
 * @return {?proto.treeleaf.anydone.entities.Authorization}
 */
proto.treeleaf.anydone.rpc.SettingsBaseRequest.prototype.getAuthorization = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Authorization} */ (
    jspb.Message.getWrapperField(this, auth_pb.Authorization, 5));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Authorization|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseRequest} returns this
*/
proto.treeleaf.anydone.rpc.SettingsBaseRequest.prototype.setAuthorization = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.SettingsBaseRequest.prototype.clearAuthorization = function() {
  return this.setAuthorization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.SettingsBaseRequest.prototype.hasAuthorization = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional treeleaf.anydone.entities.SettingsRequest settings = 6;
 * @return {?proto.treeleaf.anydone.entities.SettingsRequest}
 */
proto.treeleaf.anydone.rpc.SettingsBaseRequest.prototype.getSettings = function() {
  return /** @type{?proto.treeleaf.anydone.entities.SettingsRequest} */ (
    jspb.Message.getWrapperField(this, settings_pb.SettingsRequest, 6));
};


/**
 * @param {?proto.treeleaf.anydone.entities.SettingsRequest|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseRequest} returns this
*/
proto.treeleaf.anydone.rpc.SettingsBaseRequest.prototype.setSettings = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.SettingsBaseRequest.prototype.clearSettings = function() {
  return this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.SettingsBaseRequest.prototype.hasSettings = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional treeleaf.anydone.entities.SettingsType type = 7;
 * @return {!proto.treeleaf.anydone.entities.SettingsType}
 */
proto.treeleaf.anydone.rpc.SettingsBaseRequest.prototype.getType = function() {
  return /** @type {!proto.treeleaf.anydone.entities.SettingsType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.SettingsType} value
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.SettingsBaseRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional treeleaf.anydone.entities.Settings setting = 8;
 * @return {?proto.treeleaf.anydone.entities.Settings}
 */
proto.treeleaf.anydone.rpc.SettingsBaseRequest.prototype.getSetting = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Settings} */ (
    jspb.Message.getWrapperField(this, settings_pb.Settings, 8));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Settings|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseRequest} returns this
*/
proto.treeleaf.anydone.rpc.SettingsBaseRequest.prototype.setSetting = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.SettingsBaseRequest.prototype.clearSetting = function() {
  return this.setSetting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.SettingsBaseRequest.prototype.hasSetting = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.rpc.SettingsBaseResponse.repeatedFields_ = [7,10];



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
proto.treeleaf.anydone.rpc.SettingsBaseResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.rpc.SettingsBaseResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.rpc.SettingsBaseResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.rpc.SettingsBaseResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    msg: jspb.Message.getFieldWithDefault(msg, 2, ""),
    errorcode: jspb.Message.getFieldWithDefault(msg, 3, 0),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    timestamp: jspb.Message.getFieldWithDefault(msg, 5, 0),
    debug: (f = msg.getDebug()) && treeleaf_pb.Debug.toObject(includeInstance, f),
    settingsList: jspb.Message.toObjectList(msg.getSettingsList(),
    settings_pb.Settings.toObject, includeInstance),
    setting: (f = msg.getSetting()) && settings_pb.Settings.toObject(includeInstance, f),
    idnamesList: jspb.Message.toObjectList(msg.getIdnamesList(),
    settings_pb.IdName.toObject, includeInstance)
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
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseResponse}
 */
proto.treeleaf.anydone.rpc.SettingsBaseResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.rpc.SettingsBaseResponse;
  return proto.treeleaf.anydone.rpc.SettingsBaseResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.rpc.SettingsBaseResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseResponse}
 */
proto.treeleaf.anydone.rpc.SettingsBaseResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new settings_pb.Settings;
      reader.readMessage(value,settings_pb.Settings.deserializeBinaryFromReader);
      msg.addSettings(value);
      break;
    case 8:
      var value = new settings_pb.Settings;
      reader.readMessage(value,settings_pb.Settings.deserializeBinaryFromReader);
      msg.setSetting(value);
      break;
    case 10:
      var value = new settings_pb.IdName;
      reader.readMessage(value,settings_pb.IdName.deserializeBinaryFromReader);
      msg.addIdnames(value);
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
proto.treeleaf.anydone.rpc.SettingsBaseResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.rpc.SettingsBaseResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.rpc.SettingsBaseResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.rpc.SettingsBaseResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getSettingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      settings_pb.Settings.serializeBinaryToWriter
    );
  }
  f = message.getSetting();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      settings_pb.Settings.serializeBinaryToWriter
    );
  }
  f = message.getIdnamesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      settings_pb.IdName.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool error = 1;
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.SettingsBaseResponse.prototype.getError = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.SettingsBaseResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.SettingsBaseResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.SettingsBaseResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional treeleaf.protos.ErrorCode errorCode = 3;
 * @return {!proto.treeleaf.protos.ErrorCode}
 */
proto.treeleaf.anydone.rpc.SettingsBaseResponse.prototype.getErrorcode = function() {
  return /** @type {!proto.treeleaf.protos.ErrorCode} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.treeleaf.protos.ErrorCode} value
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.SettingsBaseResponse.prototype.setErrorcode = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool success = 4;
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.SettingsBaseResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.SettingsBaseResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int64 timestamp = 5;
 * @return {number}
 */
proto.treeleaf.anydone.rpc.SettingsBaseResponse.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.SettingsBaseResponse.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional treeleaf.protos.Debug debug = 6;
 * @return {?proto.treeleaf.protos.Debug}
 */
proto.treeleaf.anydone.rpc.SettingsBaseResponse.prototype.getDebug = function() {
  return /** @type{?proto.treeleaf.protos.Debug} */ (
    jspb.Message.getWrapperField(this, treeleaf_pb.Debug, 6));
};


/**
 * @param {?proto.treeleaf.protos.Debug|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseResponse} returns this
*/
proto.treeleaf.anydone.rpc.SettingsBaseResponse.prototype.setDebug = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.SettingsBaseResponse.prototype.clearDebug = function() {
  return this.setDebug(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.SettingsBaseResponse.prototype.hasDebug = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated treeleaf.anydone.entities.Settings settings = 7;
 * @return {!Array<!proto.treeleaf.anydone.entities.Settings>}
 */
proto.treeleaf.anydone.rpc.SettingsBaseResponse.prototype.getSettingsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.Settings>} */ (
    jspb.Message.getRepeatedWrapperField(this, settings_pb.Settings, 7));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.Settings>} value
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseResponse} returns this
*/
proto.treeleaf.anydone.rpc.SettingsBaseResponse.prototype.setSettingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.Settings=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.Settings}
 */
proto.treeleaf.anydone.rpc.SettingsBaseResponse.prototype.addSettings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.treeleaf.anydone.entities.Settings, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.SettingsBaseResponse.prototype.clearSettingsList = function() {
  return this.setSettingsList([]);
};


/**
 * optional treeleaf.anydone.entities.Settings setting = 8;
 * @return {?proto.treeleaf.anydone.entities.Settings}
 */
proto.treeleaf.anydone.rpc.SettingsBaseResponse.prototype.getSetting = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Settings} */ (
    jspb.Message.getWrapperField(this, settings_pb.Settings, 8));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Settings|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseResponse} returns this
*/
proto.treeleaf.anydone.rpc.SettingsBaseResponse.prototype.setSetting = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.SettingsBaseResponse.prototype.clearSetting = function() {
  return this.setSetting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.SettingsBaseResponse.prototype.hasSetting = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated treeleaf.anydone.entities.IdName idNames = 10;
 * @return {!Array<!proto.treeleaf.anydone.entities.IdName>}
 */
proto.treeleaf.anydone.rpc.SettingsBaseResponse.prototype.getIdnamesList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.IdName>} */ (
    jspb.Message.getRepeatedWrapperField(this, settings_pb.IdName, 10));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.IdName>} value
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseResponse} returns this
*/
proto.treeleaf.anydone.rpc.SettingsBaseResponse.prototype.setIdnamesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.IdName=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.IdName}
 */
proto.treeleaf.anydone.rpc.SettingsBaseResponse.prototype.addIdnames = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.treeleaf.anydone.entities.IdName, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.rpc.SettingsBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.SettingsBaseResponse.prototype.clearIdnamesList = function() {
  return this.setIdnamesList([]);
};


goog.object.extend(exports, proto.treeleaf.anydone.rpc);