/* simple */
import { sayBye, sayHi } from "./export.js";

sayHi("John");
sayBye("John");

/* `import*` */
import * as say from "./export.js";

say.sayHi("John");
say.sayBye("John");

/* import as */
import { sayBye as bye, sayHi as hi } from "./export.js";

hi("John");
bye("John");

/* `the import() expression */
