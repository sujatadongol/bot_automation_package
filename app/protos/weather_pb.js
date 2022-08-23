// source: weather.proto
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

goog.exportSymbol('proto.treeleaf.anydone.entities.FetchWeatherDetailRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.Imperial', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.Metric', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.Temperature', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.WeatherDetail', null, global);
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
proto.treeleaf.anydone.entities.FetchWeatherDetailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.FetchWeatherDetailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.FetchWeatherDetailRequest.displayName = 'proto.treeleaf.anydone.entities.FetchWeatherDetailRequest';
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
proto.treeleaf.anydone.entities.Metric = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.Metric, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.Metric.displayName = 'proto.treeleaf.anydone.entities.Metric';
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
proto.treeleaf.anydone.entities.Imperial = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.Imperial, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.Imperial.displayName = 'proto.treeleaf.anydone.entities.Imperial';
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
proto.treeleaf.anydone.entities.Temperature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.Temperature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.Temperature.displayName = 'proto.treeleaf.anydone.entities.Temperature';
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
proto.treeleaf.anydone.entities.WeatherDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.WeatherDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.WeatherDetail.displayName = 'proto.treeleaf.anydone.entities.WeatherDetail';
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
proto.treeleaf.anydone.entities.FetchWeatherDetailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.FetchWeatherDetailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.FetchWeatherDetailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.FetchWeatherDetailRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    lat: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pb_long: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.treeleaf.anydone.entities.FetchWeatherDetailRequest}
 */
proto.treeleaf.anydone.entities.FetchWeatherDetailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.FetchWeatherDetailRequest;
  return proto.treeleaf.anydone.entities.FetchWeatherDetailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.FetchWeatherDetailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.FetchWeatherDetailRequest}
 */
proto.treeleaf.anydone.entities.FetchWeatherDetailRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLat(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLong(value);
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
proto.treeleaf.anydone.entities.FetchWeatherDetailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.FetchWeatherDetailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.FetchWeatherDetailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.FetchWeatherDetailRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLat();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLong();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string lat = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.FetchWeatherDetailRequest.prototype.getLat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.FetchWeatherDetailRequest} returns this
 */
proto.treeleaf.anydone.entities.FetchWeatherDetailRequest.prototype.setLat = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string long = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.FetchWeatherDetailRequest.prototype.getLong = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.FetchWeatherDetailRequest} returns this
 */
proto.treeleaf.anydone.entities.FetchWeatherDetailRequest.prototype.setLong = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.treeleaf.anydone.entities.Metric.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.Metric.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.Metric} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Metric.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    unit: jspb.Message.getFieldWithDefault(msg, 2, ""),
    unittype: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.treeleaf.anydone.entities.Metric}
 */
proto.treeleaf.anydone.entities.Metric.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.Metric;
  return proto.treeleaf.anydone.entities.Metric.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.Metric} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.Metric}
 */
proto.treeleaf.anydone.entities.Metric.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnit(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUnittype(value);
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
proto.treeleaf.anydone.entities.Metric.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.Metric.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.Metric} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Metric.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getUnit();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUnittype();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional double Value = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Metric.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Metric} returns this
 */
proto.treeleaf.anydone.entities.Metric.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional string Unit = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Metric.prototype.getUnit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Metric} returns this
 */
proto.treeleaf.anydone.entities.Metric.prototype.setUnit = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 UnitType = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Metric.prototype.getUnittype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Metric} returns this
 */
proto.treeleaf.anydone.entities.Metric.prototype.setUnittype = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
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
proto.treeleaf.anydone.entities.Imperial.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.Imperial.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.Imperial} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Imperial.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    unit: jspb.Message.getFieldWithDefault(msg, 2, ""),
    unittype: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.treeleaf.anydone.entities.Imperial}
 */
proto.treeleaf.anydone.entities.Imperial.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.Imperial;
  return proto.treeleaf.anydone.entities.Imperial.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.Imperial} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.Imperial}
 */
