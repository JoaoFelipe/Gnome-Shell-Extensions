const Layout = imports.ui.layout;


function DisableHotCornerExtension() {
    this._init()
}


DisableHotCornerExtension.prototype = {
    _init: function() {
        this._entered = null;
        this._ripple = null;
    },

    enable: function() {
        this._entered = Layout.HotCorner.prototype._onCornerEntered;
        this._ripple = Layout.HotCorner.prototype.rippleAnimation;
        Layout.HotCorner.prototype._onCornerEntered = null;
        Layout.HotCorner.prototype.rippleAnimation = null;
    },

    disable: function() {
        if (this._entered != null) {
             Layout.HotCorner.prototype._onCornerEntered = this._entered;
        }
        if (this._ripple != null) {
             Layout.HotCorner.prototype.rippleAnimation = this._ripple;
        }
        this._entered = null;
        this._ripple = null;
    }
};


function init() {
    return new DisableHotCornerExtension(); 
}
