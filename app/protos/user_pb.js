// source: user.proto
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
var anydone_pb = require('./anydone_pb.js');
goog.object.extend(proto, anydone_pb);
var settings_pb = require('./settings_pb.js');
goog.object.extend(proto, settings_pb);
var calendar_pb = require('./calendar_pb.js');
goog.object.extend(proto, calendar_pb);
goog.exportSymbol('proto.treeleaf.anydone.entities.Account', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ActiveMembersAnalytics', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.AddConsumerProfileRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.AddEmployeeProfileRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.AddEmployeeProfileRequestList', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.AddGuestUserRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.AddGuestUserRequest.Project', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.AccountPlan', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.Address', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.AnydoneUser', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.BillingAccount', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ConsumerProfile', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ContactFilter', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ContactFilterQuery', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ContactTypeFilter', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ContactTypeFilter.ContactTypeEnum', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.Customer', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.CustomerAccountType', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.CustomerSession', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.DeleteWorkspaceRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.DeviceTypeFilter', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.EmployeeInboxGroup', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.EmployeeInvitation', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.EmployeePassword', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.EmployeeProfile', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.EmployeeService', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ImportUserRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ImportUserRequest.Field', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ImportUserResponse', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.InboxGroup', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.JoinedDateFilter', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.JoinedDateFilter.AbsoluteJoinedDateEnum', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.JoinedDateFilter.RelativeJoinedDaysEnum', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.Location', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.LocationType', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.LoginUser', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.MessageActorAnalytics', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.PasswordChangeRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.PasswordReset', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.Permission', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.PermissionAssign', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.PermissionAssignReq', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ServiceEmployee', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ServiceEmployee.EmployeeStatus', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ServiceProviderProfile', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.Skill', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ThirdPartySource', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.UpdateAccount', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.UsageReport', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.User', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.UserFilter', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.UserStatus', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.UserStatus.TimeSlot', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.UserVerification', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.WorkspaceCategory', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.WorkspaceMembers', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics', null, global);
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
proto.treeleaf.anydone.entities.Account = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.Account.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.Account, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.Account.displayName = 'proto.treeleaf.anydone.entities.Account';
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
proto.treeleaf.anydone.entities.ConsumerProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.ConsumerProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.ConsumerProfile.displayName = 'proto.treeleaf.anydone.entities.ConsumerProfile';
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
proto.treeleaf.anydone.entities.WorkspaceCategory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.WorkspaceCategory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.WorkspaceCategory.displayName = 'proto.treeleaf.anydone.entities.WorkspaceCategory';
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
proto.treeleaf.anydone.entities.BillingAccount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.BillingAccount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.BillingAccount.displayName = 'proto.treeleaf.anydone.entities.BillingAccount';
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
proto.treeleaf.anydone.entities.ServiceProviderProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.ServiceProviderProfile.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.ServiceProviderProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.ServiceProviderProfile.displayName = 'proto.treeleaf.anydone.entities.ServiceProviderProfile';
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
proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize.displayName = 'proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize';
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
proto.treeleaf.anydone.entities.EmployeeProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.EmployeeProfile.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.EmployeeProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.EmployeeProfile.displayName = 'proto.treeleaf.anydone.entities.EmployeeProfile';
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
proto.treeleaf.anydone.entities.EmployeeService = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.EmployeeService.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.EmployeeService, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.EmployeeService.displayName = 'proto.treeleaf.anydone.entities.EmployeeService';
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
proto.treeleaf.anydone.entities.EmployeeInboxGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.EmployeeInboxGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.EmployeeInboxGroup.displayName = 'proto.treeleaf.anydone.entities.EmployeeInboxGroup';
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
proto.treeleaf.anydone.entities.AddConsumerProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.AddConsumerProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.AddConsumerProfileRequest.displayName = 'proto.treeleaf.anydone.entities.AddConsumerProfileRequest';
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
proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.displayName = 'proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest';
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
proto.treeleaf.anydone.entities.AddEmployeeProfileRequestList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.AddEmployeeProfileRequestList.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.AddEmployeeProfileRequestList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.AddEmployeeProfileRequestList.displayName = 'proto.treeleaf.anydone.entities.AddEmployeeProfileRequestList';
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
proto.treeleaf.anydone.entities.AddEmployeeProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.AddEmployeeProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.AddEmployeeProfileRequest.displayName = 'proto.treeleaf.anydone.entities.AddEmployeeProfileRequest';
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
proto.treeleaf.anydone.entities.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.User.displayName = 'proto.treeleaf.anydone.entities.User';
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
proto.treeleaf.anydone.entities.LoginUser = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.LoginUser, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.LoginUser.displayName = 'proto.treeleaf.anydone.entities.LoginUser';
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
proto.treeleaf.anydone.entities.UpdateAccount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.UpdateAccount.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.UpdateAccount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.UpdateAccount.displayName = 'proto.treeleaf.anydone.entities.UpdateAccount';
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
proto.treeleaf.anydone.entities.PasswordChangeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.PasswordChangeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.PasswordChangeRequest.displayName = 'proto.treeleaf.anydone.entities.PasswordChangeRequest';
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
proto.treeleaf.anydone.entities.PasswordReset = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.PasswordReset, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.PasswordReset.displayName = 'proto.treeleaf.anydone.entities.PasswordReset';
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
proto.treeleaf.anydone.entities.ServiceEmployee = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.ServiceEmployee, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.ServiceEmployee.displayName = 'proto.treeleaf.anydone.entities.ServiceEmployee';
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
proto.treeleaf.anydone.entities.Skill = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.Skill, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.Skill.displayName = 'proto.treeleaf.anydone.entities.Skill';
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
proto.treeleaf.anydone.entities.Address = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.Address, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.Address.displayName = 'proto.treeleaf.anydone.entities.Address';
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
proto.treeleaf.anydone.entities.UserVerification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.UserVerification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.UserVerification.displayName = 'proto.treeleaf.anydone.entities.UserVerification';
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
proto.treeleaf.anydone.entities.EmployeePassword = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.EmployeePassword, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.EmployeePassword.displayName = 'proto.treeleaf.anydone.entities.EmployeePassword';
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
proto.treeleaf.anydone.entities.PermissionAssignReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.PermissionAssignReq.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.PermissionAssignReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.PermissionAssignReq.displayName = 'proto.treeleaf.anydone.entities.PermissionAssignReq';
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
proto.treeleaf.anydone.entities.Permission = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.Permission, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.Permission.displayName = 'proto.treeleaf.anydone.entities.Permission';
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
proto.treeleaf.anydone.entities.PermissionAssign = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.PermissionAssign, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.PermissionAssign.displayName = 'proto.treeleaf.anydone.entities.PermissionAssign';
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
proto.treeleaf.anydone.entities.Location = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.Location, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.Location.displayName = 'proto.treeleaf.anydone.entities.Location';
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
proto.treeleaf.anydone.entities.Customer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.Customer.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.Customer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.Customer.displayName = 'proto.treeleaf.anydone.entities.Customer';
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
proto.treeleaf.anydone.entities.CustomerSession = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.CustomerSession, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.CustomerSession.displayName = 'proto.treeleaf.anydone.entities.CustomerSession';
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
proto.treeleaf.anydone.entities.AnydoneUser = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.AnydoneUser, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.AnydoneUser.displayName = 'proto.treeleaf.anydone.entities.AnydoneUser';
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
proto.treeleaf.anydone.entities.UserFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.UserFilter.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.UserFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.UserFilter.displayName = 'proto.treeleaf.anydone.entities.UserFilter';
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
proto.treeleaf.anydone.entities.ContactFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.ContactFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.ContactFilter.displayName = 'proto.treeleaf.anydone.entities.ContactFilter';
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
proto.treeleaf.anydone.entities.ContactFilterQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.ContactFilterQuery.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.ContactFilterQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.ContactFilterQuery.displayName = 'proto.treeleaf.anydone.entities.ContactFilterQuery';
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
proto.treeleaf.anydone.entities.JoinedDateFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.JoinedDateFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.JoinedDateFilter.displayName = 'proto.treeleaf.anydone.entities.JoinedDateFilter';
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
proto.treeleaf.anydone.entities.ContactTypeFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.ContactTypeFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.ContactTypeFilter.displayName = 'proto.treeleaf.anydone.entities.ContactTypeFilter';
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
proto.treeleaf.anydone.entities.ImportUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.ImportUserRequest.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.ImportUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.ImportUserRequest.displayName = 'proto.treeleaf.anydone.entities.ImportUserRequest';
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
proto.treeleaf.anydone.entities.ImportUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.ImportUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.ImportUserResponse.displayName = 'proto.treeleaf.anydone.entities.ImportUserResponse';
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
proto.treeleaf.anydone.entities.UserStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.UserStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.UserStatus.displayName = 'proto.treeleaf.anydone.entities.UserStatus';
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
proto.treeleaf.anydone.entities.EmployeeInvitation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.EmployeeInvitation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.EmployeeInvitation.displayName = 'proto.treeleaf.anydone.entities.EmployeeInvitation';
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
proto.treeleaf.anydone.entities.AddGuestUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.AddGuestUserRequest.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.AddGuestUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.AddGuestUserRequest.displayName = 'proto.treeleaf.anydone.entities.AddGuestUserRequest';
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
proto.treeleaf.anydone.entities.AddGuestUserRequest.Project = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.AddGuestUserRequest.Project.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.AddGuestUserRequest.Project, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.AddGuestUserRequest.Project.displayName = 'proto.treeleaf.anydone.entities.AddGuestUserRequest.Project';
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
proto.treeleaf.anydone.entities.DeleteWorkspaceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.DeleteWorkspaceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.displayName = 'proto.treeleaf.anydone.entities.DeleteWorkspaceRequest';
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
proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms.displayName = 'proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms';
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
proto.treeleaf.anydone.entities.InboxGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.InboxGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.InboxGroup.displayName = 'proto.treeleaf.anydone.entities.InboxGroup';
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
proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.displayName = 'proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics';
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
proto.treeleaf.anydone.entities.WorkspaceMembers = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.WorkspaceMembers, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.WorkspaceMembers.displayName = 'proto.treeleaf.anydone.entities.WorkspaceMembers';
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
proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics.displayName = 'proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics';
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
proto.treeleaf.anydone.entities.MessageActorAnalytics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.MessageActorAnalytics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.MessageActorAnalytics.displayName = 'proto.treeleaf.anydone.entities.MessageActorAnalytics';
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
proto.treeleaf.anydone.entities.UsageReport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.UsageReport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.UsageReport.displayName = 'proto.treeleaf.anydone.entities.UsageReport';
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
proto.treeleaf.anydone.entities.ActiveMembersAnalytics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.ActiveMembersAnalytics.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.ActiveMembersAnalytics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.ActiveMembersAnalytics.displayName = 'proto.treeleaf.anydone.entities.ActiveMembersAnalytics';
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
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.displayName = 'proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.Account.repeatedFields_ = [15,22,28];



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
proto.treeleaf.anydone.entities.Account.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.Account.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.Account} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Account.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 3, ""),
    accounttype: jspb.Message.getFieldWithDefault(msg, 4, 0),
    countrycode: jspb.Message.getFieldWithDefault(msg, 5, ""),
    profilepic: jspb.Message.getFieldWithDefault(msg, 6, ""),
    status: jspb.Message.getFieldWithDefault(msg, 7, 0),
    isemailverified: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    isphoneverified: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    iskycverified: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    fullname: jspb.Message.getFieldWithDefault(msg, 11, ""),
    address: jspb.Message.getFieldWithDefault(msg, 12, ""),
    timezone: jspb.Message.getFieldWithDefault(msg, 13, ""),
    currencycode: jspb.Message.getFieldWithDefault(msg, 14, ""),
    locationsList: jspb.Message.toObjectList(msg.getLocationsList(),
    proto.treeleaf.anydone.entities.Location.toObject, includeInstance),
    language: jspb.Message.getFieldWithDefault(msg, 16, ""),
    termsandconditionsversion: jspb.Message.getFieldWithDefault(msg, 17, ""),
    acceptcalls: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
    refid: jspb.Message.getFieldWithDefault(msg, 20, ""),
    passwordchanged: jspb.Message.getBooleanFieldWithDefault(msg, 21, false),
    addressesList: jspb.Message.toObjectList(msg.getAddressesList(),
    proto.treeleaf.anydone.entities.Address.toObject, includeInstance),
    onlinestatus: jspb.Message.getFieldWithDefault(msg, 23, 0),
    lastactivetimestamp: jspb.Message.getFieldWithDefault(msg, 24, 0),
    inboxid: jspb.Message.getFieldWithDefault(msg, 25, ""),
    sectionid: jspb.Message.getFieldWithDefault(msg, 26, ""),
    title: jspb.Message.getFieldWithDefault(msg, 27, ""),
    workinghoursList: jspb.Message.toObjectList(msg.getWorkinghoursList(),
    calendar_pb.Workdays.toObject, includeInstance),
    description: jspb.Message.getFieldWithDefault(msg, 29, ""),
    code: jspb.Message.getFieldWithDefault(msg, 30, ""),
    category: (f = msg.getCategory()) && proto.treeleaf.anydone.entities.WorkspaceCategory.toObject(includeInstance, f),
    baid: jspb.Message.getFieldWithDefault(msg, 32, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 33, 0),
    createdby: (f = msg.getCreatedby()) && proto.treeleaf.anydone.entities.Account.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.Account.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.Account;
  return proto.treeleaf.anydone.entities.Account.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.Account} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.Account.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 4:
      var value = /** @type {!proto.treeleaf.anydone.entities.AccountType} */ (reader.readEnum());
      msg.setAccounttype(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountrycode(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfilepic(value);
      break;
    case 7:
      var value = /** @type {!proto.treeleaf.anydone.entities.AccountStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsemailverified(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsphoneverified(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIskycverified(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setFullname(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimezone(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencycode(value);
      break;
    case 15:
      var value = new proto.treeleaf.anydone.entities.Location;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Location.deserializeBinaryFromReader);
      msg.addLocations(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setTermsandconditionsversion(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAcceptcalls(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPasswordchanged(value);
      break;
    case 22:
      var value = new proto.treeleaf.anydone.entities.Address;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Address.deserializeBinaryFromReader);
      msg.addAddresses(value);
      break;
    case 23:
      var value = /** @type {!proto.treeleaf.anydone.entities.OnlineStatus} */ (reader.readEnum());
      msg.setOnlinestatus(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastactivetimestamp(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setInboxid(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setSectionid(value);
      break;
    case 27:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 28:
      var value = new calendar_pb.Workdays;
      reader.readMessage(value,calendar_pb.Workdays.deserializeBinaryFromReader);
      msg.addWorkinghours(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 31:
      var value = new proto.treeleaf.anydone.entities.WorkspaceCategory;
      reader.readMessage(value,proto.treeleaf.anydone.entities.WorkspaceCategory.deserializeBinaryFromReader);
      msg.setCategory(value);
      break;
    case 32:
      var value = /** @type {string} */ (reader.readString());
      msg.setBaid(value);
      break;
    case 33:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 34:
      var value = new proto.treeleaf.anydone.entities.Account;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Account.deserializeBinaryFromReader);
      msg.setCreatedby(value);
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
proto.treeleaf.anydone.entities.Account.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.Account.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.Account} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Account.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAccounttype();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getCountrycode();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getProfilepic();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getIsemailverified();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getIsphoneverified();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getIskycverified();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getFullname();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getTimezone();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getCurrencycode();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getLocationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto.treeleaf.anydone.entities.Location.serializeBinaryToWriter
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getTermsandconditionsversion();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getAcceptcalls();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getPasswordchanged();
  if (f) {
    writer.writeBool(
      21,
      f
    );
  }
  f = message.getAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      22,
      f,
      proto.treeleaf.anydone.entities.Address.serializeBinaryToWriter
    );
  }
  f = message.getOnlinestatus();
  if (f !== 0.0) {
    writer.writeEnum(
      23,
      f
    );
  }
  f = message.getLastactivetimestamp();
  if (f !== 0) {
    writer.writeInt64(
      24,
      f
    );
  }
  f = message.getInboxid();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getSectionid();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      27,
      f
    );
  }
  f = message.getWorkinghoursList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      28,
      f,
      calendar_pb.Workdays.serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      29,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      30,
      f
    );
  }
  f = message.getCategory();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto.treeleaf.anydone.entities.WorkspaceCategory.serializeBinaryToWriter
    );
  }
  f = message.getBaid();
  if (f.length > 0) {
    writer.writeString(
      32,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      33,
      f
    );
  }
  f = message.getCreatedby();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      proto.treeleaf.anydone.entities.Account.serializeBinaryToWriter
    );
  }
};


/**
 * optional string accountId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Account.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Account.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string phone = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Account.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional AccountType accountType = 4;
 * @return {!proto.treeleaf.anydone.entities.AccountType}
 */
proto.treeleaf.anydone.entities.Account.prototype.getAccounttype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.AccountType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.AccountType} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.setAccounttype = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string countryCode = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Account.prototype.getCountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.setCountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string profilePic = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Account.prototype.getProfilepic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.setProfilepic = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional AccountStatus status = 7;
 * @return {!proto.treeleaf.anydone.entities.AccountStatus}
 */
proto.treeleaf.anydone.entities.Account.prototype.getStatus = function() {
  return /** @type {!proto.treeleaf.anydone.entities.AccountStatus} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.AccountStatus} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional bool isEmailVerified = 8;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Account.prototype.getIsemailverified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.setIsemailverified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool isPhoneVerified = 9;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Account.prototype.getIsphoneverified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.setIsphoneverified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool isKycVerified = 10;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Account.prototype.getIskycverified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.setIskycverified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional string fullName = 11;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Account.prototype.getFullname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.setFullname = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string address = 12;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Account.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string timezone = 13;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Account.prototype.getTimezone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.setTimezone = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string currencyCode = 14;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Account.prototype.getCurrencycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.setCurrencycode = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * repeated Location locations = 15;
 * @return {!Array<!proto.treeleaf.anydone.entities.Location>}
 */
proto.treeleaf.anydone.entities.Account.prototype.getLocationsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.Location>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.Location, 15));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.Location>} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
*/
proto.treeleaf.anydone.entities.Account.prototype.setLocationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.Location=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.Location}
 */
proto.treeleaf.anydone.entities.Account.prototype.addLocations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.treeleaf.anydone.entities.Location, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.clearLocationsList = function() {
  return this.setLocationsList([]);
};


/**
 * optional string language = 16;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Account.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string termsAndConditionsVersion = 17;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Account.prototype.getTermsandconditionsversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.setTermsandconditionsversion = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional bool acceptCalls = 18;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Account.prototype.getAcceptcalls = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.setAcceptcalls = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
};


/**
 * optional string refId = 20;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Account.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional bool passwordChanged = 21;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Account.prototype.getPasswordchanged = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.setPasswordchanged = function(value) {
  return jspb.Message.setProto3BooleanField(this, 21, value);
};


/**
 * repeated Address addresses = 22;
 * @return {!Array<!proto.treeleaf.anydone.entities.Address>}
 */
proto.treeleaf.anydone.entities.Account.prototype.getAddressesList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.Address>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.Address, 22));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.Address>} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
*/
proto.treeleaf.anydone.entities.Account.prototype.setAddressesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 22, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.Address=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.Address}
 */
proto.treeleaf.anydone.entities.Account.prototype.addAddresses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 22, opt_value, proto.treeleaf.anydone.entities.Address, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.clearAddressesList = function() {
  return this.setAddressesList([]);
};


/**
 * optional OnlineStatus onlineStatus = 23;
 * @return {!proto.treeleaf.anydone.entities.OnlineStatus}
 */
proto.treeleaf.anydone.entities.Account.prototype.getOnlinestatus = function() {
  return /** @type {!proto.treeleaf.anydone.entities.OnlineStatus} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.OnlineStatus} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.setOnlinestatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 23, value);
};


/**
 * optional int64 lastActiveTimestamp = 24;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Account.prototype.getLastactivetimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.setLastactivetimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 24, value);
};


/**
 * optional string inboxId = 25;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Account.prototype.getInboxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.setInboxid = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * optional string sectionId = 26;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Account.prototype.getSectionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.setSectionid = function(value) {
  return jspb.Message.setProto3StringField(this, 26, value);
};


/**
 * optional string title = 27;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Account.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 27, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 27, value);
};


/**
 * repeated Workdays workingHours = 28;
 * @return {!Array<!proto.treeleaf.anydone.entities.Workdays>}
 */
proto.treeleaf.anydone.entities.Account.prototype.getWorkinghoursList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.Workdays>} */ (
    jspb.Message.getRepeatedWrapperField(this, calendar_pb.Workdays, 28));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.Workdays>} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
*/
proto.treeleaf.anydone.entities.Account.prototype.setWorkinghoursList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 28, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.Workdays=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.Workdays}
 */
proto.treeleaf.anydone.entities.Account.prototype.addWorkinghours = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 28, opt_value, proto.treeleaf.anydone.entities.Workdays, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.clearWorkinghoursList = function() {
  return this.setWorkinghoursList([]);
};


/**
 * optional string description = 29;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Account.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 29, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 29, value);
};


/**
 * optional string code = 30;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Account.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 30, value);
};


/**
 * optional WorkspaceCategory category = 31;
 * @return {?proto.treeleaf.anydone.entities.WorkspaceCategory}
 */