proto.treeleaf.anydone.entities.Imperial.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnit(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUnittype(value);
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
proto.treeleaf.anydone.entities.Imperial.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.Imperial.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.Imperial} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Imperial.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getUnit();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUnittype();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional double Value = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Imperial.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Imperial} returns this
 */
proto.treeleaf.anydone.entities.Imperial.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional string Unit = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Imperial.prototype.getUnit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Imperial} returns this
 */
proto.treeleaf.anydone.entities.Imperial.prototype.setUnit = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 UnitType = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Imperial.prototype.getUnittype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Imperial} returns this
 */
proto.treeleaf.anydone.entities.Imperial.prototype.setUnittype = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
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
proto.treeleaf.anydone.entities.Temperature.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.Temperature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.Temperature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Temperature.toObject = function(includeInstance, msg) {
  var f, obj = {
    metric: (f = msg.getMetric()) && proto.treeleaf.anydone.entities.Metric.toObject(includeInstance, f),
    imperial: (f = msg.getImperial()) && proto.treeleaf.anydone.entities.Imperial.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.Temperature}
 */
proto.treeleaf.anydone.entities.Temperature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.Temperature;
  return proto.treeleaf.anydone.entities.Temperature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.Temperature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.Temperature}
 */
proto.treeleaf.anydone.entities.Temperature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.Metric;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Metric.deserializeBinaryFromReader);
      msg.setMetric(value);
      break;
    case 2:
      var value = new proto.treeleaf.anydone.entities.Imperial;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Imperial.deserializeBinaryFromReader);
      msg.setImperial(value);
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
proto.treeleaf.anydone.entities.Temperature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.Temperature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.Temperature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Temperature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetric();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.Metric.serializeBinaryToWriter
    );
  }
  f = message.getImperial();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.treeleaf.anydone.entities.Imperial.serializeBinaryToWriter
    );
  }
};


/**
 * optional Metric Metric = 1;
 * @return {?proto.treeleaf.anydone.entities.Metric}
 */
proto.treeleaf.anydone.entities.Temperature.prototype.getMetric = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Metric} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.Metric, 1));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Metric|undefined} value
 * @return {!proto.treeleaf.anydone.entities.Temperature} returns this
*/
proto.treeleaf.anydone.entities.Temperature.prototype.setMetric = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.Temperature} returns this
 */
proto.treeleaf.anydone.entities.Temperature.prototype.clearMetric = function() {
  return this.setMetric(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Temperature.prototype.hasMetric = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Imperial Imperial = 2;
 * @return {?proto.treeleaf.anydone.entities.Imperial}
 */
proto.treeleaf.anydone.entities.Temperature.prototype.getImperial = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Imperial} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.Imperial, 2));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Imperial|undefined} value
 * @return {!proto.treeleaf.anydone.entities.Temperature} returns this
*/
proto.treeleaf.anydone.entities.Temperature.prototype.setImperial = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.Temperature} returns this
 */
