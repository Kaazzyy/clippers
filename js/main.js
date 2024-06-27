showMenu(e) 
    if (e ??= !this.app.showMenu, this.app.showDeathScreen) return !1;
    if (this.app.showMenu = e, this.actions.stopMovement(e), e) this.events.$emit("menu-opened");
    else {
        let t = document.activeElement;
        t?.id !== "chatbox-input" && l.view.focus(), this.stopMovePackets = 0, v()
    }
    return e