const Panel = imports.ui.panel;

function main() {

    Panel.HotCorner.prototype._onCornerEntered = function() {
        return false;
    };
  
}

