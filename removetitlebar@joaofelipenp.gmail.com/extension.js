/**
 * RemoveTitleBar extension
 *
 * This extension removes the original AppMenuButton from the
 * gnome-shell panel.
 *
 */

const Main = imports.ui.main;

function init() {
}

function enable() {
	Main.panel._leftBox.remove_actor(Main.panel._appMenu.actor);

}

function disable() {

    let children = Main.panel._rightBox.get_children();
	Main.panel._leftBox.insert_actor(Main.panel._appMenu.actor, children.length-1);

}