proto.treeleaf.anydone.entities.Account.prototype.getCategory = function() {
  return /** @type{?proto.treeleaf.anydone.entities.WorkspaceCategory} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.WorkspaceCategory, 31));
};


/**
 * @param {?proto.treeleaf.anydone.entities.WorkspaceCategory|undefined} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
*/
proto.treeleaf.anydone.entities.Account.prototype.setCategory = function(value) {
  return jspb.Message.setWrapperField(this, 31, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.clearCategory = function() {
  return this.setCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Account.prototype.hasCategory = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional string baId = 32;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Account.prototype.getBaid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 32, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.setBaid = function(value) {
  return jspb.Message.setProto3StringField(this, 32, value);
};


/**
 * optional int64 createdAt = 33;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Account.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 33, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 33, value);
};


/**
 * optional Account createdBy = 34;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.Account.prototype.getCreatedby = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.Account, 34));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
*/
proto.treeleaf.anydone.entities.Account.prototype.setCreatedby = function(value) {
  return jspb.Message.setWrapperField(this, 34, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.Account} returns this
 */
proto.treeleaf.anydone.entities.Account.prototype.clearCreatedby = function() {
  return this.setCreatedby(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Account.prototype.hasCreatedby = function() {
  return jspb.Message.getField(this, 34) != null;
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
proto.treeleaf.anydone.entities.ConsumerProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.ConsumerProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.ConsumerProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ConsumerProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: (f = msg.getAccount()) && proto.treeleaf.anydone.entities.Account.toObject(includeInstance, f),
    consumerprofileid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    gender: jspb.Message.getFieldWithDefault(msg, 3, 0),
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
 * @return {!proto.treeleaf.anydone.entities.ConsumerProfile}
 */
proto.treeleaf.anydone.entities.ConsumerProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.ConsumerProfile;
  return proto.treeleaf.anydone.entities.ConsumerProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.ConsumerProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.ConsumerProfile}
 */
proto.treeleaf.anydone.entities.ConsumerProfile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.Account;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Account.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConsumerprofileid(value);
      break;
    case 3:
      var value = /** @type {!proto.treeleaf.anydone.entities.Gender} */ (reader.readEnum());
      msg.setGender(value);
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
proto.treeleaf.anydone.entities.ConsumerProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.ConsumerProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.ConsumerProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ConsumerProfile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.Account.serializeBinaryToWriter
    );
  }
  f = message.getConsumerprofileid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGender();
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
 * optional Account account = 1;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.ConsumerProfile.prototype.getAccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.Account, 1));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.ConsumerProfile} returns this
*/
proto.treeleaf.anydone.entities.ConsumerProfile.prototype.setAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.ConsumerProfile} returns this
 */
proto.treeleaf.anydone.entities.ConsumerProfile.prototype.clearAccount = function() {
  return this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.ConsumerProfile.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string consumerProfileId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ConsumerProfile.prototype.getConsumerprofileid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ConsumerProfile} returns this
 */
proto.treeleaf.anydone.entities.ConsumerProfile.prototype.setConsumerprofileid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Gender gender = 3;
 * @return {!proto.treeleaf.anydone.entities.Gender}
 */
proto.treeleaf.anydone.entities.ConsumerProfile.prototype.getGender = function() {
  return /** @type {!proto.treeleaf.anydone.entities.Gender} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.Gender} value
 * @return {!proto.treeleaf.anydone.entities.ConsumerProfile} returns this
 */
proto.treeleaf.anydone.entities.ConsumerProfile.prototype.setGender = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int64 createdAt = 4;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ConsumerProfile.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ConsumerProfile} returns this
 */
proto.treeleaf.anydone.entities.ConsumerProfile.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 updatedAt = 5;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ConsumerProfile.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ConsumerProfile} returns this
 */
proto.treeleaf.anydone.entities.ConsumerProfile.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
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
proto.treeleaf.anydone.entities.WorkspaceCategory.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.WorkspaceCategory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.WorkspaceCategory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.WorkspaceCategory.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.treeleaf.anydone.entities.WorkspaceCategory}
 */
proto.treeleaf.anydone.entities.WorkspaceCategory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.WorkspaceCategory;
  return proto.treeleaf.anydone.entities.WorkspaceCategory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.WorkspaceCategory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.WorkspaceCategory}
 */
proto.treeleaf.anydone.entities.WorkspaceCategory.deserializeBinaryFromReader = function(msg, reader) {
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
proto.treeleaf.anydone.entities.WorkspaceCategory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.WorkspaceCategory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.WorkspaceCategory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.WorkspaceCategory.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.WorkspaceCategory.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.WorkspaceCategory} returns this
 */
proto.treeleaf.anydone.entities.WorkspaceCategory.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.WorkspaceCategory.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.WorkspaceCategory} returns this
 */
proto.treeleaf.anydone.entities.WorkspaceCategory.prototype.setName = function(value) {
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
proto.treeleaf.anydone.entities.BillingAccount.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.BillingAccount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.BillingAccount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.BillingAccount.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: (f = msg.getAccount()) && proto.treeleaf.anydone.entities.Account.toObject(includeInstance, f),
    billingaccountid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    billingaccounttype: jspb.Message.getFieldWithDefault(msg, 3, 0),
    createdat: jspb.Message.getFieldWithDefault(msg, 4, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 5, 0),
    averagerating: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    numberofrating: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.treeleaf.anydone.entities.BillingAccount}
 */
proto.treeleaf.anydone.entities.BillingAccount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.BillingAccount;
  return proto.treeleaf.anydone.entities.BillingAccount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.BillingAccount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.BillingAccount}
 */
proto.treeleaf.anydone.entities.BillingAccount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.Account;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Account.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBillingaccountid(value);
      break;
    case 3:
      var value = /** @type {!proto.treeleaf.anydone.entities.ServiceProviderType} */ (reader.readEnum());
      msg.setBillingaccounttype(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedat(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAveragerating(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberofrating(value);
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
proto.treeleaf.anydone.entities.BillingAccount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.BillingAccount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.BillingAccount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.BillingAccount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.Account.serializeBinaryToWriter
    );
  }
  f = message.getBillingaccountid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBillingaccounttype();
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
  f = message.getAveragerating();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getNumberofrating();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * optional Account account = 1;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.BillingAccount.prototype.getAccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.Account, 1));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.BillingAccount} returns this
*/
proto.treeleaf.anydone.entities.BillingAccount.prototype.setAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.BillingAccount} returns this
 */
proto.treeleaf.anydone.entities.BillingAccount.prototype.clearAccount = function() {
  return this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.BillingAccount.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string billingAccountId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.BillingAccount.prototype.getBillingaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.BillingAccount} returns this
 */
proto.treeleaf.anydone.entities.BillingAccount.prototype.setBillingaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ServiceProviderType billingAccountType = 3;
 * @return {!proto.treeleaf.anydone.entities.ServiceProviderType}
 */
proto.treeleaf.anydone.entities.BillingAccount.prototype.getBillingaccounttype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.ServiceProviderType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.ServiceProviderType} value
 * @return {!proto.treeleaf.anydone.entities.BillingAccount} returns this
 */
proto.treeleaf.anydone.entities.BillingAccount.prototype.setBillingaccounttype = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int64 createdAt = 4;
 * @return {number}
 */
proto.treeleaf.anydone.entities.BillingAccount.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.BillingAccount} returns this
 */
proto.treeleaf.anydone.entities.BillingAccount.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 updatedAt = 5;
 * @return {number}
 */
proto.treeleaf.anydone.entities.BillingAccount.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.BillingAccount} returns this
 */
proto.treeleaf.anydone.entities.BillingAccount.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional float averageRating = 6;
 * @return {number}
 */
proto.treeleaf.anydone.entities.BillingAccount.prototype.getAveragerating = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.BillingAccount} returns this
 */
proto.treeleaf.anydone.entities.BillingAccount.prototype.setAveragerating = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional int32 numberOfRating = 7;
 * @return {number}
 */
proto.treeleaf.anydone.entities.BillingAccount.prototype.getNumberofrating = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.BillingAccount} returns this
 */
proto.treeleaf.anydone.entities.BillingAccount.prototype.setNumberofrating = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.repeatedFields_ = [10];



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
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.ServiceProviderProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.ServiceProviderProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: (f = msg.getAccount()) && proto.treeleaf.anydone.entities.Account.toObject(includeInstance, f),
    serviceproviderprofileid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    serviceprovidertype: jspb.Message.getFieldWithDefault(msg, 3, 0),
    createdat: jspb.Message.getFieldWithDefault(msg, 4, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 5, 0),
    averagerating: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    numberofrating: jspb.Message.getFieldWithDefault(msg, 7, 0),
    code: jspb.Message.getFieldWithDefault(msg, 8, ""),
    category: (f = msg.getCategory()) && proto.treeleaf.anydone.entities.WorkspaceCategory.toObject(includeInstance, f),
    sourcesList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f,
    teamsize: (f = msg.getTeamsize()) && proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize.toObject(includeInstance, f),
    archived: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    createdby: (f = msg.getCreatedby()) && proto.treeleaf.anydone.entities.Account.toObject(includeInstance, f),
    deleted: jspb.Message.getBooleanFieldWithDefault(msg, 14, false)
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
 * @return {!proto.treeleaf.anydone.entities.ServiceProviderProfile}
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.ServiceProviderProfile;
  return proto.treeleaf.anydone.entities.ServiceProviderProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.ServiceProviderProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.ServiceProviderProfile}
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.Account;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Account.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceproviderprofileid(value);
      break;
    case 3:
      var value = /** @type {!proto.treeleaf.anydone.entities.ServiceProviderType} */ (reader.readEnum());
      msg.setServiceprovidertype(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedat(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAveragerating(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberofrating(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 9:
      var value = new proto.treeleaf.anydone.entities.WorkspaceCategory;
      reader.readMessage(value,proto.treeleaf.anydone.entities.WorkspaceCategory.deserializeBinaryFromReader);
      msg.setCategory(value);
      break;
    case 10:
      var values = /** @type {!Array<!proto.treeleaf.anydone.entities.IntegrationSource>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSources(values[i]);
      }
      break;
    case 11:
      var value = new proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize;
      reader.readMessage(value,proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize.deserializeBinaryFromReader);
      msg.setTeamsize(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setArchived(value);
      break;
    case 13:
      var value = new proto.treeleaf.anydone.entities.Account;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Account.deserializeBinaryFromReader);
      msg.setCreatedby(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleted(value);
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
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.ServiceProviderProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.ServiceProviderProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.Account.serializeBinaryToWriter
    );
  }
  f = message.getServiceproviderprofileid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getServiceprovidertype();
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
  f = message.getAveragerating();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getNumberofrating();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getCategory();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.treeleaf.anydone.entities.WorkspaceCategory.serializeBinaryToWriter
    );
  }
  f = message.getSourcesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      10,
      f
    );
  }
  f = message.getTeamsize();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize.serializeBinaryToWriter
    );
  }
  f = message.getArchived();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getCreatedby();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.treeleaf.anydone.entities.Account.serializeBinaryToWriter
    );
  }
  f = message.getDeleted();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
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
proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize.toObject = function(includeInstance, msg) {
  var f, obj = {
    lowerlimit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    upperlimit: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize}
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize;
  return proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize}
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLowerlimit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUpperlimit(value);
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
proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLowerlimit();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUpperlimit();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 lowerLimit = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize.prototype.getLowerlimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize} returns this
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize.prototype.setLowerlimit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 upperLimit = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize.prototype.getUpperlimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize} returns this
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize.prototype.setUpperlimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Account account = 1;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.getAccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.Account, 1));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.ServiceProviderProfile} returns this
*/
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.setAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.ServiceProviderProfile} returns this
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.clearAccount = function() {
  return this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string serviceProviderProfileId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.getServiceproviderprofileid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ServiceProviderProfile} returns this
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.setServiceproviderprofileid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ServiceProviderType serviceProviderType = 3;
 * @return {!proto.treeleaf.anydone.entities.ServiceProviderType}
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.getServiceprovidertype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.ServiceProviderType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.ServiceProviderType} value
 * @return {!proto.treeleaf.anydone.entities.ServiceProviderProfile} returns this
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.setServiceprovidertype = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int64 createdAt = 4;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ServiceProviderProfile} returns this
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 updatedAt = 5;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ServiceProviderProfile} returns this
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional float averageRating = 6;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.getAveragerating = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ServiceProviderProfile} returns this
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.setAveragerating = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional int32 numberOfRating = 7;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.getNumberofrating = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ServiceProviderProfile} returns this
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.setNumberofrating = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string code = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ServiceProviderProfile} returns this
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional WorkspaceCategory category = 9;
 * @return {?proto.treeleaf.anydone.entities.WorkspaceCategory}
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.getCategory = function() {
  return /** @type{?proto.treeleaf.anydone.entities.WorkspaceCategory} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.WorkspaceCategory, 9));
};


/**
 * @param {?proto.treeleaf.anydone.entities.WorkspaceCategory|undefined} value
 * @return {!proto.treeleaf.anydone.entities.ServiceProviderProfile} returns this
*/
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.setCategory = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.ServiceProviderProfile} returns this
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.clearCategory = function() {
  return this.setCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.hasCategory = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated IntegrationSource sources = 10;
 * @return {!Array<!proto.treeleaf.anydone.entities.IntegrationSource>}
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.getSourcesList = function() {
  return /** @type {!Array<!proto.treeleaf.anydone.entities.IntegrationSource>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.IntegrationSource>} value
 * @return {!proto.treeleaf.anydone.entities.ServiceProviderProfile} returns this
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.setSourcesList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {!proto.treeleaf.anydone.entities.IntegrationSource} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.ServiceProviderProfile} returns this
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.addSources = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.ServiceProviderProfile} returns this
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.clearSourcesList = function() {
  return this.setSourcesList([]);
};


/**
 * optional TeamSize teamSize = 11;
 * @return {?proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize}
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.getTeamsize = function() {
  return /** @type{?proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize, 11));
};


/**
 * @param {?proto.treeleaf.anydone.entities.ServiceProviderProfile.TeamSize|undefined} value
 * @return {!proto.treeleaf.anydone.entities.ServiceProviderProfile} returns this
*/
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.setTeamsize = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.ServiceProviderProfile} returns this
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.clearTeamsize = function() {
  return this.setTeamsize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.hasTeamsize = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool archived = 12;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.getArchived = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.ServiceProviderProfile} returns this
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.setArchived = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional Account createdBy = 13;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.getCreatedby = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.Account, 13));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.ServiceProviderProfile} returns this
*/
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.setCreatedby = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.ServiceProviderProfile} returns this
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.clearCreatedby = function() {
  return this.setCreatedby(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.hasCreatedby = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional bool deleted = 14;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.getDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.ServiceProviderProfile} returns this
 */
proto.treeleaf.anydone.entities.ServiceProviderProfile.prototype.setDeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.EmployeeProfile.repeatedFields_ = [5,9,13,15,16,19,20,21];



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
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.EmployeeProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.EmployeeProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.EmployeeProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: (f = msg.getAccount()) && proto.treeleaf.anydone.entities.Account.toObject(includeInstance, f),
    employeeprofileid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    gender: jspb.Message.getFieldWithDefault(msg, 3, 0),
    serviceproviderid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    skillsList: jspb.Message.toObjectList(msg.getSkillsList(),
    proto.treeleaf.anydone.entities.Skill.toObject, includeInstance),
    createdat: jspb.Message.getFieldWithDefault(msg, 6, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 7, 0),
    addedbyaccountid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    permissionsList: jspb.Message.toObjectList(msg.getPermissionsList(),
    proto.treeleaf.anydone.entities.Permission.toObject, includeInstance),
    averagerating: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    numberofrating: jspb.Message.getFieldWithDefault(msg, 11, 0),
    passwordchanged: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    serviceList: jspb.Message.toObjectList(msg.getServiceList(),
    proto.treeleaf.anydone.entities.EmployeeService.toObject, includeInstance),
    acceptcalls: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    teamidsList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f,
    spaccountidList: (f = jspb.Message.getRepeatedField(msg, 16)) == null ? undefined : f,
    until: jspb.Message.getFieldWithDefault(msg, 17, 0),
    status: (f = msg.getStatus()) && proto.treeleaf.anydone.entities.UserStatus.toObject(includeInstance, f),
    inboxgroupList: jspb.Message.toObjectList(msg.getInboxgroupList(),
    proto.treeleaf.anydone.entities.EmployeeInboxGroup.toObject, includeInstance),
    projectsList: jspb.Message.toObjectList(msg.getProjectsList(),
    proto.treeleaf.anydone.entities.EmployeeService.toObject, includeInstance),
    settingsList: jspb.Message.toObjectList(msg.getSettingsList(),
    settings_pb.Settings.toObject, includeInstance),
    deactivatedat: jspb.Message.getFieldWithDefault(msg, 22, 0)
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
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.EmployeeProfile;
  return proto.treeleaf.anydone.entities.EmployeeProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.EmployeeProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.Account;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Account.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmployeeprofileid(value);
      break;
    case 3:
      var value = /** @type {!proto.treeleaf.anydone.entities.Gender} */ (reader.readEnum());
      msg.setGender(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceproviderid(value);
      break;
    case 5:
      var value = new proto.treeleaf.anydone.entities.Skill;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Skill.deserializeBinaryFromReader);
      msg.addSkills(value);
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
      var value = /** @type {string} */ (reader.readString());
      msg.setAddedbyaccountid(value);
      break;
    case 9:
      var value = new proto.treeleaf.anydone.entities.Permission;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Permission.deserializeBinaryFromReader);
      msg.addPermissions(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAveragerating(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberofrating(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPasswordchanged(value);
      break;
    case 13:
      var value = new proto.treeleaf.anydone.entities.EmployeeService;
      reader.readMessage(value,proto.treeleaf.anydone.entities.EmployeeService.deserializeBinaryFromReader);
      msg.addService(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAcceptcalls(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.addTeamids(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.addSpaccountid(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUntil(value);
      break;
    case 18:
      var value = new proto.treeleaf.anydone.entities.UserStatus;
      reader.readMessage(value,proto.treeleaf.anydone.entities.UserStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 19:
      var value = new proto.treeleaf.anydone.entities.EmployeeInboxGroup;
      reader.readMessage(value,proto.treeleaf.anydone.entities.EmployeeInboxGroup.deserializeBinaryFromReader);
      msg.addInboxgroup(value);
      break;
    case 20:
      var value = new proto.treeleaf.anydone.entities.EmployeeService;
      reader.readMessage(value,proto.treeleaf.anydone.entities.EmployeeService.deserializeBinaryFromReader);
      msg.addProjects(value);
      break;
    case 21:
      var value = new settings_pb.Settings;
      reader.readMessage(value,settings_pb.Settings.deserializeBinaryFromReader);
      msg.addSettings(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDeactivatedat(value);
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
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.EmployeeProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.EmployeeProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.EmployeeProfile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.Account.serializeBinaryToWriter
    );
  }
  f = message.getEmployeeprofileid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGender();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getServiceproviderid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSkillsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.treeleaf.anydone.entities.Skill.serializeBinaryToWriter
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
  f = message.getAddedbyaccountid();
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
      proto.treeleaf.anydone.entities.Permission.serializeBinaryToWriter
    );
  }
  f = message.getAveragerating();
  if (f !== 0.0) {
    writer.writeFloat(
      10,
      f
    );
  }
  f = message.getNumberofrating();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getPasswordchanged();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getServiceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.treeleaf.anydone.entities.EmployeeService.serializeBinaryToWriter
    );
  }
  f = message.getAcceptcalls();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getTeamidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      15,
      f
    );
  }
  f = message.getSpaccountidList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      16,
      f
    );
  }
  f = message.getUntil();
  if (f !== 0) {
    writer.writeInt64(
      17,
      f
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.treeleaf.anydone.entities.UserStatus.serializeBinaryToWriter
    );
  }
  f = message.getInboxgroupList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      19,
      f,
      proto.treeleaf.anydone.entities.EmployeeInboxGroup.serializeBinaryToWriter
    );
  }
  f = message.getProjectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      20,
      f,
      proto.treeleaf.anydone.entities.EmployeeService.serializeBinaryToWriter
    );
  }
  f = message.getSettingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      21,
      f,
      settings_pb.Settings.serializeBinaryToWriter
    );
  }
  f = message.getDeactivatedat();
  if (f !== 0) {
    writer.writeInt64(
      22,
      f
    );
  }
};


/**
 * optional Account account = 1;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.getAccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.Account, 1));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
*/
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.setAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.clearAccount = function() {
  return this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string employeeProfileId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.getEmployeeprofileid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.setEmployeeprofileid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Gender gender = 3;
 * @return {!proto.treeleaf.anydone.entities.Gender}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.getGender = function() {
  return /** @type {!proto.treeleaf.anydone.entities.Gender} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.Gender} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.setGender = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string serviceProviderId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.getServiceproviderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.setServiceproviderid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated Skill skills = 5;
 * @return {!Array<!proto.treeleaf.anydone.entities.Skill>}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.getSkillsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.Skill>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.Skill, 5));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.Skill>} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
*/
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.setSkillsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.Skill=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.Skill}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.addSkills = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.treeleaf.anydone.entities.Skill, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.clearSkillsList = function() {
  return this.setSkillsList([]);
};


/**
 * optional int64 createdAt = 6;
 * @return {number}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 updatedAt = 7;
 * @return {number}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string addedByAccountId = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.getAddedbyaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.setAddedbyaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * repeated Permission permissions = 9;
 * @return {!Array<!proto.treeleaf.anydone.entities.Permission>}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.getPermissionsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.Permission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.Permission, 9));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.Permission>} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
*/
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.setPermissionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.Permission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.Permission}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.addPermissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.treeleaf.anydone.entities.Permission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
};


/**
 * optional float averageRating = 10;
 * @return {number}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.getAveragerating = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.setAveragerating = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional int32 numberOfRating = 11;
 * @return {number}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.getNumberofrating = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.setNumberofrating = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional bool passwordChanged = 12;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.getPasswordchanged = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.setPasswordchanged = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * repeated EmployeeService service = 13;
 * @return {!Array<!proto.treeleaf.anydone.entities.EmployeeService>}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.getServiceList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.EmployeeService>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.EmployeeService, 13));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.EmployeeService>} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
*/
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.setServiceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.EmployeeService=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.EmployeeService}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.addService = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.treeleaf.anydone.entities.EmployeeService, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.clearServiceList = function() {
  return this.setServiceList([]);
};


/**
 * optional bool acceptCalls = 14;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.getAcceptcalls = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.setAcceptcalls = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * repeated string teamIds = 15;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.getTeamidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.setTeamidsList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.addTeamids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.clearTeamidsList = function() {
  return this.setTeamidsList([]);
};


/**
 * repeated string spAccountId = 16;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.getSpaccountidList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 16));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.setSpaccountidList = function(value) {
  return jspb.Message.setField(this, 16, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.addSpaccountid = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 16, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.clearSpaccountidList = function() {
  return this.setSpaccountidList([]);
};


/**
 * optional int64 until = 17;
 * @return {number}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.getUntil = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.setUntil = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional UserStatus status = 18;
 * @return {?proto.treeleaf.anydone.entities.UserStatus}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.getStatus = function() {
  return /** @type{?proto.treeleaf.anydone.entities.UserStatus} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.UserStatus, 18));
};


/**
 * @param {?proto.treeleaf.anydone.entities.UserStatus|undefined} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
*/
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * repeated EmployeeInboxGroup inboxGroup = 19;
 * @return {!Array<!proto.treeleaf.anydone.entities.EmployeeInboxGroup>}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.getInboxgroupList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.EmployeeInboxGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.EmployeeInboxGroup, 19));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.EmployeeInboxGroup>} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
