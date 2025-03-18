import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import { minify } from "uglify-js"; // Import uglify-js directly

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Custom minify function using uglify-js
const customUglifyJsMinify = (data, options) => {
  const minified = minify(data.code, {
    compress: true,
    mangle: true,
    sourceMap: false, // Disable source maps for simplicity
    ...options, // Allow overriding if needed
  });
  return {
    code: minified.code,
    map: null, // No source map
    extractedComments: [],
  };
};

export default {
  entry: "./src/main.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    static: "./dist",
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
        resourceQuery: { not: [/\?url/] },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            configFile: path.resolve(__dirname, "babel.config.js"),
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/i,
        type: "asset/resource",
        resourceQuery: /\?url/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        minify: customUglifyJsMinify, // Use our custom function
        extractComments: false, // Disable comment extraction
        parallel: true, // Keep multi-threading
      }),
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    fallback: {
      fs: false,
      path: false,
      os: false,
      stream: false,
      constants: false,
      child_process: false,
      worker_threads: false,
      http: false,
      https: false,
      vm: false,
      zlib: false,
      crypto: false,
      querystring: false,
      util: path.resolve(__dirname, "node_modules/util/"),
      url: path.resolve(__dirname, "node_modules/url/"),
      assert: path.resolve(__dirname, "node_modules/assert/"),
      buffer: path.resolve(__dirname, "node_modules/buffer/"),
      module: false,
    },
  },
};
