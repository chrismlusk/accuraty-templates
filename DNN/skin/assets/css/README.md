# CSS

The `css/` folder contains the compiled CSS files used in the project skin. **These files should never be edited directly.** To make changes, go to the `sass/` folder, edit the source files, and recompile the code. 

## Source map

It's best practice to include a source map — the file with the `.map` extension — in this directory. Source maps are exist so that browser debuggers can display compiled CSS in a readable format that links to the original source file, not the generated CSS file.

For example, if you were using the debugger to inspect an element and did not have a source map, the debugger panel would link the styles to the `main.css` file. However, since we do not edit the generated CSS file, this is not helpful. With a source map, though, the debugger would point you to `../sass/example/_example.scss` — the precise file you would need to edit.