*/
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.setInboxgroupList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 19, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.EmployeeInboxGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.EmployeeInboxGroup}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.addInboxgroup = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 19, opt_value, proto.treeleaf.anydone.entities.EmployeeInboxGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.clearInboxgroupList = function() {
  return this.setInboxgroupList([]);
};


/**
 * repeated EmployeeService projects = 20;
 * @return {!Array<!proto.treeleaf.anydone.entities.EmployeeService>}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.getProjectsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.EmployeeService>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.EmployeeService, 20));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.EmployeeService>} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
*/
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.setProjectsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 20, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.EmployeeService=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.EmployeeService}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.addProjects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 20, opt_value, proto.treeleaf.anydone.entities.EmployeeService, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.clearProjectsList = function() {
  return this.setProjectsList([]);
};


/**
 * repeated Settings settings = 21;
 * @return {!Array<!proto.treeleaf.anydone.entities.Settings>}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.getSettingsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.Settings>} */ (
    jspb.Message.getRepeatedWrapperField(this, settings_pb.Settings, 21));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.Settings>} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
*/
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.setSettingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 21, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.Settings=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.Settings}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.addSettings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 21, opt_value, proto.treeleaf.anydone.entities.Settings, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.clearSettingsList = function() {
  return this.setSettingsList([]);
};


/**
 * optional int64 deactivatedAt = 22;
 * @return {number}
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.getDeactivatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeProfile} returns this
 */
proto.treeleaf.anydone.entities.EmployeeProfile.prototype.setDeactivatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 22, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.EmployeeService.repeatedFields_ = [3];



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
proto.treeleaf.anydone.entities.EmployeeService.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.EmployeeService.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.EmployeeService} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.EmployeeService.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    permissionsList: jspb.Message.toObjectList(msg.getPermissionsList(),
    proto.treeleaf.anydone.entities.Permission.toObject, includeInstance)
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
 * @return {!proto.treeleaf.anydone.entities.EmployeeService}
 */
proto.treeleaf.anydone.entities.EmployeeService.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.EmployeeService;
  return proto.treeleaf.anydone.entities.EmployeeService.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.EmployeeService} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.EmployeeService}
 */
proto.treeleaf.anydone.entities.EmployeeService.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.treeleaf.anydone.entities.Permission;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Permission.deserializeBinaryFromReader);
      msg.addPermissions(value);
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
proto.treeleaf.anydone.entities.EmployeeService.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.EmployeeService.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.EmployeeService} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.EmployeeService.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.treeleaf.anydone.entities.Permission.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.EmployeeService.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeService} returns this
 */
proto.treeleaf.anydone.entities.EmployeeService.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.EmployeeService.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeService} returns this
 */
proto.treeleaf.anydone.entities.EmployeeService.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Permission permissions = 3;
 * @return {!Array<!proto.treeleaf.anydone.entities.Permission>}
 */
proto.treeleaf.anydone.entities.EmployeeService.prototype.getPermissionsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.Permission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.Permission, 3));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.Permission>} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeService} returns this
*/
proto.treeleaf.anydone.entities.EmployeeService.prototype.setPermissionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.Permission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.Permission}
 */
proto.treeleaf.anydone.entities.EmployeeService.prototype.addPermissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.treeleaf.anydone.entities.Permission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.EmployeeService} returns this
 */
proto.treeleaf.anydone.entities.EmployeeService.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
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
proto.treeleaf.anydone.entities.EmployeeInboxGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.EmployeeInboxGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.EmployeeInboxGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.EmployeeInboxGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subject: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.treeleaf.anydone.entities.EmployeeInboxGroup}
 */
proto.treeleaf.anydone.entities.EmployeeInboxGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.EmployeeInboxGroup;
  return proto.treeleaf.anydone.entities.EmployeeInboxGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.EmployeeInboxGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.EmployeeInboxGroup}
 */
proto.treeleaf.anydone.entities.EmployeeInboxGroup.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSubject(value);
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
proto.treeleaf.anydone.entities.EmployeeInboxGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.EmployeeInboxGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.EmployeeInboxGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.EmployeeInboxGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.EmployeeInboxGroup.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeInboxGroup} returns this
 */
proto.treeleaf.anydone.entities.EmployeeInboxGroup.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subject = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.EmployeeInboxGroup.prototype.getSubject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeInboxGroup} returns this
 */
proto.treeleaf.anydone.entities.EmployeeInboxGroup.prototype.setSubject = function(value) {
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
proto.treeleaf.anydone.entities.AddConsumerProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.AddConsumerProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.AddConsumerProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AddConsumerProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: (f = msg.getAccount()) && proto.treeleaf.anydone.entities.Account.toObject(includeInstance, f),
    fullname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    gender: jspb.Message.getFieldWithDefault(msg, 3, 0),
    password: jspb.Message.getFieldWithDefault(msg, 4, ""),
    clientdetail: (f = msg.getClientdetail()) && treeleaf_pb.ClientDetail.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.AddConsumerProfileRequest}
 */
proto.treeleaf.anydone.entities.AddConsumerProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.AddConsumerProfileRequest;
  return proto.treeleaf.anydone.entities.AddConsumerProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.AddConsumerProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.AddConsumerProfileRequest}
 */
proto.treeleaf.anydone.entities.AddConsumerProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.Account;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Account.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFullname(value);
      break;
    case 3:
      var value = /** @type {!proto.treeleaf.anydone.entities.Gender} */ (reader.readEnum());
      msg.setGender(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 5:
      var value = new treeleaf_pb.ClientDetail;
      reader.readMessage(value,treeleaf_pb.ClientDetail.deserializeBinaryFromReader);
      msg.setClientdetail(value);
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
proto.treeleaf.anydone.entities.AddConsumerProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.AddConsumerProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.AddConsumerProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AddConsumerProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.Account.serializeBinaryToWriter
    );
  }
  f = message.getFullname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGender();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getClientdetail();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      treeleaf_pb.ClientDetail.serializeBinaryToWriter
    );
  }
};


/**
 * optional Account account = 1;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.AddConsumerProfileRequest.prototype.getAccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.Account, 1));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.AddConsumerProfileRequest} returns this
*/
proto.treeleaf.anydone.entities.AddConsumerProfileRequest.prototype.setAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.AddConsumerProfileRequest} returns this
 */
proto.treeleaf.anydone.entities.AddConsumerProfileRequest.prototype.clearAccount = function() {
  return this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.AddConsumerProfileRequest.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string fullName = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AddConsumerProfileRequest.prototype.getFullname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AddConsumerProfileRequest} returns this
 */
proto.treeleaf.anydone.entities.AddConsumerProfileRequest.prototype.setFullname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Gender gender = 3;
 * @return {!proto.treeleaf.anydone.entities.Gender}
 */
proto.treeleaf.anydone.entities.AddConsumerProfileRequest.prototype.getGender = function() {
  return /** @type {!proto.treeleaf.anydone.entities.Gender} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.Gender} value
 * @return {!proto.treeleaf.anydone.entities.AddConsumerProfileRequest} returns this
 */
proto.treeleaf.anydone.entities.AddConsumerProfileRequest.prototype.setGender = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string password = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AddConsumerProfileRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AddConsumerProfileRequest} returns this
 */
proto.treeleaf.anydone.entities.AddConsumerProfileRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional treeleaf.protos.ClientDetail clientDetail = 5;
 * @return {?proto.treeleaf.protos.ClientDetail}
 */
proto.treeleaf.anydone.entities.AddConsumerProfileRequest.prototype.getClientdetail = function() {
  return /** @type{?proto.treeleaf.protos.ClientDetail} */ (
    jspb.Message.getWrapperField(this, treeleaf_pb.ClientDetail, 5));
};


/**
 * @param {?proto.treeleaf.protos.ClientDetail|undefined} value
 * @return {!proto.treeleaf.anydone.entities.AddConsumerProfileRequest} returns this
*/
proto.treeleaf.anydone.entities.AddConsumerProfileRequest.prototype.setClientdetail = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.AddConsumerProfileRequest} returns this
 */
proto.treeleaf.anydone.entities.AddConsumerProfileRequest.prototype.clearClientdetail = function() {
  return this.setClientdetail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.AddConsumerProfileRequest.prototype.hasClientdetail = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: (f = msg.getAccount()) && proto.treeleaf.anydone.entities.Account.toObject(includeInstance, f),
    corporatename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    serviceprovidertype: jspb.Message.getFieldWithDefault(msg, 3, 0),
    password: jspb.Message.getFieldWithDefault(msg, 4, ""),
    clientdetail: (f = msg.getClientdetail()) && treeleaf_pb.ClientDetail.toObject(includeInstance, f),
    accountplan: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest}
 */
proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest;
  return proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest}
 */
proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.Account;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Account.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCorporatename(value);
      break;
    case 3:
      var value = /** @type {!proto.treeleaf.anydone.entities.ServiceProviderType} */ (reader.readEnum());
      msg.setServiceprovidertype(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 5:
      var value = new treeleaf_pb.ClientDetail;
      reader.readMessage(value,treeleaf_pb.ClientDetail.deserializeBinaryFromReader);
      msg.setClientdetail(value);
      break;
    case 6:
      var value = /** @type {!proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.AccountPlan} */ (reader.readEnum());
      msg.setAccountplan(value);
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
proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.Account.serializeBinaryToWriter
    );
  }
  f = message.getCorporatename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getServiceprovidertype();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getClientdetail();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      treeleaf_pb.ClientDetail.serializeBinaryToWriter
    );
  }
  f = message.getAccountplan();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.AccountPlan = {
  UNKNOWN_ACCOUNT_PLAN: 0,
  STARTER: 1,
  BASIC: 2,
  STANDARD: 3,
  ENTERPRISE: 4
};

/**
 * optional Account account = 1;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.prototype.getAccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.Account, 1));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest} returns this
*/
proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.prototype.setAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest} returns this
 */
proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.prototype.clearAccount = function() {
  return this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string corporateName = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.prototype.getCorporatename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest} returns this
 */
proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.prototype.setCorporatename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ServiceProviderType serviceProviderType = 3;
 * @return {!proto.treeleaf.anydone.entities.ServiceProviderType}
 */
proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.prototype.getServiceprovidertype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.ServiceProviderType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.ServiceProviderType} value
 * @return {!proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest} returns this
 */
proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.prototype.setServiceprovidertype = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string password = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest} returns this
 */
proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional treeleaf.protos.ClientDetail clientDetail = 5;
 * @return {?proto.treeleaf.protos.ClientDetail}
 */
proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.prototype.getClientdetail = function() {
  return /** @type{?proto.treeleaf.protos.ClientDetail} */ (
    jspb.Message.getWrapperField(this, treeleaf_pb.ClientDetail, 5));
};


/**
 * @param {?proto.treeleaf.protos.ClientDetail|undefined} value
 * @return {!proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest} returns this
*/
proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.prototype.setClientdetail = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest} returns this
 */
proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.prototype.clearClientdetail = function() {
  return this.setClientdetail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.prototype.hasClientdetail = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional AccountPlan accountPlan = 6;
 * @return {!proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.AccountPlan}
 */
proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.prototype.getAccountplan = function() {
  return /** @type {!proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.AccountPlan} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.AccountPlan} value
 * @return {!proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest} returns this
 */
proto.treeleaf.anydone.entities.AddServiceProviderProfileRequest.prototype.setAccountplan = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.AddEmployeeProfileRequestList.repeatedFields_ = [1];



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
proto.treeleaf.anydone.entities.AddEmployeeProfileRequestList.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.AddEmployeeProfileRequestList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.AddEmployeeProfileRequestList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AddEmployeeProfileRequestList.toObject = function(includeInstance, msg) {
  var f, obj = {
    addemployeeprofilerequestsList: jspb.Message.toObjectList(msg.getAddemployeeprofilerequestsList(),
    proto.treeleaf.anydone.entities.AddEmployeeProfileRequest.toObject, includeInstance)
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
 * @return {!proto.treeleaf.anydone.entities.AddEmployeeProfileRequestList}
 */
proto.treeleaf.anydone.entities.AddEmployeeProfileRequestList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.AddEmployeeProfileRequestList;
  return proto.treeleaf.anydone.entities.AddEmployeeProfileRequestList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.AddEmployeeProfileRequestList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.AddEmployeeProfileRequestList}
 */
proto.treeleaf.anydone.entities.AddEmployeeProfileRequestList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.AddEmployeeProfileRequest;
      reader.readMessage(value,proto.treeleaf.anydone.entities.AddEmployeeProfileRequest.deserializeBinaryFromReader);
      msg.addAddemployeeprofilerequests(value);
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
proto.treeleaf.anydone.entities.AddEmployeeProfileRequestList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.AddEmployeeProfileRequestList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.AddEmployeeProfileRequestList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AddEmployeeProfileRequestList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddemployeeprofilerequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.AddEmployeeProfileRequest.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AddEmployeeProfileRequest addEmployeeProfileRequests = 1;
 * @return {!Array<!proto.treeleaf.anydone.entities.AddEmployeeProfileRequest>}
 */
proto.treeleaf.anydone.entities.AddEmployeeProfileRequestList.prototype.getAddemployeeprofilerequestsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.AddEmployeeProfileRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.AddEmployeeProfileRequest, 1));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.AddEmployeeProfileRequest>} value
 * @return {!proto.treeleaf.anydone.entities.AddEmployeeProfileRequestList} returns this
*/
proto.treeleaf.anydone.entities.AddEmployeeProfileRequestList.prototype.setAddemployeeprofilerequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.AddEmployeeProfileRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.AddEmployeeProfileRequest}
 */
proto.treeleaf.anydone.entities.AddEmployeeProfileRequestList.prototype.addAddemployeeprofilerequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.treeleaf.anydone.entities.AddEmployeeProfileRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.AddEmployeeProfileRequestList} returns this
 */
proto.treeleaf.anydone.entities.AddEmployeeProfileRequestList.prototype.clearAddemployeeprofilerequestsList = function() {
  return this.setAddemployeeprofilerequestsList([]);
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
proto.treeleaf.anydone.entities.AddEmployeeProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.AddEmployeeProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.AddEmployeeProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AddEmployeeProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: (f = msg.getAccount()) && proto.treeleaf.anydone.entities.Account.toObject(includeInstance, f),
    fullname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    gender: jspb.Message.getFieldWithDefault(msg, 3, 0),
    password: jspb.Message.getFieldWithDefault(msg, 4, ""),
    clientdetail: (f = msg.getClientdetail()) && treeleaf_pb.ClientDetail.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.AddEmployeeProfileRequest}
 */
proto.treeleaf.anydone.entities.AddEmployeeProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.AddEmployeeProfileRequest;
  return proto.treeleaf.anydone.entities.AddEmployeeProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.AddEmployeeProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.AddEmployeeProfileRequest}
 */
proto.treeleaf.anydone.entities.AddEmployeeProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.Account;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Account.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFullname(value);
      break;
    case 3:
      var value = /** @type {!proto.treeleaf.anydone.entities.Gender} */ (reader.readEnum());
      msg.setGender(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 5:
      var value = new treeleaf_pb.ClientDetail;
      reader.readMessage(value,treeleaf_pb.ClientDetail.deserializeBinaryFromReader);
      msg.setClientdetail(value);
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
proto.treeleaf.anydone.entities.AddEmployeeProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.AddEmployeeProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.AddEmployeeProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AddEmployeeProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.Account.serializeBinaryToWriter
    );
  }
  f = message.getFullname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGender();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getClientdetail();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      treeleaf_pb.ClientDetail.serializeBinaryToWriter
    );
  }
};


/**
 * optional Account account = 1;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.AddEmployeeProfileRequest.prototype.getAccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.Account, 1));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.AddEmployeeProfileRequest} returns this
*/
proto.treeleaf.anydone.entities.AddEmployeeProfileRequest.prototype.setAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.AddEmployeeProfileRequest} returns this
 */
proto.treeleaf.anydone.entities.AddEmployeeProfileRequest.prototype.clearAccount = function() {
  return this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.AddEmployeeProfileRequest.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string fullName = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AddEmployeeProfileRequest.prototype.getFullname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AddEmployeeProfileRequest} returns this
 */
proto.treeleaf.anydone.entities.AddEmployeeProfileRequest.prototype.setFullname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Gender gender = 3;
 * @return {!proto.treeleaf.anydone.entities.Gender}
 */
proto.treeleaf.anydone.entities.AddEmployeeProfileRequest.prototype.getGender = function() {
  return /** @type {!proto.treeleaf.anydone.entities.Gender} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.Gender} value
 * @return {!proto.treeleaf.anydone.entities.AddEmployeeProfileRequest} returns this
 */
proto.treeleaf.anydone.entities.AddEmployeeProfileRequest.prototype.setGender = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string password = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AddEmployeeProfileRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AddEmployeeProfileRequest} returns this
 */
proto.treeleaf.anydone.entities.AddEmployeeProfileRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional treeleaf.protos.ClientDetail clientDetail = 5;
 * @return {?proto.treeleaf.protos.ClientDetail}
 */
proto.treeleaf.anydone.entities.AddEmployeeProfileRequest.prototype.getClientdetail = function() {
  return /** @type{?proto.treeleaf.protos.ClientDetail} */ (
    jspb.Message.getWrapperField(this, treeleaf_pb.ClientDetail, 5));
};


/**
 * @param {?proto.treeleaf.protos.ClientDetail|undefined} value
 * @return {!proto.treeleaf.anydone.entities.AddEmployeeProfileRequest} returns this
*/
proto.treeleaf.anydone.entities.AddEmployeeProfileRequest.prototype.setClientdetail = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.AddEmployeeProfileRequest} returns this
 */
proto.treeleaf.anydone.entities.AddEmployeeProfileRequest.prototype.clearClientdetail = function() {
  return this.setClientdetail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.AddEmployeeProfileRequest.prototype.hasClientdetail = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.treeleaf.anydone.entities.User.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    consumer: (f = msg.getConsumer()) && proto.treeleaf.anydone.entities.ConsumerProfile.toObject(includeInstance, f),
    serviceprovider: (f = msg.getServiceprovider()) && proto.treeleaf.anydone.entities.ServiceProviderProfile.toObject(includeInstance, f),
    employee: (f = msg.getEmployee()) && proto.treeleaf.anydone.entities.EmployeeProfile.toObject(includeInstance, f),
    accounttype: jspb.Message.getFieldWithDefault(msg, 4, 0),
    anydoneuser: (f = msg.getAnydoneuser()) && proto.treeleaf.anydone.entities.AnydoneUser.toObject(includeInstance, f),
    customer: (f = msg.getCustomer()) && proto.treeleaf.anydone.entities.Customer.toObject(includeInstance, f),
    billingaccount: (f = msg.getBillingaccount()) && proto.treeleaf.anydone.entities.BillingAccount.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.User}
 */
proto.treeleaf.anydone.entities.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.User;
  return proto.treeleaf.anydone.entities.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.User}
 */
proto.treeleaf.anydone.entities.User.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.ConsumerProfile;
      reader.readMessage(value,proto.treeleaf.anydone.entities.ConsumerProfile.deserializeBinaryFromReader);
      msg.setConsumer(value);
      break;
    case 2:
      var value = new proto.treeleaf.anydone.entities.ServiceProviderProfile;
      reader.readMessage(value,proto.treeleaf.anydone.entities.ServiceProviderProfile.deserializeBinaryFromReader);
      msg.setServiceprovider(value);
      break;
    case 3:
      var value = new proto.treeleaf.anydone.entities.EmployeeProfile;
      reader.readMessage(value,proto.treeleaf.anydone.entities.EmployeeProfile.deserializeBinaryFromReader);
      msg.setEmployee(value);
      break;
    case 4:
      var value = /** @type {!proto.treeleaf.anydone.entities.AccountType} */ (reader.readEnum());
      msg.setAccounttype(value);
      break;
    case 5:
      var value = new proto.treeleaf.anydone.entities.AnydoneUser;
      reader.readMessage(value,proto.treeleaf.anydone.entities.AnydoneUser.deserializeBinaryFromReader);
      msg.setAnydoneuser(value);
      break;
    case 6:
      var value = new proto.treeleaf.anydone.entities.Customer;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Customer.deserializeBinaryFromReader);
      msg.setCustomer(value);
      break;
    case 7:
      var value = new proto.treeleaf.anydone.entities.BillingAccount;
      reader.readMessage(value,proto.treeleaf.anydone.entities.BillingAccount.deserializeBinaryFromReader);
      msg.setBillingaccount(value);
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
proto.treeleaf.anydone.entities.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.User.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConsumer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.ConsumerProfile.serializeBinaryToWriter
    );
  }
  f = message.getServiceprovider();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.treeleaf.anydone.entities.ServiceProviderProfile.serializeBinaryToWriter
    );
  }
  f = message.getEmployee();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.treeleaf.anydone.entities.EmployeeProfile.serializeBinaryToWriter
    );
  }
  f = message.getAccounttype();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getAnydoneuser();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.treeleaf.anydone.entities.AnydoneUser.serializeBinaryToWriter
    );
  }
  f = message.getCustomer();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.treeleaf.anydone.entities.Customer.serializeBinaryToWriter
    );
  }
  f = message.getBillingaccount();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.treeleaf.anydone.entities.BillingAccount.serializeBinaryToWriter
    );
  }
};


/**
 * optional ConsumerProfile consumer = 1;
 * @return {?proto.treeleaf.anydone.entities.ConsumerProfile}
 */
proto.treeleaf.anydone.entities.User.prototype.getConsumer = function() {
  return /** @type{?proto.treeleaf.anydone.entities.ConsumerProfile} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.ConsumerProfile, 1));
};


/**
 * @param {?proto.treeleaf.anydone.entities.ConsumerProfile|undefined} value
 * @return {!proto.treeleaf.anydone.entities.User} returns this
*/
proto.treeleaf.anydone.entities.User.prototype.setConsumer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.User} returns this
 */
