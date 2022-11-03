const glob = require('glob')
const entryPoints = glob.sync('./typescript/*.ts')
const { argv } = require('process')

require('esbuild').build({
  platform: "browser",
  entryPoints: entryPoints,
  // entryPoints: ["./typescript/importtest.ts"],
  bundle: true,
  outdir: "wwwroot/js/",
  // outfile: "wwwroot/js/bundle.js",
  // define: {
  //   "process.env.NODE_ENV": '"development"'
  // },
  // loader: {
  //   '.svg': 'dataurl'
  // },
  target: "es2020",
  minify: argv[2] == 'production',
  sourcemap: argv[2] !== 'production',
  watch: argv[2] !== 'production',
  // keepNames: true,
  // treeShaking: false,
  // external: ["jquery"]
}).catch(() => process.exit(1))
