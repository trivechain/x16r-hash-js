// Don't export bindings unless there is fs access.
// Intended to disable x16r import in browser where extensions are unavailable.
if (require('fs').accessSync) {
    // console.log('Exporting x16r bindings.');
    module.exports = require('bindings')('nodex16r.node');
} else {
    // console.log('Could not export x16r bindings (no fs access).');
}