proto.treeleaf.anydone.entities.User.prototype.clearConsumer = function() {
  return this.setConsumer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.User.prototype.hasConsumer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ServiceProviderProfile serviceProvider = 2;
 * @return {?proto.treeleaf.anydone.entities.ServiceProviderProfile}
 */
proto.treeleaf.anydone.entities.User.prototype.getServiceprovider = function() {
  return /** @type{?proto.treeleaf.anydone.entities.ServiceProviderProfile} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.ServiceProviderProfile, 2));
};


/**
 * @param {?proto.treeleaf.anydone.entities.ServiceProviderProfile|undefined} value
 * @return {!proto.treeleaf.anydone.entities.User} returns this
*/
proto.treeleaf.anydone.entities.User.prototype.setServiceprovider = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.User} returns this
 */
proto.treeleaf.anydone.entities.User.prototype.clearServiceprovider = function() {
  return this.setServiceprovider(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.User.prototype.hasServiceprovider = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional EmployeeProfile employee = 3;
 * @return {?proto.treeleaf.anydone.entities.EmployeeProfile}
 */
proto.treeleaf.anydone.entities.User.prototype.getEmployee = function() {
  return /** @type{?proto.treeleaf.anydone.entities.EmployeeProfile} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.EmployeeProfile, 3));
};


/**
 * @param {?proto.treeleaf.anydone.entities.EmployeeProfile|undefined} value
 * @return {!proto.treeleaf.anydone.entities.User} returns this
*/
proto.treeleaf.anydone.entities.User.prototype.setEmployee = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.User} returns this
 */
proto.treeleaf.anydone.entities.User.prototype.clearEmployee = function() {
  return this.setEmployee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.User.prototype.hasEmployee = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AccountType accountType = 4;
 * @return {!proto.treeleaf.anydone.entities.AccountType}
 */
proto.treeleaf.anydone.entities.User.prototype.getAccounttype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.AccountType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.AccountType} value
 * @return {!proto.treeleaf.anydone.entities.User} returns this
 */
proto.treeleaf.anydone.entities.User.prototype.setAccounttype = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional AnydoneUser anydoneUser = 5;
 * @return {?proto.treeleaf.anydone.entities.AnydoneUser}
 */
proto.treeleaf.anydone.entities.User.prototype.getAnydoneuser = function() {
  return /** @type{?proto.treeleaf.anydone.entities.AnydoneUser} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.AnydoneUser, 5));
};


/**
 * @param {?proto.treeleaf.anydone.entities.AnydoneUser|undefined} value
 * @return {!proto.treeleaf.anydone.entities.User} returns this
*/
proto.treeleaf.anydone.entities.User.prototype.setAnydoneuser = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.User} returns this
 */
proto.treeleaf.anydone.entities.User.prototype.clearAnydoneuser = function() {
  return this.setAnydoneuser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.User.prototype.hasAnydoneuser = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Customer customer = 6;
 * @return {?proto.treeleaf.anydone.entities.Customer}
 */
proto.treeleaf.anydone.entities.User.prototype.getCustomer = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Customer} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.Customer, 6));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Customer|undefined} value
 * @return {!proto.treeleaf.anydone.entities.User} returns this
*/
proto.treeleaf.anydone.entities.User.prototype.setCustomer = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.User} returns this
 */
proto.treeleaf.anydone.entities.User.prototype.clearCustomer = function() {
  return this.setCustomer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.User.prototype.hasCustomer = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional BillingAccount billingAccount = 7;
 * @return {?proto.treeleaf.anydone.entities.BillingAccount}
 */
proto.treeleaf.anydone.entities.User.prototype.getBillingaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.BillingAccount} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.BillingAccount, 7));
};


/**
 * @param {?proto.treeleaf.anydone.entities.BillingAccount|undefined} value
 * @return {!proto.treeleaf.anydone.entities.User} returns this
*/
proto.treeleaf.anydone.entities.User.prototype.setBillingaccount = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.User} returns this
 */
proto.treeleaf.anydone.entities.User.prototype.clearBillingaccount = function() {
  return this.setBillingaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.User.prototype.hasBillingaccount = function() {
  return jspb.Message.getField(this, 7) != null;
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
proto.treeleaf.anydone.entities.LoginUser.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.LoginUser.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.LoginUser} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.LoginUser.toObject = function(includeInstance, msg) {
  var f, obj = {
    consumer: (f = msg.getConsumer()) && proto.treeleaf.anydone.entities.ConsumerProfile.toObject(includeInstance, f),
    serviceprovider: (f = msg.getServiceprovider()) && proto.treeleaf.anydone.entities.ServiceProviderProfile.toObject(includeInstance, f),
    employee: (f = msg.getEmployee()) && proto.treeleaf.anydone.entities.EmployeeProfile.toObject(includeInstance, f),
    password: jspb.Message.getFieldWithDefault(msg, 4, ""),
    accounttype: jspb.Message.getFieldWithDefault(msg, 5, 0),
    anydoneuser: (f = msg.getAnydoneuser()) && proto.treeleaf.anydone.entities.AnydoneUser.toObject(includeInstance, f),
    billingaccount: (f = msg.getBillingaccount()) && proto.treeleaf.anydone.entities.BillingAccount.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.LoginUser}
 */
proto.treeleaf.anydone.entities.LoginUser.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.LoginUser;
  return proto.treeleaf.anydone.entities.LoginUser.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.LoginUser} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.LoginUser}
 */
proto.treeleaf.anydone.entities.LoginUser.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.ConsumerProfile;
      reader.readMessage(value,proto.treeleaf.anydone.entities.ConsumerProfile.deserializeBinaryFromReader);
      msg.setConsumer(value);
      break;
    case 2:
      var value = new proto.treeleaf.anydone.entities.ServiceProviderProfile;
      reader.readMessage(value,proto.treeleaf.anydone.entities.ServiceProviderProfile.deserializeBinaryFromReader);
      msg.setServiceprovider(value);
      break;
    case 3:
      var value = new proto.treeleaf.anydone.entities.EmployeeProfile;
      reader.readMessage(value,proto.treeleaf.anydone.entities.EmployeeProfile.deserializeBinaryFromReader);
      msg.setEmployee(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 5:
      var value = /** @type {!proto.treeleaf.anydone.entities.AccountType} */ (reader.readEnum());
      msg.setAccounttype(value);
      break;
    case 6:
      var value = new proto.treeleaf.anydone.entities.AnydoneUser;
      reader.readMessage(value,proto.treeleaf.anydone.entities.AnydoneUser.deserializeBinaryFromReader);
      msg.setAnydoneuser(value);
      break;
    case 7:
      var value = new proto.treeleaf.anydone.entities.BillingAccount;
      reader.readMessage(value,proto.treeleaf.anydone.entities.BillingAccount.deserializeBinaryFromReader);
      msg.setBillingaccount(value);
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
proto.treeleaf.anydone.entities.LoginUser.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.LoginUser.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.LoginUser} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.LoginUser.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConsumer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.ConsumerProfile.serializeBinaryToWriter
    );
  }
  f = message.getServiceprovider();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.treeleaf.anydone.entities.ServiceProviderProfile.serializeBinaryToWriter
    );
  }
  f = message.getEmployee();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.treeleaf.anydone.entities.EmployeeProfile.serializeBinaryToWriter
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAccounttype();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getAnydoneuser();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.treeleaf.anydone.entities.AnydoneUser.serializeBinaryToWriter
    );
  }
  f = message.getBillingaccount();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.treeleaf.anydone.entities.BillingAccount.serializeBinaryToWriter
    );
  }
};


/**
 * optional ConsumerProfile consumer = 1;
 * @return {?proto.treeleaf.anydone.entities.ConsumerProfile}
 */
proto.treeleaf.anydone.entities.LoginUser.prototype.getConsumer = function() {
  return /** @type{?proto.treeleaf.anydone.entities.ConsumerProfile} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.ConsumerProfile, 1));
};


/**
 * @param {?proto.treeleaf.anydone.entities.ConsumerProfile|undefined} value
 * @return {!proto.treeleaf.anydone.entities.LoginUser} returns this
*/
proto.treeleaf.anydone.entities.LoginUser.prototype.setConsumer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.LoginUser} returns this
 */
proto.treeleaf.anydone.entities.LoginUser.prototype.clearConsumer = function() {
  return this.setConsumer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.LoginUser.prototype.hasConsumer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ServiceProviderProfile serviceProvider = 2;
 * @return {?proto.treeleaf.anydone.entities.ServiceProviderProfile}
 */
proto.treeleaf.anydone.entities.LoginUser.prototype.getServiceprovider = function() {
  return /** @type{?proto.treeleaf.anydone.entities.ServiceProviderProfile} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.ServiceProviderProfile, 2));
};


/**
 * @param {?proto.treeleaf.anydone.entities.ServiceProviderProfile|undefined} value
 * @return {!proto.treeleaf.anydone.entities.LoginUser} returns this
*/
proto.treeleaf.anydone.entities.LoginUser.prototype.setServiceprovider = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.LoginUser} returns this
 */
proto.treeleaf.anydone.entities.LoginUser.prototype.clearServiceprovider = function() {
  return this.setServiceprovider(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.LoginUser.prototype.hasServiceprovider = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional EmployeeProfile employee = 3;
 * @return {?proto.treeleaf.anydone.entities.EmployeeProfile}
 */
proto.treeleaf.anydone.entities.LoginUser.prototype.getEmployee = function() {
  return /** @type{?proto.treeleaf.anydone.entities.EmployeeProfile} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.EmployeeProfile, 3));
};


/**
 * @param {?proto.treeleaf.anydone.entities.EmployeeProfile|undefined} value
 * @return {!proto.treeleaf.anydone.entities.LoginUser} returns this
*/
proto.treeleaf.anydone.entities.LoginUser.prototype.setEmployee = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.LoginUser} returns this
 */
proto.treeleaf.anydone.entities.LoginUser.prototype.clearEmployee = function() {
  return this.setEmployee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.LoginUser.prototype.hasEmployee = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string password = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.LoginUser.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.LoginUser} returns this
 */
proto.treeleaf.anydone.entities.LoginUser.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional AccountType accountType = 5;
 * @return {!proto.treeleaf.anydone.entities.AccountType}
 */
proto.treeleaf.anydone.entities.LoginUser.prototype.getAccounttype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.AccountType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.AccountType} value
 * @return {!proto.treeleaf.anydone.entities.LoginUser} returns this
 */
proto.treeleaf.anydone.entities.LoginUser.prototype.setAccounttype = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional AnydoneUser anydoneUser = 6;
 * @return {?proto.treeleaf.anydone.entities.AnydoneUser}
 */
proto.treeleaf.anydone.entities.LoginUser.prototype.getAnydoneuser = function() {
  return /** @type{?proto.treeleaf.anydone.entities.AnydoneUser} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.AnydoneUser, 6));
};


/**
 * @param {?proto.treeleaf.anydone.entities.AnydoneUser|undefined} value
 * @return {!proto.treeleaf.anydone.entities.LoginUser} returns this
*/
proto.treeleaf.anydone.entities.LoginUser.prototype.setAnydoneuser = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.LoginUser} returns this
 */
proto.treeleaf.anydone.entities.LoginUser.prototype.clearAnydoneuser = function() {
  return this.setAnydoneuser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.LoginUser.prototype.hasAnydoneuser = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional BillingAccount billingAccount = 7;
 * @return {?proto.treeleaf.anydone.entities.BillingAccount}
 */
proto.treeleaf.anydone.entities.LoginUser.prototype.getBillingaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.BillingAccount} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.BillingAccount, 7));
};


/**
 * @param {?proto.treeleaf.anydone.entities.BillingAccount|undefined} value
 * @return {!proto.treeleaf.anydone.entities.LoginUser} returns this
*/
proto.treeleaf.anydone.entities.LoginUser.prototype.setBillingaccount = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.LoginUser} returns this
 */
proto.treeleaf.anydone.entities.LoginUser.prototype.clearBillingaccount = function() {
  return this.setBillingaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.LoginUser.prototype.hasBillingaccount = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.UpdateAccount.repeatedFields_ = [2];



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
proto.treeleaf.anydone.entities.UpdateAccount.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.UpdateAccount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.UpdateAccount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.UpdateAccount.toObject = function(includeInstance, msg) {
  var f, obj = {
    permissionsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    refid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    userrole: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.treeleaf.anydone.entities.UpdateAccount}
 */
proto.treeleaf.anydone.entities.UpdateAccount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.UpdateAccount;
  return proto.treeleaf.anydone.entities.UpdateAccount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.UpdateAccount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.UpdateAccount}
 */
proto.treeleaf.anydone.entities.UpdateAccount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addPermissions(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 4:
      var value = /** @type {!proto.treeleaf.anydone.entities.UserRole} */ (reader.readEnum());
      msg.setUserrole(value);
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
proto.treeleaf.anydone.entities.UpdateAccount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.UpdateAccount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.UpdateAccount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.UpdateAccount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUserrole();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * repeated string permissions = 2;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.UpdateAccount.prototype.getPermissionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.UpdateAccount} returns this
 */
proto.treeleaf.anydone.entities.UpdateAccount.prototype.setPermissionsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.UpdateAccount} returns this
 */
proto.treeleaf.anydone.entities.UpdateAccount.prototype.addPermissions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.UpdateAccount} returns this
 */
proto.treeleaf.anydone.entities.UpdateAccount.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
};


/**
 * optional string refId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.UpdateAccount.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.UpdateAccount} returns this
 */
proto.treeleaf.anydone.entities.UpdateAccount.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional UserRole userRole = 4;
 * @return {!proto.treeleaf.anydone.entities.UserRole}
 */
proto.treeleaf.anydone.entities.UpdateAccount.prototype.getUserrole = function() {
  return /** @type {!proto.treeleaf.anydone.entities.UserRole} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.UserRole} value
 * @return {!proto.treeleaf.anydone.entities.UpdateAccount} returns this
 */
proto.treeleaf.anydone.entities.UpdateAccount.prototype.setUserrole = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
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
proto.treeleaf.anydone.entities.PasswordChangeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.PasswordChangeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.PasswordChangeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.PasswordChangeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    oldpassword: jspb.Message.getFieldWithDefault(msg, 1, ""),
    newpassword: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.treeleaf.anydone.entities.PasswordChangeRequest}
 */
proto.treeleaf.anydone.entities.PasswordChangeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.PasswordChangeRequest;
  return proto.treeleaf.anydone.entities.PasswordChangeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.PasswordChangeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.PasswordChangeRequest}
 */
proto.treeleaf.anydone.entities.PasswordChangeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOldpassword(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewpassword(value);
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
proto.treeleaf.anydone.entities.PasswordChangeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.PasswordChangeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.PasswordChangeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.PasswordChangeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOldpassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNewpassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string oldPassword = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.PasswordChangeRequest.prototype.getOldpassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.PasswordChangeRequest} returns this
 */
proto.treeleaf.anydone.entities.PasswordChangeRequest.prototype.setOldpassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string newPassword = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.PasswordChangeRequest.prototype.getNewpassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.PasswordChangeRequest} returns this
 */
proto.treeleaf.anydone.entities.PasswordChangeRequest.prototype.setNewpassword = function(value) {
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
proto.treeleaf.anydone.entities.PasswordReset.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.PasswordReset.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.PasswordReset} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.PasswordReset.toObject = function(includeInstance, msg) {
  var f, obj = {
    emailphone: jspb.Message.getFieldWithDefault(msg, 1, ""),
    newpassword: jspb.Message.getFieldWithDefault(msg, 2, ""),
    accountid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    code: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.treeleaf.anydone.entities.PasswordReset}
 */
proto.treeleaf.anydone.entities.PasswordReset.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.PasswordReset;
  return proto.treeleaf.anydone.entities.PasswordReset.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.PasswordReset} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.PasswordReset}
 */
proto.treeleaf.anydone.entities.PasswordReset.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmailphone(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewpassword(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
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
proto.treeleaf.anydone.entities.PasswordReset.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.PasswordReset.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.PasswordReset} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.PasswordReset.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmailphone();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNewpassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAccountid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string emailPhone = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.PasswordReset.prototype.getEmailphone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.PasswordReset} returns this
 */
proto.treeleaf.anydone.entities.PasswordReset.prototype.setEmailphone = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string newPassword = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.PasswordReset.prototype.getNewpassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.PasswordReset} returns this
 */
proto.treeleaf.anydone.entities.PasswordReset.prototype.setNewpassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string accountId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.PasswordReset.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.PasswordReset} returns this
 */
proto.treeleaf.anydone.entities.PasswordReset.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 code = 4;
 * @return {number}
 */
proto.treeleaf.anydone.entities.PasswordReset.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.PasswordReset} returns this
 */
proto.treeleaf.anydone.entities.PasswordReset.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.treeleaf.anydone.entities.ServiceEmployee.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.ServiceEmployee.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.ServiceEmployee} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ServiceEmployee.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceaccountid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    employeeaccountid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    employeestatus: jspb.Message.getFieldWithDefault(msg, 3, 0),
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
 * @return {!proto.treeleaf.anydone.entities.ServiceEmployee}
 */
proto.treeleaf.anydone.entities.ServiceEmployee.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.ServiceEmployee;
  return proto.treeleaf.anydone.entities.ServiceEmployee.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.ServiceEmployee} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.ServiceEmployee}
 */
proto.treeleaf.anydone.entities.ServiceEmployee.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceaccountid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmployeeaccountid(value);
      break;
    case 3:
      var value = /** @type {!proto.treeleaf.anydone.entities.ServiceEmployee.EmployeeStatus} */ (reader.readEnum());
      msg.setEmployeestatus(value);
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
proto.treeleaf.anydone.entities.ServiceEmployee.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.ServiceEmployee.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.ServiceEmployee} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ServiceEmployee.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceaccountid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmployeeaccountid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEmployeestatus();
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
 * @enum {number}
 */
proto.treeleaf.anydone.entities.ServiceEmployee.EmployeeStatus = {
  UNKNOWN_EMPLOYEE_STATUS: 0,
  ACTIVE_EMPLOYEE: 1,
  DEACTIVATED_EMPLOYEE: 2
};

/**
 * optional string serviceAccountId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ServiceEmployee.prototype.getServiceaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ServiceEmployee} returns this
 */
proto.treeleaf.anydone.entities.ServiceEmployee.prototype.setServiceaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string employeeAccountId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ServiceEmployee.prototype.getEmployeeaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ServiceEmployee} returns this
 */
proto.treeleaf.anydone.entities.ServiceEmployee.prototype.setEmployeeaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional EmployeeStatus employeeStatus = 3;
 * @return {!proto.treeleaf.anydone.entities.ServiceEmployee.EmployeeStatus}
 */
proto.treeleaf.anydone.entities.ServiceEmployee.prototype.getEmployeestatus = function() {
  return /** @type {!proto.treeleaf.anydone.entities.ServiceEmployee.EmployeeStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.ServiceEmployee.EmployeeStatus} value
 * @return {!proto.treeleaf.anydone.entities.ServiceEmployee} returns this
 */
proto.treeleaf.anydone.entities.ServiceEmployee.prototype.setEmployeestatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int64 createdAt = 4;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ServiceEmployee.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ServiceEmployee} returns this
 */
proto.treeleaf.anydone.entities.ServiceEmployee.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 updatedAt = 5;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ServiceEmployee.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ServiceEmployee} returns this
 */
proto.treeleaf.anydone.entities.ServiceEmployee.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
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
proto.treeleaf.anydone.entities.Skill.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.Skill.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.Skill} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Skill.toObject = function(includeInstance, msg) {
  var f, obj = {
    skillid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    employeeaccountid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 5, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.treeleaf.anydone.entities.Skill}
 */
proto.treeleaf.anydone.entities.Skill.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.Skill;
  return proto.treeleaf.anydone.entities.Skill.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.Skill} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.Skill}
 */
proto.treeleaf.anydone.entities.Skill.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSkillid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmployeeaccountid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 6:
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
proto.treeleaf.anydone.entities.Skill.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.Skill.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.Skill} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Skill.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkillid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmployeeaccountid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
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
};


/**
 * optional string skillId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Skill.prototype.getSkillid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Skill} returns this
 */
proto.treeleaf.anydone.entities.Skill.prototype.setSkillid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string employeeAccountId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Skill.prototype.getEmployeeaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Skill} returns this
 */
proto.treeleaf.anydone.entities.Skill.prototype.setEmployeeaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Skill.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Skill} returns this
 */
proto.treeleaf.anydone.entities.Skill.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Skill.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Skill} returns this
 */
proto.treeleaf.anydone.entities.Skill.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 createdAt = 5;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Skill.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Skill} returns this
 */
proto.treeleaf.anydone.entities.Skill.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 updatedAt = 6;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Skill.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Skill} returns this
 */
proto.treeleaf.anydone.entities.Skill.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
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
proto.treeleaf.anydone.entities.Address.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.Address.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.Address} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Address.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    addresstype: jspb.Message.getFieldWithDefault(msg, 3, 0),
    city: jspb.Message.getFieldWithDefault(msg, 4, ""),
    zip: jspb.Message.getFieldWithDefault(msg, 5, ""),
    locationlat: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    locationlng: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    createdat: jspb.Message.getFieldWithDefault(msg, 8, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 9, 0),
    street1: jspb.Message.getFieldWithDefault(msg, 11, ""),
    state: jspb.Message.getFieldWithDefault(msg, 12, ""),
    countrycode: jspb.Message.getFieldWithDefault(msg, 13, ""),
    street2: jspb.Message.getFieldWithDefault(msg, 14, "")
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
 * @return {!proto.treeleaf.anydone.entities.Address}
 */
proto.treeleaf.anydone.entities.Address.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.Address;
  return proto.treeleaf.anydone.entities.Address.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.Address} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.Address}
 */
proto.treeleaf.anydone.entities.Address.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddressid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 3:
      var value = /** @type {!proto.treeleaf.anydone.entities.AddressType} */ (reader.readEnum());
      msg.setAddresstype(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setZip(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLocationlat(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLocationlng(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedat(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreet1(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountrycode(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreet2(value);
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
proto.treeleaf.anydone.entities.Address.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.Address.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.Address} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Address.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAddresstype();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getZip();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLocationlat();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getLocationlng();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getStreet1();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getCountrycode();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getStreet2();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
};


/**
 * optional string addressId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Address.prototype.getAddressid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Address} returns this
 */
proto.treeleaf.anydone.entities.Address.prototype.setAddressid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string refId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Address.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Address} returns this
 */
proto.treeleaf.anydone.entities.Address.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional AddressType addressType = 3;
 * @return {!proto.treeleaf.anydone.entities.AddressType}
 */
proto.treeleaf.anydone.entities.Address.prototype.getAddresstype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.AddressType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.AddressType} value
 * @return {!proto.treeleaf.anydone.entities.Address} returns this
 */
proto.treeleaf.anydone.entities.Address.prototype.setAddresstype = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string city = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Address.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Address} returns this
 */
proto.treeleaf.anydone.entities.Address.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string zip = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Address.prototype.getZip = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Address} returns this
 */
proto.treeleaf.anydone.entities.Address.prototype.setZip = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional double locationLat = 6;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Address.prototype.getLocationlat = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Address} returns this
 */
