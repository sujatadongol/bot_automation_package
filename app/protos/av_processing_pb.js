// source: av_processing.proto
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

goog.exportSymbol('proto.treeleaf.anydone.entities.Delay', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.VideoDetail', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.VideoTrack', null, global);
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
proto.treeleaf.anydone.entities.VideoTrack = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.VideoTrack, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.VideoTrack.displayName = 'proto.treeleaf.anydone.entities.VideoTrack';
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
proto.treeleaf.anydone.entities.VideoDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.VideoDetail.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.VideoDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.VideoDetail.displayName = 'proto.treeleaf.anydone.entities.VideoDetail';
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
proto.treeleaf.anydone.entities.Delay = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.Delay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.Delay.displayName = 'proto.treeleaf.anydone.entities.Delay';
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
proto.treeleaf.anydone.entities.VideoTrack.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.VideoTrack.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.VideoTrack} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.VideoTrack.toObject = function(includeInstance, msg) {
  var f, obj = {
    trackid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    videoid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    url: jspb.Message.getFieldWithDefault(msg, 3, ""),
    title: jspb.Message.getFieldWithDefault(msg, 4, ""),
    creator: jspb.Message.getFieldWithDefault(msg, 5, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 7, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.treeleaf.anydone.entities.VideoTrack}
 */
proto.treeleaf.anydone.entities.VideoTrack.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.VideoTrack;
  return proto.treeleaf.anydone.entities.VideoTrack.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.VideoTrack} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.VideoTrack}
 */
proto.treeleaf.anydone.entities.VideoTrack.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrackid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVideoid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreator(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 8:
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
proto.treeleaf.anydone.entities.VideoTrack.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.VideoTrack.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.VideoTrack} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.VideoTrack.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrackid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVideoid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreator();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
};


/**
 * optional string trackId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoTrack.prototype.getTrackid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoTrack} returns this
 */
proto.treeleaf.anydone.entities.VideoTrack.prototype.setTrackid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string videoId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoTrack.prototype.getVideoid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoTrack} returns this
 */
proto.treeleaf.anydone.entities.VideoTrack.prototype.setVideoid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string url = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoTrack.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoTrack} returns this
 */
proto.treeleaf.anydone.entities.VideoTrack.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string title = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoTrack.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoTrack} returns this
 */
proto.treeleaf.anydone.entities.VideoTrack.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string creator = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoTrack.prototype.getCreator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoTrack} returns this
 */
proto.treeleaf.anydone.entities.VideoTrack.prototype.setCreator = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string refId = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoTrack.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoTrack} returns this
 */
proto.treeleaf.anydone.entities.VideoTrack.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 createdAt = 7;
 * @return {number}
 */
proto.treeleaf.anydone.entities.VideoTrack.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.VideoTrack} returns this
 */
proto.treeleaf.anydone.entities.VideoTrack.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 updatedAt = 8;
 * @return {number}
 */
proto.treeleaf.anydone.entities.VideoTrack.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.VideoTrack} returns this
 */
proto.treeleaf.anydone.entities.VideoTrack.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.VideoDetail.repeatedFields_ = [8];



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
proto.treeleaf.anydone.entities.VideoDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.VideoDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.VideoDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.VideoDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    videoid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    spaccountid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    defaulttrack: jspb.Message.getFieldWithDefault(msg, 3, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 6, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 7, 0),
    trackList: jspb.Message.toObjectList(msg.getTrackList(),
    proto.treeleaf.anydone.entities.VideoTrack.toObject, includeInstance)
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
 * @return {!proto.treeleaf.anydone.entities.VideoDetail}
 */
proto.treeleaf.anydone.entities.VideoDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.VideoDetail;
  return proto.treeleaf.anydone.entities.VideoDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.VideoDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.VideoDetail}
 */
proto.treeleaf.anydone.entities.VideoDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVideoid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpaccountid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaulttrack(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedat(value);
      break;
    case 8:
      var value = new proto.treeleaf.anydone.entities.VideoTrack;
      reader.readMessage(value,proto.treeleaf.anydone.entities.VideoTrack.deserializeBinaryFromReader);
      msg.addTrack(value);
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
proto.treeleaf.anydone.entities.VideoDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.VideoDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.VideoDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.VideoDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideoid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSpaccountid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDefaulttrack();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getTrackList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.treeleaf.anydone.entities.VideoTrack.serializeBinaryToWriter
    );
  }
};


/**
 * optional string videoId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoDetail.prototype.getVideoid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoDetail} returns this
 */
proto.treeleaf.anydone.entities.VideoDetail.prototype.setVideoid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string spAccountId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoDetail.prototype.getSpaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoDetail} returns this
 */
proto.treeleaf.anydone.entities.VideoDetail.prototype.setSpaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string defaultTrack = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoDetail.prototype.getDefaulttrack = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoDetail} returns this
 */
proto.treeleaf.anydone.entities.VideoDetail.prototype.setDefaulttrack = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 createdAt = 6;
 * @return {number}
 */
proto.treeleaf.anydone.entities.VideoDetail.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.VideoDetail} returns this
 */
proto.treeleaf.anydone.entities.VideoDetail.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 updatedAt = 7;
 * @return {number}
 */
proto.treeleaf.anydone.entities.VideoDetail.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.VideoDetail} returns this
 */
proto.treeleaf.anydone.entities.VideoDetail.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * repeated VideoTrack track = 8;
 * @return {!Array<!proto.treeleaf.anydone.entities.VideoTrack>}
 */
proto.treeleaf.anydone.entities.VideoDetail.prototype.getTrackList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.VideoTrack>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.VideoTrack, 8));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.VideoTrack>} value
 * @return {!proto.treeleaf.anydone.entities.VideoDetail} returns this
*/
proto.treeleaf.anydone.entities.VideoDetail.prototype.setTrackList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.VideoTrack=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.VideoTrack}
 */
proto.treeleaf.anydone.entities.VideoDetail.prototype.addTrack = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.treeleaf.anydone.entities.VideoTrack, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.VideoDetail} returns this
 */
proto.treeleaf.anydone.entities.VideoDetail.prototype.clearTrackList = function() {
  return this.setTrackList([]);
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
proto.treeleaf.anydone.entities.Delay.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.Delay.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.Delay} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Delay.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: jspb.Message.getFieldWithDefault(msg, 1, 0),
    stop: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.treeleaf.anydone.entities.Delay}
 */
proto.treeleaf.anydone.entities.Delay.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.Delay;
  return proto.treeleaf.anydone.entities.Delay.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.Delay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.Delay}
 */
proto.treeleaf.anydone.entities.Delay.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStop(value);
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
proto.treeleaf.anydone.entities.Delay.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.Delay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.Delay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Delay.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getStop();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 start = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Delay.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Delay} returns this
 */
proto.treeleaf.anydone.entities.Delay.prototype.setStart = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 stop = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Delay.prototype.getStop = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Delay} returns this
 */
proto.treeleaf.anydone.entities.Delay.prototype.setStop = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


goog.object.extend(exports, proto.treeleaf.anydone.entities);
