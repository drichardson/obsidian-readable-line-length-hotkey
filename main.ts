import { Editor, MarkdownView, Plugin } from "obsidian";

export default class ToggleReadableLineLengthPlugin extends Plugin {
	async onload() {
		this.addCommand({
			id: "flip-readable-line-length-setting",
			name: "Toggle",
			// Obsidian developer docs suggest not setting hotkeys, but this is the entire point of this plugin, so ignoring that advice.
			// https://docs.obsidian.md/Plugins/User+interface/Commands#Hot%20keys
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "e" }],
			callback: () => {
				const optionEnabled =
					// @ts-ignore
					this.app.vault.getConfig("readableLineLength");
				// @ts-ignore
				this.app.vault.setConfig("readableLineLength", !optionEnabled);
			},
		});
	}
}