proto.treeleaf.anydone.entities.Address.prototype.setLocationlat = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double locationLng = 7;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Address.prototype.getLocationlng = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Address} returns this
 */
proto.treeleaf.anydone.entities.Address.prototype.setLocationlng = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional int64 createdAt = 8;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Address.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Address} returns this
 */
proto.treeleaf.anydone.entities.Address.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 updatedAt = 9;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Address.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Address} returns this
 */
proto.treeleaf.anydone.entities.Address.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string street1 = 11;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Address.prototype.getStreet1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Address} returns this
 */
proto.treeleaf.anydone.entities.Address.prototype.setStreet1 = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string state = 12;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Address.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Address} returns this
 */
proto.treeleaf.anydone.entities.Address.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string countryCode = 13;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Address.prototype.getCountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Address} returns this
 */
proto.treeleaf.anydone.entities.Address.prototype.setCountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string street2 = 14;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Address.prototype.getStreet2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Address} returns this
 */
proto.treeleaf.anydone.entities.Address.prototype.setStreet2 = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
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
proto.treeleaf.anydone.entities.UserVerification.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.UserVerification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.UserVerification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.UserVerification.toObject = function(includeInstance, msg) {
  var f, obj = {
    refid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    emailphone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    code: jspb.Message.getFieldWithDefault(msg, 3, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.treeleaf.anydone.entities.UserVerification}
 */
proto.treeleaf.anydone.entities.UserVerification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.UserVerification;
  return proto.treeleaf.anydone.entities.UserVerification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.UserVerification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.UserVerification}
 */
proto.treeleaf.anydone.entities.UserVerification.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setEmailphone(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
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
proto.treeleaf.anydone.entities.UserVerification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.UserVerification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.UserVerification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.UserVerification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmailphone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string refId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.UserVerification.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.UserVerification} returns this
 */
proto.treeleaf.anydone.entities.UserVerification.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string emailPhone = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.UserVerification.prototype.getEmailphone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.UserVerification} returns this
 */
proto.treeleaf.anydone.entities.UserVerification.prototype.setEmailphone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 code = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.UserVerification.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.UserVerification} returns this
 */
proto.treeleaf.anydone.entities.UserVerification.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 timestamp = 4;
 * @return {number}
 */
proto.treeleaf.anydone.entities.UserVerification.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.UserVerification} returns this
 */
proto.treeleaf.anydone.entities.UserVerification.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.treeleaf.anydone.entities.EmployeePassword.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.EmployeePassword.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.EmployeePassword} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.EmployeePassword.toObject = function(includeInstance, msg) {
  var f, obj = {
    refid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    emailphone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    password: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.treeleaf.anydone.entities.EmployeePassword}
 */
proto.treeleaf.anydone.entities.EmployeePassword.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.EmployeePassword;
  return proto.treeleaf.anydone.entities.EmployeePassword.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.EmployeePassword} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.EmployeePassword}
 */
proto.treeleaf.anydone.entities.EmployeePassword.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setEmailphone(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
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
proto.treeleaf.anydone.entities.EmployeePassword.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.EmployeePassword.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.EmployeePassword} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.EmployeePassword.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmailphone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string refId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.EmployeePassword.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.EmployeePassword} returns this
 */
proto.treeleaf.anydone.entities.EmployeePassword.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string emailPhone = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.EmployeePassword.prototype.getEmailphone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.EmployeePassword} returns this
 */
proto.treeleaf.anydone.entities.EmployeePassword.prototype.setEmailphone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string password = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.EmployeePassword.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.EmployeePassword} returns this
 */
proto.treeleaf.anydone.entities.EmployeePassword.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.PermissionAssignReq.repeatedFields_ = [1,7];



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
proto.treeleaf.anydone.entities.PermissionAssignReq.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.PermissionAssignReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.PermissionAssignReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.PermissionAssignReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    permissionassignsList: jspb.Message.toObjectList(msg.getPermissionassignsList(),
    proto.treeleaf.anydone.entities.PermissionAssign.toObject, includeInstance),
    employeeid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    serviceidList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f
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
 * @return {!proto.treeleaf.anydone.entities.PermissionAssignReq}
 */
proto.treeleaf.anydone.entities.PermissionAssignReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.PermissionAssignReq;
  return proto.treeleaf.anydone.entities.PermissionAssignReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.PermissionAssignReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.PermissionAssignReq}
 */
proto.treeleaf.anydone.entities.PermissionAssignReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.PermissionAssign;
      reader.readMessage(value,proto.treeleaf.anydone.entities.PermissionAssign.deserializeBinaryFromReader);
      msg.addPermissionassigns(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmployeeid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addServiceid(value);
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
proto.treeleaf.anydone.entities.PermissionAssignReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.PermissionAssignReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.PermissionAssignReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.PermissionAssignReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPermissionassignsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.PermissionAssign.serializeBinaryToWriter
    );
  }
  f = message.getEmployeeid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getServiceidList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
};


/**
 * repeated PermissionAssign permissionAssigns = 1;
 * @return {!Array<!proto.treeleaf.anydone.entities.PermissionAssign>}
 */
proto.treeleaf.anydone.entities.PermissionAssignReq.prototype.getPermissionassignsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.PermissionAssign>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.PermissionAssign, 1));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.PermissionAssign>} value
 * @return {!proto.treeleaf.anydone.entities.PermissionAssignReq} returns this
*/
proto.treeleaf.anydone.entities.PermissionAssignReq.prototype.setPermissionassignsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.PermissionAssign=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.PermissionAssign}
 */
proto.treeleaf.anydone.entities.PermissionAssignReq.prototype.addPermissionassigns = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.treeleaf.anydone.entities.PermissionAssign, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.PermissionAssignReq} returns this
 */
proto.treeleaf.anydone.entities.PermissionAssignReq.prototype.clearPermissionassignsList = function() {
  return this.setPermissionassignsList([]);
};


/**
 * optional string employeeId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.PermissionAssignReq.prototype.getEmployeeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.PermissionAssignReq} returns this
 */
proto.treeleaf.anydone.entities.PermissionAssignReq.prototype.setEmployeeid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string serviceId = 7;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.PermissionAssignReq.prototype.getServiceidList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.PermissionAssignReq} returns this
 */
proto.treeleaf.anydone.entities.PermissionAssignReq.prototype.setServiceidList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.PermissionAssignReq} returns this
 */
proto.treeleaf.anydone.entities.PermissionAssignReq.prototype.addServiceid = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.PermissionAssignReq} returns this
 */
proto.treeleaf.anydone.entities.PermissionAssignReq.prototype.clearServiceidList = function() {
  return this.setServiceidList([]);
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
proto.treeleaf.anydone.entities.Permission.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.Permission.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.Permission} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Permission.toObject = function(includeInstance, msg) {
  var f, obj = {
    permissionid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    permission: jspb.Message.getFieldWithDefault(msg, 2, ""),
    group: jspb.Message.getFieldWithDefault(msg, 3, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 4, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 5, 0),
    serviceid: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.treeleaf.anydone.entities.Permission}
 */
proto.treeleaf.anydone.entities.Permission.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.Permission;
  return proto.treeleaf.anydone.entities.Permission.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.Permission} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.Permission}
 */
proto.treeleaf.anydone.entities.Permission.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermissionid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermission(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroup(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedat(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceid(value);
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
proto.treeleaf.anydone.entities.Permission.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.Permission.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.Permission} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Permission.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPermissionid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPermission();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGroup();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getServiceid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string permissionId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Permission.prototype.getPermissionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Permission} returns this
 */
proto.treeleaf.anydone.entities.Permission.prototype.setPermissionid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string permission = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Permission.prototype.getPermission = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Permission} returns this
 */
proto.treeleaf.anydone.entities.Permission.prototype.setPermission = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string group = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Permission.prototype.getGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Permission} returns this
 */
proto.treeleaf.anydone.entities.Permission.prototype.setGroup = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 createdAt = 4;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Permission.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Permission} returns this
 */
proto.treeleaf.anydone.entities.Permission.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 updatedAt = 5;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Permission.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Permission} returns this
 */
proto.treeleaf.anydone.entities.Permission.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string serviceId = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Permission.prototype.getServiceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Permission} returns this
 */
proto.treeleaf.anydone.entities.Permission.prototype.setServiceid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
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
proto.treeleaf.anydone.entities.PermissionAssign.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.PermissionAssign.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.PermissionAssign} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.PermissionAssign.toObject = function(includeInstance, msg) {
  var f, obj = {
    permissionassignid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    appliedby: jspb.Message.getFieldWithDefault(msg, 2, ""),
    appliedto: jspb.Message.getFieldWithDefault(msg, 3, ""),
    permission: (f = msg.getPermission()) && proto.treeleaf.anydone.entities.Permission.toObject(includeInstance, f),
    createdat: jspb.Message.getFieldWithDefault(msg, 5, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 6, 0),
    superadminid: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.treeleaf.anydone.entities.PermissionAssign}
 */
proto.treeleaf.anydone.entities.PermissionAssign.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.PermissionAssign;
  return proto.treeleaf.anydone.entities.PermissionAssign.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.PermissionAssign} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.PermissionAssign}
 */
proto.treeleaf.anydone.entities.PermissionAssign.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermissionassignid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppliedby(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppliedto(value);
      break;
    case 4:
      var value = new proto.treeleaf.anydone.entities.Permission;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Permission.deserializeBinaryFromReader);
      msg.setPermission(value);
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
      msg.setSuperadminid(value);
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
proto.treeleaf.anydone.entities.PermissionAssign.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.PermissionAssign.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.PermissionAssign} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.PermissionAssign.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPermissionassignid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAppliedby();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAppliedto();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPermission();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.treeleaf.anydone.entities.Permission.serializeBinaryToWriter
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
  f = message.getSuperadminid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string permissionAssignId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.PermissionAssign.prototype.getPermissionassignid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.PermissionAssign} returns this
 */
proto.treeleaf.anydone.entities.PermissionAssign.prototype.setPermissionassignid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string appliedBy = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.PermissionAssign.prototype.getAppliedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.PermissionAssign} returns this
 */
proto.treeleaf.anydone.entities.PermissionAssign.prototype.setAppliedby = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string appliedTo = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.PermissionAssign.prototype.getAppliedto = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.PermissionAssign} returns this
 */
proto.treeleaf.anydone.entities.PermissionAssign.prototype.setAppliedto = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Permission permission = 4;
 * @return {?proto.treeleaf.anydone.entities.Permission}
 */
proto.treeleaf.anydone.entities.PermissionAssign.prototype.getPermission = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Permission} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.Permission, 4));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Permission|undefined} value
 * @return {!proto.treeleaf.anydone.entities.PermissionAssign} returns this
*/
proto.treeleaf.anydone.entities.PermissionAssign.prototype.setPermission = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.PermissionAssign} returns this
 */
proto.treeleaf.anydone.entities.PermissionAssign.prototype.clearPermission = function() {
  return this.setPermission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.PermissionAssign.prototype.hasPermission = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 createdAt = 5;
 * @return {number}
 */
proto.treeleaf.anydone.entities.PermissionAssign.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.PermissionAssign} returns this
 */
proto.treeleaf.anydone.entities.PermissionAssign.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 updatedAt = 6;
 * @return {number}
 */
proto.treeleaf.anydone.entities.PermissionAssign.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.PermissionAssign} returns this
 */
proto.treeleaf.anydone.entities.PermissionAssign.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string superAdminId = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.PermissionAssign.prototype.getSuperadminid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.PermissionAssign} returns this
 */
proto.treeleaf.anydone.entities.PermissionAssign.prototype.setSuperadminid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
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
proto.treeleaf.anydone.entities.Location.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.Location.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.Location} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Location.toObject = function(includeInstance, msg) {
  var f, obj = {
    locationid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    address: jspb.Message.getFieldWithDefault(msg, 2, ""),
    latitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    longitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    locationtype: jspb.Message.getFieldWithDefault(msg, 5, 0),
    isdefault: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.treeleaf.anydone.entities.Location}
 */
proto.treeleaf.anydone.entities.Location.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.Location;
  return proto.treeleaf.anydone.entities.Location.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.Location} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.Location}
 */
proto.treeleaf.anydone.entities.Location.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLatitude(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLongitude(value);
      break;
    case 5:
      var value = /** @type {!proto.treeleaf.anydone.entities.LocationType} */ (reader.readEnum());
      msg.setLocationtype(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsdefault(value);
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
proto.treeleaf.anydone.entities.Location.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.Location.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.Location} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Location.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocationid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLatitude();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getLongitude();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getLocationtype();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getIsdefault();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string locationId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Location.prototype.getLocationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Location} returns this
 */
proto.treeleaf.anydone.entities.Location.prototype.setLocationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Location.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Location} returns this
 */
proto.treeleaf.anydone.entities.Location.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional float latitude = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Location.prototype.getLatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Location} returns this
 */
proto.treeleaf.anydone.entities.Location.prototype.setLatitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float longitude = 4;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Location.prototype.getLongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Location} returns this
 */
proto.treeleaf.anydone.entities.Location.prototype.setLongitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional LocationType locationType = 5;
 * @return {!proto.treeleaf.anydone.entities.LocationType}
 */
proto.treeleaf.anydone.entities.Location.prototype.getLocationtype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.LocationType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.LocationType} value
 * @return {!proto.treeleaf.anydone.entities.Location} returns this
 */
proto.treeleaf.anydone.entities.Location.prototype.setLocationtype = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional bool isDefault = 6;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Location.prototype.getIsdefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.Location} returns this
 */
proto.treeleaf.anydone.entities.Location.prototype.setIsdefault = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.Customer.repeatedFields_ = [22];



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
proto.treeleaf.anydone.entities.Customer.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.Customer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.Customer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Customer.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fullname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 3, ""),
    email: jspb.Message.getFieldWithDefault(msg, 4, ""),
    profilepic: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createdby: jspb.Message.getFieldWithDefault(msg, 6, ""),
    createdbybot: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    spaccountid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    source: jspb.Message.getFieldWithDefault(msg, 9, 0),
    customerrefid: jspb.Message.getFieldWithDefault(msg, 10, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 11, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 12, 0),
    devicetype: jspb.Message.getFieldWithDefault(msg, 14, 0),
    deviceos: jspb.Message.getFieldWithDefault(msg, 15, ""),
    osversion: jspb.Message.getFieldWithDefault(msg, 16, ""),
    deviceid: jspb.Message.getFieldWithDefault(msg, 17, ""),
    type: jspb.Message.getFieldWithDefault(msg, 19, 0),
    lastseen: jspb.Message.getFieldWithDefault(msg, 20, 0),
    mappingid: jspb.Message.getFieldWithDefault(msg, 21, ""),
    sessionList: jspb.Message.toObjectList(msg.getSessionList(),
    proto.treeleaf.anydone.entities.CustomerSession.toObject, includeInstance),
    serviceid: jspb.Message.getFieldWithDefault(msg, 23, ""),
    countrycode: jspb.Message.getFieldWithDefault(msg, 24, "")
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
 * @return {!proto.treeleaf.anydone.entities.Customer}
 */
proto.treeleaf.anydone.entities.Customer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.Customer;
  return proto.treeleaf.anydone.entities.Customer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.Customer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.Customer}
 */
proto.treeleaf.anydone.entities.Customer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFullname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfilepic(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedby(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCreatedbybot(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpaccountid(value);
      break;
    case 9:
      var value = /** @type {!proto.treeleaf.anydone.entities.ThirdPartySource} */ (reader.readEnum());
      msg.setSource(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerrefid(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedat(value);
      break;
    case 14:
      var value = /** @type {!proto.treeleaf.protos.DeviceType} */ (reader.readEnum());
      msg.setDevicetype(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceos(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setOsversion(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceid(value);
      break;
    case 19:
      var value = /** @type {!proto.treeleaf.anydone.entities.CustomerAccountType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastseen(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setMappingid(value);
      break;
    case 22:
      var value = new proto.treeleaf.anydone.entities.CustomerSession;
      reader.readMessage(value,proto.treeleaf.anydone.entities.CustomerSession.deserializeBinaryFromReader);
      msg.addSession(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceid(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountrycode(value);
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
proto.treeleaf.anydone.entities.Customer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.Customer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.Customer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Customer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFullname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getProfilepic();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatedby();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCreatedbybot();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getSpaccountid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSource();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getCustomerrefid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getDevicetype();
  if (f !== 0.0) {
    writer.writeEnum(
      14,
      f
    );
  }
  f = message.getDeviceos();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getOsversion();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getDeviceid();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      19,
      f
    );
  }
  f = message.getLastseen();
  if (f !== 0) {
    writer.writeInt64(
      20,
      f
    );
  }
  f = message.getMappingid();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getSessionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      22,
      f,
      proto.treeleaf.anydone.entities.CustomerSession.serializeBinaryToWriter
    );
  }
  f = message.getServiceid();
  if (f.length > 0) {
    writer.writeString(
      23,
      f
    );
  }
  f = message.getCountrycode();
  if (f.length > 0) {
    writer.writeString(
      24,
      f
    );
  }
};


/**
 * optional string customerId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Customer.prototype.getCustomerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Customer} returns this
 */
proto.treeleaf.anydone.entities.Customer.prototype.setCustomerid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string fullName = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Customer.prototype.getFullname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Customer} returns this
 */
proto.treeleaf.anydone.entities.Customer.prototype.setFullname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string phone = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Customer.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Customer} returns this
 */
proto.treeleaf.anydone.entities.Customer.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string email = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Customer.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Customer} returns this
 */
proto.treeleaf.anydone.entities.Customer.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string profilePic = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Customer.prototype.getProfilepic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Customer} returns this
 */
proto.treeleaf.anydone.entities.Customer.prototype.setProfilepic = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string createdBy = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Customer.prototype.getCreatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Customer} returns this
 */
proto.treeleaf.anydone.entities.Customer.prototype.setCreatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool createdByBot = 7;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Customer.prototype.getCreatedbybot = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.Customer} returns this
 */
proto.treeleaf.anydone.entities.Customer.prototype.setCreatedbybot = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional string spAccountId = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Customer.prototype.getSpaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Customer} returns this
 */
proto.treeleaf.anydone.entities.Customer.prototype.setSpaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional ThirdPartySource source = 9;
 * @return {!proto.treeleaf.anydone.entities.ThirdPartySource}
 */
proto.treeleaf.anydone.entities.Customer.prototype.getSource = function() {
  return /** @type {!proto.treeleaf.anydone.entities.ThirdPartySource} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.ThirdPartySource} value
 * @return {!proto.treeleaf.anydone.entities.Customer} returns this
 */
proto.treeleaf.anydone.entities.Customer.prototype.setSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional string customerRefId = 10;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Customer.prototype.getCustomerrefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Customer} returns this
 */
proto.treeleaf.anydone.entities.Customer.prototype.setCustomerrefid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int64 createdAt = 11;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Customer.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Customer} returns this
 */
proto.treeleaf.anydone.entities.Customer.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 updatedAt = 12;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Customer.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Customer} returns this
 */
proto.treeleaf.anydone.entities.Customer.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional treeleaf.protos.DeviceType deviceType = 14;
 * @return {!proto.treeleaf.protos.DeviceType}
 */
proto.treeleaf.anydone.entities.Customer.prototype.getDevicetype = function() {
  return /** @type {!proto.treeleaf.protos.DeviceType} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.treeleaf.protos.DeviceType} value
 * @return {!proto.treeleaf.anydone.entities.Customer} returns this
 */
proto.treeleaf.anydone.entities.Customer.prototype.setDevicetype = function(value) {
  return jspb.Message.setProto3EnumField(this, 14, value);
};


/**
 * optional string deviceOS = 15;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Customer.prototype.getDeviceos = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Customer} returns this
 */
proto.treeleaf.anydone.entities.Customer.prototype.setDeviceos = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string osVersion = 16;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Customer.prototype.getOsversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Customer} returns this
 */
proto.treeleaf.anydone.entities.Customer.prototype.setOsversion = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string deviceId = 17;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Customer.prototype.getDeviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Customer} returns this
 */
proto.treeleaf.anydone.entities.Customer.prototype.setDeviceid = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional CustomerAccountType type = 19;
 * @return {!proto.treeleaf.anydone.entities.CustomerAccountType}
 */
proto.treeleaf.anydone.entities.Customer.prototype.getType = function() {
  return /** @type {!proto.treeleaf.anydone.entities.CustomerAccountType} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.CustomerAccountType} value
 * @return {!proto.treeleaf.anydone.entities.Customer} returns this
 */
proto.treeleaf.anydone.entities.Customer.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 19, value);
};


/**
 * optional int64 lastSeen = 20;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Customer.prototype.getLastseen = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Customer} returns this
 */
proto.treeleaf.anydone.entities.Customer.prototype.setLastseen = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional string mappingId = 21;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Customer.prototype.getMappingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Customer} returns this
 */
proto.treeleaf.anydone.entities.Customer.prototype.setMappingid = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * repeated CustomerSession session = 22;
 * @return {!Array<!proto.treeleaf.anydone.entities.CustomerSession>}
 */
proto.treeleaf.anydone.entities.Customer.prototype.getSessionList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.CustomerSession>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.CustomerSession, 22));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.CustomerSession>} value
 * @return {!proto.treeleaf.anydone.entities.Customer} returns this
*/
proto.treeleaf.anydone.entities.Customer.prototype.setSessionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 22, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.CustomerSession=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.CustomerSession}
 */
proto.treeleaf.anydone.entities.Customer.prototype.addSession = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 22, opt_value, proto.treeleaf.anydone.entities.CustomerSession, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.Customer} returns this
 */
proto.treeleaf.anydone.entities.Customer.prototype.clearSessionList = function() {
  return this.setSessionList([]);
};


/**
 * optional string serviceId = 23;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Customer.prototype.getServiceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Customer} returns this
 */
proto.treeleaf.anydone.entities.Customer.prototype.setServiceid = function(value) {
  return jspb.Message.setProto3StringField(this, 23, value);
};


/**
 * optional string countryCode = 24;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Customer.prototype.getCountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Customer} returns this
 */
proto.treeleaf.anydone.entities.Customer.prototype.setCountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 24, value);
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
proto.treeleaf.anydone.entities.CustomerSession.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.CustomerSession.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.CustomerSession} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.CustomerSession.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    mappingid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    source: jspb.Message.getFieldWithDefault(msg, 3, 0),
    devicetype: jspb.Message.getFieldWithDefault(msg, 4, 0),
    deviceos: jspb.Message.getFieldWithDefault(msg, 5, ""),
    osversion: jspb.Message.getFieldWithDefault(msg, 6, ""),
    deviceid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 8, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 9, 0)
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
 * @return {!proto.treeleaf.anydone.entities.CustomerSession}
 */
