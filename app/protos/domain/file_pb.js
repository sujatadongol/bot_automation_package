// source: domain/file.proto
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

goog.exportSymbol('proto.treeleaf.anydone.entities.pb.file.domain.File', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.pb.file.domain.File.Type', null, global);
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
proto.treeleaf.anydone.entities.pb.file.domain.File = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.pb.file.domain.File.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.pb.file.domain.File, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.pb.file.domain.File.displayName = 'proto.treeleaf.anydone.entities.pb.file.domain.File';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.repeatedFields_ = [13];



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
proto.treeleaf.anydone.entities.pb.file.domain.File.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.pb.file.domain.File.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.pb.file.domain.File} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    size: jspb.Message.getFieldWithDefault(msg, 3, 0),
    path: jspb.Message.getFieldWithDefault(msg, 4, ""),
    owner: jspb.Message.getFieldWithDefault(msg, 5, ""),
    modified: jspb.Message.getFieldWithDefault(msg, 6, 0),
    opened: jspb.Message.getFieldWithDefault(msg, 7, 0),
    created: jspb.Message.getFieldWithDefault(msg, 8, 0),
    description: jspb.Message.getFieldWithDefault(msg, 9, ""),
    type: jspb.Message.getFieldWithDefault(msg, 10, 0),
    parentId: jspb.Message.getFieldWithDefault(msg, 11, ""),
    url: jspb.Message.getFieldWithDefault(msg, 12, ""),
    fileList: jspb.Message.toObjectList(msg.getFileList(),
    proto.treeleaf.anydone.entities.pb.file.domain.File.toObject, includeInstance)
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
 * @return {!proto.treeleaf.anydone.entities.pb.file.domain.File}
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.pb.file.domain.File;
  return proto.treeleaf.anydone.entities.pb.file.domain.File.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.pb.file.domain.File} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.pb.file.domain.File}
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setModified(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOpened(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreated(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 10:
      var value = /** @type {!proto.treeleaf.anydone.entities.pb.file.domain.File.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentId(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 13:
      var value = new proto.treeleaf.anydone.entities.pb.file.domain.File;
      reader.readMessage(value,proto.treeleaf.anydone.entities.pb.file.domain.File.deserializeBinaryFromReader);
      msg.addFile(value);
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
proto.treeleaf.anydone.entities.pb.file.domain.File.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.pb.file.domain.File.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.pb.file.domain.File} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getModified();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getOpened();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getCreated();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getParentId();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getFileList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.treeleaf.anydone.entities.pb.file.domain.File.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.Type = {
  UNKNOWN: 0,
  FILE: 1,
  FOLDER: 2
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.pb.file.domain.File} returns this
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.pb.file.domain.File} returns this
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 size = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.pb.file.domain.File} returns this
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string path = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.pb.file.domain.File} returns this
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string owner = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.pb.file.domain.File} returns this
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.prototype.setOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 modified = 6;
 * @return {number}
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.prototype.getModified = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.pb.file.domain.File} returns this
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.prototype.setModified = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 opened = 7;
 * @return {number}
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.prototype.getOpened = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.pb.file.domain.File} returns this
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.prototype.setOpened = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 created = 8;
 * @return {number}
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.prototype.getCreated = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.pb.file.domain.File} returns this
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.prototype.setCreated = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string description = 9;
 * @return {string}
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.pb.file.domain.File} returns this
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional Type type = 10;
 * @return {!proto.treeleaf.anydone.entities.pb.file.domain.File.Type}
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.prototype.getType = function() {
  return /** @type {!proto.treeleaf.anydone.entities.pb.file.domain.File.Type} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.pb.file.domain.File.Type} value
 * @return {!proto.treeleaf.anydone.entities.pb.file.domain.File} returns this
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional string parent_id = 11;
 * @return {string}
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.prototype.getParentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.pb.file.domain.File} returns this
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.prototype.setParentId = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string url = 12;
 * @return {string}
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.pb.file.domain.File} returns this
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * repeated File file = 13;
 * @return {!Array<!proto.treeleaf.anydone.entities.pb.file.domain.File>}
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.prototype.getFileList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.pb.file.domain.File>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.pb.file.domain.File, 13));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.pb.file.domain.File>} value
 * @return {!proto.treeleaf.anydone.entities.pb.file.domain.File} returns this
*/
proto.treeleaf.anydone.entities.pb.file.domain.File.prototype.setFileList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.pb.file.domain.File=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.pb.file.domain.File}
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.prototype.addFile = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.treeleaf.anydone.entities.pb.file.domain.File, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.pb.file.domain.File} returns this
 */
proto.treeleaf.anydone.entities.pb.file.domain.File.prototype.clearFileList = function() {
  return this.setFileList([]);
};


goog.object.extend(exports, proto.treeleaf.anydone.entities.pb.file.domain);
