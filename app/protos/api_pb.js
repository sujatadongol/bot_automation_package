// source: api.proto
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

var service_pb = require('./service_pb.js');
goog.object.extend(proto, service_pb);
var user_pb = require('./user_pb.js');
goog.object.extend(proto, user_pb);
goog.exportSymbol('proto.treeleaf.anydone.entities.ApiKey', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ApiKeyGenRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ApiKeyScope', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ApiScope', null, global);
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
proto.treeleaf.anydone.entities.ApiKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.ApiKey.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.ApiKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.ApiKey.displayName = 'proto.treeleaf.anydone.entities.ApiKey';
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
proto.treeleaf.anydone.entities.ApiKeyGenRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.ApiKeyGenRequest.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.ApiKeyGenRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.ApiKeyGenRequest.displayName = 'proto.treeleaf.anydone.entities.ApiKeyGenRequest';
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
proto.treeleaf.anydone.entities.ApiKeyScope = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.ApiKeyScope, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.ApiKeyScope.displayName = 'proto.treeleaf.anydone.entities.ApiKeyScope';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.ApiKey.repeatedFields_ = [8];



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
proto.treeleaf.anydone.entities.ApiKey.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.ApiKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.ApiKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ApiKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    apikeyid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    account: (f = msg.getAccount()) && user_pb.Account.toObject(includeInstance, f),
    service: (f = msg.getService()) && service_pb.Service.toObject(includeInstance, f),
    secret: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 5, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 6, 0),
    createdby: jspb.Message.getFieldWithDefault(msg, 7, ""),
    apikeyscopesList: jspb.Message.toObjectList(msg.getApikeyscopesList(),
    proto.treeleaf.anydone.entities.ApiKeyScope.toObject, includeInstance),
    apikeytitle: jspb.Message.getFieldWithDefault(msg, 9, ""),
    spaccountid: jspb.Message.getFieldWithDefault(msg, 10, "")
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
 * @return {!proto.treeleaf.anydone.entities.ApiKey}
 */
proto.treeleaf.anydone.entities.ApiKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.ApiKey;
  return proto.treeleaf.anydone.entities.ApiKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.ApiKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.ApiKey}
 */
proto.treeleaf.anydone.entities.ApiKey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApikeyid(value);
      break;
    case 2:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    case 3:
      var value = new service_pb.Service;
      reader.readMessage(value,service_pb.Service.deserializeBinaryFromReader);
      msg.setService(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecret(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedat(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedby(value);
      break;
    case 8:
      var value = new proto.treeleaf.anydone.entities.ApiKeyScope;
      reader.readMessage(value,proto.treeleaf.anydone.entities.ApiKeyScope.deserializeBinaryFromReader);
      msg.addApikeyscopes(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setApikeytitle(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpaccountid(value);
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
proto.treeleaf.anydone.entities.ApiKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.ApiKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.ApiKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ApiKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApikeyid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getService();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      service_pb.Service.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getCreatedby();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getApikeyscopesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.treeleaf.anydone.entities.ApiKeyScope.serializeBinaryToWriter
    );
  }
  f = message.getApikeytitle();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getSpaccountid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string apiKeyId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ApiKey.prototype.getApikeyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ApiKey} returns this
 */
proto.treeleaf.anydone.entities.ApiKey.prototype.setApikeyid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Account account = 2;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.ApiKey.prototype.getAccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 2));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.ApiKey} returns this
*/
proto.treeleaf.anydone.entities.ApiKey.prototype.setAccount = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.ApiKey} returns this
 */
proto.treeleaf.anydone.entities.ApiKey.prototype.clearAccount = function() {
  return this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.ApiKey.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Service service = 3;
 * @return {?proto.treeleaf.anydone.entities.Service}
 */
proto.treeleaf.anydone.entities.ApiKey.prototype.getService = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Service} */ (
    jspb.Message.getWrapperField(this, service_pb.Service, 3));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Service|undefined} value
 * @return {!proto.treeleaf.anydone.entities.ApiKey} returns this
