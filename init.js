var config = require('/config.json');

var sso = function (options) {
    var path = '/_system/config/repository/identity/SAMLSSO/' + options.issuer64,
        server = require('store').server,
        registry = server.systemRegistry(-1); //TODO: fix this
    registry.put(path, {
        properties: {'Issuer': options.issuer, 'SAMLSSOAssertionConsumerURL': options.consumerUrl, 'doSignAssertions': options.doSign, 'doSingleLogout': options.singleLogout, 'useFullyQualifiedUsername': options.useFQUsername}
    });
};

sso({'issuer': 'dash1',
    'consumerUrl': config.ssoConfiguration.appAcs,
    'doSign': 'true',
    'singleLogout': 'true',
    'useFQUsername': 'true',
    'issuer64': ''});

