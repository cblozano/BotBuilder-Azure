"use strict";
exports.developmentConnectionString = 'UseDevelopmentStorage=true';
exports.maxDataLength = 65000;
exports.Fields = {
    UserDataField: 'userData',
    ConversationDataField: 'conversationData',
    PrivateConversationDataField: 'privateConversationData'
};
exports.tableName = 'BotStore';
exports.hash = 'Hash';
exports.base64 = 'base64';
exports.ErrorCodes = {
    MessageSize: 'EMSGSIZE',
    BadMessage: 'EBADMSG'
};