proto.treeleaf.anydone.entities.CustomerSession.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.CustomerSession;
  return proto.treeleaf.anydone.entities.CustomerSession.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.CustomerSession} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.CustomerSession}
 */
proto.treeleaf.anydone.entities.CustomerSession.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setMappingid(value);
      break;
    case 3:
      var value = /** @type {!proto.treeleaf.anydone.entities.ThirdPartySource} */ (reader.readEnum());
      msg.setSource(value);
      break;
    case 4:
      var value = /** @type {!proto.treeleaf.protos.DeviceType} */ (reader.readEnum());
      msg.setDevicetype(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceos(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setOsversion(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceid(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 9:
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
proto.treeleaf.anydone.entities.CustomerSession.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.CustomerSession.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.CustomerSession} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.CustomerSession.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMappingid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSource();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getDevicetype();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getDeviceos();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getOsversion();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDeviceid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CustomerSession.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CustomerSession} returns this
 */
proto.treeleaf.anydone.entities.CustomerSession.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string mappingId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CustomerSession.prototype.getMappingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CustomerSession} returns this
 */
proto.treeleaf.anydone.entities.CustomerSession.prototype.setMappingid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ThirdPartySource source = 3;
 * @return {!proto.treeleaf.anydone.entities.ThirdPartySource}
 */
proto.treeleaf.anydone.entities.CustomerSession.prototype.getSource = function() {
  return /** @type {!proto.treeleaf.anydone.entities.ThirdPartySource} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.ThirdPartySource} value
 * @return {!proto.treeleaf.anydone.entities.CustomerSession} returns this
 */
proto.treeleaf.anydone.entities.CustomerSession.prototype.setSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional treeleaf.protos.DeviceType deviceType = 4;
 * @return {!proto.treeleaf.protos.DeviceType}
 */
proto.treeleaf.anydone.entities.CustomerSession.prototype.getDevicetype = function() {
  return /** @type {!proto.treeleaf.protos.DeviceType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.treeleaf.protos.DeviceType} value
 * @return {!proto.treeleaf.anydone.entities.CustomerSession} returns this
 */
proto.treeleaf.anydone.entities.CustomerSession.prototype.setDevicetype = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string deviceOS = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CustomerSession.prototype.getDeviceos = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CustomerSession} returns this
 */
proto.treeleaf.anydone.entities.CustomerSession.prototype.setDeviceos = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string osVersion = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CustomerSession.prototype.getOsversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CustomerSession} returns this
 */
proto.treeleaf.anydone.entities.CustomerSession.prototype.setOsversion = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string deviceId = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CustomerSession.prototype.getDeviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CustomerSession} returns this
 */
proto.treeleaf.anydone.entities.CustomerSession.prototype.setDeviceid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int64 createdAt = 8;
 * @return {number}
 */
proto.treeleaf.anydone.entities.CustomerSession.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.CustomerSession} returns this
 */
proto.treeleaf.anydone.entities.CustomerSession.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 updatedAt = 9;
 * @return {number}
 */
proto.treeleaf.anydone.entities.CustomerSession.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.CustomerSession} returns this
 */
proto.treeleaf.anydone.entities.CustomerSession.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
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
proto.treeleaf.anydone.entities.AnydoneUser.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.AnydoneUser.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.AnydoneUser} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AnydoneUser.toObject = function(includeInstance, msg) {
  var f, obj = {
    anydoneuserid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    account: (f = msg.getAccount()) && proto.treeleaf.anydone.entities.Account.toObject(includeInstance, f),
    createdat: jspb.Message.getFieldWithDefault(msg, 3, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.treeleaf.anydone.entities.AnydoneUser}
 */
proto.treeleaf.anydone.entities.AnydoneUser.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.AnydoneUser;
  return proto.treeleaf.anydone.entities.AnydoneUser.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.AnydoneUser} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.AnydoneUser}
 */
proto.treeleaf.anydone.entities.AnydoneUser.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnydoneuserid(value);
      break;
    case 2:
      var value = new proto.treeleaf.anydone.entities.Account;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Account.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 4:
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
proto.treeleaf.anydone.entities.AnydoneUser.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.AnydoneUser.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.AnydoneUser} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AnydoneUser.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnydoneuserid();
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
      proto.treeleaf.anydone.entities.Account.serializeBinaryToWriter
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string anydoneUserId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AnydoneUser.prototype.getAnydoneuserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AnydoneUser} returns this
 */
proto.treeleaf.anydone.entities.AnydoneUser.prototype.setAnydoneuserid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Account account = 2;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.AnydoneUser.prototype.getAccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.Account, 2));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.AnydoneUser} returns this
*/
proto.treeleaf.anydone.entities.AnydoneUser.prototype.setAccount = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.AnydoneUser} returns this
 */
proto.treeleaf.anydone.entities.AnydoneUser.prototype.clearAccount = function() {
  return this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.AnydoneUser.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 createdAt = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.AnydoneUser.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.AnydoneUser} returns this
 */
proto.treeleaf.anydone.entities.AnydoneUser.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 updatedAt = 4;
 * @return {number}
 */
proto.treeleaf.anydone.entities.AnydoneUser.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.AnydoneUser} returns this
 */
proto.treeleaf.anydone.entities.AnydoneUser.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.UserFilter.repeatedFields_ = [3];



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
proto.treeleaf.anydone.entities.UserFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.UserFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.UserFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.UserFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataquery: (f = msg.getDataquery()) && treeleaf_pb.DataQuery.toObject(includeInstance, f),
    query: jspb.Message.getFieldWithDefault(msg, 2, ""),
    idsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    spaccountid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    serviceid: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.treeleaf.anydone.entities.UserFilter}
 */
proto.treeleaf.anydone.entities.UserFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.UserFilter;
  return proto.treeleaf.anydone.entities.UserFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.UserFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.UserFilter}
 */
proto.treeleaf.anydone.entities.UserFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new treeleaf_pb.DataQuery;
      reader.readMessage(value,treeleaf_pb.DataQuery.deserializeBinaryFromReader);
      msg.setDataquery(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addIds(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpaccountid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceid(value);
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
proto.treeleaf.anydone.entities.UserFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.UserFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.UserFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.UserFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataquery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      treeleaf_pb.DataQuery.serializeBinaryToWriter
    );
  }
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getSpaccountid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getServiceid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional treeleaf.protos.DataQuery dataQuery = 1;
 * @return {?proto.treeleaf.protos.DataQuery}
 */
proto.treeleaf.anydone.entities.UserFilter.prototype.getDataquery = function() {
  return /** @type{?proto.treeleaf.protos.DataQuery} */ (
    jspb.Message.getWrapperField(this, treeleaf_pb.DataQuery, 1));
};


/**
 * @param {?proto.treeleaf.protos.DataQuery|undefined} value
 * @return {!proto.treeleaf.anydone.entities.UserFilter} returns this
*/
proto.treeleaf.anydone.entities.UserFilter.prototype.setDataquery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.UserFilter} returns this
 */
proto.treeleaf.anydone.entities.UserFilter.prototype.clearDataquery = function() {
  return this.setDataquery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.UserFilter.prototype.hasDataquery = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string query = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.UserFilter.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.UserFilter} returns this
 */
proto.treeleaf.anydone.entities.UserFilter.prototype.setQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string ids = 3;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.UserFilter.prototype.getIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.UserFilter} returns this
 */
proto.treeleaf.anydone.entities.UserFilter.prototype.setIdsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.UserFilter} returns this
 */
proto.treeleaf.anydone.entities.UserFilter.prototype.addIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.UserFilter} returns this
 */
proto.treeleaf.anydone.entities.UserFilter.prototype.clearIdsList = function() {
  return this.setIdsList([]);
};


/**
 * optional string spAccountId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.UserFilter.prototype.getSpaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.UserFilter} returns this
 */
proto.treeleaf.anydone.entities.UserFilter.prototype.setSpaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string serviceId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.UserFilter.prototype.getServiceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.UserFilter} returns this
 */
proto.treeleaf.anydone.entities.UserFilter.prototype.setServiceid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.treeleaf.anydone.entities.ContactFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.ContactFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.ContactFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ContactFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    contactfilterid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    contactfiltername: jspb.Message.getFieldWithDefault(msg, 2, ""),
    spaccountid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isdefault: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    contactfilterquery: (f = msg.getContactfilterquery()) && proto.treeleaf.anydone.entities.ContactFilterQuery.toObject(includeInstance, f),
    createdat: jspb.Message.getFieldWithDefault(msg, 6, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 7, 0),
    serviceid: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.treeleaf.anydone.entities.ContactFilter}
 */
proto.treeleaf.anydone.entities.ContactFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.ContactFilter;
  return proto.treeleaf.anydone.entities.ContactFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.ContactFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.ContactFilter}
 */
proto.treeleaf.anydone.entities.ContactFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContactfilterid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContactfiltername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpaccountid(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsdefault(value);
      break;
    case 5:
      var value = new proto.treeleaf.anydone.entities.ContactFilterQuery;
      reader.readMessage(value,proto.treeleaf.anydone.entities.ContactFilterQuery.deserializeBinaryFromReader);
      msg.setContactfilterquery(value);
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
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceid(value);
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
proto.treeleaf.anydone.entities.ContactFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.ContactFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.ContactFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ContactFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContactfilterid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContactfiltername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSpaccountid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsdefault();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getContactfilterquery();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.treeleaf.anydone.entities.ContactFilterQuery.serializeBinaryToWriter
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
  f = message.getServiceid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string contactFilterId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ContactFilter.prototype.getContactfilterid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ContactFilter} returns this
 */
proto.treeleaf.anydone.entities.ContactFilter.prototype.setContactfilterid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string contactFilterName = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ContactFilter.prototype.getContactfiltername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ContactFilter} returns this
 */
proto.treeleaf.anydone.entities.ContactFilter.prototype.setContactfiltername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string spAccountId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ContactFilter.prototype.getSpaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ContactFilter} returns this
 */
proto.treeleaf.anydone.entities.ContactFilter.prototype.setSpaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool isDefault = 4;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.ContactFilter.prototype.getIsdefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.ContactFilter} returns this
 */
proto.treeleaf.anydone.entities.ContactFilter.prototype.setIsdefault = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional ContactFilterQuery contactFilterQuery = 5;
 * @return {?proto.treeleaf.anydone.entities.ContactFilterQuery}
 */
proto.treeleaf.anydone.entities.ContactFilter.prototype.getContactfilterquery = function() {
  return /** @type{?proto.treeleaf.anydone.entities.ContactFilterQuery} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.ContactFilterQuery, 5));
};


/**
 * @param {?proto.treeleaf.anydone.entities.ContactFilterQuery|undefined} value
 * @return {!proto.treeleaf.anydone.entities.ContactFilter} returns this
*/
proto.treeleaf.anydone.entities.ContactFilter.prototype.setContactfilterquery = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.ContactFilter} returns this
 */
proto.treeleaf.anydone.entities.ContactFilter.prototype.clearContactfilterquery = function() {
  return this.setContactfilterquery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.ContactFilter.prototype.hasContactfilterquery = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int64 createdAt = 6;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ContactFilter.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ContactFilter} returns this
 */
proto.treeleaf.anydone.entities.ContactFilter.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 updatedAt = 7;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ContactFilter.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ContactFilter} returns this
 */
proto.treeleaf.anydone.entities.ContactFilter.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string serviceId = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ContactFilter.prototype.getServiceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ContactFilter} returns this
 */
proto.treeleaf.anydone.entities.ContactFilter.prototype.setServiceid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.ContactFilterQuery.repeatedFields_ = [3,4,5,6];



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
proto.treeleaf.anydone.entities.ContactFilterQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.ContactFilterQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.ContactFilterQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ContactFilterQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dataquery: (f = msg.getDataquery()) && treeleaf_pb.DataQuery.toObject(includeInstance, f),
    joineddatefiltersList: jspb.Message.toObjectList(msg.getJoineddatefiltersList(),
    proto.treeleaf.anydone.entities.JoinedDateFilter.toObject, includeInstance),
    lastseenfiltersList: jspb.Message.toObjectList(msg.getLastseenfiltersList(),
    proto.treeleaf.anydone.entities.JoinedDateFilter.toObject, includeInstance),
    contacttypefiltersList: jspb.Message.toObjectList(msg.getContacttypefiltersList(),
    proto.treeleaf.anydone.entities.ContactTypeFilter.toObject, includeInstance),
    devicetypefiltersList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f
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
 * @return {!proto.treeleaf.anydone.entities.ContactFilterQuery}
 */
proto.treeleaf.anydone.entities.ContactFilterQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.ContactFilterQuery;
  return proto.treeleaf.anydone.entities.ContactFilterQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.ContactFilterQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.ContactFilterQuery}
 */
proto.treeleaf.anydone.entities.ContactFilterQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    case 2:
      var value = new treeleaf_pb.DataQuery;
      reader.readMessage(value,treeleaf_pb.DataQuery.deserializeBinaryFromReader);
      msg.setDataquery(value);
      break;
    case 3:
      var value = new proto.treeleaf.anydone.entities.JoinedDateFilter;
      reader.readMessage(value,proto.treeleaf.anydone.entities.JoinedDateFilter.deserializeBinaryFromReader);
      msg.addJoineddatefilters(value);
      break;
    case 4:
      var value = new proto.treeleaf.anydone.entities.JoinedDateFilter;
      reader.readMessage(value,proto.treeleaf.anydone.entities.JoinedDateFilter.deserializeBinaryFromReader);
      msg.addLastseenfilters(value);
      break;
    case 5:
      var value = new proto.treeleaf.anydone.entities.ContactTypeFilter;
      reader.readMessage(value,proto.treeleaf.anydone.entities.ContactTypeFilter.deserializeBinaryFromReader);
      msg.addContacttypefilters(value);
      break;
    case 6:
      var values = /** @type {!Array<!proto.treeleaf.anydone.entities.DeviceTypeFilter>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDevicetypefilters(values[i]);
      }
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
proto.treeleaf.anydone.entities.ContactFilterQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.ContactFilterQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.ContactFilterQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ContactFilterQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDataquery();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      treeleaf_pb.DataQuery.serializeBinaryToWriter
    );
  }
  f = message.getJoineddatefiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.treeleaf.anydone.entities.JoinedDateFilter.serializeBinaryToWriter
    );
  }
  f = message.getLastseenfiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.treeleaf.anydone.entities.JoinedDateFilter.serializeBinaryToWriter
    );
  }
  f = message.getContacttypefiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.treeleaf.anydone.entities.ContactTypeFilter.serializeBinaryToWriter
    );
  }
  f = message.getDevicetypefiltersList();
  if (f.length > 0) {
    writer.writePackedEnum(
      6,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ContactFilterQuery.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ContactFilterQuery} returns this
 */
proto.treeleaf.anydone.entities.ContactFilterQuery.prototype.setQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional treeleaf.protos.DataQuery dataQuery = 2;
 * @return {?proto.treeleaf.protos.DataQuery}
 */
proto.treeleaf.anydone.entities.ContactFilterQuery.prototype.getDataquery = function() {
  return /** @type{?proto.treeleaf.protos.DataQuery} */ (
    jspb.Message.getWrapperField(this, treeleaf_pb.DataQuery, 2));
};


/**
 * @param {?proto.treeleaf.protos.DataQuery|undefined} value
 * @return {!proto.treeleaf.anydone.entities.ContactFilterQuery} returns this
*/
proto.treeleaf.anydone.entities.ContactFilterQuery.prototype.setDataquery = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.ContactFilterQuery} returns this
 */
proto.treeleaf.anydone.entities.ContactFilterQuery.prototype.clearDataquery = function() {
  return this.setDataquery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.ContactFilterQuery.prototype.hasDataquery = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated JoinedDateFilter joinedDateFilters = 3;
 * @return {!Array<!proto.treeleaf.anydone.entities.JoinedDateFilter>}
 */
proto.treeleaf.anydone.entities.ContactFilterQuery.prototype.getJoineddatefiltersList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.JoinedDateFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.JoinedDateFilter, 3));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.JoinedDateFilter>} value
 * @return {!proto.treeleaf.anydone.entities.ContactFilterQuery} returns this
*/
proto.treeleaf.anydone.entities.ContactFilterQuery.prototype.setJoineddatefiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.JoinedDateFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.JoinedDateFilter}
 */
proto.treeleaf.anydone.entities.ContactFilterQuery.prototype.addJoineddatefilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.treeleaf.anydone.entities.JoinedDateFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.ContactFilterQuery} returns this
 */
proto.treeleaf.anydone.entities.ContactFilterQuery.prototype.clearJoineddatefiltersList = function() {
  return this.setJoineddatefiltersList([]);
};


/**
 * repeated JoinedDateFilter lastSeenFilters = 4;
 * @return {!Array<!proto.treeleaf.anydone.entities.JoinedDateFilter>}
 */
proto.treeleaf.anydone.entities.ContactFilterQuery.prototype.getLastseenfiltersList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.JoinedDateFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.JoinedDateFilter, 4));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.JoinedDateFilter>} value
 * @return {!proto.treeleaf.anydone.entities.ContactFilterQuery} returns this
*/
proto.treeleaf.anydone.entities.ContactFilterQuery.prototype.setLastseenfiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.JoinedDateFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.JoinedDateFilter}
 */
proto.treeleaf.anydone.entities.ContactFilterQuery.prototype.addLastseenfilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.treeleaf.anydone.entities.JoinedDateFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.ContactFilterQuery} returns this
 */
proto.treeleaf.anydone.entities.ContactFilterQuery.prototype.clearLastseenfiltersList = function() {
  return this.setLastseenfiltersList([]);
};


/**
 * repeated ContactTypeFilter contactTypeFilters = 5;
 * @return {!Array<!proto.treeleaf.anydone.entities.ContactTypeFilter>}
 */
proto.treeleaf.anydone.entities.ContactFilterQuery.prototype.getContacttypefiltersList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.ContactTypeFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.ContactTypeFilter, 5));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.ContactTypeFilter>} value
 * @return {!proto.treeleaf.anydone.entities.ContactFilterQuery} returns this
*/
proto.treeleaf.anydone.entities.ContactFilterQuery.prototype.setContacttypefiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.ContactTypeFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.ContactTypeFilter}
 */
proto.treeleaf.anydone.entities.ContactFilterQuery.prototype.addContacttypefilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.treeleaf.anydone.entities.ContactTypeFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.ContactFilterQuery} returns this
 */
proto.treeleaf.anydone.entities.ContactFilterQuery.prototype.clearContacttypefiltersList = function() {
  return this.setContacttypefiltersList([]);
};


/**
 * repeated DeviceTypeFilter deviceTypeFilters = 6;
 * @return {!Array<!proto.treeleaf.anydone.entities.DeviceTypeFilter>}
 */
proto.treeleaf.anydone.entities.ContactFilterQuery.prototype.getDevicetypefiltersList = function() {
  return /** @type {!Array<!proto.treeleaf.anydone.entities.DeviceTypeFilter>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.DeviceTypeFilter>} value
 * @return {!proto.treeleaf.anydone.entities.ContactFilterQuery} returns this
 */
proto.treeleaf.anydone.entities.ContactFilterQuery.prototype.setDevicetypefiltersList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {!proto.treeleaf.anydone.entities.DeviceTypeFilter} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.ContactFilterQuery} returns this
 */
proto.treeleaf.anydone.entities.ContactFilterQuery.prototype.addDevicetypefilters = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.ContactFilterQuery} returns this
 */
proto.treeleaf.anydone.entities.ContactFilterQuery.prototype.clearDevicetypefiltersList = function() {
  return this.setDevicetypefiltersList([]);
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
proto.treeleaf.anydone.entities.JoinedDateFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.JoinedDateFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.JoinedDateFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.JoinedDateFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    relative: jspb.Message.getFieldWithDefault(msg, 1, 0),
    relativejoineddaysvalue: jspb.Message.getFieldWithDefault(msg, 2, 0),
    absolute: jspb.Message.getFieldWithDefault(msg, 3, 0),
    absolutejoineddatevalue: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.treeleaf.anydone.entities.JoinedDateFilter}
 */
proto.treeleaf.anydone.entities.JoinedDateFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.JoinedDateFilter;
  return proto.treeleaf.anydone.entities.JoinedDateFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.JoinedDateFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.JoinedDateFilter}
 */
proto.treeleaf.anydone.entities.JoinedDateFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.treeleaf.anydone.entities.JoinedDateFilter.RelativeJoinedDaysEnum} */ (reader.readEnum());
      msg.setRelative(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRelativejoineddaysvalue(value);
      break;
    case 3:
      var value = /** @type {!proto.treeleaf.anydone.entities.JoinedDateFilter.AbsoluteJoinedDateEnum} */ (reader.readEnum());
      msg.setAbsolute(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAbsolutejoineddatevalue(value);
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
proto.treeleaf.anydone.entities.JoinedDateFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.JoinedDateFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.JoinedDateFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.JoinedDateFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRelative();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getRelativejoineddaysvalue();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getAbsolute();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getAbsolutejoineddatevalue();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.JoinedDateFilter.RelativeJoinedDaysEnum = {
  UNKNOWN_RELATIVE: 0,
  MORE_THAN: 1,
  EXACTLY: 2,
  LESS_THAN: 3
};

/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.JoinedDateFilter.AbsoluteJoinedDateEnum = {
  UNKNOWN_ABSOLUTE: 0,
  AFTER: 1,
  ON: 2,
  BEFORE: 3
};

/**
 * optional RelativeJoinedDaysEnum relative = 1;
 * @return {!proto.treeleaf.anydone.entities.JoinedDateFilter.RelativeJoinedDaysEnum}
 */
proto.treeleaf.anydone.entities.JoinedDateFilter.prototype.getRelative = function() {
  return /** @type {!proto.treeleaf.anydone.entities.JoinedDateFilter.RelativeJoinedDaysEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.JoinedDateFilter.RelativeJoinedDaysEnum} value
 * @return {!proto.treeleaf.anydone.entities.JoinedDateFilter} returns this
 */
proto.treeleaf.anydone.entities.JoinedDateFilter.prototype.setRelative = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 relativeJoinedDaysvalue = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.JoinedDateFilter.prototype.getRelativejoineddaysvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.JoinedDateFilter} returns this
 */
proto.treeleaf.anydone.entities.JoinedDateFilter.prototype.setRelativejoineddaysvalue = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional AbsoluteJoinedDateEnum absolute = 3;
 * @return {!proto.treeleaf.anydone.entities.JoinedDateFilter.AbsoluteJoinedDateEnum}
 */
proto.treeleaf.anydone.entities.JoinedDateFilter.prototype.getAbsolute = function() {
  return /** @type {!proto.treeleaf.anydone.entities.JoinedDateFilter.AbsoluteJoinedDateEnum} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.JoinedDateFilter.AbsoluteJoinedDateEnum} value
 * @return {!proto.treeleaf.anydone.entities.JoinedDateFilter} returns this
 */
proto.treeleaf.anydone.entities.JoinedDateFilter.prototype.setAbsolute = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int64 AbsoluteJoinedDateValue = 4;
 * @return {number}
 */
proto.treeleaf.anydone.entities.JoinedDateFilter.prototype.getAbsolutejoineddatevalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.JoinedDateFilter} returns this
 */
proto.treeleaf.anydone.entities.JoinedDateFilter.prototype.setAbsolutejoineddatevalue = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.treeleaf.anydone.entities.ContactTypeFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.ContactTypeFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.ContactTypeFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ContactTypeFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    contacttype: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.treeleaf.anydone.entities.ContactTypeFilter}
 */
proto.treeleaf.anydone.entities.ContactTypeFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.ContactTypeFilter;
  return proto.treeleaf.anydone.entities.ContactTypeFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.ContactTypeFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.ContactTypeFilter}
 */