*/
proto.treeleaf.anydone.entities.ApiKey.prototype.setService = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.ApiKey} returns this
 */
proto.treeleaf.anydone.entities.ApiKey.prototype.clearService = function() {
  return this.setService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.ApiKey.prototype.hasService = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string secret = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ApiKey.prototype.getSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ApiKey} returns this
 */
proto.treeleaf.anydone.entities.ApiKey.prototype.setSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 createdAt = 5;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ApiKey.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ApiKey} returns this
 */
proto.treeleaf.anydone.entities.ApiKey.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 updatedAt = 6;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ApiKey.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ApiKey} returns this
 */
proto.treeleaf.anydone.entities.ApiKey.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string createdBy = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ApiKey.prototype.getCreatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ApiKey} returns this
 */
proto.treeleaf.anydone.entities.ApiKey.prototype.setCreatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated ApiKeyScope apiKeyScopes = 8;
 * @return {!Array<!proto.treeleaf.anydone.entities.ApiKeyScope>}
 */
proto.treeleaf.anydone.entities.ApiKey.prototype.getApikeyscopesList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.ApiKeyScope>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.ApiKeyScope, 8));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.ApiKeyScope>} value
 * @return {!proto.treeleaf.anydone.entities.ApiKey} returns this
*/
proto.treeleaf.anydone.entities.ApiKey.prototype.setApikeyscopesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.ApiKeyScope=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.ApiKeyScope}
 */
proto.treeleaf.anydone.entities.ApiKey.prototype.addApikeyscopes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.treeleaf.anydone.entities.ApiKeyScope, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.ApiKey} returns this
 */
proto.treeleaf.anydone.entities.ApiKey.prototype.clearApikeyscopesList = function() {
  return this.setApikeyscopesList([]);
};


/**
 * optional string apiKeyTitle = 9;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ApiKey.prototype.getApikeytitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ApiKey} returns this
 */
proto.treeleaf.anydone.entities.ApiKey.prototype.setApikeytitle = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string spAccountId = 10;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ApiKey.prototype.getSpaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ApiKey} returns this
 */
proto.treeleaf.anydone.entities.ApiKey.prototype.setSpaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.ApiKeyGenRequest.repeatedFields_ = [3];



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
proto.treeleaf.anydone.entities.ApiKeyGenRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.ApiKeyGenRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.ApiKeyGenRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ApiKeyGenRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    apikeytitle: jspb.Message.getFieldWithDefault(msg, 1, ""),
    serviceid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    apikeyscopesList: jspb.Message.toObjectList(msg.getApikeyscopesList(),
    proto.treeleaf.anydone.entities.ApiKeyScope.toObject, includeInstance)
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
 * @return {!proto.treeleaf.anydone.entities.ApiKeyGenRequest}
 */
proto.treeleaf.anydone.entities.ApiKeyGenRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.ApiKeyGenRequest;
  return proto.treeleaf.anydone.entities.ApiKeyGenRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.ApiKeyGenRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.ApiKeyGenRequest}
 */
proto.treeleaf.anydone.entities.ApiKeyGenRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApikeytitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceid(value);
      break;
    case 3:
      var value = new proto.treeleaf.anydone.entities.ApiKeyScope;
      reader.readMessage(value,proto.treeleaf.anydone.entities.ApiKeyScope.deserializeBinaryFromReader);
      msg.addApikeyscopes(value);
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
proto.treeleaf.anydone.entities.ApiKeyGenRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.ApiKeyGenRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.ApiKeyGenRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ApiKeyGenRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApikeytitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getServiceid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getApikeyscopesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.treeleaf.anydone.entities.ApiKeyScope.serializeBinaryToWriter
    );
  }
};


/**
 * optional string apiKeyTitle = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ApiKeyGenRequest.prototype.getApikeytitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ApiKeyGenRequest} returns this
 */