proto.treeleaf.anydone.entities.Temperature.prototype.clearImperial = function() {
  return this.setImperial(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Temperature.prototype.hasImperial = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.treeleaf.anydone.entities.WeatherDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.WeatherDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.WeatherDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.WeatherDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    localobservationdatetime: jspb.Message.getFieldWithDefault(msg, 1, ""),
    epochtime: jspb.Message.getFieldWithDefault(msg, 2, 0),
    weathertext: jspb.Message.getFieldWithDefault(msg, 3, ""),
    weathericon: jspb.Message.getFieldWithDefault(msg, 4, 0),
    hasprecipitation: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    precipitationtype: jspb.Message.getFieldWithDefault(msg, 6, ""),
    isdaytime: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    temperature: (f = msg.getTemperature()) && proto.treeleaf.anydone.entities.Temperature.toObject(includeInstance, f),
    mobilelink: jspb.Message.getFieldWithDefault(msg, 9, ""),
    link: jspb.Message.getFieldWithDefault(msg, 10, "")
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
 * @return {!proto.treeleaf.anydone.entities.WeatherDetail}
 */
proto.treeleaf.anydone.entities.WeatherDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.WeatherDetail;
  return proto.treeleaf.anydone.entities.WeatherDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.WeatherDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.WeatherDetail}
 */
proto.treeleaf.anydone.entities.WeatherDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocalobservationdatetime(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEpochtime(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWeathertext(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWeathericon(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasprecipitation(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrecipitationtype(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsdaytime(value);
      break;
    case 8:
      var value = new proto.treeleaf.anydone.entities.Temperature;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Temperature.deserializeBinaryFromReader);
      msg.setTemperature(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setMobilelink(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setLink(value);
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
proto.treeleaf.anydone.entities.WeatherDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.WeatherDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.WeatherDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.WeatherDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocalobservationdatetime();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEpochtime();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getWeathertext();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getWeathericon();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getHasprecipitation();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getPrecipitationtype();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getIsdaytime();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getTemperature();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.treeleaf.anydone.entities.Temperature.serializeBinaryToWriter
    );
  }
  f = message.getMobilelink();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getLink();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string LocalObservationDateTime = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.WeatherDetail.prototype.getLocalobservationdatetime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.WeatherDetail} returns this
 */
proto.treeleaf.anydone.entities.WeatherDetail.prototype.setLocalobservationdatetime = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 EpochTime = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.WeatherDetail.prototype.getEpochtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.WeatherDetail} returns this
 */
proto.treeleaf.anydone.entities.WeatherDetail.prototype.setEpochtime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string WeatherText = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.WeatherDetail.prototype.getWeathertext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.WeatherDetail} returns this
 */
proto.treeleaf.anydone.entities.WeatherDetail.prototype.setWeathertext = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 WeatherIcon = 4;
 * @return {number}
 */
proto.treeleaf.anydone.entities.WeatherDetail.prototype.getWeathericon = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.WeatherDetail} returns this
 */
proto.treeleaf.anydone.entities.WeatherDetail.prototype.setWeathericon = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool HasPrecipitation = 5;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.WeatherDetail.prototype.getHasprecipitation = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.WeatherDetail} returns this
 */
proto.treeleaf.anydone.entities.WeatherDetail.prototype.setHasprecipitation = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string PrecipitationType = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.WeatherDetail.prototype.getPrecipitationtype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.WeatherDetail} returns this
 */
proto.treeleaf.anydone.entities.WeatherDetail.prototype.setPrecipitationtype = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool IsDayTime = 7;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.WeatherDetail.prototype.getIsdaytime = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.WeatherDetail} returns this
 */
proto.treeleaf.anydone.entities.WeatherDetail.prototype.setIsdaytime = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional Temperature Temperature = 8;
 * @return {?proto.treeleaf.anydone.entities.Temperature}
 */
proto.treeleaf.anydone.entities.WeatherDetail.prototype.getTemperature = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Temperature} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.Temperature, 8));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Temperature|undefined} value
 * @return {!proto.treeleaf.anydone.entities.WeatherDetail} returns this
*/
proto.treeleaf.anydone.entities.WeatherDetail.prototype.setTemperature = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.WeatherDetail} returns this
 */
proto.treeleaf.anydone.entities.WeatherDetail.prototype.clearTemperature = function() {
  return this.setTemperature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.WeatherDetail.prototype.hasTemperature = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string MobileLink = 9;
 * @return {string}
 */
proto.treeleaf.anydone.entities.WeatherDetail.prototype.getMobilelink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.WeatherDetail} returns this
 */
proto.treeleaf.anydone.entities.WeatherDetail.prototype.setMobilelink = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string Link = 10;
 * @return {string}
 */
proto.treeleaf.anydone.entities.WeatherDetail.prototype.getLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.WeatherDetail} returns this
 */
proto.treeleaf.anydone.entities.WeatherDetail.prototype.setLink = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


goog.object.extend(exports, proto.treeleaf.anydone.entities);