const HtmlWebpackPlugin = require("html-webpack-plugin");
 
module.exports = {
 entry: "./src/index",
 mode: "development",
 devServer: {
   port: 3000,
 },
 module: {
   rules: [
     {
       test: /\.(js|jsx)?$/,
       exclude: /node_modules/,
       use: [
         {
           loader: "babel-loader",
           options: {
             presets: ["@babel/preset-env", "@babel/preset-react"],
           },
         },
       ],
     },
     {
       test: /\.css$/i,
       use: ["style-loader", "css-loader"],
     },
   ],
 },
 plugins: [
   new HtmlWebpackPlugin({
     template: "./public/index.html",
     favicon: "./public/favicon.ico",
     manifest: "./public/manifest.json",
   }),
 ],
 resolve: {
   extensions: [".js", ".jsx"],
 },
 target: "web",
};