proto.treeleaf.anydone.entities.ContactTypeFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.treeleaf.anydone.entities.ContactTypeFilter.ContactTypeEnum} */ (reader.readEnum());
      msg.setContacttype(value);
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
proto.treeleaf.anydone.entities.ContactTypeFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.ContactTypeFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.ContactTypeFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ContactTypeFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContacttype();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.ContactTypeFilter.ContactTypeEnum = {
  UNKNOWN_CONTACT_TYPE: 0,
  ALL_USERS: 1,
  ALL_LEADS: 2,
  NEW: 3,
  ACTIVE: 4,
  SLIPPING_AWAY: 5
};

/**
 * optional ContactTypeEnum contactType = 1;
 * @return {!proto.treeleaf.anydone.entities.ContactTypeFilter.ContactTypeEnum}
 */
proto.treeleaf.anydone.entities.ContactTypeFilter.prototype.getContacttype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.ContactTypeFilter.ContactTypeEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.ContactTypeFilter.ContactTypeEnum} value
 * @return {!proto.treeleaf.anydone.entities.ContactTypeFilter} returns this
 */
proto.treeleaf.anydone.entities.ContactTypeFilter.prototype.setContacttype = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.ImportUserRequest.repeatedFields_ = [1];



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
proto.treeleaf.anydone.entities.ImportUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.ImportUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.ImportUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ImportUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    fileurl: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    serviceid: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.treeleaf.anydone.entities.ImportUserRequest}
 */
proto.treeleaf.anydone.entities.ImportUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.ImportUserRequest;
  return proto.treeleaf.anydone.entities.ImportUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.ImportUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.ImportUserRequest}
 */
proto.treeleaf.anydone.entities.ImportUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.treeleaf.anydone.entities.ImportUserRequest.Field>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addFields(values[i]);
      }
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileurl(value);
      break;
    case 3:
      var value = /** @type {!proto.treeleaf.anydone.entities.CustomerAccountType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceid(value);
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
proto.treeleaf.anydone.entities.ImportUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.ImportUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.ImportUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ImportUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
  f = message.getFileurl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getServiceid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.ImportUserRequest.Field = {
  IGNORED: 0,
  NAME: 1,
  EMAIL: 2,
  PHONE: 3,
  PIC: 4,
  REF_ID: 5
};

/**
 * repeated Field fields = 1;
 * @return {!Array<!proto.treeleaf.anydone.entities.ImportUserRequest.Field>}
 */
proto.treeleaf.anydone.entities.ImportUserRequest.prototype.getFieldsList = function() {
  return /** @type {!Array<!proto.treeleaf.anydone.entities.ImportUserRequest.Field>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.ImportUserRequest.Field>} value
 * @return {!proto.treeleaf.anydone.entities.ImportUserRequest} returns this
 */
proto.treeleaf.anydone.entities.ImportUserRequest.prototype.setFieldsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.treeleaf.anydone.entities.ImportUserRequest.Field} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.ImportUserRequest} returns this
 */
proto.treeleaf.anydone.entities.ImportUserRequest.prototype.addFields = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.ImportUserRequest} returns this
 */
proto.treeleaf.anydone.entities.ImportUserRequest.prototype.clearFieldsList = function() {
  return this.setFieldsList([]);
};


/**
 * optional string fileUrl = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ImportUserRequest.prototype.getFileurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ImportUserRequest} returns this
 */
proto.treeleaf.anydone.entities.ImportUserRequest.prototype.setFileurl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional CustomerAccountType type = 3;
 * @return {!proto.treeleaf.anydone.entities.CustomerAccountType}
 */
proto.treeleaf.anydone.entities.ImportUserRequest.prototype.getType = function() {
  return /** @type {!proto.treeleaf.anydone.entities.CustomerAccountType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.CustomerAccountType} value
 * @return {!proto.treeleaf.anydone.entities.ImportUserRequest} returns this
 */
proto.treeleaf.anydone.entities.ImportUserRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string serviceId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ImportUserRequest.prototype.getServiceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ImportUserRequest} returns this
 */
proto.treeleaf.anydone.entities.ImportUserRequest.prototype.setServiceid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.treeleaf.anydone.entities.ImportUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.ImportUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.ImportUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ImportUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rowsfound: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rowsinserted: jspb.Message.getFieldWithDefault(msg, 2, 0),
    rowsupdated: jspb.Message.getFieldWithDefault(msg, 3, 0),
    rowsdiscarded: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.treeleaf.anydone.entities.ImportUserResponse}
 */
proto.treeleaf.anydone.entities.ImportUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.ImportUserResponse;
  return proto.treeleaf.anydone.entities.ImportUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.ImportUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.ImportUserResponse}
 */
proto.treeleaf.anydone.entities.ImportUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRowsfound(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRowsinserted(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRowsupdated(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRowsdiscarded(value);
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
proto.treeleaf.anydone.entities.ImportUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.ImportUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.ImportUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ImportUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRowsfound();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRowsinserted();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getRowsupdated();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getRowsdiscarded();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 rowsFound = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ImportUserResponse.prototype.getRowsfound = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ImportUserResponse} returns this
 */
proto.treeleaf.anydone.entities.ImportUserResponse.prototype.setRowsfound = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 rowsInserted = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ImportUserResponse.prototype.getRowsinserted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ImportUserResponse} returns this
 */
proto.treeleaf.anydone.entities.ImportUserResponse.prototype.setRowsinserted = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 rowsUpdated = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ImportUserResponse.prototype.getRowsupdated = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ImportUserResponse} returns this
 */
proto.treeleaf.anydone.entities.ImportUserResponse.prototype.setRowsupdated = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 rowsDiscarded = 4;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ImportUserResponse.prototype.getRowsdiscarded = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ImportUserResponse} returns this
 */
proto.treeleaf.anydone.entities.ImportUserResponse.prototype.setRowsdiscarded = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.treeleaf.anydone.entities.UserStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.UserStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.UserStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.UserStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    statustext: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clearafter: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timeslot: jspb.Message.getFieldWithDefault(msg, 3, 0),
    emoji: jspb.Message.getFieldWithDefault(msg, 4, ""),
    accountid: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.treeleaf.anydone.entities.UserStatus}
 */
proto.treeleaf.anydone.entities.UserStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.UserStatus;
  return proto.treeleaf.anydone.entities.UserStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.UserStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.UserStatus}
 */
proto.treeleaf.anydone.entities.UserStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatustext(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setClearafter(value);
      break;
    case 3:
      var value = /** @type {!proto.treeleaf.anydone.entities.UserStatus.TimeSlot} */ (reader.readEnum());
      msg.setTimeslot(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmoji(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountid(value);
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
proto.treeleaf.anydone.entities.UserStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.UserStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.UserStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.UserStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatustext();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClearafter();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTimeslot();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getEmoji();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAccountid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.UserStatus.TimeSlot = {
  UNKNOWN_SLOT: 0,
  THIRTY_MINUTE: 1,
  ONE_HOUR: 2,
  TODAY: 3,
  THIS_WEEK: 4,
  CUSTOM_SLOT: 5,
  DONT_CLEAR: 6
};

/**
 * optional string statusText = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.UserStatus.prototype.getStatustext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.UserStatus} returns this
 */
proto.treeleaf.anydone.entities.UserStatus.prototype.setStatustext = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 clearAfter = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.UserStatus.prototype.getClearafter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.UserStatus} returns this
 */
proto.treeleaf.anydone.entities.UserStatus.prototype.setClearafter = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional TimeSlot timeSlot = 3;
 * @return {!proto.treeleaf.anydone.entities.UserStatus.TimeSlot}
 */
proto.treeleaf.anydone.entities.UserStatus.prototype.getTimeslot = function() {
  return /** @type {!proto.treeleaf.anydone.entities.UserStatus.TimeSlot} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.UserStatus.TimeSlot} value
 * @return {!proto.treeleaf.anydone.entities.UserStatus} returns this
 */
proto.treeleaf.anydone.entities.UserStatus.prototype.setTimeslot = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string emoji = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.UserStatus.prototype.getEmoji = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.UserStatus} returns this
 */
proto.treeleaf.anydone.entities.UserStatus.prototype.setEmoji = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string accountId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.UserStatus.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.UserStatus} returns this
 */
proto.treeleaf.anydone.entities.UserStatus.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.treeleaf.anydone.entities.EmployeeInvitation.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.EmployeeInvitation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.EmployeeInvitation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.EmployeeInvitation.toObject = function(includeInstance, msg) {
  var f, obj = {
    employeeaccountid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    spaccountid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0),
    email: jspb.Message.getFieldWithDefault(msg, 4, ""),
    fullname: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.treeleaf.anydone.entities.EmployeeInvitation}
 */
proto.treeleaf.anydone.entities.EmployeeInvitation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.EmployeeInvitation;
  return proto.treeleaf.anydone.entities.EmployeeInvitation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.EmployeeInvitation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.EmployeeInvitation}
 */
proto.treeleaf.anydone.entities.EmployeeInvitation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmployeeaccountid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpaccountid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFullname(value);
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
proto.treeleaf.anydone.entities.EmployeeInvitation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.EmployeeInvitation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.EmployeeInvitation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.EmployeeInvitation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmployeeaccountid();
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
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFullname();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string employeeAccountId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.EmployeeInvitation.prototype.getEmployeeaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeInvitation} returns this
 */
proto.treeleaf.anydone.entities.EmployeeInvitation.prototype.setEmployeeaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string spAccountId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.EmployeeInvitation.prototype.getSpaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeInvitation} returns this
 */
proto.treeleaf.anydone.entities.EmployeeInvitation.prototype.setSpaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.EmployeeInvitation.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeInvitation} returns this
 */
proto.treeleaf.anydone.entities.EmployeeInvitation.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string email = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.EmployeeInvitation.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeInvitation} returns this
 */
proto.treeleaf.anydone.entities.EmployeeInvitation.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string fullName = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.EmployeeInvitation.prototype.getFullname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.EmployeeInvitation} returns this
 */
proto.treeleaf.anydone.entities.EmployeeInvitation.prototype.setFullname = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.repeatedFields_ = [4,5,7];



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
proto.treeleaf.anydone.entities.AddGuestUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.AddGuestUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.AddGuestUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: (f = msg.getAccount()) && proto.treeleaf.anydone.entities.Account.toObject(includeInstance, f),
    fullname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    until: jspb.Message.getFieldWithDefault(msg, 3, 0),
    inboxgroupidList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    projectList: jspb.Message.toObjectList(msg.getProjectList(),
    proto.treeleaf.anydone.entities.AddGuestUserRequest.Project.toObject, includeInstance),
    clientdetail: (f = msg.getClientdetail()) && treeleaf_pb.ClientDetail.toObject(includeInstance, f),
    permissionList: jspb.Message.toObjectList(msg.getPermissionList(),
    proto.treeleaf.anydone.entities.Permission.toObject, includeInstance)
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
 * @return {!proto.treeleaf.anydone.entities.AddGuestUserRequest}
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.AddGuestUserRequest;
  return proto.treeleaf.anydone.entities.AddGuestUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.AddGuestUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.AddGuestUserRequest}
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.Account;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Account.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFullname(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUntil(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addInboxgroupid(value);
      break;
    case 5:
      var value = new proto.treeleaf.anydone.entities.AddGuestUserRequest.Project;
      reader.readMessage(value,proto.treeleaf.anydone.entities.AddGuestUserRequest.Project.deserializeBinaryFromReader);
      msg.addProject(value);
      break;
    case 6:
      var value = new treeleaf_pb.ClientDetail;
      reader.readMessage(value,treeleaf_pb.ClientDetail.deserializeBinaryFromReader);
      msg.setClientdetail(value);
      break;
    case 7:
      var value = new proto.treeleaf.anydone.entities.Permission;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Permission.deserializeBinaryFromReader);
      msg.addPermission(value);
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
proto.treeleaf.anydone.entities.AddGuestUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.AddGuestUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.AddGuestUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.Account.serializeBinaryToWriter
    );
  }
  f = message.getFullname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUntil();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getInboxgroupidList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getProjectList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.treeleaf.anydone.entities.AddGuestUserRequest.Project.serializeBinaryToWriter
    );
  }
  f = message.getClientdetail();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      treeleaf_pb.ClientDetail.serializeBinaryToWriter
    );
  }
  f = message.getPermissionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.treeleaf.anydone.entities.Permission.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.Project.repeatedFields_ = [2];



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
proto.treeleaf.anydone.entities.AddGuestUserRequest.Project.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.AddGuestUserRequest.Project.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.AddGuestUserRequest.Project} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.Project.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    permissionList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.treeleaf.anydone.entities.AddGuestUserRequest.Project}
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.Project.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.AddGuestUserRequest.Project;
  return proto.treeleaf.anydone.entities.AddGuestUserRequest.Project.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.AddGuestUserRequest.Project} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.AddGuestUserRequest.Project}
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.Project.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addPermission(value);
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
proto.treeleaf.anydone.entities.AddGuestUserRequest.Project.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.AddGuestUserRequest.Project.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.AddGuestUserRequest.Project} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.Project.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPermissionList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string projectId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.Project.prototype.getProjectid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AddGuestUserRequest.Project} returns this
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.Project.prototype.setProjectid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string permission = 2;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.Project.prototype.getPermissionList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.AddGuestUserRequest.Project} returns this
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.Project.prototype.setPermissionList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.AddGuestUserRequest.Project} returns this
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.Project.prototype.addPermission = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.AddGuestUserRequest.Project} returns this
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.Project.prototype.clearPermissionList = function() {
  return this.setPermissionList([]);
};


/**
 * optional Account account = 1;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.prototype.getAccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.Account, 1));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.AddGuestUserRequest} returns this
*/
proto.treeleaf.anydone.entities.AddGuestUserRequest.prototype.setAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.AddGuestUserRequest} returns this
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.prototype.clearAccount = function() {
  return this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string fullName = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.prototype.getFullname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AddGuestUserRequest} returns this
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.prototype.setFullname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 until = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.prototype.getUntil = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.AddGuestUserRequest} returns this
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.prototype.setUntil = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated string inboxGroupId = 4;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.prototype.getInboxgroupidList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.AddGuestUserRequest} returns this
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.prototype.setInboxgroupidList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.AddGuestUserRequest} returns this
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.prototype.addInboxgroupid = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.AddGuestUserRequest} returns this
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.prototype.clearInboxgroupidList = function() {
  return this.setInboxgroupidList([]);
};


/**
 * repeated Project project = 5;
 * @return {!Array<!proto.treeleaf.anydone.entities.AddGuestUserRequest.Project>}
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.prototype.getProjectList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.AddGuestUserRequest.Project>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.AddGuestUserRequest.Project, 5));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.AddGuestUserRequest.Project>} value
 * @return {!proto.treeleaf.anydone.entities.AddGuestUserRequest} returns this
*/
proto.treeleaf.anydone.entities.AddGuestUserRequest.prototype.setProjectList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.AddGuestUserRequest.Project=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.AddGuestUserRequest.Project}
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.prototype.addProject = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.treeleaf.anydone.entities.AddGuestUserRequest.Project, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.AddGuestUserRequest} returns this
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.prototype.clearProjectList = function() {
  return this.setProjectList([]);
};


/**
 * optional treeleaf.protos.ClientDetail clientDetail = 6;
 * @return {?proto.treeleaf.protos.ClientDetail}
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.prototype.getClientdetail = function() {
  return /** @type{?proto.treeleaf.protos.ClientDetail} */ (
    jspb.Message.getWrapperField(this, treeleaf_pb.ClientDetail, 6));
};


/**
 * @param {?proto.treeleaf.protos.ClientDetail|undefined} value
 * @return {!proto.treeleaf.anydone.entities.AddGuestUserRequest} returns this
*/
proto.treeleaf.anydone.entities.AddGuestUserRequest.prototype.setClientdetail = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.AddGuestUserRequest} returns this
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.prototype.clearClientdetail = function() {
  return this.setClientdetail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.prototype.hasClientdetail = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated Permission Permission = 7;
 * @return {!Array<!proto.treeleaf.anydone.entities.Permission>}
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.prototype.getPermissionList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.Permission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.Permission, 7));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.Permission>} value
 * @return {!proto.treeleaf.anydone.entities.AddGuestUserRequest} returns this
*/
proto.treeleaf.anydone.entities.AddGuestUserRequest.prototype.setPermissionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.Permission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.Permission}
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.prototype.addPermission = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.treeleaf.anydone.entities.Permission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.AddGuestUserRequest} returns this
 */
proto.treeleaf.anydone.entities.AddGuestUserRequest.prototype.clearPermissionList = function() {
  return this.setPermissionList([]);
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
proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.DeleteWorkspaceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    workspacename: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userpassword: jspb.Message.getFieldWithDefault(msg, 2, ""),
    acceptedterms: (f = msg.getAcceptedterms()) && proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms.toObject(includeInstance, f),
    passwordconfirmed: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.treeleaf.anydone.entities.DeleteWorkspaceRequest}
 */
proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.DeleteWorkspaceRequest;
  return proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.DeleteWorkspaceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.DeleteWorkspaceRequest}
 */
proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkspacename(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserpassword(value);
      break;
    case 3:
      var value = new proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms;
      reader.readMessage(value,proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms.deserializeBinaryFromReader);
      msg.setAcceptedterms(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPasswordconfirmed(value);
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
proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.DeleteWorkspaceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorkspacename();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserpassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAcceptedterms();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms.serializeBinaryToWriter
    );
  }
  f = message.getPasswordconfirmed();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
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
proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms.toObject = function(includeInstance, msg) {
  var f, obj = {
    deletemessageandapp: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    deleteanydoneapp: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms}
 */
proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms;
  return proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms}
 */
proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeletemessageandapp(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleteanydoneapp(value);
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
proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeletemessageandapp();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getDeleteanydoneapp();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional bool deleteMessageAndApp = 1;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms.prototype.getDeletemessageandapp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms} returns this
 */
proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms.prototype.setDeletemessageandapp = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool deleteAnydoneApp = 2;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms.prototype.getDeleteanydoneapp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms} returns this
 */
proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms.prototype.setDeleteanydoneapp = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string workspaceName = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.prototype.getWorkspacename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DeleteWorkspaceRequest} returns this
 */
proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.prototype.setWorkspacename = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string userPassword = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.prototype.getUserpassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DeleteWorkspaceRequest} returns this
 */
proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.prototype.setUserpassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional AcceptedTerms acceptedTerms = 3;
 * @return {?proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms}
 */
proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.prototype.getAcceptedterms = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms, 3));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.AcceptedTerms|undefined} value
 * @return {!proto.treeleaf.anydone.entities.DeleteWorkspaceRequest} returns this
*/
proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.prototype.setAcceptedterms = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.DeleteWorkspaceRequest} returns this
 */
proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.prototype.clearAcceptedterms = function() {
  return this.setAcceptedterms(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.prototype.hasAcceptedterms = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool passwordConfirmed = 4;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.prototype.getPasswordconfirmed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.DeleteWorkspaceRequest} returns this
 */
proto.treeleaf.anydone.entities.DeleteWorkspaceRequest.prototype.setPasswordconfirmed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
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
proto.treeleaf.anydone.entities.InboxGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.InboxGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.InboxGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.InboxGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    analytics: (f = msg.getAnalytics()) && proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.toObject(includeInstance, f),
    groupid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    groupname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.treeleaf.anydone.entities.InboxGroup}
 */
proto.treeleaf.anydone.entities.InboxGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.InboxGroup;
  return proto.treeleaf.anydone.entities.InboxGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.InboxGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.InboxGroup}
 */
