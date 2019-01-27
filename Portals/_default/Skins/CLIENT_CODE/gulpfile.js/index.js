//
// gulpfile.js
// ===========
//
// Rather than manage one giant config file, each task has its own file
// in `gulpfile.js/tasks`. Any files in that directory get required below.
//
// 1. Require all tasks in gulpfile.js/tasks, including any subfolders
// ----------------------------------------------------------------------------

const requireDir = require('require-dir');

requireDir('./tasks', { recurse: true }); // 1
