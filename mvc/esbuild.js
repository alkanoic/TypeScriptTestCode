const watch = process.env.WATCH === 'true';
const glob = require('glob')
const entryPoints = glob.sync('./typescript/**/*.ts')
const { argv } = require('process')

console.log( process.env.WATCH, watch );
require('esbuild').build({
  // entryPoints: entryPoints,
  entryPoints: ["./typescript/index.ts"],
  bundle: true,
  // outdir: "wwwroot/js/",
  outfile: "wwwroot/js/bundle.js",
  define: {
    "process.env.NODE_ENV": '"development"'
  },
  // loader: {
  //   '.svg': 'dataurl'
  // },
  platform: "browser",
  minify: argv[2] === 'production',
  sourcemap: true,
  watch,
  // keepNames: true,
  treeShaking: false,
  define: { 'process.api': 'dummy_process_cwd' },
  inject: ["./typescript/inject/inject_prod.ts"],
  external: ["jquery"]
}).catch(() => process.exit(1))
