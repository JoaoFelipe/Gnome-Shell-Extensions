const Panel = imports.ui.panel;
const StatusIconDispatcher = imports.ui.statusIconDispatcher;


function init() {

     //StatusIconDispatcher.STANDARD_TRAY_ICON_IMPLEMENTATIONS['dojotools'] = 'dojotools';
}

function enable() {
    StatusIconDispatcher.STANDARD_TRAY_ICON_IMPLEMENTATIONS['dojotools'] = 'dojotools';
}

function disable() {
    delete StatusIconDispatcher.STANDARD_TRAY_ICON_IMPLEMENTATIONS['dojotools'];
}

