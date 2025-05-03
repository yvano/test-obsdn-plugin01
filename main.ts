import {  Editor, MarkdownView, Menu, Notice, Plugin } from 'obsidian';

// Remember to rename these classes and interfaces!


export default class HelloWorldPlugin extends Plugin {
	onload(): Promise<void> | void {
		this.addRibbonIcon('dice', 'Greet', (event) => {
			new Notice('Hello, world!');

			const menu = new Menu();

			menu.addItem((item) =>
				item
				.setTitle('Copy')
				.setIcon('documents')
				.onClick(() => {
					new Notice('Copied');
				})
			);

			menu.addItem((item) =>
				item
				.setTitle('Paste')
				.setIcon('paste')
				.onClick(() => {
					new Notice('Pasted');
				})
			);

			menu.showAtMouseEvent(event);
		});

		this.addCommand({
			id: 'print-greeting-to-console',
			name: 'Print greeting to console',
			callback: () => {
			  console.log('Hey, you!');
			},
		});

		this.addCommand({
			id: 'example-command',
			name: 'Example command',
			editorCallback: (editor: Editor, view: MarkdownView) => {
			  const sel = editor.getSelection()
		  
			  console.log(`You have selected: ${sel}`);
			},
		  });



		  /**/

		  this.registerEvent(
			this.app.workspace.on('file-menu', (menu, file) => {
			  menu.addItem((item) => {
				item
				  .setTitle('Print file path 👈')
				  .setIcon('document')
				  .onClick(async () => {
					new Notice(file.path);
				  });
			  });
			})
		  );

		  /* */

		  /* this.registerEvent(
			this.app.workspace.on("editor-menu", (menu, editor, view) => {
			  menu.addItem((item) => {
				item
				  .setTitle('Print file path 👈')
				  .setIcon('document')
				  .onClick(async () => {
					new Notice(view.file.path);
				  });
			  });
			})
		  ); */
	}
}

	
