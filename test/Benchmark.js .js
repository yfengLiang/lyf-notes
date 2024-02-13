const Benchmark = require("benchmark");

const suite = new Benchmark.Suite();

/* 5. 最长回文子串

给你一个字符串 s，找到 s 中最长的回文子串。

如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

};

// const p = new Table({
//   columns: [
//     { name: "case", title: "测试用例" },
//     { name: "hz", title: "执行次数/秒" },
//     { name: "rme", title: "相对误差" },
//     { name: "sampled", title: "总执行次数" },
//     { name: "conclusion", title: "结论" },
//   ],
//   sort: (r1, r2) => Number(r1.hzs) - Number(r2.hzs),
//   disabledColumns: ["hzs"],
// });

suite
  .add("longestPalindrome", function () {
    longestPalindrome("babad");
  })
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run({ async: true });