proto.treeleaf.anydone.entities.InboxGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics;
      reader.readMessage(value,proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.deserializeBinaryFromReader);
      msg.setAnalytics(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupname(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
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
proto.treeleaf.anydone.entities.InboxGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.InboxGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.InboxGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.InboxGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnalytics();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.serializeBinaryToWriter
    );
  }
  f = message.getGroupid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGroupname();
  if (f.length > 0) {
    writer.writeString(
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
proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.toObject = function(includeInstance, msg) {
  var f, obj = {
    lastactive: jspb.Message.getFieldWithDefault(msg, 1, 0),
    totalmembers: jspb.Message.getFieldWithDefault(msg, 2, 0),
    fullmembers: jspb.Message.getFieldWithDefault(msg, 3, 0),
    totalguests: jspb.Message.getFieldWithDefault(msg, 4, 0),
    messageposted: jspb.Message.getFieldWithDefault(msg, 5, 0),
    memberswhoposted: jspb.Message.getFieldWithDefault(msg, 6, 0),
    memberswhoviewed: jspb.Message.getFieldWithDefault(msg, 7, 0),
    reactionadded: jspb.Message.getFieldWithDefault(msg, 8, 0),
    memberswhoreacted: jspb.Message.getFieldWithDefault(msg, 9, 0),
    changeinmembersposted: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0)
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
 * @return {!proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics}
 */
proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics;
  return proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics}
 */
proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastactive(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalmembers(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFullmembers(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalguests(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMessageposted(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMemberswhoposted(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMemberswhoviewed(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReactionadded(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMemberswhoreacted(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setChangeinmembersposted(value);
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
proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLastactive();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTotalmembers();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getFullmembers();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTotalguests();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getMessageposted();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getMemberswhoposted();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getMemberswhoviewed();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getReactionadded();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getMemberswhoreacted();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getChangeinmembersposted();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
};


/**
 * optional int64 lastActive = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.prototype.getLastactive = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics} returns this
 */
proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.prototype.setLastactive = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 totalMembers = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.prototype.getTotalmembers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics} returns this
 */
proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.prototype.setTotalmembers = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 fullMembers = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.prototype.getFullmembers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics} returns this
 */
proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.prototype.setFullmembers = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 totalGuests = 4;
 * @return {number}
 */
proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.prototype.getTotalguests = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics} returns this
 */
proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.prototype.setTotalguests = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 messagePosted = 5;
 * @return {number}
 */
proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.prototype.getMessageposted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics} returns this
 */
proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.prototype.setMessageposted = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 membersWhoPosted = 6;
 * @return {number}
 */
proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.prototype.getMemberswhoposted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics} returns this
 */
proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.prototype.setMemberswhoposted = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 membersWhoViewed = 7;
 * @return {number}
 */
proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.prototype.getMemberswhoviewed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics} returns this
 */
proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.prototype.setMemberswhoviewed = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 reactionAdded = 8;
 * @return {number}
 */
proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.prototype.getReactionadded = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics} returns this
 */
proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.prototype.setReactionadded = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 membersWhoReacted = 9;
 * @return {number}
 */
proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.prototype.getMemberswhoreacted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics} returns this
 */
proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.prototype.setMemberswhoreacted = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional double changeInMembersPosted = 10;
 * @return {number}
 */
proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.prototype.getChangeinmembersposted = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics} returns this
 */
proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics.prototype.setChangeinmembersposted = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional GroupAnalytics analytics = 1;
 * @return {?proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics}
 */
proto.treeleaf.anydone.entities.InboxGroup.prototype.getAnalytics = function() {
  return /** @type{?proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics, 1));
};


/**
 * @param {?proto.treeleaf.anydone.entities.InboxGroup.GroupAnalytics|undefined} value
 * @return {!proto.treeleaf.anydone.entities.InboxGroup} returns this
*/
proto.treeleaf.anydone.entities.InboxGroup.prototype.setAnalytics = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.InboxGroup} returns this
 */
proto.treeleaf.anydone.entities.InboxGroup.prototype.clearAnalytics = function() {
  return this.setAnalytics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.InboxGroup.prototype.hasAnalytics = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string groupId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.InboxGroup.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.InboxGroup} returns this
 */
proto.treeleaf.anydone.entities.InboxGroup.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string groupName = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.InboxGroup.prototype.getGroupname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.InboxGroup} returns this
 */
proto.treeleaf.anydone.entities.InboxGroup.prototype.setGroupname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 createdAt = 4;
 * @return {number}
 */
proto.treeleaf.anydone.entities.InboxGroup.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.InboxGroup} returns this
 */
proto.treeleaf.anydone.entities.InboxGroup.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.treeleaf.anydone.entities.WorkspaceMembers.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.WorkspaceMembers.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.WorkspaceMembers} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.WorkspaceMembers.toObject = function(includeInstance, msg) {
  var f, obj = {
    profile: (f = msg.getProfile()) && proto.treeleaf.anydone.entities.EmployeeProfile.toObject(includeInstance, f),
    analytics: (f = msg.getAnalytics()) && proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.WorkspaceMembers}
 */
proto.treeleaf.anydone.entities.WorkspaceMembers.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.WorkspaceMembers;
  return proto.treeleaf.anydone.entities.WorkspaceMembers.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.WorkspaceMembers} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.WorkspaceMembers}
 */
proto.treeleaf.anydone.entities.WorkspaceMembers.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.EmployeeProfile;
      reader.readMessage(value,proto.treeleaf.anydone.entities.EmployeeProfile.deserializeBinaryFromReader);
      msg.setProfile(value);
      break;
    case 3:
      var value = new proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics;
      reader.readMessage(value,proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics.deserializeBinaryFromReader);
      msg.setAnalytics(value);
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
proto.treeleaf.anydone.entities.WorkspaceMembers.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.WorkspaceMembers.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.WorkspaceMembers} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.WorkspaceMembers.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.EmployeeProfile.serializeBinaryToWriter
    );
  }
  f = message.getAnalytics();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics.serializeBinaryToWriter
    );
  }
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
proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageposted: jspb.Message.getFieldWithDefault(msg, 1, 0),
    messagepostedingroups: jspb.Message.getFieldWithDefault(msg, 2, 0),
    reactionadded: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics}
 */
proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics;
  return proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics}
 */
proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMessageposted(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMessagepostedingroups(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReactionadded(value);
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
proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageposted();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMessagepostedingroups();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getReactionadded();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional int64 messagePosted = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics.prototype.getMessageposted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics} returns this
 */
proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics.prototype.setMessageposted = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 messagePostedInGroups = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics.prototype.getMessagepostedingroups = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics} returns this
 */
proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics.prototype.setMessagepostedingroups = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 reactionAdded = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics.prototype.getReactionadded = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics} returns this
 */
proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics.prototype.setReactionadded = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional EmployeeProfile profile = 1;
 * @return {?proto.treeleaf.anydone.entities.EmployeeProfile}
 */
proto.treeleaf.anydone.entities.WorkspaceMembers.prototype.getProfile = function() {
  return /** @type{?proto.treeleaf.anydone.entities.EmployeeProfile} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.EmployeeProfile, 1));
};


/**
 * @param {?proto.treeleaf.anydone.entities.EmployeeProfile|undefined} value
 * @return {!proto.treeleaf.anydone.entities.WorkspaceMembers} returns this
*/
proto.treeleaf.anydone.entities.WorkspaceMembers.prototype.setProfile = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.WorkspaceMembers} returns this
 */
proto.treeleaf.anydone.entities.WorkspaceMembers.prototype.clearProfile = function() {
  return this.setProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.WorkspaceMembers.prototype.hasProfile = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Analytics analytics = 3;
 * @return {?proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics}
 */
proto.treeleaf.anydone.entities.WorkspaceMembers.prototype.getAnalytics = function() {
  return /** @type{?proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics, 3));
};


/**
 * @param {?proto.treeleaf.anydone.entities.WorkspaceMembers.Analytics|undefined} value
 * @return {!proto.treeleaf.anydone.entities.WorkspaceMembers} returns this
*/
proto.treeleaf.anydone.entities.WorkspaceMembers.prototype.setAnalytics = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.WorkspaceMembers} returns this
 */
proto.treeleaf.anydone.entities.WorkspaceMembers.prototype.clearAnalytics = function() {
  return this.setAnalytics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.WorkspaceMembers.prototype.hasAnalytics = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.treeleaf.anydone.entities.MessageActorAnalytics.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.MessageActorAnalytics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.MessageActorAnalytics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.MessageActorAnalytics.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicgroup: jspb.Message.getFieldWithDefault(msg, 1, 0),
    privategorup: jspb.Message.getFieldWithDefault(msg, 2, 0),
    dm: jspb.Message.getFieldWithDefault(msg, 3, 0),
    publicgrouppercent: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    privategrouppercent: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    dmpercent: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 7, 0),
    count: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.treeleaf.anydone.entities.MessageActorAnalytics}
 */
proto.treeleaf.anydone.entities.MessageActorAnalytics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.MessageActorAnalytics;
  return proto.treeleaf.anydone.entities.MessageActorAnalytics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.MessageActorAnalytics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.MessageActorAnalytics}
 */
proto.treeleaf.anydone.entities.MessageActorAnalytics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPublicgroup(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPrivategorup(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDm(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPublicgrouppercent(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrivategrouppercent(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDmpercent(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCount(value);
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
proto.treeleaf.anydone.entities.MessageActorAnalytics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.MessageActorAnalytics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.MessageActorAnalytics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.MessageActorAnalytics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicgroup();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPrivategorup();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getDm();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPublicgrouppercent();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getPrivategrouppercent();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getDmpercent();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
};


/**
 * optional int64 publicGroup = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.MessageActorAnalytics.prototype.getPublicgroup = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.MessageActorAnalytics} returns this
 */
proto.treeleaf.anydone.entities.MessageActorAnalytics.prototype.setPublicgroup = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 privateGorup = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.MessageActorAnalytics.prototype.getPrivategorup = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.MessageActorAnalytics} returns this
 */
proto.treeleaf.anydone.entities.MessageActorAnalytics.prototype.setPrivategorup = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 dm = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.MessageActorAnalytics.prototype.getDm = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.MessageActorAnalytics} returns this
 */
proto.treeleaf.anydone.entities.MessageActorAnalytics.prototype.setDm = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional double publicGroupPercent = 4;
 * @return {number}
 */
proto.treeleaf.anydone.entities.MessageActorAnalytics.prototype.getPublicgrouppercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.MessageActorAnalytics} returns this
 */
proto.treeleaf.anydone.entities.MessageActorAnalytics.prototype.setPublicgrouppercent = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double privateGroupPercent = 5;
 * @return {number}
 */
proto.treeleaf.anydone.entities.MessageActorAnalytics.prototype.getPrivategrouppercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.MessageActorAnalytics} returns this
 */
proto.treeleaf.anydone.entities.MessageActorAnalytics.prototype.setPrivategrouppercent = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double dmPercent = 6;
 * @return {number}
 */
proto.treeleaf.anydone.entities.MessageActorAnalytics.prototype.getDmpercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.MessageActorAnalytics} returns this
 */
proto.treeleaf.anydone.entities.MessageActorAnalytics.prototype.setDmpercent = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional int64 timestamp = 7;
 * @return {number}
 */
proto.treeleaf.anydone.entities.MessageActorAnalytics.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.MessageActorAnalytics} returns this
 */
proto.treeleaf.anydone.entities.MessageActorAnalytics.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 count = 8;
 * @return {number}
 */
proto.treeleaf.anydone.entities.MessageActorAnalytics.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.MessageActorAnalytics} returns this
 */
proto.treeleaf.anydone.entities.MessageActorAnalytics.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
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
proto.treeleaf.anydone.entities.UsageReport.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.UsageReport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.UsageReport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.UsageReport.toObject = function(includeInstance, msg) {
  var f, obj = {
    count: jspb.Message.getFieldWithDefault(msg, 1, 0),
    percent: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    isincremented: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.treeleaf.anydone.entities.UsageReport}
 */
proto.treeleaf.anydone.entities.UsageReport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.UsageReport;
  return proto.treeleaf.anydone.entities.UsageReport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.UsageReport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.UsageReport}
 */
proto.treeleaf.anydone.entities.UsageReport.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPercent(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsincremented(value);
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
proto.treeleaf.anydone.entities.UsageReport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.UsageReport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.UsageReport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.UsageReport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPercent();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getIsincremented();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional int64 count = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.UsageReport.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.UsageReport} returns this
 */
proto.treeleaf.anydone.entities.UsageReport.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional double percent = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.UsageReport.prototype.getPercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.UsageReport} returns this
 */
proto.treeleaf.anydone.entities.UsageReport.prototype.setPercent = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional bool isIncremented = 3;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.UsageReport.prototype.getIsincremented = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.UsageReport} returns this
 */
proto.treeleaf.anydone.entities.UsageReport.prototype.setIsincremented = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.ActiveMembersAnalytics.repeatedFields_ = [5];



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
proto.treeleaf.anydone.entities.ActiveMembersAnalytics.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.ActiveMembersAnalytics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.ActiveMembersAnalytics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ActiveMembersAnalytics.toObject = function(includeInstance, msg) {
  var f, obj = {
    activemembers: jspb.Message.getFieldWithDefault(msg, 1, 0),
    msgpostedmembers: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0),
    accountid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    accountidsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.treeleaf.anydone.entities.ActiveMembersAnalytics}
 */
proto.treeleaf.anydone.entities.ActiveMembersAnalytics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.ActiveMembersAnalytics;
  return proto.treeleaf.anydone.entities.ActiveMembersAnalytics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.ActiveMembersAnalytics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.ActiveMembersAnalytics}
 */
proto.treeleaf.anydone.entities.ActiveMembersAnalytics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setActivemembers(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMsgpostedmembers(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addAccountids(value);
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
proto.treeleaf.anydone.entities.ActiveMembersAnalytics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.ActiveMembersAnalytics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.ActiveMembersAnalytics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ActiveMembersAnalytics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActivemembers();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMsgpostedmembers();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getAccountid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAccountidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional int64 activeMembers = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ActiveMembersAnalytics.prototype.getActivemembers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ActiveMembersAnalytics} returns this
 */
proto.treeleaf.anydone.entities.ActiveMembersAnalytics.prototype.setActivemembers = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 msgPostedMembers = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ActiveMembersAnalytics.prototype.getMsgpostedmembers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ActiveMembersAnalytics} returns this
 */
proto.treeleaf.anydone.entities.ActiveMembersAnalytics.prototype.setMsgpostedmembers = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ActiveMembersAnalytics.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ActiveMembersAnalytics} returns this
 */
proto.treeleaf.anydone.entities.ActiveMembersAnalytics.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string accountId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ActiveMembersAnalytics.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ActiveMembersAnalytics} returns this
 */
proto.treeleaf.anydone.entities.ActiveMembersAnalytics.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string accountIds = 5;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.ActiveMembersAnalytics.prototype.getAccountidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.ActiveMembersAnalytics} returns this
 */
proto.treeleaf.anydone.entities.ActiveMembersAnalytics.prototype.setAccountidsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.ActiveMembersAnalytics} returns this
 */
proto.treeleaf.anydone.entities.ActiveMembersAnalytics.prototype.addAccountids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.ActiveMembersAnalytics} returns this
 */
proto.treeleaf.anydone.entities.ActiveMembersAnalytics.prototype.clearAccountidsList = function() {
  return this.setAccountidsList([]);
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
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.toObject = function(includeInstance, msg) {
  var f, obj = {
    messagesent: (f = msg.getMessagesent()) && proto.treeleaf.anydone.entities.UsageReport.toObject(includeInstance, f),
    appintegrated: (f = msg.getAppintegrated()) && proto.treeleaf.anydone.entities.UsageReport.toObject(includeInstance, f),
    totalmembers: (f = msg.getTotalmembers()) && proto.treeleaf.anydone.entities.UsageReport.toObject(includeInstance, f),
    claimedmembers: (f = msg.getClaimedmembers()) && proto.treeleaf.anydone.entities.UsageReport.toObject(includeInstance, f),
    weeklyactivemember: (f = msg.getWeeklyactivemember()) && proto.treeleaf.anydone.entities.UsageReport.toObject(includeInstance, f),
    filestorageused: (f = msg.getFilestorageused()) && proto.treeleaf.anydone.entities.UsageReport.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics}
 */
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics;
  return proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics}
 */
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.UsageReport;
      reader.readMessage(value,proto.treeleaf.anydone.entities.UsageReport.deserializeBinaryFromReader);
      msg.setMessagesent(value);
      break;
    case 2:
      var value = new proto.treeleaf.anydone.entities.UsageReport;
      reader.readMessage(value,proto.treeleaf.anydone.entities.UsageReport.deserializeBinaryFromReader);
      msg.setAppintegrated(value);
      break;
    case 3:
      var value = new proto.treeleaf.anydone.entities.UsageReport;
      reader.readMessage(value,proto.treeleaf.anydone.entities.UsageReport.deserializeBinaryFromReader);
      msg.setTotalmembers(value);
      break;
    case 4:
      var value = new proto.treeleaf.anydone.entities.UsageReport;
      reader.readMessage(value,proto.treeleaf.anydone.entities.UsageReport.deserializeBinaryFromReader);
      msg.setClaimedmembers(value);
      break;
    case 5:
      var value = new proto.treeleaf.anydone.entities.UsageReport;
      reader.readMessage(value,proto.treeleaf.anydone.entities.UsageReport.deserializeBinaryFromReader);
      msg.setWeeklyactivemember(value);
      break;
    case 6:
      var value = new proto.treeleaf.anydone.entities.UsageReport;
      reader.readMessage(value,proto.treeleaf.anydone.entities.UsageReport.deserializeBinaryFromReader);
      msg.setFilestorageused(value);
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
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessagesent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.UsageReport.serializeBinaryToWriter
    );
  }
  f = message.getAppintegrated();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.treeleaf.anydone.entities.UsageReport.serializeBinaryToWriter
    );
  }
  f = message.getTotalmembers();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.treeleaf.anydone.entities.UsageReport.serializeBinaryToWriter
    );
  }
  f = message.getClaimedmembers();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.treeleaf.anydone.entities.UsageReport.serializeBinaryToWriter
    );
  }
  f = message.getWeeklyactivemember();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.treeleaf.anydone.entities.UsageReport.serializeBinaryToWriter
    );
  }
  f = message.getFilestorageused();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.treeleaf.anydone.entities.UsageReport.serializeBinaryToWriter
    );
  }
};


/**
 * optional UsageReport messageSent = 1;
 * @return {?proto.treeleaf.anydone.entities.UsageReport}
 */
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.prototype.getMessagesent = function() {
  return /** @type{?proto.treeleaf.anydone.entities.UsageReport} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.UsageReport, 1));
};


/**
 * @param {?proto.treeleaf.anydone.entities.UsageReport|undefined} value
 * @return {!proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics} returns this
*/
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.prototype.setMessagesent = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics} returns this
 */
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.prototype.clearMessagesent = function() {
  return this.setMessagesent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.prototype.hasMessagesent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional UsageReport appIntegrated = 2;
 * @return {?proto.treeleaf.anydone.entities.UsageReport}
 */
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.prototype.getAppintegrated = function() {
  return /** @type{?proto.treeleaf.anydone.entities.UsageReport} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.UsageReport, 2));
};


/**
 * @param {?proto.treeleaf.anydone.entities.UsageReport|undefined} value
 * @return {!proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics} returns this
*/
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.prototype.setAppintegrated = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics} returns this
 */
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.prototype.clearAppintegrated = function() {
  return this.setAppintegrated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.prototype.hasAppintegrated = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional UsageReport totalMembers = 3;
 * @return {?proto.treeleaf.anydone.entities.UsageReport}
 */
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.prototype.getTotalmembers = function() {
  return /** @type{?proto.treeleaf.anydone.entities.UsageReport} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.UsageReport, 3));
};


/**
 * @param {?proto.treeleaf.anydone.entities.UsageReport|undefined} value
 * @return {!proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics} returns this
*/
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.prototype.setTotalmembers = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics} returns this
 */
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.prototype.clearTotalmembers = function() {
  return this.setTotalmembers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.prototype.hasTotalmembers = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional UsageReport claimedMembers = 4;
 * @return {?proto.treeleaf.anydone.entities.UsageReport}
 */
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.prototype.getClaimedmembers = function() {
  return /** @type{?proto.treeleaf.anydone.entities.UsageReport} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.UsageReport, 4));
};


/**
 * @param {?proto.treeleaf.anydone.entities.UsageReport|undefined} value
 * @return {!proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics} returns this
*/
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.prototype.setClaimedmembers = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics} returns this
 */
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.prototype.clearClaimedmembers = function() {
  return this.setClaimedmembers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.prototype.hasClaimedmembers = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional UsageReport weeklyActiveMember = 5;
 * @return {?proto.treeleaf.anydone.entities.UsageReport}
 */
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.prototype.getWeeklyactivemember = function() {
  return /** @type{?proto.treeleaf.anydone.entities.UsageReport} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.UsageReport, 5));
};


/**
 * @param {?proto.treeleaf.anydone.entities.UsageReport|undefined} value
 * @return {!proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics} returns this
*/
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.prototype.setWeeklyactivemember = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics} returns this
 */
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.prototype.clearWeeklyactivemember = function() {
  return this.setWeeklyactivemember(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.prototype.hasWeeklyactivemember = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional UsageReport fileStorageUsed = 6;
 * @return {?proto.treeleaf.anydone.entities.UsageReport}
 */
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.prototype.getFilestorageused = function() {
  return /** @type{?proto.treeleaf.anydone.entities.UsageReport} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.UsageReport, 6));
};


/**
 * @param {?proto.treeleaf.anydone.entities.UsageReport|undefined} value
 * @return {!proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics} returns this
*/
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.prototype.setFilestorageused = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics} returns this
 */
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.prototype.clearFilestorageused = function() {
  return this.setFilestorageused(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.WorkspaceOverviewAnalytics.prototype.hasFilestorageused = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.LocationType = {
  UNKNOWN_LOCATION_TYPE: 0,
  HOME: 1,
  OFFICE: 2
};

/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.ThirdPartySource = {
  UNKNOWN_THIRD_PARTY_SOURCE: 0,
  FACEBOOK_THIRD_PARTY_SOURCE: 1,
  VIBER_THIRD_PARTY_SOURCE: 2,
  SERVICE_PROVIDER_SOURCE: 3,
  SLACK_THIRD_PARTY_SOURCE: 4,
  MAIL_THIRD_PARTY_SOURCE: 5,
  WEB_SDK_SOURCE: 6,
  IOS_SDK_SOURCE: 7,
  ANDROID_SDK_SOURCE: 8,
  WHATSAPP_THIRD_PARTY_SOURCE: 9,
  OUTLOOK_THIRD_PARTY_SOURCE: 10,
  GOOGLE_BUSINESS_THIRD_PARTY_SOURCE: 11,
  INSTAGRAM_THIRD_PARTY_SOURCE: 12
};

/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.DeviceTypeFilter = {
  UNKNOWN_DEVICE_TYPE_FILTER: 0,
  ANDROID_DEVICE_TYPE: 2,
  IOS_DEVICE_TYPE: 3,
  WEB_DEVICE_TYPE: 4,
  IOS_WEB_DEVICE_TYPE: 5,
  ANDROID_WEB_DEVICE_TYPE: 6,
  ALL: 7
};

/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.CustomerAccountType = {
  UNKNOWN_CUSTOMER_ACCOUNT_TYPE: 0,
  LEAD: 1,
  USER: 2
};

goog.object.extend(exports, proto.treeleaf.anydone.entities);
