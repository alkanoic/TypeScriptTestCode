const watch = process.env.WATCH === 'true';
const glob = require('glob')
const entryPoints = glob.sync('./typescript/**/*.ts')
const { argv } = require('process')

console.log( process.env.WATCH, watch );
require('esbuild').build({
  // entryPoints: entryPoints,
  entryPoints: ["./typescript/jqtest.ts"],
  bundle: true,
  // outdir: "wwwroot/js/",
  outfile: "wwwroot/js/bundle.js",
  // define: {
  //   "process.env.NODE_ENV": '"development"'
  // },
  // loader: {
  //   '.svg': 'dataurl'
  // },
  target: "es2017",
  platform: "neutral",
  minify: false,
  sourcemap: argv[2] !== 'production',
  watch: false,
  // keepNames: true,
  treeShaking: false,
  // external: ["jquery"]
}).catch(() => process.exit(1))
