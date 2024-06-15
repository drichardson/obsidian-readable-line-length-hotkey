import { Editor, MarkdownView, Plugin } from 'obsidian';

export default class ToggleReadableLineLengthPlugin extends Plugin {
	async onload() {
		this.addCommand({
			id: 'toggle-readable-line-length-command',
			name: 'Toggle Readable line length',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				console.log("Toggle Readable line length");
				// @ts-ignore
				const optionEnabled = this.app.vault.getConfig("readableLineLength");
				// @ts-ignore
				this.app.vault.setConfig("readableLineLength", !optionEnabled);
			}
		});
	}
}