proto.treeleaf.anydone.entities.ApiKeyGenRequest.prototype.setApikeytitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string serviceId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ApiKeyGenRequest.prototype.getServiceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ApiKeyGenRequest} returns this
 */
proto.treeleaf.anydone.entities.ApiKeyGenRequest.prototype.setServiceid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated ApiKeyScope apiKeyScopes = 3;
 * @return {!Array<!proto.treeleaf.anydone.entities.ApiKeyScope>}
 */
proto.treeleaf.anydone.entities.ApiKeyGenRequest.prototype.getApikeyscopesList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.ApiKeyScope>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.ApiKeyScope, 3));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.ApiKeyScope>} value
 * @return {!proto.treeleaf.anydone.entities.ApiKeyGenRequest} returns this
*/
proto.treeleaf.anydone.entities.ApiKeyGenRequest.prototype.setApikeyscopesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.ApiKeyScope=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.ApiKeyScope}
 */
proto.treeleaf.anydone.entities.ApiKeyGenRequest.prototype.addApikeyscopes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.treeleaf.anydone.entities.ApiKeyScope, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.ApiKeyGenRequest} returns this
 */
proto.treeleaf.anydone.entities.ApiKeyGenRequest.prototype.clearApikeyscopesList = function() {
  return this.setApikeyscopesList([]);
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
proto.treeleaf.anydone.entities.ApiKeyScope.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.ApiKeyScope.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.ApiKeyScope} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ApiKeyScope.toObject = function(includeInstance, msg) {
  var f, obj = {
    apikeyscopeid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    apikeyid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    scope: jspb.Message.getFieldWithDefault(msg, 3, 0),
    createdat: jspb.Message.getFieldWithDefault(msg, 4, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.treeleaf.anydone.entities.ApiKeyScope}
 */
proto.treeleaf.anydone.entities.ApiKeyScope.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.ApiKeyScope;
  return proto.treeleaf.anydone.entities.ApiKeyScope.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.ApiKeyScope} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.ApiKeyScope}
 */
proto.treeleaf.anydone.entities.ApiKeyScope.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApikeyscopeid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setApikeyid(value);
      break;
    case 3:
      var value = /** @type {!proto.treeleaf.anydone.entities.ApiScope} */ (reader.readEnum());
      msg.setScope(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 5:
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
proto.treeleaf.anydone.entities.ApiKeyScope.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.ApiKeyScope.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.ApiKeyScope} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ApiKeyScope.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApikeyscopeid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getApikeyid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getScope();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional string apiKeyScopeId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ApiKeyScope.prototype.getApikeyscopeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ApiKeyScope} returns this
 */
proto.treeleaf.anydone.entities.ApiKeyScope.prototype.setApikeyscopeid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string apiKeyId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ApiKeyScope.prototype.getApikeyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ApiKeyScope} returns this
 */
proto.treeleaf.anydone.entities.ApiKeyScope.prototype.setApikeyid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ApiScope scope = 3;
 * @return {!proto.treeleaf.anydone.entities.ApiScope}
 */
proto.treeleaf.anydone.entities.ApiKeyScope.prototype.getScope = function() {
  return /** @type {!proto.treeleaf.anydone.entities.ApiScope} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.ApiScope} value
 * @return {!proto.treeleaf.anydone.entities.ApiKeyScope} returns this
 */
proto.treeleaf.anydone.entities.ApiKeyScope.prototype.setScope = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int64 createdAt = 4;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ApiKeyScope.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ApiKeyScope} returns this
 */
proto.treeleaf.anydone.entities.ApiKeyScope.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 updatedAt = 5;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ApiKeyScope.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ApiKeyScope} returns this
 */
proto.treeleaf.anydone.entities.ApiKeyScope.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.ApiScope = {
  UNKNOWN_SCOPE: 0,
  CHAT_PLUGIN_SCOPE: 1,
  CREATE_CUSTOMER_SCOPE: 2
};

goog.object.extend(exports, proto.treeleaf.anydone.entities);
